import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { ArrowRight, ChevronDown, Menu, X } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [numerologyOpen, setNumerologyOpen] = useState(false);
  const [vastuOpen, setVastuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile drawer and dropdowns on route change
  useEffect(() => {
    setMobileOpen(false);
    setNumerologyOpen(false);
    setVastuOpen(false);
  }, [location.pathname]);

  const isActive = (path: string) => location.pathname === path;
  const isNumerologyActive =
    location.pathname === "/numerology" ||
    location.pathname === "/astro-numerology";
  const isVastuActive =
    location.pathname === "/vastu" ||
    location.pathname === "/astro-vastu";

  return (
    <div className={`header-wrapper ${scrolled ? "scrolled" : ""}`}>
      <header className="nav-bar">
        {/* Brand */}
        <Link to="/" className="brand-sunandha-block">
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
          <ul className={`nav-menu ${mobileOpen ? "mobile-open" : ""}`}>
            <li className={`nav-item ${isActive("/") ? "active" : ""}`}>
              <Link to="/">Home</Link>
            </li>

            {/* Numerology Dropdown */}
            <li
              className={`nav-item dropdown ${isNumerologyActive ? "active" : ""} ${numerologyOpen ? "open" : ""}`}
              onMouseEnter={() => setNumerologyOpen(true)}
              onMouseLeave={() => setNumerologyOpen(false)}
            >
              <button
                type="button"
                className="dropdown-toggle"
                onClick={() => setNumerologyOpen(!numerologyOpen)}
              >
                <span>Numerology</span>
                <ChevronDown size={14} className="dropdown-caret" />
              </button>
              <div className="nav-dropdown-menu">
                <Link
                  to="/numerology"
                  className={`nav-dropdown-card ${isActive("/numerology") ? "active" : ""}`}
                >
                  <span className="nav-dropdown-title">Numerology</span>
                </Link>
                <Link
                  to="/astro-numerology"
                  className={`nav-dropdown-card ${isActive("/astro-numerology") ? "active" : ""}`}
                >
                  <span className="nav-dropdown-title">Astro Numerology</span>
                </Link>
              </div>
            </li>

            {/* Vastu Dropdown */}
            <li
              className={`nav-item dropdown ${isVastuActive ? "active" : ""} ${vastuOpen ? "open" : ""}`}
              onMouseEnter={() => setVastuOpen(true)}
              onMouseLeave={() => setVastuOpen(false)}
            >
              <button
                type="button"
                className="dropdown-toggle"
                onClick={() => setVastuOpen(!vastuOpen)}
              >
                <span>Vastu</span>
                <ChevronDown size={14} className="dropdown-caret" />
              </button>
              <div className="nav-dropdown-menu">
                <Link
                  to="/vastu"
                  className={`nav-dropdown-card ${isActive("/vastu") ? "active" : ""}`}
                >
                  <span className="nav-dropdown-title">Vastu</span>
                </Link>
                <Link
                  to="/astro-vastu"
                  className={`nav-dropdown-card ${isActive("/astro-vastu") ? "active" : ""}`}
                >
                  <span className="nav-dropdown-title">Astro Vastu</span>
                </Link>
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
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </header>
    </div>
  );
}
