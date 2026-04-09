export default function NumbersSection({ quoteWords }) {
  return (
    <section className="numbers section">
      <div className="container">
        <p className="numbers__eyebrow reveal">By the numbers</p>

        <div className="numbers__grid reveal reveal-stagger">
          <article className="stat">
            <p className="stat__number" data-target="3">
              0
            </p>
            <p className="stat__label">
              Active
              <br />
              Projects
            </p>
          </article>

          <article className="stat">
            <p className="stat__number" data-target="6">
              0
            </p>
            <p className="stat__label">
              Services
              <br />
              Offered
            </p>
          </article>

          <article className="stat">
            <p className="stat__number" data-target="100" data-suffix="%">
              0%
            </p>
            <p className="stat__label">
              Client
              <br />
              Commitment
            </p>
          </article>

          <article className="stat">
            <p className="stat__number stat__number--static">&infin;</p>
            <p className="stat__label">Ambition</p>
          </article>
        </div>

        <div className="quote-strip">
          <p>
            {quoteWords.map((word, index) => (
              <span key={`${word}-${index}`} style={{ transitionDelay: `${index * 0.06}s` }}>
                {word}
              </span>
            ))}
          </p>
          <span className="quote-strip__author">&mdash; Allora Solutions</span>
        </div>
      </div>
    </section>
  );
}
