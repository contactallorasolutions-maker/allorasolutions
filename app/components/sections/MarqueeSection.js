export default function MarqueeSection() {
  return (
    <section className="marquee reveal">
      <div className="container marquee__inner">
        <p className="marquee__label">Trusted by</p>
        <div className="marquee__viewport" aria-label="Client marquee">
          <div className="marquee__track">
            <p>
              Client Name 1 <b>&middot;</b> Client Name 2 <b>&middot;</b> Ongoing Project A{" "}
              <b>&middot;</b> Ongoing Project B <b>&middot;</b> Your Brand Here <b>&middot;</b>
            </p>
            <p aria-hidden="true">
              Client Name 1 <b>&middot;</b> Client Name 2 <b>&middot;</b> Ongoing Project A{" "}
              <b>&middot;</b> Ongoing Project B <b>&middot;</b> Your Brand Here <b>&middot;</b>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
