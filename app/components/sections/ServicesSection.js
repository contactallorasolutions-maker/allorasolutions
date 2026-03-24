export default function ServicesSection({
  services,
  openServiceId,
  onToggleService,
  onStartProject
}) {
  return (
    <section id="services" className="section">
      <div className="container">
        <div className="services__head reveal">
          <div>
            <p className="section-head__eyebrow">What We Do</p>
            <h2>
              Everything your
              <br />
              brand needs.
            </h2>
          </div>
          <p>From zero to launch and beyond - we are the only team you need.</p>
        </div>

        <div className="services__list reveal">
          {services.map((service) => {
            const open = openServiceId === service.id;
            return (
              <div className={`service-row ${open ? "service-row--expanded" : ""}`} key={service.id}>
                <button
                  className="service-row__trigger"
                  onClick={() => onToggleService(service.id)}
                  aria-expanded={open}
                >
                  <span className="service-row__num">{String(service.id).padStart(2, "0")}</span>
                  <span className="service-row__name">{service.name}</span>
                  <span className="service-row__desc">{service.short}</span>
                  <span className="service-row__arrow">&rarr;</span>
                </button>
                <div className={`service-row__panel ${open ? "is-open" : ""}`}>
                  <ul>
                    {service.details.map((detail) => (
                      <li key={`${service.id}-${detail}`}>{detail}</li>
                    ))}
                  </ul>
                  <button className="service-row__quote" onClick={onStartProject}>
                    Get a Quote <span>&rarr;</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
