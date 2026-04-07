"use client";

import { useEffect, useRef, useState } from "react";
import AboutSection from "./components/sections/AboutSection";
import ContactOverlay from "./components/sections/ContactOverlay";
import ContactSection from "./components/sections/ContactSection";
import FooterSection from "./components/sections/FooterSection";
import HeaderNav from "./components/sections/HeaderNav";
import HeroSection from "./components/sections/HeroSection";
import MarqueeSection from "./components/sections/MarqueeSection";
import NumbersSection from "./components/sections/NumbersSection";
import ProcessSection from "./components/sections/ProcessSection";
import ServicesSection from "./components/sections/ServicesSection";
import TestimonialsSection from "./components/sections/TestimonialsSection";
import WorkSection from "./components/sections/WorkSection";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/work", label: "Work" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" }
];

const heroLines = [["We", "craft"], ["digital"], ["experiences."]];

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
    href: "#"
  }
];

const services = [
  {
    id: 1,
    name: "Websites",
    short: "From landing pages to full web platforms",
    details: [
      "Landing pages, multi-page sites, and conversion flows",
      "High-performance, responsive, accessible implementation",
      "CMS setup and launch optimization"
    ]
  },
  {
    id: 2,
    name: "Applications",
    short: "Web and mobile apps that scale with your growth",
    details: [
      "User journey mapping and product architecture",
      "Frontend and backend implementation with integrations",
      "Testing, release planning, and iteration support"
    ]
  },
  {
    id: 3,
    name: "Content Creation",
    short: "Strategy, copy, visuals - content that converts",
    details: [
      "Messaging strategy and campaign storytelling",
      "Conversion-focused copywriting and content systems",
      "Creative assets for web, social, and paid channels"
    ]
  },
  {
    id: 4,
    name: "Marketing",
    short: "Performance campaigns, SEO, and brand growth",
    details: [
      "Performance campaign setup and optimization",
      "SEO foundations and ongoing growth content planning",
      "Analytics, attribution, and KPI reporting"
    ]
  },
  {
    id: 5,
    name: "AI Chatbots",
    short: "Intelligent assistants trained on your business",
    details: [
      "Chatbot conversation design tailored to business goals",
      "Knowledge source ingestion and context-aware responses",
      "Support/CRM integration with handoff safeguards"
    ]
  },
  {
    id: 6,
    name: "Automations",
    short: "Eliminate repetitive work. Build smarter workflows.",
    details: [
      "Workflow mapping and automation opportunity analysis",
      "No-code, low-code, and custom automation execution",
      "Monitoring, fallback logic, and reliability hardening"
    ]
  }
];

const quoteWords = [
  "We",
  "don't",
  "just",
  "deliver",
  "work",
  "-",
  "we",
  "build",
  "partnerships",
  "that",
  "grow."
];

const processSteps = [
  {
    step: "01",
    title: "Discovery",
    description: "We dig deep into your goals, audience, and competition."
  },
  {
    step: "02",
    title: "Strategy",
    description: "We define the roadmap - no guesswork, just direction."
  },
  {
    step: "03",
    title: "Design & Build",
    description: "We create. You iterate. Every pixel and line is intentional."
  },
  {
    step: "04",
    title: "Launch",
    description: "We deploy, test, and ensure everything is flawless on day one."
  },
  {
    step: "05",
    title: "Grow",
    description: "Post-launch support, analytics, and continuous improvement."
  }
];

const testimonials = [
  {
    quote:
      "Working with Allora was unlike any agency experience. They delivered a website that actually converts - and they actually listened.",
    author: "Founder",
    company: "Project 1 Client Name"
  },
  {
    quote:
      "The AI chatbot they built handles 80% of our customer questions automatically. Game changer for our support team.",
    author: "CEO",
    company: "Project 2 Client Name"
  },
  {
    quote:
      "Their process is tight, communication is clear, and the output is stunning.",
    author: "Future Client",
    company: "Placeholder"
  }
];

