import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  GraduationCap, 
  Briefcase, 
  MapPin, 
  Sparkles, 
  Award, 
  Send, 
  CheckCircle2, 
  Cpu, 
  Globe, 
  Calendar, 
  Lightbulb, 
  ArrowRight,
  BookOpen
} from "lucide-react";

interface AlumniProps {
  isDarkMode: boolean;
}

interface AlumniMember {
  id: string;
  name: string;
  batch: string;
  role: string;
  company: string;
  location: string;
  domain: "Tech" | "Medicine" | "Management";
  achievement: string;
  quote: string;
  avatarInitials: string;
  imageUrl?: string;
}

export default function AlumniSection({ isDarkMode }: AlumniProps) {
  // Brand-aligned Serenity Model High School Alumni Database
  const [alumniList, setAlumniList] = useState<AlumniMember[]>([
    {
      id: "alumni-amazon",
      name: "Praneetha Jemmala",
      batch: "Class of 2014",
      role: "Software Developer",
      company: "Amazon",
      location: "Washington, USA",
      domain: "Tech",
      achievement: "Software Developer at Amazon, Washington, USA Backend Engineering Specialist",
      quote: "Serenity, my school laid the foundation for my career, equipping me with essential skills and knowledge that have been invaluable at every step. The supportive atmosphere and numerous growth opportunities have truly shaped me into the accomplished software developer I am today at Amazon.",
      avatarInitials: "PJ",
      imageUrl: "https://i0.wp.com/serenitymodelschools.com/wp-content/uploads/2025/11/Praneetha-Jemmala.png?resize=400%2C600&ssl=1"
    },
    {
      id: "alumni-genpact",
      name: "Samala Nikhil Reddy",
      batch: "Class of 2016",
      role: "Process Developer - Procurement",
      company: "Genpact India",
      location: "Hyderabad, India",
      domain: "Management",
      achievement: "Process Developer at Genpact, Leading Procurement Delivery Modules",
      quote: "I am very thankful to Serenity Model High School for the education and guidance that have been crucial in my career. The skills and values I learned there have been key to my success at Genpact India. Thanks to all the teachers and mentors who supported me.",
      avatarInitials: "SN",
      imageUrl: "https://i0.wp.com/serenitymodelschools.com/wp-content/uploads/2025/11/Samala-Nikhil-Reddy.png?resize=400%2C600&ssl=1"
    },
    {
      id: "alumni-aib",
      name: "Ch. Dedeepya Sai",
      batch: "Class of 2015",
      role: "Auditor",
      company: "Allied Irish Bank",
      location: "Athlone, Ireland",
      domain: "Management",
      achievement: "Auditor at Allied Irish Bank Central Corporate Office, Ireland",
      quote: "Expressing heartfelt gratitude to Serenity Model High School for its pivotal role in shaping my career journey as an Auditor at Allied Irish Bank. The invaluable education, unwavering support, and memorable experiences have laid the foundation for my success. Forever thankful.",
      avatarInitials: "CD",
      imageUrl: "https://i0.wp.com/serenitymodelschools.com/wp-content/uploads/2025/11/Ch-Dedeepya-Sai.png?resize=400%2C600&ssl=1"
    },
    {
      id: "alumni-mims",
      name: "Himavanth Chary",
      batch: "Class of 2013",
      role: "MBBS (Final Year)",
      company: "MIMS",
      location: "Telangana, India",
      domain: "Medicine",
      achievement: "MBBS Medical Scholar, Preparing for Specialization",
      quote: "As a child my dream had always been to become a 'doctor' when I grew up. I am so thankful to my Serenity teachers, who taught me Value based education and provided guidance, motivation, emotional support and made my dream come true.",
      avatarInitials: "HC",
      imageUrl: "https://i0.wp.com/serenitymodelschools.com/wp-content/uploads/2025/11/Himavanth-Chary.png?resize=400%2C600&ssl=1"
    },
    {
      id: "alumni-nutritionist-1",
      name: "Sriram Reddy",
      batch: "Class of 2012",
      role: "Clinical Nutritionist",
      company: "Fernandez Hospitals",
      location: "Hyderabad, India",
      domain: "Medicine",
      achievement: "Clinical Nutritionist, Guiding Wellness & Pediatric Care",
      quote: "Serenity School was more than just an educational institution for me; it was a nurturing ground that shaped my future. The skills, values, and support I received here have been pivotal in my career. I am proud to be an alumnus of Serenity School.",
      avatarInitials: "SR",
      imageUrl: "https://i0.wp.com/serenitymodelschools.com/wp-content/uploads/2025/11/sriram-reddy-1.png?resize=400%2C600&ssl=1"
    },
    {
      id: "alumni-nutritionist-2",
      name: "Ramsagaram Sri Ravalika",
      batch: "Class of 2011",
      role: "Clinical Nutritionist",
      company: "Fernandez Hospitals",
      location: "Hyderabad, India",
      domain: "Medicine",
      achievement: "Clinical Nutritionist, Leading Health Pathways",
      quote: "I am deeply grateful to the school staff for their support and guidance, which helped me clear my 10th exam. Special thanks to the teachers for their patience and the support staff for their invaluable help. The nurturing environment made my educational journey remarkable.",
      avatarInitials: "RR",
      imageUrl: "https://i0.wp.com/serenitymodelschools.com/wp-content/uploads/2025/11/Ramsagaram-Sri-Ravalika.png?resize=400%2C600&ssl=1"
    }
  ]);

  // States
  const [selectedDomain, setSelectedDomain] = useState<string>("All");
  const [activeTab, setActiveTab] = useState<"directory" | "register">("directory");

  // Registration Form State
  const [formData, setFormData] = useState({
    name: "",
    batch: "",
    role: "",
    company: "",
    location: "",
    domain: "Tech",
    achievement: "",
    quote: "",
    email: ""
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Filters
  const filteredAlumni = alumniList.filter((m) => {
    const matchesDomain = selectedDomain === "All" || m.domain === selectedDomain;
    return matchesDomain;
  });

  const handleRegisterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.batch || !formData.role || !formData.company) return;

    const initials = formData.name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase()
      .substring(0, 2);

    const newAlumni: AlumniMember = {
      id: `alumni-${Date.now()}`,
      name: formData.name,
      batch: `Class of ${formData.batch}`,
      role: formData.role,
      company: formData.company,
      location: formData.location || "India",
      domain: formData.domain as any,
      achievement: formData.achievement || "Verified Member",
      quote: formData.quote || "Proud to be a part of the SMHS legacy of prestige.",
      avatarInitials: initials || "AM"
    };

    setAlumniList((prev) => [newAlumni, ...prev]);
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: "",
        batch: "",
        role: "",
        company: "",
        location: "",
        domain: "Tech",
        achievement: "",
        quote: "",
        email: ""
      });
      setActiveTab("directory");
    }, 2500);
  };

  const domains = ["All", "Tech", "Medicine", "Management"];

  return (
    <section id="alumni" className={`py-24 transition-colors duration-300 ${isDarkMode ? "bg-[#070b19]" : "bg-slate-50"}`}>
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-amber-500/10 text-amber-500 tracking-wider uppercase mb-3">
            <GraduationCap className="w-3.5 h-3.5" /> Alumni Network
          </div>
          <h2 className="text-3.5xl sm:text-5xl font-serif font-semibold tracking-tight mb-4">
            Our Legacy Across <span className="bg-gradient-to-r from-[#1e3a8a] to-amber-500 bg-clip-text text-transparent">Global Horizons</span>
          </h2>
          <p className={`text-base sm:text-lg ${isDarkMode ? "text-slate-400" : "text-slate-600"} leading-relaxed`}>
            Since our foundation in 2004, our graduates from Nagaram branch have pursued excellence in different elite pathways .
          </p>
        </div>

        {/* Section Toggle Buttons */}
        <div className="flex justify-center mb-12">
          <div className={`p-1.5 rounded-2xl flex gap-2 border shadow-sm ${
            isDarkMode ? "bg-slate-900/60 border-slate-800" : "bg-white border-slate-200"
          }`}>
            <button
              onClick={() => setActiveTab("directory")}
              className={`px-6 py-2.5 rounded-xl font-bold text-sm transition-all duration-200 cursor-pointer ${
                activeTab === "directory"
                  ? "bg-[#1e3a8a] text-white shadow-md"
                  : isDarkMode 
                    ? "text-slate-300 hover:text-white"
                    : "text-slate-700 hover:text-[#1e3a8a]"
              }`}
            >
              Alumni Directory & Spotlight
            </button>
            <button
              onClick={() => setActiveTab("register")}
              className={`px-6 py-2.5 rounded-xl font-bold text-sm transition-all duration-200 cursor-pointer ${
                activeTab === "register"
                  ? "bg-[#1e3a8a] text-white shadow-md"
                  : isDarkMode 
                    ? "text-slate-300 hover:text-white"
                    : "text-slate-700 hover:text-[#1e3a8a]"
              }`}
            >
              Sign Up / Connect
            </button>
          </div>
        </div>

        <AnimatePresence mode="wait">
          {activeTab === "directory" ? (
            <motion.div
              key="directory"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.25 }}
              className="space-y-10"
            >
              {/* Directory Filter Bar */}
              <div className={`p-5 rounded-2xl border ${
                isDarkMode ? "bg-[#0b1329] border-slate-800" : "bg-white border-slate-200 shadow-sm"
              }`}>
                <div className="flex flex-wrap gap-2 items-center justify-center">
                  <span className={`text-xs font-bold uppercase tracking-wider ${isDarkMode ? "text-slate-400" : "text-slate-500"}`}>
                    Filter Pathways:
                  </span>
                  {/* Domain Category Filter buttons */}
                  <div className="flex flex-wrap gap-1.5 justify-center">
                    {domains.map((dom) => (
                      <button
                        key={dom}
                        onClick={() => setSelectedDomain(dom)}
                        className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-colors cursor-pointer ${
                          selectedDomain === dom
                            ? "bg-amber-500 text-slate-950"
                            : isDarkMode
                              ? "bg-slate-900 text-slate-300 hover:bg-slate-800/80"
                              : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                        }`}
                      >
                        {dom}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Alumni Grid Cards */}
              {filteredAlumni.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredAlumni.map((member) => (
                    <motion.div
                      key={member.id}
                      whileHover={{ y: -4 }}
                      className={`rounded-2xl border p-6 flex flex-col justify-between relative overflow-hidden transition-all duration-300 ${
                        isDarkMode
                          ? "bg-[#0c1329] border-slate-800 hover:border-amber-500/30"
                          : "bg-white border-slate-200 hover:border-[#1e3a8a]/20 shadow-md"
                      }`}
                    >
                      {/* Gradient tag based on domain type */}
                      <div className="flex justify-between items-start mb-4">
                        <span className={`px-2.5 py-0.5 rounded text-[10px] uppercase font-extrabold tracking-wider ${
                          member.domain === "Tech"
                            ? "bg-blue-500/10 text-blue-400 border border-blue-500/20"
                            : member.domain === "Medicine"
                              ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20"
                              : member.domain === "Public Service"
                                ? "bg-amber-500/10 text-amber-500 border border-amber-500/20"
                                : member.domain === "Entrepreneurship"
                                  ? "bg-purple-500/10 text-purple-400 border border-purple-500/20"
                                  : "bg-slate-500/10 text-slate-400 border border-slate-500/20"
                        }`}>
                          {member.domain}
                        </span>
                        <span className={`text-xs font-bold font-mono ${isDarkMode ? "text-slate-400" : "text-slate-500"}`}>
                          {member.batch}
                        </span>
                      </div>

                      {/* Content Main Body */}
                      <div className="space-y-4 text-left">
                        <div className="flex items-center gap-3">
                          <div className={`w-12 h-12 rounded-full border flex items-center justify-center font-serif text-base font-bold shadow-sm shrink-0 overflow-hidden ${
                            isDarkMode
                              ? "bg-slate-950 border-slate-800 text-amber-400"
                              : "bg-sky-50 border-sky-100 text-[#1e3a8a]"
                          }`}>
                            {member.imageUrl ? (
                              <img 
                                src={member.imageUrl} 
                                alt={member.name} 
                                className="w-full h-full object-cover"
                                referrerPolicy="no-referrer"
                              />
                            ) : (
                              member.avatarInitials
                            )}
                          </div>
                          <div>
                            <h4 className={`font-bold font-sans text-base tracking-wide ${isDarkMode ? 'text-white' : 'text-slate-950'}`}>
                              {member.name}
                            </h4>
                            <p className="text-xs text-amber-500 font-medium flex items-center gap-1">
                              <Briefcase className="w-3.5 h-3.5" /> {member.role} at {member.company}
                            </p>
                          </div>
                        </div>

                        {/* Top Spotlights achievement */}
                        <div className={`p-2.5 rounded-lg border text-xs flex items-center gap-1.5 font-bold ${
                          isDarkMode
                            ? "bg-slate-950/50 border-slate-800/80 text-emerald-400"
                            : "bg-emerald-50/70 border-emerald-100 text-emerald-800"
                        }`}>
                          <Award className="w-3.5 h-3.5 shrink-0" />
                          <span>{member.achievement}</span>
                        </div>

                        {/* Quote paragraph */}
                        <p className={`text-xs sm:text-sm leading-relaxed italic border-l-2 pl-3 border-amber-500/50 ${
                          isDarkMode ? "text-slate-300" : "text-slate-600"
                        }`}>
                          "{member.quote}"
                        </p>
                      </div>

                      {/* Footer detail */}
                      <div className="mt-5 pt-4 border-t border-slate-800/10 dark:border-slate-800/80 flex justify-between items-center text-[11px] text-slate-400">
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3 h-3 text-amber-500" /> {member.location}
                        </span>
                        <span className="font-semibold text-[#1e3a8a] dark:text-amber-400 uppercase tracking-wider flex items-center gap-0.5">
                          SMHS Verified <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              ) : (
                <div className={`p-16 rounded-3xl text-center border ${
                  isDarkMode ? "bg-[#0b1329] border-slate-800" : "bg-white border-slate-200"
                }`}>
                  <Lightbulb className="w-12 h-12 text-amber-500 mx-auto mb-3" />
                  <h4 className="font-serif font-bold text-lg mb-1">No matching alumni found</h4>
                  <p className={`text-sm ${isDarkMode ? "text-slate-400" : "text-slate-600"}`}>
                    Try clearing or editing your keywords to search across different batches.
                  </p>
                </div>
              )}
            </motion.div>
          ) : (
            <motion.div
              key="register"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.25 }}
              className="max-w-2xl mx-auto"
            >
              <div className={`rounded-3xl border p-6 sm:p-10 text-left relative overflow-hidden ${
                isDarkMode ? "bg-[#0b1329] border-slate-800" : "bg-white border-slate-200 shadow-lg"
              }`}>
                {/* Successful Alert */}
                <AnimatePresence>
                  {isSubmitted && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0 }}
                      className="absolute inset-0 bg-[#070b19] z-20 flex flex-col items-center justify-center text-center p-6"
                    >
                      <div className="w-16 h-16 rounded-full bg-emerald-500/10 border-2 border-emerald-500 flex items-center justify-center text-emerald-400 shadow mb-4 animate-bounce">
                        <CheckCircle2 className="w-9 h-9" />
                      </div>
                      <h3 className="font-serif text-2xl font-bold text-white mb-2">Registration Successful!</h3>
                      <p className="text-sm text-slate-300 max-w-sm leading-relaxed">
                        Thank you for registering at Serenity Model High School. Your alumni profile is now spotlighted in our directory!
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>

                <div className="space-y-2 mb-6">
                  <span className="text-amber-500 text-xs font-bold tracking-widest uppercase block">Join the Legacy Row</span>
                  <h3 className="text-2xl font-serif font-bold">SMHS Alumni Connection Form</h3>
                  <p className={`text-xs sm:text-sm ${isDarkMode ? "text-slate-400" : "text-slate-600"}`}>
                    Register as a member of the SMHS Alumni Association. Guide current students, propose scholarship initiatives, and get invited to annual convocations.
                  </p>
                </div>

                <form onSubmit={handleRegisterSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-amber-500 uppercase tracking-wider mb-1">Full Name *</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className={`w-full px-4 py-2 text-sm rounded-xl border outline-none ${
                          isDarkMode
                            ? "bg-slate-950 border-slate-800 text-white focus:border-amber-500"
                            : "bg-slate-50 border-slate-200 text-slate-900 focus:border-[#1e3a8a] focus:bg-white"
                        }`}
                        placeholder="e.g. Anand Sharma"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-amber-500 uppercase tracking-wider mb-1">Passout Batch *</label>
                      <input
                        type="text"
                        required
                        value={formData.batch}
                        onChange={(e) => setFormData({ ...formData, batch: e.target.value })}
                        className={`w-full px-4 py-2 text-sm rounded-xl border outline-none ${
                          isDarkMode
                            ? "bg-slate-950 border-slate-800 text-white focus:border-amber-500"
                            : "bg-slate-50 border-slate-200 text-slate-900 focus:border-[#1e3a8a] focus:bg-white"
                        }`}
                        placeholder="e.g. 2015"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-amber-500 uppercase tracking-wider mb-1">Professional Designation *</label>
                      <input
                        type="text"
                        required
                        value={formData.role}
                        onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                        className={`w-full px-4 py-2 text-sm rounded-xl border outline-none ${
                          isDarkMode
                            ? "bg-slate-950 border-slate-800 text-white focus:border-amber-500"
                            : "bg-slate-50 border-slate-200 text-slate-900 focus:border-[#1e3a8a] focus:bg-white"
                        }`}
                        placeholder="e.g. Software Architect"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-amber-500 uppercase tracking-wider mb-1">Working Company / Entity *</label>
                      <input
                        type="text"
                        required
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className={`w-full px-4 py-2 text-sm rounded-xl border outline-none ${
                          isDarkMode
                            ? "bg-slate-950 border-slate-800 text-white focus:border-amber-500"
                            : "bg-slate-50 border-slate-200 text-slate-900 focus:border-[#1e3a8a] focus:bg-white"
                        }`}
                        placeholder="e.g. Microsoft India"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-amber-500 uppercase tracking-wider mb-1">Primary Domain Category</label>
                      <select
                        value={formData.domain}
                        onChange={(e) => setFormData({ ...formData, domain: e.target.value })}
                        className={`w-full px-4 py-2.5 text-sm rounded-xl border outline-none ${
                          isDarkMode
                            ? "bg-slate-950 border-slate-800 text-white focus:border-amber-500"
                            : "bg-slate-50 border-slate-200 text-slate-900 focus:border-[#1e3a8a] focus:bg-white"
                        }`}
                      >
                        <option value="Tech">Tech / Computer Science</option>
                        <option value="Medicine">Medicine & Health Sciences</option>
                        <option value="Management">Management / Corporate Office</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-amber-500 uppercase tracking-wider mb-1">Current Work Location</label>
                      <input
                        type="text"
                        value={formData.location}
                        onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                        className={`w-full px-4 py-2 text-sm rounded-xl border outline-none ${
                          isDarkMode
                            ? "bg-slate-950 border-slate-800 text-white focus:border-amber-500"
                            : "bg-slate-50 border-slate-200 text-slate-900 focus:border-[#1e3a8a] focus:bg-white"
                        }`}
                        placeholder="e.g. Hyderabad, India"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-amber-500 uppercase tracking-wider mb-1">Key Achievement or Honor (Short description)</label>
                    <input
                      type="text"
                      value={formData.achievement}
                      onChange={(e) => setFormData({ ...formData, achievement: e.target.value })}
                      className={`w-full px-4 py-2 text-sm rounded-xl border outline-none ${
                        isDarkMode
                          ? "bg-slate-950 border-slate-800 text-white focus:border-amber-500"
                          : "bg-slate-50 border-slate-200 text-slate-900 focus:border-[#1e3a8a] focus:bg-white"
                      }`}
                      placeholder="e.g. Published Research Paper / IIT Graduate"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-amber-500 uppercase tracking-wider mb-1">Your Quote/Inspiring Advice for SMHS Students</label>
                    <textarea
                      value={formData.quote}
                      onChange={(e) => setFormData({ ...formData, quote: e.target.value })}
                      rows={3}
                      className={`w-full px-4 py-3 text-sm rounded-xl border outline-none resize-none ${
                        isDarkMode
                          ? "bg-slate-950 border-slate-800 text-white focus:border-amber-500"
                          : "bg-slate-50 border-slate-200 text-slate-900 focus:border-[#1e3a8a] focus:bg-white"
                      }`}
                      placeholder="An inspiring quote about your scholastic time at our high school campus..."
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-amber-500 uppercase tracking-wider mb-1">Contact Email Address (Will not be shared publicly)</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className={`w-full px-4 py-2 text-sm rounded-xl border outline-none ${
                        isDarkMode
                          ? "bg-slate-950 border-slate-800 text-white focus:border-amber-500"
                          : "bg-slate-50 border-slate-200 text-slate-900 focus:border-[#1e3a8a] focus:bg-white"
                      }`}
                      placeholder="e.g. anand@example.com"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 mt-2 bg-gradient-to-r from-amber-500 via-amber-400 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-950 font-extrabold rounded-xl shadow-lg hover:shadow-amber-500/20 text-center tracking-wide text-sm flex items-center justify-center gap-2 group transition duration-200 cursor-pointer"
                  >
                    Submit Alumni Coordinates <Send className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                  </button>
                </form>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
