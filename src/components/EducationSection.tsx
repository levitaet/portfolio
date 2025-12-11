import { education } from "../data/education";

export function EducationSection() {
  return (
    <section id="education" className="section">
      <div className="container">
        <h2 className="section-title">Education</h2>
        <p className="section-subtitle">
          Formal education and coursework that shaped my foundation in Computer Science.
        </p>
        <div className="education-list">
          {education.map((item) => (
            <article key={item.id} className="card education-card">
              <div className="card-body">
                <h3 className="card-title">
                  {item.degree} ·{" "}
                  <span className="muted">{item.institution}</span>
                </h3>
                <p className="education-meta">
                  {item.start} – {item.end}
                  {item.location && ` · ${item.location}`}
                </p>
                {item.details && item.details.length > 0 && (
                  <ul className="card-list">
                    {item.details.map((d) => (
                      <li key={d}>{d}</li>
                    ))}
                  </ul>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
