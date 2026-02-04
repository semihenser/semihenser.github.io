export interface Experience {
  company: string;
  role: string;
  period: string;
  location: string;
  description: string;
}

export interface Education {
  institution: string;
  degree: string;
  period: string;
  details?: string;
}

export interface Project {
  name: string;
  tech?: string;
  description: string;
}

export interface Social {
  platform: string;
  username: string;
  url?: string;
}

export type SectionType = 'HOME' | 'EXPERIENCE' | 'PROJECTS' | 'SKILLS' | 'CONTACT';