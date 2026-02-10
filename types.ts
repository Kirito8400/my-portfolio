export interface ContactInfo {
  phone: string;
  email: string;
  location: string;
  linkedin: string;
}

export interface SkillCategory {
  title: string;
  skills: string[];
  icon: string;
}

export interface Job {
  role: string;
  company: string;
  location: string;
  period: string;
  highlights: string[];
}

export interface Education {
  degree: string;
  institution: string;
  location: string;
  details?: string;
}

export interface Project {
  title: string;
  description: string;
  technologies: string[];
  link?: string;
  github?: string;
  type: "Theme" | "App" | "Storefront";
}

export interface ResumeData {
  name: string;
  title: string;
  summary: string;
  contact: ContactInfo;
  skills: SkillCategory[];
  experience: Job[];
  education: Education[];
  projects: Project[];
}