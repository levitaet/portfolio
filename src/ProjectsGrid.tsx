import { projects } from "./data/projects";

export function ProjectsGrid() {
  return (
    <div className="projects-grid">
      {projects.map((p) => (
        <article key={p.title}>
          <h3>{p.title}</h3>
          <p>{p.tagline}</p>
          <p><strong>Tech:</strong> {p.tech.join(", ")}</p>
        </article>
      ))}
    </div>
  );
}
