
export interface Project {
  title: string;
  description: string;
  points: string[];
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  points: string[];
}

export interface SkillGroup {
  category: string;
  items: string[];
}

export interface Education {
  degree: string;
  institution: string;
  period: string;
}

export interface Certification {
  name: string;
  year: string;
}
