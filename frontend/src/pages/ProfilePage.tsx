import { Link } from "react-router-dom";

const DISCIPLINES = [
  {
    num: "01",
    title: "Vedic Vastu Shastra",
    desc: "Cardinal orientation, solar trajectories, and five-element zoning derived directly from classical Sanskrit treatises including the Mayamata and Manasara.",
  },
  {
    num: "02",
    title: "Astro-Numerology",
    desc: "Harmonizing room allocations, functional zones, and entrance vectors with the natal charts and compound frequencies of the primary occupants.",
  },
  {
    num: "03",
    title: "Zero-Demolition Rectification",
    desc: "Invisibly redirecting subtle energy pathways and geopathic stress lines through calibrated copper, brass, and elemental waveguides without structural destruction.",
  },
  {
    num: "04",
    title: "Private Estate and High-Rise Living",
    desc: "Bespoke spatial audits tailored for vertical penthouses in Dubai, private estates in London, and commercial headquarters globally.",
  },
];

const PROTOCOL_STEPS = [
  {
    step: "01",
    phase: "Phase I",
    title: "Directional and Cardinal Audit",
    desc: "Comprehensive evaluation of the property's orientation, Brahmasthan sanctity, elevation grades, and water flow lines.",
  },
  {
    step: "02",
    phase: "Phase II",
    title: "Occupant Natal Mapping",
    desc: "Overlaying the planetary ephemerides and master numbers of the family or leadership team onto the physical floor plan.",
  },
  {
    step: "03",
    phase: "Phase III",
    title: "Subtle Energy Waveguides",
    desc: "Deploying precision metallic conductors and elemental remedies to neutralize directional defects quietly and invisibly.",
  },
  {
    step: "04",
    phase: "Phase IV",
    title: "Harmonized Vitality",
    desc: "Final verification of atmospheric tranquility, mental clarity, and enduring prosperity within the energized space.",
  },
];

