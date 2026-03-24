export default function AboutSection() {
  return (
    <section id="about" className="about section">
      <div className="container about__grid reveal">
        <div className="about__copy">
          <p className="section-head__eyebrow">About Allora</p>
          <h2>
            A studio built
            <br />
            for the now.
          </h2>
          <p>
            Allora Solutions is a digital studio offering end-to-end services for brands that do
            not want to compromise. We combine strategic thinking, sharp design, and technical
            precision to deliver digital products that actually perform.
          </p>
          <p>
            We are small by design. Focused by choice. Every client gets our full attention - not
            a junior team.
          </p>
          <a href="#">Meet the Team &rarr;</a>
        </div>

        <div className="about__visual" aria-hidden="true">
          <div className="about-visual">
            <span className="about-visual__beam about-visual__beam--lime" />
            <span className="about-visual__beam about-visual__beam--violet" />
            <span className="about-visual__shape about-visual__shape--a" />
            <span className="about-visual__shape about-visual__shape--b" />
          </div>
        </div>
      </div>
    </section>
  );
}
