import type { Project } from "../data/projects";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="card project-card">
      <div className="card-body">
        <h3 className="card-title">{project.title}</h3>
        {project.tagline && (
          <p className="card-tagline">{project.tagline}</p>
        )}
        {project.description && (
          <p className="card-description">{project.description}</p>
        )}

        {project.highlights && project.highlights.length > 0 && (
          <ul className="card-list">
            {project.highlights.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        )}

        <p className="card-tech">
          <strong>Tech:</strong> {project.tech.join(", ")}
        </p>
      </div>
      <div className="card-footer">
        {project.link && (
          <a
            href={project.link}
            target="_blank"
            rel="noreferrer"
            className="btn small"
          >
            View code
          </a>
        )}
        {project.demo && (
          <a
            href={project.demo}
            target="_blank"
            rel="noreferrer"
            className="btn small ghost"
          >
            Live demo
          </a>
        )}
      </div>
    </article>
  );
}
