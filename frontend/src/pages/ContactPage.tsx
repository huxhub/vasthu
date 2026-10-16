import { useState } from "react";
import ReviewCarousel from "../components/ReviewCarousel";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    consultationType: "",
    name: "",
    phone: "",
    email: "",
    location: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="contact-exact-page">
      <div className="container contact-exact-container">
        {/* Top Hero Monograph */}
        <div className="contact-exact-hero">
          <h1 className="contact-exact-hero-title">
            Let's understand<br />
            <span className="contact-exact-hero-italic">your space.</span>
          </h1>
          <p className="contact-exact-hero-desc">
            Every meaningful conversation begins with a question. Tell us about your property, your plans, or the guidance you are looking for. We will help you identify the consultation that best fits your needs.
          </p>
        </div>

        {/* 2-Column Main Section */}
        <div className="contact-exact-grid">
          {/* Left Column */}
          <div className="contact-exact-left">
            <figure className="contact-editorial-photo"><img src="/images/editorial-study.png" alt="A quiet study with natural light and a floor plan prepared for consultation" loading="lazy" /></figure>

            <div className="contact-exact-social">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-exact-instagram"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
                <span>Instagram</span>
              </a>
            </div>

            <p className="contact-exact-note">
              India · UAE consultations.
            </p>
          </div>

          {/* Right Column (Form) */}
          <div className="contact-exact-right" id="consultation-form">
            <div className="contact-exact-form-eyebrow">YOUR DETAILS</div>
            <h2 className="contact-exact-form-title">Request a consultation.</h2>
            <p className="contact-exact-form-intro">Tell us what you would like to explore.</p>

            {submitted ? (
              <div className="contact-exact-success">
                <div className="success-badge">✓</div>
                <h3>Consultation Request Received</h3>
                <p>
                  Thank you, {formData.name || "valued client"}. We have received your request and will reach out shortly.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({
                      consultationType: "",
                      name: "",
                      phone: "",
                      email: "",
                      location: "",
                      message: "",
                    });
                  }}
                  className="contact-reset-btn"
                >
                  Submit Another Request
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="contact-exact-form">
                {/* Consultation Type Select */}
                <div className="contact-line-field">
                  <label className="contact-line-label">Consultation Type *</label>
                  <div className="contact-select-wrap">
                    <select
                      required
                      value={formData.consultationType}
                      onChange={(e) => setFormData({ ...formData, consultationType: e.target.value })}
                      className="contact-line-select"
                    >
                      <option value="" disabled>Please select</option>
                      <option value="Residential Vastu">Residential Vastu</option>
                      <option value="Commercial and Workspace">Commercial Vastu &amp; Plots</option>
                      <option value="Astro Numerology">Astro Numerology</option>
                      <option value="Astro Vastu Synthesis">Astro Vastu Synthesis</option>
                      <option value="Pre-Purchase Land Audit">Pre-Purchase Land Audit</option>
                      <option value="Geo Vastu UAE">Geo Vastu — UAE</option>
                    </select>
                    <span className="select-chevron">⌄</span>
                  </div>
                </div>

                {/* Name & Phone 2-Col */}
                <div className="contact-line-row-2">
                  <div className="contact-line-field">
                    <label className="contact-line-label">Full name *</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="contact-line-input"
                    />
                  </div>
                  <div className="contact-line-field">
                    <label className="contact-line-label">Phone number *</label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="contact-line-input"
                    />
                  </div>
                </div>

                {/* Email & Location 2-Col */}
                <div className="contact-line-row-2">
                  <div className="contact-line-field">
                    <label className="contact-line-label">Email address *</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="contact-line-input"
                    />
                  </div>
                  <div className="contact-line-field">
                    <label className="contact-line-label">Property location *</label>
                    <input
                      type="text"
                      required
                      value={formData.location}
                      onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                      className="contact-line-input"
                    />
                  </div>
                </div>

                {/* Message */}
                <div className="contact-line-field">
                  <label className="contact-line-label">Message</label>
                  <textarea
                    rows={2}
                    placeholder="Share your questions, planning stage, or particular concerns. A short description is enough to begin."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="contact-line-textarea"
                  />
                </div>

                {/* Submit Row */}
                <div className="contact-exact-submit-wrap">
                  <button type="submit" className="contact-exact-submit-btn">
                    <span>Request Consultation</span>
                    <span className="arrow">→</span>
                  </button>
                </div>

                {/* Disclaimer */}
                <p className="contact-exact-disclaimer">
                  Your details remain in this browser during the preview. Online submission is not connected. Please do not enter sensitive information.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
      <ReviewCarousel />
      <section className="contact-content-notes container">
        <div><p className="contact-section-label">A conversation shaped around you.</p><p>Whether you are planning a new home, reviewing a commercial property, considering land before purchase, or exploring Astro Numerology, your enquiry is the starting point for a more personal conversation.</p><p>Share a few details about what brings you here. There is no need to have every answer ready.</p></div>
        <div><p className="contact-section-label">What happens next?</p><p><strong>01 — We understand your enquiry</strong><br />Your selected consultation and message help establish what you are looking for.</p><p><strong>02 — We discuss the next steps</strong><br />We can clarify relevant details and explain the consultation process.</p><p><strong>03 — Your consultation begins</strong><br />Once arrangements are confirmed, you can prepare the information relevant to your chosen service.</p></div>
        <div><p className="contact-section-label">A few things to know.</p><p><strong>What information should I share?</strong><br />Start with your contact details, consultation type, and a brief description of your enquiry.</p><p><strong>Can I enquire from the UAE?</strong><br />Yes. Geo Vastu is offered specifically for UAE clients.</p><p><strong>Is my information private?</strong><br />Your details should be handled securely and used only for appropriate enquiry and consultation-related purposes.</p></div>
        <div><h2>Begin with a conversation.</h2><p>You do not need to have everything figured out before reaching out. Start with what matters to you, and take the next step from there.</p></div>
      </section>
    </div>
  );
}
