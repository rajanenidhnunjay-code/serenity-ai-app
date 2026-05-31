import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Briefcase, 
  Award, 
  Users, 
  Send, 
  UploadCloud, 
  CheckCircle2, 
  Sparkles,
  HelpCircle
} from "lucide-react";
import { CareerOpening } from "../types";

interface CareerProps {
  isDarkMode: boolean;
}

export default function CareerSection({ isDarkMode }: CareerProps) {
  const [selectedJob, setSelectedJob] = useState<CareerOpening | null>(null);
  const [fileSelected, setFileSelected] = useState<File | null>(null);
  const [dragActive, setDragActive] = useState(false);
  const [isApplied, setIsApplied] = useState(false);
  
  const [applyForm, setApplyForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    experienceYears: "",
    coverLetter: ""
  });

  const openings: CareerOpening[] = [
    {
      id: "job-1",
      title: "Senior High School Mathematics Lead (SSC Specialist)",
      department: "High School Division",
      experience: "5+ Years with Board track index",
      type: "Full-Time",
      salaryRange: "₹45,000 - ₹60,000 / month",
      requirements: [
        "Master of Science (M.Sc) in Mathematics & Bachelor of Education (B.Ed)",
        "Proven diagnostic ability preparing students for SSC State Board exams",
        "Experience formulating lesson blueprints using interactive smart visualizations"
      ]
    },
    {
      id: "job-2",
      title: "Primary Wing General Science Instructor",
      department: "Primary School Division",
      experience: "2+ Years in activity teaching",
      type: "Full-Time",
      salaryRange: "₹30,000 - ₹38,000 / month",
      requirements: [
        "B.Sc in Chemistry/Botany & B.Ed or equivalent teacher training certs",
        "A passionate, engaging layout organizer who uses clay, gardens, and models",
        "Exceptional verbal and parent-coordinating English fluency"
      ]
    },
    {
      id: "job-3",
      title: "Athletics & Physical Science Director",
      department: "Co-Curricular Segment",
      experience: "3+ Years coaching schools",
      type: "Full-Time",
      salaryRange: "₹35,000 - ₹42,000 / month",
      requirements: [
        "Degree in Physical Education (B.P.Ed) or professional board certificates",
        "Expertise coordinating state-standard basketball and soccer tournaments",
        "Active first-aid responder certification"
      ]
    }
  ];

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      setFileSelected(e.dataTransfer.files[0]);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFileSelected(e.target.files[0]);
    }
  };

  const handleSubmitApply = (e: React.FormEvent) => {
    e.preventDefault();
    if (!applyForm.fullName || !applyForm.email || !applyForm.phone) {
      alert("Please complete the required details.");
      return;
    }
    setIsApplied(true);
  };

  return (
    <section id="career" className={`py-24 transition-colors duration-300 ${isDarkMode ? "bg-[#0b1329]" : "bg-white"}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-amber-500/10 text-amber-500 tracking-wider uppercase mb-3">
            <Briefcase className="w-3.5 h-3.5" /> Career Portal
          </div>
          <h2 className="text-3.5xl sm:text-5xl font-serif font-semibold tracking-tight mb-4">
            Join Our Elite <span className="bg-gradient-to-r from-[#1e3a8a] to-amber-500 bg-clip-text text-transparent">Academic Faculty</span>
          </h2>
          <p className={`text-base sm:text-lg ${isDarkMode ? "text-slate-400" : "text-slate-600"} leading-relaxed`}>
            Serenity Model High School values systematic methodology, creative engineering, and high-hospitality character. Discover a nurturing environment built to foster your teaching excellence.
          </p>
        </div>

        {/* Culture & Benefits Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {[
            {
              icon: <Award className="w-8 h-8 text-amber-500" />,
              title: "Continuous Development",
              desc: "state-board curriculum upgrades and direct government teaching exposure support."
            },
            {
              icon: <Users className="w-8 h-8 text-[#1e3a8a]" />,
              title: "Collaborative Ecosystem",
              desc: "Smart templates, automated report systems, and collaborative grade-level cohorts reduce technical lag."
            },
            {
              icon: <Sparkles className="w-8 h-8 text-amber-500" />,
              title: "Competitive Incentives",
              desc: "Top-tier compensation matching professional metrics, yearly increments, medical allowances, and provident investments."
            }
          ].map((item, idx) => (
            <div key={idx} className={`p-6 rounded-2xl border text-center ${
              isDarkMode ? "bg-slate-900/40 border-slate-800" : "bg-slate-50 border-slate-200"
            }`}>
              <div className="w-16 h-16 rounded-full bg-slate-500/10 flex items-center justify-center mx-auto mb-4">
                {item.icon}
              </div>
              <h3 className="text-base font-bold mb-2 tracking-wide font-sans">{item.title}</h3>
              <p className={`text-xs sm:text-sm leading-relaxed ${isDarkMode ? "text-slate-400" : "text-slate-600"}`}>{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Career Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Main Job opportunities list */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="text-xl font-serif font-bold text-amber-500 mb-4">Available Positions</h3>
            {openings.map((job) => (
              <div
                key={job.id}
                className={`p-6 rounded-2xl border text-left transition-all relative ${
                  isDarkMode 
                    ? "bg-slate-900/30 border-slate-800 hover:border-amber-500/40" 
                    : "bg-white border-slate-200 shadow-sm hover:border-[#1e3a8a]/40"
                }`}
              >
                <div className="flex flex-wrap items-center justify-between gap-4 mb-3">
                  <div>
                    <span className="text-[10px] text-slate-400 uppercase tracking-widest font-bold block mb-0.5">
                      {job.department}
                    </span>
                    <h4 className="text-base sm:text-lg font-bold font-sans">
                      {job.title}
                    </h4>
                  </div>
                  <div className="bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 py-1 px-3 rounded-full font-bold text-xs">
                    {job.type}
                  </div>
                </div>

                <div className="flex flex-wrap gap-4 text-xs text-slate-400 mb-4 font-medium">
                  <span>Experience: {job.experience}</span>
                </div>

                <div className="border-t border-slate-800/10 dark:border-slate-800 pt-3 mb-4">
                  <span className="text-xs uppercase font-bold tracking-wider text-slate-500 block mb-1.5">Core Specifications:</span>
                  <ul className="space-y-1.5 text-xs text-slate-400">
                    {job.requirements.map((req, ridx) => (
                      <li key={ridx} className="flex items-start gap-1.5">
                        <span className="text-amber-500 shrink-0">•</span>
                        <span>{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button
                  onClick={() => {
                    setSelectedJob(job);
                    setIsApplied(false);
                    setApplyForm({
                      fullName: "",
                      email: "",
                      phone: "",
                      experienceYears: "",
                      coverLetter: ""
                    });
                    setFileSelected(null);
                    
                    // Smoothly scroll to the form panel if on smaller screens
                    const fPanel = document.getElementById("job-apply-pane");
                    if (fPanel) {
                      fPanel.scrollIntoView({ behavior: "smooth", block: "center" });
                    }
                  }}
                  className="py-1.5 px-4 bg-[#1e3a8a] hover:bg-[#152e6f] text-white text-xs font-bold rounded-lg transition"
                >
                  Apply Online Now
                </button>
              </div>
            ))}
          </div>

          {/* Right side form portal */}
          <div id="job-apply-pane" className="lg:col-span-5 h-full">
            <div className={`p-8 rounded-2xl border h-full flex flex-col justify-between ${
              isDarkMode ? "bg-slate-900/60 border-slate-800" : "bg-[#f8fafc] border-slate-200"
            }`}>
              
              <AnimatePresence mode="wait">
                {selectedJob ? (
                  <motion.div
                    key="form-pane"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-4 text-xs sm:text-sm"
                  >
                    <div className="flex justify-between items-start border-b border-slate-800/20 pb-4">
                      <div>
                        <span className="text-[10px] text-amber-500 uppercase font-bold tracking-wider">Candidate Application</span>
                        <h4 className="text-base font-bold font-sans mt-0.5">{selectedJob.title}</h4>
                      </div>
                      <button 
                        onClick={() => setSelectedJob(null)}
                        className="p-1 rounded hover:bg-slate-500/10 text-slate-400 hover:text-white"
                      >
                        ✕
                      </button>
                    </div>

                    {!isApplied ? (
                      <form onSubmit={handleSubmitApply} className="space-y-3 pt-2">
                        <div className="space-y-1">
                          <label className="font-bold text-slate-400">Full Name *</label>
                          <input 
                            type="text" 
                            required
                            value={applyForm.fullName}
                            onChange={(e) => setApplyForm({...applyForm, fullName: e.target.value})}
                            placeholder="John Doe"
                            className={`w-full p-2.5 rounded-lg border text-xs sm:text-sm ${
                              isDarkMode ? "bg-[#0b1329] border-slate-800 text-white" : "bg-white border-slate-300"
                            }`}
                          />
                        </div>

                        <div className="grid grid-cols-2 gap-3">
                          <div className="space-y-1">
                            <label className="font-bold text-slate-400">Email ID *</label>
                            <input 
                              type="email" 
                              required
                              value={applyForm.email}
                              onChange={(e) => setApplyForm({...applyForm, email: e.target.value})}
                              placeholder="name@domain.com"
                              className={`w-full p-2.5 rounded-lg border text-xs ${
                                isDarkMode ? "bg-[#0b1329] border-slate-800 text-white" : "bg-white border-slate-300"
                              }`}
                            />
                          </div>
                          <div className="space-y-1">
                            <label className="font-bold text-slate-400">Phone *</label>
                            <input 
                              type="tel" 
                              required
                              value={applyForm.phone}
                              onChange={(e) => setApplyForm({...applyForm, phone: e.target.value})}
                              placeholder="+91 98765"
                              className={`w-full p-2.5 rounded-lg border text-xs ${
                                isDarkMode ? "bg-[#0b1329] border-slate-800 text-white" : "bg-white border-slate-300"
                              }`}
                            />
                          </div>
                        </div>

                        <div className="space-y-1">
                          <label className="font-bold text-slate-400">Experience Years *</label>
                          <input 
                            type="number" 
                            required
                            value={applyForm.experienceYears}
                            onChange={(e) => setApplyForm({...applyForm, experienceYears: e.target.value})}
                            placeholder="e.g. 5"
                            className={`w-full p-2.5 rounded-lg border text-xs sm:text-sm ${
                              isDarkMode ? "bg-[#0b1329] border-slate-800 text-white" : "bg-white border-slate-300"
                            }`}
                          />
                        </div>

                        <div className="space-y-1">
                          <label className="font-bold text-slate-400">Introduce Your Pedagogical Approach</label>
                          <textarea 
                            rows={3}
                            value={applyForm.coverLetter}
                            onChange={(e) => setApplyForm({...applyForm, coverLetter: e.target.value})}
                            placeholder="Briefly share any experimental board successes..."
                            className={`w-full p-2.5 rounded-lg border text-xs resize-none ${
                              isDarkMode ? "bg-[#0b1329] border-slate-800 text-white" : "bg-white border-slate-300"
                            }`}
                          />
                        </div>

                        {/* Resume upload area */}
                        <div className="space-y-1">
                          <label className="font-bold text-slate-400">Attach Curriculum Vitae / Resume (PDF, DOCX) *</label>
                          <div
                            onDragEnter={handleDrag}
                            onDragOver={handleDrag}
                            onDragLeave={handleDrag}
                            onDrop={handleDrop}
                            className={`border-2 border-dashed rounded-xl p-4 text-center cursor-pointer transition ${
                              dragActive 
                                ? "border-indigo-500 bg-indigo-500/10" 
                                : fileSelected 
                                  ? "border-emerald-500 bg-emerald-500/5" 
                                  : isDarkMode 
                                    ? "border-slate-800 hover:border-slate-700 bg-[#080d1d]" 
                                    : "border-slate-300 hover:border-slate-400 bg-white"
                            }`}
                          >
                            <input 
                              type="file" 
                              id="vacancy-cv" 
                              className="hidden" 
                              required
                              accept=".pdf,.doc,.docx"
                              onChange={handleFileChange}
                            />
                            <label htmlFor="vacancy-cv" className="cursor-pointer">
                              <UploadCloud className="w-6 h-6 mx-auto mb-1 text-slate-400" />
                              {fileSelected ? (
                                <span className="text-xs text-emerald-400 font-bold block truncate">
                                  ✓ Received: {fileSelected.name}
                                </span>
                              ) : (
                                <span className="text-[11px] text-slate-400 block font-normal leading-normal">
                                  Drag & Drop or <span className="text-amber-500 underline">Browse file</span>
                                </span>
                              )}
                            </label>
                          </div>
                        </div>

                        <div className="pt-2">
                          <button 
                            type="submit" 
                            className="w-full py-2.5 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-950 font-bold rounded-lg flex items-center justify-center gap-2 transition"
                          >
                            <Send className="w-3.5 h-3.5" /> Submit Application Credentials
                          </button>
                        </div>
                      </form>
                    ) : (
                      <div className="p-6 text-center space-y-4 bg-emerald-500/10 border border-emerald-500/20 rounded-xl my-4">
                        <CheckCircle2 className="w-12 h-12 text-emerald-500 mx-auto" />
                        <h4 className="text-lg font-bold text-emerald-400">Submission Logged!</h4>
                        <p className={`text-xs ${isDarkMode ? "text-slate-300" : "text-slate-600"}`}>
                          Thank you, <strong>{applyForm.fullName}</strong>. Your academic profile has been successfully uploaded for the <strong>{selectedJob.title}</strong> vacancy.
                        </p>
                        <p className="text-[11px] text-slate-400">
                          Our recruitment board conducts diagnostic screenings on a weekly cycle. We will contact you via email ({applyForm.email}) once selected for evaluation.
                        </p>
                        <button 
                          onClick={() => {
                            setSelectedJob(null);
                            setIsApplied(false);
                          }}
                          className="w-full mt-4 py-2 bg-indigo-600 text-white font-bold text-xs rounded-lg hover:bg-indigo-700 transition"
                        >
                          Review other openings
                        </button>
                      </div>
                    )}
                  </motion.div>
                ) : (
                  <motion.div
                    key="intro-pane"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="flex flex-col items-center justify-center text-center p-8 space-y-4 h-full min-h-[300px]"
                  >
                    <div className="relative">
                      <div className="absolute inset-0 bg-indigo-500/20 rounded-full blur-md" />
                      <HelpCircle className="w-12 h-12 text-indigo-400 relative z-10" />
                    </div>
                    <h4 className="text-base font-bold font-sans">Ready to apply?</h4>
                    <p className={`text-xs leading-relaxed max-w-xs ${isDarkMode ? "text-slate-400" : "text-slate-600"}`}>
                      Select an active academic role from the left panel to open the digital application workflow, and upload your PDF experience sheet directly.
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
