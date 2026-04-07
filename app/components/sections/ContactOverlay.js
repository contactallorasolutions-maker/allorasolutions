export default function ContactOverlay({
  contactOpen,
  setContactOpen,
  setFormSubmitted,
  handleSubmit,
  formErrors,
  formData,
  setFormData,
  serviceNeeds,
  selectedNeeds,
  toggleNeed,
  formSubmitted,
  formLoading
}) {
  return (
    <div className={`cta-overlay ${contactOpen ? "cta-overlay--open" : ""}`}>
      <div className="cta-overlay__panel">
        <button
          className="cta-overlay__close"
          onClick={() => {
            setContactOpen(false);
            setFormSubmitted(false);
          }}
          aria-label="Close contact form"
        >
          x
        </button>

        <h3>Start a Project</h3>

        <form onSubmit={handleSubmit} noValidate>
          <label className={`form-field ${formErrors.name ? "has-error" : ""}`}>
            <span>Your name</span>
            <input
              type="text"
              value={formData.name}
              onChange={(event) =>
                setFormData((prev) => ({ ...prev, name: event.target.value }))
              }
              aria-invalid={Boolean(formErrors.name)}
            />
            {formErrors.name ? <small>{formErrors.name}</small> : null}
          </label>

          <label className={`form-field ${formErrors.email ? "has-error" : ""}`}>
            <span>Your email</span>
            <input
              type="email"
              value={formData.email}
              onChange={(event) =>
                setFormData((prev) => ({ ...prev, email: event.target.value }))
              }
              aria-invalid={Boolean(formErrors.email)}
            />
            {formErrors.email ? <small>{formErrors.email}</small> : null}
          </label>

          <div className={`form-field form-field--pills ${formErrors.needs ? "has-error" : ""}`}>
            <span>What do you need?</span>
            <div className="pill-wrap">
              {serviceNeeds.map((need) => (
                <button
                  type="button"
                  key={need}
                  className={`service-pill ${selectedNeeds.includes(need) ? "service-pill--selected" : ""}`}
                  onClick={() => toggleNeed(need)}
                >
                  {need}
                </button>
              ))}
            </div>
            {formErrors.needs ? <small>{formErrors.needs}</small> : null}
          </div>

          <label className={`form-field ${formErrors.details ? "has-error" : ""}`}>
            <span>Tell us more</span>
            <textarea
              rows={4}
              value={formData.details}
              onChange={(event) =>
                setFormData((prev) => ({ ...prev, details: event.target.value }))
              }
              aria-invalid={Boolean(formErrors.details)}
            />
            {formErrors.details ? <small>{formErrors.details}</small> : null}
          </label>

          <button className="form-submit" type="submit" disabled={formLoading}>
            {formLoading ? "Sending..." : "Submit"}
          </button>

          {formErrors.submit ? (
            <p className="form-error-msg">{formErrors.submit}</p>
          ) : null}

          <p className={`form-success ${formSubmitted ? "is-visible" : ""}`}>
            Thanks. We will get back to you within 24 hours.
          </p>
        </form>
      </div>
    </div>
  );
}
