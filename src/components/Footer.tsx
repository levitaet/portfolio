export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <p className="footer-text">
          © {year} Your Name. Built with React + TypeScript + Vite.
        </p>
      </div>
    </footer>
  );
}
