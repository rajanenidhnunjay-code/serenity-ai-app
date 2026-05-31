import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Sparkles, 
  Map, 
  MapPin, 
  Info, 
  Play, 
  Pause, 
  RotateCcw, 
  Maximize2, 
  ArrowLeft, 
  ArrowRight, 
  MessageSquare, 
  Clock, 
  Award,
  BookOpen
} from "lucide-react";

// Types
import { SchoolSection } from "../types";

// Deep definitions for Hotspots
export interface Hotspot {
  id: string;
  name: string;
  x: number; // Percentage horizontal offset (e.g. 15 for 15% from left of wide image)
  y: number; // Percentage vertical offset (e.g. 50 for 50% from top)
  title: string;
  description: string;
  category: "technology" | "facility" | "curriculum" | "academic";
}

export interface CampusArea {
  id: string;
  name: string;
  slug: string;
  title: string;
  description: string;
  imageUrl: string;
  narratorText: string;
  minimapCoordinates: { x: number; y: number };
  statistics: { label: string; value: string }[];
  hotspots: Hotspot[];
}

// Global Serenity School Campus Areas data using premium, highly reliable aesthetic stock images
const CAMPUSTOUR_AREAS: CampusArea[] = [
  {
    id: "area-netaji-campus",
    name: "Netaji Campus",
    slug: "netaji-campus",
    title: "Premier SSC Education Haven",
    description: "State-of-the-art facilities and workspaces aligned with high-performance SSC curricula.",
    imageUrl: "https://lh3.googleusercontent.com/gpms-cs-s/ABJJf50Z8DgNODt6csDWuPX5d-803l16cInqQBZo-mIQEuQTeRxvKuv6lUCj3gX4HkeMNszjmg-wamlXUVAQBtGdUopymu136xSuycS4Qp8zM8Hfa75JlCVwXoz3EITYjg-b1zI9GSrwQw=w1200",
    narratorText: "Welcome to the Netaji Campus. Built with sophisticated resources and modern educational frameworks, this structure guides our senior scholars toward top analytical ranks in Telangana state metrics.",
    minimapCoordinates: { x: 15, y: 35 },
    statistics: [
      { label: "Syllabus Path", value: "State SSC Frameworks" },
      { label: "Faculties", value: "Specialized Core Heads" },
      { label: "Mentoring", value: "Individual GPA Targets" }
    ],
    hotspots: [
      {
        id: "netaji-hot1",
        name: "Interactive Lecture Podium",
        x: 35,
        y: 48,
        title: "Smart Lecture Desk",
        description: "Equipped with instant digital syllabus indexes and dynamic conceptual slideshow projection utilities.",
        category: "technology"
      },
      {
        id: "netaji-hot2",
        name: "Mock Evaluation Board",
        x: 75,
        y: 52,
        title: "Pinnacle Mock Exams Wall",
        description: "A centralized bulletin where scholars analyze standard marks charts, practice questions, and peer progress analytics.",
        category: "academic"
      }
    ]
  },
  {
    id: "area-vivekananda-campus",
    name: "Vivekananda Campus",
    slug: "vivekananda-campus",
    title: "Inspiring Self-Discipline & Growth",
    description: "Nurturing strong moral values and systematic student study schedules.",
    imageUrl: "https://lh3.googleusercontent.com/gpms-cs-s/ABJJf50Yis4fqrMzOFwIIn5ayCLLypIDFetKRRTjZtubdFOGhjayIpcDoV9JwNF3OQEIR6lVyfBIZiJL7p7FKrfh_3GoosTCibSs18kq2XURNodJp8Y4alUuLCLfjaKgUTshHUVdU4o3=w1200",
    narratorText: "This is the Vivekananda Campus, where rich traditional human values blend effortlessly with deep-rooted SSC scholastic disciplines to mold self-sufficient young scholars.",
    minimapCoordinates: { x: 80, y: 35 },
    statistics: [
      { label: "Values Focus", value: "Self-Discipline & Ethics" },
      { label: "Pass Record", value: "100% Division Success" },
      { label: "Co-curriculars", value: "Youth Character Building" }
    ],
    hotspots: [
      {
        id: "vivek-hot1",
        name: "Character Development Deck",
        x: 50,
        y: 45,
        title: "Value-Based Guidance Hub",
        description: "Specialized reading stands and visual resources celebrating notable patriotic leaders and national values.",
        category: "academic"
      }
    ]
  },
  {
    id: "area-girls-campus",
    name: "Girls Campus",
    slug: "girls-campus",
    title: "Empowering Future Women Leaders",
    description: "Dedicated campus sections providing pristine security and outstanding co-curricular growth.",
    imageUrl: "https://lh3.googleusercontent.com/gpms-cs-s/ABJJf52LJxYH5aKq2OPBWM9-gDwBy3KFeGGRDmyqEcSUQ7XkaLEVrpBJ0xXnrx-vH222QGC4Sl8DUADhaN7W6_y1DjQDm-h12H1mOcutvlmtaGJXxlK0sFH35ZC44HMacWHkSoNurHpU=w1200",
    narratorText: "We welcome you to the dedicated Girls Campus at Serenity High. Our spaces cultivate confidence, secure development, and competitive leadership roles in advanced scientific sciences.",
    minimapCoordinates: { x: 50, y: 15 },
    statistics: [
      { label: "Security Code", value: "24/7 Guarded Entryways" },
      { label: "Ambition Goals", value: "Elite Professional Placement" },
      { label: "Self-Defense", value: "Strategic Core Conditioning" }
    ],
    hotspots: [
      {
        id: "girls-hot1",
        name: "Girls Speech & Panel Circle",
        x: 40,
        y: 50,
        title: "Executive Expression Panel",
        description: "A secure circle hosting public speaking workshops, student initiatives, and speech contests.",
        category: "academic"
      }
    ]
  },
  {
    id: "area-principal-admin-corridor",
    name: "Principal and Administrative Office Corridor",
    slug: "principal-admin-corridor",
    title: "Administrative Nerve Center Corridor",
    description: "Connecting our central executive cabins with immaculate corporate aesthetics.",
    imageUrl: "https://lh3.googleusercontent.com/gpms-cs-s/ABJJf51wNyMZQiCHD3ReL7H-YGnWGagYbYFuOZMTccJt6hV9-fseL2NoPT6RQRAmnzdPWV03KrBPIfmeO1wLv5t63m5Uamfkhe70HYXcYTOG0M0OTBPIVyAxfzDfy92YMaqRFGkKJJtf=w1200",
    narratorText: "This pristine pathway is the Principal and Administrative Office Corridor, coordinating core communications across all campus boards, administrative partners, and parent councils.",
    minimapCoordinates: { x: 30, y: 45 },
    statistics: [
      { label: "Daily Processing", value: "100+ Parents Accommodated" },
      { label: "Response Rate", value: "Same-Day Issue Resolution" }
    ],
    hotspots: [
      {
        id: "corr-hot1",
        name: "Official Board Bulletins",
        x: 50,
        y: 42,
        title: "State Board Official Bulletins",
        description: "Real-time directives from the Secondary Education Commissioner displayed elegantly.",
        category: "curriculum"
      }
    ]
  },
  {
    id: "area-principals-cabin",
    name: "Principal's Cabin",
    slug: "principals-cabin",
    title: "Pinnacle of Academic Guidance",
    description: "Directing high educational milestones, teaching frameworks, and teacher auditing programs.",
    imageUrl: "https://lh3.googleusercontent.com/gpms-cs-s/ABJJf50bGZLl89foXXMZytKgp2NtuUEnjj4dLKTikR83fO7NZ_3yOA8aQGclvLeYTva_9dQCAzGcBR3HoTzf9dSRfIrobJyxoeDFCAwTMDIDR5BuzAlCHHHCDTkke6ZVyUechDRZXyII=w1200",
    narratorText: "The Principal's Cabin acts as our operational blueprint core. From here, individual student metrics are analyzed, and academic syllabus calendars are formatted to match top excellence percentiles.",
    minimapCoordinates: { x: 45, y: 45 },
    statistics: [
      { label: "Quality Checks", value: "Fortnightly Class Audits" },
      { label: "Support Plans", value: "Custom Remedial Systems" }
    ],
    hotspots: [
      {
        id: "principal-hot1",
        name: "Syllabus Matrix Board",
        x: 50,
        y: 40,
        title: "Lesson Progress Matrix Board",
        description: "Ensures teacher timetables and student analytical progress synchronize without backlog.",
        category: "curriculum"
      }
    ]
  },
  {
    id: "area-general-secretary-cabin",
    name: "General Secretary Cabin",
    slug: "general-secretary-cabin",
    title: "Strategic Directorial Center",
    description: "The primary space guiding institutional developments, campus expansions, and resources.",
    imageUrl: "https://lh3.googleusercontent.com/gpms-cs-s/ABJJf51RkwX-wD0ffOcWWmuOfu7lbrMnzEdeQ3ly4chYyL2u4cHAv5R_iQnGgVckoWL4TAIZgEpcFqMETm29TrAEMgc7iNr7gGm8YfGxkwpU21Nv_MK3EC_ibn2sNuw0ePsXwDfZ9zvF=w1200",
    narratorText: "Welcome to the General Secretary Cabin, representing the core framework of Serenity Model High School's future resource planning, laboratory expansions, and external tech collaborations.",
    minimapCoordinates: { x: 60, y: 45 },
    statistics: [
      { label: "Strategic Plans", value: "5-Year Tech Integrations" },
      { label: "Alliances", value: "Elite National Education Links" }
    ],
    hotspots: [
      {
        id: "sec-hot1",
        name: "Infrastructure Expansion Blueprint",
        x: 60,
        y: 55,
        title: "Digital Infrastructure Blueprint",
        description: "Refining details for advanced network integrations and additional smart-responsive boards.",
        category: "technology"
      }
    ]
  },
  {
    id: "area-netaji-campus-reception",
    name: "Netaji Campus Reception",
    slug: "netaji-campus-reception",
    title: "A Warm, Dignified Welcome",
    description: "Our front desk dedicated to immediate parental counseling and quick admissions.",
    imageUrl: "https://lh3.googleusercontent.com/gpms-cs-s/ABJJf521jSwBP5WxdpydNUESq-nG0f124Y0Mhnb0F5mUE8Hl-XkuDq1YxIgIovlNXU-dsfudltC9f0dB7b7NhKrO1__yrgTBaqRjz88nK8xq3WHIQ2fqjYSWvkdHX-1T-M5dEKFu0tPe8w=w1200",
    narratorText: "The Netaji Campus Reception ensures that parent queries, visitor registrations, and administrative fee submittals are executed with the utmost transparency and respect.",
    minimapCoordinates: { x: 15, y: 55 },
    statistics: [
      { label: "Avg Wait Duration", value: "Under 5 Minutes" },
      { label: "Service Score", value: "Grade-A Administrative Care" }
    ],
    hotspots: [
      {
        id: "reception-hot1",
        name: "Admissions Inquiry Ledger",
        x: 45,
        y: 50,
        title: "Digital Admissions Inquiry Ledger",
        description: "Allows parents to instantly view current seat metrics and fill diagnostic test applications.",
        category: "facility"
      }
    ]
  },
  {
    id: "area-girls-campus-ground",
    name: "Girls Campus Ground",
    slug: "girls-campus-ground",
    title: "Pristine Outdoor Recreation Ground",
    description: "A secure and highly spacious playground encouraging athletic focus and physical stamina.",
    imageUrl: "https://lh3.googleusercontent.com/gpms-cs-s/ABJJf5023AbVPogcCiFRn5D8OG4whBbc80FT4Xx7Hs4a1_GYGwjUcIaDMhC_uWTXk6SdabcIDQdShPVBzuDLMaSghqQDEB2rjBJb5qwA7aqhjXdUJ6ik3Lhta--GLr-hLZZUdF3QBnXT=w1200",
    narratorText: "The Girls Campus Ground offers a broad, refreshing space for student physical education, volleyball, gymnastics, and energetic morning track exercises.",
    minimapCoordinates: { x: 50, y: 85 },
    statistics: [
      { label: "Recreation Track", value: "200m Shock-Absorb Lane" },
      { label: "Coaching Paths", value: "Certified Sports Instructors" }
    ],
    hotspots: [
      {
        id: "girlsground-hot1",
        name: "Recreational Volleyball Courts",
        x: 55,
        y: 45,
        title: "Precision Volleyball Courts",
        description: "Premium court surfaces built specifically to help develop quick physical agility and team synergy.",
        category: "facility"
      }
    ]
  },
  {
    id: "area-school-stationery",
    name: "School Stationery",
    slug: "school-stationery",
    title: "Curricular Material Depot",
    description: "Equipped with official text materials, uniforms, and student geometric toolsets.",
    imageUrl: "https://lh3.googleusercontent.com/gpms-cs-s/ABJJf538O0Siw-kGT1WSI_V5kUD9rGhO73POrQjM9UBjHW9cBtV6qx_weabpXTefMB97RUHmf0ExUchZDRupBfSn7JM4csQmQW2LVYQQN_yFINSFNjMglP2SHvrwGisGaxYOMt_A-gco=w1200",
    narratorText: "Our on-campus School Stationery is a convenient supply repository where scholars procure standard syllabus workbooks, lab reports, and certified uniforms.",
    minimapCoordinates: { x: 35, y: 65 },
    statistics: [
      { label: "Uniform Fits", value: "All Grades Accommodated" },
      { label: "Resource Source", value: "100% Authorized SSC Media" }
    ],
    hotspots: [
      {
        id: "stationery-hot1",
        name: "Syllabus Textbook Counter",
        x: 50,
        y: 50,
        title: "State Board Approved Compendiums",
        description: "Official guides and analytical materials covering rigorous mathematics, science, and multi-lingual workbooks.",
        category: "curriculum"
      }
    ]
  },
  {
    id: "area-admin-officer-cabin",
    name: "Administrative Officer's Cabin",
    slug: "admin-officer-cabin",
    title: "Financial & Operational Management",
    description: "Overseeing student bus routing lists, tuition configurations, and record files.",
    imageUrl: "https://lh3.googleusercontent.com/gpms-cs-s/ABJJf53uW0etHkZCNlh-aFZE35dxUQXNMuhi1u7VMHVoYWGOb-rCylRuIKibqEzPbKXOfCtcQS2O_mCwcO1mTMPy-X9lI76F_l-P2QwSjVUpphUvLSYD_3zi56pEzg4h6_f3yNmj4FLx=w1200",
    narratorText: "The Administrative Officer's Cabin manages high-speed logistics and tracks student transportation routing grids across the Medchal-secunderabad district.",
    minimapCoordinates: { x: 75, y: 55 },
    statistics: [
      { label: "Transport Reach", value: "All Major Local Areas Covered" },
      { label: "Registrars Checked", value: "100% Document Verification" }
    ],
    hotspots: [
      {
        id: "admin-hot1",
        name: "School Transit Console",
        x: 40,
        y: 45,
        title: "Transit Dispatch Terminal",
        description: "Monitors and logs real-time vehicle dispatch patterns and SMS parent-alert systems.",
        category: "technology"
      }
    ]
  },
  {
    id: "area-vivekananda-campus-classrooms",
    name: "Vivekananda Campus Classrooms",
    slug: "vivekananda-campus-classrooms",
    title: "Rigorous Academic Classrooms",
    description: "Equipped with state-of-the-art interactive teaching systems and spinal-support furniture.",
    imageUrl: "https://lh3.googleusercontent.com/gpms-cs-s/ABJJf51YJKl77Vzs39knzxhT5GCTKIi0FiA6NBBVn3BvI5LtMUcKatIsjSpgr2M_93YDY4s9oYwTYFZ-4VCgWbFeNCXqpAoOcziVzx4QcLX7-0McQe3n1qNIu47TI7LWLEwLlAkjat27bw=w1200",
    narratorText: "Inside the Vivekananda Campus Classrooms, senior teachers present complex subjects clearly, breaking down advanced calculations and scientific principles systematically.",
    minimapCoordinates: { x: 80, y: 65 },
    statistics: [
      { label: "Student Limit", value: "Max 30 Scholars Per Room" },
      { label: "Concept Mapping", value: "Smart Board Guided Lessons" }
    ],
    hotspots: [
      {
        id: "vivek-class-hot1",
        name: "Interactive Smart Board Display",
        x: 35,
        y: 45,
        title: "Full-Scale Interactive Smart Board",
        description: "Enables interactive lesson plans, mathematical functions modeling, and high-contrast educational media.",
        category: "technology"
      }
    ]
  },
  {
    id: "area-girls-campus-corridor",
    name: "Girls Campus Corridor",
    slug: "girls-campus-corridor",
    title: "Pristine Hallway Connection",
    description: "A wide, bright, fully ventilated corridor encouraging clean transitions.",
    imageUrl: "https://lh3.googleusercontent.com/gpms-cs-s/ABJJf50W7mttywxvQkQFpLLjyRq6-i-yJDY7l4Oh1UjxdAJKRQPHxMApRJ4Lj4Nji4zbOgniE_TQ8qwm28vlSDFxobGYu2n-J8f4Ua6dc9wzvPT49sn7W2LOYSjav_UgseY9tLEj_Dvu=w1200",
    narratorText: "The clean Girls Campus Corridor links standard research labs, senior classrooms, and counseling centers under constant guard surveillance for true scholar safety.",
    minimapCoordinates: { x: 50, y: 30 },
    statistics: [
      { label: "Airway Tech", value: "Optimal Natural Cross-Breeze" },
      { label: "Security Coverage", value: "100% Monitored Walkways" }
    ],
    hotspots: [
      {
        id: "girlscorr-hot1",
        name: "Inspirational Leaderboards",
        x: 45,
        y: 40,
        title: "Outstanding Alumni Hall of Fame",
        description: "Engraved plaques highlighting female alumni achievements at prestigious national institutes and civil boards.",
        category: "academic"
      }
    ]
  },
  {
    id: "area-computer-lab",
    name: "Computer Lab",
    slug: "computer-lab",
    title: "Next-Generation Advanced Computing Lab",
    description: "Premium computational workstations teaching foundational digital abilities and programming.",
    imageUrl: "https://lh3.googleusercontent.com/gpms-cs-s/ABJJf52kxSehJKIbUsg-a_UOIH5e5kmvsSMRLLNYecVvcC2VD7bVhHU7y9J0tzHY7L1p_sKcst3UoeMf9WRm3IX-ggAacHjHmKfo97wnb4ol5nLcqlN4T8vJOqmN-hLEFNDPNNM_zHR6pg=w1200",
    narratorText: "Welcome to the Computer Lab. Our advanced workstations empower young minds with digital literacy, logical syntax training, and algorithmic skills.",
    minimapCoordinates: { x: 65, y: 65 },
    statistics: [
      { label: "Total Machines", value: "40 Modern PCs Configured" },
      { label: "Computing Core", value: "High-Speed Intel Frameworks" }
    ],
    hotspots: [
      {
        id: "computereq-hot1",
        name: "Programming Terminals Deck",
        x: 50,
        y: 50,
        title: "Scratch & Python Code Desks",
        description: "Equipped with interactive programming suites to build logical step operations safely.",
        category: "technology"
      }
    ]
  }
];

