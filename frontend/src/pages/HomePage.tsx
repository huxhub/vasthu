import { useState, useEffect, useRef, useCallback } from "react";
import { Link } from "react-router-dom";

/* ─────────────────────── Showcase Carousel ─────────────────────── */
const SHOWCASE_SLIDES = [
  { tag: "Sanctuary", img: "/images/showcase-sanctuary-pool.jpg", alt: "Vedic colonnade sanctuary reflection pool" },
  { tag: "Interiors", img: "/images/upper image.jpg", alt: "Modern architectural villa with indoor garden" },
  { tag: "Courtyard", img: "/images/hero image.jpg", alt: "Courtyard swimming pool and warm stone villa" },
  { tag: "Living", img: "/images/about image.jpg", alt: "Sunlit architectural living room sanctuary" },
  { tag: "Architecture", img: "/images/hero-home.jpg", alt: "Elevated grand Vedic palace courtyard" },
  { tag: "Reception", img: "/images/lower image.jpg", alt: "Contemporary travertine double-height reception" },
];

/* ─────────────────────── FAQ Data ─────────────────────── */
const ACCORDION_ITEMS = [
  {
    title: "Spaces that blend comfort and nature",
    body: "Our spatial balancing harmonizes natural light, clean airflow, and magnetic compass axes without structural demolition.",
    link: "/vastu",
    linkText: "Learn more →",
    thumb: "/images/hero-home.jpg",
    thumbAlt: "Courtyard Sanctuary Thumbnail",
  },
  {
    title: "Can corrections be made without structural demolition?",
    body: "Yes, 100%. We use non-invasive elemental frequency adjustments, energized metals, and sacred geometry without breaking a single brick.",
  },
  {
    title: "How does Astro Numerology sync with Vastu analysis?",
    body: "Your personal birth chart and name vibrations reveal ruling planetary energies, aligning your property's 16 zones directly with your prosperity.",
  },
  {
    title: "What is included in my consultation assessment?",
    body: "A comprehensive 16-zone blueprint report, personalized non-demolition cures, and a direct 1-on-1 advisory session.",
  },
];

/* ─────────────────────── Cosmos Steps ─────────────────────── */
const COSMOS_STEPS = [
  { num: "01", name: "Birth Information", hasArrow: true },
  { num: "02", name: "Numerological Pattern", hasArrow: true },
  { num: "03", name: "Astrological Influence", hasArrow: true },
  { num: "04", name: "Combined Interpretation", hasArrow: true },
  { num: "05", name: "Personal Guidance", hasArrow: false },
];