export default function ProfilePage() {
  return (
    <div className="profile-bespoke-page">
      <div className="profile-bespoke-container">
        
        {/* ================================================================= */}
        {/* 1. EDITORIAL HEADER                                               */}
        {/* ================================================================= */}
        <header className="profile-bespoke-header">
          <div className="profile-bespoke-eyebrow">
            <span>THE PRACTITIONER</span>
            <span className="divider">/</span>
            <span>VEDIC SPATIAL ARCHITECTURE</span>
          </div>

          <h1 className="profile-bespoke-hero-title">
            Spatial harmony<br />
            <span className="profile-hero-serif-italic">through ancient geometry.</span>
          </h1>

          <p className="profile-bespoke-hero-lead">
            Sunandha bridges over two decades of classical Sanskrit shastras with the exacting demands of contemporary architectural design.
          </p>
        </header>

        {/* ================================================================= */}
        {/* 2. SPLIT PORTRAIT & BIOGRAPHICAL ESSAY                            */}
        {/* ================================================================= */}
        <section className="profile-bespoke-essay-section">
          <div className="profile-bespoke-essay-grid">
            
            {/* Left: Curated Portrait and Specification Meta */}
            <div className="profile-bespoke-portrait-col">
              <div className="profile-bespoke-portrait-frame">
                <img
                  src="/images/hero-profile.jpg"
                  alt="Sunandha - Master Practitioner of Vedic Spatial Architecture"
                  className="profile-bespoke-portrait-image"
                />
              </div>

              <div className="profile-portrait-caption">
                <div className="caption-name">Sunandha</div>
                <div className="caption-sub">Principal Practitioner · Spatial Bio-Energetics</div>
              </div>

              {/* Minimal Line-Based Meta Data */}
              <div className="profile-bespoke-meta-list">
                <div className="meta-line-item">
                  <span className="meta-line-label">PRACTICE FOUNDED</span>
                  <span className="meta-line-value">2002 · 22+ Years Experience</span>
                </div>
                <div className="meta-line-item">
                  <span className="meta-line-label">LINEAGE</span>
                  <span className="meta-line-value">Vedic Shastric Shishya Parampara</span>
                </div>
                <div className="meta-line-item">
                  <span className="meta-line-label">REMEDIATION PROTOCOL</span>
                  <span className="meta-line-value">100% Zero-Demolition Precision</span>
                </div>
                <div className="meta-line-item">
                  <span className="meta-line-label">GLOBAL REACH</span>
                  <span className="meta-line-value">Dubai · London · India · Worldwide</span>
                </div>
              </div>
            </div>

            {/* Right: Narrative Monograph */}
            <div className="profile-bespoke-narrative-col">
              <blockquote className="profile-bespoke-standout-quote">
                “A space is never neutral. It is a vibrating resonant chamber that either continually amplifies your clarity and vitality or quietly depletes it.”
              </blockquote>

              <div className="profile-bespoke-paragraphs">
                <p>
                  Sunandha’s journey began over two decades ago in the ancient scriptural archives of Varanasi and Kerala. Immersed in foundational texts—the <em>Mayamata</em>, <em>Manasara</em>, and <em>Brihat Samhita</em>—she discovered that true Vastu was never a collection of superstitions, but a rigorous, empirical science of cosmic orientation, magnetic grids, and gravitational balance.
                </p>

                <p>
                  In traditional practice, directional misalignments were often met with destructive demands: tearing down walls, relocating load-bearing pillars, or abandoning properties entirely. Recognizing the impracticality and energetic shock of structural demolition, Sunandha developed a proprietary protocol of metallic waveguides and elemental harmonics. By introducing calibrated brass, copper, and mineral conductors, energy pathways are redirected invisibly—preserving complete architectural integrity.
                </p>

                <p>
                  Today, her private practice serves royal residences, executive penthouses, and global corporate headquarters across the Middle East, Europe, and Asia, curating spaces where peace, intuition, and effortless success naturally take root.
                </p>
              </div>

              {/* Micro Metrics Strip */}
              <div className="profile-bespoke-metrics-strip">
                <div className="metric-box">
                  <span className="metric-number">22+</span>
                  <span className="metric-title">Years of Lineage</span>
                </div>
                <div className="metric-divider" />
                <div className="metric-box">
                  <span className="metric-number">1,400+</span>
                  <span className="metric-title">Spaces Harmonized</span>
                </div>
                <div className="metric-divider" />
                <div className="metric-box">
                  <span className="metric-number">100%</span>
                  <span className="metric-title">Non-Invasive Remediation</span>
                </div>
              </div>

              <div className="profile-bespoke-cta-wrap">
                <Link to="/contact" className="profile-bespoke-cta-btn">
                  <span>Request Private Consultation</span>
                  <span className="arrow">→</span>
                </Link>
              </div>

            </div>

          </div>
        </section>

        {/* ================================================================= */}
        {/* 3. DISCIPLINES OF PRACTICE (PURE MINIMAL LINED TABLE)             */}
        {/* ================================================================= */}
        <section className="profile-bespoke-disciplines-section">
          <div className="disciplines-header-wrap">
            <span className="disciplines-eyebrow">CORE DISCIPLINES</span>
            <h2 className="disciplines-title">Pillars of Practice</h2>
          </div>

          <div className="disciplines-lined-list">
            {DISCIPLINES.map((item) => (
              <div key={item.num} className="discipline-line-row">
                <div className="discipline-num">{item.num}</div>
                <div className="discipline-main">
                  <h3 className="discipline-heading">{item.title}</h3>
                  <p className="discipline-description">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ================================================================= */}
        {/* 4. THE 4-STAGE CONSULTATION PROTOCOL                              */}
        {/* ================================================================= */}
        <section className="profile-bespoke-protocol-section">
          <div className="protocol-header-wrap">
            <span className="protocol-eyebrow">METHODOLOGY</span>
            <h2 className="protocol-title">The Four Phases of Calibration</h2>
            <p className="protocol-subtext">
              A systematic, confidential process designed for total spatial equilibrium without disruption.
            </p>
          </div>

          <div className="protocol-grid-layout">
            {PROTOCOL_STEPS.map((step) => (
              <div key={step.step} className="protocol-step-item">
                <div className="step-top-row">
                  <span className="step-index">{step.step}</span>
                  <span className="step-phase-tag">{step.phase}</span>
                </div>
                <h3 className="step-heading">{step.title}</h3>
                <p className="step-description">{step.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ================================================================= */}
        {/* 5. CLOSING INVITATION                                             */}
        {/* ================================================================= */}
        <section className="profile-bespoke-closing">
          <div className="closing-content-box">
            <div className="closing-eyebrow-text">PRIVATE ADVISORY</div>
            <h2 className="closing-title-text">
              Let us examine your space<br />
              <span className="closing-serif-italic">with classical precision.</span>
            </h2>
            <p className="closing-paragraph-text">
              Direct, confidential advisory for residential properties, penthouse suites, and executive headquarters worldwide.
            </p>
            <div className="closing-action-wrap">
              <Link to="/contact" className="profile-bespoke-cta-btn">
                <span>Book a Consultation</span>
                <span className="arrow">→</span>
              </Link>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
