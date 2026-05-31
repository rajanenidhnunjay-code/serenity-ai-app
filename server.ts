import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import { GoogleGenAI } from "@google/genai";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3000;

app.use(express.json());

// Lazy-initialize Gemini safely to prevent crash on startup if key is missing
let aiClient: GoogleGenAI | null = null;
function getGeminiClient() {
  const key = process.env.GEMINI_API_KEY;
  if (!key || key === "MY_GEMINI_API_KEY" || key.trim() === "") {
    return null;
  }
  if (!aiClient) {
    aiClient = new GoogleGenAI({
      apiKey: key,
      httpOptions: {
        headers: {
          'User-Agent': 'aistudio-build',
        }
      }
    });
  }
  return aiClient;
}

// Admission facts for the assistant to ground model responses
const SERENITY_SCHOOL_INFO = `
You are "Serenity Assistant", the official AI Admissions Counselor at Serenity Model High School.
School Name: Serenity Model High School (Where Learning Feels Like Joy)
Curriculum: Telangana SSC (Secondary School Certificate) & IIT / NEET Foundation Coaching
Campuses:
1. Nagaram Campus (Main Branch): Door No 8, 77/4, 77/4, Shilpa Nagar to Shivappa School Rd, beside Bharat Petrol Pump, Shilpa Nagar, Nagaram, Secunderabad, Telangana 500083
2. Rampally Campus: Rampally Main Road, Keesara Mandal, Medchal-Malkajgiri District, Telangana - 501301
ESTD: 2004
Contacts: +91 9121111603, +91 9121111604, +91 9121111605 (Nagaram) / +91 9121111606, +91 9121111607, +91 9121111608 (Rampally)
Emails: nagaramserenity@gmail.com
Office Hours: Monday - Saturday: 8:30 AM - 4:30 PM

Academic Levels Offered:
1. Primary School (Grades 1 to 5) - Focus on building strong foundational skills, experimental and activity-based learning.
2. Middle School (Grades 6 to 8) - Integrated conceptual curriculum, introductory laboratory sciences, and modern languages.
3. High School (Grades 9 & 10) - Advanced rigorous SSC curriculum preparing students for state board exams, scientific research projects, coding, and higher education paths.

Campus Infrastructure:
- Virtual & Smart Classrooms with interactive digital boards.
- Fully equipped science laboratories (Physics, Chemistry, and Biology).
- Advanced Computer Science Lab with AI & Coding curricula.
- Sports Complex with synthetic athletics track, outdoor basketball court, and indoor swimming pool.
- Arts, Drama & Music Studios.

Admissions Process:
- Step 1: Submit Online enquiry / Admission Form.
- Step 2: Download syllabus & prospectus.
- Step 3: Diagnostic academic evaluation interview.
- Step 4: Verification of previous school transfers, birth certificate, and proof of residence.
- Step 5: Secure payment of the admissions fee to finalize seat reservation.

Fees:
- Primary School: Tuition is approximately ₹75,000 per annum.
- Middle School: Tuition is approximately ₹95,000 per annum.
- High School: Tuition is approximately ₹1,20,000 per annum.
- Transport & Cafeteria fees are separate. Available instalments: Quaterly.

Current Career Openings for Faculty:
1. High School Mathematics Teacher (Min 3 yrs experience with SSC curriculum).
2. Primary Grade Science Instructor (Innovative teaching enthusiast).
3. Sports & Physical Education Coach.

Answer all questions regarding Serenity Model High School in an elegant, prestigious, professional, helpful, and hospitable tone. Do not invent details outside of this context. Keep answers clear, structured, and informative. Do NOT use markdown bold asterisks (**) or bullet asterisks (*) under any circumstances; instead use clean CAPITAL letters or plain numbering/dashes.
`;

