import { skillGroups } from "../data/skills";

export function SkillsSection() {
  return (
    <section id="skills" className="section">
      <div className="container">
        <h2 className="section-title">Skills</h2>
        <p className="section-subtitle">
          Tools and technologies I&apos;ve worked with so far.
        </p>
        <div className="grid skills-grid">
          {skillGroups.map((group) => (
            <article key={group.id} className="card skills-card">
              <h3 className="card-title">{group.label}</h3>
              <ul className="pill-list">
                {group.skills.map((skill) => (
                  <li key={skill} className="pill">
                    {skill}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
