
export default function AstroNumerologyPage() {
  return (
    <div className="page-astro-numerology">
      {/* SECTION 1: HERO */}
      <section className="hero-section">
        <img src="/images/astro numerology hero.jpg" alt="When numbers meet the movement of the cosmos - Sunandha Astro Numerology" className="hero-bg-image" />
        <div className="hero-editorial-overlay"></div>
        <div className="hero-architectural-wireframe reveal-scale reveal-delay-2">
          <span className="hero-wireframe-label">ASTRO · NUMERICAL ROTATION</span>
        </div>
        <div className="hero-container-editorial">
          <div className="hero-editorial-eyebrow reveal-on-scroll reveal-delay-1">ASTRO NUMEROLOGY</div>
          <h1 className="hero-editorial-headline reveal-left reveal-delay-1">
            When numbers meet the<br />
            movement of the cosmos.
          </h1>
          <p className="hero-editorial-desc reveal-on-scroll reveal-delay-2">
            A combined interpretation of numerical pattern and astrological influence, shaped around the person and the question.
          </p>
          <div className="hero-cta-row reveal-on-scroll reveal-delay-3">
            <a href="#consultation-booking" className="btn-pill-solid">
              <span>Book Consultation</span>
              <span className="arrow">→</span>
            </a>
          </div>
        </div>
        <div className="hero-bottom-indicator">
          <span className="hero-indicator-dot"></span>
        </div>
      </section>

      {/* SECTION 2: INTRODUCTION (THE COMBINED VIEW) */}
      <section className="section-about">
        <div className="container">
          <div className="about-energy-grid">
            <div className="about-energy-img-col reveal-left reveal-delay-1">
              <div className="about-energy-img-frame">
                <img src="/images/astro intro.jpg" alt="The combined view - Concentric oculus architecture and timing" />
              </div>
            </div>
            <div className="about-energy-text-col reveal-right reveal-delay-2">
              <div className="about-energy-eyebrow reveal-on-scroll reveal-delay-1">THE COMBINED VIEW</div>
              <h2 className="about-energy-heading reveal-on-scroll reveal-delay-2">
                Pattern is read alongside<br />
                influence and timing.
              </h2>
              <p className="about-energy-desc reveal-on-scroll reveal-delay-3">
                Astro Numerology begins with accurate birth details, maps the numerological pattern and considers relevant astrological influence. The value lies in a combined interpretation—not two disconnected reports.
              </p>
              <div className="about-energy-bottom-row reveal-on-scroll reveal-delay-4">
                <div className="about-energy-keywords">
                  BIRTH PATTERN · COSMIC TIMING · NAME RESONANCE<br />
                  PLANETARY TRANSIT · INTEGRATED CLARITY
                </div>
                <div className="about-compass-rose" aria-label="Cosmic Planetary Alignment">
                  <div className="about-compass-crosshairs"></div>
                  <span className="about-compass-n">N</span>
                  <div className="about-compass-pointer"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: A LAYERED INTERPRETATION (DARK EDITORIAL) */}
      <section className="section-layered-interpretation">
        <div className="container">
          <div className="layered-interpretation-grid">
            <div className="layered-left-col reveal-left reveal-delay-1">
              <span className="layered-eyebrow reveal-on-scroll reveal-delay-1">A LAYERED INTERPRETATION</span>
              <h2 className="layered-headline reveal-on-scroll reveal-delay-2">
                Two systems. One<br />
                personal reading.
              </h2>
              <div className="layered-steps-stack">
                {["Birth Details", "Numerological Pattern", "Astrological Influence", "Combined Analysis", "Personal Guidance"].map((name, i) => (
                  <div key={i} className={`layered-step-item reveal-on-scroll reveal-delay-${i + 1}`}>
                    <span className="layered-step-index">{String(i + 1).padStart(2, "0")}</span>
                    <h3 className="layered-step-title">{name}</h3>
                  </div>
                ))}
              </div>
              <div className="layered-bottom-note reveal-on-scroll reveal-delay-6">
                <span>•</span>
                <span>SEQUENCE REVEALS ONE STAGE AT A TIME</span>
              </div>
            </div>
            <div className="layered-right-col reveal-right reveal-delay-2">
              <div className="layered-right-text-box">
                <p className="layered-right-desc">
                  Numbers reveal pattern. Astrology adds timing and influence. Their intersection creates a richer perspective.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: FULL-WIDTH INTENTIONAL READING BANNER */}
      <section className="section-spaces-intention">
        <div className="space-intention-banner reveal-scale reveal-delay-1" style={{ minHeight: "480px" }}>
          <img src="/images/lower image.jpg" alt="A personal reading shaped around the person and the question - Sunandha" className="space-intention-bg" />
          <div className="space-intention-overlay"></div>
          <div className="space-intention-content">
            <div className="space-intention-left">
              <span className="space-intention-eyebrow">A COMBINED PERSPECTIVE</span>
              <h2 className="space-intention-title">
                A personal reading shaped<br />around the person and the question.
              </h2>
              <div className="space-intention-tags">
                <span>— Birth Pattern Analysis</span>
                <span>— Planetary & Timing Influence</span>
                <span>— Name Resonance</span>
                <span>— Life Transitions & Direction</span>
                <span>— Personal Clarity</span>
              </div>
            </div>
            <div className="space-intention-right">
              <a href="#consultation-booking" className="space-intention-link">
                <span>Schedule Reading</span>
                <span className="arrow">→</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6: QUIET CLOSING CTA */}
      <section id="consultation-booking" className="section-quiet-cta">
        <div className="container">
          <div className="quiet-cta-content reveal-on-scroll reveal-delay-1">
            <h2 className="quiet-cta-heading">
              Look at your story from<br />
              a different angle.
            </h2>
            <p className="quiet-cta-subheading">Let's understand it together.</p>
            <div className="quiet-cta-btn-wrap">
              <a href="mailto:hello@sunandha.com" className="btn-quiet-pill">
                <span>Book Consultation</span>
                <span className="arrow">→</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
