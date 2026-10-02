import { useRef, useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface ElementData {
  num: string;
  name: string;
  sanskrit: string;
  title: string;
  desc: string;
  direction: string;
  tags: string[];
  symbol: "space" | "air" | "fire" | "water" | "earth";
}

const ELEMENTS: ElementData[] = [
  {
    num: "01",
    name: "Space",
    sanskrit: "Akasha",
    title: "Space and Expansion",
    desc: "Governs the central Brahmasthan — allowing natural light and atmospheric energy to breathe unobstructed across every quadrant.",
    direction: "Center · Brahmasthan",
    tags: ["Brahmasthan", "Open Volume", "Acoustic Clarity"],
    symbol: "space",
  },
  {
    num: "02",
    name: "Air",
    sanskrit: "Vayu",
    title: "Air and Motion",
    desc: "Calibrates cross-ventilation and kinetic vitality in the North-West, sustaining mental clarity and lively social harmony.",
    direction: "North-West Vector",
    tags: ["North-West", "Cross-Ventilation", "Kinetic Flow"],
    symbol: "air",
  },
  {
    num: "03",
    name: "Fire",
    sanskrit: "Agni",
    title: "Fire and Transformation",
    desc: "Anchors metabolic vitality and executive drive in the South-East, transmuting raw focus into tangible commercial momentum.",
    direction: "South-East Zone",
    tags: ["South-East", "Thermal Balance", "Execution"],
    symbol: "fire",
  },
  {
    num: "04",
    name: "Water",
    sanskrit: "Jala",
    title: "Water and Fluidity",
    desc: "Channels emotional calm and financial replenishment through the North-East Ishanya zone with reflective stillness.",
    direction: "North-East Ishanya",
    tags: ["North-East", "Emotional Calm", "Fluid Wealth"],
    symbol: "water",
  },
  {
    num: "05",
    name: "Earth",
    sanskrit: "Prithvi",
    title: "Earth and Grounding",
    desc: "Provides structural mass and generational stability in the South-West, ensuring deeply restorative rest and enduring legacy.",
    direction: "South-West Nairutya",
    tags: ["South-West", "Structural Mass", "Stability"],
    symbol: "earth",
  },
];

/* -------------------------------------------------------------------------- */
/* 3D SCULPTURAL SYMBOLS (Procedural Ceramic / Matte-White Aesthetic)          */
/* -------------------------------------------------------------------------- */

function SculptureSpace() {
  return (
    <div className="pancha-sculpture-render pancha-sculpture-space">
      <svg viewBox="0 0 400 400" className="sculpture-svg" aria-label="Space Akasha Gyroscopic Geometry">
        <defs>
          <radialGradient id="spaceGrad" cx="35%" cy="30%" r="70%">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="45%" stopColor="#EAE6DE" />
            <stop offset="85%" stopColor="#C8C2B5" />
            <stop offset="100%" stopColor="#9C9587" />
          </radialGradient>
          <filter id="softShadow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="12" dy="24" stdDeviation="20" floodColor="#161513" floodOpacity="0.14" />
          </filter>
        </defs>
        <g filter="url(#softShadow)" className="spin-slow">
          {/* Concentric Gyroscope Rings */}
          <ellipse cx="200" cy="200" rx="150" ry="60" fill="none" stroke="url(#spaceGrad)" strokeWidth="18" transform="rotate(25 200 200)" />
          <ellipse cx="200" cy="200" rx="135" ry="54" fill="none" stroke="url(#spaceGrad)" strokeWidth="16" transform="rotate(-35 200 200)" />
          <ellipse cx="200" cy="200" rx="120" ry="48" fill="none" stroke="url(#spaceGrad)" strokeWidth="14" transform="rotate(80 200 200)" />
          <circle cx="200" cy="200" r="42" fill="url(#spaceGrad)" />
          <circle cx="185" cy="185" r="14" fill="#FFFFFF" opacity="0.6" />
        </g>
      </svg>
    </div>
  );
}

function SculptureAir() {
  // 8-blade helical vortex / aerodynamic swirl turbine (matching user screenshot)
  return (
    <div className="pancha-sculpture-render pancha-sculpture-air">
      <svg viewBox="0 0 400 400" className="sculpture-svg" aria-label="Air Vayu Helical Swirl Turbine">
        <defs>
          <linearGradient id="bladeGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="50%" stopColor="#E2DCD2" />
            <stop offset="100%" stopColor="#A8A090" />
          </linearGradient>
          <linearGradient id="bladeGrad2" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#F5F2EA" />
            <stop offset="60%" stopColor="#CCC4B4" />
            <stop offset="100%" stopColor="#8C8474" />
          </linearGradient>
          <filter id="airShadow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="16" dy="28" stdDeviation="22" floodColor="#161513" floodOpacity="0.16" />
          </filter>
        </defs>
        <g filter="url(#airShadow)" className="spin-medium">
          {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, idx) => (
            <path
              key={idx}
              d="M200,200 C240,140 310,120 340,160 C360,190 320,240 260,230 C220,225 200,200 200,200 Z"
              fill={idx % 2 === 0 ? "url(#bladeGrad1)" : "url(#bladeGrad2)"}
              transform={`rotate(${angle} 200 200)`}
            />
          ))}
          <circle cx="200" cy="200" r="28" fill="#ECE7DE" />
          <circle cx="192" cy="192" r="10" fill="#FFFFFF" opacity="0.8" />
        </g>
      </svg>
    </div>
  );
}