export default function HomePage() {
  /* ── Showcase carousel state (DOM-based rotation like original) ── */
  const trackRef = useRef<HTMLDivElement>(null);
  const isAnimating = useRef(false);

  const rotateShowcase = useCallback((direction: number) => {
    if (isAnimating.current) return;
    const track = trackRef.current;
    if (!track) return;
    const cards = Array.from(track.children) as HTMLElement[];
    if (cards.length < 3) return;
    isAnimating.current = true;

    if (direction === 1) {
      const [first, second, third, fourth] = cards;
      first.className = "showcase-slide-card card-pos-hidden-left";
      second.className = "showcase-slide-card card-pos-1";
      third.className = "showcase-slide-card card-pos-2";
      if (fourth) fourth.className = "showcase-slide-card card-pos-3";
      setTimeout(() => {
        track.appendChild(first);
        first.className = "showcase-slide-card card-pos-rest";
        isAnimating.current = false;
      }, 460);
    } else {
      const last = cards[cards.length - 1];
      const [first, second, third] = cards;
      last.className = "showcase-slide-card card-pos-hidden-left";
      track.prepend(last);
      void track.offsetWidth; // force reflow
      last.className = "showcase-slide-card card-pos-1";
      first.className = "showcase-slide-card card-pos-2";
      second.className = "showcase-slide-card card-pos-3";
      third.className = "showcase-slide-card card-pos-rest";
      setTimeout(() => { isAnimating.current = false; }, 460);
    }
  }, []);

  /* ── Accordion state ── */
  const [activeAccordion, setActiveAccordion] = useState<number | null>(null);
  const toggleAccordion = (idx: number) => {
    setActiveAccordion((prev) => (prev === idx ? null : idx));
  };

  /* ── Mandala particle canvas ── */
  const canvasRef = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    interface Particle { x: number; y: number; radius: number; alpha: number; vy: number; vx: number; maxLife: number; life: number; }
    const particles: Particle[] = [];

    function resize() {
      const rect = canvas!.getBoundingClientRect();
      canvas!.width = rect.width || 500;
      canvas!.height = rect.height || 500;
    }
    window.addEventListener("resize", resize);
    resize();

    function makeParticle(): Particle {
      return {
        x: Math.random() * canvas!.width,
        y: Math.random() * canvas!.height,
        radius: Math.random() * 1.8 + 0.5,
        alpha: Math.random() * 0.6 + 0.15,
        vy: -(Math.random() * 0.4 + 0.1),
        vx: (Math.random() - 0.5) * 0.3,
        maxLife: Math.random() * 300 + 100,
        life: 0,
      };
    }

    for (let i = 0; i < 45; i++) particles.push(makeParticle());

    function animate() {
      ctx!.clearRect(0, 0, canvas!.width, canvas!.height);
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        p.life++;
        if (p.life > p.maxLife || p.y < 0) {
          Object.assign(p, makeParticle(), { y: canvas!.height + 10 });
        }
        ctx!.beginPath();
        ctx!.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx!.fillStyle = `rgba(180, 120, 30, ${p.alpha * 0.7})`;
        ctx!.shadowBlur = 4;
        ctx!.shadowColor = "rgba(212, 154, 55, 0.4)";
        ctx!.fill();
        ctx!.shadowBlur = 0;
      });
      animId = requestAnimationFrame(animate);
    }
    animate();
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <div className="page-home">

      {/* ══════════════════════════════════════════════════════════════════
          SECTION 1: HERO (EXACT SUNANDHA EDITORIAL DESIGN)
          ══════════════════════════════════════════════════════════════════ */}
      <section id="home" className="hero-section">
        <img
          src="/images/hero-ancient-vastu.jpg"
          alt="Energy in Harmony. Life in Alignment - Sunandha Vastu & Numerology"
          className="hero-bg-image"
        />
        <div className="hero-editorial-overlay"></div>
        <div className="hero-architectural-wireframe reveal-scale reveal-delay-2">
          <span className="hero-wireframe-label">MASKING · COMPASS ROTATION</span>
        </div>
        <div className="hero-container-editorial">
          <h1 className="hero-editorial-headline reveal-on-scroll reveal-delay-1">
            Energy in Harmony.<br />
            Life in Alignment.
          </h1>
          <p className="hero-editorial-desc reveal-on-scroll reveal-delay-2">
            Vedic Vastu and Astro Numerology designed for peace and growth.
          </p>
          <div className="hero-cta-row reveal-on-scroll reveal-delay-3">
            <Link to="/contact" className="btn-pill-solid">
              <span>Book Consultation</span>
              <span className="arrow">→</span>
            </Link>
          </div>
        </div>
        <div className="hero-bottom-indicator">
          <span className="hero-indicator-dot"></span>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          SECTION 2: HOME ENERGY & SPATIAL BALANCE
          ══════════════════════════════════════════════════════════════════ */}
      <section id="about" className="section-about">
        <div className="container">
          <div className="about-energy-grid">
            <div className="about-energy-img-col reveal-scale reveal-delay-1">
              <div className="about-energy-img-frame">
                <img src="/images/about image.jpg" alt="Your home carries more than memories. It carries energy." />
              </div>
            </div>
            <div className="about-energy-text-col">
              <h2 className="about-energy-heading reveal-on-scroll reveal-delay-2">
                Your home carries more than<br />
                memories. It carries energy.
              </h2>
              <p className="about-energy-desc reveal-on-scroll reveal-delay-3">
                Every entrance, opening and movement creates a relationship between direction, balance and daily life. When
                a home supports its people, harmony feels natural, decisions become clearer and growth has room to unfold.
              </p>
              <div className="about-energy-bottom-row reveal-on-scroll reveal-delay-4">
                <div className="about-energy-keywords">
                  HOME ENERGY · DIRECTION · BALANCE<br />
                  HARMONY · PERSONAL GROWTH · PROSPERITY
                </div>
                <div className="about-compass-rose" aria-label="Cardinal Compass Alignment">
                  <div className="about-compass-crosshairs"></div>
                  <span className="about-compass-n">N</span>
                  <div className="about-compass-pointer"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          SECTION 3: DISCOVER THE MAGIC OF YOUR ESCAPE (SHOWCASE CAROUSEL)
          ══════════════════════════════════════════════════════════════════ */}
      <section id="showcase" className="section-showcase">
        <div className="container">
          <div className="showcase-layout">
            <div className="showcase-text-col reveal-left reveal-delay-1">
              <h2 className="showcase-title">Discover the magic<br />of your escape</h2>
              <div className="showcase-divider-line"></div>
              <p className="showcase-desc">
                From lush landscapes to warm interiors, every corner of our retreat is designed to bring you peace.
              </p>
              <div className="showcase-nav-arrows">
                <button className="nav-arrow-btn" onClick={() => rotateShowcase(-1)} aria-label="Previous image">←</button>
                <button className="nav-arrow-btn" onClick={() => rotateShowcase(1)} aria-label="Next image">→</button>
              </div>
            </div>
            <div className="showcase-images-wrapper reveal-right reveal-delay-2">
              <div className="showcase-track" ref={trackRef}>
                {SHOWCASE_SLIDES.map((slide, i) => {
                  let posClass = "card-pos-rest";
                  if (i === 0) posClass = "card-pos-1";
                  else if (i === 1) posClass = "card-pos-2";
                  else if (i === 2) posClass = "card-pos-3";
                  return (
                    <div key={slide.tag} className={`showcase-slide-card ${posClass}`}>
                      <span className="showcase-card-tag">{slide.tag}</span>
                      <img src={slide.img} alt={slide.alt} />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          SECTION 4: ASTRO NUMEROLOGY (NUMBERS × COSMOS)
          ══════════════════════════════════════════════════════════════════ */}
      <section id="astro-cosmos" className="section-astro-cosmos">
        <div className="container">
          <div className="astro-cosmos-layout">

            {/* Left: Sacred Golden Lotus Mandala Visual */}
            <div className="cosmos-orbital-stage reveal-scale reveal-delay-1">
              <canvas ref={canvasRef} className="mandala-canvas-bg"></canvas>
              <div className="mandala-svg-wrapper">
                <svg viewBox="0 0 600 700" className="filter drop-shadow-[0_4px_20px_rgba(180,120,20,0.25)] transition-all duration-500">
                  <defs>
                    <linearGradient id="goldGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#b87b1e" />
                      <stop offset="30%" stopColor="#d49a37" />
                      <stop offset="70%" stopColor="#8c5812" />
                      <stop offset="100%" stopColor="#402402" />
                    </linearGradient>
                    <linearGradient id="goldGradSoft" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#f5cf68" stopOpacity={0.85} />
                      <stop offset="50%" stopColor="#e0a843" stopOpacity={0.5} />
                      <stop offset="100%" stopColor="#663e08" stopOpacity={0.15} />
                    </linearGradient>
                    <radialGradient id="centerGlow" cx="50%" cy="50%" r="50%">
                      <stop offset="0%" stopColor="#f5cf68" stopOpacity={0.6} />
                      <stop offset="40%" stopColor="#d49a37" stopOpacity={0.25} />
                      <stop offset="80%" stopColor="#8c5812" stopOpacity={0.05} />
                      <stop offset="100%" stopColor="#ffffff" stopOpacity={0} />
                    </radialGradient>
                    <filter id="svgGlow" x="-20%" y="-20%" width="140%" height="140%">
                      <feGaussianBlur stdDeviation="3" result="blur" />
                      <feComposite in="SourceGraphic" in2="blur" operator="over" />
                    </filter>
                    <filter id="intenseGlow" x="-50%" y="-50%" width="200%" height="200%">
                      <feGaussianBlur stdDeviation="6" result="blur2" />
                      <feMerge>
                        <feMergeNode in="blur2" />
                        <feMergeNode in="SourceGraphic" />
                      </feMerge>
                    </filter>
                  </defs>

                  {/* Background Center Radial Glow */}
                  <circle cx="300" cy="300" r="260" fill="url(#centerGlow)" style={{ pointerEvents: "none" }} />

                  {/* Axis Lines */}
                  <g className="transition-opacity duration-300">
                    <line x1="300" y1="20" x2="300" y2="670" stroke="url(#goldGrad1)" strokeWidth="1" strokeDasharray="2 2" opacity="0.4" />
                    <line x1="300" y1="50" x2="300" y2="650" stroke="#d49a37" strokeWidth="1.2" opacity="0.75" />
                    <circle cx="300" cy="50" r="4" fill="#8c5812" filter="url(#svgGlow)" />
                    <circle cx="300" cy="100" r="2.5" fill="#d49a37" />
                    <circle cx="300" cy="500" r="3.5" fill="#d49a37" filter="url(#svgGlow)" />
                    <circle cx="300" cy="540" r="4.5" fill="#8c5812" filter="url(#intenseGlow)" />
                    <circle cx="300" cy="580" r="3" fill="#d49a37" />
                    <circle cx="300" cy="610" r="2" fill="#8c5812" />
                    <circle cx="300" cy="635" r="1.5" fill="#d49a37" />
                    <line x1="50" y1="300" x2="550" y2="300" stroke="url(#goldGrad1)" strokeWidth="0.8" opacity="0.35" />
                  </g>

                  {/* Sacred Grid (slow clockwise) */}
                  <g className="anim-rotate-cw-slow transition-opacity duration-300">
                    <g stroke="url(#goldGrad1)" strokeWidth="0.6" fill="none" opacity="0.45">
                      <circle cx="300" cy="300" r="220" />
                      <circle cx="300" cy="190" r="110" />
                      <circle cx="395" cy="245" r="110" />
                      <circle cx="395" cy="355" r="110" />
                      <circle cx="300" cy="410" r="110" />
                      <circle cx="205" cy="355" r="110" />
                      <circle cx="205" cy="245" r="110" />
                      <circle cx="300" cy="300" r="150" strokeDasharray="4 4" />
                      <circle cx="300" cy="300" r="180" opacity="0.5" />
                    </g>
                  </g>

                  {/* Outer Orbits */}
                  <g className="transition-opacity duration-300">
                    <g className="anim-rotate-ccw-slow">
                      <circle cx="300" cy="300" r="250" stroke="url(#goldGrad1)" strokeWidth="1.2" fill="none" opacity="0.85" />
                      <circle cx="300" cy="300" r="254" stroke="#d49a37" strokeWidth="0.5" strokeDasharray="2 6" fill="none" opacity="0.6" />
                      <circle cx="300" cy="50" r="5" fill="#fff5cc" filter="url(#intenseGlow)" />
                      <circle cx="550" cy="300" r="4" fill="#f5cf68" filter="url(#svgGlow)" />
                      <circle cx="300" cy="550" r="5" fill="#fff5cc" filter="url(#intenseGlow)" />
                      <circle cx="50" cy="300" r="4" fill="#f5cf68" filter="url(#svgGlow)" />
                      <circle cx="476" cy="124" r="3" fill="#f5cf68" />
                      <circle cx="476" cy="476" r="3" fill="#f5cf68" />
                      <circle cx="124" cy="476" r="3" fill="#f5cf68" />
                      <circle cx="124" cy="124" r="3" fill="#f5cf68" />
                    </g>
                    <g className="anim-rotate-cw-mid">
                      <circle cx="300" cy="300" r="232" stroke="url(#goldGrad1)" strokeWidth="0.8" strokeDasharray="1 5" fill="none" opacity="0.75" />
                      <circle cx="300" cy="300" r="210" stroke="#f5cf68" strokeWidth="0.7" fill="none" opacity="0.5" />
                      <g fill="#ffffff" filter="url(#svgGlow)">
                        <circle cx="300" cy="68" r="2.5" />
                        <circle cx="532" cy="300" r="2.5" />
                        <circle cx="300" cy="532" r="2.5" />
                        <circle cx="68" cy="300" r="2.5" />
                      </g>
                    </g>
                  </g>

                  {/* Inner Orbits */}
                  <g className="transition-opacity duration-300">
                    <g className="anim-rotate-cw-fast">
                      <circle cx="300" cy="300" r="170" stroke="url(#goldGrad1)" strokeWidth="1" fill="none" opacity="0.6" />
                      <g fill="#f5cf68">
                        <circle cx="470" cy="300" r="2.5" />
                        <circle cx="447" cy="385" r="2" />
                        <circle cx="385" cy="447" r="2" />
                        <circle cx="300" cy="470" r="2.5" />
                        <circle cx="215" cy="447" r="2" />
                        <circle cx="153" cy="385" r="2" />
                        <circle cx="130" cy="300" r="2.5" />
                        <circle cx="153" cy="215" r="2" />
                        <circle cx="215" cy="153" r="2" />
                        <circle cx="300" cy="130" r="2.5" />
                        <circle cx="385" cy="153" r="2" />
                        <circle cx="447" cy="215" r="2" />
                      </g>
                    </g>
                    <g className="anim-rotate-ccw-mid">
                      <circle cx="300" cy="300" r="135" stroke="url(#goldGrad1)" strokeWidth="0.8" strokeDasharray="6 4" fill="none" opacity="0.65" />
                      <g stroke="#f5cf68" strokeWidth="0.5" opacity="0.4">
                        <line x1="300" y1="165" x2="300" y2="135" />
                        <line x1="300" y1="435" x2="300" y2="465" />
                        <line x1="165" y1="300" x2="135" y2="300" />
                        <line x1="435" y1="300" x2="465" y2="300" />
                      </g>
                    </g>
                  </g>

                  {/* Lotus */}
                  <g className="anim-breathe transition-opacity duration-300">
                    <circle cx="300" cy="300" r="100" fill="url(#centerGlow)" opacity="0.8" />
                    {/* Outer deep petals */}
                    <g fill="url(#goldGradSoft)" stroke="#f5cf68" strokeWidth="0.8" filter="url(#svgGlow)">
                      <path d="M 300 300 Q 250 380 300 440 Q 350 380 300 300 Z" />
                      <path d="M 300 300 Q 210 360 220 410 Q 290 390 300 300 Z" />
                      <path d="M 300 300 Q 390 360 380 410 Q 310 390 300 300 Z" />
                      <path d="M 300 300 Q 180 310 170 350 Q 230 370 300 300 Z" />
                      <path d="M 300 300 Q 420 310 430 350 Q 370 370 300 300 Z" />
                      <path d="M 300 300 Q 170 260 180 220 Q 240 270 300 300 Z" />
                      <path d="M 300 300 Q 430 260 420 220 Q 360 270 300 300 Z" />
                      <path d="M 300 300 Q 220 180 260 160 Q 290 240 300 300 Z" />
                      <path d="M 300 300 Q 380 180 340 160 Q 310 240 300 300 Z" />
                    </g>
                    {/* Mid petals */}
                    <g fill="url(#goldGrad1)" stroke="#fff5cc" strokeWidth="0.6" opacity="0.95">
                      <path d="M 300 300 Q 270 210 300 150 Q 330 210 300 300 Z" />
                      <path d="M 300 300 Q 235 220 240 180 Q 285 230 300 300 Z" />
                      <path d="M 300 300 Q 365 220 360 180 Q 315 230 300 300 Z" />
                      <path d="M 300 300 Q 200 250 190 220 Q 250 270 300 300 Z" />
                      <path d="M 300 300 Q 400 250 410 220 Q 350 270 300 300 Z" />
                      <path d="M 300 300 Q 200 310 210 340 Q 260 330 300 300 Z" />
                      <path d="M 300 300 Q 400 310 390 340 Q 340 330 300 300 Z" />
                      <path d="M 300 300 Q 260 360 300 400 Q 340 360 300 300 Z" />
                    </g>
                    {/* Petal veins */}
                    <g stroke="#ffffff" strokeWidth="0.4" opacity="0.6" fill="none">
                      <path d="M 300 300 L 300 155" />
                      <path d="M 300 300 L 243 183" />
                      <path d="M 300 300 L 357 183" />
                      <path d="M 300 300 L 193 223" />
                      <path d="M 300 300 L 407 223" />
                      <path d="M 300 300 L 300 395" />
                    </g>
                    {/* Inner core blossom */}
                    <g fill="url(#goldGrad1)" stroke="#ffffff" strokeWidth="0.5">
                      <path d="M 300 300 Q 280 240 300 200 Q 320 240 300 300 Z" />
                      <path d="M 300 300 Q 250 250 260 220 Q 290 250 300 300 Z" />
                      <path d="M 300 300 Q 350 250 340 220 Q 310 250 300 300 Z" />
                    </g>
                    {/* Lotus heart */}
                    <g className="anim-rotate-cw-slow">
                      <circle cx="300" cy="300" r="32" fill="#fcf8ed" stroke="url(#goldGrad1)" strokeWidth="1.2" />
                      <circle cx="300" cy="300" r="26" fill="none" stroke="#d49a37" strokeWidth="0.8" strokeDasharray="2 2" />
                      <polygon points="300,272 308,292 328,292 312,304 318,324 300,312 282,324 288,304 272,292 292,292" fill="url(#goldGrad1)" stroke="#ffffff" strokeWidth="0.4" />
                      <polygon points="300,328 292,308 272,308 288,296 282,276 300,288 318,276 312,296 328,308 308,308" fill="none" stroke="#d49a37" strokeWidth="0.5" opacity="0.8" />
                      <circle cx="300" cy="300" r="6" fill="#8c5812" filter="url(#intenseGlow)" />
                    </g>
                  </g>

                  {/* Flares */}
                  <g style={{ pointerEvents: "none" }}>
                    <g transform="translate(300, 50)" className="anim-twinkle">
                      <line x1="-12" y1="0" x2="12" y2="0" stroke="#8c5812" strokeWidth="1" />
                      <line x1="0" y1="-12" x2="0" y2="12" stroke="#8c5812" strokeWidth="1" />
                      <circle cx="0" cy="0" r="3" fill="#8c5812" filter="url(#intenseGlow)" />
                    </g>
                    <g transform="translate(550, 300)" className="anim-twinkle" style={{ animationDelay: "1s" }}>
                      <line x1="-10" y1="0" x2="10" y2="0" stroke="#8c5812" strokeWidth="0.8" />
                      <line x1="0" y1="-10" x2="0" y2="10" stroke="#8c5812" strokeWidth="0.8" />
                      <circle cx="0" cy="0" r="2.5" fill="#8c5812" filter="url(#intenseGlow)" />
                    </g>
                    <g transform="translate(50, 300)" className="anim-twinkle" style={{ animationDelay: "1.5s" }}>
                      <line x1="-10" y1="0" x2="10" y2="0" stroke="#8c5812" strokeWidth="0.8" />
                      <line x1="0" y1="-10" x2="0" y2="10" stroke="#8c5812" strokeWidth="0.8" />
                      <circle cx="0" cy="0" r="2.5" fill="#8c5812" filter="url(#intenseGlow)" />
                    </g>
                    <g transform="translate(300, 540)" className="anim-twinkle" style={{ animationDelay: "0.7s" }}>
                      <line x1="-8" y1="0" x2="8" y2="0" stroke="#8c5812" strokeWidth="0.8" />
                      <line x1="0" y1="-8" x2="0" y2="8" stroke="#8c5812" strokeWidth="0.8" />
                      <circle cx="0" cy="0" r="2.5" fill="#8c5812" filter="url(#intenseGlow)" />
                    </g>
                  </g>
                </svg>
              </div>
            </div>

            {/* Right: Editorial Headline & 5-Step Process */}
            <div className="cosmos-editorial-col">
              <span className="cosmos-eyebrow reveal-on-scroll reveal-delay-1">ASTRO NUMEROLOGY</span>
              <h2 className="cosmos-headline reveal-on-scroll reveal-delay-2">
                When numbers meet the<br />
                movement of the cosmos.
              </h2>
              <div className="cosmos-steps-list">
                {COSMOS_STEPS.map((step) => (
                  <Link
                    key={step.num}
                    to="/astro-numerology"
                    className="cosmos-step-row reveal-on-scroll reveal-delay-2"
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    <span className="cosmos-step-num">{step.num}</span>
                    <span className="cosmos-step-name">
                      {step.name} {step.hasArrow && <span className="cosmos-step-arrow">↓</span>}
                    </span>
                  </Link>
                ))}
              </div>
              <Link to="/astro-numerology" className="cosmos-link-cta reveal-on-scroll reveal-delay-6">
                <span>Explore Astro Numerology</span>
                <span className="arrow">→</span>
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          SECTION 5: THOUGHTFUL SPACES & ACCORDION
          ══════════════════════════════════════════════════════════════════ */}
      <section id="faq" className="section-faq-wisdom">
        <div className="container">
          <div className="faq-layout-grid">

            {/* Left: Heading & Preview */}
            <div className="faq-left-sticky reveal-left reveal-delay-1">
              <h2 className="faq-main-heading">
                Thoughtful spaces and experiences for complete relaxation.
              </h2>
              <div className="faq-preview-card">
                <img src="/images/hero-contact.jpg" alt="Peaceful Meditation Courtyard" />
              </div>
              <p className="faq-left-caption">
                A place to disconnect from the noise and reconnect with yourself.
              </p>
            </div>

            {/* Right: Accordion */}
            <div className="accordion-list reveal-right reveal-delay-2">
              {ACCORDION_ITEMS.map((item, idx) => (
                <div key={idx} className={`accordion-item ${activeAccordion === idx ? "active" : ""}`}>
                  <div className="accordion-header" onClick={() => toggleAccordion(idx)}>
                    <div className="accordion-header-left">
                      <span className="accordion-index">{String(idx + 1).padStart(2, "0")}</span>
                      <span>{item.title}</span>
                    </div>
                    <span className="accordion-icon">{activeAccordion === idx ? "−" : "+"}</span>
                  </div>
                  <div className="accordion-body">
                    {item.thumb ? (
                      <div style={{ display: "flex", gap: "20px", alignItems: "center", justifyContent: "space-between" }}>
                        <div>
                          <p style={{ marginBottom: "10px" }}>{item.body}</p>
                          {item.link && (
                            <Link
                              to={item.link}
                              style={{ fontSize: "0.85rem", fontWeight: 600, color: "var(--color-gold-deep)", textDecoration: "underline" }}
                            >
                              {item.linkText}
                            </Link>
                          )}
                        </div>
                        <div style={{ width: "100px", height: "65px", flexShrink: 0, borderRadius: "var(--radius-sm)", overflow: "hidden" }}>
                          <img src={item.thumb} alt={item.thumbAlt} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                        </div>
                      </div>
                    ) : (
                      item.body
                    )}
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          SECTION 6: SPACE WITH INTENTION (RESIDENTIAL & COMMERCIAL)
          ══════════════════════════════════════════════════════════════════ */}
      <section id="intentions" className="section-spaces-intention">
        {/* Upper Banner: Residential Vastu */}
        <div className="space-intention-banner banner-residential reveal-scale reveal-delay-1">
          <img
            src="/images/upper image.jpg"
            alt="A home should support the life you want to build - Sunandha Residential Vastu"
            className="space-intention-bg"
          />
          <div className="space-intention-overlay"></div>
          <div className="space-intention-content">
            <div className="space-intention-left">
              <span className="space-intention-eyebrow">SPACE WITH INTENTION</span>
              <h2 className="space-intention-title">
                A home should support<br />the life you want to build.
              </h2>
              <div className="space-intention-tags">
                <span>— Existing houses</span>
                <span>— Apartments</span>
                <span>— Villas</span>
                <span>— New construction</span>
                <span>— Renovation</span>
                <span>— Floor-plan analysis</span>
                <span>— Directional analysis</span>
                <span>— Room placement</span>
                <span>— Energy balancing</span>
              </div>
            </div>
            <div className="space-intention-right">
              <Link to="/vastu" className="space-intention-link">
                <span>Explore Residential Vastu</span>
                <span className="arrow">→</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Lower Banner: Commercial Vastu */}
        <div className="space-intention-banner banner-commercial reveal-scale reveal-delay-2">
          <img
            src="/images/lower image.jpg"
            alt="Spaces designed for business momentum - Sunandha Commercial Vastu"
            className="space-intention-bg"
          />
          <div className="space-intention-overlay"></div>
          <div className="space-intention-content">
            <div className="space-intention-left">
              <span className="space-intention-eyebrow">SPACE WITH INTENTION</span>
              <h2 className="space-intention-title">
                Spaces designed for<br />business momentum.
              </h2>
              <div className="space-intention-tags">
                <span>— Corporate Offices</span>
                <span>— Retail</span>
                <span>— Factories</span>
                <span>— Hospitality</span>
                <span>— Commercial Buildings</span>
                <span>— Clinics</span>
                <span>— Institutions</span>
                <span>— Plots</span>
              </div>
            </div>
            <div className="space-intention-right">
              <Link to="/commercial-vastu" className="space-intention-link">
                <span>Explore Commercial Vastu</span>
                <span className="arrow">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          SECTION 7: CLOSING CALL TO ACTION
          ══════════════════════════════════════════════════════════════════ */}
      <section id="contact" className="section-quiet-cta">
        <div className="container">
          <div className="quiet-cta-content reveal-on-scroll reveal-delay-1">
            <h2 className="quiet-cta-heading">
              Your space may already<br />
              be telling you something.
            </h2>
            <p className="quiet-cta-subheading">
              Let's understand it together.
            </p>
            <div className="quiet-cta-btn-wrap">
              <Link to="/vastu" className="btn-quiet-pill">
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