// API endpoint for chatbot
app.post("/api/chat", async (req, res) => {
  const { message, history } = req.body;
  
  if (!message) {
    return res.status(400).json({ error: "Message is required." });
  }

  const ai = getGeminiClient();
  if (!ai) {
    // Elegant simulated response if API key is not ready yet
    console.log("No valid GEMINI_API_KEY found, using structured fallback counselor response.");
    
    const lowercaseMsg = message.toLowerCase();
    let reply = "Hello! I am the Serenity Admissions Assistant. I am currently running in offline helper mode. How can I assist you with admissions, academics, or facilities today?";
    
    if (lowercaseMsg.includes("admission") || lowercaseMsg.includes("apply") || lowercaseMsg.includes("fee")) {
      reply = "Serenity Model High School admissions for the upcoming academic year are now open! We offer standard SSC-aligned programs for Primary (₹75k/yr), Middle (₹95k/yr), and High School (₹120k/yr). The steps are:\n1. Fill our Online Admission Form\n2. Schedule a diagnostic evaluation\n3. Document verification.\nWould you like me to guide you to the Admissions form or download our digital prospectus?";
    } else if (lowercaseMsg.includes("academic") || lowercaseMsg.includes("middle") || lowercaseMsg.includes("high") || lowercaseMsg.includes("primary")) {
      reply = "Our curriculum strictly aligns with the prestigious SSC State Board frameworks, enhanced with futuristic coding modules, robotics, and advanced scientific lab projects. Our campus is equipped with smart classrooms and state-of-the-art facilities. Feel free to explore our Academics section in the main page!";
    } else if (lowercaseMsg.includes("career") || lowercaseMsg.includes("job") || lowercaseMsg.includes("openings") || lowercaseMsg.includes("teacher")) {
      reply = "We are currently seeking passionate, qualified teachers for High School Mathematics, Primary Grade Science, and a Sports Coach. You can submit your application and upload your CV directly via our Career Portal tab above.";
    } else if (lowercaseMsg.includes("contact") || lowercaseMsg.includes("address") || lowercaseMsg.includes("phone")) {
      reply = "We have two premium campuses: our Main Branch is at Door No 8, 77/4, 77/4, Shilpa Nagar to Shivappa School Rd, beside Bharat Petrol Pump, Shilpa Nagar, Nagaram, Secunderabad, Telangana 500083, and our Expansion Wing on Rampally Main Road, Keesara. Phone us at +91 91211 11603 (Nagaram) or +91 91211 11606 (Rampally), or email nagaramserenity@gmail.com. We are open Monday to Saturday 8:30 AM to 4:30 PM!";
    }
    
    // Add brief timing simulation
    await new Promise(resolve => setTimeout(resolve, 800));
    return res.json({ text: reply, isMock: true });
  }

  try {
    // Use gemini-3.5-flash as the standard fast text model
    const response = await ai.models.generateContent({
      model: "gemini-3.5-flash",
      contents: message,
      config: {
        systemInstruction: SERENITY_SCHOOL_INFO,
        temperature: 0.7,
      },
    });

    const replyText = response.text || "I apologize, but I could not formulate a response at this moment. Is there anything else about Serenity High School I can help with?";
    return res.json({ text: replyText, isMock: false });
  } catch (error: any) {
    console.error("Gemini API Error:", error);
    return res.status(500).json({ error: "Sorry, I had trouble contacting my primary intelligence server. Please try again shortly." });
  }
});

// Serve Vite middleware in development or static assets in production
if (process.env.NODE_ENV !== "production") {
  const { createServer: createViteServer } = await import("vite");
  const vite = await createViteServer({
    server: { middlewareMode: true },
    appType: "spa",
  });
  app.use(vite.middlewares);
} else {
  const distPath = path.join(process.cwd(), "dist");
  app.use(express.static(distPath));
  app.get("*", (req, res) => {
    res.sendFile(path.join(distPath, "index.html"));
  });
}

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Serenity School Server listening on http://0.0.0.0:${PORT}`);
});
