"use client";

export default function HeroSection({ heroLines, onStartProject }) {
  return (
    <section className="hero">
      {/* Backgrounds */}
      <div className="hero__bg hero__bg--noise" aria-hidden="true" />
      <div className="hero__bg hero__bg--glow"  aria-hidden="true" />
      <div className="hero__bg hero__bg--grid"  aria-hidden="true" />

      <div className="hero__bg hero__bg--rule"  aria-hidden="true">
        <svg viewBox="0 0 1440 900" preserveAspectRatio="none" fill="none">
          <line x1="1120" y1="0" x2="320" y2="900" />
        </svg>
      </div>

      <div className="hero__blob" aria-hidden="true" />

      {/* Content */}
      <div className="hero__content">
        <div className="hero__spacer" />

        <span className="hero__eyebrow">
          <span className="hero__eyebrow-dot" aria-hidden="true" />
          Est. 2024&nbsp;&nbsp;·&nbsp;&nbsp;Digital Studio
        </span>

        <h1
          className="hero__title"
          aria-label={
            heroLines?.map((l) => l.join(" ")).join(" ") ??
            "We craft digital experiences."
          }
        >
          {(heroLines ?? [["We", "craft"], ["digital"], ["experiences."]]).map(
            (line, lineIndex) => (
              <span
                key={`hero-line-${lineIndex}`}
                className={`hero__line${lineIndex === 1 ? " hero__line--digital" : ""}`}
              >
                {line.map((word, wordIndex) => {
                  const delay = 0.58 + (lineIndex * 2 + wordIndex) * 0.09;
                  return (
                    <span className="hero-word-wrap" key={`${word}-${lineIndex}-${wordIndex}`}>
                      <span className="hero-word" style={{ animationDelay: `${delay}s` }}>
                        {word}
                      </span>
                    </span>
                  );
                })}
              </span>
            )
          )}
        </h1>

        <p className="hero__sub" aria-label="Websites, Apps, Content, Marketing, AI, Automation">
          {["Websites", "Apps", "Content", "Marketing", "AI", "Automation"].map((item, i, arr) => (
            <span key={item}>
              {item}
              {i < arr.length - 1 && (
                <span className="hero__sub-sep" aria-hidden="true">·</span>
              )}
            </span>
          ))}
        </p>

        <div className="hero__cta-row">
          <button className="hero__cta-primary" onClick={onStartProject}>
            Start a Project
            <i className="hero__cta-arrow" aria-hidden="true">→</i>
          </button>
          <a href="#work" className="hero__cta-ghost">
            See our Work ↓
          </a>
        </div>

        {/* Scroll indicator — bottom left */}
        <div className="hero__scroll-indicator" aria-hidden="true">
          <span className="hero__scroll-tick" />
          <span>Scroll</span>
        </div>

        {/* Year stamp — bottom right */}
        <div className="hero__year" aria-hidden="true">© 2024 Allora</div>
      </div>
    </section>
  );
}