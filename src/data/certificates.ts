export interface Certificate {
  id: string;
  title: string;
  issuer: string;
  issued: string; // Month + Year, or just Year
  credentialUrl?: string;
  description?: string;
  skills?: string[];
}

export const certificates: Certificate[] = [
  {
    id: "cs50",
    title: "CS50: Introduction to Computer Science",
    issuer: "Harvard / edX",
    issued: "2023",
    credentialUrl: "https://www.edx.org/certificate/your-link-here",
    description:
      "Foundational computer science concepts including algorithms, data structures, memory, and fullstack basics.",
    skills: ["C programming", "Algorithms", "Web basics"],
  },
  {
    id: "google-cyber",
    title: "Google Cybersecurity Professional Certificate",
    issuer: "Google",
    issued: "2024",
    credentialUrl: "https://www.coursera.org/account/accomplishments/your-link",
    description:
      "Hands-on introduction to defensive security, SIEM tools, networking, Linux, risk assessment, and incident response.",
    skills: ["Security", "SIEM", "Networking"],
  },
  {
    id: "python-cert",
    title: "Python Programming Specialization",
    issuer: "University of Michigan / Coursera",
    issued: "2022",
    credentialUrl: "https://coursera.org/verify/123456",
    skills: ["Python", "Data analysis", "OOP"],
  },
];
