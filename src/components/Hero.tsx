export function Hero() {
  return (
    <section id="top" className="hero">
      <div className="container hero-inner">
        <div>
          <p className="hero-kicker">Computer Science Student</p>
          <h1 className="hero-title">
            Building things for the web,
            <br />
            learning every day.
          </h1>
          <p className="hero-subtitle">
            I&apos;m a CS student interested in{" "}
            <strong>fullstack development</strong>,{" "}
            <strong>security</strong> and <strong>systems</strong>. I like to
            understand how things work from the bottom up and turn that into
            useful tools and experiences.
          </p>
          <div className="hero-actions">
            <a href="#projects" className="btn primary">
              View projects
            </a>
            <a href="#contact" className="btn ghost">
              Contact me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
