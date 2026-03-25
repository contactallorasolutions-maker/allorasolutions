"use client";

import { useEffect, useRef, useState } from "react";
import FooterSection from "../components/sections/FooterSection";
import HeaderNav from "../components/sections/HeaderNav";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/work", label: "Work" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" }
];

const contactHighlights = [
  {
    title: "Fast response",
    text: "You will receive an initial response within 24 hours with suggested next steps."
  },
  {
    title: "Global collaboration",
    text: "We work with teams across regions with timezone-aware communication and delivery."
  },
  {
    title: "Practical planning",
    text: "Expect clear scope, realistic timelines, and transparent cost framing early."
  }
];

const briefChecklist = [
  "Business context and current challenge",
  "Desired outcome and success metric",
  "Target timeline or launch window",
  "Existing stack or tools in use",
  "Estimated budget range (if available)"
];

const faqs = [
  {
    question: "How soon can we start?",
    answer:
      "After initial alignment, most engagements can start within 1-2 weeks depending on scope and readiness."
  },
  {
    question: "Do you work with early-stage teams?",
    answer:
      "Yes. We work with startups and established businesses, adjusting scope to stage, constraints, and goals."
  },
  {
    question: "Can we start with one project and expand later?",
    answer:
      "Absolutely. Many clients start with a focused project and then continue with a growth or execution retainer."
  },
  {
    question: "Do you sign NDAs?",
    answer:
      "Yes. We can work under NDA when confidentiality is required."
  }
];

export default function ContactPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const copiedTimer = useRef(null);

  useEffect(() => {
    document.body.classList.toggle("no-scroll", menuOpen);
    return () => {
      document.body.classList.remove("no-scroll");
      clearTimeout(copiedTimer.current);
    };
  }, [menuOpen]);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText("contact.allorasolutions@gmail.com");
      setCopied(true);
      clearTimeout(copiedTimer.current);
      copiedTimer.current = setTimeout(() => setCopied(false), 1600);
    } catch {
      setCopied(false);
    }
  };

  return (
    <>
      <HeaderNav
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
        navLinks={navLinks}
        onStartProject={() => {}}
      />
      <main id="top" className="page-shell">
        <section className="section page-intro">
          <div className="container">
            <header className="section-head">
              <p className="section-head__eyebrow">Contact</p>
              <h1>Tell us what you want to build next.</h1>
              <p className="page-intro__lead">
                Share your context and goals. We will help you shape the right execution plan with
                clear scope, timeline, and priorities.
              </p>
            </header>
          </div>
        </section>

        <section className="contact-cta section">
          <div className="container contact-cta__inner">
            <p className="section-head__eyebrow">Start Here</p>
            <h2>
              Let&apos;s build
              <br />
              something great.
            </h2>
            <p>
              Tell us your goals, timeline, and context. We respond within 24 hours and can start
              globally.
            </p>

            <div className="contact-cta__buttons">
              <a className="hero__cta-primary" href="mailto:contact.allorasolutions@gmail.com">
                Email Us <span>&rarr;</span>
              </a>
              <button className="contact-email-btn" onClick={copyEmail}>
                contact.allorasolutions@gmail.com
                <small className={`copy-tip ${copied ? "is-visible" : ""}`}>Copied!</small>
              </button>
            </div>

            <div className="contact-cta__meta">
              <span>Taking projects worldwide</span>
              <b>&middot;</b>
              <span>Response in 24hrs</span>
              <b>&middot;</b>
              <span>NDA available</span>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="page-grid page-grid--3">
              {contactHighlights.map((item) => (
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
            <div className="page-grid page-grid--2">
              <article className="page-card">
                <h3>What to include in your first message</h3>
                <ul>
                  {briefChecklist.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
              <article>
                <header className="section-head">
                  <p className="section-head__eyebrow">FAQ</p>
                  <h2>Common questions before kickoff.</h2>
                </header>
                <div className="page-faq">
                  {faqs.map((faq) => (
                    <details key={faq.question}>
                      <summary>{faq.question}</summary>
                      <p>{faq.answer}</p>
                    </details>
                  ))}
                </div>
              </article>
            </div>
          </div>
        </section>
      </main>
      <FooterSection navLinks={navLinks} />
    </>
  );
}
