import { Link } from "react-router-dom";
import { Mail, MapPin, MessageCircle } from "lucide-react";

const copyrightYear = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="site-footer reference-footer">
      <div className="footer-container">
        <div className="footer-contact-strip">
          <div className="footer-contact-block"><MessageCircle aria-hidden="true" /><span className="footer-col-title">CONSULTATION</span><Link to="/contact">Discuss your space</Link></div>
          <div className="footer-contact-block"><Mail aria-hidden="true" /><span className="footer-col-title">GET IN TOUCH</span><Link to="/contact">Send an enquiry</Link></div>
          <div className="footer-contact-block"><MapPin aria-hidden="true" /><span className="footer-col-title">LOCATION</span><span>India · UAE</span></div>
        </div>

        <Link to="/" className="footer-brand-names"><span className="footer-brand-title">Sunandha</span><span className="footer-brand-sub">VASTU · NUMEROLOGY</span></Link>

        <nav className="footer-minimal-links" aria-label="Footer navigation">
          <Link to="/">Home</Link><Link to="/vastu">Vastu</Link><Link to="/numerology">Numerology</Link><Link to="/profile">Profile</Link><Link to="/contact">Contact</Link><a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
        </nav>

        <div className="footer-bottom-bar">&copy; {copyrightYear} Sunandha. All rights reserved.</div>
      </div>
    </footer>
  );
}
