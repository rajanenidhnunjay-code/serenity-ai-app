import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Sparkles, 
  MapPin, 
  Calendar, 
  Briefcase, 
  PhoneCall, 
  ShieldCheck, 
  CheckCircle2, 
  ArrowRight,
  MessageSquare,
  X,
  Send,
  Loader2,
  GraduationCap,
  Download,
  Award,
  BookOpen,
  ArrowUp,
  Play
} from "lucide-react";
import { SchoolSection, ChatMessage } from "./types";

// Import core sections
import Navigation from "./components/Navigation";
import AboutSection from "./components/AboutSection";
import AlumniSection from "./components/AlumniSection";
import AcademicsSection from "./components/AcademicsSection";
import AdmissionsSection from "./components/AdmissionsSection";
import CareerSection from "./components/CareerSection";
import MediaSection from "./components/MediaSection";
import EventsSection from "./components/EventsSection";
import ContactSection from "./components/ContactSection";
import SchoolLogo from "./components/SchoolLogo";
import TourSection from "./components/TourSection";
import SankranthiCelebrationPage from "./components/SankranthiCelebrationPage";
import BonaluCelebrationPage from "./components/BonaluCelebrationPage";
import Sankranthi2025CelebrationPage from "./components/Sankranthi2025CelebrationPage";

// Premium Custom Formatter to render elegant chatbot layouts with ZERO leaking markdown symbols (such as raw asterisks *, **, or ***)
const formatMessageText = (text: string, isUserMessage: boolean) => {
  if (!text) return null;

  // 1. Strip out literal block patterns of asterisks like (***) or (**) or standard leaks
  let cleaned = text
    .replace(/\(\s*\*\*\*\s*\)/g, "") // remove literally (***)
    .replace(/\*\*\*/g, "")           // remove triple asterisks
    .replace(/\s*\*+\s*/g, " ")        // clean stray mid-word or edge asterisks with a clean space
    .replace(/(\r\n|\r)/g, "\n");     // normalize returns

  const paragraphs = cleaned.split("\n");

  return (
    <div className="space-y-2 font-sans text-[12.5px] leading-relaxed">
      {paragraphs.map((paragraph, pIdx) => {
        const trimmed = paragraph.trim();
        if (!trimmed) return <div key={pIdx} className="h-1.5" />;

        // Detect if it is a list bullet line
        const isListItem = trimmed.startsWith("-") || trimmed.startsWith("•") || trimmed.startsWith("●") || trimmed.startsWith("■");
        let content = paragraph;
        if (isListItem) {
          content = trimmed.substring(1).trim();
        }

        // Detect potential title headers (starts with a number like 1., or completely in capitals, or has a colon)
        const isHeading = !isListItem && (trimmed.endsWith(":") || /^[A-Z0-9\s,&-]{5,}:?$/.test(trimmed));

        if (isListItem) {
          return (
            <div key={pIdx} className="flex items-start gap-2 pl-2 my-1">
              <span className={`text-[7px] shrink-0 mt-2 ${isUserMessage ? "text-heritage-gold" : "text-heritage-gold"}`}>
                ■
              </span>
              <span className="font-sans font-normal">{content}</span>
            </div>
          );
        }

        if (isHeading) {
          return (
            <h5 key={pIdx} className="font-serif font-bold text-xs uppercase tracking-wider text-heritage-gold mt-2.5 mb-1 text-left">
              {content}
            </h5>
          );
        }

        return (
          <p key={pIdx} className="font-sans text-left font-normal">
            {content}
          </p>
        );
      })}
    </div>
  );
};

