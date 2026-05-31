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
  Layers,
  Gift
} from "lucide-react";
import { motion } from "motion/react";

interface Sankranthi2025PageProps {
  isDarkMode: boolean;
  onBack: () => void;
}

export default function Sankranthi2025CelebrationPage({ isDarkMode, onBack }: Sankranthi2025PageProps) {
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
              ALUMNI RECORD &amp; CHRONICLE
            </span>
            <div className="flex items-center gap-4 text-[10px] font-mono text-heritage-gold/80">
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-heritage-gold" /> 3.5 Min Read
              </span>
              <span className="hidden sm:inline">|</span>
              <span className="flex items-center gap-1">
                <Bookmark className="w-3.5 h-3.5" /> Almanac Reference
              </span>
            </div>
          </div>

          {/* Main Display Heading */}
          <header className="space-y-4 mb-8">
            <h1 className="font-serif font-light text-3xl sm:text-5xl leading-tight tracking-tight">
              Sankranthi Celebration &amp; <br />
              <span className="italic font-normal text-heritage-gold text-2xl sm:text-4.5xl block mt-2">
                Kite Crafting Harvest Festival 2025
              </span>
            </h1>

            {/* Post Meta Row */}
            <div className="flex flex-wrap items-center gap-y-3 gap-x-6 pt-4 border-t border-b border-heritage-gold/15 py-3 text-xs font-mono">
              <span className="flex items-center gap-1.5 font-bold text-heritage-gold">
                <User className="w-3.5 h-3.5 text-heritage-gold" /> By Serenity Culture Committee
              </span>
              <span className={`hidden sm:inline ${isDarkMode ? "text-heritage-gold/20" : "text-emerald-900/20"}`}>•</span>
              <span className="flex items-center gap-1.5 text-heritage-gold/90">
                <Calendar className="w-3.5 h-3.5 text-heritage-gold" /> January 10, 2025
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
              src="https://i0.wp.com/serenitymodelschools.com/wp-content/uploads/2025/12/sankranthi2025-1.jpg?fit=640%2C400&ssl=1" 
              alt="Sankranthi 2025 Celebration & Kite Crafting at Serenity Model School" 
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-102"
            />
          </div>

          {/* Content Body */}
          <div className="space-y-6 font-sans text-sm sm:text-base leading-relaxed tracking-wide text-left">
            
            {/* Elegant Lead Paragraph */}
            <p className="font-serif font-light text-base sm:text-xl italic leading-relaxed text-heritage-gold/95 pl-4 border-l-2 border-heritage-gold">
              On January 10, 2025, the serene skies of Nagaram, Hyderabad, were painted with joyous hope as Serenity Model School hosted its annual Sankranthi Cultural Celebration and Kite Crafting event. The festival marked a magnificent manifestation of gratitude, togetherness, and cultural pride among students, parents, and academic guides.
            </p>

            <p>
              Decorated with colorful paper banners, vibrant flowers, and traditional mango leaves, the entire campus represented an authentic rural community gateway. Male and female student-scholars arrived dressed in gorgeous traditional attire, and teamed up to create unforgettable memories through outstanding collaboration.
            </p>

            {/* Feature Highlights */}
            <h3 className="font-serif text-lg sm:text-2xl font-normal text-heritage-gold pt-4 flex items-center gap-2">
              <Palette className="w-5 h-5 text-heritage-gold" /> Geometric Elegance: Traditional Muggu Patterns
            </h3>
            <p>
              The central courtyard of the school was adorned with spectacular muggulu designs, meticulously drawn in white chalk powder and filled with vibrant yellow and orange marigold petals. Senior girls worked with precision and teamwork to assemble these patterns, showcasing mathematical geometry and folk aesthetics, representing prosperity, harmony, and gratitude.
            </p>

            <h3 className="font-serif text-lg sm:text-2xl font-normal text-heritage-gold pt-4 flex items-center gap-2">
              <Wind className="w-5 h-5 text-heritage-gold" /> Co-Creative Flying Science: Kite Crafting Workshop
            </h3>
            <p>
              Under the mentorship of senior craft teachers, students launched into an interactive <strong>Kite Crafting session</strong>. Junior and middle school pupils worked together in grades to build custom lightweight kites, utilizing eco-friendly hand-pressed tissue paper and flexible bamboo support sticks. This hands-on workspace beautifully combined art, craft, and science as teachers discussed principles of gravity, center of mass, and aerodynamics under real wind velocity. After construction, students flew their creations in outstanding sportsmanship.
            </p>

            <h3 className="font-serif text-lg sm:text-2xl font-normal text-heritage-gold pt-4 flex items-center gap-2">
              <Layers className="w-5 h-5 text-heritage-gold" /> The "Bommala Koluvu" Mythic Display
            </h3>
            <p>
              A central attraction for students and visiting parents was the beautiful <em>Bommala Koluvu</em> (traditional display of regional dolls). Handcrafted clay figures, wooden toys from Kondapalli, and folklore characters were arranged beautifully on steps, giving teachers a wonderful portal to tell interesting mythological and agronomical stories to our younger primary pupils, reinforcing local cultural literacy.
            </p>

            {/* Blockquote Visual Accent */}
            <blockquote className="my-8 p-6 bg-heritage-emerald/10 border-l-4 border-heritage-gold italic space-y-2">
              <p className="font-serif text-base sm:text-lg text-heritage-gold">
                "Our Sankranthi 2025 gathering was a brilliant example of social harmony and hands-on learning. Integrating traditional kite crafting with physics ensures that our students explore, discover, and appreciate both science and heritage simultaneously."
              </p>
              <cite className="block font-mono text-[10px] uppercase font-bold tracking-widest text-right">
                — Serenity High School Cultural Convener
              </cite>
            </blockquote>

            <h3 className="font-serif text-lg sm:text-2xl font-normal text-heritage-gold pt-4 flex items-center gap-2">
              <Gift className="w-5 h-5 text-heritage-gold" /> Bhogi Blessings &amp; Community Sweets
            </h3>
            <p>
              For our pre-primary toddlers, the school hosted a delightful <strong>Bhogi Pallu</strong> ceremony. Scholars were showered with sweet seasonal jujube fruits, sugarcane pieces, and festive coins, a tradition designed to safeguard the childhood years from negative energy while encouraging robust health. Parents contributed sweet rice delicacies cooked in traditional stoves, which were shared warmly to ensure absolutely no child left without sweet memories of the day.
            </p>

          </div>

          {/* Snapshot Collage Section */}
          <div className="mt-12 pt-8 border-t border-heritage-gold/25 space-y-4">
            <h4 className="font-serif text-base sm:text-lg text-heritage-gold font-normal uppercase tracking-wider text-left">
              Sankranthi 2025 Chronicle Snapshot Collage
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="border border-heritage-gold/25 relative h-48 overflow-hidden group">
                <img 
                  src="https://i0.wp.com/serenitymodelschools.com/wp-content/uploads/2026/01/sankranthi2026.jpg?fit=640%2C400&ssl=1" 
                  alt="Students gathering during harvest celebration" 
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/45 flex items-end p-3 opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="font-mono text-[9px] uppercase tracking-widest text-white">
                    Festive Outfits &amp; Traditional Procession
                  </span>
                </div>
              </div>
              <div className="border border-heritage-gold/25 relative h-48 overflow-hidden group">
                <img 
                  src="https://i0.wp.com/serenitymodelschools.com/wp-content/uploads/2025/11/serenity-model-high-school-6.jpg?fit=520%2C400&ssl=1" 
                  alt="Rangoli designs patterns hand made" 
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/45 flex items-end p-3 opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="font-mono text-[9px] uppercase tracking-widest text-white">
                    Muggu Rangoli Courtyard Art Assembly
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Social shares and bookmark highlights */}
          <div className="mt-8 pt-6 border-t border-heritage-gold/15 flex justify-between items-center text-xs">
            <button 
              className="text-heritage-gold font-mono font-bold tracking-widest uppercase flex items-center gap-1.5 hover:text-[#eae7de] cursor-pointer"
              onClick={() => alert("Sankranthi 2025 Chronicle Bookmarked to Serenity Academic Registry.")}
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
