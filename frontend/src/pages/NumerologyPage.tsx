import { useState } from "react";
import { Link } from "react-router-dom";

const FAQS = [
  { q: "What information is required for a numerology reading?", a: "A standard consultation requires your full legal name as per official records, your commonly used daily/professional name, and your complete date of birth (day, month, year)." },
  { q: "How is a Life Path Number calculated?", a: "A Life Path Number is calculated by reducing each component of your birth date (day, month, year) to single digits and then adding them together to derive the primary governing digit." },
  { q: "Can numerology be used for business names and branding?", a: "Yes. Commercial numerology evaluates brand names, corporate titles, domain names, and partnership compatibility against the industry sector and founders' primary numbers." },
  { q: "What is the difference between Numerology and Astro Numerology?", a: "Standard numerology analyzes patterns derived from names and dates alone. Astro Numerology integrates this numerical framework with your Vedic astrological birth chart and planetary cycles." },
  { q: "Can numerology predict future events?", a: "Numerology is a traditional interpretive framework for reflection, timing patterns, and self-awareness, designed to assist conscious, informed decision-making." },
];

export default function NumerologyPage() {
  const [activeFaq, setActiveFaq] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    setActiveFaq((prev) => (prev === idx ? null : idx));
  };

  return (
    <div className="page-numerology">
      {/* SECTION 1: HERO */}
      <section className="numerology-editorial-hero">
        <img src="/images/hero-numerology.jpg" alt="Every number carries a pattern - Sunandha Numerology" className="numerology-hero-bg" />
        <div className="numerology-hero-overlay"></div>
        <div className="container numerology-hero-content">
          <h1 className="numerology-hero-heading reveal-left reveal-delay-1">
            Every number carries a<br />
            pattern.
          </h1>
          <p className="numerology-hero-description reveal-on-scroll reveal-delay-2">
            A precise, reflective reading of names, birth dates and personal numbers—designed to clarify tendencies, timing and choice.
          </p>
          <div className="numerology-hero-cta reveal-on-scroll reveal-delay-3">
            <a href="#consultation-booking" className="btn-pill-solid">
              <span>Book Numerology Consultation</span>
              <span className="arrow">→</span>
            </a>
          </div>
        </div>
      </section>

      {/* SECTION 2: INTRODUCTION */}
      <section className="section-about" style={{ padding: "120px 0 100px", backgroundColor: "#FAF8F5" }}>
        <div className="container">
          <div className="numerology-intro-grid">
            <div className="numerology-intro-text-col reveal-left reveal-delay-1">
              <h2 className="numerology-intro-heading reveal-on-scroll reveal-delay-1">
                Numbers are considered<br />
                alongside the life you are<br />
                actually living.
              </h2>
              <p className="numerology-intro-desc reveal-on-scroll reveal-delay-2">
                Your questions matter. A consultation considers the patterns present in the name and date information, then interprets them in relation to work, relationships, timing or personal direction.
              </p>
              <div className="numerology-intro-link-wrap reveal-on-scroll reveal-delay-3">
                <a href="#consultation-booking" className="numerology-intro-link">
                  <span>Begin with your space</span>
                  <span className="arrow">→</span>
                </a>
              </div>
            </div>
            <div className="numerology-intro-img-col reveal-right reveal-delay-2">
              <div className="numerology-intro-img-frame">
                <img src="/images/numerology about.jpg" alt="A reading with context - Handwritten calculations and study desk" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: CORE METHODOLOGY */}
      <section className="numerology-pillars-section">
        <div className="container">
          <div className="numerology-section-header">
            <div className="numerology-section-eyebrow reveal-on-scroll reveal-delay-1">FOUNDATIONS</div>
            <h2 className="numerology-section-heading reveal-on-scroll reveal-delay-2">The Framework of a Reading</h2>
            <p className="numerology-section-lead reveal-on-scroll reveal-delay-3">
              Every consultation synthesizes key numerical facets to interpret personal, career, and timing patterns:
            </p>
          </div>
          <div className="numerology-pillars-grid">
            <div className="numerology-pillar-card reveal-on-scroll reveal-delay-1">
              <div className="numerology-pillar-num">01</div>
              <h3 className="numerology-pillar-title">Birth-Date Numbers</h3>
              <p className="numerology-pillar-desc">Decoding core date patterns that define natural tendencies and personal momentum.</p>
            </div>
            <div className="numerology-pillar-card reveal-on-scroll reveal-delay-2">
              <div className="numerology-pillar-num">02</div>
              <h3 className="numerology-pillar-title">Name Vibration</h3>
              <p className="numerology-pillar-desc">Exploring resonance from letter sequences in your personal and commercial signature.</p>
            </div>
            <div className="numerology-pillar-card reveal-on-scroll reveal-delay-3">
              <div className="numerology-pillar-num">03</div>
              <h3 className="numerology-pillar-title">Temporal Cycles</h3>
              <p className="numerology-pillar-desc">Mapping year and month rhythms to assist with timing, transitions, and phase planning.</p>
            </div>
            <div className="numerology-pillar-card reveal-on-scroll reveal-delay-4">
              <div className="numerology-pillar-num">04</div>
              <h3 className="numerology-pillar-title">Partnership Dynamics</h3>
              <p className="numerology-pillar-desc">Evaluating harmony between individual profiles, business names, and joint ventures.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: INTEGRATIVE STUDY (ASTRO NUMEROLOGY HIGHLIGHT) */}
      <section className="numerology-astro-banner">
        <div className="container">
          <div className="numerology-astro-grid">
            <div className="numerology-astro-text reveal-left reveal-delay-1">
              <div className="numerology-astro-eyebrow">INTEGRATIVE PRACTICE</div>
              <h2 className="numerology-astro-heading">When Numbers Meet the Stars</h2>
              <p className="numerology-astro-desc">
                Traditional numerology and Vedic astrology approach personal understanding from complementary angles. An Astro Numerology session brings both perspectives into a single unified consultation.
              </p>
              <Link to="/astro-numerology" className="btn-pill-solid">
                <span>Explore Astro Numerology</span>
                <span className="arrow">→</span>
              </Link>
            </div>
            <div className="numerology-astro-action reveal-scale reveal-delay-2">
              <div style={{ fontFamily: "var(--font-display)", fontSize: "5.5rem", color: "rgba(212, 176, 123, 0.25)", lineHeight: 1, letterSpacing: "4px", userSelect: "none" }}>
                01 · 09
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6: FAQ */}
      <section className="section-faq-wisdom" style={{ padding: "110px 0", backgroundColor: "#FFFFFF" }}>
        <div className="container">
          <div className="faq-layout-grid">
            <div className="faq-left-sticky reveal-left reveal-delay-1">
              <div className="section-eyebrow">
                <span>Frequently Asked</span>
              </div>
              <h2 className="faq-main-heading">Questions About Numerology</h2>
              <p className="faq-left-caption">
                Clear, practical insights into consultation preparation, methodology, and session format.
              </p>
            </div>
            <div className="accordion-list reveal-right reveal-delay-2">
              {FAQS.map((faq, idx) => (
                <div key={idx} className={`accordion-item ${activeFaq === idx ? "active" : ""}`}>
                  <div className="accordion-header" onClick={() => toggleFaq(idx)}>
                    <div className="accordion-header-left">
                      <span className="accordion-index">{String(idx + 1).padStart(2, "0")}</span>
                      <span>{faq.q}</span>
                    </div>
                    <span className="accordion-icon">{activeFaq === idx ? "−" : "+"}</span>
                  </div>
                  <div className="accordion-body">{faq.a}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 7: CLOSING CTA */}
      <section id="consultation-booking" className="section-quiet-cta">
        <div className="container">
          <div className="quiet-cta-content reveal-on-scroll reveal-delay-1">
            <h2 className="quiet-cta-heading">
              Your numbers carry insight<br />
              into your journey.
            </h2>
            <p className="quiet-cta-subheading">Let's explore them together.</p>
            <div className="quiet-cta-btn-wrap">
              <Link to="/contact" className="btn-quiet-pill">
                <span>Book Consultation</span>
                <span className="arrow">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
