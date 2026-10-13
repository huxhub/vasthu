import { useEffect, useRef, useState, useCallback } from "react";
import { Link } from "react-router-dom";
import "./HomePage.css";

const SPACE_STORIES = [
  ["Residential", "/images/upper image.jpg", "A home that supports daily life."],
  ["Courtyard", "/images/hero image.jpg", "Movement, light, and openness."],
  ["Interiors", "/images/about image.jpg", "Rooms with a sense of calm."],
  ["Commercial", "/images/lower image.jpg", "Spaces made for clear decisions."],
  ["Architecture", "/images/hero-home.jpg", "Form guided by direction."],
];

export default function HomePage() {
  const [paused, setPaused] = useState(false);
  const carouselRef = useRef<HTMLDivElement>(null);
  const carouselAnimating = useRef(false);
  const rotateCarousel = useCallback((direction: number) => {
    if (carouselAnimating.current || !carouselRef.current) return;
    const track = carouselRef.current;
    const cards = Array.from(track.children) as HTMLElement[];
    if (cards.length < 3) return;
    carouselAnimating.current = true;
    if (direction === 1) {
      const [first, second, third, fourth] = cards;
      first.className = "showcase-slide-card card-pos-hidden-left";
      second.className = "showcase-slide-card card-pos-1";
      third.className = "showcase-slide-card card-pos-2";
      if (fourth) fourth.className = "showcase-slide-card card-pos-3";
      window.setTimeout(() => {
        track.appendChild(first);
        first.className = "showcase-slide-card card-pos-rest";
        carouselAnimating.current = false;
      }, 480);
    } else {
      const last = cards[cards.length - 1];
      const [first, second, third] = cards;
      last.className = "showcase-slide-card card-pos-hidden-left";
      track.prepend(last);
      void track.offsetWidth;
      last.className = "showcase-slide-card card-pos-1";
      first.className = "showcase-slide-card card-pos-2";
      second.className = "showcase-slide-card card-pos-3";
      third.className = "showcase-slide-card card-pos-rest";
      window.setTimeout(() => { carouselAnimating.current = false; }, 480);
    }
  }, []);
  useEffect(() => {
    if (paused) return undefined;
    const timer = window.setInterval(() => {
      rotateCarousel(1);
    }, 4300);
    return () => window.clearInterval(timer);
  }, [paused, rotateCarousel]);
  return (
    <div className={`home-editorial ${paused ? "home-motion-paused" : ""}`}>
      <section className="home-hero" aria-labelledby="home-title">
        <img src="/images/home-woman-hero.png" alt="Woman in an ivory saree in a sunlit Indian courtyard" fetchPriority="high" />
        <div className="home-hero-shade" />
        <div className="home-wrap home-hero-copy">
          <p className="home-kicker">VASTUSHLOKAA · VASTU & NUMEROLOGY</p>
          <h1 id="home-title">Energy in harmony.<br /><em>Life in alignment.</em></h1>
          <p>Vastu and personal guidance for a home, a business, and a life with direction.</p>
          <Link className="home-button" to="/contact">Book a consultation <span aria-hidden="true">↗</span></Link>
        </div>
        <a className="home-hero-compass" href="#home-energy" aria-label="Explore home energy">
          <svg viewBox="0 0 160 160" aria-hidden="true">
            <circle cx="80" cy="80" r="64" fill="none" stroke="currentColor" strokeWidth=".7" />
            <circle className="home-compass-orbit" cx="80" cy="80" r="52" fill="none" stroke="currentColor" strokeDasharray="1 7" />
            <g className="home-compass-needle"><path d="M80 35 91 80 80 125 69 80Z" fill="none" stroke="currentColor" /><path d="M80 35 91 80 80 80Z" fill="currentColor" /></g>
            <circle cx="80" cy="80" r="3" fill="currentColor" />
            <text x="80" y="10" textAnchor="middle">N</text><text x="151" y="84" textAnchor="middle">E</text><text x="80" y="157" textAnchor="middle">S</text><text x="9" y="84" textAnchor="middle">W</text>
          </svg>
          <span>EXPLORE YOUR SPACE ↓</span>
        </a>
      </section>

      <div className="home-symbol-band">
        <div className="home-mandala"><svg viewBox="0 0 600 700" aria-hidden="true">
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
                </svg></div>
        <p className="home-kicker">DIRECTION · BALANCE · POSSIBILITY</p>
        <button className="home-motion-button" type="button" onClick={() => setPaused(!paused)} aria-pressed={paused}>
          {paused ? "Resume animation" : "Pause animation"}
        </button>
      </div>

      <section id="home-energy" className="home-section home-wrap home-split" aria-labelledby="energy-title">
        <div className="home-photo"><img src="/images/about image.jpg" loading="lazy" alt="An airy home opening onto a peaceful courtyard" /><span className="image-reveal-wipe reveal-on-scroll" aria-hidden="true" /></div>
        <div className="home-copy">
          <p className="home-kicker">01 / HOME ENERGY</p>
          <h2 id="energy-title">Make room for<br /><em>growth.</em></h2>
          <p>Bring balance to everyday living through direction, natural light, and thoughtful placement.</p>
          <Link className="home-text-link" to="/vastu">Understand Vastu <span aria-hidden="true">↗</span></Link>
        </div>
      </section>

      <section className="home-section home-blocks" aria-labelledby="blocks-title">
        <div className="home-wrap">
          <div className="home-section-head"><p className="home-kicker">02 / WHEN HOME FEELS BLOCKED</p><h2 id="blocks-title">Something feels<br /><em>out of balance?</em></h2><p>Start with the everyday concerns you want to understand.</p></div>
          <div className="home-three">
            {[
              ["01", "Rest feels difficult", "Rooms that feel unsettled or leave little space to unwind."],
              ["02", "Focus feels scattered", "Work areas that feel cluttered, distracting, or disconnected."],
              ["03", "The space feels heavy", "Dark corners, awkward movement, or a home that no longer feels comfortable."],
            ].map(([n, title, copy]) => <article className="home-lined-item" key={n}><span className="home-index">{n}</span><h3>{title}</h3><p>{copy}</p></article>)}
          </div>
        </div>
      </section>

      <section className="home-section home-wrap" aria-labelledby="importance-title">
        <div className="home-section-head"><p className="home-kicker">03 / WHY VASTU MATTERS</p><h2 id="importance-title">A space that supports<br /><em>its purpose.</em></h2></div>
        <div className="home-services">
          <Link to="/residential-vastu" className="home-service">
            <div className="home-service-image"><img src="/images/upper image.jpg" loading="lazy" alt="Warm residential interior with natural light" /><span className="image-reveal-wipe reveal-on-scroll" aria-hidden="true" /></div>
            <div className="home-service-heading"><h3>For your home</h3><span aria-hidden="true">↗</span></div>
            <p>Guidance for rest, family life, room placement, and a balanced daily routine.</p>
          </Link>
          <Link to="/commercial-vastu" className="home-service">
            <div className="home-service-image"><img src="/images/lower image.jpg" loading="lazy" alt="Open and welcoming commercial reception" /><span className="image-reveal-wipe reveal-on-scroll" aria-hidden="true" /></div>
            <div className="home-service-heading"><h3>For your business</h3><span aria-hidden="true">↗</span></div>
            <p>Considered layouts for offices, shops, commercial properties, and plots.</p>
          </Link>
        </div>
        <div className="showcase-layout home-layered-showcase">
          <div className="showcase-text-col">
            <p className="home-kicker">A FEW WAYS SPACE CAN FEEL</p>
            <h3>Space. Light. Balance.</h3>
            <div className="showcase-nav-arrows">
              <button className="nav-arrow-btn" type="button" onClick={() => rotateCarousel(-1)} aria-label="Previous space image">←</button>
              <button className="nav-arrow-btn" type="button" onClick={() => rotateCarousel(1)} aria-label="Next space image">→</button>
            </div>
          </div>
          <div className="showcase-images-wrapper">
            <div className="showcase-track" ref={carouselRef}>
              {SPACE_STORIES.map(([tag, image, caption], index) => (
                <div key={tag} className={`showcase-slide-card ${index === 0 ? "card-pos-1" : index === 1 ? "card-pos-2" : index === 2 ? "card-pos-3" : "card-pos-rest"}`}>
                  <span className="showcase-card-tag">{tag}</span>
                  <img src={image} loading="lazy" alt={caption} className="no-reveal" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="home-section home-help" aria-labelledby="help-title">
        <div className="home-wrap">
          <div className="home-section-head"><p className="home-kicker">04 / HOW SUNANDHA HELPS</p><h2 id="help-title">Clear guidance.<br /><em>A personal approach.</em></h2></div>
          <div className="home-three">
            {[
              ["01", "Share your concerns", "Tell Sunandha about your space, your plans, and what feels unresolved."],
              ["02", "Understand your space", "Review direction, entrances, room use, and the layout together."],
              ["03", "Take practical steps", "Receive recommendations suited to your property and daily life."],
            ].map(([n, title, copy]) => <article className="home-lined-item" key={n}><span className="home-index">{n}</span><h3>{title}</h3><p>{copy}</p></article>)}
          </div>
          <div className="home-help-bottom"><Link className="home-text-link" to="/contact">Discuss your space <span aria-hidden="true">↗</span></Link><Link className="home-subtle-link" to="/astro-numerology">Explore Astro Numerology →</Link></div>
        </div>
      </section>

      <section className="home-section home-profile" aria-labelledby="profile-title">
        <div className="home-wrap home-profile-grid">
          <div><p className="home-kicker">05 / MEET SUNANDHA</p><h2 id="profile-title">The person behind<br /><em>the guidance.</em></h2></div>
          <div className="home-copy"><p>Personal Vastu and Astro Numerology guidance, shaped around your space and your goals.</p><Link className="home-text-link" to="/profile">Meet Sunandha <span aria-hidden="true">↗</span></Link><Link className="home-button" to="/contact">Book a consultation <span aria-hidden="true">↗</span></Link></div>
        </div>
      </section>
    </div>
  );
}
