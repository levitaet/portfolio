export function ContactSection() {
  return (
    <section id="contact" className="section">
      <div className="container contact-inner">
        <div>
          <h2 className="section-title">Contact</h2>
          <p className="section-subtitle">
            Want to talk about an internship, project or idea? Feel free to
            reach out.
          </p>
        </div>
        <div className="contact-links">
          <a href="mailto:youremail@example.com" className="btn primary">
            Email me
          </a>
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noreferrer"
            className="btn ghost"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/yourprofile"
            target="_blank"
            rel="noreferrer"
            className="btn ghost"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}
