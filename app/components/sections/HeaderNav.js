export default function HeaderNav({
  menuOpen,
  setMenuOpen,
  navLinks,
  onStartProject
}) {
  return (
    <>
      <header className={`nav ${menuOpen ? "nav--menu-open" : ""}`}>
        <div className="container nav__inner">
          <a className="nav__brand" href="/" aria-label="Allora home">
            <span>Allora</span>
            <i />
          </a>

          <nav className="nav__links" aria-label="Primary">
            {navLinks.map((link, index) => (
              <a
                key={link.href}
                href={link.href}
                className="nav__link"
                style={{ animationDelay: `${0.95 + index * 0.08}s` }}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="nav__actions">
            <button className="nav__cta" onClick={onStartProject}>
              Start a Project <span>&rarr;</span>
            </button>
            <button
              className="nav__toggle"
              aria-label="Toggle navigation menu"
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((prev) => !prev)}
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>
      </header>

      <div className={`nav__overlay ${menuOpen ? "is-open" : ""}`}>
        <div className="nav__overlay-inner">
          {navLinks.map((link) => (
            <a key={`mobile-${link.href}`} href={link.href} onClick={() => setMenuOpen(false)}>
              {link.label}
            </a>
          ))}
          <button
            className="nav__overlay-cta"
            onClick={() => {
              setMenuOpen(false);
              onStartProject();
            }}
          >
            Start a Project <span>&rarr;</span>
          </button>
        </div>
      </div>
    </>
  );
}
