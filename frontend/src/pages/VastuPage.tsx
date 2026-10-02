import { useState, useRef, useCallback, useEffect } from "react";
import { Link } from "react-router-dom";
import PanchaMahabhutaScroll from "../components/PanchaMahabhutaScroll";

const TYPOLOGY_SLIDES = [
  { img: "/images/upper image.jpg", alt: "Private Residences and Villas", tag: "01 · Residences", title: "Private Residences and Villas", cat: "Living and Rest" },
  { img: "/images/lower image.jpg", alt: "Commercial and Workspaces", tag: "02 · Commercial", title: "Commercial and Workspace Spheres", cat: "Focus and Momentum" },
  { img: "/images/hero image.jpg", alt: "Plot Selection and Land Diagnostics", tag: "03 · Land and Site", title: "Plot Selection and Land Evaluation", cat: "Foundational Energy" },
  { img: "/images/showcase-sanctuary-pool.jpg", alt: "Sanctuary and Retreat Architecture", tag: "04 · Retreats", title: "Sanctuary and Retreat Architecture", cat: "Deep Healing" },
  { img: "/images/about image.jpg", alt: "Penthouses and High-Rise Apartments", tag: "05 · High-Rise", title: "Penthouses and High-Rise Living", cat: "Sky Living" },
];

const VASTU_FAQS = [
  { q: "What is Vastu Shastra in modern architecture?", a: "Vastu Shastra is a traditional Indian science of spatial harmony that explores the relationship between architectural geometry, directional axes, natural light, and the five fundamental elements within built environments." },
  { q: "Does Vastu require structural demolition?", a: "No. For existing occupied homes and commercial offices, our consultations prioritize non-invasive remedies—rebalancing functional zoning, airflow, furniture orientation, and elemental frequencies without breaking walls." },
  { q: "Can Vastu be evaluated prior to purchasing a plot or flat?", a: "Yes, pre-purchase assessments are one of our highest-impact services. We evaluate site slope, road alignment, quadrant shapes, and architectural layouts before financial commitments are finalized." },
  { q: "How are remote worldwide consultations conducted?", a: "Remote consultations are conducted seamlessly across the UAE, India, Europe, and the US using verified architectural floor plans, Google Earth satellite coordinates, photographs, and dedicated video walkthrough sessions." },
];

