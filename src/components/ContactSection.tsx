import React, { useState } from "react";
import { motion } from "motion/react";
import { 
  PhoneCall, 
  Mail, 
  MapPin, 
  Clock, 
  Send, 
  Globe, 
  CheckCircle,
  HelpCircle,
  MessageCircle,
  Sparkles
} from "lucide-react";
import { submitInquiry } from "../lib/firebase-service";

interface ContactProps {
  isDarkMode: boolean;
}

export default function ContactSection({ isDarkMode }: ContactProps) {
  const [inquirySubmitted, setInquirySubmitted] = useState(false);
  const [isInquirySubmitting, setIsInquirySubmitting] = useState(false);
  const [inquiry, setInquiry] = useState({
    parentName: "",
    phoneNumber: "",
    emailAddress: "",
    questions: "",
    studentAge: "Primary School (Grades 1-5)"
  });

  const handleInquirySubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inquiry.parentName || !inquiry.phoneNumber || !inquiry.questions) {
      alert("Please fill out your name, cell, and query.");
      return;
    }
    setIsInquirySubmitting(true);
    try {
      await submitInquiry({
        name: inquiry.parentName,
        phone: inquiry.phoneNumber,
        division: inquiry.studentAge,
        message: inquiry.questions,
        email: inquiry.emailAddress,
      });
      setInquirySubmitted(true);
    } catch (err) {
      console.error(err);
      alert("Your inquiry could not be scheduled on the database. Please verify your connection.");
    } finally {
      setIsInquirySubmitting(false);
    }
  };

  return (
    <section id="contact" className={`py-24 transition-colors duration-300 ${isDarkMode ? "bg-[#070b19]" : "bg-slate-50"}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-amber-500/10 text-amber-500 tracking-wider uppercase mb-3">
            <PhoneCall className="w-3.5 h-3.5" /> Contact Portal
          </div>
          <h2 className="text-3.5xl sm:text-5xl font-serif font-semibold tracking-tight mb-4">
            Connect With Our <span className="bg-gradient-to-r from-[#1e3a8a] to-amber-500 bg-clip-text text-transparent">Information Center</span>
          </h2>
          <p className={`text-base sm:text-lg ${isDarkMode ? "text-slate-400" : "text-slate-600"} leading-relaxed`}>
            Reach out regarding admissions assistance, faculty vacancies, or facility coordination. Submit a direct enquiry or locate our campus using the embedded map resource below.
          </p>
        </div>

        {/* Contact Info blocks */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {[
            {
               icon: <MapPin className="w-5 h-5 text-amber-500" />,
               title: "Our Campuses Address",
               detail: "Nagaram Branch: Door No 8, 77/4, 77/4, Shilpa Nagar to Shivappa School Rd, beside Bharat Petrol Pump, Shilpa Nagar, Nagaram, Secunderabad, Telangana 500083\n\nRampally Branch: Rampally Main Rd, Keesara, Telengana - 501301",
               link: "https://maps.google.com"
            },
            {
               icon: <PhoneCall className="w-5 h-5 text-indigo-400" />,
               title: "Admissions Call Inquiries",
               detail: "Nagaram Desk: +91 91211 11603 / +91 91211 11604\n\nRampally Desk: +91 91211 11606 / +91 91211 11607",
               link: "tel:+919121111603"
            },
            {
               icon: <Mail className="w-5 h-5 text-rose-455" />,
               title: "Official Email Contacts",
               detail: "nagaramserenity@gmail.com",
               link: "mailto:nagaramserenity@gmail.com"
            },
            {
               icon: <Clock className="w-5 h-5 text-emerald-400" />,
               title: "Office Hours Desk",
               detail: "Monday - Saturday: 8:30 AM - 4:30 PM\nSunday: Administrative Holiday",
            }
          ].map((info, idx) => (
            <div key={idx} className={`p-6 rounded-2xl border ${
              isDarkMode ? "bg-slate-900/40 border-slate-800" : "bg-white border-slate-200 shadow-sm"
              }`}>
              <div className="w-11 h-11 bg-slate-500/10 rounded-xl flex items-center justify-center mb-4">
                {info.icon}
              </div>
              <h4 className="text-sm font-bold mb-2 tracking-wide font-sans">{info.title}</h4>
              <p className={`text-xs sm:text-sm leading-relaxed whitespace-pre-line ${isDarkMode ? "text-slate-400" : "text-slate-600"}`}>
                {info.detail}
              </p>
            </div>
          ))}
        </div>

        {/* Two-cell Interactive Block: Form and Google Map */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Column A: Left Enquiry Form */}
          <div className="lg:col-span-6 h-full">
            <div className={`p-8 rounded-2xl border h-full ${
              isDarkMode ? "bg-[#0b1329] border-slate-800" : "bg-white border-slate-200 shadow-md"
            }`}>
              <h3 className="text-xl font-serif font-bold text-amber-500 mb-2 flex items-center gap-2">
                <HelpCircle className="w-5 h-5 text-amber-500" /> Administrative Quick Enquiry
              </h3>
              <p className={`text-xs ${isDarkMode ? "text-slate-400" : "text-slate-500"} mb-6`}>
                Complete this enquiry form to schedule a direct callback from an admissions officer within 24 working hours.
              </p>

              {inquirySubmitted ? (
                <div className="p-6 text-center space-y-4 bg-emerald-500/10 border border-emerald-500/20 rounded-xl my-8">
                  <CheckCircle className="w-12 h-12 text-emerald-500 mx-auto" />
                  <h4 className="text-lg font-bold text-emerald-400">Callback Registered!</h4>
                  <p className={`text-xs ${isDarkMode ? "text-slate-300" : "text-slate-600"}`}>
                    Thank you, <strong>{inquiry.parentName}</strong>. Our diagnostic counselors have logged your request and will call you at <strong>{inquiry.phoneNumber}</strong> within 1-2 hours.
                  </p>
                  <button
                    onClick={() => {
                      setInquirySubmitted(false);
                      setInquiry({
                        parentName: "",
                        phoneNumber: "",
                        emailAddress: "",
                        questions: "",
                        studentAge: "Grade 8"
                      });
                    }}
                    className="text-xs text-amber-500 hover:underline font-bold"
                  >
                    Log another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleInquirySubmit} className="space-y-4 text-xs sm:text-sm">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="font-bold text-slate-400">Guardian Name *</label>
                      <input 
                        type="text" 
                        required
                        value={inquiry.parentName}
                        onChange={(e) => setInquiry({...inquiry, parentName: e.target.value})}
                        placeholder="e.g. Ramesh" 
                        className={`w-full p-2.5 rounded-lg border text-xs sm:text-sm ${
                          isDarkMode ? "bg-slate-950/80 border-slate-800 text-white" : "bg-white border-slate-300"
                        }`}
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="font-bold text-slate-400">Phone Contact *</label>
                      <input 
                        type="tel" 
                        required
                        value={inquiry.phoneNumber}
                        onChange={(e) => setInquiry({...inquiry, phoneNumber: e.target.value})}
                        placeholder="e.g. +91 999" 
                        className={`w-full p-2.5 rounded-lg border text-xs sm:text-sm ${
                          isDarkMode ? "bg-slate-950/80 border-slate-800 text-white" : "bg-white border-slate-300"
                        }`}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="font-bold text-slate-400">Email ID</label>
                      <input 
                        type="email" 
                        value={inquiry.emailAddress}
                        onChange={(e) => setInquiry({...inquiry, emailAddress: e.target.value})}
                        placeholder="parent@domain.com" 
                        className={`w-full p-2.5 rounded-lg border text-xs sm:text-sm ${
                          isDarkMode ? "bg-slate-950/80 border-slate-800 text-white" : "bg-white border-slate-300"
                        }`}
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="font-bold text-slate-400">Student Target Class</label>
                      <select 
                        value={inquiry.studentAge}
                        onChange={(e) => setInquiry({...inquiry, studentAge: e.target.value})}
                        className={`w-full p-2.5 rounded-lg border text-xs sm:text-sm ${
                          isDarkMode ? "bg-slate-950/80 border-slate-800 text-white" : "bg-white border-slate-300"
                        }`}
                      >
                        <option>Primary School (Grades 1-5)</option>
                        <option>Middle Wing (Grades 6-8)</option>
                        <option>High School Division (Grades 9 & 10)</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="font-bold text-slate-400">Specify Inquiry / Focus Areas *</label>
                    <textarea 
                      rows={4}
                      required
                      value={inquiry.questions}
                      onChange={(e) => setInquiry({...inquiry, questions: e.target.value})}
                      placeholder="e.g. Inquiring regarding fee installments, transport structures, or evaluation syllabus specs..." 
                      className={`w-full p-2.5 rounded-lg border text-xs resize-none ${
                        isDarkMode ? "bg-slate-950/80 border-slate-800 text-white" : "bg-white border-slate-300"
                      }`}
                    />
                  </div>

                  <div className="pt-2">
                    <button 
                      type="submit" 
                      disabled={isInquirySubmitting}
                      className="w-full py-3 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-950 font-bold rounded-lg tracking-wide shadow flex items-center justify-center gap-2 transition disabled:opacity-50"
                    >
                      <Send className="w-3.5 h-3.5" /> {isInquirySubmitting ? "REGISTERING CALLBACK..." : "Submit Inquiry Callback"}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>

          {/* Column B: Right Google Map Simulated Frame */}
          <div className="lg:col-span-6 h-full">
            <div className={`p-8 rounded-2xl border h-full flex flex-col justify-between ${
              isDarkMode ? "bg-slate-900/60 border-slate-800" : "bg-white border-slate-200 shadow-md"
            }`}>
              <div className="space-y-2">
                <h3 className="text-xl font-serif font-bold text-amber-500 flex items-center gap-2">
                  <Globe className="w-5 h-5 text-amber-500" /> Embedded Campus Geospatial Resource
                </h3>
                <p className={`text-xs ${isDarkMode ? "text-slate-400" : "text-slate-500"}`}>
                  Our campuses are located in highly accessible, safe, and green environments across Nagaram and Rampally, Keesara Mandal. Secure school bus transport lines cover all nearby residential neighborhoods.
                </p>
              </div>

              {/* Decorative Map Showcase */}
              <div className="relative rounded-2xl border border-slate-800/15 overflow-hidden my-6 aspect-[16/9] bg-slate-950 flex flex-col items-center justify-center text-center p-6">
                
                {/* Visual compass/grid background representation */}
                <div className="absolute inset-0 bg-[radial-gradient(#1e3a8a_1px,transparent_1px)] [background-size:16px_16px] opacity-25 z-0" />
                <div className="absolute inset-0 bg-[#070b19] opacity-40 z-0" />
                
                {/* Simulated Interactive Map Markers */}
                <div className="relative z-10 space-y-4">
                  <div className="relative inline-block">
                    <span className="absolute -inset-2 bg-amber-500 rounded-full blur-md opacity-35 animate-ping" />
                    <div className="w-12 h-12 rounded-full border-2 border-white bg-[#1e3a8a] text-amber-400 flex items-center justify-center font-bold text-base shadow shadow-indigo-500/50">
                      SM
                    </div>
                  </div>

                  <div>
                    <span className="text-white text-sm font-bold font-sans">Nagaram Branch (Main Campus)</span>
                    <span className="text-amber-400 text-xs block font-bold font-mono">17°29'08.4"N 78°35'15.2"E</span>
                  </div>

                  <a 
                    href="https://maps.google.com/?q=Serenity+Model+High+School+Nagaram" 
                    target="_blank" 
                    rel="noreferrer"
                    className="inline-flex py-1.5 px-4 bg-amber-500 text-slate-950 hover:bg-amber-600 font-bold text-xs rounded-lg transition"
                  >
                    Open Google Maps Navigator
                  </a>
                </div>
              </div>

              <div id="quick-whatsapp-dial" className="p-4 bg-emerald-500/10 border border-emerald-500/25 rounded-xl flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <MessageCircle className="w-6 h-6 text-emerald-500 animate-pulse fill-emerald-500" />
                  <div>
                    <span className="font-bold text-xs block">Prefer WhatsApp Chat?</span>
                    <span className="text-[11px] text-slate-400 block leading-tight">Connect instantly with our support team (+91 63035 65276) for prompt admission queries.</span>
                  </div>
                </div>
                <a 
                  href="https://wa.me/916303565276"
                  target="_blank"
                  rel="noreferrer"
                  className="py-1.5 px-3.5 bg-emerald-500 text-slate-950 font-bold text-[10px] rounded-lg tracking-wide hover:bg-emerald-600 transition uppercase inline-block text-center"
                >
                  Direct Chat
                </a>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
