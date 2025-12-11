export interface Project {
  id: string;
  title: string;
  tagline?: string;
  tech: string[];
  link?: string;
  demo?: string;
  description?: string;
  highlights?: string[];
}

export const projects: Project[] = [
  {
    id: "test-project",
    title: "Test Project",
    tagline: "A simple test project",
    tech: ["React", "TypeScript", "Node", "Express", "MongoDB"],
    link: "www.example.com",
    description:
      "This is a test project to demonstrate the project data structure.",
    highlights: [
      "Test highlight 1",
      "Test highlight 2",
      "Test highlight 3",
    ],
  },
];
