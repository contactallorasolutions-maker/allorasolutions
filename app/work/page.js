"use client";

import { useEffect, useState } from "react";
import FooterSection from "../components/sections/FooterSection";
import HeaderNav from "../components/sections/HeaderNav";
import WorkSection from "../components/sections/WorkSection";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/work", label: "Work" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" }
];

const projects = [
  {
    name: "\u00C9L\u00C9V\u00C9",
    tags: ["Luxury Concierge", "Web App", "Hospitality"],
    description:
      "A concierge platform delivering premium lifestyle services with a refined digital experience tailored for high-end clients.",
    visualClass: "project-visual--eleve",
    coverImage: "/projects/eleve-cover.svg",
    href: "https://eleve-concierge.vercel.app/"
  },
  {
    name: "AI Receptionist for a hospital",
    tags: ["Healthcare", "AI Assistant", "Patient Support"],
    description:
      "An AI receptionist workflow designed to handle hospital front-desk interactions, appointment routing, and patient communication at scale.",
    visualClass: "project-visual--hospital",
    coverImage: "/projects/hospital-ai-cover.svg",
    href: "/contact"
  }
];

const workPillars = [
  "Live products",
  "Strategy + execution",
  "Fast feedback loops",
  "Global delivery"
];

const deliveryStandards = [
  {
    title: "Business-first scoping",
    text:
      "We define success metrics before designing screens, so product decisions stay tied to revenue, retention, and operational outcomes."
  },
  {
    title: "Design that drives action",
    text:
      "Every interface is built for clarity and conversion with UX patterns that reduce friction for users and buyers."
  },
  {
    title: "Engineering for scale",
    text:
      "We build reliable systems with maintainable code, clean architecture, and measurable performance from day one."
  }
];

const workOutcomes = [
  {
    title: "What clients value",
    points: [
      "Clear milestones with weekly progress visibility",
      "Practical product decisions, not agency fluff",
      "Fast iteration cycles without losing quality"
    ]
  },
  {
    title: "What your team gains",
    points: [
      "A focused external product partner",
      "Production-ready assets and handoff clarity",
      "A growth-ready foundation after launch"
    ]
  }
];

export default function WorkPage() {
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
              <p className="section-head__eyebrow">Work</p>
              <h1>Projects built to perform in the real world.</h1>
              <p className="page-intro__lead">
                We partner with ambitious founders and teams to ship products that are not just
                visually strong, but operationally effective and commercially useful.
              </p>
            </header>
            <div className="page-pills">
              {workPillars.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </div>
        </section>

        <WorkSection projects={projects} />

        <section className="section">
          <div className="container">
            <header className="section-head">
              <p className="section-head__eyebrow">How We Work</p>
              <h2>High standards from kickoff to launch.</h2>
              <p className="section-head__sub">
                The goal is simple: help you move faster with fewer mistakes and stronger outputs.
              </p>
            </header>
            <div className="page-grid page-grid--3">
              {deliveryStandards.map((item) => (
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
              <p className="section-head__eyebrow">Expected Outcomes</p>
              <h2>More confidence, better execution, stronger momentum.</h2>
            </header>
            <div className="page-grid page-grid--2">
              {workOutcomes.map((block) => (
                <article key={block.title} className="page-card">
                  <h3>{block.title}</h3>
                  <ul>
                    {block.points.map((point) => (
                      <li key={`${block.title}-${point}`}>{point}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
            <div className="page-cta-strip">
              <p>
                If you want work that looks premium and performs in production, we should talk.
              </p>
              <a href="/contact">Start your project &rarr;</a>
            </div>
          </div>
        </section>
      </main>
      <FooterSection navLinks={navLinks} />
    </>
  );
}
