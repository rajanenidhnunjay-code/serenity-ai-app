import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Image, 
  Video, 
  Award, 
  Sparkles, 
  Play, 
  Tv, 
  Compass, 
  Maximize2,
  ChevronRight
} from "lucide-react";

interface MediaProps {
  isDarkMode: boolean;
}

interface GalleryItem {
  id: string;
  category: "all" | "campus" | "achievements" | "events" | "sports";
  type: "photo" | "video";
  title: string;
  description: string;
  color: string;
  image: string;
  achievementMetric?: string;
  externalLink?: string;
}

export default function MediaSection({ isDarkMode }: MediaProps) {
  const [activeCategory, setActiveCategory] = useState<"all" | "campus" | "achievements" | "events" | "sports">("all");
  const [lightboxItem, setLightboxItem] = useState<GalleryItem | null>(null);

  const galleryItems: GalleryItem[] = [
    {
      id: "media-2",
      category: "achievements",
      type: "photo",
      title: "SSC BOARD EXCELLENCE CELEBRATIONS",
      description: "Honoring our high performers who achieved top state scores, felicitation presided over by the Correspondent.",
      color: "from-heritage-emerald/90 to-[#122e20]",
      image: "https://i0.wp.com/serenitymodelschools.com/wp-content/uploads/2026/05/WhatsApp-Image-2026-04-30-at-9.20.47-AM.jpeg?fit=279%2C400&ssl=1",
      achievementMetric: "10/10 GPA Score"
    },
    {
      id: "media-3",
      category: "achievements",
      type: "photo",
      title: "AWARD & RECOGNITION BY GOVERNOR",
      description: "Commemoration of academic excellence and institutional distinction awarded by the Honourable Governor, featured in Aadab Hyderabad.",
      color: "from-heritage-emerald/90 to-heritage-dark/95",
      image: "https://i0.wp.com/serenitymodelschools.com/wp-content/uploads/2026/02/serenity.jpeg?fit=412%2C400&ssl=1",
      achievementMetric: "Governor Recognition"
    },
    {
      id: "media-4",
      category: "events",
      type: "photo",
      title: "SERENITY CELEBRATING BATHUKAMMA IN COLLECTORATE OFFICE",
      description: "District Collector Harish attended the grand Bathukamma celebrations held at the Medchal Collectorate premises, where he interacted with visiting schoolgirls and extended his festive wishes.",
      color: "from-heritage-emerald/90 to-heritage-dark/95",
      image: "https://i0.wp.com/serenitymodelschools.com/wp-content/uploads/2025/11/serenity-model-high-school-6.jpg?fit=520%2C400&ssl=1"
    },
    {
      id: "media-6",
      category: "events",
      type: "photo",
      title: "CULTURAL ORCHESTRATIONS & FOLK DANCES",
      description: "Students showcasing vibrant stage plays, traditional costumes, and folk narrative formats.",
      color: "from-heritage-emerald/90 to-heritage-dark/95",
      image: "https://i0.wp.com/serenitymodelschools.com/wp-content/uploads/2025/11/serenity-model-high-school-006.jpg?fit=411%2C400&ssl=1",
      achievementMetric: "Excellence Honors"
    },
    {
      id: "media-7",
      category: "events",
      type: "photo",
      title: "SERENITY HELDING TELANGANA TRADITIONS",
      description: "When the stillness of Serenity meets the vibrant beats of Telangana’s soul—our students bringing the colorful traditions of Bonalu to life!",
      color: "from-heritage-emerald/90 to-heritage-dark/95",
      image: "https://i0.wp.com/serenitymodelschools.com/wp-content/uploads/2025/11/serenity-model-high-school-001.jpg?fit=426%2C400&ssl=1"
    }
  ];

  const filteredItems = galleryItems;

  return (
    <section id="media" className={`py-24 transition-colors duration-300 ${isDarkMode ? "bg-heritage-dark" : "bg-heritage-cream"}`}>
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-none text-[10px] font-bold bg-heritage-emerald/10 text-heritage-gold border border-heritage-gold/25 tracking-wider uppercase mb-3">
            <Image className="w-3.5 h-3.5 text-heritage-gold" /> Media Gallery
          </div>
          <h2 className={`text-3xl sm:text-5xl font-serif font-light tracking-tight ${
            isDarkMode ? "text-heritage-cream" : "text-heritage-dark"
          }`}>
            Life and <span className="italic font-normal text-heritage-gold font-serif">Achievements Showcase</span>
          </h2>
          <div className="w-24 h-[1px] bg-heritage-gold/50 mx-auto my-4" />
          <p className={`text-sm sm:text-base leading-relaxed ${isDarkMode ? "text-heritage-sage/85" : "text-heritage-emerald/85"}`}>
            A pictorial record of active growth, board-decorating milestones, sports honors, and modern technology explorations defining the Serenity campus spirit.
          </p>
        </div>



        {/* Masonry / Bento Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20 animate-fade-in font-sans">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                layout
                key={item.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.25 }}
                whileHover={{ y: -6 }}
                className={`group relative overflow-hidden rounded-none border aspect-[16/11] flex flex-col justify-end p-6 cursor-pointer ${
                  isDarkMode ? "border-heritage-gold/20" : "border-heritage-gold/35 shadow-sm bg-white"
                }`}
                onClick={() => {
                  if (item.externalLink) {
                    window.open(item.externalLink, "_blank", "noopener,noreferrer");
                  } else {
                    setLightboxItem(item);
                  }
                }}
              >
                {/* Real school photographic asset */}
                <img 
                  src={item.image} 
                  alt={item.title}
                  referrerPolicy="no-referrer"
                  className="absolute inset-0 w-full h-full object-cover z-0 transition-transform duration-500 group-hover:scale-105 pointer-events-none"
                />

                {/* Styled elegant transparent gradient overlay representing the visual accent */}
                <div className={`absolute inset-0 bg-gradient-to-tr ${item.color} opacity-70 group-hover:opacity-55 z-0 transition-all duration-300`} />
                
                {/* Visual grid / scanline overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent z-10" />
                
                {/* Media indicator badge */}
                <div className="absolute top-4 right-4 z-20 bg-black/45 backdrop-blur-sm p-2 rounded-none text-white border border-white/10">
                  {item.type === "photo" ? <Image className="w-4 h-4 text-heritage-gold" /> : <Play className="w-4 h-4 text-heritage-gold fill-heritage-gold" />}
                </div>

                {item.achievementMetric && (
                  <div className="absolute top-4 left-4 z-20 bg-heritage-gold py-1 px-2.5 rounded-none text-heritage-dark font-mono font-bold text-[8px] tracking-widest uppercase flex items-center gap-1">
                    <Award className="w-3.5 h-3.5" /> {item.achievementMetric}
                  </div>
                )}

                {/* Info Text block */}
                <div className="relative z-20 text-white space-y-1.5 text-left">
                  <span className="text-[9px] text-heritage-gold font-bold uppercase tracking-widest block font-mono">
                    {item.category === "campus" ? "FACILITY BUILD" : item.category.toUpperCase()}
                  </span>
                  <h4 className="font-serif font-light text-base sm:text-lg group-hover:text-heritage-gold transition-colors text-white">
                    {item.title}
                  </h4>
                  <p className="text-xs text-heritage-cream/80 leading-normal line-clamp-2">
                    {item.description}
                  </p>
                  <div className="flex items-center gap-1.5 text-[10px] font-mono tracking-wider font-bold text-heritage-gold pt-1 group-hover:underline uppercase font-sans">
                    {item.externalLink ? "View News Article" : "Expand Details"} <ChevronRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Board topper highlight banner */}
        <div className={`rounded-none border p-8 sm:p-12 overflow-hidden relative ${
          isDarkMode ? "bg-heritage-dark/40 border-heritage-gold/20" : "bg-white border-heritage-gold/35 shadow-sm"
        }`}>
          <div className="absolute right-0 bottom-0 w-80 h-80 bg-heritage-gold/5 rounded-full blur-3xl pointer-events-none" />
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8 space-y-4 text-left">
              <span className="bg-heritage-gold text-heritage-dark px-3 py-1 rounded-none font-bold text-[10px] uppercase font-mono tracking-widest inline-block">
                Board topper spotlight
              </span>
              <h3 className="text-2xl sm:text-4xl font-serif font-light text-heritage-gold leading-tight">
                An Elite Record of Perfect 10/10 SSC GPA Marks
              </h3>
              <p className={`text-sm sm:text-base leading-relaxed ${isDarkMode ? "text-heritage-sage/85" : "text-heritage-emerald/85"}`}>
                Year after year, Serenity scholars decorate the regional state ranks. Our systematic curriculum tests, stress-management workshops, and experienced board-mentors guarantee that academic potential matures into state-board benchmarks.
              </p>

              {/* Grid of accomplishments */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-3 uppercase tracking-wide text-xs">
                <div>
                  <span className="text-2xl font-serif font-light text-heritage-gold block">42+ Scholar</span>
                  <span className={`text-[9px] block font-bold font-mono uppercase ${isDarkMode ? "text-heritage-sage/60" : "text-heritage-emerald/60"}`}>Absolute 10/10 GPA</span>
                </div>
                <div>
                  <span className="text-2xl font-serif font-light text-heritage-gold block">100% Rate</span>
                  <span className={`text-[9px] block font-bold font-mono uppercase ${isDarkMode ? "text-heritage-sage/60" : "text-heritage-emerald/60"}`}>First Division Passing</span>
                </div>
                <div>
                  <span className="text-2xl font-serif font-light text-heritage-gold block">IIT / NEET Entry</span>
                  <span className={`text-[9px] block font-bold font-mono uppercase ${isDarkMode ? "text-heritage-sage/60" : "text-heritage-emerald/60"}`}>Direct Track Selection</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 flex items-center justify-center">
              <div className={`p-6 rounded-none border text-center w-full ${
                isDarkMode ? "bg-heritage-dark border-heritage-gold/25" : "bg-[#faf6f0] border-heritage-gold/35"
              }`}>
                <div className="w-12 h-12 rounded-full bg-heritage-gold/10 text-heritage-gold flex items-center justify-center mx-auto mb-3 border border-heritage-gold/20">
                  <Play className="w-5 h-5 fill-heritage-gold text-heritage-gold" />
                </div>
                <h4 className={`text-sm font-semibold font-serif ${isDarkMode ? "text-heritage-cream" : "text-heritage-dark"}`}>Hear from the Toppers</h4>
                <p className={`text-xs mt-1 mb-4 leading-normal ${isDarkMode ? "text-heritage-sage/80" : "text-heritage-emerald/75"}`}>Watch our academic top rank alumni reflect on their learning schedules at Serenity Hill.</p>
                <button 
                  onClick={() => alert("Video Broadcast Stream: alumni_interviews_2025.mp4 has launched successfully in test screen.")}
                  className="w-full py-2.5 bg-heritage-emerald text-heritage-cream hover:bg-heritage-emerald/90 transition border border-heritage-gold/30 rounded-none text-[10px] font-mono tracking-widest uppercase"
                >
                  Stream Broadcast
                </button>
              </div>
            </div>

          </div>
        </div>

        {/* Lightbox Modal */}
        <AnimatePresence>
          {lightboxItem && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.8 }}
                exit={{ opacity: 0 }}
                onClick={() => setLightboxItem(null)}
                className="absolute inset-0 bg-heritage-dark"
              />
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className={`relative ${
                  lightboxItem.id === "media-1" || lightboxItem.id === "media-2" || lightboxItem.id === "media-3" || lightboxItem.id === "media-4" || lightboxItem.id === "media-6" || lightboxItem.id === "media-7" ? "max-w-4xl" : "max-w-lg"
                } w-full p-6 sm:p-8 rounded-none border z-10 text-left ${
                  lightboxItem.id === "media-1" || lightboxItem.id === "media-2" || lightboxItem.id === "media-3" || lightboxItem.id === "media-4" || lightboxItem.id === "media-6" || lightboxItem.id === "media-7"
                    ? "bg-white border-slate-300 text-slate-900 shadow-2xl animate-fade-in" 
                    : isDarkMode ? "bg-heritage-dark border-heritage-gold/30 text-heritage-cream" : "bg-white border-heritage-gold/40 text-heritage-dark"
                }`}
              >
                <button
                  onClick={() => setLightboxItem(null)}
                  className={`absolute top-4 right-4 p-1.5 rounded-none font-bold transition z-20 ${
                    lightboxItem.id === "media-1" || lightboxItem.id === "media-2" || lightboxItem.id === "media-3" || lightboxItem.id === "media-4" || lightboxItem.id === "media-6" || lightboxItem.id === "media-7" ? "hover:bg-slate-100 text-slate-700" : "hover:bg-heritage-gold/10 text-heritage-gold"
                  }`}
                >
                  ✕
                </button>
                {lightboxItem.id === "media-2" ? (
                  <div className="bg-white text-slate-900 p-4 sm:p-6 font-serif relative border border-slate-300 shadow-inner">
                    {/* Newspaper masthead */}
                    <div className="border-b-4 border-double border-slate-800 pb-3 mb-4">
                      <div className="flex flex-col sm:flex-row justify-between items-center gap-2">
                        {/* Andhra Prabha Logo representation */}
                        <div className="flex items-center gap-2">
                          <svg className="w-8 h-8 text-[#0284c7] fill-[#e0f2fe] shrink-0" viewBox="0 0 24 24">
                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.53c-.26-.81-1-1.4-1.9-1.4h-1v-3c0-.55-.45-1-1-1h-6v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
                          </svg>
                          <span className="text-2.5xl sm:text-3xl font-extrabold tracking-tight text-[#025a9c] font-sans">ఆంధ్రప్రభ</span>
                        </div>
                        <div className="text-center sm:text-right font-sans text-[10px] sm:text-xs text-slate-500 font-bold uppercase tracking-wider">
                          <div>ఆంధ్రప్రభ దినపత్రిక (ANDHRA PRABHA DAILY)</div>
                          <div>స్థాపితం: 1938 | రంగారెడ్డి జిల్లా ప్రచురణ</div>
                        </div>
                      </div>
                    </div>

                    {/* Main News Heading matching scanned image style */}
                    <h1 className="text-xl sm:text-2xl lg:text-3xl font-black text-[#1e1e1e] leading-snug tracking-tight mb-4 text-center sm:text-left">
                      10వ తరగతి ఫలితాల్లో నాగారం సెరినిటి ప్రభంజనం
                    </h1>

                    {/* Subheading red banner */}
                    <div className="text-sm font-bold text-red-700 mb-4 flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-red-700 inline-block shrink-0 animate-pulse" />
                      <span>విద్యార్థులను అభినందించిన పాఠశాల అధినేతలు</span>
                    </div>

                    {/* Columns structure */}
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-5 items-start">
                      
                      {/* Left Side: News column text */}
                      <div className="md:col-span-7 space-y-3.5 text-[12.5px] sm:text-[14px] leading-relaxed text-slate-800 text-justify border-r border-slate-200 pr-0 md:pr-4 font-sans">
                        <p className="indent-6">
                          <span className="font-semibold text-black border-r border-slate-300 pr-1.5 mr-1.5 font-bold">కీసర, ఏప్రిల్ 29 (ఆంధ్రప్రభ):</span> బుధవారం రోజున వెలువడిన 2026 పదవ తరగతి ఫలితాల్లో నాగారం సెరినిటి విద్యార్థులు మరోసారి తమ సత్తా చాటారు. వందశాతం ఫలితాలతో సెరినిటి పాఠశాల ప్రభంజనం సృష్టించింది. అక్షరరెడ్డి అత్యధికముగా 588 మార్కులు సాధించింది. సిహెచ్. దివ్య గాయత్రి 587 మార్కులతో, జి. మౌనిక 586 మార్కులతో రెండు, మూడు స్థానాలు పొందారు.
                        </p>
                        <p className="indent-6">
                          ఎండీ ఆయేషా 579, అర్పిత 578 మార్కులతో ప్రతిభను చాటారు. అత్యధిక మార్కులతో మొదటి మూడు స్థానాలు సాధించిన విద్యార్థులను ఘనంగా సత్కరించి, ఒక్కొక్కరికీ పదివేల రూపాయల నగదు బహుమతిని పాఠశాల ప్రిన్సిపాల్, కరెస్పాండెంట్ నోముల జంగిరెడ్డి అందజేశారు.
                        </p>
                        <p className="indent-6">
                          ఈ ఘనమైన ఫలితాల శ్రేణిని అందుకున్న విద్యార్థులను ఉద్దేశించి మాట్లాడిన కరెస్పాండెంట్ జంగిరెడ్డి స్కూల్ స్థాపించిన నాటి నుండి నేటి వరకూ ఇదే అత్యున్నత రికార్డులను సృష్టించి మా నమ్మకాన్ని నిలబెట్టిన విద్యార్థులందరికీ ధన్యవాదాలు తెలిపారు.
                        </p>
                        <p className="indent-6">
                          29 మంది విద్యార్థులు 550 పైగా మార్కులు సాధించారు. అత్యద్భుతమైన ఫలితాలు సాధించిన సెరినిటి పాఠశాల విద్యార్థులను, అండకు కృషిచేసిన ఉపాధ్యాయులను పాఠశాల ముఖ్య కార్యదర్శి నోముల వసంత, కరెస్పాండెంట్ నోముల జంగిరెడ్డిలు ప్రత్యేకంగా అభినందించారు.
                        </p>
                      </div>

                      {/* Right Side: Image and details */}
                      <div className="md:col-span-5 flex flex-col justify-between self-stretch">
                        <div className="border border-slate-300 p-2 bg-[#FAF9F5] shadow-xs mb-3 relative">
                          <div className="relative">
                            <img 
                              src={lightboxItem.image} 
                              alt={lightboxItem.title} 
                              referrerPolicy="no-referrer"
                              className="w-full h-auto object-cover rounded-none"
                            />
                            {/* Inline close button directly overlaying the photo */}
                            <button
                              onClick={() => setLightboxItem(null)}
                              className="absolute top-2.5 right-2.5 bg-black/85 hover:bg-red-600 text-white font-mono text-[9px] font-bold tracking-widest uppercase py-1 px-2 border border-white/20 transition-colors cursor-pointer z-10 shadow-md"
                              title="Close Image View"
                            >
                              ✕ Close Photo
                            </button>
                          </div>
                          <div className="text-[10px] sm:text-[11px] font-sans text-slate-700 italic text-center mt-2 leading-relaxed">
                            విద్యార్థులను पुष्पगुच्छాలతో అభినందిస్తున్న పాఠశాల అధినేతలు నోముల జంగిరెడ్డి మరియు ముఖ్యకార్యదర్శి వసంత
                          </div>
                        </div>

                        {/* Additional info */}
                        <div className="text-[12px] sm:text-[13px] leading-relaxed text-slate-700 text-justify font-sans bg-slate-50 p-2.5 border border-slate-200">
                          <strong>గ్రేడ్ల రికార్డ్:</strong> వందశాతం ఉత్తీర్ణతతో పాటు ప్రతి సబ్జెక్టులోనూ అద్భుతమైన స్కోర్లు సాధించి పాఠశాలకు చారిత్రాత్మక విజయాన్ని విద్యార్థినులు తెచ్చిపెట్టారు.
                        </div>
                      </div>

                    </div>

                    {/* Bottom source bar */}
                    <div className="border-t border-slate-300 pt-3 mt-4 text-center">
                      <div className="text-[11px] sm:text-xs font-sans text-blue-600 font-bold tracking-wide">
                        30/04/2026 | Rangareddy | Page : 2
                      </div>
                      <div className="text-[9px] sm:text-[10px] font-sans text-slate-500 mt-1">
                        Source : <a href="https://epaper.prabhanews.com" target="_blank" rel="noopener noreferrer" className="hover:underline">https://epaper.prabhanews.com</a>
                      </div>
                    </div>

                    {/* Navigation buttons */}
                    <div className="border-t border-slate-200 pt-3 mt-4 flex justify-end gap-2 text-xs font-sans">
                      <button 
                        onClick={() => setLightboxItem(null)}
                        className="px-4 py-1.5 border border-slate-300 text-slate-600 hover:bg-slate-50 transition rounded-none text-[10px] font-mono tracking-wider font-bold uppercase cursor-pointer"
                      >
                        వెనుకకు (Close)
                      </button>
                      <button 
                        onClick={() => {
                          const w = window.open("", "_blank");
                          if (w) {
                            w.document.write(`
                              <html>
                                <head>
                                  <title>10వ తరగతి ఫలితాల్లో నాగారం సెరినిటి ప్రభంజనం</title>
                                  <style>
                                    body { font-family: serif; background: #fafafa; padding: 40px; color: #333; line-height: 1.6; }
                                    .container { max-width: 800px; margin: auto; background: white; padding: 40px; border: 1px solid #ddd; box-shadow: 0 0 10px rgba(0,0,0,0.05); }
                                    h1 { color: #1e1e1e; font-size: 30px; border-bottom: 2px solid #ccc; padding-bottom: 15px; margin-bottom: 5px; }
                                    .sub { font-size: 18px; font-weight: bold; color: #b91c1c; margin-bottom: 25px; }
                                    p { font-size: 15px; text-align: justify; margin-bottom: 15px; text-indent: 30px; }
                                    .source { margin-top: 40px; border-top: 1px solid #eee; padding-top: 15px; font-size: 12px; color: #777; display: flex; justify-content: space-between; font-family: sans-serif; }
                                    .close-btn { background: #111; color: white; border: none; padding: 10px 20px; font-size: 14px; cursor: pointer; margin-top: 20px; }
                                  </style>
                                </head>
                                <body>
                                  <div class="container">
                                    <h1>10వ తరగతి ఫలితాల్లో నాగారం సెరినిటి ప్రభంజనం</h1>
                                    <div class="sub">• ఆంధ్రప్రభ దినపత్రిక - విద్యా ప్రచురణ ప్రత్యేక వార్త</div>
                                    <p><b>కీసర, ఏప్రిల్ 29 (ఆంధ్రప్రభ):</b> బుధవారం రోజున వెలువడిన 2026 పదవ తరగతి ఫలితాల్లో నాగారం సెరినిటి విద్యార్థులు మరోసారి తమ సత్తా చాటారు. వందశాతం ఫలితాలతో సెరినిటి పాఠశాల ప్రభంజనం సృష్టించింది. అక్షరరెడ్డి అత్యధికముగా 588 మార్కులు సాధించింది. సిహెచ్. దివ్య గాయత్రి 587 మార్కులతో, జి. మౌనిక 586 మార్కులతో రెండు, మూడు స్థానాలు పొందారు.</p>
                                    <p>ఎండీ ఆయేషా 579, అర్పిత 578 మార్కులతో ప్రతిభను చాటారు. అత్యధిక మార్కులతో మొదటి మూడు స్థానాలు సాధించిన విద్యార్థినులను ఘనంగా సత్కరించి, ఒక్కొక్కరికీ పదివేల రూపాయల నగదు బహుమతిని పాఠశాల ప్రిన్సిపాల్, కరెస్పాండెంట్ నోముల జంగిరెడ్డి అందజేశారు.</p>
                                    <p>29 మంది విద్యార్థులు 550 పైగా మార్కులు సాధించారు. అత్యద్భుతమైన ఫలితాలు సాధించిన సెరినిటి పాఠశాల విద్యార్థులను, అండకు కృషిచేసిన ఉపాధ్యాయులను పాఠశాల ముఖ్య కార్యదర్శి నోముల వసంత, కరెస్పాండెంట్ నోముల జంగిరెడ్డిలు ప్రత్యేకంగా అభినందించారు.</p>
                                    <div class="source">
                                      <span><b>ఆంధ్రప్రభ దినపత్రిక (Andhra Prabha)</b></span>
                                      <span>గురువారం, 30 ఏప్రిల్ 2026 - పేజీ 2</span>
                                    </div>
                                    <center><button class="close-btn" onclick="window.close()">పత్రాన్ని మూసివేయి (Close)</button></center>
                                  </div>
                                </body>
                              </html>
                            `);
                            w.document.close();
                          }
                        }}
                        className="px-4 py-1.5 bg-[#1a365d] text-white hover:bg-[#2a4365] border border-transparent rounded-none text-[10px] font-mono tracking-wider font-bold uppercase transition cursor-pointer"
                      >
                        తెరవండి (Open Document)
                      </button>
                    </div>

                  </div>
                ) : lightboxItem.id === "media-3" ? (
                  <div className="bg-white text-slate-900 p-4 sm:p-6 font-serif relative border border-slate-350 shadow-inner">
                    {/* Newspaper masthead */}
                    <div className="border-b-4 border-double border-slate-800 pb-3 mb-4">
                      <div className="flex flex-col sm:flex-row justify-between items-center gap-2">
                        {/* Aadab Hyderabad Logo representation */}
                        <div className="flex items-center gap-2">
                          <svg className="w-8 h-8 text-[#0284c7] fill-[#e0f2fe] shrink-0" viewBox="0 0 24 24">
                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.53c-.26-.81-1-1.4-1.9-1.4h-1v-3c0-.55-.45-1-1-1h-6v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
                          </svg>
                          <span className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#1a365d] font-sans">ఆదాబ్ హైదరాబాద్</span>
                        </div>
                        <div className="text-center sm:text-right font-sans text-[10px] sm:text-xs text-slate-500 font-bold uppercase tracking-wider">
                          <div>తెలుగు దినపత్రిక (TELUGU DAILY)</div>
                          <div>మేడ్చల్ జిల్లా ప్రచురణ</div>
                        </div>
                      </div>
                    </div>

                    {/* Main News Heading matching Aadab Hyderabad style */}
                    <h1 className="text-xl sm:text-2xl lg:text-3xl font-black text-[#1e3b8a] leading-snug tracking-tight mb-4 text-center sm:text-left">
                      నాగారం సెరినిటీ విద్యార్థులకు గవర్నర్ చేతుల మీదుగా విశిష్ట ప్రతిభా రత్న పురస్కార్ అవార్డు
                    </h1>

                    {/* Columns structure */}
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-5 items-start">
                      
                      {/* Left Side: News column text justified */}
                      <div className="md:col-span-7 space-y-3.5 text-[12.5px] sm:text-[14px] leading-relaxed text-slate-800 text-justify border-r border-slate-200 pr-0 md:pr-4 font-sans">
                        <p className="indent-6">
                          <span className="font-semibold text-black border-r border-slate-300 pr-1.5 mr-1.5 font-bold">కీసర, ఫిబ్రవరి 18 (ఆదాబ్ హైదరాబాద్):</span> హిందీ సేవా సదన్ మహావిద్యాలయ్ నిర్వహించిన పరీక్షల్లో నాగారం సెరినిటీ పాఠశాల విద్యార్థులు హారిక, ఆరాధ్య రాష్ట్ర స్థాయిలో ప్రథమ స్థానం సాధించి రూ. 2500/- పురస్కారంతో పాటు, బంగారు పతకం మరియు ప్రశంసా పత్రం అందుకున్నారు.
                        </p>
                        <p className="indent-6">
                          గవర్నర్ జిష్ణు దేవ్ వర్మ చేతుల మీదుగా ఈ పురస్కారాన్ని స్వీకరించారు. గవర్నర్ చేతుల మీదుగా మా విద్యార్థులు ప్రతిభా రత్న పురస్కారాన్ని పొందడం ఎంతో గర్వంగా ఉందని సెరినిటీ పాఠశాల కరెస్పాండెంట్ నోముల జంగిరెడ్డి పేర్కొన్నారు.
                        </p>
                        <p className="indent-6">
                          అలాగే ఈ విజయాన్ని సాధించిన విద్యార్థులను సత్కరించి అభినందనలు తెలిపారు. ఈ కార్యక్రమంలో భాగంగా పాఠశాల ప్రధానోపాధ్యాయులు, ఉపాధ్యాయ బృందం మద్దతును మెచ్చుకున్నారు.
                        </p>
                      </div>

                      {/* Right Side: Image and final details */}
                      <div className="md:col-span-5 flex flex-col justify-between self-stretch">
                        <div className="border border-slate-300 p-2 bg-[#FAF9F5] shadow-xs mb-3">
                          <img 
                            src="https://i0.wp.com/serenitymodelschools.com/wp-content/uploads/2026/02/serenity.jpeg?fit=412%2C400&ssl=1" 
                            alt="Governor Presenting Award to School Student" 
                            referrerPolicy="no-referrer"
                            className="w-full h-auto object-cover rounded-none"
                          />
                          <div className="text-[10px] sm:text-[11px] font-sans text-slate-650 italic text-center mt-2 leading-relaxed">
                            మహావిద్యాలయ్ ప్రైజ్ డిస్ట్రిబ్యూషన్‌లో గవర్నర్ చేతుల మీదుగా ప్రతిభా రత్న పురస్కారం పొందుతున్న హారికా
                          </div>
                        </div>

                        {/* Additional short comment block */}
                        <div className="text-[12px] sm:text-[13px] leading-relaxed text-slate-800 text-justify font-sans">
                          రాష్ట్రస్థాయి హిందీ ప్రతిభా ప్రదర్శనలో ఉత్తమ ర్యాంకులు కనబర్చి, బంగారు పతకాలు సాధించిన కీర్తి ప్రతిష్టలు కొనియాడదగినవని పలువురు ప్రముఖులు పేర్కొన్నారు.
                        </div>
                      </div>

                    </div>

                    {/* Bottom source bar */}
                    <div className="border-t border-slate-300 pt-3 mt-4 text-center">
                      <div className="text-[11px] sm:text-xs font-sans text-blue-600 font-bold tracking-wide">
                        19/02/2026 | Aadab Hyderabad Main | Page : 6
                      </div>
                      <div className="text-[9px] sm:text-[10px] font-sans text-slate-500 mt-1">
                        Source : <a href="https://epaper.aadabhyderabad.in/" target="_blank" rel="noopener noreferrer" className="hover:underline">https://epaper.aadabhyderabad.in/</a>
                      </div>
                    </div>

                    {/* Clean navigation buttons below the clipping */}
                    <div className="border-t border-slate-200 pt-3 mt-4 flex justify-end gap-2 text-xs font-sans">
                      <button 
                        onClick={() => setLightboxItem(null)}
                        className="px-4 py-1.5 border border-slate-300 text-slate-600 hover:bg-slate-50 transition rounded-none text-[10px] font-mono tracking-wider font-bold uppercase cursor-pointer"
                      >
                        వెనుకకు (Close)
                      </button>
                      <button 
                        onClick={() => {
                          const w = window.open("", "_blank");
                          if (w) {
                            w.document.write(`
                              <html>
                                <head>
                                  <title>నాగారం సెరినిటీ విద్యార్థులకు గవర్నర్ చేతుల మీదుగా విశిష్ట ప్రతిభా రత్న పురస్కార్ అవార్డు</title>
                                  <style>
                                    body { font-family: serif; background: #fafafa; padding: 40px; color: #333; line-height: 1.6; }
                                    .container { max-width: 800px; margin: auto; background: white; padding: 40px; border: 1px solid #ddd; box-shadow: 0 0 10px rgba(0,0,0,0.05); }
                                    h1 { color: #1e3a8a; font-size: 30px; border-bottom: 2px solid #ccc; padding-bottom: 15px; margin-bottom: 5px; }
                                    .sub { font-size: 18px; font-weight: bold; color: #b91c1c; margin-bottom: 25px; }
                                    p { font-size: 15px; text-align: justify; margin-bottom: 15px; text-indent: 30px; }
                                    .source { margin-top: 40px; border-top: 1px solid #eee; padding-top: 15px; font-size: 12px; color: #777; display: flex; justify-content: space-between; font-family: sans-serif; }
                                    .close-btn { background: #111; color: white; border: none; padding: 10px 20px; font-size: 14px; cursor: pointer; margin-top: 20px; }
                                  </style>
                                </head>
                                <body>
                                  <div class="container">
                                    <h1>నాగారం సెరినిటీ విద్యార్థులకు గవర్నర్ చేతుల మీదుగా విశిష్ట ప్రతిభా రత్న పురస్కార్ అవార్డు</h1>
                                    <div class="sub">• ఆదాబ్ హైదరాబాద్ - ప్రతిభా పురస్కార ప్రత్యేక వార్త</div>
                                    <p><b>కీసర, ఫిబ్రవరి 18 (ఆదాబ్ హైదరాబాద్):</b> హిందీ సేవా సదన్ మహావిద్యాలయ్ నిర్వహించిన పరీక్షల్లో నాగారం సెరినిటీ పాఠశాల విద్యార్థులు హారిక, ఆరాధ్య రాష్ట్ర స్థాయిలో ప్రథమ స్థానం సాధించి రూ. 2500/- పురస్కారంతో పాటు, బంగారు పతకం మరియు ప్రశంసా పత్రం అందుకున్నారు.</p>
                                    <p>గవర్నర్ జిష్ణు దేవ్ వర్మ చేతుల మీదుగా ఈ పురస్కారాన్ని స్వీకరించారు. గవర్నర్ చేతుల మీదుగా మా విద్యార్థులు ప్రతిభా రత్న పురస్కారాన్ని పొందడం ఎంతో గర్వంగా ఉందని సెరినిటీ పాఠశాల కరెస్పాండెంట్ నోముల జంగిరెడ్డి పేర్కొన్నారు. అలాగే ఈ విజయాన్ని సాధించిన విద్యార్థులను సత్కరించి అభినందనలు తెలిపారు.</p>
                                    <div class="source">
                                      <span><b>ఆదాబ్ హైదరాబాద్ దినపత్రిక (Aadab Hyderabad)</b></span>
                                      <span>ఆదివారం, 19 ఫిబ్రవరి 2026 - పేజీ 6</span>
                                    </div>
                                    <center><button class="close-btn" onclick="window.close()">పత్రాన్ని మూసివేయి (Close)</button></center>
                                  </div>
                                </body>
                              </html>
                            `);
                            w.document.close();
                          }
                        }}
                        className="px-4 py-1.5 bg-[#1a365d] text-white hover:bg-[#2a4365] border border-transparent rounded-none text-[10px] font-mono tracking-wider font-bold uppercase transition cursor-pointer"
                      >
                        తెరవండి (Open Document)
                      </button>
                    </div>

                  </div>
                ) : lightboxItem.id === "media-1" ? (
                  <div className="bg-white text-slate-900 p-4 sm:p-6 font-serif relative border border-slate-350 shadow-inner">
                    {/* Newspaper masthead */}
                    <div className="border-b-4 border-double border-slate-800 pb-3 mb-4">
                      <div className="flex flex-col sm:flex-row justify-between items-center gap-2">
                        {/* Aadab Hyderabad Logo representation */}
                        <div className="flex items-center gap-2">
                          <svg className="w-8 h-8 text-[#0284c7] fill-[#e0f2fe] shrink-0" viewBox="0 0 24 24">
                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.53c-.26-.81-1-1.4-1.9-1.4h-1v-3c0-.55-.45-1-1-1h-6v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
                          </svg>
                          <span className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#1a365d] font-sans">ఆదాబ్ హైదరాబాద్</span>
                        </div>
                        <div className="text-center sm:text-right font-sans text-[10px] sm:text-xs text-slate-500 font-bold uppercase tracking-wider">
                          <div>తెలుగు దినపత్రిక (TELUGU DAILY)</div>
                          <div>प्रत्येक సేవ ప్రచురణ ప్రదర్శన</div>
                        </div>
                      </div>
                    </div>

                    {/* Pink/Red Main Heading matching the scanned JPEG's vibrant crimson accent */}
                    <h1 className="text-xl sm:text-2xl lg:text-3.5xl font-black text-[#e11d48] leading-snug tracking-tight mb-4 text-center sm:text-left">
                      దాతృత్వం చాటిన నాగారం సెరినిటి మోడల్ హైస్కూల్ విద్యార్థులు
                    </h1>

                    {/* Columns structure */}
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-5 items-start">
                      
                      {/* Left Side: News column text justified for authentic print layout */}
                      <div className="md:col-span-7 space-y-3.5 text-[12px] sm:text-[13.5px] leading-relaxed text-slate-800 text-justify border-r border-slate-200 pr-0 md:pr-4">
                        <p className="indent-6">
                          <span className="font-semibold text-black border-r border-slate-300 pr-1.5 mr-1.5 font-sans">కీసర, 23 డిసెంబర్ (ఆదాబ్ హైదరాబాద్):</span> ప్రపంచ మానవాళికి సేవా తత్పరతను, శాంతిని బోధించిన యేసుక్రీస్తు జన్మదినమైన క్రిస్మస్ వేడుకలను నాగారం సెరినిటి మోడల్ హైస్కూల్‌లో శనివారం ఘనంగా నిర్వహించారు. ఈ సందర్భంగా అనాధ బాలురకు, వృద్ధులకు పాఠశాల విద్యార్థులు సహాయాన్ని అందించారు.
                        </p>
                        <p className="indent-6">
                          నిత్యావసర వస్తువులతో పాటు చలికి తట్టుకునేందుకు నూతన దుప్పట్లను కరుణ స్వచ్ఛంద సేవాసంస్థ, ఊర్ధ్వమాత అనాధ ఆశ్రమం, ఆర్‌ఎల్ నగర్‌లో కల ఎల్డర్స్ వృద్ధాశ్రమంలో అనాధ వృద్ధులకు పంపిణీ చేశారు.
                        </p>
                        <p className="indent-6">
                          మంచి ఆలోచనతో ముందుకు వచ్చిన విద్యార్థులను, ఉపాధ్యాయులను కరెస్పాండెంట్ నోముల జంగిరెడ్డి గారు ప్రత్యేకంగా అభినందించారు. సేవా నిరతిని చాటిన విద్యార్థుల మనసును కొనియాడారు.
                        </p>
                      </div>

                      {/* Right Side: Newspaper image card and final Telugu line */}
                      <div className="md:col-span-5 flex flex-col justify-between self-stretch">
                        <div className="border border-slate-300 p-2 bg-[#FAF9F5] shadow-xs mb-3">
                          <img 
                            src="https://images.unsplash.com/photo-1544984243-ec57ea16fe25?q=80&w=800" 
                            alt="Christmas Charity Ceremony" 
                            referrerPolicy="no-referrer"
                            className="w-full h-auto object-cover grayscale opacity-95 brightness-95 contrast-125 rounded-none filter pointer-events-none"
                          />
                          <div className="text-[10px] sm:text-[11px] font-sans text-slate-600 italic text-center mt-2 leading-relaxed">
                            క్రిస్మస్ వేడుకల సందర్భంగా నిరుపేదలకు, వృద్ధులకు దుప్పట్లు మరియు నిత్యావసరాలను పంపిణీ చేస్తున్న సెరినిటీ స్కూల్ ప్రతినిధులు, విద్యార్థినులు
                          </div>
                        </div>

                        {/* Continues column 2 text from the photo */}
                        <div className="text-[12px] sm:text-[13.5px] leading-relaxed text-slate-800 text-justify">
                          జంగిరెడ్డి అభినందించారు. ఈ కార్యక్రమంలో పాఠశాల ముఖ్యకార్యదర్శి నోముల వసంత గారు, ఉపాధ్యాయులు మరియు విద్యార్థినులు పాల్గొన్నారు.
                        </div>
                      </div>

                    </div>

                    {/* Bottom source bar exactly matching the blue footer of the picture */}
                    <div className="border-t border-slate-300 pt-3 mt-4 text-center">
                      <div className="text-[11px] sm:text-xs font-sans text-blue-600 font-bold tracking-wide">
                        24/12/2023 | Aadab Hyderabad Main | Page : 6
                      </div>
                      <div className="text-[9px] sm:text-[10px] font-sans text-slate-500 mt-1">
                        Source : <a href="https://epaper.aadabhyderabad.in/" target="_blank" rel="noopener noreferrer" className="hover:underline">https://epaper.aadabhyderabad.in/</a>
                      </div>
                    </div>

                    {/* Clean navigation buttons below the clipping */}
                    <div className="border-t border-slate-200 pt-3 mt-4 flex justify-end gap-2 text-xs font-sans">
                      <button 
                        onClick={() => setLightboxItem(null)}
                        className="px-4 py-1.5 border border-slate-300 text-slate-600 hover:bg-slate-50 transition rounded-none text-[10px] font-mono tracking-wider font-bold uppercase pointer-events-auto cursor-pointer"
                      >
                        వెనుకకు (Close)
                      </button>
                      <button 
                        onClick={() => {
                          const w = window.open("", "_blank");
                          if (w) {
                            w.document.write(`
                              <html>
                                <head>
                                  <title>దాతృత్వం చాటిన నాగారం సెరినిటీ మోడల్ హైస్కూల్ విద్యార్థులు</title>
                                  <style>
                                    body { font-family: serif; background: #fafafa; padding: 40px; color: #333; line-height: 1.6; }
                                    .container { max-width: 800px; margin: auto; background: white; padding: 40px; border: 1px solid #ddd; box-shadow: 0 0 10px rgba(0,0,0,0.05); }
                                    h1 { color: #dc2626; font-size: 32px; border-bottom: 2px solid #ccc; padding-bottom: 15px; margin-bottom: 5px; }
                                    .sub { font-size: 18px; font-weight: bold; color: #333; margin-bottom: 25px; }
                                    p { font-size: 15px; text-align: justify; margin-bottom: 15px; text-indent: 30px; }
                                    .source { margin-top: 40px; border-top: 1px solid #eee; padding-top: 15px; font-size: 12px; color: #777; display: flex; justify-content: space-between; font-family: sans-serif; }
                                    .close-btn { background: #111; color: white; border: none; padding: 10px 20px; font-size: 14px; cursor: pointer; margin-top: 20px; }
                                  </style>
                                </head>
                                <body>
                                  <div class="container">
                                    <h1>దాతృత్వం చాటిన నాగారం సెరినిటీ మోడల్ హైస్కూల్ విద్యార్థులు</h1>
                                    <div class="sub">• క్రిస్మస్ వేడుకల్లో భాగంగా అనాధలకు, వృద్ధులకు దుప్పట్ల పంపిణీ</div>
                                    <p><b>కీసర, 23 డిసెంబర్ (ఆదాబ్ హైదరాబాద్):</b> ప్రపంచ మానవాళికి సేవా తత్పరతను, శాంతిని బోధించిన యేసుక్రీస్తు జన్మదినమైన క్రిస్మస్ వేడుకలను నాగారం సెరినిటీ మోడల్ హైస్కూల్‌లో శనివారం ఘనంగా నిర్వహించారు. ఈ సందర్భంగా అనాధ బాలురకు, వృద్ధులకు పాఠశాల విద్యార్థులు సహాయాన్ని అందించారు. నిత్యావసర వస్తువులతో పాటు చలికి తట్టుకునేందుకు నూతన దుప్పట్లను కరుణ స్వచ్ఛంద సేవాసంస్థ, ఊర్ధ్వమాత అనాధ ఆశ్రమం, ఆర్‌ఎల్ నగర్‌లో కల ఎల్డర్స్ వృద్ధాశ్రమంలో అనాధ వృద్ధులకు పంపిణీ చేశారు. మంచి ఆలోచనతో ముందుకు వచ్చిన విద్యార్థులను, ఉపాధ్యాయులను కరెస్పాండెంట్ నోముల జంగిరెడ్డి గారు అభినందించారు.</p>
                                    <p>పాఠశాల విద్యార్థులు తమ వంతు సహాయంగా కమ్యూనిటీ సర్వీసు కింద సేకరించిన నిత్యావసర వస్తువులతో పాటు చలికాలంలో ఇబ్బంది పడే వృద్ధులకు, అనాధ ఆశ్రమంలో ఊర్ధ్వమాత వృద్ధాశ్రమంలో దుప్పట్లు మరియు రగ్గులను పంపిణీ చేసారని వారు ప్రతినిధులకు తెలిపారు. విద్యార్థులలో సేవాభావాన్ని పెంపొందించడానికి స్కూల్ ఎప్పుడూ ముందుంటుందని ఉపాధ్యాయులు ప్రశంసించారు.</p>
                                    <p>ఈ కార్యక్రమంలో పాఠశాల ముఖ్యకార్యదర్శి నోముల వసంత గారు, వివిధ పాఠశాల ఉపాధ్యాయులు, సెరినిటీ పాఠశాల ఉపాధ్యాయుల బృందం, విద్యార్థుల బృందం, చిన్నారులు పెద్ద ఎత్తున పాల్గొన్నారు.</p>
                                    <div class="source">
                                      <span><b>ఆదాబ్ హైదరాబాద్ దినపత్రిక (Aadab Hyderabad Daily)</b></span>
                                      <span>Aadab Hyderabad Main - 24 Dec 2023 - Page 6</span>
                                    </div>
                                    <center><button class="close-btn" onclick="window.close()">పత్రాన్ని మూసివేయి (Close)</button></center>
                                  </div>
                                </body>
                              </html>
                            `);
                            w.document.close();
                          }
                        }}
                        className="px-4 py-1.5 bg-[#1a365d] text-white hover:bg-[#2a4365] border border-transparent rounded-none text-[10px] font-mono tracking-wider font-bold uppercase transition cursor-pointer"
                      >
                        తెరవండి (Open Document)
                      </button>
                    </div>

                  </div>
                ) : lightboxItem.id === "media-4" ? (
                  <div className="bg-white text-slate-900 p-2 sm:p-4 font-serif relative">
                    {/* Newspaper masthead */}
                    <div className="border-b-4 border-double border-slate-800 pb-2 mb-4">
                      <div className="flex justify-between items-center text-[10px] sm:text-xs font-sans text-slate-600 font-semibold uppercase tracking-wider">
                        <span>నినాదం దినపత్రిక (Ninadam Daily)</span>
                        <span className="text-center">దసరా బతుకమ్మ ప్రత్యేక కథనం</span>
                        <span>28 Sep 2022</span>
                      </div>
                    </div>

                    {/* Green Main Heading */}
                    <h1 className="text-xl sm:text-3xl font-black text-[#15803d] leading-snug tracking-tight mb-3 text-center sm:text-left">
                      బతుకమ్మ పండగను ఆనందోత్సాహాలతో జరుపుకోవాలి
                    </h1>

                    {/* Red Bullets subheading */}
                    <div className="text-sm sm:text-md font-bold text-red-600 mb-4 flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-red-600 inline-block shrink-0" />
                      <span>బతుకమ్మ వేడుకల్లో పాల్గొన్న కలెక్టర్ హరీష్</span>
                    </div>

                    {/* Columns structure */}
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
                      
                      {/* Left Side: News column text */}
                      <div className="md:col-span-7 space-y-3 text-[12px] sm:text-[13px] leading-relaxed text-slate-800 text-justify">
                        <p>
                          <span className="font-bold text-black border-r border-slate-300 pr-1 mr-1">మేడ్చల్ జిల్లా ప్రతినిధి, సెప్టెంబర్ 27(నినాదం న్యూస్):</span> బతుకమ్మ పండగను అందరూ ఆనందోత్సాహాల మధ్య జరుపుకోవాలని, జిల్లా కలెక్టరేట్ ఆవరణలో బతుకమ్మ సంబరాలు ఎంతో ఘనంగా నిర్వహిస్తున్నామని జిల్లా కలెక్టర్ హరీష్ అన్నారు. మంగళవారం సాయంత్రం కలెక్టరేట్ ఆవరణలో బతుకమ్మ ఉత్సవాలను కలెక్టర్ సందర్శించారు. ఈ సందర్భంగా అక్కడ ఉన్న చిన్నారులు, విద్యార్థినులతో కలెక్టర్ హరీష్ ముచ్చటించారు. భవిష్యత్తులో విద్యార్థినులు, చిన్నారులు మంచి ఉన్నత శిఖరాలకు ఎదగాలని ఆకాంక్షించారు.
                        </p>
                        <p>
                          ఆడపడుచులు అందరూ ఆనందంగా ఎదురుచూసే దసరా శరన్నవరాత్రి వేడుకలలో భాగంగా కలెక్టరేట్ లో బతుకమ్మ ఆడడం చాలా ఆనందంగా ఉందని కలెక్టర్ అన్నారు.
                        </p>
                        <p>
                          ఈ మేరకు సంబరాలు విజయవంతంగా ముగిసాయి. విద్యాశాఖ పిలుపుమేరకు వివిధ పాఠశాలల నుంచి విద్యార్థినులు బతుకమ్మలతో కలెక్టరేట్ కు తరలివచ్చి కోలాటాలతో సందడి చేసారు.
                        </p>
                      </div>

                      {/* Right Side: Visual Image & Masthead Credit */}
                      <div className="md:col-span-5 flex flex-col justify-between self-stretch">
                        <div className="border border-slate-300 p-2 bg-[#fafbf8] shadow-inner mb-4">
                          <img 
                            src={lightboxItem.image} 
                            alt={lightboxItem.title} 
                            referrerPolicy="no-referrer"
                            className="w-full h-auto object-cover grayscale rounded-none filter hover:grayscale-0 transition duration-300"
                          />
                          <div className="text-[10px] sm:text-[11px] font-sans text-slate-700 italic text-center mt-2 leading-relaxed">
                            బతుకమ్మ పూల సంబరాలలో విద్యార్థినులు, ఉపాధ్యాయులతో కలిసి పాల్గొన్న జిల్లా కలెక్టర్, స్కూల్ కరస్పాండెంట్, ప్రిన్సిపాల్ ల సమూహం
                          </div>
                        </div>

                        {/* Masthead brand */}
                        <div className="border-t border-slate-300 pt-3 flex items-center justify-between mt-auto">
                          <div className="flex flex-col">
                            <span className="text-lg font-sans font-black tracking-tighter text-[#1e3a8a] italic uppercase">నినాదం</span>
                            <span className="text-[8px] font-sans text-[#1e3a8a] tracking-wider uppercase font-semibold">విశ్వసనీయ సమాచారం</span>
                          </div>
                          <div className="text-[10px] font-sans font-bold text-slate-650 bg-slate-100 px-2 py-1 border border-slate-200">
                            Ninadam Main - 28 Sep 2022 - Page 5
                          </div>
                        </div>
                      </div>

                    </div>

                    <div className="border-t border-slate-200 pt-3 mt-4 flex justify-end gap-2 text-xs font-sans">
                      <button 
                        onClick={() => setLightboxItem(null)}
                        className="px-4 py-1.5 border border-slate-300 text-slate-600 hover:bg-slate-50 transition rounded-none text-[10px] font-mono tracking-wider font-bold uppercase"
                      >
                        వెనుకకు (Close)
                      </button>
                      <button 
                        onClick={() => {
                          const w = window.open("", "_blank");
                          if (w) {
                            w.document.write(`
                              <html>
                                <head>
                                  <title>బతుకమ్మ దసరా సంబరాలు - సెరినిటీ పాఠశాల</title>
                                  <style>
                                    body { font-family: serif; background: #fafafa; padding: 40px; color: #333; line-height: 1.6; }
                                    .container { max-width: 800px; margin: auto; background: white; padding: 40px; border: 1px solid #ddd; box-shadow: 0 0 10px rgba(0,0,0,0.05); }
                                    h1 { color: #15803d; font-size: 32px; border-bottom: 2px solid #ccc; padding-bottom: 15px; margin-bottom: 5px; }
                                    .sub { font-size: 18px; font-weight: bold; color: #d01111; margin-bottom: 25px; }
                                    p { font-size: 15px; text-align: justify; margin-bottom: 15px; text-indent: 30px; }
                                    .source { margin-top: 40px; border-top: 1px solid #eee; padding-top: 15px; font-size: 12px; color: #777; display: flex; justify-content: space-between; font-family: sans-serif; }
                                    .close-btn { background: #111; color: white; border: none; padding: 10px 20px; font-size: 14px; cursor: pointer; margin-top: 20px; }
                                  </style>
                                </head>
                                <body>
                                  <div class="container">
                                    <h1>బతుకమ్మ పండగను ఆనందోత్సాహాలతో జరుపుకోవాలి</h1>
                                    <div class="sub">• బతుకమ్మ వేడుకల్లో పాల్గొన్న కలెక్టర్ హరీష్</div>
                                    <p><b>మేడ్చల్ జిల్లా ప్రతినిధి, సెప్టెంబర్ 27(నినాదం న్యూస్):</b> బతుకమ్మ పండగను అందరూ ఆనందోత్సాహాల మధ్య జరుపుకోవాలని, జిల్లా కలెక్టరేట్ ఆవరణలో బతుకమ్మ సంబరాలు ఎంతో ఘనంగా నిర్వహిస్తున్నామని జిల్లా కలెక్టర్ హరీష్ అన్నారు. మంగళవారం సాయంత్రం కలెక్టరేట్ ఆవరణలో బతుకమ్మ ఉత్సవాలను కలెక్టర్ సందర్శించారు. ఈ సందర్భంగా అక్కడ ఉన్న చిన్నారులు, విద్యార్థినులతో కలెక్టర్ హరీష్ ముచ్చటించారు. భవిష్యత్తులో విద్యార్థినులు, చిన్నారులు మంచి ఉన్నత శిఖరాలకు ఎదగాలని ఆకాంక్షించారు.</p>
                                    <p>విద్యార్థినులు, మహిళా ఉద్యోగులు, సిబ్బంది పండగను ఘనంగా జరుపుకోవడం ఎంతో ఆనందంగా ఉందని తెలిపారు. కలెక్టరేట్ ఆవరణలో ఏర్పాటు చేసిన బతుకమ్మలను కలెక్టర్ హరీష్ పరిశీలించారు. ప్రతి ఆడపడుచూ, చిన్నపెద్దా తేడాలు లేకుండా తెలంగాణ ప్రాంతంలో జరుపుకొనే పూల పండగ బతుకమ్మ అని అన్నారు.</p>
                                    <p>జిల్లా విద్యాశాఖ అధికారిణి విజయకుమారి మాట్లాడుతూ విద్యాశాఖ పిలుపుమేరకు వివిధ పాఠశాలల నుంచి తరలివచ్చిన విద్యార్థినులు, ఉపాధ్యాయులు, మరియు సిబ్బందికి హృదయపూర్వక కృతజ్ఞతలు తెలిపారు.</p>
                                    <div class="source">
                                      <span><b>నినాదం దినపత్రిక (Ninadam Daily)</b></span>
                                      <span>Ninadam Main - 28 Sep 2022 - Page 5</span>
                                    </div>
                                    <center><button class="close-btn" onclick="window.close()">పత్రాన్ని మూసివేయి (Close)</button></center>
                                  </div>
                                </body>
                              </html>
                            `);
                            w.document.close();
                          }
                        }}
                        className="px-4 py-1.5 bg-[#1a365d] text-white hover:bg-[#2a4365] border border-transparent rounded-none text-[10px] font-mono tracking-wider font-bold uppercase transition"
                      >
                        తెరవండి (Open Document)
                      </button>
                    </div>

                  </div>
                ) : lightboxItem.id === "media-6" ? (
                  <div className="bg-white text-slate-900 p-2 sm:p-4 font-serif relative">
                    {/* Newspaper masthead */}
                    <div className="border-b-4 border-double border-slate-800 pb-2 mb-4">
                      <div className="flex justify-between items-center text-[10px] sm:text-xs font-sans text-slate-600 font-semibold uppercase tracking-wider">
                        <span>మనం దినపత్రిక (Manam Daily)</span>
                        <span className="text-center">సాంస్కృతిక ముగింపు వేడుకలు</span>
                        <span>18 Sep 2022</span>
                      </div>
                    </div>

                    {/* Green Main Heading */}
                    <h1 className="text-xl sm:text-3xl font-black text-[#dc2626] leading-snug tracking-tight mb-3 text-center sm:text-left">
                      సాంస్కృతిక కార్యక్రమాల్లో సెరినిటీకి సాటిలేరు
                    </h1>

                    {/* Red Bullets subheading */}
                    <div className="text-sm sm:text-md font-bold text-red-650 mb-4 flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-red-650 inline-block shrink-0" />
                      <span>వేడుకల్లో సన్మాన పత్రాలను అందుకున్న విద్యార్థులు</span>
                    </div>

                    {/* Columns structure */}
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
                      
                      {/* Left Side: News columns text */}
                      <div className="md:col-span-7 space-y-3 text-[12px] sm:text-[13px] leading-relaxed text-slate-800 text-justify">
                        <p>
                          <span className="font-bold text-black border-r border-slate-300 pr-1 mr-1">కీసర, సెప్టెంబర్ 18, మనం న్యూస్:</span> మేడ్చల్ మల్కాజిగిరి జిల్లా కలెక్టరేట్ ఆవరణలో జరిగిన తెలంగాణ జాతీయ సమైక్యత వజ్రోత్సవ ముగింపు వేడుకల్లో జరిగిన సాంస్కృతిక కార్యక్రమాల్లో నాగారం సెరినిటీ పాఠశాల విద్యార్థుల నృత్యాలు ప్రేక్షకులను అలరించాయి. వారి నటన, కదలికలు మరియు సాంస్కృతిక ప్రదర్శనలు ప్రత్యేక ఆకర్షణగా నిలిచాయి.
                        </p>
                        <p>
                          అలాగే కవులను, కళాకారులను, స్వతంత్ర సమరయోధులను సన్మానించిన వేళలలో నాగారం సెరినిటీ మోడల్ ఉన్నత పాఠశాల విద్యార్థులకు వారి ప్రతిభను మెచ్చుకొని వారికి అవార్డులను, సన్మాన పత్రాలను అందచేసిన మంత్రి మల్లారెడ్డి.
                        </p>
                        <p>
                          ఆ రకంగా ప్రభుత్వ నిబంధనలకు అనుగుణంగా పాఠశాల విద్యార్థులందరిలోని సృజనాత్మకతను వెలికితీసేందుకు ఉపాధ్యాయులు కృషి చేస్తున్నారు.
                        </p>
                      </div>

                      {/* Right Side: Visual Image & Masthead Credit */}
                      <div className="md:col-span-5 flex flex-col justify-between self-stretch">
                        <div className="border border-slate-300 p-2 bg-[#fafbf8] shadow-inner mb-4">
                          <img 
                            src={lightboxItem.image} 
                            alt={lightboxItem.title} 
                            referrerPolicy="no-referrer"
                            className="w-full h-auto object-cover grayscale rounded-none filter hover:grayscale-0 transition duration-300"
                          />
                          <div className="text-[10px] sm:text-[11px] font-sans text-slate-700 italic text-center mt-2 leading-relaxed">
                            సాంస్కృతిక ప్రదర్శనతో అలరించిన సెరినిటీ పాఠశాల విద్యార్థినుల నృత్యాలు, వేడుకల్లో సన్మాన పత్రాలను అందుకుంటున్న దృశ్యం
                          </div>
                        </div>

                        {/* Masthead brand */}
                        <div className="border-t border-slate-300 pt-3 flex items-center justify-between mt-auto">
                          <div className="flex flex-col">
                            <span className="text-base font-sans font-black tracking-tighter text-[#dc2626] italic uppercase leading-none">మనం పబ్లికేషన్స్</span>
                            <span className="text-[8px] font-sans text-slate-500 tracking-wider uppercase font-semibold">సత్యమేవ జయతే</span>
                          </div>
                          <div className="text-[9px] font-sans font-bold text-slate-650 bg-slate-100 px-2 py-0.5 border border-slate-200">
                            Manam Main - 18 Sep 2022 - Page 4
                          </div>
                        </div>
                      </div>

                    </div>

                    <div className="border-t border-slate-200 pt-3 mt-4 flex justify-end gap-2 text-xs font-sans">
                      <button 
                        onClick={() => setLightboxItem(null)}
                        className="px-4 py-1.5 border border-slate-300 text-slate-600 hover:bg-slate-50 transition rounded-none text-[10px] font-mono tracking-wider font-bold uppercase"
                      >
                        వెనుకకు (Close)
                      </button>
                      <button 
                        onClick={() => {
                          const w = window.open("", "_blank");
                          if (w) {
                            w.document.write(`
                              <html>
                                <head>
                                  <title>సాంస్కృతిక కార్యక్రమాల్లో సెరినిటీకి సాటిలేరు</title>
                                  <style>
                                    body { font-family: serif; background: #fafafa; padding: 40px; color: #333; line-height: 1.6; }
                                    .container { max-width: 800px; margin: auto; background: white; padding: 40px; border: 1px solid #ddd; box-shadow: 0 0 10px rgba(0,0,0,0.05); }
                                    h1 { color: #d01111; font-size: 32px; border-bottom: 2px solid #ccc; padding-bottom: 15px; margin-bottom: 5px; }
                                    .sub { font-size: 18px; font-weight: bold; color: #333; margin-bottom: 25px; }
                                    p { font-size: 15px; text-align: justify; margin-bottom: 15px; text-indent: 30px; }
                                    .source { margin-top: 40px; border-top: 1px solid #eee; padding-top: 15px; font-size: 12px; color: #777; display: flex; justify-content: space-between; font-family: sans-serif; }
                                    .close-btn { background: #111; color: white; border: none; padding: 10px 20px; font-size: 14px; cursor: pointer; margin-top: 20px; }
                                  </style>
                                </head>
                                <body>
                                  <div class="container">
                                    <h1>సాంస్కృతిక కార్యక్రమాల్లో సెరినిటీకి సాటిలేరు</h1>
                                    <div class="sub">• వేడుకల్లో సన్మాన పత్రాలను అందుకున్న విద్యార్థులు</div>
                                    <p><b>కీసర, సెప్టెంబర్ 18, మనం న్యూస్:</b> మేడ్చల్ మల్కాజిగిరి జిల్లా కలెక్టరేట్ ఆవరణలో జరిగిన తెలంగాణ జాతీయ సమైక్యత వజ్రోత్సవ ముగింపు వేడుకల్లో జరిగిన సాంస్కృతిక కార్యక్రమాల్లో నాగారం సెరినిటీ పాఠశాల విద్యార్థుల నృత్యాలు ప్రేక్షకులను అలరించాయి. వారి నటన, కదలికలు మరియు సాంస్కృతిక ప్రదర్శనలు ప్రత్యేక ఆకర్షణగా నిలిచాయి.</p>
                                    <p>అలాగే కవులను, కళాకారులను, స్వతంత్ర సమరయోధులను సన్మానించిన వేళలలో నాగారం సెరినిటీ మోడల్ ఉన్నత పాఠశాల విద్యార్థులకు వారి ప్రతిభను మెచ్చుకొని వారికి అవార్డులను, సన్మాన పత్రాలను అందచేసిన మంత్రి మల్లారెడ్డి.</p>
                                    <p>ఆ రకంగా ప్రభుత్వ నిబంధనలకు అనుగుణంగా పాఠశాల విద్యార్థులందరిలోని సృజనాత్మకతను వెలికితీసేందుకు ఉపాధ్యాయులు కృషి చేస్తున్నారు.</p>
                                    <div class="source">
                                      <span><b>మనం దినపత్రిక (Manam Daily)</b></span>
                                      <span>Manam Daily - 18 Sep 2022 - Page 4</span>
                                    </div>
                                    <center><button class="close-btn" onclick="window.close()">పత్రాన్ని మూసివేయి (Close)</button></center>
                                  </div>
                                </body>
                              </html>
                            `);
                            w.document.close();
                          }
                        }}
                        className="px-4 py-1.5 bg-[#1a365d] text-white hover:bg-[#2a4365] border border-transparent rounded-none text-[10px] font-mono tracking-wider font-bold uppercase transition"
                      >
                        తెరవండి (Open Document)
                      </button>
                    </div>
                  </div>
                ) : lightboxItem.id === "media-7" ? (
                  <div className="bg-white text-slate-900 p-2 sm:p-4 font-serif relative">
                    {/* Newspaper masthead */}
                    <div className="border-b-4 border-double border-slate-800 pb-2 mb-4">
                      <div className="flex flex-col sm:flex-row justify-between items-center gap-2 text-[10px] sm:text-xs font-sans text-slate-600 font-semibold uppercase tracking-wider">
                        <div className="flex items-center gap-1.5">
                          {/* Nava Telangana Telugu Daily Style */}
                          <span className="text-xl sm:text-2xl font-black text-rose-700 font-serif">నవతెలంగాణ</span>
                          <span className="text-[10px] text-slate-500 font-bold border-l border-slate-300 pl-1.5">మేడ్చల్ కలెక్టరేట్</span>
                        </div>
                        <div className="text-center sm:text-right">
                          <div className="font-sans">నవతెలంగాణ దినపత్రిక (Nava Telangana Daily)</div>
                          <div className="font-sans">ఆదివారం, 24 జూలై 2022</div>
                        </div>
                      </div>
                    </div>

                    {/* Blue/Navy Main Heading */}
                    <h1 className="text-xl sm:text-2.5xl font-black text-[#1e3a8a] leading-snug tracking-tight mb-3 text-center sm:text-left">
                      సిరినిటీ పాఠశాలలో బోనాల వేడుకలు
                    </h1>

                    {/* Bullets subheading */}
                    <div className="text-sm font-bold text-rose-700 mb-4 flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-rose-700 inline-block shrink-0 animate-pulse" />
                      <span>నవతెలంగాణ - మేడ్చల్ కలెక్టరేట్ కథనం</span>
                    </div>

                    {/* Columns structure */}
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
                      
                      {/* Left Side: News columns text */}
                      <div className="md:col-span-7 space-y-3 text-[12.5px] sm:text-[14px] leading-relaxed text-slate-800 text-justify font-sans">
                        <p className="indent-6">
                          <span className="font-bold text-black border-r border-slate-300 pr-1 mr-1">నాగారం (మేడ్చల్ జిల్లా):</span> నాగారం సెరినిటీ పాఠశాలలో బోనాల పండుగ వేషధారణలో విద్యార్థులు ప్రదర్శించిన నృత్యాలు పలువురిని ఎంతగానో ఆకట్టుకున్నాయి. బోనాలను ఎత్తుకుని, పోతురాజుల వేషధారణలతో చేసిన నృత్యాలు రోడ్లపై సందడి చేసాయి మరియు పలువురిని అలరించాయి.
                        </p>
                        <p className="indent-6">
                          ఈ కార్యక్రమంలో పాల్గొన్న పాఠశాల కరెస్పాండెంట్ నోముల జంగిరెడ్డి గారు మాట్లాడుతూ మన సాంస్కృతిక వారసత్వ పండుగలను పిల్లలలో గుర్తుచేయడానికి ఇటువంటి సంబరాలు ఎంతో అవసరమన్నారు. తెలంగాణ లోగిళ్లలో బోనాల పూల పండుగ ఎంత పవిత్రమైనదో తెలియజేసారు.
                        </p>
                        <p className="indent-6">
                          ఈ కార్యక్రమంలో పాఠశాల కరెస్పాండెంట్ నోముల జంగిరెడ్డి, ముఖ్య కార్యదర్శి నోముల వసంత, ఉపాధ్యాయులు మరియు చిన్నారులు పెద్ద ఎత్తున పాల్గొన్నారు.
                        </p>
                      </div>

                      {/* Right Side: Visual Image & Masthead Credit */}
                      <div className="md:col-span-5 flex flex-col justify-between self-stretch">
                        <div className="border border-slate-300 p-2 bg-[#fafbf8] shadow-inner mb-4">
                          <img 
                            src="https://i0.wp.com/serenitymodelschools.com/wp-content/uploads/2025/12/bonalu2025-1.jpg?fit=640%2C400&ssl=1" 
                            alt="Bonalu Celebrations" 
                            referrerPolicy="no-referrer"
                            className="w-full h-auto object-cover rounded-none"
                          />
                          <div className="text-[10px] sm:text-[11px] font-sans text-slate-700 italic text-center mt-2 leading-relaxed">
                            సాంస్కృతిక బోనాల పొల సంబరాలలో బతుకమ్మలతో నృత్యం చేస్తున్న నాగారం సెరినిటీ విద్యార్థులు
                          </div>
                        </div>

                        {/* Masthead brand */}
                        <div className="border-t border-slate-300 pt-3 flex items-center justify-between mt-auto">
                          <div className="flex flex-col">
                            <span className="text-base font-sans font-black tracking-tighter text-rose-700 italic uppercase leading-none">నవతెలంగాణ</span>
                            <span className="text-[8px] font-sans text-slate-500 tracking-wider uppercase font-semibold">మేడ్చల్ ప్రచురణ</span>
                          </div>
                          <div className="text-[9px] font-sans font-bold text-slate-600 bg-slate-100 px-2 py-0.5 border border-slate-200">
                            24 July 2022
                          </div>
                        </div>
                      </div>

                    </div>

                    <div className="border-t border-slate-200 pt-3 mt-4 flex justify-end gap-2 text-xs font-sans">
                      <button 
                        onClick={() => setLightboxItem(null)}
                        className="px-4 py-1.5 border border-slate-300 text-slate-600 hover:bg-slate-50 transition rounded-none text-[10px] font-mono tracking-wider font-bold uppercase cursor-pointer"
                      >
                        వెనుకకు (Close)
                      </button>
                      <button 
                        onClick={() => {
                          const w = window.open("", "_blank");
                          if (w) {
                            w.document.write(`
                              <html>
                                <head>
                                  <title>సిరినిటీ పాఠశాలలో బోనాల వేడుకలు - నవతెలంగాణ</title>
                                  <style>
                                    body { font-family: serif; background: #fafafa; padding: 40px; color: #333; line-height: 1.6; }
                                    .container { max-width: 800px; margin: auto; background: white; padding: 40px; border: 1px solid #ddd; box-shadow: 0 0 10px rgba(0,0,0,0.05); }
                                    h1 { color: #1e3a8a; font-size: 32px; border-bottom: 2px solid #ccc; padding-bottom: 15px; margin-bottom: 5px; }
                                    .sub { font-size: 18px; font-weight: bold; color: #b91c1c; margin-bottom: 25px; }
                                    p { font-size: 15px; text-align: justify; margin-bottom: 15px; text-indent: 30px; }
                                    .source { margin-top: 40px; border-top: 1px solid #eee; padding-top: 15px; font-size: 12px; color: #777; display: flex; justify-content: space-between; font-family: sans-serif; }
                                    .close-btn { background: #111; color: white; border: none; padding: 10px 20px; font-size: 14px; cursor: pointer; margin-top: 20px; }
                                  </style>
                                </head>
                                <body>
                                  <div class="container">
                                    <h1>సిరినిటీ పాఠశాలలో బోనాల వేడుకలు</h1>
                                    <div class="sub">• నవతెలంగాణ - మేడ్చల్ కలెక్టరేట్ ప్రత్యేక వార్త</div>
                                    <p><b>నాగారం (మేడ్చల్ జిల్లా), జూలై 24:</b> నాగారం సెరినిటీ పాఠశాలలో బోనాల పండుగ వేషధారణలో విద్యార్థులు ప్రదర్శించిన నృత్యాలు పలువురిని ఎంతగానో ఆకట్టుకున్నాయి. బోనాలను ఎత్తుకుని, పోతురాజుల వేషధారణలతో చేసిన నృత్యాలు రోడ్లపై సందడి చేసాయి మరియు పలువురిని అలరించాయి.</p>
                                    <p>ఈ కార్యక్రమంలో పాల్గొన్న పాఠశాల కరెస్పాండెంట్ నోముల జంగిరెడ్డి గారు మాట్లాడుతూ మన సాంస్కృతిక వారసత్వ పండుగలను పిల్లలలో గుర్తుచేయడానికి ఇటువంటి సంబరాలు ఎంతో అవసరమన్నారు. తెలంగాణ లోగిళ్లలో బోనాల పూల పండుగ ఎంత పవిత్రమైనదో తెలియజేసారు.</p>
                                    <p>ఈ కార్యక్రమంలో పాఠశాల కరెస్పాండెంట్ నోముల జంగిరెడ్డి, ముఖ్య కార్యదర్శి నోముల వసంత, ఉపాధ్యాయ బృందం మరియు చిన్నారుల తల్లిదండ్రులు పాల్గొని విద్యార్థుల ప్రతిభను శ్లాఘించారు.</p>
                                    <div class="source">
                                      <span><b>నవతెలంగాణ దినపత్రిక (Nava Telangana)</b></span>
                                      <span>ఆదివారం, 24 జూలై 2022 - పేజీ 6</span>
                                    </div>
                                    <center><button class="close-btn" onclick="window.close()">పత్రాన్ని మూసివేయి (Close)</button></center>
                                  </div>
                                </body>
                              </html>
                            `);
                            w.document.close();
                          }
                        }}
                        className="px-4 py-1.5 bg-[#1a365d] text-white hover:bg-[#2a4365] border border-transparent rounded-none text-[10px] font-mono tracking-wider font-bold uppercase transition"
                      >
                        తెరవండి (Open Document)
                      </button>
                    </div>
                  </div>
                ) : (
                  <>
                    <div className={`h-44 rounded-none bg-gradient-to-br ${lightboxItem.color} flex flex-col justify-between p-6 mb-4 relative overflow-hidden text-white group`}>
                      {/* High quality photo in expanded lightbox */}
                      <img 
                        src={lightboxItem.image} 
                        alt={lightboxItem.title} 
                        referrerPolicy="no-referrer"
                        className="absolute inset-0 w-full h-full object-cover z-0 mix-blend-overlay opacity-25 pointer-events-none"
                      />
                      
                      <div className="absolute top-4 left-4 z-10">
                        <span className="text-[8px] bg-black/45 backdrop-blur-sm py-1 px-2 rounded-none uppercase font-mono font-bold tracking-widest text-heritage-gold border border-heritage-gold/20">
                          {lightboxItem.category === "campus" ? "INFRASTRUCTURE" : lightboxItem.category}
                        </span>
                      </div>
                      {lightboxItem.type === "video" && (
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-11 h-11 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border-2 border-white/60 animate-pulse z-10">
                          <Play className="w-5 h-5 fill-white text-white ml-0.5" />
                        </div>
                      )}
                      <div className="mt-auto z-10">
                        <h3 className="text-lg font-serif font-light text-white leading-tight">
                          {lightboxItem.title}
                        </h3>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <p className={`text-xs sm:text-sm leading-relaxed ${isDarkMode ? "text-heritage-cream/80" : "text-[#1c1917]"}`}>
                        {lightboxItem.description}
                      </p>
                      
                      {lightboxItem.achievementMetric && (
                        <div className="p-3 bg-heritage-emerald/10 border border-heritage-gold/25 rounded-none flex items-center gap-2 text-xs">
                          <Award className="w-4 h-4 text-heritage-gold shrink-0" />
                          <span className="text-heritage-gold font-bold font-mono tracking-wider uppercase text-[9px]">Verified Honor: {lightboxItem.achievementMetric}</span>
                        </div>
                      )}

                      <div className="pt-2 flex justify-end gap-3 text-xs font-bold font-mono tracking-widest uppercase mb-4">
                        <button 
                          onClick={() => setLightboxItem(null)}
                          className={`px-4 py-2 border rounded-none text-[10px] transition ${
                            isDarkMode ? "border-heritage-gold/20 text-heritage-cream hover:bg-white/5" : "border-[#d97706]/30 text-[#122e20] hover:bg-black/5"
                          }`}
                        >
                          Close
                        </button>
                        <button 
                          onClick={() => {
                            alert(`Action initiated: downloading associated ${lightboxItem.id}_asset.zip directly.`);
                          }}
                          className="px-4 py-2 bg-[#d97706] text-[#122e20] hover:bg-[#b45309] border border-[#d97706] rounded-none text-[10px]"
                        >
                          Retrieve Asset
                        </button>
                      </div>
                    </div>
                  </>
                )}
              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
