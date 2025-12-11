export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  start: string;
  end: string;
  location?: string;
  details?: string[];
}

export const education: EducationItem[] = [
  {
    id: "cs-degree",
    degree: "B.Sc. in Computer Science",
    institution: "Your University",
    start: "2021",
    end: "Present",
    location: "City, Country",
    details: [
      "Relevant coursework: Algorithms and Data Structures, Computer Networks, Operating Systems, Databases, Web Development, Cybersecurity.",
      "Interests in networking, security, and fullstack development.",
    ],
  },
  {
    id: "hs",
    degree: "High School Diploma",
    institution: "Some High School",
    start: "2017",
    end: "2020",
    location: "City, Country",
    details: [
      "Graduated with strong focus on math and sciences.",
    ],
  },
];