const serviceNeeds = ["Websites", "Apps", "Content", "Marketing", "AI Chatbot", "Automation"];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openServiceId, setOpenServiceId] = useState(null);
  const [contactOpen, setContactOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const [selectedNeeds, setSelectedNeeds] = useState([]);
  const [formData, setFormData] = useState({ name: "", email: "", details: "" });
  const [formErrors, setFormErrors] = useState({});
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formLoading, setFormLoading] = useState(false);
  const testimonialsRef = useRef(null);
  const copiedTimer = useRef(null);

  useEffect(() => {
    const body = document.body;
    body.classList.toggle("no-scroll", menuOpen || contactOpen);
  }, [menuOpen, contactOpen]);

  useEffect(() => {
    const body = document.body;
    const nav = document.querySelector(".nav");
    const progressBar = document.querySelector(".scroll-progress__bar");

    const updateNavState = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const scrollMax = document.documentElement.scrollHeight - window.innerHeight;
      const percent = scrollMax > 0 ? (scrollTop / scrollMax) * 100 : 0;
      const projectVisuals = document.querySelectorAll(".project-visual");

      nav?.classList.toggle("nav--scrolled", scrollTop > 80);
      if (progressBar) {
        progressBar.style.width = `${Math.min(100, Math.max(percent, 0))}%`;
      }

      projectVisuals.forEach((visual) => {
        const card = visual.closest(".project-card");
        if (!card) {
          return;
        }
        const rect = card.getBoundingClientRect();
        const cardCenter = rect.top + rect.height / 2;
        const viewportCenter = window.innerHeight / 2;
        const delta = cardCenter - viewportCenter;
        const offset = Math.max(-30, Math.min(30, -delta * 0.07));
        visual.style.transform = `translateY(${offset}px) scale(1.02)`;
      });
    };

    const revealElements = Array.from(document.querySelectorAll(".reveal"));
    revealElements.forEach((element) => {
      if (element.classList.contains("reveal-stagger")) {
        Array.from(element.children).forEach((child, index) => {
          child.style.transitionDelay = `${index * 0.08}s`;
        });
      }
    });

    const revealObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            return;
          }
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.2 }
    );
    revealElements.forEach((element) => revealObserver.observe(element));

    const counterElements = Array.from(document.querySelectorAll(".stat__number[data-target]"));
    const counterObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            return;
          }
          const target = entry.target;
          const value = Number(target.getAttribute("data-target") || 0);
          const suffix = target.getAttribute("data-suffix") || "";
          const duration = 1300;
          const start = performance.now();

          const tick = (time) => {
            const progress = Math.min(1, (time - start) / duration);
            const eased = 1 - Math.pow(1 - progress, 3);
            const current = Math.round(value * eased);
            target.textContent = `${current}${suffix}`;
            if (progress < 1) {
              requestAnimationFrame(tick);
            }
          };

          requestAnimationFrame(tick);
          observer.unobserve(target);
        });
      },
      { threshold: 0.45 }
    );
    counterElements.forEach((element) => counterObserver.observe(element));

    const quoteStrip = document.querySelector(".quote-strip");
    const quoteObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            return;
          }
          entry.target.classList.add("quote-strip--visible");
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.3 }
    );
    if (quoteStrip) {
      quoteObserver.observe(quoteStrip);
    }

    const touchDevice =
      window.matchMedia("(pointer: coarse)").matches || navigator.maxTouchPoints > 0;

    let cleanupCursor = () => { };
    if (touchDevice) {
      body.classList.add("cursor-disabled");
    } else {
      const dot = document.getElementById("cursor-dot");
      const ring = document.getElementById("cursor-ring");
      let mouseX = window.innerWidth * 0.5;
      let mouseY = window.innerHeight * 0.5;
      let ringX = mouseX;
      let ringY = mouseY;
      let rafId = 0;

      const moveDot = (event) => {
        mouseX = event.clientX;
        mouseY = event.clientY;
        if (dot) {
          dot.style.left = `${mouseX}px`;
          dot.style.top = `${mouseY}px`;
        }
      };

      const animateRing = () => {
        ringX += (mouseX - ringX) * 0.16;
        ringY += (mouseY - ringY) * 0.16;
        if (ring) {
          ring.style.left = `${ringX}px`;
          ring.style.top = `${ringY}px`;
        }
        rafId = requestAnimationFrame(animateRing);
      };

      const hoverTargets = document.querySelectorAll("a, button, .interactive");
      const viewTargets = document.querySelectorAll('[data-cursor="view"]');
      const onHoverEnter = () => body.classList.add("cursor-hover");
      const onHoverLeave = () => {
        body.classList.remove("cursor-hover");
        body.classList.remove("cursor-view");
      };
      const onViewEnter = () => {
        body.classList.add("cursor-hover");
        body.classList.add("cursor-view");
      };
      const onViewLeave = () => body.classList.remove("cursor-view");

      hoverTargets.forEach((target) => {
        target.addEventListener("mouseenter", onHoverEnter);
        target.addEventListener("mouseleave", onHoverLeave);
      });
      viewTargets.forEach((target) => {
        target.addEventListener("mouseenter", onViewEnter);
        target.addEventListener("mouseleave", onViewLeave);
      });

      window.addEventListener("mousemove", moveDot);
      rafId = requestAnimationFrame(animateRing);

      cleanupCursor = () => {
        hoverTargets.forEach((target) => {
          target.removeEventListener("mouseenter", onHoverEnter);
          target.removeEventListener("mouseleave", onHoverLeave);
        });
        viewTargets.forEach((target) => {
          target.removeEventListener("mouseenter", onViewEnter);
          target.removeEventListener("mouseleave", onViewLeave);
        });
        window.removeEventListener("mousemove", moveDot);
        cancelAnimationFrame(rafId);
      };
    }

    const testimonialsTrack = testimonialsRef.current;
    let pointerDown = false;
    let startX = 0;
    let startScrollLeft = 0;
    let velocity = 0;
    let lastX = 0;
    let lastTime = 0;
    let momentumFrame = 0;

    const stopMomentum = () => cancelAnimationFrame(momentumFrame);
    const applyMomentum = () => {
      if (!testimonialsTrack) {
        return;
      }
      testimonialsTrack.scrollLeft -= velocity * 18;
      velocity *= 0.92;
      if (Math.abs(velocity) > 0.1) {
        momentumFrame = requestAnimationFrame(applyMomentum);
      }
    };

    const onPointerDown = (event) => {
      if (!testimonialsTrack || event.button !== 0) {
        return;
      }
      stopMomentum();
      pointerDown = true;
      testimonialsTrack.classList.add("is-dragging");
      startX = event.clientX;
      startScrollLeft = testimonialsTrack.scrollLeft;
      lastX = event.clientX;
      lastTime = performance.now();
    };

    const onPointerMove = (event) => {
      if (!pointerDown || !testimonialsTrack) {
        return;
      }
      const dx = event.clientX - startX;
      testimonialsTrack.scrollLeft = startScrollLeft - dx * 1.2;
      const now = performance.now();
      const elapsed = now - lastTime;
      if (elapsed > 0) {
        velocity = (event.clientX - lastX) / elapsed;
      }
      lastX = event.clientX;
      lastTime = now;
    };

    const onPointerUp = () => {
      if (!pointerDown || !testimonialsTrack) {
        return;
      }
      pointerDown = false;
      testimonialsTrack.classList.remove("is-dragging");
      momentumFrame = requestAnimationFrame(applyMomentum);
    };

    if (testimonialsTrack) {
      testimonialsTrack.addEventListener("pointerdown", onPointerDown);
      window.addEventListener("pointermove", onPointerMove);
      window.addEventListener("pointerup", onPointerUp);
      window.addEventListener("pointercancel", onPointerUp);
    }

    updateNavState();
    window.addEventListener("scroll", updateNavState, { passive: true });
    window.addEventListener("resize", updateNavState);

    return () => {
      revealObserver.disconnect();
      counterObserver.disconnect();
      quoteObserver.disconnect();
      window.removeEventListener("scroll", updateNavState);
      window.removeEventListener("resize", updateNavState);
      cleanupCursor();
      if (testimonialsTrack) {
        testimonialsTrack.removeEventListener("pointerdown", onPointerDown);
      }
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerup", onPointerUp);
      window.removeEventListener("pointercancel", onPointerUp);
      stopMomentum();
      clearTimeout(copiedTimer.current);
    };
  }, []);

  const toggleNeed = (need) => {
    setSelectedNeeds((prev) =>
      prev.includes(need) ? prev.filter((item) => item !== need) : [...prev, need]
    );
  };

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText("contact.allorasolutions@gmail.com");
      setCopied(true);
      clearTimeout(copiedTimer.current);
      copiedTimer.current = setTimeout(() => setCopied(false), 1600);
    } catch (error) {
      setCopied(false);
    }
  };

  const validateForm = () => {
    const nextErrors = {};
    const email = formData.email.trim();
    if (!formData.name.trim()) {
      nextErrors.name = "Please enter your name.";
    }
    if (!email) {
      nextErrors.email = "Please enter your email.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      nextErrors.email = "Please enter a valid email address.";
    }
    if (!selectedNeeds.length) {
      nextErrors.needs = "Select at least one service.";
    }
    if (!formData.details.trim()) {
      nextErrors.details = "Please tell us more about your project.";
    }
    return nextErrors;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const nextErrors = validateForm();
    setFormErrors(nextErrors);
    if (Object.keys(nextErrors).length) {
      setFormSubmitted(false);
      return;
    }
    setFormLoading(true);
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: process.env.NEXT_PUBLIC_WEB3FORMS_KEY || "47e1a5bc-3730-48d0-92b4-f474e56de261",
          subject: `New Project Inquiry from ${formData.name.trim()}`,
          from_name: "Allora Solutions Website",
          name: formData.name.trim(),
          email: formData.email.trim(),
          services: selectedNeeds.join(", "),
          details: formData.details.trim()
        })
      });
      const result = await response.json();
      if (result.success) {
        setFormSubmitted(true);
        setFormErrors({});
        setFormData({ name: "", email: "", details: "" });
        setSelectedNeeds([]);
      } else {
        setFormErrors({ submit: "Something went wrong. Please try again." });
      }
    } catch {
      setFormErrors({ submit: "Network error. Please try again." });
    } finally {
      setFormLoading(false);
    }
  };

  const handleToggleService = (serviceId) => {
    setOpenServiceId((prev) => (prev === serviceId ? null : serviceId));
  };

  return (
    <>
      <div className="scroll-progress" aria-hidden="true">
        <span className="scroll-progress__bar" />
      </div>
      <div id="cursor-dot" aria-hidden="true" />
      <div id="cursor-ring" aria-hidden="true">
        <span>VIEW</span>
      </div>

      <HeaderNav
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
        navLinks={navLinks}
        onStartProject={() => setContactOpen(true)}
      />

      <main id="top">
        <HeroSection heroLines={heroLines} onStartProject={() => setContactOpen(true)} />
        <MarqueeSection />
        <WorkSection projects={projects} />
        <ServicesSection
          services={services}
          openServiceId={openServiceId}
          onToggleService={handleToggleService}
          onStartProject={() => setContactOpen(true)}
        />
        <NumbersSection quoteWords={quoteWords} />
        <ProcessSection processSteps={processSteps} />
        <TestimonialsSection testimonials={testimonials} testimonialsRef={testimonialsRef} />
        <AboutSection />
        <ContactSection
          onStartProject={() => setContactOpen(true)}
          onCopyEmail={handleCopyEmail}
          copied={copied}
        />
      </main>

      <FooterSection navLinks={navLinks} />

      <ContactOverlay
        contactOpen={contactOpen}
        setContactOpen={setContactOpen}
        setFormSubmitted={setFormSubmitted}
        handleSubmit={handleSubmit}
        formErrors={formErrors}
        formData={formData}
        setFormData={setFormData}
        serviceNeeds={serviceNeeds}
        selectedNeeds={selectedNeeds}
        toggleNeed={toggleNeed}
        formSubmitted={formSubmitted}
        formLoading={formLoading}
      />
    </>
  );
}
