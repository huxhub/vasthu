import { useState } from "react";
import { Link } from "react-router-dom";

const RESIDENTIAL_PILLARS = [
  {
    num: "01",
    title: "Solar and Cardinal Pathways",
    desc: "Harmonizing everyday family circulation with the natural morning light vectors, evening cooling flows, and geomagnetic axes.",
  },
  {
    num: "02",
    title: "Zero Structural Demolition",
    desc: "Quietly rectifying directional flaws using subtle metallic wave conductors and mineral waveguides without breaking physical walls.",
  },
  {
    num: "03",
    title: "Individual Family Resonance",
    desc: "Personalizing master bedroom orientations, study quadrants, and children's zones to the astrological profiles of the inhabitants.",
  },
];

const RESIDENTIAL_ROOMS = [
  {
    num: "01",
    title: "The Master Sanctuary",
    zone: "South-West · Nairutya",
    element: "Earth (Prithvi)",
    desc: "Anchoring the master suite in the stability quadrant. Bed placed along the South or West wall ensures deep cellular rest, emotional grounding, and executive clarity for the primary decision-maker.",
    guidelines: ["Head facing South or East", "Heavy earth-toned materials", "Zero mirror reflection on the bed"],
    image: "/images/upper image.jpg",
  },
  {
    num: "02",
    title: "The Luminous Brahmasthan",
    zone: "Center · The Sanctum",
    element: "Space (Akasha)",
    desc: "The geometric center of the residence must remain luminous, open, and structurally unburdened, allowing subtle prana to circulate freely into every surrounding room.",
    guidelines: ["Double-height void or skylight", "No structural columns or heavy walls", "Central family connection"],
    image: "/images/about image.jpg",
  },
  {
    num: "03",
    title: "The Water and Stillness Pavilion",
    zone: "North-East · Ishanya",
    element: "Water (Jala)",
    desc: "The divine clarity quadrant receiving early morning ultraviolet solar rays. Ideal for meditation, serene reflection, pools, and clear sightlines.",
    guidelines: ["Low elevation and water features", "Expansive glass and morning sun", "Clutter-free sacred space"],
    image: "/images/showcase-sanctuary-pool.jpg",
  },
  {
    num: "04",
    title: "The Culinary Hearth",
    zone: "South-East · Agni",
    element: "Fire (Tejas)",
    desc: "Governs the metabolic vitality of the household. Positioning the cooking hob to face the rising East sun enhances nourishment and family warmth.",
    guidelines: ["East-facing cooking orientation", "Physical separation of water and fire", "Warm copper and stone finishes"],
    image: "/images/lower image.jpg",
  },
];

const NINE_QUADRANTS = [
  {
    code: "NW",
    dir: "North-West",
    name: "Vayu (Wind)",
    function: "Guest Suites, Motion and Social Harmony",
  },
  {
    code: "N",
    dir: "North",
    name: "Kubera (Treasury)",
    function: "Career Momentum, Study and Inflow",
  },
  {
    code: "NE",
    dir: "North-East",
    name: "Ishanya (Clarity)",
    function: "Meditation, Water Sanctum and Intuition",
  },
  {
    code: "W",
    dir: "West",
    name: "Varuna (Rain)",
    function: "Children's Chambers, Dining and Study",
  },
  {
    code: "C",
    dir: "Center",
    name: "Brahmasthan",
    function: "The Open Sanctum and Cosmic Breathing",
  },
  {
    code: "E",
    dir: "East",
    name: "Indra (Sun)",
    function: "Main Entrance, Foyer and Vital Health",
  },
  {
    code: "SW",
    dir: "South-West",
    name: "Nairutya (Earth)",
    function: "Master Suite, Stability and Anchor",
  },
  {
    code: "S",
    dir: "South",
    name: "Yama (Ground)",
    function: "Restful Sleep and Heavy Storage",
  },
  {
    code: "SE",
    dir: "South-East",
    name: "Agni (Fire)",
    function: "Kitchen, Thermal Energy and Vitality",
  },
];

const PRE_PURCHASE_CHECKS = [
  {
    step: "01",
    title: "Gradient and Slope Evaluation",
    desc: "Verifying natural plot inclination towards the North and East to invite positive solar and geomagnetic currents.",
  },
  {
    step: "02",
    title: "Golden Ratio Proportions",
    desc: "Assessing dimensional harmony (1:1 to 1:1.6) to avoid irregular missing corners that create localized energy voids.",
  },
  {
    step: "03",
    title: "Arterial Road Hit Audit",
    desc: "Analyzing approach roads (Vithi Shula) to ensure positive energetic trajectory rather than disruptive frontal force.",
  },
  {
    step: "04",
    title: "Subterranean Energy Survey",
    desc: "Scanning for underground water veins and geopathic disturbances prior to construction or purchase commitment.",
  },
];

