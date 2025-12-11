import { certificates } from "../data/certificates";

export function CertificatesSection() {
  return (
    <section id="certificates" className="section">
      <div className="container">
        <h2 className="section-title">Certificates</h2>
        <p className="section-subtitle">
          Courses and certifications that strengthened my theoretical and
          practical knowledge.
        </p>

        <div className="certificates-list">
          {certificates.map((c) => (
            <article key={c.id} className="card certificate-card">
              <div className="card-body">
                <h3 className="card-title">{c.title}</h3>
                <p className="muted">
                  {c.issuer} • {c.issued}
                </p>

                {c.description && (
                  <p className="card-description">{c.description}</p>
                )}

                {c.skills && (
                  <ul className="pill-list">
                    {c.skills.map((s) => (
                      <li key={s} className="pill">
                        {s}
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              <div className="card-footer">
                {c.credentialUrl && (
                  <a
                    href={c.credentialUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="btn small"
                  >
                    View credential
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
