export default function MarqueeSection() {
  return (
    <section className="marquee reveal">
      <div className="container marquee__inner">
        <p className="marquee__label">Trusted by</p>
        <div className="marquee__viewport" aria-label="Client marquee">
          <div className="marquee__track">
            <p>
              ÉLÉVÉ Concierge <b>&middot;</b> Humbal Dental Clinic <b>&middot;</b> Wyre.AI{" "}
              <b>&middot;</b>
            </p>
            <p aria-hidden="true">
              ÉLÉVÉ Concierge <b>&middot;</b> Humbal Dental Clinic <b>&middot;</b> Wyre.AI{" "}
              <b>&middot;</b>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
