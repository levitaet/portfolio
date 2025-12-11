import { experience } from "../data/experience";

export function ExperienceSection() {
  return (
    <section id="experience" className="section">
      <div className="container">
        <h2 className="section-title">Experience</h2>
        <p className="section-subtitle">
          Teaching, internships and other roles that helped me grow as a
          developer.
        </p>
        <div className="experience-list">
          {experience.map((item) => (
            <article key={item.id} className="card experience-card">
              <div className="card-body">
                <h3 className="card-title">
                  {item.role} ·{" "}
                  <span className="muted">{item.organization}</span>
                </h3>
                <p className="experience-meta">
                  {item.start} – {item.end}
                </p>
                <ul className="card-list">
                  {item.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