function SculptureFire() {
  // Prismatic faceted star / tetrahedron solar polyhedron
  return (
    <div className="pancha-sculpture-render pancha-sculpture-fire">
      <svg viewBox="0 0 400 400" className="sculpture-svg" aria-label="Fire Agni Crystalline Prismatic Polyhedron">
        <defs>
          <linearGradient id="fireFacet1" x1="20%" y1="0%" x2="80%" y2="100%">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="100%" stopColor="#D9D2C3" />
          </linearGradient>
          <linearGradient id="fireFacet2" x1="0%" y1="50%" x2="100%" y2="50%">
            <stop offset="0%" stopColor="#C4BCAC" />
            <stop offset="100%" stopColor="#8E8676" />
          </linearGradient>
          <linearGradient id="fireFacet3" x1="50%" y1="0%" x2="50%" y2="100%">
            <stop offset="0%" stopColor="#EAE5DA" />
            <stop offset="100%" stopColor="#ABA393" />
          </linearGradient>
          <filter id="fireShadow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="14" dy="26" stdDeviation="24" floodColor="#161513" floodOpacity="0.15" />
          </filter>
        </defs>
        <g filter="url(#fireShadow)" className="spin-wobble">
          {[0, 60, 120, 180, 240, 300].map((angle, i) => (
            <g key={i} transform={`rotate(${angle} 200 200)`}>
              <polygon points="200,200 200,45 255,140" fill={i % 2 === 0 ? "url(#fireFacet1)" : "url(#fireFacet3)"} />
              <polygon points="200,200 255,140 280,200" fill="url(#fireFacet2)" />
            </g>
          ))}
          <circle cx="200" cy="200" r="32" fill="#EAE5DB" />
          <polygon points="200,175 222,215 178,215" fill="#FFFFFF" opacity="0.9" />
        </g>
      </svg>
    </div>
  );
}

function SculptureWater() {
  // Fluid ribbon vortex / undulating organic torus
  return (
    <div className="pancha-sculpture-render pancha-sculpture-water">
      <svg viewBox="0 0 400 400" className="sculpture-svg" aria-label="Water Jala Undulating Flow Torus">
        <defs>
          <radialGradient id="waterGrad" cx="30%" cy="30%" r="70%">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="40%" stopColor="#E4DFD5" />
            <stop offset="75%" stopColor="#B3ACA0" />
            <stop offset="100%" stopColor="#7E776B" />
          </radialGradient>
          <filter id="waterShadow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="15" dy="25" stdDeviation="22" floodColor="#161513" floodOpacity="0.14" />
          </filter>
        </defs>
        <g filter="url(#waterShadow)" className="spin-slow">
          <path
            d="M200,60 C280,60 340,120 340,200 C340,280 280,340 200,340 C120,340 60,280 60,200 C60,120 120,60 200,60 Z M200,120 C155,120 120,155 120,200 C120,245 155,280 200,280 C245,280 280,245 280,200 C280,155 245,120 200,120 Z"
            fill="url(#waterGrad)"
          />
          {[0, 60, 120, 180, 240, 300].map((deg, i) => (
            <ellipse
              key={i}
              cx="200"
              cy="120"
              rx="35"
              ry="18"
              fill={i % 2 === 0 ? "#F9F7F2" : "#D4CD 实"}
              opacity="0.75"
              transform={`rotate(${deg} 200 200)`}
            />
          ))}
        </g>
      </svg>
    </div>
  );
}

