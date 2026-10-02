import { Link } from "react-router-dom";

const COMMERCIAL_PILLARS = [
  {
    num: "01",
    title: "Zero Operational Downtime",
    desc: "Precision brass and copper waveguides installed seamlessly beneath architectural finishes. Zero physical demolition, preserving continuous enterprise operations.",
  },
  {
    num: "02",
    title: "Executive Boardroom Conviction",
    desc: "South-West Nairutya stabilization for principal leadership, grounding strategic decisions and eliminating cognitive fatigue in high-stakes environments.",
  },
  {
    num: "03",
    title: "Degree-Accurate CAD Audits",
    desc: "Layering the 16 Vastu directional zones directly over architectural blueprints and geomagnetic satellite coordinates for exact cardinal alignment.",
  },
];

const COMMERCIAL_SECTORS = [
  {
    num: "01",
    title: "Corporate Headquarters and Executive Suites",
    zone: "South-West · Leadership Sanctum",
    desc: "Stabilizing the core leadership quadrant to foster executive conviction, investor trust, and organizational longevity.",
    image: "/images/hero-commercial.jpg",
  },
  {
    num: "02",
    title: "Commercial Towers and Financial Desks",
    zone: "North Vector · Kubera Flow",
    desc: "Aligning trading floors, circulation pathways, and wealth corridors for seamless liquidity velocity and high tenant retention.",
    image: "/images/lower image.jpg",
  },
  {
    num: "03",
    title: "Luxury Hospitality and Private Clubs",
    zone: "Center · Brahmasthan Resonance",
    desc: "Harmonizing central atriums and guest arrival thresholds for immediate sensory tranquility and elevated dwell time.",
    image: "/images/showcase-sanctuary-pool.jpg",
  },
];

export default function CommercialVastuPage() {
  return (
    <div className="page-commercial-vastu">
      
      {/* 1. FULL-SIZE HERO SECTION (CLEAN IMAGE WITHOUT ABOVE OVERLAY) */}
      <section className="hero-section">
        <img
          src="/images/hero-commercial.jpg"
          alt="High-Rise Commercial Spatial Architecture"
          className="hero-bg-image"
        />

        <div className="hero-container-editorial">
          <div className="hero-editorial-eyebrow">
            COMMERCIAL ADVISORY · ENTERPRISE GEOMANCY
          </div>
          <h1 className="hero-editorial-headline">
            Spatial geometry for<br />
            <span>enterprise momentum.</span>
          </h1>
          <p className="hero-editorial-desc">
            Calibrating corporate headquarters, commercial towers, and private investment offices with 100% zero-demolition precision.
          </p>
          <div className="hero-cta-row">
            <Link to="/contact" className="btn-pill-solid">
              <span>Schedule Executive Briefing</span>
              <span className="arrow">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* 2. BODY CONTENT IN EDITORIAL CONTAINER */}
      <div className="commercial-minimal-container" style={{ paddingTop: "80px" }}>
        
        {/* CORE PRACTICE PILLARS */}
        <section className="commercial-pillars-section">
          <div className="commercial-section-header">
            <span className="commercial-eyebrow">PRACTICE STANDARDS</span>
            <h2 className="commercial-section-title">Engineered for Enterprise Continuity</h2>
          </div>

          <div className="commercial-pillars-grid">
            {COMMERCIAL_PILLARS.map((pillar) => (
              <div key={pillar.num} className="commercial-pillar-item">
                <span className="pillar-num">{pillar.num}</span>
                <h3 className="pillar-heading">{pillar.title}</h3>
                <p className="pillar-text">{pillar.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* SECTORS SHOWCASE WITH IMAGES */}
        <section className="commercial-sectors-section">
          <div className="commercial-section-header">
            <span className="commercial-eyebrow">SECTORS</span>
            <h2 className="commercial-section-title">Institutional Deployments</h2>
          </div>

          <div className="commercial-sectors-grid">
            {COMMERCIAL_SECTORS.map((sector) => (
              <div key={sector.num} className="commercial-sector-card">
                <div className="sector-img-frame">
                  <img src={sector.image} alt={sector.title} className="sector-img" />
                </div>
                <div className="sector-info">
                  <div className="domain-top-line">
                    <span className="sector-num">{sector.num}</span>
                    <span className="domain-zone">{sector.zone}</span>
                  </div>
                  <h3 className="sector-title">{sector.title}</h3>
                  <p className="sector-desc">{sector.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* MINIMAL CLOSING */}
        <section className="commercial-closing">
          <div className="commercial-closing-inner">
            <span className="commercial-eyebrow">PRIVATE BRIEFING</span>
            <h2 className="commercial-closing-title">
              Align your commercial asset<br />
              <span className="commercial-title-italic">with directional clarity.</span>
            </h2>
            <p className="residential-closing-desc">
              Sunandha personally directs institutional audits under strict non-disclosure covenants across residences, commercial towers, and estate acquisitions worldwide.
            </p>
            <div className="commercial-btn-wrap">
              <Link to="/contact" className="commercial-cta-btn">
                <span>Schedule Executive Briefing</span>
                <span className="arrow">→</span>
              </Link>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
