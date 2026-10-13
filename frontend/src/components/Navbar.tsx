import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { ArrowRight, ChevronDown, Menu, X } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [overHero, setOverHero] = useState(true);
  const [darkHero, setDarkHero] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [numerologyOpen, setNumerologyOpen] = useState(false);
  const [vastuOpen, setVastuOpen] = useState(false);
  const [relocationOpen, setRelocationOpen] = useState(false);
  const closeTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const location = useLocation();

  const handleDropdownEnter = (type: "numerology" | "vastu" | "relocation") => {
    if (!window.matchMedia("(min-width: 1025px) and (hover: hover) and (pointer: fine)").matches) return;

    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
    setNumerologyOpen(type === "numerology");
    setVastuOpen(type === "vastu");
    setRelocationOpen(type === "relocation");
  };

  const handleDropdownLeave = () => {
    if (!window.matchMedia("(min-width: 1025px) and (hover: hover) and (pointer: fine)").matches) return;

    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
    }
    closeTimeoutRef.current = setTimeout(() => {
      setNumerologyOpen(false);
      setVastuOpen(false);
      setRelocationOpen(false);
    }, 280);
  };

  const toggleDropdown = (type: "numerology" | "vastu" | "relocation") => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }

    setNumerologyOpen(type === "numerology" ? !numerologyOpen : false);
    setVastuOpen(type === "vastu" ? !vastuOpen : false);
    setRelocationOpen(type === "relocation" ? !relocationOpen : false);
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
      const hero = document.querySelector<HTMLElement>(
        "main .home-hero, main .service-cover, main .relocation-new-hero, main .profile-introduction, main .contact-exact-hero"
      );
      const headerHeight = document.querySelector(".header-wrapper")?.getBoundingClientRect().height ?? 80;
      setOverHero(Boolean(hero && hero.getBoundingClientRect().bottom > headerHeight));
      setDarkHero(Boolean(hero?.matches(".home-hero") || hero?.closest(
        ".service-layout-residential, .service-layout-celestial, .relocation-uk"
      )));
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);
    const observer = new ResizeObserver(handleScroll);
    const main = document.querySelector(".app-shell > main");
    if (main) observer.observe(main);
    handleScroll();
    const frame = window.requestAnimationFrame(handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
      window.cancelAnimationFrame(frame);
      observer.disconnect();
    };
  }, [location.pathname]);

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
    <div className={`header-wrapper ${scrolled ? "scrolled" : ""} ${overHero ? "over-hero" : ""} ${overHero && darkHero ? "over-dark-hero" : ""}`}>
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
                onClick={() => toggleDropdown("numerology")}
              >
                <span>Numerology</span>
                <ChevronDown size={14} className="dropdown-caret" />
              </button>
              <div className="nav-dropdown-menu" onClick={closeAll}>
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
              onMouseEnter={() => handleDropdownEnter("vastu")}
              onMouseLeave={handleDropdownLeave}
            >
              <button
                type="button"
                className="dropdown-toggle"
                aria-expanded={vastuOpen}
                aria-haspopup="true"
                onClick={() => toggleDropdown("vastu")}
              >
                <span>Vastu</span>
                <ChevronDown size={14} className="dropdown-caret" />
              </button>
              <div className="nav-dropdown-menu" onClick={closeAll}>
                <Link
                  to="/residential-vastu"
                  className={`nav-dropdown-card ${isActive("/residential-vastu") ? "active" : ""}`}
                >
                  <span className="nav-dropdown-title">Residential Vastu</span>
                </Link>
                <Link
                  to="/commercial-vastu"
                  className={`nav-dropdown-card ${isActive("/commercial-vastu") ? "active" : ""}`}
                >
                  <span className="nav-dropdown-title">Commercial Vastu</span>
                </Link>
                <Link
                  to="/vastu"
                  className={`nav-dropdown-card ${isActive("/vastu") ? "active" : ""}`}
                >
                  <span className="nav-dropdown-title">Vastu Shastra</span>
                </Link>
                <Link
                  to="/astro-vastu"
                  className={`nav-dropdown-card ${isActive("/astro-vastu") ? "active" : ""}`}
                >
                  <span className="nav-dropdown-title">Astro Vastu</span>
                </Link>
                <Link
                  to="/geo-vastu"
                  className={`nav-dropdown-card ${isActive("/geo-vastu") ? "active" : ""}`}
                >
                  <span className="nav-dropdown-title">Geo Vastu · UAE</span>
                </Link>
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
                onClick={() => toggleDropdown("relocation")}
              >
                <span>UAE Relocation</span>
                <ChevronDown size={14} className="dropdown-caret" />
              </button>
              <div className="nav-dropdown-menu" onClick={closeAll}>
                <Link
                  to="/relocate-germany-to-uae"
                  className={`nav-dropdown-card ${isActive("/relocate-germany-to-uae") ? "active" : ""}`}
                >
                  <span className="nav-dropdown-title">Germany to UAE</span>
                </Link>
                <Link
                  to="/relocate-uk-to-uae"
                  className={`nav-dropdown-card ${isActive("/relocate-uk-to-uae") ? "active" : ""}`}
                >
                  <span className="nav-dropdown-title">UK to UAE</span>
                </Link>
              </div>
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
          <Link to="/contact" className="nav-consult-cta-btn" onClick={closeAll}>
            <span>Book Consultation</span>
            <ArrowRight size={14} />
          </Link>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          className={`mobile-menu-btn ${mobileOpen ? "open" : ""}`}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle navigation menu"
          aria-expanded={mobileOpen}
          aria-controls="primary-navigation"
        >
          <Menu size={20} className="mobile-menu-icon mobile-menu-icon--menu" />
          <X size={20} className="mobile-menu-icon mobile-menu-icon--close" />
        </button>
      </header>
    </div>
  );
}
