export interface ExperienceItem {
  id: string;
  role: string;
  organization: string;
  start: string;
  end: string;
  location?: string;
  bullets: string[];
}

export const experience: ExperienceItem[] = [
  {
    id: "ta",
    role: "Teaching Assistant / Tutor",
    organization: "University (Computer Science)",
    start: "2023",
    end: "Present",
    bullets: [
      "Helped students understand algorithms, data structures and good programming practices.",
      "Designed or reviewed exercises and debugging sessions.",
      "Explained complex topics in simpler terms and with concrete examples.",
    ],
  },
  {
    id: "cs-intern",
    role: "Software / CS Intern (example)",
    organization: "Some Company",
    start: "2024",
    end: "2024",
    bullets: [
      "Contributed to a web application using React and TypeScript.",
      "Implemented small backend features and REST endpoints in Node/Express.",
      "Participated in code reviews and team stand-ups.",
    ],
  },
];
