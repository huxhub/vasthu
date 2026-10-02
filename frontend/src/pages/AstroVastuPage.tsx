
export default function AstroVastuPage() {
  return (
    <div className="page-astro-vastu">
      {/* SECTION 1: HERO */}
      <section className="astro-vastu-hero-section">
        <div className="astro-vastu-hero-container">
          <div className="astro-vastu-hero-grid">
            <div className="astro-vastu-hero-left">
              <h1 className="astro-vastu-heading reveal-left reveal-delay-1">
                Your space and your<br />
                planetary blueprint.
              </h1>
              <p className="astro-vastu-desc reveal-on-scroll reveal-delay-2">
                A personalised reading that connects birth information, planetary influence and the directional energy of the space you occupy.
              </p>
              <a href="#consultation-booking" className="btn-astro-vastu-pill reveal-on-scroll reveal-delay-3">
                <span>Book Astro Vastu Consultation</span>
                <span className="arrow">→</span>
              </a>
            </div>
            <div className="astro-vastu-hero-right">
              <div className="astro-vastu-hero-img-frame reveal-scale reveal-delay-2">
                <img src="/images/astro vasthu hero.jpg" alt="Astro Vastu Sacred Space and Planetary Blueprint" loading="eager" />
                <div className="astro-vastu-img-overlay"></div>
                <div className="astro-vastu-wireframe-grid"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: INTRODUCTION (ASTRO VASTU SYNTHESIS) */}
      <section className="section-about">
        <div className="container">
          <div className="about-energy-grid">
            <div className="about-energy-img-col reveal-left reveal-delay-1">
              <div className="about-energy-img-frame" style={{ borderRadius: "2px" }}>
                <img src="/images/vasthu about.jpg" alt="Astro Vastu Spatial Alignment and Natal Chart Synergy" />
              </div>
            </div>
            <div className="about-energy-text-col reveal-right reveal-delay-2">
              <div className="about-energy-eyebrow reveal-on-scroll reveal-delay-1">ASTRO VASTU SYNTHESIS</div>
              <h2 className="about-energy-heading reveal-on-scroll reveal-delay-2">
                Where direction meets<br />
                your personal planetary map.
              </h2>
              <p className="about-energy-desc reveal-on-scroll reveal-delay-3">
                Standard Vastu provides generalized directional rules. Astro Vastu calibrates your spatial compass to your Janam Kundali—activating zones governed by your strongest wealth-giving planets and harmonizing afflicted directions without structural demolition.
              </p>
              <div className="about-energy-bottom-row reveal-on-scroll reveal-delay-4">
                <div className="about-energy-keywords">
                  01 · HOROSCOPE DIRECTIONAL MAPPING &nbsp;·&nbsp; 02 · NON-DEMOLITION CURES<br />
                  03 · WEALTH HOUSE ACTIVATION &nbsp;·&nbsp; 04 · PLANETARY MUHURAT STABILIZERS
                </div>
                <div className="about-compass-rose" aria-label="Astro Vastu Directional Compass">
                  <div className="about-compass-crosshairs"></div>
                  <span className="about-compass-n">N</span>
                  <div className="about-compass-pointer"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: SPATIAL REALMS (ASTRO VASTU DOMAINS) */}
      <section className="section-astro-spatial-realms">
        <div className="container">
          <div className="astro-realms-header">
            <div className="astro-realms-eyebrow reveal-on-scroll reveal-delay-1">ASTRO VASTU SPATIAL DOMAINS</div>
            <h2 className="astro-realms-title reveal-on-scroll reveal-delay-2">
              Precision calibration for<br />
              home, work, and land.
            </h2>
          </div>
          <div className="astro-realms-grid">
            <div className="astro-realm-card reveal-on-scroll reveal-delay-1">
              <div className="astro-realm-img-frame">
                <img src="/images/upper image.jpg" alt="Residential Horoscopic Alignment" />
              </div>
              <span className="astro-realm-num">01</span>
              <h3 className="astro-realm-heading">Residential Horoscopic Alignment</h3>
              <p className="astro-realm-desc">
                Master bed vectors, study directions, and kitchen placements customized to the primary earner's benefic planets.
              </p>
            </div>
            <div className="astro-realm-card reveal-on-scroll reveal-delay-2">
              <div className="astro-realm-img-frame">
                <img src="/images/hero-commercial.jpg" alt="Commercial & Wealth Quadrants" />
              </div>
              <span className="astro-realm-num">02</span>
              <h3 className="astro-realm-heading">Commercial & Wealth Quadrants</h3>
              <p className="astro-realm-desc">
                Executive seating vectors and cash flow sectors tuned to 2nd and 11th house astrological lords for peak momentum.
              </p>
            </div>
            <div className="astro-realm-card reveal-on-scroll reveal-delay-3">
              <div className="astro-realm-img-frame">
                <img src="/images/showcase-sanctuary-pool.jpg" alt="Land, Villa & Directional Helixes" />
              </div>
              <span className="astro-realm-num">03</span>
              <h3 className="astro-realm-heading">Land, Villa & Directional Helixes</h3>
              <p className="astro-realm-desc">
                Plot geometry, entrance threshold calibration, and elemental metal stabilizers energized for planetary harmony.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: FULL-WIDTH INTENTIONAL READING BANNER */}
      <section className="section-spaces-intention">
        <div className="space-intention-banner reveal-scale reveal-delay-1" style={{ minHeight: "480px" }}>
          <img src="/images/lower image.jpg" alt="Astro Vastu Spatial Balance - Sunandha" className="space-intention-bg" />
          <div className="space-intention-overlay"></div>
          <div className="space-intention-content">
            <div className="space-intention-left">
              <span className="space-intention-eyebrow">ASTRO VASTU ALIGNMENT</span>
              <h2 className="space-intention-title">
                Calibrate the energy of your space<br />to your birth chart.
              </h2>
              <div className="space-intention-tags">
                <span>— Janam Kundali Spatial Compass Mapping</span>
                <span>— Directional Wealth & House Lord Activation</span>
                <span>— Zero-Demolition Elemental Stabilizers</span>
                <span>— Residential, Commercial & Villa Audits</span>
                <span>— Planetary Muhurat Remedy Activation</span>
              </div>
            </div>
            <div className="space-intention-right">
              <a href="#consultation-booking" className="space-intention-link">
                <span>Schedule Astro Vastu Audit</span>
                <span className="arrow">→</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: CLOSING CTA */}
      <section id="consultation-booking" className="section-quiet-cta">
        <div className="container">
          <div className="quiet-cta-content reveal-on-scroll reveal-delay-1">
            <h2 className="quiet-cta-heading">
              Align your physical space with<br />
              your astrological blueprint.
            </h2>
            <p className="quiet-cta-subheading">Private Astro Vastu consultations across India, UAE & worldwide.</p>
            <div className="quiet-cta-btn-wrap">
              <a href="mailto:hello@sunandha.com" className="btn-quiet-pill">
                <span>Book Astro Vastu Consultation</span>
                <span className="arrow">→</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
