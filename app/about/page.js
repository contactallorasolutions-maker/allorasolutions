"use client";

import { useEffect, useState } from "react";
import FooterSection from "../components/sections/FooterSection";
import HeaderNav from "../components/sections/HeaderNav";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/work", label: "Work" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" }
];

const stats = [
  { value: "2026", label: "Started" },
  { value: "2", label: "Ongoing Projects" },
  { value: "Global", label: "Client Reach" },
  { value: "Lean", label: "Core Team Model" }
];

const principles = [
  {
    title: "Clarity before complexity",
    text:
      "We prioritize clear goals, clear scope, and clear decisions before adding features, tooling, or process overhead."
  },
  {
    title: "Quality without theater",
    text:
      "We value practical excellence over presentation noise. The work should hold up in production, not just in slides."
  },
  {
    title: "Partnership mindset",
    text:
      "We work with clients as long-term partners, bringing honest recommendations and proactive execution."
  }
];

const collaborationPoints = [
  "Direct access to decision-makers, not account-management layers",
  "Weekly check-ins and asynchronous status visibility",
  "Documentation that keeps everyone aligned across teams",
  "Timezone-flexible collaboration for global clients"
];

export default function AboutPage() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("no-scroll", menuOpen);
    return () => document.body.classList.remove("no-scroll");
  }, [menuOpen]);

  return (
    <>
      <HeaderNav
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
        navLinks={navLinks}
        onStartProject={() => {
          window.location.href = "/contact";
        }}
      />
      <main id="top" className="page-shell">
        <section className="section page-intro">
          <div className="container">
            <header className="section-head">
              <p className="section-head__eyebrow">About</p>
              <h1>A focused studio built for modern execution.</h1>
              <p className="page-intro__lead">
                Since 2026, Allora Solutions has helped teams launch better digital products and
                growth systems with a practical, high-ownership approach.
              </p>
            </header>
          </div>
        </section>

        <section className="about section">
          <div className="container about__grid">
            <div className="about__copy">
              <p className="section-head__eyebrow">About Allora</p>
              <h2>
                Built in 2026.
                <br />
                Working worldwide.
              </h2>
              <p>
                Allora Solutions started in 2026 with one clear focus: build practical digital
                systems that help businesses move faster without compromising quality.
              </p>
              <p>
                We currently have 2 ongoing projects and take work from all over the world across
                web, product, content, AI automation, and growth operations.
              </p>
              <p>
                We stay intentionally lean so every project gets direct strategic and technical
                attention from start to finish.
              </p>
              <a href="/contact">Work with us &rarr;</a>
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

        <section className="section">
          <div className="container">
            <div className="page-stat-grid">
              {stats.map((item) => (
                <article key={item.label} className="page-stat">
                  <strong>{item.value}</strong>
                  <span>{item.label}</span>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <header className="section-head">
              <p className="section-head__eyebrow">What Defines Us</p>
              <h2>Simple principles, consistently applied.</h2>
            </header>
            <div className="page-grid page-grid--3">
              {principles.map((item) => (
                <article key={item.title} className="page-card">
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <header className="section-head">
              <p className="section-head__eyebrow">How We Collaborate</p>
              <h2>Built to work smoothly across teams and geographies.</h2>
            </header>
            <article className="page-card">
              <ul>
                {collaborationPoints.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </article>
            <div className="page-cta-strip">
              <p>If this operating style matches your team, we can move quickly.</p>
              <a href="/contact">Discuss your project &rarr;</a>
            </div>
          </div>
        </section>
      </main>
      <FooterSection navLinks={navLinks} />
    </>
  );
}