function SculptureEarth() {
  // Monolithic geometric foundation prism / faceted cuboctahedron
  return (
    <div className="pancha-sculpture-render pancha-sculpture-earth">
      <svg viewBox="0 0 400 400" className="sculpture-svg" aria-label="Earth Prithvi Monolithic Structural Cube">
        <defs>
          <linearGradient id="cubeTop" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="100%" stopColor="#E0DAD0" />
          </linearGradient>
          <linearGradient id="cubeLeft" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#CCC5B8" />
            <stop offset="100%" stopColor="#9C9588" />
          </linearGradient>
          <linearGradient id="cubeRight" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ADA699" />
            <stop offset="100%" stopColor="#787266" />
          </linearGradient>
          <filter id="earthShadow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="18" dy="30" stdDeviation="24" floodColor="#161513" floodOpacity="0.18" />
          </filter>
        </defs>
        <g filter="url(#earthShadow)" className="spin-tilt">
          {/* Isometric faceted monolithic cube */}
          <polygon points="200,70 310,135 200,200 90,135" fill="url(#cubeTop)" />
          <polygon points="90,135 200,200 200,330 90,265" fill="url(#cubeLeft)" />
          <polygon points="310,135 200,200 200,330 310,265" fill="url(#cubeRight)" />
          {/* Embedded inner structural chamber */}
          <polygon points="200,115 255,147 200,180 145,147" fill="#FAF8F5" opacity="0.6" />
        </g>
      </svg>
    </div>
  );
}

function RenderSculpture({ symbol }: { symbol: ElementData["symbol"] }) {
  switch (symbol) {
    case "space":
      return <SculptureSpace />;
    case "air":
      return <SculptureAir />;
    case "fire":
      return <SculptureFire />;
    case "water":
      return <SculptureWater />;
    case "earth":
      return <SculptureEarth />;
    default:
      return null;
  }
}

/* -------------------------------------------------------------------------- */
/* MAIN COMPONENT                                                             */
/* -------------------------------------------------------------------------- */

