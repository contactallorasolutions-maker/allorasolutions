export default function TestimonialsSection({ testimonials, testimonialsRef }) {
  return (
    <section className="testimonials section">
      <div className="container">
        <header className="section-head reveal">
          <p className="section-head__eyebrow">Client Voices</p>
          <h2>What our clients say.</h2>
        </header>

        <div className="testimonials__viewport reveal" ref={testimonialsRef}>
          {testimonials.map((item, index) => (
            <article className="testimonial-card" key={`${item.author}-${index}`}>
              <p className="testimonial-card__stars">
                &#9733;&#9733;&#9733;&#9733;&#9733;
              </p>
              <p className="testimonial-card__mark">&quot;</p>
              <p className="testimonial-card__quote">{item.quote}</p>
              <p className="testimonial-card__author">
                <strong>{item.author}</strong>, {item.company}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
