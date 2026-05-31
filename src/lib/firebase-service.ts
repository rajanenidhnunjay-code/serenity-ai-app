export interface AdmissionForm {
  studentName: string;
  dob: string;
  targetGrade: string;
  parentName: string;
  phone: string;
  email?: string;
  prevSchool?: string;
}

export interface InquiryForm {
  name: string;
  phone: string;
  division: string;
  message: string;
  email?: string;
}

// In-Memory fallback in case localStorage is disabled or not available
const memoryStore: Record<string, any> = {};

function getStoredAdmissions(): Record<string, any> {
  try {
    const raw = localStorage.getItem("smhs_admissions");
    return raw ? JSON.parse(raw) : {};
  } catch (err) {
    console.warn("localStorage not accessible, using memoryStore instead:", err);
    return memoryStore;
  }
}

function saveAdmissionRecord(id: string, record: any) {
  try {
    const admissions = getStoredAdmissions();
    admissions[id] = record;
    localStorage.setItem("smhs_admissions", JSON.stringify(admissions));
  } catch (err) {
    console.warn("Could not save to localStorage, saving to memoryStore:", err);
    memoryStore[id] = record;
  }
}

/**
 * Submits an online student registration/admission form to standard client storage
 * and returns the generated registry key ID (e.g., SM4512)
 */
export async function submitAdmission(admission: AdmissionForm): Promise<string> {
  const generatedId = `SM${Math.floor(1000 + Math.random() * 9000)}`;
  
  const payload = {
    regId: generatedId,
    studentName: admission.studentName,
    dob: admission.dob,
    targetGrade: admission.targetGrade,
    parentName: admission.parentName,
    phone: admission.phone,
    email: admission.email || "",
    prevSchool: admission.prevSchool || "",
    status: "Application Under Review",
    step: 1,
    notes: "We have received your application. Document screening is in progress.",
    createdAt: new Date().toISOString()
  };

  saveAdmissionRecord(generatedId.toUpperCase(), payload);
  return generatedId;
}

/**
 * Tracks an applicant's secondary milestones by search ID
 */
export async function trackAdmission(regId: string): Promise<any | null> {
  const cleanId = regId.trim().toUpperCase();
  const admissions = getStoredAdmissions();
  
  if (admissions[cleanId]) {
    return admissions[cleanId];
  }
  
  return null;
}

/**
 * Commits a parent or general callback Inquiry into standard client storage
 */
export async function submitInquiry(inquiry: InquiryForm): Promise<void> {
  const generatedId = `INQ${Math.floor(100000 + Math.random() * 900000)}`;
  
  const payload = {
    name: inquiry.name,
    phone: inquiry.phone,
    division: inquiry.division,
    message: inquiry.message,
    email: inquiry.email || "",
    createdAt: new Date().toISOString()
  };

  try {
    const raw = localStorage.getItem("smhs_inquiries") || "{}";
    const inquiries = JSON.parse(raw);
    inquiries[generatedId] = payload;
    localStorage.setItem("smhs_inquiries", JSON.stringify(inquiries));
  } catch (err) {
    console.warn("Could not write inquiry to localStorage, saving to memoryStore:", err);
    memoryStore[generatedId] = payload;
  }
}
