export default function ContactSection({ onStartProject, onCopyEmail, copied }) {
  return (
    <section id="contact" className="contact-cta section">
      <div className="contact-cta__bg" aria-hidden="true" />
      <div className="container contact-cta__inner reveal">
        <p className="contact-cta__ghost">Ready?</p>
        <h2>
          Let&apos;s build
          <br />
          <span>something great.</span>
        </h2>
        <p>Tell us about your project. We respond within 24 hours.</p>

        <div className="contact-cta__buttons">
          <button className="hero__cta-primary" onClick={onStartProject}>
            Start a Project <span>&rarr;</span>
          </button>
          <button className="contact-email-btn" onClick={onCopyEmail}>
            contact.allorasolutions@gmail.com
            <small className={`copy-tip ${copied ? "is-visible" : ""}`}>Copied!</small>
          </button>
        </div>

        <div className="contact-cta__meta">
          <span>Location: Your City</span>
          <b>&middot;</b>
          <span>Response in 24hrs</span>
          <b>&middot;</b>
          <span>NDA available</span>
        </div>
      </div>
    </section>
  );
}
