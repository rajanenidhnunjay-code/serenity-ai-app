import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Sparkles, 
  Target, 
  Eye, 
  Award, 
  Users, 
  ShieldCheck, 
  BookOpen, 
  CheckCircle,
  Quote,
  MapPin,
  PhoneCall
} from "lucide-react";

interface AboutProps {
  isDarkMode: boolean;
}

export default function AboutSection({ isDarkMode }: AboutProps) {
  const [activeTab, setActiveTab] = useState<"mission" | "vision" | "values">("mission");
  const [selectedDesk, setSelectedDesk] = useState<"reddy" | "vasantha">("reddy");
  const [teluguLang, setTeluguLang] = useState(true);

  const coreValues = [
    {
      icon: <Award className="w-6 h-6 text-amber-500" />,
      title: "Academic Rigor & Discipline",
      desc: "Systematic learning habits aligned with SSC curriculum targets, ensuring deep conceptual mastery."
    },
    {
      icon: <Users className="w-6 h-6 text-[#1e3a8a]" />,
      title: "Student-Centered Care",
      desc: "Nurturing environment with small classroom ratios (max 60:1) ensuring individual scientific attention."
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-amber-500" />,
      title: "Integrity & Respect",
      desc: "Fostering traditional societal standards, responsibility, and civic duty within modern frameworks."
    },
    {
      icon: <BookOpen className="w-6 h-6 text-[#1e3a8a]" />,
      title: "Holistic Development",
      desc: "Equal empowerment of sports ,arts and public debate."
    }
  ];

  return (
    <section id="about" className={`py-24 transition-colors duration-300 ${isDarkMode ? "bg-[#070b19]" : "bg-slate-50"}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-amber-500/10 text-amber-500 tracking-wider uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5" /> Established in 2004
          </div>
          <h2 className="text-3.5xl sm:text-5xl font-serif font-semibold tracking-tight mb-4">
            Where Learning <span className="bg-gradient-to-r from-[#1e3a8a] to-amber-500 bg-clip-text text-transparent">Feels Like Joy</span>
          </h2>
          <p className={`text-base sm:text-lg ${isDarkMode ? "text-slate-400" : "text-slate-600"} leading-relaxed`}>
            Since 2004, Serenity Model High School has nurtured academic excellence, life skills, and holistic growth in children. Inspired by the philosophy of joy in discovery, we operate premium campuses that elevate performance.
          </p>
        </div>

        {/* Overview Row: Campus & Philosophical Narrative */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          <div className="lg:col-span-7 space-y-6">
            <h3 className={`text-2xl font-serif font-bold ${isDarkMode ? "text-white" : "text-[#0f172a]"}`}>
              Shaping Future Pioneers Through Elite IIT / NEET Foundation & SSC Board Mastery
            </h3>
            <p className={`text-sm sm:text-base leading-relaxed ${isDarkMode ? "text-slate-300" : "text-slate-600"}`}>
              Recognized for record-breaking state academic milestones, Serenity Model High School blends prestigious secondary curriculum protocols with IIT-JEE and NEET foundation coaches. We emphasize rigorous logic over simple rote memorization.
            </p>
            <p className={`text-sm sm:text-base leading-relaxed ${isDarkMode ? "text-slate-300" : "text-slate-600"}`}>
              Our pedagogy ignites active student interest. Through robust physical sports schedules and engaging academic environments, we unlock the supreme potential within every learner.
            </p>

            <blockquote className={`relative p-5 rounded-xl border-l-4 border-amber-500 italic ${isDarkMode ? "bg-slate-900/40 text-slate-200" : "bg-white text-slate-700 shadow-sm"}`}>
              <Quote className="absolute top-3 right-3 w-8 h-8 text-amber-500/10" />
              "Our mission is to mold self-sufficient scholars. We make sure that every chapter parsed in our classrooms instills genuine analytical joy, driving high-calibre success."
            </blockquote>
          </div>

          <div className="lg:col-span-5">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-tr from-[#1e3a8a] to-amber-500/20 rounded-2xl blur-xl opacity-30 group-hover:opacity-40 transition-opacity duration-300" />
              <div className={`relative overflow-hidden rounded-2xl border ${isDarkMode ? "bg-slate-950/60 border-slate-800" : "bg-white border-slate-200 shadow-md"} p-4`}>
                <div className={`aspect-[4/3] rounded-xl relative overflow-hidden flex flex-col justify-between p-6 group transition-colors duration-300 ${
                  isDarkMode ? "bg-gradient-to-br from-[#071310] via-[#0b1e19] to-slate-950" : "bg-gradient-to-br from-[#fdfbf7] via-[#f9fbe7] to-[#f3f8e2]"
                }`}>
                  {/* Real-world high quality pre-primary student and teacher group photo */}
                  <img 
                    src="https://i0.wp.com/serenitymodelschools.com/wp-content/uploads/2025/11/serenity-about.png" 
                    alt="Serenity Model High School Happy Pre-primary Students & Teacher"
                    referrerPolicy="no-referrer"
                    className="absolute inset-x-0 bottom-0 w-full h-[85%] object-contain object-bottom transition-all duration-500 scale-100 group-hover:scale-105 pointer-events-none z-0"
                  />
                  
                  <div className="flex justify-between items-start w-full z-10">
                    <div className="glass-panel p-2.5 bg-black/45 backdrop-blur-md border border-white/10 rounded-lg">
                      <span className="text-white text-xs font-mono font-bold tracking-widest uppercase">SMHS Excellence</span>
                    </div>
                    <div className="w-12 h-12 rounded-full bg-amber-500 flex items-center justify-center text-slate-950 font-bold text-xs shadow-md border-2 border-white animate-pulse">
                      SSC
                    </div>
                  </div>
                  
                  <div className="text-slate-100 z-10 bg-black/60 backdrop-blur-md p-4 rounded-xl border border-white/10 shadow-lg mt-auto">
                    <span className="text-amber-400 text-xs font-bold tracking-widest block mb-0.5">State Rank Board Distinction</span>
                    <h4 className="text-sm font-sans font-bold leading-tight">100% Board Pass Percentage Since Inception</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Brand New Branches Showcase Section */}
        <div className="mb-24">
          <h3 className={`text-xl sm:text-2xl font-serif font-bold text-center mb-10 ${isDarkMode ? "text-amber-400" : "text-[#1e3a8a]"}`}>
            Our Strategically Distributed Campuses
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className={`p-6 rounded-2xl border transition-all hover:shadow-lg ${
              isDarkMode ? "bg-[#0b1329] border-slate-800" : "bg-white border-slate-200 shadow-sm"
            }`}>
              <div className="flex justify-between items-start mb-4">
                <span className="px-3 py-1 bg-amber-500/10 text-amber-400 border border-amber-500/25 rounded-md text-xs font-bold font-mono">
                  MAIN CAMPUS
                </span>
                <span className={`text-xs ${isDarkMode ? "text-slate-400" : "text-slate-500"}`}>Est. 2004</span>
              </div>
              <h4 className="text-lg font-bold font-serif mb-2">Nagaram Branch</h4>
              <p className={`text-xs sm:text-sm leading-relaxed mb-4 ${isDarkMode ? "text-slate-300" : "text-slate-600"}`}>
                Our signature branch in Nagaram features interactive pre-primary play zones and comprehensive SSC board training centers.
              </p>
              <div className="border-t border-slate-700/10 dark:border-slate-800/80 pt-3 flex flex-col gap-1.5 text-xs text-slate-400">
                <span className="flex items-center gap-1.5"><MapPin className="w-3.5 h-3.5 text-amber-500 shrink-0" /> Door No 8, 77/4, 77/4, Shilpa Nagar to Shivappa School Rd, beside Bharat Petrol Pump, Shilpa Nagar, Nagaram, Secunderabad, Telangana 500083</span>
                <span className="flex items-center gap-1.5"><PhoneCall className="w-3.5 h-3.5 text-emerald-500 shrink-0" /> +91 91211 11603 / 04 / 05</span>
              </div>
            </div>

            <div className={`p-6 rounded-2xl border transition-all hover:shadow-lg ${
              isDarkMode ? "bg-[#0b1329] border-slate-800" : "bg-white border-slate-200 shadow-sm"
            }`}>
              <div className="flex justify-between items-start mb-4">
                <span className="px-3 py-1 bg-[#1e3a8a]/15 text-sky-400 border border-[#1e3a8a]/20 rounded-md text-xs font-bold font-mono">
                  EXPANSION WING
                </span>
                <span className={`text-xs ${isDarkMode ? "text-slate-400" : "text-slate-500"}`}>Premium Facility</span>
              </div>
              <h4 className="text-lg font-bold font-serif mb-2">Rampally Branch</h4>
              <p className={`text-xs sm:text-sm leading-relaxed mb-4 ${isDarkMode ? "text-slate-300" : "text-slate-600"}`}>
                This branch provides spacious indoor sports halls and a focus on high-school level scholastic excellence.
              </p>
              <div className="border-t border-slate-700/10 dark:border-slate-800/80 pt-3 flex flex-col gap-1.5 text-xs text-slate-400">
                <span className="flex items-center gap-1.5"><MapPin className="w-3.5 h-3.5 text-amber-500 shrink-0" /> Rampally Main Rd, Keesara Mandal</span>
                <span className="flex items-center gap-1.5"><PhoneCall className="w-3.5 h-3.5 text-emerald-500 shrink-0" /> +91 91211 11606 / 07 / 08</span>
              </div>
            </div>
          </div>
        </div>

        {/* Principal Message / Strategic Philosophy Block with Leadership Desks Switcher */}
        <div className={`rounded-3xl p-6 sm:p-10 border shadow-lg mb-24 relative overflow-hidden ${
          isDarkMode ? "bg-gradient-to-b from-[#0e1731] to-[#090f20] border-[#1e293b]" : "bg-white border-slate-200"
        }`}>
          <div className="absolute top-0 right-0 w-48 h-48 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#1e3a8a]/5 rounded-full blur-3xl pointer-events-none" />
          
          <div className="relative z-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 pb-6 mb-8 border-b border-slate-700/10 dark:border-slate-800/80">
            <div>
              <span className="text-amber-500 text-xs font-bold uppercase tracking-widest block mb-1">Administrative Portals</span>
              <h3 className={`text-xl sm:text-2xl font-serif font-bold ${isDarkMode ? "text-white" : "text-slate-900"}`}>
                From the Principal & Correspondent’s Desk
              </h3>
            </div>
            
            {/* Interactive Selector with 2 desk endpoints */}
            <div className="flex bg-slate-500/10 p-1 rounded-xl border border-slate-700/10 dark:border-slate-800/60 w-full md:w-auto gap-1">
              <button
                onClick={() => setSelectedDesk("reddy")}
                className={`px-3 py-1.5 rounded-lg text-[11px] font-bold transition-all duration-250 cursor-pointer ${
                  selectedDesk === "reddy"
                    ? "bg-[#1e3a8a] text-white shadow"
                    : isDarkMode
                      ? "text-slate-400 hover:text-white"
                      : "text-slate-600 hover:text-slate-900"
                }`}
              >
                N. Jangi Reddy <span className="text-[9px] font-normal opacity-85 block sm:inline sm:ml-1">(Principal)</span>
              </button>
              
              <button
                onClick={() => setSelectedDesk("vasantha")}
                className={`px-3 py-1.5 rounded-lg text-[11px] font-bold transition-all duration-250 cursor-pointer ${
                  selectedDesk === "vasantha"
                    ? "bg-[#1e3a8a] text-white shadow"
                    : isDarkMode
                      ? "text-slate-400 hover:text-white"
                      : "text-slate-600 hover:text-slate-900"
                }`}
              >
                N. Vasantha Reddy <span className="text-[9px] font-normal opacity-85 block sm:inline sm:ml-1">(Secretary)</span>
              </button>
            </div>
          </div>

          <AnimatePresence mode="wait">
            {selectedDesk === "reddy" && (
              <motion.div
                key="reddy-desk"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.25 }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start relative z-10"
              >
                {/* Profile Card left */}
                <div className="lg:col-span-4 flex flex-col items-center text-center">
                  <div className="relative group mb-4">
                    <div className="absolute inset-0 bg-emerald-500 rounded-2xl blur-lg opacity-20 group-hover:opacity-30 transition-opacity" />
                    <div className="relative w-48 h-60 rounded-2xl overflow-hidden bg-slate-800 border-2 border-emerald-500 shadow-md">
                      <img 
                        src="https://i0.wp.com/serenitymodelschools.com/wp-content/uploads/2026/02/Serenity-Principal-Sir.png?resize=600%2C800&ssl=1"
                        alt="Nomula Jangi Reddy, Principal & Correspondent"
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover object-top absolute inset-0 transition-transform duration-500 scale-100 group-hover:scale-105 pointer-events-none"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/10 to-transparent z-10" />
                      <div className="absolute bottom-4 left-0 right-0 px-4 z-20 text-center">
                        <span className="text-white text-xs sm:text-sm font-bold tracking-tight block">Nomula Jangi Reddy</span>
                        <span className="text-emerald-400 text-[10px] uppercase font-bold tracking-wider block mt-0.5">Principal & Correspondent</span>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-1">
                    <p className="text-xs text-amber-500 font-bold uppercase tracking-widest font-mono">M.A., B.Ed</p>
                    <p className={`text-[11px] ${isDarkMode ? "text-slate-400" : "text-slate-500"}`}>20+ Years Educational Leadership</p>
                    <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-emerald-500/10 text-emerald-400 mt-2">
                       Active Admin Desk
                    </div>
                  </div>
                </div>

                {/* Message Body right */}
                <div className="lg:col-span-8 space-y-4 max-h-[460px] overflow-y-auto pr-2 custom-scrollbar">
                  <div className="inline-block px-3 py-1 rounded bg-emerald-500/10 text-emerald-400 font-bold text-xs uppercase tracking-wider">
                    Official Welcome Letter
                  </div>
                  
                  <h4 className={`text-lg sm:text-xl font-serif font-bold ${isDarkMode ? "text-amber-400" : "text-[#1e3a8a]"}`}>
                    Dear Students, Parents, and Guardians,
                  </h4>
                  
                  <div className={`space-y-4 text-xs sm:text-sm leading-relaxed ${isDarkMode ? "text-slate-300" : "text-slate-650"}`}>
                    <p>
                      With great pleasure, we welcome you back to Serenity Model High School for the new academic year. As we embark on this journey together, we are reminded of the profound truth: <strong className="text-amber-500 font-semibold">“Education begins at birth and continues through life.”</strong>
                    </p>

                    <div className="border-l-2 border-emerald-500 pl-3 my-3">
                      <h5 className="font-bold text-xs uppercase tracking-wider text-emerald-400 mb-1">Meeting the Challenges</h5>
                      <p>
                        Today, our education system faces the challenge of not only imparting knowledge but also fostering experiences that shape successful individuals. We believe that true education goes beyond mere competence and career aspirations; it must also cultivate character and compassion.
                      </p>
                    </div>

                    <div className="border-l-2 border-amber-500 pl-3 my-3">
                      <h5 className="font-bold text-xs uppercase tracking-wider text-amber-400 mb-1">Preparing Future Leaders</h5>
                      <p>
                        Children are the cornerstone of our nation’s future. At SERENITY, we are dedicated to preparing our students to meet challenges proactively, instilling in them the values of brotherhood and nationalism. Our goal is to empower each child to become a curious learner, critical thinker, and compassionate member of our global society.
                      </p>
                    </div>

                    <div className="border-l-2 border-sky-500 pl-3 my-3">
                      <h5 className="font-bold text-xs uppercase tracking-wider text-sky-400 mb-1">Continuous Improvement</h5>
                      <p>
                        We are committed to providing our students with the best learning experience possible. Our teachers are equipped with innovative teaching strategies to ensure effective learning. Additionally, we focus on developing students’ social skills, behavioral etiquettes, and work ethics to prepare them for success in all aspects of life.
                      </p>
                    </div>

                    <div className="border-l-2 border-indigo-500 pl-3 my-3">
                      <h5 className="font-bold text-xs uppercase tracking-wider text-[#10b981] mb-1">Adapting to Change</h5>
                      <p>
                        In today’s rapidly evolving world, we understand the importance of staying updated. Our curriculum is continuously revised to meet the changing needs and demands of the next generation.
                      </p>
                    </div>

                    <div className="border-l-2 border-purple-500 pl-3 my-3">
                      <h5 className="font-bold text-xs uppercase tracking-wider text-purple-400 mb-1">Partners in Education</h5>
                      <p>
                        We acknowledge the invaluable support of parents in shaping the future of our children. Your consistent support strengthens our efforts to mold young minds. We urge parents to actively participate in parent-teacher meetings and adhere to the school calendar, rules, instructions, and planner.
                      </p>
                    </div>

                    <p className="pt-2">
                      As we embark on another academic year, we assure you of our unwavering commitment to maintaining your trust and confidence in <strong className="text-[#10b981]">SERENITY MODEL HIGH SCHOOL</strong>. Together, let us nurture the potential within each child and pave the way for a brighter future.
                    </p>
                  </div>

                  <div className="pt-4 border-t border-slate-700/10 dark:border-slate-800/50">
                    <p className={`font-serif font-bold text-sm sm:text-base ${isDarkMode ? "text-slate-100" : "text-slate-800"}`}>
                      Nomula Jangi Reddy <span className="text-xs font-sans text-slate-400 font-normal">(M.A., B.Ed)</span>
                    </p>
                    <p className="text-xs text-amber-500 uppercase tracking-widest font-sans font-bold">
                      Principal & Correspondent, SMHS
                    </p>
                  </div>
                </div>
              </motion.div>
            )}

            {selectedDesk === "vasantha" && (
              <motion.div
                key="vasantha-desk"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.25 }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start relative z-10"
              >
                {/* Profile Card left */}
                <div className="lg:col-span-4 flex flex-col items-center text-center">
                  <div className="relative group mb-4">
                    <div className="absolute inset-0 bg-purple-500 rounded-2xl blur-lg opacity-20 group-hover:opacity-30 transition-opacity" />
                    <div className="relative w-48 h-60 rounded-2xl overflow-hidden bg-slate-800 border-2 border-purple-500 shadow-md">
                      <img 
                        src="https://i0.wp.com/serenitymodelschools.com/wp-content/uploads/2026/01/madam.png?resize=600%2C800&ssl=1"
                        alt="Nomula Vasantha Reddy, General Secretary"
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover object-top absolute inset-0 transition-transform duration-500 scale-100 group-hover:scale-105 pointer-events-none"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/10 to-transparent z-10" />
                      <div className="absolute bottom-4 left-0 right-0 px-4 z-20 text-center">
                        <span className="text-white text-xs sm:text-sm font-bold tracking-tight block">Nomula Vasantha Reddy</span>
                        <span className="text-purple-400 text-[10px] uppercase font-bold tracking-wider block mt-0.5">General Secretary</span>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-1">
                    <p className="text-xs text-amber-500 font-bold uppercase tracking-widest font-mono">Governing Board Desk</p>
                    <p className={`text-[11px] ${isDarkMode ? "text-slate-400" : "text-slate-500"}`}>Founding Pillar & Policy Architect</p>
                    
                    {/* Bilingual Toggle Button */}
                    <div className="mt-4">
                      <button
                        onClick={() => setTeluguLang(!teluguLang)}
                        className={`px-3 py-1.5 rounded-lg font-bold text-xs cursor-pointer flex items-center gap-1 transition ${
                          teluguLang 
                            ? "bg-purple-600 text-white hover:bg-purple-700" 
                            : "bg-sky-600 text-white hover:bg-sky-700"
                        }`}
                      >
                        {teluguLang ? "Read in English 🇬🇧" : "తెలుగులో చదవండి 🇮🇳"}
                      </button>
                    </div>
                  </div>
                </div>

                {/* Message Body right with Dual Language support */}
                <div className="lg:col-span-8 space-y-4 max-h-[460px] overflow-y-auto pr-2 custom-scrollbar">
                  <div className="flex items-center justify-between">
                    <div className="inline-block px-3 py-1 rounded bg-purple-500/10 text-purple-400 font-bold text-xs uppercase tracking-wider">
                      Secretary's Message • {teluguLang ? "తెలుగు" : "English"}
                    </div>
                  </div>

                  {teluguLang ? (
                    <div className={`space-y-4 text-xs sm:text-sm leading-relaxed ${isDarkMode ? "text-slate-350" : "text-slate-700"} font-sans`}>
                      <p className="text-[#10b981] font-serif font-bold text-sm sm:text-base italic leading-relaxed border-l-4 border-amber-500 pl-3">
                        “అక్షరాల పత్తి ఆరిపోతే విశ్వమంతా గాఢాంధకారమవుతుంది.” అన్నారు బ్రౌన్ మహాశయుడు.
                      </p>

                      <p>
                        విద్య అనేది కేవలం నాలుగు గోడల మధ్య సాగే ప్రక్రియ కాదు. చదవడం అంటూ తెలిస్తే ప్రతి మనిషి ఒక పుస్తకమే.
                      </p>

                      <p>
                        మనందరికీ రెండు రకాల విద్య అవసరం. ఒకటి జీవనోపాధి ఎలా కల్పించుకోవాలో నేర్పేది… రెండవది ఎలా జీవించాలో తెలిపేది.
                      </p>

                      <div className="bg-slate-500/5 p-4 rounded-xl border border-slate-700/10 dark:border-slate-800/40 my-3">
                        <p className="font-semibold text-amber-500 text-xs uppercase tracking-wider mb-1">విశిష్ట విద్యా ప్రణాళిక</p>
                        <p>
                          ఇవాళ ప్రపంచాన్ని శాసిస్తున్న సాంకేతిక విద్యను అందరి కంటే మిన్నగా అందిస్తూ…. వివేకవంతమైన విద్యకు విలువల్ని అద్ది… శీల నిర్మాణం, వ్యక్తిత్వ వికాసం… ప్రణాళికాబద్ధమైన బోధనా వ్యవస్థ సెరినిటీ సొంతం.
                        </p>
                      </div>

                      <p>
                        ప్రగతి పత్రంలో కనిపించే గ్రేడ్లు, పాయింట్లుతోపాటు విద్యార్థుల నైతికాభివృద్ధి కూడా నిత్యబోధనే.
                      </p>

                      <p>
                        ఎటువంటి ప్రచార ఆర్భాటాలు లేకుండా మా తల్లి దండ్రుల నమ్మకమే పెట్టుబడిగా విద్యార్ధులను అనేక రంగాలలో ప్రతిభావంతులుగా, అనేక విజయాలను సాధిస్తున్న మన సెరినిటీ ఈ సంవత్సరంలో కూడా అనేక నూతన ప్రణాళికలను ఆచరణలోకి తెస్తున్నాము.
                      </p>

                      <p>
                        ప్రశాంతమైన వాతావరణం, సువిశాలమైన తరగతి గదులు, విశాలమైన క్రీడాప్రాంగణం, నిరంతరం శ్రమించి అంకిత భావంతో పనిచేసే అధ్యాపక బృందం మా సొంతం.
                      </p>

                      <p className="font-medium text-[#10b981]">
                        చివరగా మహప్రస్థానంలో మరో మజిలి…. నూతన విద్యా సంవత్సరానికి స్వాగతం తెలుపుతూ… అలుపెరగని అకుంఠిత దీక్షతో నిరంతర కృషి చేస్తామని తెలియజేస్తూ…
                      </p>

                      <p className="font-serif italic font-semibold text-right pt-2">
                        నిరంతర విద్యా సేవలో…
                      </p>
                    </div>
                  ) : (
                    <div className="space-y-4 text-xs sm:text-sm leading-relaxed text-slate-350 font-sans">
                      <p className="text-[#10b981] font-serif font-bold text-sm sm:text-base italic leading-relaxed border-l-4 border-amber-500 pl-3">
                        "If the wick of letters (education) goes out, the whole universe falls into deep darkness," said Mr. C. P. Brown.
                      </p>

                      <p>
                        Education is not a process that happens only within four walls. If one knows how to truly read, every individual person is a full-fledged book.
                      </p>

                      <p>
                        We all need two distinct kinds of education: one that teaches us how to earn our livelihood, and the other that teaches us how to live.
                      </p>

                      <div className="bg-slate-500/5 p-4 rounded-xl border border-slate-700/10 dark:border-slate-800/40 my-3">
                        <p className="font-semibold text-amber-500 text-xs uppercase tracking-wider mb-1">Elite Academic System</p>
                        <p>
                          Offering the finest technological curriculum that rules today's global landscape, adding moral values to wise learning... character building, personality development, and a deeply planned teaching methodology are Serenity's hallmarks.
                        </p>
                      </div>

                      <p>
                        Along with the grades and points printed on school progress cards, students' ethical and moral development is our everyday teaching.
                      </p>

                      <p>
                        Without heavy promotion or commercial publicity schemes, and with the trust of our parents as our primary backing capital, Serenity has molded students to excel in various avenues. This academic term too, we are introducing state-of-the-art academic blueprints.
                      </p>

                      <p>
                        A peaceful study atmosphere, wide spacious classrooms, full-scale play grounds, and an experienced faculty working round-the-clock with complete dedication are what define us.
                      </p>

                      <p className="font-medium text-[#10b981]">
                        Ultimately, on this noble journey, we welcome everyone to the new academic year and declare our untiring persistence to guide young minds toward brilliance.
                      </p>

                      <p className="font-serif italic font-semibold text-right pt-2">
                        In continuous educational service...
                      </p>
                    </div>
                  )}

                  <div className="pt-4 border-t border-slate-700/10 dark:border-slate-800/50">
                    <p className={`font-serif font-bold text-sm sm:text-base ${isDarkMode ? "text-slate-100" : "text-slate-800"}`}>
                      Nomula Vasantha Reddy
                    </p>
                    <p className="text-xs text-amber-500 uppercase tracking-widest font-sans font-bold">
                      General Secretary, Serenity Group of Institutions
                    </p>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Mission, Vision & Core Values Interactive Toggles */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch mb-24">
          <div className="lg:col-span-1 flex flex-col justify-between">
            <div className="space-y-4">
              <h3 className="text-2.5xl font-serif font-bold text-amber-500">Our Pillars</h3>
              <p className={`text-sm ${isDarkMode ? "text-slate-400" : "text-slate-600"}`}>
                Everything we build is anchored on a clear institutional blueprint designed to produce ethical, high-competency alumni.
              </p>
              
              <div className="space-y-2 pt-4">
                {[
                  { id: "mission", label: "Mission Statement", icon: <Target className="w-4 h-4" /> },
                  { id: "vision", label: "Vision Statement", icon: <Eye className="w-4 h-4" /> },
                  { id: "values", label: "Educational Strategy", icon: <CheckCircle className="w-4 h-4" /> }
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setActiveTab(item.id as any)}
                    className={`nav-pills w-full flex items-center gap-3 px-4 py-3 text-sm font-bold rounded-xl transition cursor-pointer ${
                      activeTab === item.id
                        ? "bg-[#1e3a8a] text-white shadow-md border-l-4 border-amber-500"
                        : isDarkMode
                          ? "bg-slate-900/60 hover:bg-slate-800 text-slate-300"
                          : "bg-white hover:bg-slate-100 text-slate-700 border border-slate-200"
                    }`}
                  >
                    {item.icon} {item.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-2">
            <div className={`p-8 rounded-2xl border h-full flex flex-col justify-center shadow-sm ${
              isDarkMode ? "bg-slate-900/30 border-slate-800" : "bg-white border-slate-200"
            }`}>
              <AnimatePresence mode="wait">
                {activeTab === "mission" && (
                  <motion.div
                    key="mission"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="space-y-4"
                  >
                    <div className="w-12 h-12 rounded-lg bg-[#1e3a8a]/10 flex items-center justify-center text-[#1e3a8a] dark:text-sky-400">
                      <Target className="w-6 h-6" />
                    </div>
                    <h4 className="text-xl font-serif font-bold text-amber-500">SMHS Core Mission</h4>
                    <p className={`text-base leading-relaxed ${isDarkMode ? "text-slate-300" : "text-slate-600"}`}>
                      To deliver an modern  education under the SSC Curriculum Board framework that optimizes academic excellence, deep-rooted societal character development, and equal opportunity of holistic success for all levels.
                    </p>
                  </motion.div>
                )}

                {activeTab === "vision" && (
                  <motion.div
                    key="vision"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="space-y-4"
                  >
                    <div className="w-12 h-12 rounded-lg bg-amber-500/10 flex items-center justify-center text-amber-500">
                      <Eye className="w-6 h-6" />
                    </div>
                    <h4 className="text-xl font-serif font-bold text-amber-500">Futuristic Vision</h4>
                    <p className={`text-base leading-relaxed ${isDarkMode ? "text-slate-300" : "text-slate-600"}`}>
                      To be acknowledged as the standard of excellence for primary and high school board development in TS, seamlessly blending athletic training, and leadership to shape future world leaders who lead with honor.
                    </p>
                  </motion.div>
                )}

                {activeTab === "values" && (
                  <motion.div
                    key="values"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="space-y-4"
                  >
                    <div className="w-12 h-12 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-500">
                      <CheckCircle className="w-6 h-6" />
                    </div>
                    <h4 className="text-xl font-serif font-bold text-amber-500">Institutional Strategy</h4>
                    <ul className={`space-y-2 text-sm ${isDarkMode ? "text-slate-300" : "text-slate-600"}`}>
                      <li className="flex items-start gap-2">
                        <span className="text-amber-500 mt-1">•</span>
                        <span>Coordinating dynamic concept checkpoints instead of pure textbook examinations.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-amber-500 mt-1">•</span>
                        <span>Fulfilling smart visualization routines to explain complex natural phenomena.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-amber-500 mt-1">•</span>
                        <span>Hosting parent-faculty collaboration tables (PFT) once every terminal semester.</span>
                      </li>
                    </ul>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* Student-Centered Values Bento Grid */}
        <div className="border-t border-slate-800/15 dark:border-slate-200/10 pt-16">
          <h3 className="text-center font-serif text-2xl sm:text-3.5xl font-bold mb-12">
            The Serenity Student Centered Pathway
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreValues.map((val, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -5 }}
                className={`p-6 rounded-2xl border transition-all shadow-sm ${
                  isDarkMode 
                    ? "bg-[#0c1329] border-[#1e293b] hover:border-amber-500/40" 
                    : "bg-white border-slate-200 hover:border-[#1e3a8a]/40"
                }`}
              >
                <div className="mb-4">{val.icon}</div>
                <h4 className="text-base font-bold font-sans tracking-wide mb-2">{val.title}</h4>
                <p className={`text-xs sm:text-sm leading-relaxed ${isDarkMode ? "text-slate-400" : "text-slate-600"}`}>
                  {val.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
