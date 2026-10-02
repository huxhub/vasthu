import { useState } from "react";

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
            Share what is on your mind. A thoughtful conversation is the first step.
          </p>
        </div>

        {/* 2-Column Main Section */}
        <div className="contact-exact-grid">
          {/* Left Column */}
          <div className="contact-exact-left">
            <h2 className="contact-exact-left-title">A personal connection.</h2>
            <p className="contact-exact-left-desc">
              For property questions, personal guidance, or simply to understand the right consultation for you.
            </p>

            <div className="contact-exact-book-wrap">
              <a href="#consultation-form" className="contact-exact-book-link">
                <span>Book a Consultation</span>
                <span className="arrow">→</span>
              </a>
            </div>

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
              Verified phone, email, location, and Instagram profile to be added.
            </p>
          </div>

          {/* Right Column (Form) */}
          <div className="contact-exact-right" id="consultation-form">
            <div className="contact-exact-form-eyebrow">YOUR DETAILS</div>
            <h2 className="contact-exact-form-title">Request a consultation.</h2>

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
                      <option value="Commercial and Workspace">Commercial and Workspace Spheres</option>
                      <option value="Astro Numerology">Astro Numerology</option>
                      <option value="Astro Vastu Synthesis">Astro Vastu Synthesis</option>
                      <option value="Pre-Purchase Land Audit">Pre-Purchase Land Audit</option>
                    </select>
                    <span className="select-chevron">⌄</span>
                  </div>
                </div>

                {/* Name & Phone 2-Col */}
                <div className="contact-line-row-2">
                  <div className="contact-line-field">
                    <label className="contact-line-label">Name *</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="contact-line-input"
                    />
                  </div>
                  <div className="contact-line-field">
                    <label className="contact-line-label">Phone *</label>
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
                    <label className="contact-line-label">Email *</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="contact-line-input"
                    />
                  </div>
                  <div className="contact-line-field">
                    <label className="contact-line-label">Location *</label>
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
                    placeholder="Tell us a little about your questions or your space."
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
    </div>
  );
}
