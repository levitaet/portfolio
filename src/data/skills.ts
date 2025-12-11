export interface SkillGroup {
  id: string;
  label: string;
  skills: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    id: "languages",
    label: "Languages",
    skills: ["TypeScript", "JavaScript", "Python", "C/C++", "Java"],
  },
  {
    id: "frontend",
    label: "Frontend",
    skills: ["React", "Vite", "Zustand", "React Router", "HTML5", "CSS3"],
  },
  {
    id: "backend",
    label: "Backend",
    skills: ["Node.js", "Express", "REST APIs", "MongoDB", "SQL basics"],
  },
  {
    id: "cs-topics",
    label: "CS Topics",
    skills: [
      "Algorithms & Data Structures",
      "Networking basics",
      "Operating Systems basics",
      "Databases",
    ],
  },
  {
    id: "tools",
    label: "Tools & Misc",
    skills: ["Git", "Linux", "Docker (basics)", "VS Code", "Unit testing"],
  },
];