// Simple premium Web Audio API tone generator (bulletproof, zero buffer-lag)
export default function TourSection({ isDarkMode }: { isDarkMode: boolean }) {
  const [activeArea, setActiveArea] = useState<CampusArea>(CAMPUSTOUR_AREAS[0]);
  const [selectedHotspot, setSelectedHotspot] = useState<Hotspot | null>(null);
  
  // Guided Tour State
  const [isGuidedAutopilot, setIsGuidedAutopilot] = useState(false);
  const [guidedTimeLeft, setGuidedTimeLeft] = useState(15); // seconds per area
  const [narratorTextTyped, setNarratorTextTyped] = useState("");
  
  // Drag scrolling Ref configuration
  const viewportContainerRef = useRef<HTMLDivElement>(null);
  const [isDraggingViewport, setIsDraggingViewport] = useState(false);
  const [dragStartX, setDragStartX] = useState(0);
  const [dragScrollLeftValue, setDragScrollLeftValue] = useState(0);
  




  // Auto-typing narrator effect
  useEffect(() => {
    setNarratorTextTyped("");
    let index = 0;
    const fullText = activeArea.narratorText;
    const interval = setInterval(() => {
      setNarratorTextTyped((prev) => prev + fullText.charAt(index));
      index++;
      if (index >= fullText.length) {
        clearInterval(interval);
      }
    }, 18); // very snappy elegant typing speed
    
    // Center the viewport scroll position initially so user can explore left and right perfectly
    setTimeout(() => {
      if (viewportContainerRef.current) {
        const fullWidth = viewportContainerRef.current.scrollWidth;
        const visibleWidth = viewportContainerRef.current.clientWidth;
        viewportContainerRef.current.scrollLeft = (fullWidth - visibleWidth) / 2;
      }
    }, 100);

    return () => {
      clearInterval(interval);
    };
  }, [activeArea]);

  // Guided Autopilot sequence timer
  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isGuidedAutopilot) {
      setGuidedTimeLeft(15);
      timer = setInterval(() => {
        setGuidedTimeLeft((prev) => {
          if (prev <= 1) {
            // Teleport to next area!
            const currentIndex = CAMPUSTOUR_AREAS.findIndex(a => a.id === activeArea.id);
            const nextIndex = (currentIndex + 1) % CAMPUSTOUR_AREAS.length;
            setActiveArea(CAMPUSTOUR_AREAS[nextIndex]);
            setSelectedHotspot(null);
            return 15;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => {
      clearInterval(timer);
    };
  }, [isGuidedAutopilot, activeArea]);

  // Guided Autopilot slow panoramic panning camera sweep
  useEffect(() => {
    let scanInterval: NodeJS.Timeout;
    if (isGuidedAutopilot && viewportContainerRef.current) {
      let isMovingRight = true;
      scanInterval = setInterval(() => {
        if (!viewportContainerRef.current) return;
        const container = viewportContainerRef.current;
        const maxScroll = container.scrollWidth - container.clientWidth;
        
        if (isMovingRight) {
          container.scrollLeft += 2; // slow drift
          if (container.scrollLeft >= maxScroll - 5) {
            isMovingRight = false;
          }
        } else {
          container.scrollLeft -= 2;
          if (container.scrollLeft <= 5) {
            isMovingRight = true;
          }
        }
      }, 40); // 25 FPS drift
    }
    return () => {
      clearInterval(scanInterval);
    };
  }, [isGuidedAutopilot]);



  const changeArea = (area: CampusArea) => {
    setActiveArea(area);
    setSelectedHotspot(null);
  };

  // Pointer event handlers for drag panning (Unified mouse & touch)
  const handlePointerDown = (e: React.PointerEvent) => {
    if (!viewportContainerRef.current) return;
    setIsDraggingViewport(true);
    setDragStartX(e.pageX - viewportContainerRef.current.offsetLeft);
    setDragScrollLeftValue(viewportContainerRef.current.scrollLeft);
    viewportContainerRef.current.style.cursor = "grabbing";
    
    // Stop guided pilot if user starts manually dragging
    if (isGuidedAutopilot) {
      setIsGuidedAutopilot(false);
    }
  };

  const handlePointerLeave = () => {
    setIsDraggingViewport(false);
    if (viewportContainerRef.current) {
      viewportContainerRef.current.style.cursor = "grab";
    }
  };

  const handlePointerUp = () => {
    setIsDraggingViewport(false);
    if (viewportContainerRef.current) {
      viewportContainerRef.current.style.cursor = "grab";
    }
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isDraggingViewport || !viewportContainerRef.current) return;
    e.preventDefault();
    const x = e.pageX - viewportContainerRef.current.offsetLeft;
    const walk = (x - dragStartX) * 1.5; // multiplier sensitivity
    viewportContainerRef.current.scrollLeft = dragScrollLeftValue - walk;
  };

  const toggleGuidedTour = () => {
    setIsGuidedAutopilot(!isGuidedAutopilot);
    setSelectedHotspot(null);
  };

  const handleHotspotClick = (hs: Hotspot) => {
    setSelectedHotspot(hs);
  };





  return (
    <div className={`w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24 ${
      isDarkMode ? "bg-heritage-dark text-heritage-cream/90" : "bg-heritage-cream text-heritage-dark"
    }`}>
      
      {/* Editorial Header Section */}
      <div className="text-left max-w-3xl space-y-4 mb-10 pt-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm border border-heritage-gold/20 bg-heritage-emerald/10 text-heritage-gold text-[10px] uppercase tracking-widest font-mono font-bold">
          <Maximize2 className="w-3.5 h-3.5" /> High-Fidelity 360° Interactive Canvas
        </div>
        
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-light tracking-tight leading-none">
          Tour the <span className="italic font-normal text-heritage-gold">Serenity Campus</span>
        </h2>
        
        <p className={`text-sm sm:text-base leading-relaxed ${
          isDarkMode ? "text-heritage-sage/80" : "text-heritage-emerald/80"
        }`}>
          Explore our premier spaces with fluid click-and-drag 360° panning, interactive hotspot telemetries, an integrated school blueprint map and coaching details instantly.
        </p>
      </div>

      {/* QUICK STATUS CONTROL HEAD BAR */}
      <div className={`p-4 rounded-xl border flex flex-wrap gap-4 items-center justify-between shadow-md mb-8 ${
        isDarkMode ? "bg-heritage-emerald/20 border-heritage-gold/25" : "bg-white border-heritage-gold/30"
      }`}>
        {/* Left indicators */}
        <div className="flex flex-wrap items-center gap-3">
          <span className="text-[10px] font-mono tracking-widest uppercase font-bold text-heritage-gold">
            CURRENT ZONE:
          </span>
          <div className="px-3.5 py-1.5 bg-heritage-emerald text-heritage-cream text-xs font-bold font-serif uppercase tracking-wider border border-heritage-gold/30">
            {activeArea.name}
          </div>
          <span className={`text-[11px] font-sans ${isDarkMode ? "text-slate-400" : "text-slate-500"}`}>
            ({activeArea.title})
          </span>
        </div>

        {/* Right audio + autopilot controls */}
        <div className="flex items-center gap-3">
          {/* Autopilot play button */}
          <button
            onClick={toggleGuidedTour}
            className={`px-4 py-2 text-xs font-bold tracking-wider uppercase font-sans transition-all flex items-center gap-1.5 ${
              isGuidedAutopilot
                ? "bg-red-900 border border-red-550 text-white animate-pulse"
                : "bg-heritage-gold hover:bg-heritage-gold-hover text-heritage-dark border border-heritage-gold"
            }`}
          >
            {isGuidedAutopilot ? (
              <>
                <Pause className="w-4 h-4" /> Stop Autopilot ({guidedTimeLeft}s)
              </>
            ) : (
              <>
                <Play className="w-4 h-4 fill-current" /> Guided Tour Auto-pilot
              </>
            )}
          </button>
        </div>
      </div>

      {/* PRIMARY GRID CONTAINER: VIEWPORT (LEFT 8 COLS) & MAP/CONTROLS (RIGHT 4 COLS) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* VIEWPORT COLUMN (8 COLS) */}
        <div className="lg:col-span-8 space-y-8">
          
          {/* Main Panorama Canvas Frame with 3D drop-shadow */}
          <div className="relative border-2 border-heritage-gold/35 rounded-2xl overflow-hidden shadow-2xl bg-heritage-dark select-none group">
            
            {/* INSTRUCTIONS DECK LAYER */}
            <div className="absolute top-4 left-4 z-20 flex gap-2">
              <span className="py-1 px-3 bg-heritage-dark/85 text-heritage-gold font-mono text-[9px] tracking-widest uppercase border border-heritage-gold/30 backdrop-blur-md">
                ‹ Drag or Swipe to Pan Scene ›
              </span>
              {isGuidedAutopilot && (
                <span className="py-1 px-3 bg-heritage-emerald text-heritage-cream font-bold text-[9px] uppercase tracking-wider rounded-none">
                  ● Cinematic Auto-sweep Active
                </span>
              )}
            </div>

            <div className="absolute top-4 right-4 z-20">
              <span className="py-1 px-2.5 bg-black/75 rounded text-white text-[9px] font-bold tracking-wider font-mono">
                FOV: 360°
              </span>
            </div>

            {/* CLICKABLE ARROWS PANNING CONTROLS ON VIEWPORT EDGE FOR EXCELLENT ACCESSIBILITY */}
            <button
              onClick={() => {
                if (viewportContainerRef.current) viewportContainerRef.current.scrollLeft -= 220;
              }}
              aria-label="Pan Left"
              className="absolute left-3 top-1/2 -translate-y-1/2 z-30 w-11 h-11 bg-heritage-dark/80 backdrop-blur-md text-heritage-gold border border-heritage-gold/40 hover:bg-heritage-emerald hover:text-white transition flex items-center justify-center shadow-lg cursor-pointer"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>

            <button
              onClick={() => {
                if (viewportContainerRef.current) viewportContainerRef.current.scrollLeft += 220;
              }}
              aria-label="Pan Right"
              className="absolute right-3 top-1/2 -translate-y-1/2 z-30 w-11 h-11 bg-heritage-dark/80 backdrop-blur-md text-heritage-gold border border-heritage-gold/40 hover:bg-heritage-emerald hover:text-white transition flex items-center justify-center shadow-lg cursor-pointer"
            >
              <ArrowRight className="w-5 h-5" />
            </button>

            {/* DRAGGABLE PAN CONTAINER - EXTREMELY STABLE NATIVE POINTER Drag tracking */}
            <div
              id="scrolling-tour-viewport"
              ref={viewportContainerRef}
              onPointerDown={handlePointerDown}
              onPointerLeave={handlePointerLeave}
              onPointerUp={handlePointerUp}
              onPointerMove={handlePointerMove}
              className="h-[380px] sm:h-[480px] w-full overflow-x-hidden overflow-y-hidden cursor-grab active:cursor-grabbing relative select-none"
            >
              {/* WIDE PANORAMIC IMG - Size scales up to provide real panoramic look-around */}
              <div className="relative h-full w-[220%] sm:w-[170%] md:w-[150%] lg:w-[170%] min-w-[2000px] flex items-center justify-center select-none pointer-events-none">
                
                <img
                  src={activeArea.imageUrl}
                  alt={activeArea.name}
                  referrerPolicy="no-referrer"
                  className="absolute inset-0 w-full h-full object-cover select-none pointer-events-none filter brightness-[85%] saturate-[110%]"
                  onError={(e) => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.src = "https://i0.wp.com/serenitymodelschools.com/wp-content/uploads/2025/11/serenity-model-high-school-6.jpg?fit=1200%2C800&ssl=1";
                  }}
                />
                
                {/* Visual Sun Glare & cinematic Vignette overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/30 pointer-events-none select-none mix-blend-multiply" />
                <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/80 to-transparent pointer-events-none select-none" />

                {/* Grid Overlay for Technical Architectural Blueprint feel */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(197,160,89,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(197,160,89,0.04)_1px,transparent_1px)] bg-[size:5rem_5rem] pointer-events-none" />

                {/* HOTSPOTS ANCHORED STABLY OVER PANORAMIC IMAGE */}
                <div className="absolute inset-0 w-full h-full pointer-events-auto">
                  {activeArea.hotspots.map((hs) => (
                    <div
                      key={hs.id}
                      style={{ left: `${hs.x}%`, top: `${hs.y}%` }}
                      className="absolute -translate-x-1/2 -translate-y-1/2 group/pin z-20 cursor-pointer"
                    >
                      {/* Pulse beacon loops */}
                      <span className="absolute inline-flex h-10 w-10 -left-5 -top-5 rounded-full bg-heritage-gold/30 animate-ping opacity-75" />
                      <span className="absolute inline-flex h-6 w-6 -left-3 -top-3 rounded-full bg-heritage-gold/45 animate-pulse-slow font-mono font-bold text-center" />
                      
                      {/* Clickable Pin Button */}
                      <button
                        onClick={() => handleHotspotClick(hs)}
                        className={`w-9 h-9 rounded-full bg-heritage-emerald text-heritage-cream border-2 flex items-center justify-center transition shadow-2xl relative ${
                          selectedHotspot?.id === hs.id 
                            ? "border-white bg-heritage-gold text-heritage-dark scale-110" 
                            : "border-heritage-gold group-hover/pin:border-white hover:scale-110"
                        }`}
                      >
                        <Info className="w-4 h-4" />
                      </button>

                      {/* Micro floating text bubble below standard */}
                      <span className="absolute top-10 left-1/2 -translate-x-1/2 bg-heritage-dark/95 border border-heritage-gold/25 text-heritage-cream text-[9px] uppercase tracking-wide py-0.5 px-2 rounded-none whitespace-nowrap opacity-0 group-hover/pin:opacity-100 transition shadow-md pointer-events-none font-medium">
                        {hs.name}
                      </span>
                    </div>
                  ))}
                </div>

              </div>
            </div>

            {/* BOTTOM HUD PANEL FOR HOTSTPOT INFORMATIONAL POPUPS */}
            <AnimatePresence>
              {selectedHotspot && (
                <motion.div
                  initial={{ y: 80, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: 60, opacity: 0 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                  className="absolute bottom-4 left-4 right-4 z-30 p-5 bg-heritage-dark/95 border border-heritage-gold/40 text-left shadow-2xl backdrop-blur-md rounded-xl flex flex-col md:flex-row gap-4 items-start md:items-center justify-between pointer-events-auto"
                >
                  <div className="space-y-2 flex-1 max-w-2xl">
                    <div className="flex items-center gap-2">
                      <span className="px-2 py-0.5 rounded-sm text-[8px] font-bold font-mono uppercase bg-heritage-emerald border border-heritage-gold/25 text-heritage-gold">
                        HOTSPOT: {selectedHotspot.category}
                      </span>
                      <h4 className="text-sm font-serif font-bold text-heritage-gold">
                        {selectedHotspot.title}
                      </h4>
                    </div>
                    <p className="text-[11.5px] text-heritage-cream/90 font-sans leading-relaxed">
                      {selectedHotspot.description}
                    </p>
                  </div>

                  <div className="flex gap-2 self-end md:self-center">
                    <button
                      onClick={() => handleHotspotClick(selectedHotspot)}
                      className="px-4 py-2 bg-heritage-emerald hover:bg-heritage-emerald/95 border border-heritage-gold/20 text-heritage-gold capitalize text-[10px] font-bold tracking-wider font-mono"
                    >
                      {selectedHotspot.category} details
                    </button>
                    <button
                      onClick={() => setSelectedHotspot(null)}
                      className="px-4 py-2 bg-heritage-gold text-heritage-dark hover:bg-heritage-gold-hover text-[10px] font-bold tracking-wider uppercase font-sans"
                    >
                      Acknowledge
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>

        {/* MAP & SIDE CONTROLS COLUMN (4 COLS) */}
        <div className="lg:col-span-4 space-y-6">
          
          {/* QUICK DIRECT NAVIGATION PANEL (LIST OF AREAS) */}
          <div className={`p-6 border rounded-2xl shadow-md ${
            isDarkMode ? "bg-heritage-dark border-heritage-gold/20" : "bg-white border-heritage-gold/35"
          }`}>
            <h4 className="text-xs font-mono font-bold text-heritage-gold uppercase tracking-widest mb-4 text-left flex items-center gap-1">
              <Maximize2 className="w-3.5 h-3.5 text-heritage-gold" /> Select Campus Block:
            </h4>
            
            <div className="space-y-3">
              {CAMPUSTOUR_AREAS.map((area) => (
                <button
                  key={area.slug}
                  onClick={() => changeArea(area)}
                  className={`w-full p-3.5 text-left transition border-l-4 rounded flex items-start gap-3 justify-between ${
                    activeArea.slug === area.slug
                      ? "bg-heritage-emerald text-heritage-cream border-l-heritage-gold text-bold"
                      : "border-l-transparent hover:bg-heritage-gold/15 hover:border-l-heritage-gold"
                  }`}
                  style={{
                    backgroundColor: activeArea.slug === area.slug && !isDarkMode ? "var(--color-heritage-emerald)" : undefined,
                    color: activeArea.slug === area.slug && !isDarkMode ? "#faf6f0" : undefined
                  }}
                >
                  <div className="space-y-1">
                    <span className="text-xs font-serif font-bold tracking-tight block">
                      {area.name}
                    </span>
                    <span className="text-[10px] leading-tight block opacity-80 pl-1">
                      {area.title}
                    </span>
                  </div>
                  
                  {/* Small stat count chip */}
                  <div className="py-0.5 px-2 bg-heritage-dark/80 text-heritage-gold font-mono text-[8px] tracking-wider uppercase border border-heritage-gold/25 self-start shrink-0">
                    {area.hotspots.length} spots
                  </div>
                </button>
              ))}
            </div>
          </div>

        </div>

      </div>

    </div>
  );
}
