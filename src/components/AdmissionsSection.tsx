import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  ClipboardList, 
  CheckCircle, 
  AlertCircle, 
  Search, 
  UploadCloud,
  FileCheck,
  User,
  Phone,
  Mail,
  Users,
  Eye,
  GraduationCap
} from "lucide-react";
import { submitAdmission, trackAdmission } from "../lib/firebase-service";

interface AdmissionsProps {
  isDarkMode: boolean;
}

export default function AdmissionsSection({ isDarkMode }: AdmissionsProps) {
  // Admission Tracker State
  const [searchRegNo, setSearchRegNo] = useState("");
  const [trackerResult, setTrackerResult] = useState<{
    found: boolean;
    name: string;
    grade: string;
    status: string;
    step: number;
    notes: string;
  } | null>(null);

  // Form State
  const [formData, setFormData] = useState({
    studentName: "",
    dob: "",
    targetGrade: "High School (SSC - Class 9)",
    parentName: "",
    phone: "",
    email: "",
    prevSchool: "",
    hadCert: false
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [tempRegId, setTempRegId] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isTrackLoading, setIsTrackLoading] = useState(false);

  const handleTrack = async (e: React.FormEvent) => {
    e.preventDefault();
    const cleanNo = searchRegNo.trim().toUpperCase();
    setIsTrackLoading(true);
    try {
      if (cleanNo === "SM2004A" || cleanNo === "SM2026") {
        setTrackerResult({
          found: true,
          name: "Abhinav Murthy",
          grade: "High School (Grade 9)",
          status: "Diagnostic Interview Scheduled",
          step: 3,
          notes: "Your verification documents have been cleared. Please visit the campus on Monday at 09:00 AM for the administrative briefing."
        });
      } else {
        const record = await trackAdmission(cleanNo);
        if (record) {
          setTrackerResult({
            found: true,
            name: record.studentName,
            grade: record.targetGrade,
            status: record.status,
            step: record.step,
            notes: record.notes
          });
        } else {
          setTrackerResult({
            found: false,
            name: "",
            grade: "",
            status: "",
            step: 0,
            notes: ""
          });
        }
      }
    } catch (err) {
      console.error(err);
      alert("Milestone tracking error. Please verify the registration ID and try again.");
    } finally {
      setIsTrackLoading(false);
    }
  };

  const handleSubmitForm = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.studentName || !formData.parentName || !formData.phone) {
      alert("Please complete the required details.");
      return;
    }
    setIsSubmitting(true);
    try {
      const generatedId = await submitAdmission({
        studentName: formData.studentName,
        dob: formData.dob,
        targetGrade: formData.targetGrade,
        parentName: formData.parentName,
        phone: formData.phone,
        email: formData.email,
        prevSchool: formData.prevSchool,
      });
      setTempRegId(generatedId);
      setIsSubmitted(true);
    } catch (err) {
      console.error(err);
      alert("Admission registration could not be saved to the database. Please check your network connection.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const steps = [
    { num: "01", title: "Online Registration", desc: "Submit digital application form, credentials, and parent data." },
    { num: "02", title: "Document Verification", desc: "Digital verification of past certificates, TC and residential proofs." },
    { num: "03", title: "Diagnostic Review", desc: "Concept evaluation and friendly interaction with scientific chair." },
    { num: "04", title: "Seat Confirmation", desc: "Payment of terms fee & collection of educational uniform/textpacks." }
  ];

  return (
    <section id="admissions" className={`py-24 transition-colors duration-300 ${isDarkMode ? "bg-[#070b19]" : "bg-slate-50"}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-amber-500/10 text-amber-500 tracking-wider uppercase mb-3">
            <ClipboardList className="w-3.5 h-3.5" /> Admission Portal
          </div>
          <h2 className="text-3.5xl sm:text-5xl font-serif font-semibold tracking-tight mb-4">
            Begin Your <span className="bg-gradient-to-r from-[#1e3a8a] to-amber-500 bg-clip-text text-transparent">Journey to Excellence</span>
          </h2>
          <p className={`text-base sm:text-lg ${isDarkMode ? "text-slate-400" : "text-slate-600"} leading-relaxed`}>
            Online admissions are open for the upcoming fiscal session. Explore our digital onboarding procedures, eligibility criteria, and track application milestones in real-time.
          </p>
        </div>

        {/* Info Grid: Eligibility, Fee Structure & Download center */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-20 items-stretch">
          
          <div className={`col-span-1 lg:col-span-12 p-8 rounded-2xl border ${
            isDarkMode ? "bg-slate-900/40 border-slate-800" : "bg-white border-slate-200 shadow-sm"
          }`}>
            <h3 className="text-xl font-serif font-bold text-amber-500 mb-6 flex items-center gap-2">
              <FileCheck className="w-5 h-5" /> Standard Criteria & Checklist
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h4 className="text-sm font-bold uppercase tracking-wide text-indigo-400">Eligibility Minimums</h4>
                <ul className={`space-y-2 text-xs sm:text-sm ${isDarkMode ? "text-slate-300" : "text-slate-600"}`}>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-500">•</span>
                    <span><strong>Primary Grade 1:</strong> Child must complete 5.5 years on or before June 1.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-500">•</span>
                    <span><strong>High School:</strong> Requires genuine passing records of former evaluation modules.</span>
                  </li>
                </ul>
              </div>

              <div className="space-y-4">
                <h4 className="text-sm font-bold uppercase tracking-wide text-indigo-400">Required Credentials</h4>
                <ul className={`space-y-2 text-xs sm:text-sm ${isDarkMode ? "text-slate-300" : "text-slate-600"}`}>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>Birth Registration Certificate</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>Original Transfer Certificate (TC)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>Previous Academic Record sheets</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>2 Passport size photographs</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Step-by-Step Procedure Visual Loop */}
        <div className="mb-20">
          <h3 className="text-center font-serif text-2xl font-bold mb-10">Administrative Roadway</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((st, idx) => (
              <div key={idx} className="relative group">
                {idx < 3 && (
                  <div className="hidden lg:block absolute top-1/2 left-full w-full h-[2px] bg-gradient-to-r from-amber-500/30 to-transparent -translate-y-1/2 z-0" />
                )}
                <div className={`p-6 rounded-2xl border text-center transition-all relative z-10 h-full ${
                  isDarkMode ? "bg-slate-950/60 border-slate-800" : "bg-white border-slate-200 shadow-sm"
                }`}>
                  <div className="w-10 h-10 rounded-full bg-[#1e3a8a] text-amber-400 font-extrabold text-sm flex items-center justify-center mx-auto mb-4 border border-amber-500/40">
                    {st.num}
                  </div>
                  <h4 className="text-sm font-bold mb-2 uppercase tracking-tight">{st.title}</h4>
                  <p className={`text-xs leading-relaxed ${isDarkMode ? "text-slate-400" : "text-slate-500"}`}>{st.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Two-Column Form / Application Tracker */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
          
          {/* Column A: Online Application Form */}
          <div className={`p-8 rounded-2xl border ${
            isDarkMode ? "bg-slate-900/60 border-slate-800" : "bg-white border-slate-200 shadow-md"
          }`}>
            <h3 className="text-xl font-serif font-bold text-amber-500 mb-2 flex items-center gap-2">
              <ClipboardList className="w-5 h-5 text-amber-500" /> Digital Application Form
            </h3>
            <p className={`text-xs ${isDarkMode ? "text-slate-400" : "text-slate-500"} mb-6`}>
              Complete this quick onboarding form to instantiate student screening profile and generate temporary credentials.
            </p>

            <AnimatePresence mode="wait">
              {!isSubmitted ? (
                <motion.form 
                  key="form"
                  onSubmit={handleSubmitForm}
                  className="space-y-4 text-xs sm:text-sm"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="font-bold text-slate-400">Student Full Name *</label>
                      <input 
                        type="text" 
                        required
                        value={formData.studentName}
                        onChange={(e) => setFormData({...formData, studentName: e.target.value})}
                        placeholder="e.g. Abhinav Roy" 
                        className={`w-full p-2.5 rounded-lg border ${
                          isDarkMode ? "bg-[#0b1329] border-slate-800 text-white" : "bg-white border-slate-300"
                        }`}
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="font-bold text-slate-400">Date of Birth *</label>
                      <input 
                        type="date" 
                        required
                        value={formData.dob}
                        onChange={(e) => setFormData({...formData, dob: e.target.value})}
                        className={`w-full p-2.5 rounded-lg border ${
                          isDarkMode ? "bg-[#0b1329] border-slate-800 text-white" : "bg-white border-slate-300"
                        }`}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="font-bold text-slate-400">Target Segment Admission *</label>
                      <select 
                        value={formData.targetGrade}
                        onChange={(e) => setFormData({...formData, targetGrade: e.target.value})}
                        className={`w-full p-2.5 rounded-lg border ${
                          isDarkMode ? "bg-[#0b1329] border-slate-800 text-white" : "bg-white border-slate-300"
                        }`}
                      >
                        <option>Primary Division (Cl. 1-5)</option>
                        <option>Middle Wing (Cl. 6-8)</option>
                        <option>High School (SSC - Class 9)</option>
                        <option>High School (SSC - Class 10)</option>
                      </select>
                    </div>
                    <div className="space-y-1">
                      <label className="font-bold text-slate-400">Parent / Guardian Name *</label>
                      <input 
                        type="text" 
                        required
                        value={formData.parentName}
                        onChange={(e) => setFormData({...formData, parentName: e.target.value})}
                        placeholder="e.g. Ramesh Roy" 
                        className={`w-full p-2.5 rounded-lg border ${
                          isDarkMode ? "bg-[#0b1329] border-slate-800 text-white" : "bg-white border-slate-300"
                        }`}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="font-bold text-slate-400">Mobile Phone *</label>
                      <input 
                        type="tel" 
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        placeholder="e.g. +91 99999 88888" 
                        className={`w-full p-2.5 rounded-lg border ${
                          isDarkMode ? "bg-[#0b1329] border-slate-800 text-white" : "bg-white border-slate-300"
                        }`}
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="font-bold text-slate-400">Email Address</label>
                      <input 
                        type="email" 
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        placeholder="name@domain.com" 
                        className={`w-full p-2.5 rounded-lg border ${
                          isDarkMode ? "bg-[#0b1329] border-slate-800 text-white" : "bg-white border-slate-300"
                        }`}
                      />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="font-bold text-slate-400">Previous School Attended</label>
                    <input 
                      type="text" 
                      value={formData.prevSchool}
                      onChange={(e) => setFormData({...formData, prevSchool: e.target.value})}
                      placeholder="e.g. Saint Stephens Primary" 
                      className={`w-full p-2.5 rounded-lg border ${
                        isDarkMode ? "bg-[#0b1329] border-slate-800 text-white" : "bg-white border-slate-300"
                      }`}
                    />
                  </div>

                  <div className="flex items-center gap-2 pt-1">
                    <input 
                      type="checkbox" 
                      id="agreement" 
                      required
                      className="cursor-pointer"
                    />
                    <label htmlFor="agreement" className="text-[11px] text-slate-400 cursor-pointer">
                      I declare that all specified particulars are correct to the best of my knowledge.
                    </label>
                  </div>

                  <div className="pt-2">
                    <button 
                      type="submit" 
                      disabled={isSubmitting}
                      className="w-full py-3 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-950 font-bold rounded-lg tracking-wide shadow transition disabled:opacity-50"
                    >
                      {isSubmitting ? "LODGING APPLICATION..." : "Submit Registration Request"}
                    </button>
                  </div>
                </motion.form>
              ) : (
                <motion.div 
                   key="submitted"
                   initial={{ opacity: 0, scale: 0.95 }}
                   animate={{ opacity: 1, scale: 1 }}
                  className="p-6 text-center space-y-4 bg-emerald-500/10 border border-emerald-500/20 rounded-xl"
                >
                  <div className="w-12 h-12 bg-emerald-500 text-slate-950 font-bold text-lg rounded-full flex items-center justify-center mx-auto shadow-md">
                    ✓
                  </div>
                  <h4 className="text-lg font-bold text-emerald-400">Application Lodged!</h4>
                  <p className={`text-xs ${isDarkMode ? "text-slate-300" : "text-slate-600"}`}>
                    Thank you, <strong>{formData.parentName}</strong>. The screening case for <strong>{formData.studentName}</strong> was logged onto the Serenity Server database.
                  </p>
                  <div className="p-3 bg-slate-950/40 rounded border border-slate-800 font-mono text-xs">
                    <p className="text-slate-400">Milestone Tracker Registry ID</p>
                    <p className="text-amber-400 font-bold text-base tracking-wider mt-1">{tempRegId}</p>
                  </div>
                  <p className="text-[11px] text-slate-400">
                    Use this tracking key on the right-hand panel to audit admission advancement updates anytime.
                  </p>
                  <button 
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({
                        studentName: "",
                        dob: "",
                        targetGrade: "High School (SSC - Class 9)",
                        parentName: "",
                        phone: "",
                        email: "",
                        prevSchool: "",
                        hadCert: false
                      });
                    }}
                    className="mt-2 text-xs text-amber-500 hover:underline font-bold"
                  >
                    Register another sibling
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Column B: Real-Time Application Tracker */}
          <div className={`p-8 rounded-2xl border flex flex-col justify-between ${
            isDarkMode ? "bg-[#0b1329] border-slate-800" : "bg-white border-slate-200 shadow-md"
          }`}>
            <div className="space-y-5">
              <div>
                <h3 className="text-xl font-serif font-bold text-amber-500 flex items-center gap-2">
                  <Search className="w-5 h-5 text-amber-500" /> Administrative Milestone Tracker
                </h3>
                <p className={`text-xs ${isDarkMode ? "text-slate-400" : "text-slate-500"} mt-1`}>
                  Input your registry code (e.g. <strong>SM2004A</strong> or <strong>SM2026</strong>) to examine current admission steps and counselor notifications.
                </p>
              </div>

              <form onSubmit={handleTrack} className="flex gap-2.5">
                <input 
                  type="text" 
                  required
                  placeholder="e.g. SM2004A" 
                  value={searchRegNo}
                  onChange={(e) => setSearchRegNo(e.target.value)}
                  className={`flex-1 p-2.5 text-xs rounded-lg border uppercase tracking-wider ${
                    isDarkMode ? "bg-slate-950/80 border-slate-800 text-white" : "bg-slate-50 border-slate-300"
                  }`}
                />
                <button type="submit" disabled={isTrackLoading} className="px-5 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs rounded-lg transition disabled:opacity-50">
                  {isTrackLoading ? "Checking..." : "Search Key"}
                </button>
              </form>

              <AnimatePresence mode="wait">
                {trackerResult && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className={`p-5 rounded-xl border space-y-4 ${
                      trackerResult.found 
                        ? isDarkMode 
                          ? "bg-indigo-950/10 border-indigo-500/25" 
                          : "bg-indigo-50/40 border-indigo-200"
                        : "bg-red-500/10 border-red-500/20"
                    }`}
                  >
                    {trackerResult.found ? (
                      <>
                        <div className="flex justify-between items-start">
                          <div>
                            <span className="text-[10px] text-slate-400 uppercase tracking-widest block font-bold">Applicant</span>
                            <span className="font-bold text-sm block">{trackerResult.name}</span>
                            <span className="text-xs text-slate-400 block">{trackerResult.grade}</span>
                          </div>
                          <div className="bg-amber-500/10 border border-amber-500/20 text-amber-400 py-1 px-2.5 rounded font-bold text-[10px] tracking-wide">
                            {trackerResult.status}
                          </div>
                        </div>

                        {/* Tracker step levels visuals */}
                        <div className="space-y-2 pt-2">
                          <span className="text-[10px] uppercase font-bold tracking-widest text-slate-400 block pb-1">Process Progress Bar</span>
                          <div className="flex items-center gap-1.5 h-1.5 bg-slate-800 rounded-full overflow-hidden">
                            {[1, 2, 3, 4].map((stepNo) => (
                              <div 
                                key={stepNo} 
                                className={`flex-1 h-full rounded-full ${
                                  stepNo <= trackerResult.step ? "bg-emerald-500" : "bg-slate-700"
                                }`} 
                              />
                            ))}
                          </div>
                          <div className="flex justify-between text-[10px] text-slate-400 font-bold">
                            <span>Form Submitted</span>
                            <span>Verified</span>
                            <span>Aptitude</span>
                            <span>Joined</span>
                          </div>
                        </div>

                        <p className={`text-xs p-3 rounded-lg border ${
                          isDarkMode ? "bg-slate-950/60 border-slate-800 text-slate-300" : "bg-white border-slate-200 text-slate-600"
                        }`}>
                          <strong className="text-amber-500 block mb-0.5 font-sans uppercase text-[10px] tracking-wide">Counselor Notes:</strong>
                          {trackerResult.notes}
                        </p>
                      </>
                    ) : (
                      <div className="flex items-center gap-3.5 p-2">
                        <AlertCircle className="w-5 h-5 text-red-500 shrink-0" />
                        <div>
                          <span className="font-bold text-xs text-red-500 block">Record Not Found</span>
                          <span className="text-[11px] text-slate-400 leading-normal block">We have no database mapping for that registration ID. Try searching '<strong>SM2004A</strong>' to inspect sample milestones.</span>
                        </div>
                      </div>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <div className={`mt-6 p-4 rounded-xl border border-slate-800/10 dark:border-slate-800/50 flex items-center gap-4 ${
              isDarkMode ? "bg-slate-950/40" : "bg-slate-50"
            }`}>
              <UploadCloud className="w-6 h-6 text-indigo-400 shrink-0" />
              <div>
                <span className="font-bold text-xs block">Need to submit scanned records later?</span>
                <span className="text-[11px] text-slate-400 block">Upload digital TC or local Grade transcripts manually referencing your registry ID to nagaramserenity@gmail.com.</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
