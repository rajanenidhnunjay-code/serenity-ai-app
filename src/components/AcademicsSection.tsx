import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  BookOpen, 
  BadgeCheck,
  Shield,
  Palette,
  Users,
  MessageSquare,
  Award,
  HeartHandshake,
  School,
  Sparkles,
  Atom,
  ClipboardCheck,
  GraduationCap,
  Compass
} from "lucide-react";

interface AcademicsProps {
  isDarkMode: boolean;
  activeDivision?: "preprimary" | "primary" | "upperprimary" | "high" | "girlscampus" | "studyhour" | "iitneet";
  onDivisionChange?: (division: "preprimary" | "primary" | "upperprimary" | "high" | "girlscampus" | "studyhour" | "iitneet") => void;
}

export default function AcademicsSection({ 
  isDarkMode,
  activeDivision: propActiveDivision,
  onDivisionChange
}: AcademicsProps) {
  const [localActiveDivision, setLocalActiveDivision] = useState<"preprimary" | "primary" | "upperprimary" | "high" | "girlscampus" | "studyhour" | "iitneet">("preprimary");

  const activeDivision = propActiveDivision !== undefined ? propActiveDivision : localActiveDivision;
  const setActiveDivision = (division: "preprimary" | "primary" | "upperprimary" | "high" | "girlscampus" | "studyhour" | "iitneet") => {
    if (onDivisionChange) {
      onDivisionChange(division);
    } else {
      setLocalActiveDivision(division);
    }
  };
  const [activePetal, setActivePetal] = useState<number>(0);
  const [activeIitNeetNode, setActiveIitNeetNode] = useState<number>(0);

  const divisions = {
    preprimary: {
      title: "Pre-Primary School",
      grades: "Nursery, LKG & UKG",
      tagline: "Where Learning Feels Like Joy",
      desc: "At Serenity Model School, early childhood education is loaded with tactile, cognitive, and social joys. Our meticulously crafted kindergarten syllabus stimulates linguistic curiosity, sensory cognitive adaptation, and creative discovery in a loving environment.",
      stats: [
        { label: "Care Ratio", value: "15:1" },
        { label: "Learning Style", value: "Play-Way" },
        { label: "Safety Standard", value: "100%" }
      ],
      features: [
        "Phonetic reading guides & storytelling hours",
        "Sensory identification & basic memory puzzle kits",
        "Introductory music, rhymes & elementary coordination",
        "Creative hand drawing & safe clay modeling"
      ]
    },
    primary: {
      title: "Primary School",
      grades: "Grades 1 to 5",
      tagline: "Building Foundational Confidence",
      desc: "Our Primary wing practices systematic activity-based comprehension, prioritizing strong reading confidence, mental mathematics, and life sciences.",
      stats: [
        { label: "Class Ratio", value: "25:1" },
        { label: "Core Subjects", value: "6 Topics" },
        { label: "Language Modules", value: "3 Packs" }
      ],
      features: [
        "English grammar fundamentals & spelling checks",
        "Mental math & speed arithmetic cycles",
        "Syllabus-focused natural science study",
        "Handwriting development & creative paragraph writing"
      ]
    },
    upperprimary: {
      title: "Upper Primary School",
      grades: "Grades 6 to 8",
      tagline: "Transitioning to Abstract Reasoning",
      desc: "Designed to expand student curiosity into specific academic classifications. Upper Primary focuses on step-by-step textbook mastery, detailed writing drills, and physical sciences to build deep analytical understanding.",
      stats: [
        { label: "Class Ratio", value: "30:1" },
        { label: "Activity Hours", value: "2h / week" },
        { label: "Skill Modules", value: "Academic" }
      ],
      features: [
        "Pre-algebra foundations & board-aligned geometry",
        "Practical science observation books.",
        "Logical comprehension writing & spelling exercises",
        "Elocution competitions & formal student guidance"
      ]
    },
    high: {
      title: "High School Division",
      grades: "Grades 9 & 10",
      tagline: "Rigorous Board Examination Preparation",
      desc: "The critical academic milestone. Our high school system runs optimized, focused test preparatory modules mapping directly to the State Board Examination pattern, ensuring candidates gain optimal conceptual clarity and writing speed.",
      stats: [
        { label: "Class Ratio", value: "60:1" },
        { label: "Exam Mentorship", value: "Daily Sync" },
        { label: "SSC Pass Rate", value: "100%" }
      ],
      features: [
        "Thorough syllabus textbook revisions & state blueprint studies",
        "Comprehensive board answer-writing workshops & time tracking",
        "Physics  and Biology laboratory experiments.",
        "Targeted guidance sessions by senior subject experts"
      ]
    },
    girlscampus: {
      title: "Girls Campus",
      grades: "Early Years through Higher Grades",
      tagline: "Dedicated, Secure & Empowering Space",
      desc: "The Girls Campus is a dedicated, secure, and empowering space designed to cultivate academic excellence, confidence, and character in female students from early years through higher grades.",
      stats: [
        { label: "Security standard", value: "100%" },
        { label: "Empowerment", value: "High Care" },
        { label: "Parent Sync", value: "Daily" }
      ],
      features: [
        "Empowering Environment: A nurturing, secure, and respectful community where girls are valued, heard, and inspired.",
        "Holistic Development: A balanced approach that goes beyond textbooks to blend strong academics with moral values, life skills, and personal growth programs.",
        "Future Leadership: Guidance from caring, experienced educators to help students become confident individuals, compassionate citizens, and future leaders.",
        "Parent Partnership: A commitment to transparency, regular communication, and collaborative growth between the campus and families."
      ]
    },
    studyhour: {
      title: "Supervised Study Hours",
      grades: "Daily Focus & Doubt Clearance Sessions",
      tagline: "Structured Self-Study and Subject Guidance",
      desc: "At Serenity Model High School, learning extends beyond standard academic hours. To bridge the gap between classroom instruction and independent study, the school provides a structured, daily Study Hour from 3:00 PM to 5:00 PM immediately following regular classes (9:00 AM to 3:00 PM).",
      stats: [
        { label: "Daily Span", value: "2 Hours" },
        { label: "Mentoring Ratio", value: "30:1" },
        { label: "Prep Quality", value: "Regulated" }
      ],
      features: [
        "Reinforced Learning: Gives students a designated time to thoughtfully assimilate knowledge, revise daily lessons, and complete homework without rushing.",
        "Habit Formation: Cultivates essential lifelong skills, including personal discipline, consistency, and effective time management.",
        "Targeted Academic Support: Provides an accessible environment for students to tackle complex concepts or prepare thoroughly for upcoming assessments.",
        "Balanced Routine: Optimizes the school day by balancing active, peer-based classroom learning with quiet, focused self-study."
      ]
    },
    iitneet: {
      title: "Elite Competitions Foundation (IIT & NEET)",
      grades: "Middle School & High School (Standard 6 to 10)",
      tagline: "Academic Depth & Structured Entrance Pathway",
      desc: "Serenity Model High School offers a structured, balanced competitive preparation program designed to help students transition smoothly into elite engineering and medical tracks. Initiated as early as middle school, the program builds advanced analytical skills without compromising regular curricular learning or student well-being.",
      stats: [
        { label: "Level Advantage", value: "Early Start" },
        { label: "Conceptual Focus", value: "100% Clear" },
        { label: "Aim Streams", value: "IIT & NEET" }
      ],
      features: [
        "Early-Stage Foundation: Starts in middle school to give students a distinct advantage in timing, familiarizing them with advanced concepts well before high school.",
        "Conceptual Depth: Focuses heavily on deep conceptual clarity rather than rote learning, fostering long-term academic excellence.",
        "Stress-Free Rigor: Promotes discipline and persistent academic growth through an adaptive pace that protects student mental wellness.",
        "Holistic Evolution: Maintains a dual focus on rigorous exam preparation and overall personality development."
      ]
    }
  };



  return (
    <section id="academics" className={`py-24 transition-colors duration-300 ${isDarkMode ? "bg-[#0b1329]" : "bg-white"}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-amber-500/10 text-amber-500 tracking-wider uppercase mb-3">
            <BookOpen className="w-3.5 h-3.5" /> Academics at Serenity
          </div>
          <h2 className="text-3.5xl sm:text-5xl font-serif font-semibold tracking-tight mb-4">
            Intellectual Rigor, <span className="bg-gradient-to-r from-[#1e3a8a] to-amber-500 bg-clip-text text-transparent">Academic Honors</span>
          </h2>
          <p className={`text-base sm:text-lg ${isDarkMode ? "text-slate-400" : "text-slate-600"} leading-relaxed`}>
            Our curriculum meets the regulatory guidelines of the State Board of Secondary Education, delivering strong foundational confidence, active language engagement, and outstanding board exam preparation.
          </p>
        </div>

        {/* Division Selector Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {[
            { id: "preprimary", label: "Pre-Primary", desc: "Nursery & Kindergarten" },
            { id: "primary", label: "Primary", desc: "Grades 1 – 5" },
            { id: "upperprimary", label: "Upper Primary", desc: "Grades 6 – 8" },
            { id: "high", label: "High School", desc: "SSC Board Level" },
            { id: "iitneet", label: "Elite Competitions Foundation (IIT & NEET)", desc: "Competitive Edge" },
            { id: "girlscampus", label: "Girls Campus", desc: "Monitored Safe Wing" },
            { id: "studyhour", label: "Study Hour", desc: "Faculty-Supervised" }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveDivision(tab.id as any)}
              className={`px-6 py-4 rounded-2xl text-left border transition-all cursor-pointer ${
                activeDivision === tab.id
                  ? isDarkMode
                    ? "bg-slate-900 border-amber-500 text-white shadow-lg"
                    : "bg-amber-500/5 border-[#1e3a8a] text-[#1e3a8a] shadow-md"
                  : isDarkMode
                    ? "bg-slate-950/40 border-slate-800 text-slate-400 hover:text-white"
                    : "bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100"
              }`}
            >
              <div className="text-sm font-bold flex items-center gap-1.5 font-sans">
                {activeDivision === tab.id && <BadgeCheck className="w-4 h-4 text-amber-500" />}
                {tab.label}
              </div>
              <div className="text-xs text-slate-400 font-medium mt-0.5">{tab.desc}</div>
            </button>
          ))}
        </div>

        {/* Active Division Presentation Card */}
        <div className={`p-8 sm:p-12 rounded-3xl border border-slate-800/15 dark:border-slate-800 mb-20 shadow-md overflow-hidden relative ${
          isDarkMode ? "bg-slate-950/80" : "bg-slate-50"
        }`}>
          <div className="absolute right-0 top-0 w-64 h-64 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />
          
          <AnimatePresence mode="wait">
            <motion.div
              key={activeDivision}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.25 }}
              className="space-y-12"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                {/* Left Column: Descriptions */}
              <div className="lg:col-span-7 space-y-6">
                <div>
                  <span className="text-amber-500 font-bold uppercase tracking-wider text-xs block mb-1">
                    {divisions[activeDivision].grades}
                  </span>
                  <h3 className="text-2.5xl sm:text-3xl font-serif font-bold text-[#1e3a8a] dark:text-sky-300">
                    {divisions[activeDivision].title}
                  </h3>
                  <p className="text-sm text-slate-400 italic mt-1">
                    {divisions[activeDivision].tagline}
                  </p>
                </div>

                <p className={`text-sm sm:text-base leading-relaxed ${isDarkMode ? "text-slate-300" : "text-slate-600"}`}>
                  {divisions[activeDivision].desc}
                </p>

                {/* Features Checklist */}
                <div className={`grid gap-4 pt-2 ${
                  activeDivision === "girlscampus" ? "grid-cols-1" : "grid-cols-1 sm:grid-cols-2"
                }`}>
                  {divisions[activeDivision].features.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm">
                      <div className="w-5 h-5 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-500 shrink-0 mt-0.5 font-bold">
                        ✓
                      </div>
                      <span className={`${isDarkMode ? "text-slate-300" : "text-slate-700"} leading-relaxed`}>
                        {feat.includes(":") ? (
                          <>
                            <strong className="text-[#1e3a8a] dark:text-sky-305 font-bold font-sans block sm:inline mr-1">
                              {feat.split(":")[0]}:
                            </strong>
                            <span className="opacity-95">{feat.split(":").slice(1).join(":")}</span>
                          </>
                        ) : (
                          feat
                        )}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Stats list */}
                <div className="grid grid-cols-3 gap-4 pt-6 border-t border-slate-800/10 dark:border-slate-800">
                  {divisions[activeDivision].stats.map((stat, idx) => (
                    <div key={idx} className="space-y-1">
                      <span className="text-2xl font-serif font-bold text-amber-500 block">
                        {stat.value}
                      </span>
                      <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                        {stat.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>



              {/* Right Column: Visual Frame */}
              <div className="lg:col-span-5 flex flex-col justify-center">
                {activeDivision === "girlscampus" ? (
                  <div className="flex flex-col items-center">
                    {/* Flower Ring / Petal layout */}
                    <div className="relative w-full aspect-square max-w-[280px] sm:max-w-[340px] mx-auto mb-6 flex items-center justify-center">
                      
                      {/* Central Circle */}
                      <div className={`absolute w-[110px] h-[110px] sm:w-[130px] sm:h-[130px] rounded-full flex flex-col items-center justify-center text-center p-3 sm:p-4 z-40 shadow-xl border select-none transition-all duration-300 ${
                        isDarkMode ? "bg-slate-900 border-heritage-gold/30" : "bg-white border-slate-200"
                      }`}>
                        <div className="text-[7px] sm:text-[9px] font-bold text-amber-500 uppercase tracking-widest font-sans leading-tight">
                          Serenity
                        </div>
                        <div className={`text-[8px] sm:text-[10px] font-extrabold uppercase tracking-tight leading-snug my-1 ${
                          isDarkMode ? "text-slate-100" : "text-slate-900"
                        }`}>
                          Girls Campus
                        </div>
                        <div className="text-[6px] sm:text-[8px] text-slate-400 font-medium leading-normal italic">
                          Holistic Progress Tracking
                        </div>
                      </div>

                      {/* SVG Background Path Petals */}
                      <svg className="absolute inset-0 w-full h-full pointer-events-none overflow-visible" viewBox="0 0 300 300">
                        <defs>
                          <radialGradient id="skyGrad" cx="50%" cy="50%" r="50%">
                            <stop offset="0%" stopColor="#0ea5e9" stopOpacity="0.1" />
                            <stop offset="100%" stopColor="#0ea5e9" stopOpacity="0.4" />
                          </radialGradient>
                          <radialGradient id="blueGrad" cx="50%" cy="50%" r="50%">
                            <stop offset="0%" stopColor="#2563eb" stopOpacity="0.1" />
                            <stop offset="100%" stopColor="#2563eb" stopOpacity="0.4" />
                          </radialGradient>
                          <radialGradient id="emGrad" cx="50%" cy="50%" r="50%">
                            <stop offset="0%" stopColor="#10b981" stopOpacity="0.1" />
                            <stop offset="100%" stopColor="#10b981" stopOpacity="0.4" />
                          </radialGradient>
                          <radialGradient id="ambGrad" cx="50%" cy="50%" r="50%">
                            <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.1" />
                            <stop offset="100%" stopColor="#f59e0b" stopOpacity="0.4" />
                          </radialGradient>
                          <radialGradient id="purpGrad" cx="50%" cy="50%" r="50%">
                            <stop offset="0%" stopColor="#a855f7" stopOpacity="0.1" />
                            <stop offset="100%" stopColor="#a855f7" stopOpacity="0.4" />
                          </radialGradient>
                        </defs>

                        {/* Petal 0: Environment (Top Center) */}
                        <path 
                          d="M150,150 C120,70 180,70 150,150" 
                          fill="url(#skyGrad)" 
                          stroke="#0ea5e9" 
                          strokeWidth={activePetal === 0 ? "2.5" : "1"} 
                          className="transition-all duration-300 opacity-80"
                        />
                        {/* Petal 1: Curriculum (Top Right) */}
                        <path 
                          d="M150,150 C210,95 240,155 150,150" 
                          fill="url(#blueGrad)" 
                          stroke="#2563eb" 
                          strokeWidth={activePetal === 1 ? "2.5" : "1"} 
                          className="transition-all duration-300 opacity-80"
                        />
                        {/* Petal 2: Extracurriculars (Bottom Right) */}
                        <path 
                          d="M150,150 C230,200 170,250 150,150" 
                          fill="url(#emGrad)" 
                          stroke="#10b981" 
                          strokeWidth={activePetal === 2 ? "2.5" : "1"} 
                          className="transition-all duration-300 opacity-80"
                        />
                        {/* Petal 3: Faculty (Bottom Left) */}
                        <path 
                          d="M150,150 C130,250 70,200 150,150" 
                          fill="url(#ambGrad)" 
                          stroke="#f59e0b" 
                          strokeWidth={activePetal === 3 ? "2.5" : "1"} 
                          className="transition-all duration-300 opacity-80"
                        />
                        {/* Petal 4: Parent (Top Left) */}
                        <path 
                          d="M150,150 C60,155 90,95 150,150" 
                          fill="url(#purpGrad)" 
                          stroke="#a855f7" 
                          strokeWidth={activePetal === 4 ? "2.5" : "1"} 
                          className="transition-all duration-300 opacity-80"
                        />
                      </svg>

                      {/* Interactive Buttons Overlaid at specific positions */}
                      
                      {/* Button 0: Top (Environment) */}
                      <button 
                        onMouseEnter={() => setActivePetal(0)}
                        onClick={() => setActivePetal(0)}
                        className={`absolute top-1 transform -translate-y-1/2 left-1/2 -translate-x-1/2 p-2.5 rounded-full z-50 transition-all duration-300 shadow-md ${
                          activePetal === 0 
                            ? "bg-sky-500 text-white scale-110 ring-4 ring-sky-300/30" 
                            : "bg-white dark:bg-slate-900 border border-sky-400/40 text-sky-500 scale-100 hover:scale-105"
                        }`}
                      >
                        <Shield className="w-5 h-5 sm:w-6 sm:h-6" />
                      </button>

                      {/* Button 1: Top Right (Curriculum) */}
                      <button 
                        onMouseEnter={() => setActivePetal(1)}
                        onClick={() => setActivePetal(1)}
                        className={`absolute top-[24%] right-[-8px] p-2.5 rounded-full z-50 transition-all duration-300 shadow-md ${
                          activePetal === 1 
                            ? "bg-blue-600 text-white scale-110 ring-4 ring-blue-400/30" 
                            : "bg-white dark:bg-slate-900 border border-blue-400/40 text-blue-600 scale-100 hover:scale-105"
                        }`}
                      >
                        <BookOpen className="w-5 h-5 sm:w-6 sm:h-6" />
                      </button>

                      {/* Button 2: Bottom Right (Extracurriculars) */}
                      <button 
                        onMouseEnter={() => setActivePetal(2)}
                        onClick={() => setActivePetal(2)}
                        className={`absolute bottom-1 right-[11%] p-2.5 rounded-full z-50 transition-all duration-300 shadow-md ${
                          activePetal === 2 
                            ? "bg-emerald-500 text-white scale-110 ring-4 ring-emerald-300/30" 
                            : "bg-white dark:bg-slate-900 border border-emerald-400/40 text-emerald-500 scale-100 hover:scale-105"
                        }`}
                      >
                        <Palette className="w-5 h-5 sm:w-6 sm:h-6" />
                      </button>

                      {/* Button 3: Bottom Left (Faculty) */}
                      <button 
                        onMouseEnter={() => setActivePetal(3)}
                        onClick={() => setActivePetal(3)}
                        className={`absolute bottom-1 left-[11%] p-2.5 rounded-full z-50 transition-all duration-300 shadow-md ${
                          activePetal === 3 
                            ? "bg-amber-500 text-white scale-110 ring-4 ring-amber-300/30" 
                            : "bg-white dark:bg-slate-900 border border-amber-400/40 text-amber-500 scale-100 hover:scale-105"
                        }`}
                      >
                        <Award className="w-5 h-5 sm:w-6 sm:h-6" />
                      </button>

                      {/* Button 4: Top Left (Parent) */}
                      <button 
                        onMouseEnter={() => setActivePetal(4)}
                        onClick={() => setActivePetal(4)}
                        className={`absolute top-[24%] left-[-8px] p-2.5 rounded-full z-50 transition-all duration-300 shadow-md ${
                          activePetal === 4 
                            ? "bg-purple-500 text-white scale-110 ring-4 ring-purple-300/30" 
                            : "bg-white dark:bg-slate-900 border border-purple-400/40 text-purple-500 scale-100 hover:scale-105"
                        }`}
                      >
                        <HeartHandshake className="w-5 h-5 sm:w-6 sm:h-6" />
                      </button>
                    </div>

                    {/* Active Petal Detail Box */}
                    <div className={`p-4 sm:p-5 rounded-2xl border w-full transition-all duration-300 ${
                      isDarkMode ? "bg-slate-900/60 border-slate-800" : "bg-white border-slate-200"
                    }`}>
                      <div className="flex items-center gap-2 mb-2">
                        <span className={`w-2.5 h-2.5 rounded-full ${
                          activePetal === 0 ? "bg-sky-500" :
                          activePetal === 1 ? "bg-blue-600" :
                          activePetal === 2 ? "bg-emerald-500" :
                          activePetal === 3 ? "bg-amber-500" : "bg-purple-500"
                        }`} />
                        <h4 className="text-xs sm:text-sm font-bold uppercase tracking-wider font-sans">
                          {[
                            "Environment & Infrastructure",
                            "Curriculum",
                            "Extracurriculars & Arts",
                            "Faculty & Mentorship",
                            "Parent Integration"
                          ][activePetal]}
                        </h4>
                      </div>
                      <p className={`text-xs sm:text-sm leading-relaxed ${isDarkMode ? "text-slate-400" : "text-slate-600"}`}>
                        {[
                          "Dedicated, girl-friendly classrooms, separate common areas, and a highly secure campus layout.",
                          "A balanced blend of robust academics, value-based education, and practical life skills.",
                          "Diverse opportunities in sports, arts, cultural events, and targeted personality development.",
                          "A team of caring, experienced educators providing individualized attention and personal guidance.",
                          "Transparent parent-teacher communication channels and holistic student progress tracking."
                        ][activePetal]}
                      </p>
                    </div>
                  </div>
                ) : activeDivision === "iitneet" ? (
                  <div className="flex flex-col items-center">
                    {/* IIT & NEET Radial / Sector layout */}
                    <div className="relative w-full aspect-square max-w-[280px] sm:max-w-[340px] mx-auto mb-6 flex items-center justify-center">
                      <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 320 320">
                        <defs>
                          <linearGradient id="iit_grad_top" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#8b5cf6" />
                            <stop offset="100%" stopColor="#3b82f6" />
                          </linearGradient>
                          <linearGradient id="iit_grad_right" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#0ea5e9" />
                            <stop offset="100%" stopColor="#10b981" />
                          </linearGradient>
                          <linearGradient id="iit_grad_bottom" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#10b981" stopOpacity="0.4" />
                            <stop offset="100%" stopColor="#f59e0b" stopOpacity="0.8" />
                          </linearGradient>
                          <linearGradient id="iit_grad_left" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#f43f5e" />
                            <stop offset="100%" stopColor="#8b5cf6" />
                          </linearGradient>
                        </defs>

                        {/* Connected lines resembling the path diagram */}
                        <path d="M 160 160 Q 160 80 160 35" fill="none" stroke="url(#iit_grad_top)" strokeWidth="4" className="opacity-70" />
                        <path d="M 160 160 Q 240 160 285 160" fill="none" stroke="url(#iit_grad_right)" strokeWidth="4" className="opacity-70" />
                        <path d="M 160 160 Q 160 240 160 285" fill="none" stroke="url(#iit_grad_bottom)" strokeWidth="4" className="opacity-70" />
                        <path d="M 160 160 Q 80 160 35 160" fill="none" stroke="url(#iit_grad_left)" strokeWidth="4" className="opacity-70" />
                        
                        <circle cx="160" cy="160" r="110" fill="none" stroke="currentColor" strokeWidth="1" className="text-slate-200/10 dark:text-slate-800/10" strokeDasharray="6 4" />
                      </svg>

                      {/* Central Circle Hub */}
                      <div className={`absolute w-[120px] h-[120px] sm:w-[140px] sm:h-[140px] rounded-full flex flex-col items-center justify-center text-center p-3 sm:p-4 z-10 shadow-2xl transition-all duration-300 border ${
                        isDarkMode 
                          ? "bg-slate-950 border-amber-500/20 shadow-amber-500/5 text-white" 
                          : "bg-white border-slate-200 shadow-slate-200/50 text-slate-900"
                      }`}>
                        <div className="text-[7.5px] sm:text-[9px] font-bold text-amber-500 uppercase tracking-widest leading-none mb-1">
                          Serenity High
                        </div>
                        <div className="text-[10px] sm:text-xs font-serif font-extrabold uppercase tracking-tight leading-tight bg-gradient-to-r from-blue-600 to-amber-500 bg-clip-text text-transparent">
                          IIT & NEET
                        </div>
                        <div className="text-[6.5px] sm:text-[8px] font-bold text-slate-400 uppercase tracking-widest my-0.5">
                          FOUNDATION
                        </div>
                        <div className="text-[5.5px] sm:text-[7px] text-slate-400 font-semibold leading-normal uppercase tracking-wider">
                          Deliverables
                        </div>
                      </div>

                      {/* Node buttons */}
                      {[
                        { icon: Atom, title: "Academic Fundamentals", color: "bg-indigo-600 text-white shadow-indigo-500/20", ringColor: "ring-indigo-300", pos: "top-1 left-1/2 -translate-x-1/2" },
                        { icon: ClipboardCheck, title: "Progress Metrics", color: "bg-sky-500 text-white shadow-sky-500/20", ringColor: "ring-sky-300", pos: "right-1 top-1/2 -translate-y-1/2" },
                        { icon: GraduationCap, title: "Targeted Support", color: "bg-emerald-500 text-white shadow-emerald-500/20", ringColor: "ring-emerald-300", pos: "bottom-1 left-1/2 -translate-x-1/2" },
                        { icon: Compass, title: "Future Planning", color: "bg-rose-500 text-white shadow-rose-500/20", ringColor: "ring-rose-300", pos: "left-1 top-1/2 -translate-y-1/2" }
                      ].map((node, index) => {
                        const IconComponent = node.icon;
                        const isActive = activeIitNeetNode === index;
                        return (
                          <button
                            key={index}
                            onMouseEnter={() => setActiveIitNeetNode(index)}
                            onClick={() => setActiveIitNeetNode(index)}
                            className={`absolute ${node.pos} p-2.5 sm:p-3 rounded-full z-20 cursor-pointer transition-all duration-300 shadow-md ${
                              isActive
                                ? `${node.color} scale-110 ring-4 ${node.ringColor}/30`
                                : "bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-500 dark:text-slate-400 scale-100 hover:scale-105"
                            }`}
                          >
                            <IconComponent className="w-5 h-5 sm:w-6 sm:h-6" />
                          </button>
                        );
                      })}
                    </div>

                    {/* Active Node Detail Box */}
                    <div className={`p-4 sm:p-5 rounded-2xl border w-full transition-all duration-300 ${
                      isDarkMode ? "bg-slate-900/60 border-slate-800" : "bg-white border-slate-200"
                    }`}>
                      <div className="flex items-center gap-2 mb-2">
                        <span className={`w-2.5 h-2.5 rounded-full ${
                          activeIitNeetNode === 0 ? "bg-indigo-500" :
                          activeIitNeetNode === 1 ? "bg-sky-500" :
                          activeIitNeetNode === 2 ? "bg-emerald-500" : "bg-rose-500"
                        }`} />
                        <h4 className="text-xs sm:text-sm font-bold uppercase tracking-wider font-sans text-slate-800 dark:text-slate-200">
                          {[
                            "Academic Fundamentals",
                            "Progress Metrics",
                            "Targeted Support",
                            "Future Planning"
                          ][activeIitNeetNode]}
                        </h4>
                      </div>
                      <p className={`text-xs sm:text-sm leading-relaxed ${isDarkMode ? "text-slate-400" : "text-slate-600"}`}>
                        {[
                          "Intensive coaching in core sciences and mathematics, driven by structured, comprehensive study plans designed to transition smoothly into elite engineering and medical tracks.",
                          "Routine assessments, benchmarking mock tests, and systematic performance tracking to build accuracy, speed, and exam confidence.",
                          "Personalized attention, active doubt-clearing sessions, and individual mentoring to support students' logical progression.",
                          "Dedicated career guidance and counseling to assist students in choosing streams and mapping future goals."
                        ][activeIitNeetNode]}
                      </p>
                    </div>
                  </div>
                ) : activeDivision === "studyhour" ? (
                  <div className={`p-6 rounded-2xl border ${
                    isDarkMode ? "bg-[#0b1329] border-[#1e293b]" : "bg-white border-slate-200"
                  }`}>
                    <span className="text-xs text-slate-400 uppercase tracking-widest block mb-4 font-bold">Daily Study Timeline</span>
                    <div className="space-y-4">
                      {[
                        { time: "03:00 PM - 03:15 PM", title: "Attendance & Setup", desc: "Settle in, organize syllabus books and specify doubt cards." },
                        { time: "03:15 PM - 04:15 PM", title: "Quiet Self-Study", desc: "Focused individual resolution of daily notes and exercises." },
                        { time: "04:15 PM - 05:00 PM", title: "Doubt Clearance & Review", desc: "One-on-one faculty mentoring and individual support sessions." }
                      ].map((item, idx) => (
                        <div key={idx} className="relative pl-5 border-l-2 border-amber-500/30 space-y-1">
                          <div className="absolute -left-[6px] top-1.5 w-2.5 h-2.5 rounded-full bg-amber-500" />
                          <div className="text-[10px] font-bold text-amber-500 tracking-wider uppercase">{item.time}</div>
                          <div className="text-xs font-bold text-slate-800 dark:text-slate-200">{item.title}</div>
                          <div className="text-[11px] text-slate-500 dark:text-slate-400 leading-normal">{item.desc}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                ) : (
                  <div className={`p-6 rounded-2xl border ${
                    isDarkMode ? "bg-[#0b1329] border-[#1e293b]" : "bg-white border-slate-200"
                  }`}>
                    <span className="text-xs text-slate-400 uppercase tracking-widest block mb-4 font-bold">Curriculum Focus Alignment</span>
                    <div className="space-y-4">
                      {(activeDivision === "preprimary" ? [
                        { subject: "Creative Handwriting", level: 15 },
                        { subject: "Linguistic & Reading Fluency", level: 10 },
                        { subject: "Creative Arts & Verbal Expression", level: 20 }
                      ] : activeDivision === "primary" ? [
                        { subject: "Analytical Mathematics", level: 30 },
                        { subject: "Natural Sciences & Experiment", level: 40 },
                        { subject: "Linguistic & Reading Fluency", level: 50 },
                        { subject: "Creative Arts & Verbal Expression", level: 60 }
                      ] : activeDivision === "upperprimary" ? [
                        { subject: "Analytical Mathematics", level: 80 },
                        { subject: "Natural Sciences & Experiment", level: 90 },
                        { subject: "Linguistic & Reading Fluency", level: 90 },
                        { subject: "Creative Arts & Verbal Expression", level: 90 }
                      ] : activeDivision === "high" ? [
                        { subject: "Analytical Mathematics", level: 100 },
                        { subject: "Natural Sciences & Experiment", level: 100 },
                        { subject: "Linguistic & Reading Fluency", level: 100 },
                        { subject: "Creative Arts & Verbal Expression", level: 100 }
                      ] : [
                        { subject: "Analytical Mathematics", level: 95 },
                        { subject: "Natural Sciences & Experiment", level: 90 },
                        { subject: "Linguistic & Reading Fluency", level: 85 },
                        { subject: "Creative Arts & Verbal Expression", level: 80 }
                      ]).map((bar, bidx) => (
                        <div key={bidx} className="space-y-1.5">
                          <div className="flex justify-between text-xs font-bold">
                            <span>{bar.subject}</span>
                            <span className="text-amber-500">{bar.level}%</span>
                          </div>
                          <div className="w-full bg-slate-200 dark:bg-slate-800 h-2 rounded-full overflow-hidden">
                            <motion.div 
                              initial={{ width: 0 }}
                              animate={{ width: `${bar.level}%` }}
                              transition={{ duration: 1, delay: 0.1 }}
                              className="bg-gradient-to-r from-[#1e3a8a] to-amber-500 h-full rounded-full"
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Campus Gallery (Exclusive to Girls Campus view) */}
            {activeDivision === "girlscampus" && (
              <div className="pt-8 border-t border-slate-200/10 dark:border-slate-800/20">
                <h4 className="text-sm font-bold uppercase tracking-wider text-amber-500 mb-6 flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-amber-500" /> Girls Campus Highlights & Facilities
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Photo 1: Girls Campus Overview */}
                  <div className="group overflow-hidden rounded-2xl border border-slate-200/60 dark:border-slate-800/40 bg-white dark:bg-slate-900 shadow-sm hover:shadow-md transition-all duration-300">
                    <div className="aspect-[4/3] overflow-hidden relative bg-slate-100 dark:bg-slate-950">
                      <img 
                        src="https://i0.wp.com/serenitymodelschools.com/wp-content/uploads/2025/12/girls-campus-page.png?resize=800%2C800&ssl=1" 
                        alt="Girls Campus Activity & Academics" 
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <div className="p-4 bg-slate-50/50 dark:bg-slate-900/10">
                      <p className="font-serif font-bold text-sm text-[#1e3a8a] dark:text-sky-300">Campus Overview</p>
                      <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">Nurturing and collaborative environment designed for girls' absolute learning clarity and focus.</p>
                    </div>
                  </div>

                  {/* Photo 2: Students Collaborative Learning */}
                  <div className="group overflow-hidden rounded-2xl border border-slate-200/60 dark:border-slate-800/40 bg-white dark:bg-slate-900 shadow-sm hover:shadow-md transition-all duration-300">
                    <div className="aspect-[4/3] overflow-hidden relative bg-slate-100 dark:bg-slate-950">
                      <img 
                        src="https://i0.wp.com/serenitymodelschools.com/wp-content/uploads/2026/02/girls-campus-new.png?resize=800%2C800&ssl=1" 
                        alt="Girls Campus Collaboration" 
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <div className="p-4 bg-slate-50/50 dark:bg-slate-900/10">
                      <p className="font-serif font-bold text-sm text-[#1e3a8a] dark:text-sky-300">Academic Leadership</p>
                      <p className="text-xs text-slate-500 dark:text-slate-400 mt-1"> Students actively participating in leadership activities and teamwork.</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* IIT & NEET Foundation Gallery */}
            {activeDivision === "iitneet" && (
              <div className="pt-8 border-t border-slate-200/10 dark:border-slate-800/20">
                <h4 className="text-sm font-bold uppercase tracking-wider text-amber-500 mb-6 flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-amber-500" /> ELITE COMPETITIONS FOUNDATING PROGRAM HIGHLIGHTS
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Photo 1: IIT & NEET Course Overview */}
                  <div className="group overflow-hidden rounded-2xl border border-slate-200/60 dark:border-slate-800/40 bg-white dark:bg-slate-900 shadow-sm hover:shadow-md transition-all duration-300">
                    <div className="aspect-[4/3] overflow-hidden relative bg-slate-100 dark:bg-slate-950">
                      <img 
                        src="https://i0.wp.com/serenitymodelschools.com/wp-content/uploads/2026/01/iitneet.png?resize=800%2C800&ssl=1" 
                        alt="IIT NEET Core Course Overview" 
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <div className="p-4 bg-slate-50/50 dark:bg-slate-900/10">
                      <p className="font-serif font-bold text-sm text-[#1e3a8a] dark:text-sky-300">IIT-JEE & NEET Course Architecture</p>
                      <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">Structured foundation model designed for grade 6-10 students, focusing on mathematical aptitude , analytical capabilities , molecular biology , deep physics  , organic chemistry and logical reasoning</p>
                    </div>
                  </div>

                  {/* Photo 2: Live Scientific Learning / Medical focus */}
                  <div className="group overflow-hidden rounded-2xl border border-slate-200/60 dark:border-slate-800/40 bg-white dark:bg-slate-900 shadow-sm hover:shadow-md transition-all duration-300">
                    <div className="aspect-[4/3] overflow-hidden relative bg-slate-100 dark:bg-slate-950">
                      <img 
                        src="https://i0.wp.com/serenitymodelschools.com/wp-content/uploads/2026/02/neet-new.png?resize=800%2C800&ssl=1" 
                        alt="NEET Foundation Stream Details" 
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <div className="p-4 bg-slate-50/50 dark:bg-slate-900/10">
                      <p className="font-serif font-bold text-sm text-[#1e3a8a] dark:text-sky-300">Elite Advanced Curricular Pathways</p>
                      <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                        Accelerate your journey toward India’s premier institutions with our elite, target-oriented curriculum.
                        Master the deep concepts and advanced problem-solving required to conquer the IIT-JEE and NEET exams.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Study Hour Gallery */}
            {activeDivision === "studyhour" && (
              <div className="pt-8 border-t border-slate-200/10 dark:border-slate-800/20">
                <h4 className="text-sm font-bold uppercase tracking-wider text-amber-500 mb-6 flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-amber-500" /> STUDY HOUR CAMPUS HIGHLIGHTS & ACTIVITIES
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Photo 1: Focus Study session */}
                  <div className="group overflow-hidden rounded-2xl border border-slate-200/60 dark:border-slate-800/40 bg-white dark:bg-slate-900 shadow-sm hover:shadow-md transition-all duration-300">
                    <div className="aspect-[4/3] overflow-hidden relative bg-slate-100 dark:bg-slate-950">
                      <img 
                        src="https://i0.wp.com/serenitymodelschools.com/wp-content/uploads/2026/01/DSC02307-e-scaled.webp?resize=1020%2C680&ssl=1" 
                        alt="Classroom Study Session" 
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <div className="p-4 bg-slate-50/50 dark:bg-slate-900/10">
                      <p className="font-serif font-bold text-sm text-[#1e3a8a] dark:text-sky-300">Supervised Self-Study</p>
                      <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">Students working independently under faculty guidance to assimilate daily subjects and complete curriculum milestones.</p>
                    </div>
                  </div>

                  {/* Photo 2: Program Framework */}
                  <div className="group overflow-hidden rounded-2xl border border-slate-200/60 dark:border-slate-800/40 bg-white dark:bg-slate-900 shadow-sm hover:shadow-md transition-all duration-300">
                    <div className="aspect-[4/3] overflow-hidden relative bg-slate-100 dark:bg-slate-950">
                      <img 
                        src="https://i0.wp.com/serenitymodelschools.com/wp-content/uploads/2026/02/studyhour-new.png?resize=800%2C800&ssl=1" 
                        alt="Study Hour Objectives" 
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <div className="p-4 bg-slate-50/50 dark:bg-slate-900/10">
                      <p className="font-serif font-bold text-sm text-[#1e3a8a] dark:text-sky-300">Daily Academic Extension</p>
                      <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">Structured 3:00 PM to 5:00 PM routine supporting reinforced retention, habits of excellence, and active doubt clearing.</p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
        </div>



      </div>
    </section>
  );
}
