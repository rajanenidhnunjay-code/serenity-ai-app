export interface ChatMessage {
  id: string;
  sender: "user" | "assistant";
  text: string;
  timestamp: Date;
}

export interface CareerOpening {
  id: string;
  title: string;
  department: string;
  experience: string;
  type: string;
  salaryRange: string;
  requirements: string[];
}

export interface CalendarEvent {
  id: string;
  title: string;
  date: string;
  time: string;
  category: "Academic" | "Sports" | "Arts";
  description: string;
  image?: string;
  location?: string;
}

export type SchoolSection = 
  | "home"
  | "about"
  | "alumni"
  | "academics"
  | "admissions"
  | "career"
  | "media"
  | "events"
  | "contact"
  | "tour"
  | "sankranthi-celebration-2026"
  | "bonalu-celebration-2025"
  | "sankranthi-celebration-2025";
