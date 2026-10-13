import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { ArrowRight, ChevronDown, Menu, X } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [numerologyOpen, setNumerologyOpen] = useState(false);
  const [vastuOpen, setVastuOpen] = useState(false);
  const [relocationOpen, setRelocationOpen] = useState(false);
  const closeTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const location = useLocation();

  const handleDropdownEnter = (type: "numerology" | "vastu" | "relocation") => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
    setNumerologyOpen(type === "numerology");
    setVastuOpen(type === "vastu");
    setRelocationOpen(type === "relocation");
  };

  const handleDropdownLeave = () => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
    }
    closeTimeoutRef.current = setTimeout(() => {
      setNumerologyOpen(false);
      setVastuOpen(false);
      setRelocationOpen(false);
    }, 280);
  };

  useEffect(() => {
    return () => {
      if (closeTimeoutRef.current) {
        clearTimeout(closeTimeoutRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeAll = () => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
    }
    setMobileOpen(false);
    setNumerologyOpen(false);
    setVastuOpen(false);
    setRelocationOpen(false);
  };

  // Close mobile drawer and dropdowns on route change
  useEffect(() => {
    closeAll();
  }, [location.pathname]);

  const isActive = (path: string) => location.pathname === path;
  const isNumerologyActive =
    location.pathname === "/numerology" ||
    location.pathname === "/astro-numerology";
  const isVastuActive =
    location.pathname === "/vastu" ||
    location.pathname === "/astro-vastu" ||
    location.pathname === "/residential-vastu" ||
    location.pathname === "/geo-vastu" ||
    location.pathname === "/commercial-vastu";
  const isRelocationActive =
    location.pathname === "/relocate-germany-to-uae" ||
    location.pathname === "/relocate-uk-to-uae";

  return (
    <div className={`header-wrapper ${scrolled ? "scrolled" : ""}`}>
      <header className="nav-bar">
        {/* Brand */}
        <Link to="/" className="brand-sunandha-block" onClick={closeAll}>
          <img
            src="/images/logo.jpeg"
            alt="Sunandha Vastu Logo"
            className="brand-logo-img"
          />
          <div className="brand-sunandha-text">
            <span className="brand-sunandha-title">Sunandha</span>
            <span className="brand-sunandha-sub">VASTU · NUMEROLOGY</span>
          </div>
        </Link>

        {/* Desktop & Mobile Menu */}
        <nav>
          <ul
            id="primary-navigation"
            className={`nav-menu ${mobileOpen ? "mobile-open" : ""}`}
            onClick={(e) => {
              if ((e.target as HTMLElement).closest("a")) {
                closeAll();
              }
            }}
          >
            <li className={`nav-item ${isActive("/") ? "active" : ""}`}>
              <Link to="/">Home</Link>
            </li>

            {/* Numerology Dropdown */}
            <li
              className={`nav-item dropdown ${isNumerologyActive ? "active" : ""} ${numerologyOpen ? "open" : ""}`}
              onMouseEnter={() => handleDropdownEnter("numerology")}
              onMouseLeave={handleDropdownLeave}
            >
              <button
                type="button"
                className="dropdown-toggle"
                aria-expanded={numerologyOpen}
                aria-haspopup="true"
                onClick={() => setNumerologyOpen(!numerologyOpen)}
              >
                <span>Numerology</span>
                <ChevronDown size={14} className="dropdown-caret" />
              </button>
              <div className="nav-dropdown-menu nav-mega-fullwidth">
                <div className="nav-mega-container">
                  {/* Left Side: Dropdown Text & Items */}
                  <div className="nav-mega-left">
                    <div className="nav-mega-header">
                      <span className="nav-mega-badge">Sacred Numbers</span>
                      <h3 className="nav-mega-title">Numerology Science</h3>
                    </div>
                    <div className="nav-mega-links-list">
                      <Link
                        to="/numerology"
                        className={`nav-dropdown-card mega-link-item ${isActive("/numerology") ? "active" : ""}`}
                      >
                        <div className="mega-link-content">
                          <span className="nav-dropdown-title">Numerology</span>
                          <p className="mega-link-desc">Name analysis & life destiny alignment.</p>
                        </div>
                        <ArrowRight size={14} className="mega-link-arrow" />
                      </Link>
                      <Link
                        to="/astro-numerology"
                        className={`nav-dropdown-card mega-link-item ${isActive("/astro-numerology") ? "active" : ""}`}
                      >
                        <div className="mega-link-content">
                          <span className="nav-dropdown-title">Astro Numerology</span>
                          <p className="mega-link-desc">Planetary dashas & timing synergy.</p>
                        </div>
                        <ArrowRight size={14} className="mega-link-arrow" />
                      </Link>
                    </div>
                  </div>

                  {/* Right Side: Section Hero Banner Image */}
                  <div className="nav-mega-right">
                    <div className="nav-mega-banner-card">
                      <img
                        src="/images/hero-numerology.jpg"
                        alt="Numerology Science Banner"
                        className="nav-mega-banner-img"
                      />
                      <div className="nav-mega-banner-content">
                        <span className="nav-mega-banner-tag">Advisory</span>
                        <h4 className="nav-mega-banner-heading">Vibrational Alignment</h4>
                        <Link to="/contact" className="nav-mega-banner-btn">
                          <span>Explore Reading</span>
                          <ArrowRight size={12} />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>

            {/* Vastu Dropdown */}
            <li
              className={`nav-item dropdown ${isVastuActive ? "active" : ""} ${vastuOpen ? "open" : ""}`}
              onMouseEnter={() => handleDropdownEnter("vastu")}
              onMouseLeave={handleDropdownLeave}
            >
              <button
                type="button"
                className="dropdown-toggle"
                aria-expanded={vastuOpen}
                aria-haspopup="true"
                onClick={() => setVastuOpen(!vastuOpen)}
              >
                <span>Vastu</span>
                <ChevronDown size={14} className="dropdown-caret" />
              </button>
              <div className="nav-dropdown-menu nav-mega-fullwidth">
                <div className="nav-mega-container">
                  {/* Left Side: Dropdown Text & Items */}
                  <div className="nav-mega-left">
                    <div className="nav-mega-header">
                      <span className="nav-mega-badge">Spatial Harmony</span>
                      <h3 className="nav-mega-title">Vastu Shastra Services</h3>
                    </div>
                    <div className="nav-mega-links-list">
                      <Link
                        to="/vastu"
                        className={`nav-dropdown-card mega-link-item ${isActive("/vastu") ? "active" : ""}`}
                      >
                        <div className="mega-link-content">
                          <span className="nav-dropdown-title">Vastu Shastra</span>
                          <p className="mega-link-desc">Directional energy balancing.</p>
                        </div>
                        <ArrowRight size={14} className="mega-link-arrow" />
                      </Link>
                      <Link
                        to="/astro-vastu"
                        className={`nav-dropdown-card mega-link-item ${isActive("/astro-vastu") ? "active" : ""}`}
                      >
                        <div className="mega-link-content">
                          <span className="nav-dropdown-title">Astro Vastu</span>
                          <p className="mega-link-desc">Sync property with natal chart.</p>
                        </div>
                        <ArrowRight size={14} className="mega-link-arrow" />
                      </Link>
                      <Link
                        to="/geo-vastu"
                        className={`nav-dropdown-card mega-link-item ${isActive("/geo-vastu") ? "active" : ""}`}
                      >
                        <div className="mega-link-content">
                          <span className="nav-dropdown-title">Geo Vastu · UAE</span>
                          <p className="mega-link-desc">Geopathic stress neutralization.</p>
                        </div>
                        <ArrowRight size={14} className="mega-link-arrow" />
                      </Link>
                    </div>
                  </div>

                  {/* Right Side: Section Hero Banner Image */}
                  <div className="nav-mega-right">
                    <div className="nav-mega-banner-card">
                      <img
                        src="/images/hero-vastu.jpg"
                        alt="Vastu Shastra Banner"
                        className="nav-mega-banner-img"
                      />
                      <div className="nav-mega-banner-content">
                        <span className="nav-mega-banner-tag">Sanctuary Vastu</span>
                        <h4 className="nav-mega-banner-heading">Harmonious Living</h4>
                        <Link to="/contact" className="nav-mega-banner-btn">
                          <span>Request Audit</span>
                          <ArrowRight size={12} />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>

            {/* UAE Relocation Dropdown */}
            <li
              className={`nav-item dropdown ${isRelocationActive ? "active" : ""} ${relocationOpen ? "open" : ""}`}
              onMouseEnter={() => handleDropdownEnter("relocation")}
              onMouseLeave={handleDropdownLeave}
            >
              <button
                type="button"
                className="dropdown-toggle"
                aria-expanded={relocationOpen}
                aria-haspopup="true"
                onClick={() => setRelocationOpen(!relocationOpen)}
              >
                <span>UAE Relocation</span>
                <ChevronDown size={14} className="dropdown-caret" />
              </button>
              <div className="nav-dropdown-menu nav-mega-fullwidth">
                <div className="nav-mega-container">
                  {/* Left Side: Dropdown Text & Items */}
                  <div className="nav-mega-left">
                    <div className="nav-mega-header">
                      <span className="nav-mega-badge">Global Transitions</span>
                      <h3 className="nav-mega-title">UAE Relocation Advisory</h3>
                    </div>
                    <div className="nav-mega-links-list">
                      <Link
                        to="/relocate-germany-to-uae"
                        className={`nav-dropdown-card mega-link-item ${isActive("/relocate-germany-to-uae") ? "active" : ""}`}
                      >
                        <div className="mega-link-content">
                          <span className="nav-dropdown-title">Germany to UAE</span>
                          <p className="mega-link-desc">Expat property vetting & transition guidance.</p>
                        </div>
                        <ArrowRight size={14} className="mega-link-arrow" />
                      </Link>
                      <Link
                        to="/relocate-uk-to-uae"
                        className={`nav-dropdown-card mega-link-item ${isActive("/relocate-uk-to-uae") ? "active" : ""}`}
                      >
                        <div className="mega-link-content">
                          <span className="nav-dropdown-title">UK to UAE</span>
                          <p className="mega-link-desc">Dubai spatial selection & business alignment.</p>
                        </div>
                        <ArrowRight size={14} className="mega-link-arrow" />
                      </Link>
                    </div>
                  </div>

                  {/* Right Side: Section Hero Banner Image */}
                  <div className="nav-mega-right">
                    <div className="nav-mega-banner-card">
                      <img
                        src="/images/hero-geo-vastu.jpg"
                        alt="UAE Relocation Advisory Banner"
                        className="nav-mega-banner-img"
                      />
                      <div className="nav-mega-banner-content">
                        <span className="nav-mega-banner-tag">Expat Gateway</span>
                        <h4 className="nav-mega-banner-heading">Dubai & UAE Living</h4>
                        <Link to="/contact" className="nav-mega-banner-btn">
                          <span>Start Relocation</span>
                          <ArrowRight size={12} />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>

            <li className={`nav-item ${isActive("/residential-vastu") ? "active" : ""}`}>
              <Link to="/residential-vastu">Residential Vastu</Link>
            </li>

            <li className={`nav-item ${isActive("/commercial-vastu") ? "active" : ""}`}>
              <Link to="/commercial-vastu">Commercial Vastu</Link>
            </li>

            <li className={`nav-item ${isActive("/contact") ? "active" : ""}`}>
              <Link to="/contact">Contact</Link>
            </li>

            <li className={`nav-item ${isActive("/profile") ? "active" : ""}`}>
              <Link to="/profile">Profile</Link>
            </li>
          </ul>
        </nav>

        {/* Right Action */}
        <div className="nav-header-action-right">
          <Link to="/contact" className="nav-consult-cta-btn">
            <span>Book Consultation</span>
            <ArrowRight size={14} />
          </Link>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          className="mobile-menu-btn"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle navigation menu"
          aria-expanded={mobileOpen}
          aria-controls="primary-navigation"
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </header>
    </div>
  );
}
