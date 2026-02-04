import { Experience, Education, Project, Social } from './types';

export const CONTACT_INFO = {
  phone: "+90 542 321 1935",
  email: "semihenser@gmail.com",
  address: "52/126 ST no:28 APT:2 Karabaglar/Izmir",
  linkedin: "linkedin.com/in/semihenser", // Assumed based on CV context
  github: "github.com/semihenser"
};

export const EXPERIENCES: Experience[] = [
  {
    company: "Izmir Metropolitan Municipality",
    role: "Data Analyst",
    period: "04/23 - Still",
    location: "Izmir",
    description: "Analysis and reporting of Izmir's public transportation data."
  },
  {
    company: "Uniqgene Biotechnology",
    role: "Software Engineer",
    period: "05/22 - 02/23",
    location: "Izmir",
    description: "Determining which sports people may be prone to according to their genetics by artificial learning."
  },
  {
    company: "Zoi Data",
    role: "Intern Software Engineer",
    period: "08/21 - 02/22",
    location: "Izmir",
    description: "Generating deep learning-based solutions."
  },
  {
    company: "AdresGezgini",
    role: "Intern Software Engineer",
    period: "06/20 - 08/20",
    location: "Izmir",
    description: "Production of artificial intelligence solutions in digital marketing."
  }
];

export const EDUCATION: Education[] = [
  {
    institution: "Sabanci University",
    degree: "AI SUMMER SCHOOL",
    period: "2021-2021"
  },
  {
    institution: "Izmir Democracy University",
    degree: "Electrical and Electronics Engineering",
    period: "2018-2022",
    details: "Bachelor Degree"
  }
];

export const SKILLS: string[] = [
  "Python", "C/C++", "JavaScript", "Data Analysis", 
  "Artificial Intelligence", "React.js", "Node.js", 
  "MySQL", "Embedded Systems", "Signal Processing"
];

export const PROJECTS: Project[] = [
  {
    name: "Sports Clubs Genetic Interface",
    tech: "Node.js, React.js",
    description: "Building an interface for sports clubs (Fenerbahçe, Altınordu, Göztepe) to analyze genetic tests. 8 different interfaces created for 8 different teams."
  },
  {
    name: "Music Recommendation with AI",
    description: "AI-driven recommendation engine implementation."
  },
  {
    name: "Multifunctional Calculator",
    tech: "C/C++",
    description: "Advanced calculation logic implementation."
  },
  {
    name: "Image Registration",
    tech: "Python",
    description: "Image processing algorithms for alignment and analysis."
  },
  {
    name: "Accident Prediction",
    tech: "Python",
    description: "Predictive modeling for accident occurrence."
  },
  {
    name: "Embedded Systems",
    tech: "Raspberry Pi, Arduino",
    description: "Various hardware integration projects."
  }
];

export const REFERENCES = [
  {
    name: "Prof. Dr. Barış Bozkurt",
    title: "Izmir Democracy University",
    contact: "02322601001 (dahili: 542)"
  },
  {
    name: "Melikcan Ölgün",
    title: "Borda Technology",
    contact: "+905312769538"
  }
];