import React, { useEffect } from "react";
import { 
  ArrowLeft, 
  Calendar, 
  MapPin, 
  User, 
  Clock, 
  Bookmark, 
  Heart, 
  Share2, 
  Sparkles,
  Palette,
  Wind,
  CookingPot,
  Compass
} from "lucide-react";
import { motion } from "motion/react";

interface SankranthiPageProps {
  isDarkMode: boolean;
  onBack: () => void;
}

export default function SankranthiCelebrationPage({ isDarkMode, onBack }: SankranthiPageProps) {
  // Scroll to top on load
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className={`min-h-screen pt-24 pb-20 transition-colors duration-300 ${
      isDarkMode ? "bg-heritage-dark text-heritage-cream" : "bg-heritage-cream text-heritage-dark"
    }`}>
      <div className="max-w-4xl mx-auto px-6 sm:px-8">
        
        {/* Editorial Back Button Navigation */}
        <motion.button
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          className={`flex items-center gap-2 px-4 py-2 mb-8 font-mono text-[10px] uppercase tracking-widest font-bold border transition-all cursor-pointer ${
            isDarkMode 
              ? "bg-heritage-dark border-heritage-gold/25 text-heritage-gold hover:border-heritage-gold/60 hover:text-heritage-cream"
              : "bg-white border-heritage-gold/30 text-heritage-emerald hover:border-heritage-emerald hover:bg-heritage-gold/5"
          }`}
          onClick={onBack}
        >
          <ArrowLeft className="w-3.5 h-3.5 text-heritage-gold animate-pulse" /> Back to Alumni &amp; Almanac
        </motion.button>

        {/* Article Container with Fine Borders */}
        <article className={`p-6 sm:p-10 border relative ${
          isDarkMode ? "bg-heritage-dark/65 border-heritage-gold/20" : "bg-white border-heritage-gold/25 shadow-xl"
        }`}>
          {/* Precise accent lines */}
          <div className="absolute top-0 bottom-0 left-0 w-[4px] bg-heritage-gold" />
          <div className="absolute top-0 left-0 right-0 h-[4px] bg-heritage-gold" />

          {/* Category Tag & Reading Stats */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-6 pt-2">
            <span className="px-3 py-1 font-mono font-bold text-[9px] uppercase tracking-widest bg-heritage-gold/15 text-heritage-gold border border-heritage-gold/20">
              CULTURAL CHRONICLE
            </span>
            <div className="flex items-center gap-4 text-[10px] font-mono text-heritage-gold/80">
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-heritage-gold" /> 4 Min Read
              </span>
              <span className="hidden sm:inline">|</span>
              <span className="flex items-center gap-1">
                <Bookmark className="w-3.5 h-3.5" /> Published Online
              </span>
            </div>
          </div>

          {/* Main Display Heading */}
          <header className="space-y-4 mb-8">
            <h1 className="font-serif font-light text-3xl sm:text-5xl leading-tight tracking-tight">
              Sankranthi Festival Celebrations 2026: <br />
              <span className="italic font-normal text-heritage-gold text-2xl sm:text-4.5xl block mt-2">
                A Joyful Cultural Experience at Serenity
              </span>
            </h1>

            {/* Post Meta Row */}
            <div className="flex flex-wrap items-center gap-y-3 gap-x-6 pt-4 border-t border-b border-heritage-gold/15 py-3 text-xs font-mono">
              <span className="flex items-center gap-1.5 font-bold text-heritage-gold">
                <User className="w-3.5 h-3.5 text-heritage-gold" /> By Serenity Academic Desk
              </span>
              <span className={`hidden sm:inline ${isDarkMode ? "text-heritage-gold/20" : "text-emerald-900/20"}`}>•</span>
              <span className="flex items-center gap-1.5 text-heritage-gold/90">
                <Calendar className="w-3.5 h-3.5 text-heritage-gold" /> January 12, 2026
              </span>
              <span className={`hidden sm:inline ${isDarkMode ? "text-heritage-gold/20" : "text-emerald-900/20"}`}>•</span>
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-heritage-gold" /> Serenity Campus, Nagaram, HYD
              </span>
            </div>
          </header>

          {/* Cinematic Hero Image */}
          <div className="w-full h-64 sm:h-96 overflow-hidden border border-heritage-gold/20 mb-8 shadow-md relative">
            <img 
              src="https://i0.wp.com/serenitymodelschools.com/wp-content/uploads/2026/01/sankranthi2026.jpg?fit=640%2C400&ssl=1" 
              alt="Serenity Model School Students celebrating Sankranthi" 
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-102"
            />
          </div>

          {/* Content Body */}
          <div className="space-y-6 font-sans text-sm sm:text-base leading-relaxed tracking-wide text-left">
            
            {/* Elegant Lead Paragraph */}
            <p className="font-serif font-light text-base sm:text-xl italic leading-relaxed text-heritage-gold/95 pl-4 border-l-2 border-heritage-gold">
              Sankranthi, the glorious harvest festival, was celebrated at Serenity Model School on January 12, 2026, with magnificent joy, vibrant colors, and immense cultural pride. The entire campus was transformed into an ambient canvas reflecting the richness of Telangana's regional heritage and agrarian traditions.
            </p>

            <p>
              The festive spirit was palpable right from sunrise. Students, parents, and administrative faculty joined collectively in traditional outfits, converting the concrete quadrangle into a welcoming village threshold. Under the guidance of our local art instructors, students displayed beautiful team synergy in every curated activity.
            </p>

            {/* Feature Grid: Highlights */}
            <h3 className="font-serif text-lg sm:text-2xl font-normal text-heritage-gold pt-4 flex items-center gap-2">
              <Palette className="w-5 h-5 text-heritage-gold" /> 1. Traditional Muggu (Rangoli) Artistry
            </h3>
            <p>
              The central courtyard was adorned with magnificent, massive chalk-and-flour sketches. Girls from the middle and high school divisions worked collectively to design traditional geometric patterns (muggulu) embellished with bright marigold petals and safe organic colors. These visual configurations depicted elements of nature, birds, and the harvest sun, celebrating mathematical proportion and folk aesthetics.
            </p>

            <h3 className="font-serif text-lg sm:text-2xl font-normal text-heritage-gold pt-4 flex items-center gap-2">
              <Compass className="w-5 h-5 text-heritage-gold" /> 2. Play-To-Learn Kite Crafting Assembly
            </h3>
            <p>
              An exciting workspace was set up for our junior scholars under the <strong>Kite Crafting Initiative</strong>. Students designed lightweight paper kites using balance vectors and bamboo stick frames. Teachers integrated the festival with physics lessons, speaking about wind resistance, force balances, and aerodynamics. Later, the bright sky above Nagaram and Rampally was dotted with highly colorful kites, celebrating child laughter and teamwork.
            </p>

            <h3 className="font-serif text-lg sm:text-2xl font-normal text-heritage-gold pt-4 flex items-center gap-2">
              <CookingPot className="w-5 h-5 text-heritage-gold" /> 3. Sacred Rituals &amp; Sweets (Bommala Koluvu)
            </h3>
            <p>
              A special highlights display of <em>Bommala Koluvu</em> (festive shelf display of ancient dolls) was curated in the community room, narrating rich tales from local mythology. Younger pre-primary kids were blessed with the traditional <strong>Bhogi Pallu</strong> ritual—showering of sweet berries, coins, and flower petals to invoke protection, healthy growth, and intellectual curiosity. Parents actively participated, offering traditional sweets and fresh sweet rice dishes cooked in earthen clay pots.
            </p>

            {/* Blockquote Visual Accent */}
            <blockquote className="my-8 p-6 bg-heritage-emerald/10 border-l-4 border-heritage-gold italic space-y-2">
              <p className="font-serif text-base sm:text-lg text-heritage-gold">
                "Our educational vision at Serenity extends past textbooks. By celebrating festivals like Sankranthi in their literal scale, we teach students about their indigenous identity, community synergy, and gratitude for natural ecosystems."
              </p>
              <cite className="block font-mono text-[10px] uppercase font-bold tracking-widest text-right">
                — Serenity High School Leadership Team
              </cite>
            </blockquote>

            <h3 className="font-serif text-lg sm:text-2xl font-normal text-heritage-gold pt-4 flex items-center gap-2">
              <Wind className="w-5 h-5 text-heritage-gold" /> Fostering Deep Community Connections
            </h3>
            <p>
              As the harvest sun marked its northern transition, the celebrations closed with vibrant folk dances and shared sweet Pongallu delicacies in the green courtyard. Events of this scale allow Serenity Model High School to consistently build stronger networks between families from Nagaram, Rampally, and adjoining suburbs of Hyderabad, laying down foundations for a peaceful, synergistic learning environment.
            </p>

          </div>

          {/* Additional Showcase Mini Collage */}
          <div className="mt-12 pt-8 border-t border-heritage-gold/25 space-y-4">
            <h4 className="font-serif text-base sm:text-lg text-heritage-gold font-normal uppercase tracking-wider text-left">
              Festival Snapshot Chronicles
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="border border-heritage-gold/25 relative h-48 overflow-hidden group">
                <img 
                  src="https://i0.wp.com/serenitymodelschools.com/wp-content/uploads/2025/12/sankranthi2025-1.jpg?fit=640%2C400&ssl=1" 
                  alt="Kite workshop craft day" 
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/45 flex items-end p-3 opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="font-mono text-[9px] uppercase tracking-widest text-white">
                    Team Kite-Making Works 2025 Archive
                  </span>
                </div>
              </div>
              <div className="border border-heritage-gold/25 relative h-48 overflow-hidden group">
                <img 
                  src="https://i0.wp.com/serenitymodelschools.com/wp-content/uploads/2025/11/serenity-model-high-school-6.jpg?fit=520%2C400&ssl=1" 
                  alt="Cultural folk items dress display" 
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/45 flex items-end p-3 opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="font-mono text-[9px] uppercase tracking-widest text-white">
                    Festive Cultural Traditional Choreography
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Social shares and bookmark highlights */}
          <div className="mt-8 pt-6 border-t border-heritage-gold/15 flex justify-between items-center text-xs">
            <button 
              className="text-heritage-gold font-mono font-bold tracking-widest uppercase flex items-center gap-1.5 hover:text-[#eae7de] cursor-pointer"
              onClick={() => alert("Cultural Chronicle Bookmarked to Serenity Academic Registry.")}
            >
              <Heart className="w-4 h-4 text-heritage-gold" /> Like post
            </button>
            <button 
              className="text-heritage-gold font-mono font-bold tracking-widest uppercase flex items-center gap-1.5 hover:text-[#eae7de] cursor-pointer"
              onClick={() => {
                navigator.clipboard.writeText(window.location.href);
                alert("Post link copied! Feel free to share our institutional chronicle.");
              }}
            >
              <Share2 className="w-4 h-4 text-heritage-gold" /> Copy Link
            </button>
          </div>

        </article>

      </div>
    </div>
  );
}
