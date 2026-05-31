import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Menu, 
  X, 
  ChevronDown, 
  BookOpen, 
  FileText, 
  Sparkles, 
  MapPin, 
  Calendar, 
  Briefcase, 
  PhoneCall, 
  ShieldCheck, 
  CheckCircle2, 
  ClipboardList, 
  HelpCircle,
  GraduationCap,
  Sun,
  Moon,
  ArrowRight
} from "lucide-react";
import { SchoolSection } from "../types";
import SchoolLogo from "./SchoolLogo";

interface NavigationProps {
  currentSection: SchoolSection;
  onNavigate: (section: SchoolSection, academicTab?: "preprimary" | "primary" | "upperprimary" | "high" | "girlscampus" | "studyhour" | "iitneet") => void;
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

export default function Navigation({ 
  currentSection, 
  onNavigate, 
  isDarkMode, 
  toggleDarkMode 
}: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeMegaMenu, setActiveMegaMenu] = useState<"academics" | "admissions" | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Home", value: "home" as SchoolSection },
    { label: "Virtual Tour", value: "tour" as SchoolSection },
    { label: "About Us", value: "about" as SchoolSection },
    { label: "Alumni", value: "alumni" as SchoolSection },
    { label: "Academics", value: "academics" as SchoolSection, hasMega: true, megaType: "academics" as const },
    { label: "Admissions", value: "admissions" as SchoolSection, hasMega: true, megaType: "admissions" as const },
    { label: "Career Portal", value: "career" as SchoolSection },
    { label: "Media Gallery", value: "media" as SchoolSection },
    { label: "Events", value: "events" as SchoolSection },
    { label: "Contact Us", value: "contact" as SchoolSection }
  ];

  const handleItemClick = (section: SchoolSection, academicTab?: "preprimary" | "primary" | "upperprimary" | "high" | "girlscampus" | "studyhour" | "iitneet") => {
    onNavigate(section, academicTab);
    setIsOpen(false);
    setActiveMegaMenu(null);
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <>
      <header
        id="navbar-header"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? isDarkMode 
              ? "bg-heritage-dark/95 backdrop-blur-md shadow-lg border-b border-heritage-gold/20" 
              : "bg-heritage-cream/95 backdrop-blur-md shadow-lg border-b border-heritage-gold/20"
            : "bg-transparent"
        }`}
      >
        {/* Urgent Notification News Ticker */}
        <div id="news-ticker" className="bg-heritage-emerald text-heritage-gold py-1.5 px-4 text-xs font-semibold tracking-wide flex items-center justify-between border-b border-heritage-gold/20">
          <div className="flex items-center gap-2 overflow-hidden w-full max-w-7xl mx-auto">
            <span className="bg-heritage-gold text-heritage-dark font-extrabold px-2 py-0.5 rounded text-[10px] uppercase shrink-0 animate-pulse">Announcement</span>
            <div className="animate-marquee whitespace-nowrap overflow-hidden">
              Admissions now Open for Academic Session &nbsp;•&nbsp; 
              Scholarship Diagnostic Evaluation Test scheduled for incoming registrations &nbsp;•&nbsp; 
              Apply online today.
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div 
              id="brand-logo"
              onClick={() => handleItemClick("home")}
              className="flex items-center gap-3 cursor-pointer group"
            >
              <div className="relative w-12 h-12 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                <SchoolLogo size={48} />
              </div>
              <div className="flex flex-col">
                <span className={`text-lg font-serif font-bold tracking-tight transition-colors ${
                  isDarkMode ? "text-heritage-cream" : "text-heritage-emerald"
                }`}>
                  SERENITY
                </span>
                <span className="text-[10px] font-bold text-heritage-gold tracking-widest uppercase">
                  MODEL HIGH SCHOOL
                </span>
              </div>
            </div>

            {/* Desktop Nav */}
            <nav id="desktop-nav" className="hidden lg:flex items-center gap-1">
              {navItems.map((item) => (
                <div 
                  key={item.value}
                  className="relative"
                  onMouseEnter={() => {
                    if (item.hasMega) setActiveMegaMenu(item.megaType || null);
                  }}
                  onMouseLeave={() => {
                    if (item.hasMega) setActiveMegaMenu(null);
                  }}
                >
                  <button
                    onClick={() => handleItemClick(item.value)}
                    className={`flex items-center gap-1 px-4 py-2 text-sm font-semibold tracking-wide rounded-md transition-all duration-250 cursor-pointer ${
                      currentSection === item.value
                        ? isDarkMode
                          ? "text-heritage-gold bg-heritage-emerald/40 border-b border-heritage-gold/50"
                          : "text-heritage-emerald bg-heritage-gold/20 border-b border-heritage-gold"
                        : isDarkMode
                          ? "text-heritage-cream/85 hover:text-heritage-gold hover:bg-heritage-emerald/25"
                          : "text-heritage-emerald/85 hover:text-heritage-emerald hover:bg-heritage-gold/15"
                    }`}
                  >
                    {item.label}
                    {item.hasMega && (
                      <ChevronDown className={`w-4 h-4 transition-transform duration-250 ${
                        activeMegaMenu === item.megaType ? "rotate-180 text-heritage-gold" : ""
                      }`} />
                    )}
                  </button>

                  {/* Mega Menu Portal */}
                  <AnimatePresence>
                    {item.hasMega && activeMegaMenu === item.megaType && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 8 }}
                        transition={{ duration: 0.15 }}
                        className={`absolute left-1/2 -translate-x-1/2 mt-2 p-5 rounded-2xl shadow-xl border ${item.megaType === "academics" ? "w-[480px]" : "w-[280px]"} ${
                          isDarkMode 
                            ? "bg-heritage-dark border-heritage-gold/20 text-heritage-cream" 
                            : "bg-heritage-cream border-heritage-gold/35 text-heritage-dark"
                        }`}
                      >
                        {item.megaType === "academics" ? (
                          <div>
                            <h4 className="text-xs font-bold text-heritage-gold uppercase tracking-widest mb-3 flex items-center gap-1 font-serif">
                              <GraduationCap className="w-4 h-4 text-heritage-gold" /> Academic Streams & Programs
                            </h4>
                            <div className="grid grid-cols-2 gap-x-4 gap-y-2">
                              <button onClick={() => handleItemClick("academics", "preprimary")} className="text-left p-1.5 rounded hover:bg-heritage-emerald/10 dark:hover:bg-heritage-cream/10 transition text-sm">
                                <span className="font-semibold block">Pre-Primary</span>
                                <span className="text-xs text-slate-450 dark:text-slate-400">Nursery, LKG & UKG</span>
                              </button>
                              <button onClick={() => handleItemClick("academics", "primary")} className="text-left p-1.5 rounded hover:bg-heritage-emerald/10 dark:hover:bg-heritage-cream/10 transition text-sm">
                                <span className="font-semibold block">Primary</span>
                                <span className="text-xs text-slate-450 dark:text-slate-400">Grades 1 – 5, foundational</span>
                              </button>
                              <button onClick={() => handleItemClick("academics", "upperprimary")} className="text-left p-1.5 rounded hover:bg-heritage-emerald/10 dark:hover:bg-heritage-cream/10 transition text-sm">
                                <span className="font-semibold block">Upper Primary</span>
                                <span className="text-xs text-slate-450 dark:text-slate-400">Grades 6 – 8, logical</span>
                              </button>
                              <button onClick={() => handleItemClick("academics", "high")} className="text-left p-1.5 rounded hover:bg-heritage-emerald/10 dark:hover:bg-heritage-cream/10 transition text-sm">
                                <span className="font-semibold block">High School</span>
                                <span className="text-xs text-slate-450 dark:text-slate-400">Grades 9 & 10, SSC</span>
                              </button>
                              <button onClick={() => handleItemClick("academics", "girlscampus")} className="text-left p-1.5 rounded hover:bg-heritage-emerald/10 dark:hover:bg-heritage-cream/10 transition text-sm">
                                <span className="font-semibold block">Girls Campus</span>
                                <span className="text-xs text-slate-450 dark:text-slate-400">Safe dedicated wing</span>
                              </button>
                              <button onClick={() => handleItemClick("academics", "studyhour")} className="text-left p-1.5 rounded hover:bg-heritage-emerald/10 dark:hover:bg-heritage-cream/10 transition text-sm">
                                <span className="font-semibold block">Study Hour</span>
                                <span className="text-xs text-slate-450 dark:text-slate-400">Daily guided revision</span>
                              </button>
                              <button onClick={() => handleItemClick("academics", "iitneet")} className="text-left col-span-2 p-1.5 rounded hover:bg-heritage-emerald/10 dark:hover:bg-heritage-cream/10 transition text-sm border-t border-heritage-gold/20 mt-1">
                                <span className="font-semibold block text-heritage-gold">IIT-JEE & NEET Foundations</span>
                                <span className="text-xs text-slate-450 dark:text-slate-450">Elite early coaching curricula (Grades 6 – 10)</span>
                              </button>
                            </div>
                          </div>
                        ) : (
                          <div>
                            <h4 className="text-xs font-bold text-heritage-gold uppercase tracking-widest mb-3 flex items-center gap-1 font-serif">
                              <ClipboardList className="w-4 h-4 text-heritage-gold" /> Online Portal
                            </h4>
                            <div className="space-y-2">
                              <button onClick={() => handleItemClick("admissions")} className="w-full text-left p-1.5 rounded hover:bg-heritage-emerald/10 dark:hover:bg-heritage-cream/10 transition text-sm">
                                <span className="font-semibold block">Submit Application</span>
                                <span className="text-xs text-slate-450 dark:text-slate-400">Fast digital enrollment form</span>
                              </button>
                              <button onClick={() => handleItemClick("admissions")} className="w-full text-left p-1.5 rounded hover:bg-heritage-emerald/10 dark:hover:bg-heritage-cream/10 transition text-sm">
                                <span className="font-semibold block">Track Seat Status</span>
                                <span className="text-xs text-slate-450 dark:text-slate-400">Instant registration lookups</span>
                              </button>
                              <button onClick={() => handleItemClick("admissions")} className="w-full text-left p-1.5 rounded hover:bg-heritage-emerald/10 dark:hover:bg-heritage-cream/10 transition text-sm">
                                <span className="font-semibold block">Required Materials</span>
                                <span className="text-xs text-slate-450 dark:text-slate-400">Check eligible certificates</span>
                              </button>
                            </div>
                          </div>
                        )}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}

              {/* Dark/Light mode toggle */}
              <button
                id="theme-toggler"
                onClick={toggleDarkMode}
                aria-label="Toggle theme color mode"
                className={`p-2 ml-2 rounded-lg cursor-pointer transition ${
                  isDarkMode 
                    ? "bg-heritage-emerald text-heritage-gold hover:text-white" 
                    : "bg-heritage-gold/15 text-heritage-emerald hover:bg-heritage-gold/30"
                }`}
              >
                {isDarkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
              </button>

              <button
                onClick={() => handleItemClick("admissions")}
                className="ml-4 px-5 py-2.5 bg-heritage-gold hover:bg-heritage-gold-hover text-heritage-dark font-semibold rounded-lg shadow-md hover:scale-102 active:scale-98 transition duration-200 cursor-pointer text-sm font-sans"
              >
                Apply Now
              </button>
            </nav>

            {/* Mobile / Tablet Menu Button */}
            <div className="flex items-center gap-2 lg:hidden">
              <button
                onClick={toggleDarkMode}
                aria-label="Toggle mobile theme color"
                className={`p-2 rounded-lg cursor-pointer transition ${
                  isDarkMode ? "bg-slate-800 text-amber-400" : "bg-slate-100 text-slate-700"
                }`}
              >
                {isDarkMode ? <Sun className="w-4.5 h-4.5" /> : <Moon className="w-4.5 h-4.5" />}
              </button>
              <button
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Open side menu"
                className={`p-2 rounded-lg cursor-pointer transition ${
                  isDarkMode ? "hover:bg-slate-800 text-white" : "hover:bg-slate-100 text-slate-800"
                }`}
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Nav Backdrop & Drawer */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black z-40 lg:hidden"
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className={`fixed top-0 right-0 bottom-0 w-[300px] z-50 p-6 flex flex-col justify-between lg:hidden shadow-2xl border-l ${
                isDarkMode 
                  ? "bg-heritage-dark border-heritage-gold/20 text-heritage-cream" 
                  : "bg-heritage-cream border-heritage-gold/30 text-heritage-dark"
              }`}
            >
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <SchoolLogo size={36} />
                    <span className="font-serif font-bold text-base tracking-wide text-heritage-gold">SERENITY SCHOOL</span>
                  </div>
                  <button 
                    onClick={() => setIsOpen(false)}
                    aria-label="Close mobile sidebar menu"
                    className="p-1 rounded-lg hover:bg-heritage-gold/20"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <div className="space-y-4 pt-4">
                  {navItems.map((item) => (
                    <button
                      key={item.value}
                      onClick={() => handleItemClick(item.value)}
                      className={`w-full text-left py-2.5 px-4 font-semibold rounded-lg text-sm transition ${
                        currentSection === item.value
                          ? "bg-heritage-gold/20 text-heritage-gold border-l-4 border-heritage-gold font-bold"
                          : "hover:bg-heritage-emerald/10 dark:hover:bg-heritage-cream/10"
                      }`}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </div>

              <div id="drawer-footer-cta" className="space-y-4 pt-6 border-t border-heritage-gold/15">
                <button
                  onClick={() => handleItemClick("admissions")}
                  className="w-full py-3 bg-heritage-gold hover:bg-heritage-gold-hover text-heritage-dark font-bold rounded-lg shadow text-center text-sm cursor-pointer"
                >
                  Apply online
                </button>
                <div className="text-[11px] text-center text-slate-400">
                  ESTD 2004 • SSC Board Excellence
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
