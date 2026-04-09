export default function WorkSection({ projects }) {
  return (
    <section id="work" className="work section">
      <div className="container">
        <header className="section-head reveal">
          <p className="section-head__eyebrow">Selected Work</p>
          <h2>Three projects in motion.</h2>
          <p className="section-head__sub">Real work. Real results. More on the way.</p>
        </header>

        <div className="work__list reveal reveal-stagger">
          {projects.map((project) => (
            <article key={project.name} className="project-card interactive" data-cursor="view">
              <div className="project-card__visual">
                <div className={`project-visual ${project.visualClass}`} aria-hidden="true">
                  <div className="project-visual__frame">
                    <div className="project-visual__bar" />
                    {project.coverImage ? (
                      <img
                        src={project.coverImage}
                        alt={`${project.name} cover`}
                        className="project-visual__cover"
                        loading="lazy"
                      />
                    ) : (
                      <div className="project-visual__lines" />
                    )}
                  </div>
                </div>
              </div>
              <div className="project-card__info">
                <span className="project-card__status">
                  <i />
                  Ongoing
                </span>
                <h3>{project.name}</h3>
                <div className="project-card__tags">
                  {project.tags.map((tag) => (
                    <span key={`${project.name}-${tag}`}>{tag}</span>
                  ))}
                </div>
                <p>{project.description}</p>
                <a href={project.href} target="_blank" rel="noopener noreferrer">
                  <span>View Project</span>
                  <em>&rarr;</em>
                </a>
              </div>
            </article>
          ))}
        </div>

        <a href="#contact" className="work__teaser reveal">
          <span>+</span>
          <p>Next project could be yours</p>
        </a>
      </div>
    </section>
  );
}