export default function VastuPage() {
  const [activeFaq, setActiveFaq] = useState<number | null>(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);

  const updatePosition = useCallback((index: number) => {
    const track = trackRef.current;
    if (!track) return;
    const slides = track.children;
    if (!slides.length) return;

    const windowWidth = window.innerWidth;
    const firstSlide = slides[0] as HTMLElement;
    const slideWidth = firstSlide.getBoundingClientRect().width;
    const gap = 24;

    const offset = (windowWidth / 2) - (index * (slideWidth + gap) + (slideWidth / 2));
    track.style.transform = `translate3d(${offset.toFixed(1)}px, 0, 0)`;
  }, []);

  const rotateTypologies = useCallback((direction: number) => {
    setCurrentIndex((prev) => {
      const next = Math.max(0, Math.min(prev + direction, TYPOLOGY_SLIDES.length - 1));
      updatePosition(next);
      return next;
    });
  }, [updatePosition]);

  // Initial layout & resize listener
  useEffect(() => {
    updatePosition(currentIndex);
    const handleResize = () => updatePosition(currentIndex);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [currentIndex, updatePosition]);

  return (
    <div className="page-vastu">
      {/* SECTION 1: VASTU EDITORIAL HERO */}
      <section className="vastu-editorial-hero">
        <img src="/images/vasthu hero.jpg" alt="Ancient spatial wisdom for modern living - Sunandha Vastu" className="vastu-hero-bg" />
        <div className="vastu-hero-overlay"></div>
        <div className="vastu-hero-grid-wireframe reveal-scale reveal-delay-2"></div>
        <div className="container vastu-hero-content">
          <h1 className="vastu-hero-heading reveal-left reveal-delay-1">
            Ancient spatial wisdom<br />
            for modern living.
          </h1>
          <p className="vastu-hero-description reveal-on-scroll reveal-delay-2">
            A thoughtful way to understand the relationship between direction, the five elements, human activity and the spaces we inhabit.
          </p>
          <div className="vastu-hero-cta reveal-on-scroll reveal-delay-3">
            <a href="#consultation-booking" className="btn-pill-solid">
              <span>Book a Vastu Consultation</span>
              <span className="arrow">→</span>
            </a>
          </div>
        </div>
      </section>

      {/* SECTION 2: INTRODUCTION (WHAT IS VASTU?) */}
      <section className="section-about" style={{ padding: "120px 0 100px", backgroundColor: "#FAF8F5" }}>
        <div className="container">
          <div className="numerology-intro-grid">
            <div className="numerology-intro-text-col reveal-left reveal-delay-1">
              <div className="numerology-intro-eyebrow reveal-on-scroll reveal-delay-1">WHAT IS VASTU?</div>
              <h2 className="numerology-intro-heading reveal-on-scroll reveal-delay-2">
                A spatial language of balance,<br />
                orientation and human life.
              </h2>
              <p className="numerology-intro-desc reveal-on-scroll reveal-delay-3">
                Vastu observes how a space receives light, holds weight, channels movement and relates to direction. Its value today lies in interpreting those principles with sensitivity—without forcing a modern home to imitate the past.
              </p>
              <div className="numerology-intro-link-wrap reveal-on-scroll reveal-delay-4">
                <a href="#consultation-booking" className="numerology-intro-link">
                  <span>Begin with your space</span>
                  <span className="arrow">→</span>
                </a>
              </div>
            </div>
            <div className="numerology-intro-img-col reveal-right reveal-delay-2">
              <div className="numerology-intro-img-frame">
                <img src="/images/vasthu about.jpg" alt="A spatial language of balance - Architectural arched stone corridor with natural daylight" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: PANCHA MAHABHUTA (FIVE ELEMENTS) — INTERACTIVE PINNED STICKY DIAL */}
      <PanchaMahabhutaScroll />

      {/* SECTION 4: SPATIAL ARCHITECTURE IMAGE CAROUSEL */}
      <section id="typologies" className="section-vastu-typologies">
        <div className="container">
          <div className="vastu-typologies-header">
            <div className="reveal-left reveal-delay-1">
              <div className="pancha-eyebrow reveal-on-scroll reveal-delay-1">SPATIAL TYPOLOGIES</div>
              <h2 className="vastu-typologies-title reveal-on-scroll reveal-delay-2">
                Architecture Shaped by<br />
                Direction & Human Life.
              </h2>
            </div>
            <div className="typologies-header-right reveal-right reveal-delay-2">
              <p className="typologies-header-desc">Harmonizing the internal geometry of residential, commercial, and retreat spaces.</p>
              <div className="typologies-nav-arrows">
                <button className="typologies-nav-btn" onClick={() => rotateTypologies(-1)} aria-label="Previous image">←</button>
                <button className="typologies-nav-btn" onClick={() => rotateTypologies(1)} aria-label="Next image">→</button>
              </div>
            </div>
          </div>
        </div>
        <div className="typologies-carousel-wrapper reveal-scale reveal-delay-2">
          <div className="typologies-carousel-track" ref={trackRef}>
            {TYPOLOGY_SLIDES.map((s, i) => (
              <div
                key={s.tag}
                className={`typologies-carousel-slide ${currentIndex === i ? "is-active-slide" : ""}`}
                onClick={() => {
                  setCurrentIndex(i);
                  updatePosition(i);
                }}
                style={{ cursor: "pointer" }}
              >
                <div className="typologies-slide-img-box">
                  <img src={s.img} alt={s.alt} />
                  <span className="typologies-slide-tag">{s.tag}</span>
                </div>
                <div className="typologies-slide-caption">
                  <h3 className="typologies-slide-title">{s.title}</h3>
                  <span className="typologies-slide-category">{s.cat}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6: ASTRO-VASTU SYNTHESIS BRIDGE */}
      <section className="section-vastu-astro-bridge">
        <div className="container">
          <div className="vastu-astro-bridge-card reveal-on-scroll reveal-delay-1">
            <div>
              <div className="bridge-eyebrow reveal-on-scroll reveal-delay-1">SPECIALIZED SYNTHESIS</div>
              <h2 className="bridge-title reveal-on-scroll reveal-delay-2">When Architectural Geometry<br />Meets Personal Destiny.</h2>
              <p className="bridge-desc reveal-on-scroll reveal-delay-3">
                Standard Vastu examines the building. Astro Vastu examines who is living inside it. By synchronizing the 16 Vastu directional zones with the individual planetary degrees of the primary occupants, the physical structure becomes an active catalyst for clarity, health, and prosperity.
              </p>
            </div>
            <div className="bridge-cta-wrap reveal-on-scroll reveal-delay-3">
              <Link to="/astro-vastu" className="btn-pill-solid" style={{ whiteSpace: "nowrap" }}>
                <span>Explore Astro Vastu</span>
                <span className="arrow">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 7: FAQ */}
      <section id="faq" className="section-vastu-faq">
        <div className="container">
          <div className="vastu-faq-layout">
            <div className="vastu-faq-sticky reveal-left reveal-delay-1">
              <div className="pancha-eyebrow">CLARIFICATIONS</div>
              <h2 className="vastu-faq-title">Frequently Asked Spatial Questions</h2>
              <p className="vastu-faq-desc">
                Clear, grounded answers on how architectural consultations, directional analysis, and non-invasive remedies are conducted.
              </p>
            </div>
            <div className="vastu-faq-list reveal-right reveal-delay-2">
              {VASTU_FAQS.map((faq, idx) => (
                <div key={idx} className={`vastu-faq-row ${activeFaq === idx ? "active" : ""}`}>
                  <button className="vastu-faq-trigger" onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}>
                    <div className="vastu-faq-q-left">
                      <span className="vastu-faq-index">{String(idx + 1).padStart(2, "0")}</span>
                      <span className="vastu-faq-question">{faq.q}</span>
                    </div>
                    <span className="vastu-faq-icon">{activeFaq === idx ? "−" : "+"}</span>
                  </button>
                  <div className="vastu-faq-answer">{faq.a}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 8: CLOSING CTA */}
      <section id="consultation-booking" className="section-quiet-cta">
        <div className="container">
          <div className="quiet-cta-content reveal-on-scroll reveal-delay-1">
            <h2 className="quiet-cta-heading">
              Your space may already<br />
              be telling you something.
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