export default function PanchaMahabhutaScroll() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);

  // Compute scroll progress within the container
  const handleScroll = useCallback(() => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const windowHeight = window.innerHeight;
    const totalScrollable = rect.height - windowHeight;

    if (totalScrollable <= 0) return;

    // How much of the container has scrolled past the top of the viewport
    const scrolled = -rect.top;
    const progress = Math.max(0, Math.min(scrolled / totalScrollable, 1));
    setScrollProgress(progress);

    // Map progress to active element (0 to 4)
    const rawIndex = progress * (ELEMENTS.length - 1);
    const nearestIndex = Math.round(rawIndex);
    setActiveIndex(nearestIndex);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);
    handleScroll();
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, [handleScroll]);

  // Click jump to specific element index
  const scrollToElement = (index: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const containerTop = rect.top + scrollTop;
    const totalScrollable = rect.height - window.innerHeight;
    const targetScroll = containerTop + (index / (ELEMENTS.length - 1)) * totalScrollable;

    window.scrollTo({
      top: targetScroll,
      behavior: "smooth",
    });
  };

  const currentElement = ELEMENTS[activeIndex];

  // Radial Dial Geometry calculation
  // Dial center is positioned at (cx, cy) on the left side
  // Radius R = 420px. Active item is at angle 0° (rightmost apex).
  // Angle step between numbers = 34 degrees.
  const ARC_RADIUS = 380;
  const ANGLE_STEP = 34; // degrees
  // Continuous interpolated index for buttery smooth arc sliding
  const continuousIndex = scrollProgress * (ELEMENTS.length - 1);

  return (
    <div
      ref={containerRef}
      className="pancha-scroll-container"
      style={{
        height: `${ELEMENTS.length * 90}vh`, // Generous scroll track
      }}
    >
      {/* STICKY FULLSCREEN VIEWPORT */}
      <div className="pancha-sticky-stage">
        {/* Subtle Luxury Background Grid & Atmosphere */}
        <div className="pancha-stage-bg">
          <div className="pancha-radial-glow" />
          <div className="pancha-top-header">
            <div className="pancha-top-eyebrow">PANCHA MAHABHUTA · FIVE SPATIAL FORCES</div>
            <div className="pancha-top-sub">Scroll to calibrate elemental geometry</div>
          </div>
        </div>

        {/* THREE-COLUMN INTERACTION LAYOUT */}
        <div className="pancha-stage-columns">
          {/* ================================================================ */}
          {/* 1. LEFT COLUMN: RADIAL ARC DIAL                                  */}
          {/* ================================================================ */}
          <div className="pancha-dial-column">
            {/* SVG Radial Arc Curve */}
            <svg className="pancha-arc-svg" viewBox="0 0 500 800">
              <defs>
                <linearGradient id="arcStrokeGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#161513" stopOpacity="0.02" />
                  <stop offset="50%" stopColor="#161513" stopOpacity="0.18" />
                  <stop offset="100%" stopColor="#161513" stopOpacity="0.02" />
                </linearGradient>
              </defs>
              {/* Elliptical Arc passing through right apex (x=380, y=400) with center at x=-40, y=400 */}
              <path
                d="M 50 40 A 380 380 0 0 1 380 400 A 380 380 0 0 1 50 760"
                fill="none"
                stroke="url(#arcStrokeGrad)"
                strokeWidth="1.5"
                strokeDasharray="4 4"
              />
            </svg>

            {/* Active Red Indicator Dot */}
            <div className="pancha-active-dot-wrap">
              <span className="pancha-active-dot" />
              <span className="pancha-active-dot-ping" />
            </div>

            {/* Rotating Number Items along Arc */}
            <div className="pancha-dial-numbers-track">
              {ELEMENTS.map((el, idx) => {
                // Angle relative to active center
                const deltaIndex = idx - continuousIndex;
                const angleDeg = deltaIndex * ANGLE_STEP; // in degrees
                const angleRad = (angleDeg * Math.PI) / 180;

                // Position on arc (cx = 0, cy = 50% = 0 in offset coordinates)
                // x = R * cos(angle)
                // y = R * sin(angle)
                const xOffset = ARC_RADIUS * Math.cos(angleRad) - ARC_RADIUS;
                const yOffset = ARC_RADIUS * Math.sin(angleRad);
                const isActive = activeIndex === idx;

                // Distance factor for opacity and scaling
                const dist = Math.abs(deltaIndex);
                const opacity = Math.max(0.12, Math.min(1, 1 - dist * 0.55));
                const scale = Math.max(0.8, Math.min(1.2, 1.2 - dist * 0.25));

                return (
                  <button
                    key={el.num}
                    onClick={() => scrollToElement(idx)}
                    className={`pancha-dial-item ${isActive ? "is-active" : ""}`}
                    style={{
                      transform: `translate3d(${xOffset}px, calc(${yOffset}px - 50%), 0) scale(${scale}) rotate(${angleDeg * 0.4}deg)`,
                      opacity: opacity,
                    }}
                    aria-label={`Jump to Element ${el.num} ${el.name}`}
                  >
                    <span className="pancha-dial-num">{el.num}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* ================================================================ */}
          {/* 2. CENTER COLUMN: EDITORIAL TYPOGRAPHY & CHIPS                  */}
          {/* ================================================================ */}
          <div className="pancha-content-column">
            {/* Masked viewport for pure bottom slide */}
            <div className="pancha-content-viewport">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentElement.num}
                  initial={{ y: "100%" }}
                  animate={{ y: "0%" }}
                  exit={{ y: "-100%" }}
                  transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
                  className="pancha-content-card"
                >
                  {/* Main Heading */}
                  <h2 className="pancha-card-title">{currentElement.title}</h2>

                  {/* Body Description */}
                  <p className="pancha-card-desc">{currentElement.desc}</p>

                  {/* Attribute Pills / Chips */}
                  <div className="pancha-card-chips">
                    {currentElement.tags.map((tag, tIdx) => (
                      <span key={tIdx} className="pancha-chip">
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Static Fixed Position Navigation Controls */}
            <div className="pancha-nav-indicators">
              <button
                className="pancha-step-btn"
                disabled={activeIndex === 0}
                onClick={() => scrollToElement(activeIndex - 1)}
                aria-label="Previous Element"
              >
                ←
              </button>
              <div className="pancha-step-counter">
                <span>{currentElement.num}</span>
                <span className="pancha-step-sep">/</span>
                <span>05</span>
              </div>
              <button
                className="pancha-step-btn"
                disabled={activeIndex === ELEMENTS.length - 1}
                onClick={() => scrollToElement(activeIndex + 1)}
                aria-label="Next Element"
              >
                →
              </button>
            </div>
          </div>

          {/* ================================================================ */}
          {/* 3. RIGHT COLUMN: 3D SCULPTURAL SYMBOL                           */}
          {/* ================================================================ */}
          <div className="pancha-symbol-column">
            <div className="pancha-sculpture-stage">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentElement.num}
                  initial={{ y: 110, scale: 0.92, opacity: 0 }}
                  animate={{ y: 0, scale: 1, opacity: 1 }}
                  exit={{ y: -110, scale: 0.92, opacity: 0 }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  className="pancha-sculpture-wrapper"
                  style={{
                    transform: `rotateY(${((scrollProgress * 4) % 1) * 35}deg)`,
                  }}
                >
                  <RenderSculpture symbol={currentElement.symbol} />
                </motion.div>
              </AnimatePresence>

              {/* Floor Shadow Radiance */}
              <div className="pancha-sculpture-floor-shadow" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
