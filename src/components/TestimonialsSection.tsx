import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Quote, 
  ChevronLeft, 
  ChevronRight, 
  Sparkles, 
  Award,
  GraduationCap
} from "lucide-react";

interface TestimonialsProps {
  isDarkMode: boolean;
}

export default function TestimonialsSection({ isDarkMode }: TestimonialsProps) {
  const [activeIdx, setActiveIdx] = useState(0);

  const testimonials = [
    {
      quote: "Serenity Model High School at Nagaram has provided a fantastic educational foundation for our children. The dedication of the teachers in offering individual attention and guidance has significantly boosted our child's academic confidence and overall discipline. It is truly the best school in the Nagaram region for SSC curriculums.",
      author: "Mr. K. Ranga Rao",
      role: "Parent of Class-X Scholar",
      affiliation: "Nagaram Branch Parent Advisory",
      award: "Excellent Core SSC Record"
    },
    {
      quote: "Our experience with the Rampally Branch of Serenity Model School is absolutely outstanding. They provide standard high-quality education while balancing co-curricular activities and sports seamlessly. The clean, spacious campus and helpful teaching staff make learning a truly joyful experience for children.",
      author: "Mrs. Anitha Reddy",
      role: "Parent of Grade-VIII Scholar",
      affiliation: "Rampally Branch Parent Council",
      award: "Holistic Development Leader"
    },
    {
      quote: "My years at Serenity Model High School established the concrete analytical foundations and systematic work ethic I needed for career success. Individual support from cooperative teachers, high standard classrooms, and a fantastic balance of studies and sports shaped my development completely.",
      author: "Rajesh Kumar",
      role: "Alumni (SMHS Class of 2021)",
      affiliation: "IT Professional & Former Student Leader",
      award: "Alumni Academic Honor"
    }
  ];

  const handleNext = () => {
    setActiveIdx((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setActiveIdx((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className={`py-24 transition-colors duration-300 ${isDarkMode ? "bg-[#0b1329]" : "bg-white"}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-amber-500/10 text-amber-500 tracking-wider uppercase mb-3">
            <Quote className="w-3.5 h-3.5" /> Testimonials
          </div>
          <h2 className="text-3.5xl sm:text-5xl font-serif font-semibold tracking-tight mb-4">
            Endorsed by India’s <span className="bg-gradient-to-r from-[#1e3a8a] to-amber-500 bg-clip-text text-transparent">Elite Communities</span>
          </h2>
          <p className={`text-base sm:text-lg ${isDarkMode ? "text-slate-400" : "text-slate-600"} leading-relaxed`}>
            Read honest opinions and success metrics from our proud academic parents, successful technical alumni, and esteemed scientific community leaders.
          </p>
        </div>

        {/* Carousel Slider Panel */}
        <div className="max-w-4xl mx-auto">
          <div className={`relative rounded-3xl border p-8 sm:p-12 overflow-hidden ${
            isDarkMode ? "bg-slate-950/80 border-[#1e293b]" : "bg-slate-50 border-slate-200 shadow-md"
          }`}>
            {/* Visual background details */}
            <Quote className="absolute top-6 right-6 w-32 h-32 text-amber-500/5 rotate-180 pointer-events-none" />
            <div className="absolute left-0 bottom-0 w-48 h-48 bg-[#1e3a8a]/5 rounded-full blur-3xl pointer-events-none" />

            {/* Slider Content */}
            <div className="min-h-[220px] flex flex-col justify-between">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIdx}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.2 }}
                  className="space-y-6 text-left"
                >
                  {testimonials[activeIdx].award && (
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-amber-500/15 border border-amber-500/20 text-amber-400 text-[10px] uppercase tracking-widest font-extrabold">
                      <Award className="w-3.5 h-3.5" /> {testimonials[activeIdx].award}
                    </div>
                  )}

                  <p className={`text-sm sm:text-base md:text-lg italic leading-relaxed font-serif ${
                    isDarkMode ? "text-slate-200" : "text-slate-700"
                  }`}>
                    "{testimonials[activeIdx].quote}"
                  </p>

                  <div className="border-t border-slate-800/10 dark:border-slate-800/80 pt-4 flex flex-wrap items-center justify-between gap-4">
                    <div>
                      <h4 className="font-sans font-bold text-base sm:text-lg text-amber-500 leading-tight">
                        {testimonials[activeIdx].author}
                      </h4>
                      <p className={`text-xs ${isDarkMode ? "text-slate-400" : "text-slate-600"} font-medium`}>
                        {testimonials[activeIdx].role} — <span className="text-[#1e3a8a] dark:text-indigo-400 font-bold">{testimonials[activeIdx].affiliation}</span>
                      </p>
                    </div>

                    <div className="bg-slate-500/5 py-1 px-3.5 rounded border border-slate-800/10 dark:border-slate-800/60 font-mono text-[10px] tracking-widest text-slate-400 uppercase flex items-center gap-1">
                      <GraduationCap className="w-3.5 h-3.5 text-amber-500" /> SMHS Verified Backing
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Navigation Buttons Row */}
            <div className="flex justify-end gap-2.5 mt-8 border-t border-slate-800/10 dark:border-slate-800/30 pt-4">
              <button
                onClick={handlePrev}
                aria-label="Previous testimonial"
                className="p-2 border border-slate-500/25 rounded-xl hover:bg-slate-500/10 transition cursor-pointer"
              >
                <ChevronLeft className="w-4.5 h-4.5" />
              </button>
              <button
                onClick={handleNext}
                aria-label="Next testimonial"
                className="p-2 border border-slate-500/25 rounded-xl hover:bg-slate-500/10 transition cursor-pointer"
              >
                <ChevronRight className="w-4.5 h-4.5" />
              </button>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
