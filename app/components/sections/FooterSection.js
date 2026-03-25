export default function FooterSection({ navLinks }) {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__top">
          <a className="nav__brand" href="/" aria-label="Allora home">
            <span>Allora</span>
            <i />
          </a>
          <nav aria-label="Footer navigation">
            {navLinks.map((link) => (
              <a key={`footer-${link.href}`} href={link.href}>
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="footer__divider" />

        <div className="footer__bottom">
          <p>&copy; 2024 Allora Solutions. All rights reserved.</p>
          <div className="footer__social">
            <a href="https://www.linkedin.com" target="_blank" rel="noreferrer">
              LinkedIn
            </a>
            <a href="https://x.com" target="_blank" rel="noreferrer">
              X (Twitter)
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noreferrer">
              Instagram
            </a>
          </div>
          <p>Designed &amp; built in-house.</p>
        </div>
      </div>
    </footer>
  );
}