export default function App() {
  const [currentSection, setCurrentSection] = useState<SchoolSection>("home");
  const [academicDivisionTab, setAcademicDivisionTab] = useState<"preprimary" | "primary" | "upperprimary" | "high" | "girlscampus" | "studyhour" | "iitneet">("preprimary");
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [showBackToTop, setShowBackToTop] = useState(false);
  
  // Chatbot State
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [chatInput, setChatInput] = useState("");
  const [chatMessages, setChatMessages] = useState<ChatMessage[]>([
    {
      id: "bot-init",
      sender: "assistant",
      text: "Welcome! I am the Serenity AI Counseling Assistant. Ask me anything about admission structures, fees, curriculum streams, or campus activities today!",
      timestamp: new Date()
    }
  ]);
  const [isBotThinking, setIsBotThinking] = useState(false);
  const chatbotEndRef = useRef<HTMLDivElement | null>(null);

  // Statistics counters animations mock numbers
  const [boardPercentage, setBoardPercentage] = useState(0);
  const [expYears, setExpYears] = useState(0);

  useEffect(() => {
    // Elegant dark mode initialization
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  useEffect(() => {
    // Trigger progressive score counting on hero entrance
    let pctInterval = setInterval(() => {
      setBoardPercentage((prev) => {
        if (prev >= 100) {
          clearInterval(pctInterval);
          return 100;
        }
        return prev + 1;
      });
    }, 15);

    let yearsInterval = setInterval(() => {
      setExpYears((prev) => {
        if (prev >= 22) {
          clearInterval(yearsInterval);
          return 22;
        }
        return prev + 1;
      });
    }, 45);

    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 500);
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      clearInterval(pctInterval);
      clearInterval(yearsInterval);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (isChatOpen) {
      chatbotEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [chatMessages, isChatOpen]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const handleNavigate = (
    section: SchoolSection, 
    academicTab?: "preprimary" | "primary" | "upperprimary" | "high" | "girlscampus" | "studyhour" | "iitneet"
  ) => {
    setCurrentSection(section);
    if (academicTab) {
      setAcademicDivisionTab(academicTab);
    }
  };

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!chatInput.trim()) return;

    const userMsg: ChatMessage = {
      id: `user-${Date.now()}`,
      sender: "user",
      text: chatInput,
      timestamp: new Date()
    };

    setChatMessages((prev) => [...prev, userMsg]);
    const originalQuery = chatInput;
    setChatInput("");
    setIsBotThinking(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: originalQuery, history: [] })
      });

      if (!response.ok) {
        throw new Error("API call error");
      }

      const data = await response.json();
      
      const botMsg: ChatMessage = {
        id: `bot-${Date.now()}`,
        sender: "assistant",
        text: data.text,
        timestamp: new Date()
      };
      setChatMessages((prev) => [...prev, botMsg]);
    } catch (err) {
      console.error(err);
      // Structured helpful fallback responses if network fails or offline helper mode
      const offlineReply = "I have experienced a connection timeout with my primary intelligence database. However, I can state that Serenity High Admissions for our state-board SSC programs (Primary ₹75k, Middle ₹95k, High ₹120k) are fully operational. Please visit our campus block directly or mail us at nagaramserenity@gmail.com!";
      setChatMessages((prev) => [
        ...prev,
        {
          id: `bot-fallback-${Date.now()}`,
          sender: "assistant",
          text: offlineReply,
          timestamp: new Date()
        }
      ]);
    } finally {
      setIsBotThinking(false);
    }
  };

  const jumpToSection = (sectionId: string) => {
    let resolvedSection = sectionId as SchoolSection;
    if (sectionId === "testimonials") {
      resolvedSection = "about";
    }
    setCurrentSection(resolvedSection);
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <div className={`min-h-screen font-sans antialiased selection:bg-heritage-gold selection:text-heritage-dark transition-colors duration-300 ${
      isDarkMode ? "bg-heritage-dark text-heritage-cream/90" : "bg-heritage-cream text-heritage-dark"
    }`}>
      
      {/* Sticky Top Navigation */}
      <Navigation 
        currentSection={currentSection} 
        onNavigate={handleNavigate}
        isDarkMode={isDarkMode}
        toggleDarkMode={toggleDarkMode}
      />

      {/* QUICK FLOATING SIDE ACTION PANEL BUTTONS */}
      <div className="fixed right-6 top-1/2 -translate-y-1/2 z-40 hidden md:flex flex-col gap-3">
        {[
          { label: "Enquire Callback", section: "contact", color: "bg-heritage-emerald text-heritage-cream hover:bg-heritage-emerald/90 border border-heritage-gold/25" },
          { label: "Online Admissions", section: "admissions", color: "bg-heritage-gold hover:bg-heritage-gold-hover text-heritage-dark font-semibold border border-heritage-gold/30" },
          { label: "Faculty Openings", section: "career", color: "bg-heritage-sage text-heritage-dark hover:bg-heritage-sage/90" }
        ].map((act, idx) => (
          <button
            key={idx}
            onClick={() => jumpToSection(act.section)}
            className={`py-3 px-4 rounded-xl text-xs font-bold font-sans tracking-wide shadow-lg transform hover:-translate-x-2 transition duration-200 cursor-pointer ${act.color}`}
          >
            {act.label}
          </button>
        ))}
      </div>

      {/* ROUTED / SELECTED DYNAMIC SPA VIEWS */}
      <div className="flex-1 min-h-[calc(100vh-80px)]">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSection}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
          >
            {currentSection === "home" && (
              <section 
                id="home" 
                className={`relative min-h-screen pt-32 pb-24 md:pt-40 md:pb-32 flex items-center overflow-hidden transition-colors duration-300 ${
                  isDarkMode 
                    ? "bg-heritage-dark" 
                    : "bg-heritage-cream"
                }`}
              >
                {/* Asymmetric architectural grid accents */}
                <div id="grid-pattern-overlay" className="absolute inset-0 bg-[linear-gradient(to_right,#c5a05908_1px,transparent_1px),linear-gradient(to_bottom,#c5a05908_1px,transparent_1px)] bg-[size:6rem_6rem] pointer-events-none" />
                
                {/* Elegant subtle soft radial light representing sunbeams matching the pre-primary theme */}
                <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-heritage-gold/5 rounded-full filter blur-[120px] pointer-events-none" />
                <div className="absolute bottom-1/4 left-10 w-96 h-96 bg-heritage-emerald/10 rounded-full filter blur-[150px] pointer-events-none animate-pulse-slow" />

                <div className="w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
                       {/* Outer Asymmetric Grid container */}
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
                    
                    {/* Hero Left Content Column - Elegant magazine layout (7 cols) */}
                    <div className="lg:col-span-7 space-y-10 text-left">
                      
                      <div className="space-y-4">
                        <div className="inline-flex items-center gap-2.5 px-3 py-1 rounded-sm border border-heritage-gold/30 bg-heritage-emerald/10 text-heritage-gold text-[10px] font-bold tracking-widest uppercase font-mono">
                          <Award className="w-3.5 h-3.5 text-heritage-gold" /> SSC State Board Excellence Honors
                        </div>
                        
                        {/* Elite editorial heading */}
                        <h1 className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-light tracking-tight leading-[1.05] ${
                          isDarkMode ? "text-heritage-cream" : "text-heritage-dark"
                        }`}>
                          Cultivating <span className="italic font-normal text-heritage-gold font-serif">Distinction</span> <br />
                          <span className="font-serif font-normal">&amp; Academic Honor</span>
                        </h1>
                      </div>

                      {/* Asymmetric split quote block */}
                      <div className="flex gap-6 items-stretch pl-1">
                        <div className="w-[1.5px] bg-heritage-gold shrink-0 opacity-80" />
                        <div className="space-y-2">
                          <p className={`text-sm sm:text-base leading-relaxed font-sans max-w-xl ${
                            isDarkMode ? "text-heritage-sage/80" : "text-heritage-emerald/85"
                          }`}>
                            Blending over two decades of prestigious State Board SSC curricular perfection with classical humanities. Our elite campuses form a rare crucible for leadership, systematic discipline, and intellectual heritage.
                          </p>
                          <div className={`text-[10px] uppercase tracking-widest font-mono font-bold ${
                            isDarkMode ? "text-heritage-gold/70" : "text-heritage-gold"
                          }`}>
                            Hyderabad Secondary Education Registry • Estd 2004
                          </div>
                        </div>
                      </div>

                      {/* Styled Luxury Actions Row */}
                      <div className="flex flex-wrap gap-5 pt-3">
                        <button
                          onClick={() => jumpToSection("admissions")}
                          className="px-7 py-4 bg-heritage-gold hover:bg-heritage-gold-hover text-heritage-dark font-semibold rounded-none tracking-widest uppercase text-xs flex items-center gap-2.5 group transition-all duration-300 shadow-md hover:scale-102 active:scale-97 cursor-pointer border border-heritage-gold/50"
                        >
                          Initiate Admission <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                        </button>
                        <button
                          onClick={() => jumpToSection("academics")}
                          className={`px-7 py-4 rounded-none tracking-widest uppercase text-xs flex items-center gap-2.5 transition-all duration-300 hover:scale-102 active:scale-97 cursor-pointer border ${
                            isDarkMode 
                              ? "bg-transparent text-heritage-cream hover:bg-heritage-cream/10 border-heritage-gold/30 hover:border-heritage-gold"
                              : "bg-transparent text-heritage-dark hover:bg-heritage-dark/5 border-heritage-emerald/30 hover:border-heritage-emerald"
                          }`}
                        >
                          Explore Streams <BookOpen className="w-4 h-4" />
                        </button>
                      </div>

                      {/* Editorial statistics ticker */}
                      <div className="grid grid-cols-3 gap-8 pt-10 border-t border-heritage-gold/15 max-w-lg">
                        <div className="space-y-1.5">
                          <span className="text-3xl sm:text-4xl font-serif font-light text-heritage-gold block tracking-tight">
                            {expYears} Years
                          </span>
                          <span className={`text-[9px] font-bold uppercase tracking-widest block font-mono ${
                            isDarkMode ? "text-heritage-sage/60" : "text-heritage-emerald/60"
                          }`}>
                            Academic Legacy
                          </span>
                        </div>
                        <div className="space-y-1.5">
                          <span className="text-3xl sm:text-4xl font-serif font-light text-heritage-gold block tracking-tight">
                            {boardPercentage}%
                          </span>
                          <span className={`text-[9px] font-bold uppercase tracking-widest block font-mono ${
                            isDarkMode ? "text-heritage-sage/60" : "text-heritage-emerald/60"
                          }`}>
                            SSC Pass Index
                          </span>
                        </div>
                        <div className="space-y-1.5">
                          <span className="text-3xl sm:text-4xl font-serif font-light text-heritage-gold block tracking-tight">
                            30:1
                          </span>
                          <span className={`text-[9px] font-bold uppercase tracking-widest block font-mono ${
                            isDarkMode ? "text-heritage-sage/60" : "text-heritage-emerald/60"
                          }`}>
                            Scholar Ratio
                          </span>
                        </div>
                      </div>

                    </div>

                    {/* Hero Right Cinematic Asymmetric Frame Column (5 cols) */}
                    <div className="lg:col-span-5 relative mt-12 lg:mt-0 flex justify-center">
                      
                      {/* Offset Double Border Accent */}
                      <div className="absolute -inset-4 border border-heritage-gold/20 transform translate-x-3 translate-y-3 pointer-events-none" />
                      <div className="absolute -inset-4 border border-heritage-gold/20 pointer-events-none" />
                      
                      {/* Main elegant card container */}
                      <div className={`relative overflow-hidden shadow-2xl p-3 border transition-colors duration-300 ${
                        isDarkMode ? "bg-heritage-emerald/20 border-heritage-gold/25" : "bg-[#f5f0e6] border-heritage-gold/35"
                      }`}>
                        
                        {/* Cinematic banner frame with clean high resolution photograph of the school building */}
                        <div className="w-full overflow-hidden relative">
                          <img 
                            src="https://lh3.googleusercontent.com/p/AF1QipO0xaC3G0mExas2u3gBxSQBJ75YOKRorfQ48HNy=w1200" 
                            alt="Serenity Model High School Main Campus Building"
                            referrerPolicy="no-referrer"
                            className="w-full h-auto object-cover block"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            )}

            {currentSection === "about" && (
              <div className="pt-20">
                <AboutSection isDarkMode={isDarkMode} />
              </div>
            )}

            {currentSection === "alumni" && (
              <div className="pt-20">
                <AlumniSection isDarkMode={isDarkMode} />
              </div>
            )}

            {currentSection === "academics" && (
              <div className="pt-20">
                <AcademicsSection 
                  isDarkMode={isDarkMode} 
                  activeDivision={academicDivisionTab}
                  onDivisionChange={setAcademicDivisionTab}
                />
              </div>
            )}

            {currentSection === "admissions" && (
              <div className="pt-20">
                <AdmissionsSection isDarkMode={isDarkMode} />
              </div>
            )}

            {currentSection === "career" && (
              <div className="pt-20">
                <CareerSection isDarkMode={isDarkMode} />
              </div>
            )}

            {currentSection === "media" && (
              <div className="pt-20">
                <MediaSection isDarkMode={isDarkMode} />
              </div>
            )}

            {currentSection === "events" && (
              <div className="pt-20">
                <EventsSection 
                  isDarkMode={isDarkMode} 
                  onNavigateToSankranthi={() => setCurrentSection("sankranthi-celebration-2026")}
                  onNavigateToBonalu={() => setCurrentSection("bonalu-celebration-2025")}
                  onNavigateToSankranthi2025={() => setCurrentSection("sankranthi-celebration-2025")}
                />
              </div>
            )}

            {currentSection === "sankranthi-celebration-2026" && (
              <div className="pt-20">
                <SankranthiCelebrationPage 
                  isDarkMode={isDarkMode} 
                  onBack={() => setCurrentSection("events")}
                />
              </div>
            )}

            {currentSection === "sankranthi-celebration-2025" && (
              <div className="pt-20">
                <Sankranthi2025CelebrationPage 
                  isDarkMode={isDarkMode} 
                  onBack={() => setCurrentSection("events")}
                />
              </div>
            )}

            {currentSection === "bonalu-celebration-2025" && (
              <div className="pt-20">
                <BonaluCelebrationPage 
                  isDarkMode={isDarkMode} 
                  onBack={() => setCurrentSection("events")}
                />
              </div>
            )}

            {currentSection === "contact" && (
              <div className="pt-20">
                <ContactSection isDarkMode={isDarkMode} />
              </div>
            )}

            {currentSection === "tour" && (
              <div className="pt-24 sm:pt-28">
                <TourSection isDarkMode={isDarkMode} />
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* ACCESSIBLE BOTTOM NAVIGATION FOOTER */}
      <footer className={`py-16 transition-colors duration-300 border-t ${
        isDarkMode ? "bg-heritage-dark border-heritage-gold/25" : "bg-heritage-cream border-heritage-gold/30"
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12 animate-fade-in">
            
            <div className="space-y-4 text-left">
              <div className="flex items-center gap-2.5">
                <SchoolLogo size={42} />
                <span className={`font-semibold text-lg tracking-wide uppercase font-serif self-center ${
                  isDarkMode ? "text-heritage-cream" : "text-heritage-dark"
                }`}>Serenity High</span>
              </div>
              <p className={`text-xs leading-relaxed font-sans ${
                isDarkMode ? "text-heritage-sage/80" : "text-heritage-emerald/80"
              }`}>
                Estd 2004. Dedicated to systematic character logs and state board excellence under the AP/TS State Board of Secondary Education.
              </p>
              <div className="text-[10px] text-heritage-gold uppercase font-bold font-mono tracking-widest">
                Office Registration: SCR-9812A
              </div>
            </div>

            <div className="space-y-3 text-left">
              <h4 className="text-sm font-serif font-semibold text-heritage-gold uppercase tracking-wider">Quick Portals</h4>
              <ul className="space-y-2 text-xs">
                <li><button onClick={() => jumpToSection("tour")} className="hover:text-heritage-gold hover:underline transition font-bold text-heritage-gold">★ Virtual 360° Campus Tour</button></li>
                <li><button onClick={() => jumpToSection("home")} className={`hover:text-heritage-gold hover:underline transition ${isDarkMode ? "text-heritage-sage/80" : "text-heritage-emerald/80"}`}>School Entrance</button></li>
                <li><button onClick={() => jumpToSection("about")} className={`hover:text-heritage-gold hover:underline transition ${isDarkMode ? "text-heritage-sage/80" : "text-heritage-emerald/80"}`}>Vision & Mission</button></li>
                <li><button onClick={() => jumpToSection("academics")} className={`hover:text-heritage-gold hover:underline transition ${isDarkMode ? "text-heritage-sage/80" : "text-heritage-emerald/80"}`}>SSC Curriculums</button></li>
                <li><button onClick={() => jumpToSection("admissions")} className={`hover:text-heritage-gold hover:underline transition ${isDarkMode ? "text-heritage-sage/80" : "text-heritage-emerald/80"}`}>Admissions & Trackers</button></li>
              </ul>
            </div>

            <div className="space-y-3 text-left">
              <h4 className="text-sm font-serif font-semibold text-heritage-gold uppercase tracking-wider">Helpful Material</h4>
              <ul className="space-y-2 text-xs">
                <li><button onClick={() => jumpToSection("alumni")} className="text-heritage-gold hover:underline font-semibold transition">Alumni Network & Spotlights</button></li>
                <li><button onClick={() => jumpToSection("career")} className={`hover:text-heritage-gold hover:underline transition ${isDarkMode ? "text-heritage-sage/80" : "text-heritage-emerald/80"}`}>Faculty Careers</button></li>
                <li><button onClick={() => jumpToSection("media")} className={`hover:text-heritage-gold hover:underline transition ${isDarkMode ? "text-heritage-sage/80" : "text-heritage-emerald/80"}`}>Achievements Logs</button></li>
                <li><button onClick={() => jumpToSection("events")} className="hover:text-heritage-gold hover:underline transition font-bold text-heritage-sage">Events Almanac</button></li>
                <li><button onClick={() => jumpToSection("contact")} className={`hover:text-heritage-gold hover:underline transition ${isDarkMode ? "text-heritage-sage/80" : "text-heritage-emerald/80"}`}>Map coordinates</button></li>
              </ul>
            </div>

            <div className="space-y-3 text-left">
              <h4 className="text-sm font-serif font-semibold text-heritage-gold uppercase tracking-wider font-extrabold">Online Verification</h4>
              <p className={`text-xs leading-relaxed font-normal ${
                isDarkMode ? "text-heritage-sage/80" : "text-heritage-emerald/80"
              }`}>
                Admissions for class levels 1 to 9 are accepted until seat reserves exhaust. Visit are open Monday through Saturday during regular sessions.
              </p>
              <div className="pt-2">
                <button
                  onClick={() => alert("Digital prospectus has been downloaded directly in high resolution format.")}
                  className="px-4 py-2 bg-heritage-gold hover:bg-heritage-gold-hover text-heritage-dark text-[10px] font-bold rounded-none tracking-wider uppercase flex items-center justify-center gap-1.5 transition border border-heritage-gold/40 shadow-sm"
                >
                  <Download className="w-3.5 h-3.5 text-heritage-dark animate-bounce" /> Digital Prospectus
                </button>
              </div>
            </div>

          </div>

          <div className="pt-8 border-t border-slate-800/10 dark:border-slate-800/85 text-center text-xs text-slate-500 space-y-2 font-medium">
            <p>© 2026 Serenity Model High School, Nagaram & Rampally, Medchal-Malkajgiri District, Telangana. AP/TS School Registration Board. All Rights Reserved.</p>
            <p className="text-[10px] text-slate-600 font-mono">
              Designed with elite tech-paradigms reflecting professional educational trust metrics.
            </p>
          </div>
        </div>
      </footer>

      {/* FLOAT ACTION AI CHATBOT TOGGLER */}
      <div className="fixed bottom-4 right-4 z-50">
        <button
          onClick={() => setIsChatOpen(!isChatOpen)}
          aria-label="Open Admissions AI chat counselor drawer"
          className="w-14 h-14 rounded-full bg-heritage-emerald hover:bg-heritage-emerald/90 text-heritage-gold font-bold flex items-center justify-center shadow-2xl hover:scale-105 active:scale-95 transition-transform duration-200 cursor-pointer border-2 border-heritage-gold relative"
        >
          {isChatOpen ? <X className="w-6 h-6 text-heritage-gold" /> : <MessageSquare className="w-6 h-6 text-heritage-gold" />}
          <span className="absolute -top-1 -right-1 w-4 h-4 bg-heritage-gold text-heritage-dark rounded-full text-[8px] font-mono font-bold flex items-center justify-center border border-heritage-emerald animate-pulse">
            AI
          </span>
        </button>

        {/* AI Chat Drawer Container */}
        <AnimatePresence>
          {isChatOpen && (
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className={`absolute bottom-16 right-0 w-[310px] sm:w-[360px] h-[450px] rounded-none shadow-2xl border flex flex-col justify-between overflow-hidden ${
                isDarkMode 
                  ? "bg-heritage-dark/95 border-heritage-gold/30 text-heritage-cream backdrop-blur-sm" 
                  : "bg-white border-heritage-gold/45 text-heritage-dark"
              }`}
            >
              
              {/* Header */}
              <div className="bg-heritage-emerald py-3.5 px-4 text-heritage-cream flex items-center justify-between border-b border-heritage-gold/30">
                <div className="flex items-center gap-2.5 text-left">
                  <div className="w-8 h-8 rounded-full bg-heritage-gold text-heritage-dark font-mono font-bold text-xs flex items-center justify-center border border-heritage-emerald shadow">
                    AI
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-sm font-serif font-light text-heritage-cream">Serenity Counsel AI</h4>
                    <span className="text-[9px] text-heritage-gold font-bold uppercase tracking-widest block font-mono">Admissions Assistant</span>
                  </div>
                </div>
                <button 
                  onClick={() => setIsChatOpen(false)}
                  className="p-1 rounded-none hover:bg-white/10 text-heritage-cream/80 hover:text-white focus:outline-none"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Message scroll space */}
              <div className="flex-1 p-4 overflow-y-auto space-y-3 text-xs text-left bg-heritage-cream/90 dark:bg-heritage-dark/95">
                {chatMessages.map((msg) => (
                  <div 
                    key={msg.id}
                    className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
                  >
                    <div className={`p-3 max-w-[85%] rounded-none text-left ${
                      msg.sender === "user"
                        ? "bg-heritage-emerald text-heritage-cream border border-heritage-gold/25"
                        : isDarkMode
                          ? "bg-heritage-dark border border-heritage-gold/25 text-heritage-cream"
                          : "bg-white text-heritage-dark border border-heritage-gold/30 shadow-xs"
                    }`}>
                      {formatMessageText(msg.text, msg.sender === "user")}
                      <span className="text-[9px] text-heritage-gold mt-1 block text-right font-medium font-mono">
                        {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                      </span>
                    </div>
                  </div>
                ))}

                {isBotThinking && (
                  <div className="flex justify-start">
                    <div className="flex items-center gap-2 p-3 bg-heritage-emerald/20 border border-heritage-gold/20 text-heritage-gold rounded-none">
                      <Loader2 className="w-3.5 h-3.5 text-heritage-gold animate-spin" />
                      <span className="text-[9px] font-mono tracking-wider uppercase animate-pulse">Formulating counseling logs...</span>
                    </div>
                  </div>
                )}
                <div ref={chatbotEndRef} />
              </div>

              {/* Bot Suggestion Chips to speed interaction */}
              <div className="px-4 py-2 border-t border-heritage-gold/25 flex gap-1.5 overflow-x-auto no-scrollbar whitespace-nowrap bg-heritage-cream/95 dark:bg-heritage-dark">
                {[
                  { label: "Check Fee Specs", text: "What is the fee structure for High School class ranges?" },
                  { label: "Steps to Join", text: "Can you detail the step-by-step admissions process?" },
                  { label: "SSC Curriculum details", text: "Which academic board are your programs aligned with?" }
                ].map((chip, cidx) => (
                  <button
                    key={cidx}
                    type="button"
                    onClick={() => {
                      setChatInput(chip.text);
                    }}
                    className={`px-3 py-1.5 text-[9px] font-mono tracking-wider font-bold rounded-none uppercase transition-all border ${
                      isDarkMode
                        ? "bg-heritage-dark border-heritage-gold/20 text-heritage-cream hover:text-white hover:border-heritage-gold/45"
                        : "bg-[#faf6f0] border-heritage-gold/30 text-heritage-dark hover:bg-heritage-gold/15"
                    }`}
                  >
                    {chip.label}
                  </button>
                ))}
              </div>

              {/* Message Entry box */}
              <form onSubmit={handleSendMessage} className={`p-3 border-t flex gap-2 rounded-none ${
                isDarkMode ? "bg-heritage-dark border-heritage-gold/25" : "bg-white border-heritage-gold/30"
              }`}>
                <input
                  type="text"
                  required
                  placeholder="Ask about admissions, fee, timings..."
                  value={chatInput}
                  onChange={(e) => setChatInput(e.target.value)}
                  className={`flex-1 px-3 py-2 text-xs rounded-none focus:outline-none border font-sans ${
                    isDarkMode ? "bg-heritage-dark/80 border-heritage-gold/20 text-white" : "bg-white border-heritage-gold/30 text-heritage-dark"
                  }`}
                />
                <button
                  type="submit"
                  aria-label="Send chatbot query"
                  className="p-2.5 bg-heritage-gold hover:bg-heritage-gold-hover text-heritage-dark rounded-none transition flex items-center justify-center shrink-0 cursor-pointer border border-heritage-gold"
                >
                  <Send className="w-4 h-4 text-heritage-dark" />
                </button>
              </form>

            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* FLOAT BACK TO TOP BUTTON */}
      <AnimatePresence>
        {showBackToTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            aria-label="Back to top scroll button"
            className={`fixed bottom-4 left-1/2 -translate-x-1/2 md:left-auto md:right-22 z-40 p-3.5 rounded-xl border shadow-xl cursor-pointer ${
              isDarkMode ? "bg-[#0c1329] border-slate-800 text-amber-400 hover:text-white" : "bg-white border-slate-200 text-[#1e3a8a] hover:bg-slate-100"
            }`}
          >
            <ArrowUp className="w-4.5 h-4.5" />
          </motion.button>
        )}
      </AnimatePresence>

    </div>
  );
}
