"use client";

import { useEffect, useState } from "react";
import FooterSection from "../components/sections/FooterSection";
import HeaderNav from "../components/sections/HeaderNav";
import ServicesSection from "../components/sections/ServicesSection";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/work", label: "Work" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" }
];

const services = [
  {
    id: 1,
    name: "Websites",
    short: "Landing pages, company sites, and web platforms",
    details: [
      "Conversion-focused website strategy and UX",
      "Responsive implementation with performance optimization",
      "CMS setup, launch, and iteration support"
    ]
  },
  {
    id: 2,
    name: "Applications",
    short: "Custom web apps for internal and customer workflows",
    details: [
      "Product architecture and user flow design",
      "Frontend + backend development with integrations",
      "Testing, release management, and support"
    ]
  },
  {
    id: 3,
    name: "Content Creation",
    short: "Content systems that build trust and convert",
    details: [
      "Messaging and storytelling strategy",
      "Website copy, campaign content, and visual direction",
      "Content calendars for multi-channel execution"
    ]
  },
  {
    id: 4,
    name: "AI Chatbots",
    short: "Intelligent assistants trained on your business",
    details: [
      "Conversation design and workflow mapping",
      "Knowledge grounding from docs and FAQs",
      "Escalation logic with CRM/helpdesk integration"
    ]
  },
  {
    id: 5,
    name: "Automations",
    short: "Reduce repetitive work with reliable workflows",
    details: [
      "Ops workflow audit and automation roadmap",
      "No-code/low-code/custom implementation",
      "Monitoring, alerts, and fallback design"
    ]
  },
  {
    id: 6,
    name: "Marketing",
    short: "Growth campaigns, SEO, and performance tracking",
    details: [
      "Paid campaign setup and optimization",
      "SEO foundations and growth content strategy",
      "Analytics dashboards and KPI reporting"
    ]
  },
  {
    id: 7,
    name: "Business Development",
    short: "Go-to-market systems and pipeline acceleration",
    details: [
      "Offer positioning and GTM messaging",
      "Lead qualification and outreach sequences",
      "Partnership and channel development support"
    ]
  }
];

const servicesPillars = [
  "Web",
  "Apps",
  "Content",
  "AI Chatbots",
  "Automations",
  "Marketing",
  "Business Development"
];

const serviceValueBlocks = [
  {
    title: "One integrated team",
    text:
      "Design, engineering, automation, and growth are coordinated in one workflow, so your execution is faster and more coherent."
  },
  {
    title: "Built for business outcomes",
    text:
      "Our deliverables are tied to practical KPIs like lead quality, conversion rate, response speed, and team productivity."
  },
  {
    title: "Execution you can trust",
    text:
      "You get documented decisions, clear timelines, and transparent communication across every stage of delivery."
  }
];

const engagementModels = [
  {
    title: "Project Build",
    points: [
      "Best for clear scope and launch timelines",
      "Fixed milestones with structured reviews",
      "Ideal for websites, apps, and system upgrades"
    ]
  },
  {
    title: "Growth Retainer",
    points: [
      "Best for continuous execution and iteration",
      "Ongoing product, content, and marketing support",
      "Monthly planning tied to business priorities"
    ]
  },
  {
    title: "Advisory + Execution",
    points: [
      "Best for founder-led teams needing strategic support",
      "Decision support plus hands-on implementation",
      "Useful when speed and direction both matter"
    ]
  }
];

export default function ServicesPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openServiceId, setOpenServiceId] = useState(null);

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
              <p className="section-head__eyebrow">Services</p>
              <h1>Everything needed to build, launch, and grow.</h1>
              <p className="page-intro__lead">
                We work as a practical extension of your team across product, content, automation,
                and growth. The focus is outcomes, not activity.
              </p>
            </header>
            <div className="page-pills">
              {servicesPillars.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </div>
        </section>

        <ServicesSection
          services={services}
          openServiceId={openServiceId}
          onToggleService={(serviceId) =>
            setOpenServiceId((prev) => (prev === serviceId ? null : serviceId))
          }
          onStartProject={() => {
            window.location.href = "/contact";
          }}
        />

        <section className="section">
          <div className="container">
            <header className="section-head">
              <p className="section-head__eyebrow">Why Clients Choose Us</p>
              <h2>Clear strategy. Sharp execution. Reliable delivery.</h2>
            </header>
            <div className="page-grid page-grid--3">
              {serviceValueBlocks.map((item) => (
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
              <p className="section-head__eyebrow">Engagement Models</p>
              <h2>Choose the operating model that fits your stage.</h2>
            </header>
            <div className="page-grid page-grid--3">
              {engagementModels.map((item) => (
                <article key={item.title} className="page-card">
                  <h3>{item.title}</h3>
                  <ul>
                    {item.points.map((point) => (
                      <li key={`${item.title}-${point}`}>{point}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
            <div className="page-cta-strip">
              <p>Need help choosing the right mix of services for your goals?</p>
              <a href="/contact">Book a discovery conversation &rarr;</a>
            </div>
          </div>
        </section>
      </main>
      <FooterSection navLinks={navLinks} />
    </>
  );
}
