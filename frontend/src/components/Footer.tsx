import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-container">
        <div className="footer-top-grid reveal-on-scroll reveal-delay-1">

          {/* Column 1: Brand & Statement Headline */}
          <div className="footer-brand-statement">
            <div className="footer-brand-header">
              <div className="footer-brand-names">
                <span className="footer-brand-title">Sunandha</span>
                <span className="footer-brand-sub">VASTU · NUMEROLOGY</span>
              </div>
            </div>
            <h2 className="footer-statement-headline">
              Spaces aligned with the life<br />
              you are ready to build.
            </h2>
            <Link to="/contact" className="btn-pill-solid">
              <span>Book Consultation</span>
              <span className="arrow">→</span>
            </Link>
          </div>

          {/* Column 2: SERVICES */}
          <div>
            <div className="footer-col-title">SERVICES</div>
            <ul className="footer-links-list">
              <li><Link to="/vastu">Vastu · Astro Vastu</Link></li>
              <li><Link to="/commercial-vastu">Commercial &amp; Plots</Link></li>
              <li><Link to="/vastu">Geo Vastu — UAE</Link></li>
              <li><Link to="/numerology">Numerology · Astro Numerology</Link></li>
            </ul>
          </div>

          {/* Column 3: EXPLORE */}
          <div>
            <div className="footer-col-title">EXPLORE</div>
            <ul className="footer-links-list">
              <li><Link to="/profile">Profile &amp; Biography</Link></li>
              <li><Link to="/contact">Contact · Booking</Link></li>
              <li>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                  Instagram
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: CONTACT */}
          <div>
            <div className="footer-col-title">CONTACT</div>
            <div className="footer-contact-info">
              <a href="mailto:hello@sunandha.com">hello@sunandha.com</a>
              <a href="tel:+910000000000">+91 00000 00000</a>
              <span>India · UAE consultations</span>
            </div>
          </div>

        </div>

        {/* Bottom Legal Row */}
        <div className="footer-bottom-bar">
          <div>&copy; 2026 Sunandha. All rights reserved.</div>
          <div className="footer-bottom-links">
            <a href="#">Privacy</a>
            <span>·</span>
            <a href="#">Terms</a>
            <span>·</span>
            <a href="#">Accessibility</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
