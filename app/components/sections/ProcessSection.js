export default function ProcessSection({ processSteps }) {
  return (
    <section className="process section">
      <div className="container">
        <header className="section-head reveal">
          <p className="section-head__eyebrow">How We Work</p>
          <h2>
            Simple process.
            <br />
            Extraordinary output.
          </h2>
        </header>

        <div className="process__timeline reveal reveal-stagger">
          <div className="process__connector" aria-hidden="true" />
          {processSteps.map((item) => (
            <article className="process-step" key={item.step}>
              <p className="process-step__num">Step {item.step}</p>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
