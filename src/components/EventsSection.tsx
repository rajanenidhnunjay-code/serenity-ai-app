import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Calendar, 
  MapPin, 
  BookOpen, 
  Trophy, 
  Palette, 
  ChevronLeft,
  ChevronRight,
  X,
  Presentation
} from "lucide-react";
import { CalendarEvent } from "../types";

interface EventsProps {
  isDarkMode: boolean;
  onNavigateToSankranthi?: () => void;
  onNavigateToBonalu?: () => void;
  onNavigateToSankranthi2025?: () => void;
}

export default function EventsSection({ 
  isDarkMode, 
  onNavigateToSankranthi, 
  onNavigateToBonalu,
  onNavigateToSankranthi2025
}: EventsProps) {
  const [selectedEvent, setSelectedEvent] = useState<CalendarEvent | null>(null);
  const [currentSlideIndex, setCurrentSlideIndex] = useState<number>(0);

  const eventList: CalendarEvent[] = [
    {
      id: "ev-1",
      title: "SANKRANTHI FESTIVAL CELEBRATIONS 2026",
      date: "Jan 12, 2026",
      time: "09:00 AM - 01:30 PM",
      category: "Arts",
      description: "Filled with joy, colour, and cultural pride! The campus reflects a festive atmosphere with traditional decorations, beautiful rangoli designs, and cheerful student participation, incorporating kite-making and dance performances.",
      image: "https://i0.wp.com/serenitymodelschools.com/wp-content/uploads/2026/01/sankranthi2026.jpg?fit=640%2C400&ssl=1",
      location: "serenity campus , Nagaram , Hyderabad"
    },
    {
      id: "ev-3",
      title: "TELANGANA BONALU FESTIVAL CELEBRATIONS 2025",
      date: "Jun 20, 2025",
      time: "08:30 AM - 12:30 PM",
      category: "Arts",
      description: "Celebrated with great devotion and cultural pride. The entire campus is adorned with vibrant traditional pots and festive elements, featuring students in magnificent traditional getups and storytelling.",
      image: "https://i0.wp.com/serenitymodelschools.com/wp-content/uploads/2025/12/bonalu2025-1.jpg?fit=640%2C400&ssl=1",
      location: "serenity campus , Nagaram , Hyderabad"
    },
    {
      id: "ev-4",
      title: "SANKRANTHI CULTURAL CELEBRATION & KITE CRAFT 2025",
      date: "Jan 10, 2025",
      time: "09:00 AM - 02:00 PM",
      category: "Arts",
      description: "A colorful manifestation of gratitude and togetherness. Celebrating with magnificent rangoli designs, special highlights like Bommala Koluvu and interactive kite-making fostering outstanding teamwork among students.",
      image: "https://i0.wp.com/serenitymodelschools.com/wp-content/uploads/2025/12/sankranthi2025-1.jpg?fit=640%2C400&ssl=1",
      location: "serenity campus , Nagaram , Hyderabad"
    }
  ];

  /* Detailed informational slides customized for each event */
  const allEventSlides: Record<string, { title: string; subtitle: string; content: string; image: string }[]> = {
    "ev-1": [
      {
        title: "Traditional Welcome & Muggu Artistry",
        subtitle: "VIBRANT FLOUR PAINTINGS",
        content: "The celebration commences at sunrise with exquisite, handmade muggulu (colorful rice-flour patterns) drawn by our senior students, depicting traditional motifs of birds and elements of harvest, preserving our rich regional heritage.",
        image: "https://i0.wp.com/serenitymodelschools.com/wp-content/uploads/2026/01/sankranthi2026.jpg?fit=640%2C400&ssl=1"
      },
      {
        title: "Kite-Making & Aerodynamics Workshop",
        subtitle: "MATHEMATICAL BALANCING",
        content: "Students team up across grades during school hours, building customized paper kites with lightweight bamboo frames. Teachers utilize this workspace to explain concepts of geometry, balance, and aerodynamics.",
        image: "https://i0.wp.com/serenitymodelschools.com/wp-content/uploads/2025/12/sankranthi2025-1.jpg?fit=640%2C400&ssl=1"
      },
      {
        title: "Festive Harvest Delicacies & Cultural Chants",
        subtitle: "FOLK DANCE & SHARED JOY",
        content: "A grand assembly is hosted on the green courtyard where sweet Pongal dishes and festive delicacies are shared, accompanied by magnificent folk chants and traditional bards celebrating Telangana's glorious history.",
        image: "https://i0.wp.com/serenitymodelschools.com/wp-content/uploads/2025/11/serenity-model-high-school-6.jpg?fit=520%2C400&ssl=1"
      }
    ],
    "ev-3": [
      {
        title: "Preparation of Festive Sacred Pots",
        subtitle: "BONAM DEVOTED THANKSGIVING",
        content: "Scholars learn the art of preparing the traditional 'Bonam' - sweet milk rice prepared carefully in customized brass or decorated clay pots, representing deep heritage and gratitude for a bountiful season.",
        image: "https://i0.wp.com/serenitymodelschools.com/wp-content/uploads/2025/12/bonalu2025-1.jpg?fit=640%2C400&ssl=1"
      },
      {
        title: "Rhythmic Pothuraju Traditional Steps",
        subtitle: "FOLK BEATS & ORNATE COSTUMES",
        content: "The campus echoes with energetic drumming as pupils recreate rhythmic pothuraju choreography, and dress up in stunning cultural attire to celebrate spiritual protection, health, and togetherness.",
        image: "https://i0.wp.com/serenitymodelschools.com/wp-content/uploads/2025/11/serenity-model-high-school-001.jpg?fit=426%2C400&ssl=1"
      }
    ],
    "ev-4": [
      {
        title: "Creative Bommala Koluvu Display",
        subtitle: "AESTHETIC HERITAGE STORYTELLING",
        content: "A detailed exhibition featuring traditional wooden toys, clay artifacts, and epic character displays arranged neatly, allowing children to learn local folklore and mythic tales in a hands-on format.",
        image: "https://i0.wp.com/serenitymodelschools.com/wp-content/uploads/2025/12/sankranthi2025-1.jpg?fit=640%2C400&ssl=1"
      },
      {
        title: "Kite Crafting & Team Synergy",
        subtitle: "OUTSTANDING STUDENT COOPERATION",
        content: "High-contrast paper kites are fabricated by grade teams, which teaches key structural concepts like stress, stability, and mutual cooperation under wind resistance.",
        image: "https://i0.wp.com/serenitymodelschools.com/wp-content/uploads/2026/01/sankranthi2026.jpg?fit=640%2C400&ssl=1"
      }
    ]
  };

  const getEventSlides = (ev: CalendarEvent) => {
    return allEventSlides[ev.id] || [
      {
        title: ev.title,
        subtitle: `${ev.category} DIVISION HIGHLIGHT`,
        content: ev.description,
        image: ev.image || "https://i0.wp.com/serenitymodelschools.com/wp-content/uploads/2026/01/sankranthi2026.jpg?fit=640%2C400&ssl=1"
      }
    ];
  };

  const activeSlides = selectedEvent ? getEventSlides(selectedEvent) : [];

  const handleNextSlide = () => {
    if (selectedEvent) {
      setCurrentSlideIndex((prev) => (prev + 1) % activeSlides.length);
    }
  };

  const handlePrevSlide = () => {
    if (selectedEvent) {
      setCurrentSlideIndex((prev) => (prev - 1 + activeSlides.length) % activeSlides.length);
    }
  };

  const getCategoryIcon = (cat: string) => {
    switch (cat) {
      case "Academic": return <BookOpen className="w-5 h-5 text-heritage-gold" />;
      case "Sports": return <Trophy className="w-5 h-5 text-heritage-gold" />;
      case "Arts": return <Palette className="w-5 h-5 text-heritage-gold" />;
      default: return <Calendar className="w-5 h-5 text-heritage-gold" />;
    }
  };

  return (
    <section id="events" className={`py-24 transition-colors duration-300 relative ${isDarkMode ? "bg-heritage-dark" : "bg-heritage-cream"}`}>
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-none text-[10px] font-bold bg-heritage-emerald/10 text-heritage-gold border border-heritage-gold/25 tracking-wider uppercase">
            <Calendar className="w-3.5 h-3.5 text-heritage-gold" /> Events &amp; Timelines
          </div>
          <h2 className={`text-3xl sm:text-5xl font-serif font-light tracking-tight ${
            isDarkMode ? "text-heritage-cream" : "text-heritage-dark"
          }`}>
            Our Active <span className="italic font-normal text-heritage-gold font-serif">Institutional Almanac</span>
          </h2>
          <div className="w-24 h-[1px] bg-heritage-gold/50 mx-auto my-4" />
          <p className={`text-sm sm:text-base leading-relaxed ${isDarkMode ? "text-heritage-sage/85" : "text-heritage-emerald/85"}`}>
            Serenity promotes a vibrant, calendar of activities where parents, teachers, and scholars participate collectively. Click on any event to view the interactive presentation slide.
          </p>
        </div>

        {/* Timeline Layout */}
        <div className="max-w-4xl mx-auto space-y-6">
          <AnimatePresence mode="wait">
            {eventList.length > 0 ? (
              <div className="space-y-6">
                {eventList.map((ev) => (
                  <motion.div
                    key={ev.id}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    onClick={() => {
                      if (ev.id === "ev-1" && onNavigateToSankranthi) {
                        onNavigateToSankranthi();
                      } else if (ev.id === "ev-3" && onNavigateToBonalu) {
                        onNavigateToBonalu();
                      } else if (ev.id === "ev-4" && onNavigateToSankranthi2025) {
                        onNavigateToSankranthi2025();
                      } else {
                        setSelectedEvent(ev);
                        setCurrentSlideIndex(0);
                      }
                    }}
                    className={`p-6 border text-left transition-all relative cursor-pointer group hover:-translate-y-0.5 ${
                      isDarkMode 
                        ? "bg-heritage-dark/60 border-heritage-gold/20 hover:border-heritage-gold/50 hover:bg-heritage-dark/80" 
                        : "bg-white border-heritage-gold/30 hover:border-heritage-emerald hover:shadow-md"
                    }`}
                  >
                    {/* Offset design board visual line */}
                    <div className="absolute top-0 bottom-0 left-0 w-[3px] bg-heritage-gold" />

                    <div className="flex flex-col md:flex-row gap-6">
                      {ev.image && (
                        <div className="w-full md:w-44 h-48 md:h-auto rounded-none overflow-hidden shrink-0 border border-heritage-gold/20 relative shadow-md">
                          <img
                            src={ev.image}
                            alt={ev.title}
                            referrerPolicy="no-referrer"
                            className="w-full h-full object-cover absolute inset-0 transition-transform duration-500 group-hover:scale-105 pointer-events-none"
                          />
                        </div>
                      )}
                      
                      <div className="flex-1 flex flex-col justify-between">
                        <div>
                          <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-3">
                            <div className="flex items-center gap-3">
                              <div className={`p-2.5 rounded-none border ${
                                isDarkMode ? "bg-heritage-dark border-heritage-gold/25" : "bg-[#faf6f0] border-heritage-gold/35"
                              }`}>
                                {getCategoryIcon(ev.category)}
                              </div>
                              <div>
                                <span className="text-[9px] text-heritage-gold font-bold uppercase tracking-widest block font-mono">
                                  {ev.category} Division Almanac
                                </span>
                                <h4 className={`font-serif font-normal text-base sm:text-lg transition-colors group-hover:text-heritage-gold ${
                                  isDarkMode ? "text-heritage-cream" : "text-heritage-emerald"
                                }`}>
                                  {ev.title}
                                </h4>
                              </div>
                            </div>

                            <div className="flex flex-col text-[10px] items-start sm:items-end font-mono tracking-wider font-semibold text-heritage-gold shrink-0">
                              <span className="flex items-center sm:justify-end gap-1 font-bold text-heritage-gold">
                                <Calendar className="w-3.5 h-3.5 text-heritage-gold" /> {ev.date}
                              </span>
                            </div>
                          </div>

                          <p className={`text-xs sm:text-sm leading-relaxed mb-4 ${isDarkMode ? "text-heritage-sage/95" : "text-heritage-emerald/85"}`}>
                            {ev.description}
                          </p>
                        </div>

                        <div className="flex flex-wrap items-center justify-between gap-4 pt-3 border-t border-heritage-gold/15">
                          <span className={`text-[10px] flex items-center gap-1 font-sans ${
                            isDarkMode ? "text-heritage-sage/80" : "text-heritage-emerald/75"
                          }`}>
                            <MapPin className="w-3.5 h-3.5 text-heritage-gold" /> {ev.location || "Serenity Campus, Rampally & Nagaram, Hyderabad"}
                          </span>

                          <button 
                            className="text-[10px] font-mono font-bold tracking-widest text-heritage-gold hover:text-heritage-emerald uppercase transition-colors flex items-center gap-1.5 focus:outline-none cursor-pointer"
                          >
                            <Presentation className="w-3.5 h-3.5" /> {(ev.id === "ev-1" || ev.id === "ev-3" || ev.id === "ev-4") ? "View Full Chronicle ⮕" : "Slide Info ⮕"}
                          </button>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            ) : (
              <div className="text-center p-12 text-heritage-gold space-y-2 border border-dashed border-heritage-gold/20">
                <Calendar className="w-12 h-12 text-heritage-gold/60 mx-auto" />
                <p className="font-serif font-semibold">Almanac Window Empty</p>
                <p className="text-xs font-mono">Select another category to query active term events.</p>
              </div>
            )}
          </AnimatePresence>
        </div>

        {/* Dynamic Presentation Slide Deck Overlay */}
        <AnimatePresence>
          {selectedEvent && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
              {/* Dark backdrop blur surface */}
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedEvent(null)}
                className="absolute inset-0 bg-black/85 backdrop-blur-md cursor-pointer"
              />

              {/* Informational Slide Deck Container */}
              <motion.div
                initial={{ scale: 0.95, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.95, opacity: 0, y: 20 }}
                transition={{ type: "spring", duration: 0.4 }}
                className="bg-[#faf9f5] text-slate-800 border-2 border-heritage-gold max-w-4xl w-full h-auto max-h-[90vh] md:max-h-[80vh] flex flex-col shadow-2xl relative overflow-hidden z-10 rounded-none font-sans"
              >
                {/* Gold highlight accent bar */}
                <div className="h-[4px] bg-heritage-gold w-full shrink-0" />

                {/* Presentation Header */}
                <div className="p-4 sm:p-6 border-b border-slate-300/60 bg-[#eae7de]/50 flex items-center justify-between gap-4 shrink-0">
                  <div>
                    <span className="text-[9px] font-mono font-bold tracking-widest uppercase text-heritage-gold">
                      Event Presentation Slideshow
                    </span>
                    <h3 className="font-serif text-base sm:text-xl font-medium tracking-tight text-heritage-emerald">
                      {selectedEvent.title}
                    </h3>
                  </div>

                  <button 
                    onClick={() => setSelectedEvent(null)}
                    className="p-1.5 hover:bg-slate-200/80 transition-colors border border-slate-300 text-slate-600 hover:text-slate-950 focus:outline-none cursor-pointer"
                    title="Close Slide Presentation"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Slide View Core */}
                <div className="flex-1 overflow-y-auto p-4 sm:p-8">
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                    {/* Active Slide Image */}
                    <div className="md:col-span-6 flex flex-col items-center">
                      <div className="border-4 border-white shadow-xl max-w-full overflow-hidden bg-slate-100 relative group aspect-video md:aspect-[4/3] w-full">
                        <AnimatePresence mode="wait">
                          <motion.img
                            key={currentSlideIndex}
                            src={activeSlides[currentSlideIndex].image}
                            alt={activeSlides[currentSlideIndex].title}
                            referrerPolicy="no-referrer"
                            initial={{ opacity: 0, scale: 1.02 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.98 }}
                            transition={{ duration: 0.25 }}
                            className="w-full h-full object-cover"
                          />
                        </AnimatePresence>
                      </div>
                    </div>

                    {/* Active Slide Information details */}
                    <div className="md:col-span-6 space-y-4 text-left">
                      <div className="flex items-center gap-2">
                        <span className="px-2 py-0.5 bg-heritage-gold/20 text-heritage-gold font-mono font-bold text-[9px] tracking-wider uppercase">
                          Slide {currentSlideIndex + 1} of {activeSlides.length}
                        </span>
                        <span className="text-slate-400 font-mono text-[9px]">|</span>
                        <span className="font-mono text-[9px] tracking-widest font-semibold text-heritage-gold uppercase">
                          {activeSlides[currentSlideIndex].subtitle}
                        </span>
                      </div>

                      <AnimatePresence mode="wait">
                        <motion.div
                          key={currentSlideIndex}
                          initial={{ opacity: 0, x: 10 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -10 }}
                          transition={{ duration: 0.2 }}
                          className="space-y-3"
                        >
                          <h4 className="font-serif text-lg sm:text-2xl font-light text-heritage-emerald leading-tight">
                            {activeSlides[currentSlideIndex].title}
                          </h4>
                          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans">
                            {activeSlides[currentSlideIndex].content}
                          </p>
                        </motion.div>
                      </AnimatePresence>
                    </div>
                  </div>
                </div>

                {/* Slide Deck Bottom Indicators and Controls */}
                <div className="p-4 sm:p-6 border-t border-slate-300/60 bg-[#eae7de]/30 flex flex-col sm:flex-row items-center justify-between gap-4 shrink-0">
                  {/* Presentation progression dots */}
                  <div className="flex items-center gap-2 order-2 sm:order-1">
                    {activeSlides.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => setCurrentSlideIndex(i)}
                        className={`w-2.5 h-2.5 rounded-full transition-all cursor-pointer ${
                          currentSlideIndex === i 
                            ? "bg-heritage-gold w-6" 
                            : "bg-slate-300 hover:bg-slate-400"
                        }`}
                        title={`Go to slide ${i + 1}`}
                      />
                    ))}
                  </div>

                  {/* Navigational controls buttons */}
                  <div className="flex items-center gap-3 order-1 sm:order-2 w-full sm:w-auto justify-between sm:justify-start">
                    <button
                      onClick={handlePrevSlide}
                      className="px-4 py-2 bg-white hover:bg-slate-100 text-slate-700 border border-slate-300 font-mono font-bold tracking-widest text-[10px] uppercase flex items-center gap-1.5 transition-colors cursor-pointer select-none"
                    >
                      <ChevronLeft className="w-4 h-4 text-heritage-gold" /> Previous
                    </button>

                    <button
                      onClick={handleNextSlide}
                      className="px-4 py-2 bg-heritage-emerald hover:bg-heritage-emerald/90 text-heritage-cream border border-heritage-gold font-mono font-bold tracking-widest text-[10px] uppercase flex items-center gap-1.5 transition-colors cursor-pointer select-none shadow-sm"
                    >
                      Next Highlight <ChevronRight className="w-4 h-4 text-heritage-gold" />
                    </button>
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
