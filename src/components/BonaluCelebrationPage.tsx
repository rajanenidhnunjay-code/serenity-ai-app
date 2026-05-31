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
  Flame,
  Music,
  ShoppingBag,
  Award
} from "lucide-react";
import { motion } from "motion/react";

interface BonaluPageProps {
  isDarkMode: boolean;
  onBack: () => void;
}

export default function BonaluCelebrationPage({ isDarkMode, onBack }: BonaluPageProps) {
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
              Tradition and Devotion: <br />
              <span className="italic font-normal text-heritage-gold text-2xl sm:text-4.5xl block mt-2">
                Bonalu Celebrations with Student Getups at Serenity
              </span>
            </h1>

            {/* Post Meta Row */}
            <div className="flex flex-wrap items-center gap-y-3 gap-x-6 pt-4 border-t border-b border-heritage-gold/15 py-3 text-xs font-mono">
              <span className="flex items-center gap-1.5 font-bold text-heritage-gold">
                <User className="w-3.5 h-3.5 text-heritage-gold" /> By Serenity Academic Desk
              </span>
              <span className={`hidden sm:inline ${isDarkMode ? "text-heritage-gold/20" : "text-emerald-900/20"}`}>•</span>
              <span className="flex items-center gap-1.5 text-heritage-gold/90">
                <Calendar className="w-3.5 h-3.5 text-heritage-gold" /> June 20, 2025
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
              src="https://i0.wp.com/serenitymodelschools.com/wp-content/uploads/2025/12/bonalu2025-1.jpg?fit=640%2C400&ssl=1" 
              alt="Serenity Model School Telangana Bonalu Celebrations 2025" 
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-102"
            />
          </div>

          {/* Content Body */}
          <div className="space-y-6 font-sans text-sm sm:text-base leading-relaxed tracking-wide text-left">
            
            {/* Elegant Lead Paragraph */}
            <p className="font-serif font-light text-base sm:text-xl italic leading-relaxed text-heritage-gold/95 pl-4 border-l-2 border-heritage-gold">
              The rich heritage, dynamic traditions, and spiritual devotion of Telangana came alive at Serenity Model School on June 20, 2025, as student-scholars and educators collectively celebrated the famous Telangana Bonalu Festival. Adorned in magnificent traditional attire, our students created a highly immersive atmosphere of joy and togetherness.
            </p>

            <p>
              Bonalu is a wonderful thanksgiving festival dedicated to Goddess Mahankali, praying for health, rain, and protective wellness across the community. Celebrating such regional festivals at Serenity reflects our deep-rooted institutional philosophy: merging premium standards of modern academics with literal devotion to preserve and cherish our rich regional history.
            </p>

            {/* Feature Grid: Highlights */}
            <h3 className="font-serif text-lg sm:text-2xl font-normal text-heritage-gold pt-4 flex items-center gap-2">
              <Flame className="w-5 h-5 text-heritage-gold" /> 1. Offering the Sacred "Bonam"
            </h3>
            <p>
              The word "Bonam" is derived from Bhojanam (a sacred meal). Our female senior scholars and dynamic mother-teachers prepared these special offerings—cooked rice mixed with organic milk, jaggery, and curd. The mixture was placed inside beautifully hand-painted brass or clay pots, adorned with neem leaves, turmeric paste, and vermillion. Carrying these decorated vessels on their heads, the procession moved in majestic balance across the green courtyard of the school campus.
            </p>

            <h3 className="font-serif text-lg sm:text-2xl font-normal text-heritage-gold pt-4 flex items-center gap-2">
              <Music className="w-5 h-5 text-heritage-gold" /> 2. Energetic Dappu Beats &amp; Pothuraju Dancing
            </h3>
            <p>
              The air in the Nagaram campus echoed with high-octane folk beats. A team of local 'Dappu' percussionists played traditional rhythmic patterns as students and teachers joined in. A key highlight was the student enactment of <strong>Pothuraju</strong>—the legendary brother-protector of the Goddess. Painted in turmeric and vermillion, holding a colorful rope whip, the young performers recreated the rhythmic, high-energy steps of the folk deity, leaving the assembly spellbound.
            </p>

            <h3 className="font-serif text-lg sm:text-2xl font-normal text-heritage-gold pt-4 flex items-center gap-2">
              <Award className="w-5 h-5 text-heritage-gold" /> 3. Creative Student Getups &amp; Mythic Storytelling
            </h3>
            <p>
              To foster hands-on learning, students of all grades participated in a unique drama showcase. Several younger tots from our pre-primary wing dressed up as different forms of Goddess Mahankali (Mysamma, Pochamma, and Yellamma) wearing vibrant silk sarees, heavy garlands, and decorative paper halos. Teachers took this interactive opportunity to explain the historic origin of the Bonalu festival, dating back to 1813, sharing how local communities survived epidemics through collective prayers and protective sanitation.
            </p>

            {/* Blockquote Visual Accent */}
            <blockquote className="my-8 p-6 bg-heritage-emerald/10 border-l-4 border-heritage-gold italic space-y-2">
              <p className="font-serif text-base sm:text-lg text-heritage-gold">
                "By embracing our traditional festivals, we teach our students the virtues of humility, environmental harmony, and historical literacy. The Bonalu celebrations displayed outstanding school spirit and absolute integration across all classes."
              </p>
              <cite className="block font-mono text-[10px] uppercase font-bold tracking-widest text-right">
                — Serenity Pre-Primary &amp; High School Leadership
              </cite>
            </blockquote>

            <h3 className="font-serif text-lg sm:text-2xl font-normal text-heritage-gold pt-4 flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-heritage-gold" /> Strengthening Suburban Family Networks
            </h3>
            <p>
              The celebration concluded with a delicious traditional community lunch served with deep warmth. As sweet Pongal and cooked grains were shared among parents, students, and staff members, the strong bond of the Serenity family became even firmer. Such celebrations highlight how Serenity Model High School, located in Nagaram, Hyderabad, successfully acts as a social hub that brings suburban families together to celebrate common cultural values, fostering a protective, synergistic ecosystem for child development.
            </p>

          </div>

          {/* Additional Showcase Mini Collage */}
          <div className="mt-12 pt-8 border-t border-heritage-gold/25 space-y-4">
            <h4 className="font-serif text-base sm:text-lg text-heritage-gold font-normal uppercase tracking-wider text-left">
              Bonalu Festivity Snapshot Chronicles
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="border border-heritage-gold/25 relative h-48 overflow-hidden group">
                <img 
                  src="https://i0.wp.com/serenitymodelschools.com/wp-content/uploads/2025/11/serenity-model-high-school-001.jpg?fit=426%2C400&ssl=1" 
                  alt="Student Bonalu Dance Setup" 
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/45 flex items-end p-3 opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="font-mono text-[9px] uppercase tracking-widest text-white">
                    Pothuraju Enactment &amp; Folk Dance Steps
                  </span>
                </div>
              </div>
              <div className="border border-heritage-gold/25 relative h-48 overflow-hidden group">
                <img 
                  src="https://i0.wp.com/serenitymodelschools.com/wp-content/uploads/2026/01/sankranthi2026.jpg?fit=640%2C400&ssl=1" 
                  alt="Serenity High School Cultural Event" 
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/45 flex items-end p-3 opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="font-mono text-[9px] uppercase tracking-widest text-white">
                    Vibrant traditional costumes &amp; Gathering
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Social shares and bookmark highlights */}
          <div className="mt-8 pt-6 border-t border-heritage-gold/15 flex justify-between items-center text-xs">
            <button 
              className="text-heritage-gold font-mono font-bold tracking-widest uppercase flex items-center gap-1.5 hover:text-[#eae7de] cursor-pointer"
              onClick={() => alert("Bonalu Chronicle Bookmarked to Serenity Academic Registry.")}
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