export default function ResidentialVastuPage() {
  const [selectedQuadrant, setSelectedQuadrant] = useState<number>(4);

  return (
    <div className="page-residential-vastu">
      
      {/* 1. FULL-SIZE HERO SECTION (CLEAN IMAGE WITHOUT ABOVE OVERLAY) */}
      <section className="hero-section">
        <img
          src="/images/hero-residential.jpg"
          alt="Serene Luxury Residential Vastu Architecture"
          className="hero-bg-image"
        />

        <div className="hero-container-editorial">
          <div className="hero-editorial-eyebrow">
            RESIDENTIAL ADVISORY · SANCTUARY ARCHITECTURE
          </div>
          <h1 className="hero-editorial-headline">
            Spatial wisdom for<br />
            <span>the living sanctuary.</span>
          </h1>
          <p className="hero-editorial-desc">
            Harmonizing private villas, family estates, and luxury penthouses with classical solar axes and five-element balance.
          </p>
          <div className="hero-cta-row">
            <Link to="/contact" className="btn-pill-solid">
              <span>Book Residential Consultation</span>
              <span className="arrow">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* 2. BODY CONTENT IN EDITORIAL CONTAINER */}
      <div className="residential-minimal-container" style={{ paddingTop: "80px" }}>
        
        {/* CORE PRACTICE PILLARS */}
        <section className="residential-pillars-section">
          <div className="residential-section-header">
            <span className="residential-eyebrow">DESIGN HARMONY</span>
            <h2 className="residential-section-title">A Living Home in Balance</h2>
          </div>

          <div className="residential-pillars-grid">
            {RESIDENTIAL_PILLARS.map((pillar) => (
              <div key={pillar.num} className="residential-pillar-item">
                <span className="pillar-num">{pillar.num}</span>
                <h3 className="pillar-heading">{pillar.title}</h3>
                <p className="pillar-text">{pillar.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* INTERACTIVE 9-QUADRANT MANDALA MATRIX */}
        <section className="residential-mandala-section">
          <div className="residential-section-header">
            <span className="residential-eyebrow">SPATIAL COMPASS</span>
            <h2 className="residential-section-title">The 9-Quadrant Living Matrix</h2>
            <p className="mandala-header-desc">
              Select any cardinal zone of the residential plan to examine its architectural designation and energetic function.
            </p>
          </div>

          <div className="residential-mandala-grid-layout">
            <div className="mandala-3x3-grid">
              {NINE_QUADRANTS.map((quad, index) => (
                <button
                  key={quad.code}
                  type="button"
                  onClick={() => setSelectedQuadrant(index)}
                  className={`mandala-quadrant-cell ${selectedQuadrant === index ? "is-selected" : ""}`}
                >
                  <span className="quad-code">{quad.code}</span>
                  <span className="quad-name">{quad.name}</span>
                  <span className="quad-dir">{quad.dir}</span>
                </button>
              ))}
            </div>

            <div className="mandala-detail-pane">
              <div className="mandala-detail-tag">
                <span>QUADRANT DETAIL</span>
                <span className="sep">·</span>
                <span>{NINE_QUADRANTS[selectedQuadrant].dir}</span>
              </div>
              <h3 className="mandala-detail-title">
                {NINE_QUADRANTS[selectedQuadrant].name}
              </h3>
              <div className="mandala-detail-function">
                <strong>Architectural Function:</strong>
                <p>{NINE_QUADRANTS[selectedQuadrant].function}</p>
              </div>
              <div className="mandala-detail-hint">
                <span>Vedic Principle</span>
                <p>
                  Properly activated through non-invasive metallic wave guides and unobstructed airflow to maintain whole-home equilibrium.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ROOM-BY-ROOM EDITORIAL SPREAD */}
        <section className="residential-rooms-section">
          <div className="residential-section-header">
            <span className="residential-eyebrow">ROOM BY ROOM</span>
            <h2 className="residential-section-title">The Sanctuary Suite in Practice</h2>
          </div>

          <div className="residential-rooms-list">
            {RESIDENTIAL_ROOMS.map((room) => (
              <div key={room.num} className="residential-room-editorial-row">
                <div className="room-img-col">
                  <div className="room-img-frame">
                    <img src={room.image} alt={room.title} className="room-img" />
                  </div>
                </div>
                <div className="room-content-col">
                  <div className="room-meta-top">
                    <span className="room-num">{room.num}</span>
                    <span className="room-zone">{room.zone}</span>
                    <span className="room-element">{room.element}</span>
                  </div>
                  <h3 className="room-heading">{room.title}</h3>
                  <p className="room-desc">{room.desc}</p>
                  
                  <div className="room-guidelines-box">
                    <span className="guidelines-label">Key Guidelines:</span>
                    <ul className="guidelines-list">
                      {room.guidelines.map((g) => (
                        <li key={g}>— {g}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* PRE-PURCHASE AUDIT */}
        <section className="residential-audit-section">
          <div className="residential-section-header">
            <span className="residential-eyebrow">PRE-PURCHASE ADVISORY</span>
            <h2 className="residential-section-title">Plot and Villa Evaluation Criteria</h2>
            <p className="mandala-header-desc">
              Essential evaluations before acquiring land, apartments, or private villas.
            </p>
          </div>

          <div className="residential-audit-grid">
            {PRE_PURCHASE_CHECKS.map((check) => (
              <div key={check.step} className="audit-step-card">
                <span className="audit-step-num">{check.step}</span>
                <h3 className="audit-step-title">{check.title}</h3>
                <p className="audit-step-desc">{check.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* MINIMAL CLOSING CTA */}
        <section className="residential-closing">
          <div className="residential-closing-inner">
            <span className="residential-eyebrow">PRIVATE ADVISORY</span>
            <h2 className="residential-closing-title">
              Let us understand<br />
              <span className="residential-title-italic">your residential space.</span>
            </h2>
            <p className="residential-closing-desc">
              Personalized private consultations for luxury villas, apartments, and land acquisitions worldwide directed personally by Sunandha.
            </p>
            <div className="residential-btn-wrap">
              <Link to="/contact" className="residential-cta-btn">
                <span>Book a Residential Consultation</span>
                <span className="arrow">→</span>
              </Link>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
