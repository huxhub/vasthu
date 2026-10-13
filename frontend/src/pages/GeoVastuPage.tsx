import { Link } from "react-router-dom";

export default function GeoVastuPage() {
  return (
    <main className="commercial-minimal-page">
      <div className="commercial-minimal-container">
        <section className="commercial-hero">
          <span className="commercial-eyebrow">RESIDENTIAL VASTU <span className="sep">/</span> UAE</span>
          <h1 className="commercial-title">Understand the land before you build.</h1>
          <p className="commercial-lead">
            Geo Vastu evaluates the relationship between a property, its surroundings, direction, and natural forces—helping UAE homeowners make more informed decisions before purchase, construction, or renovation.
          </p>
          <div className="commercial-btn-wrap">
            <Link to="/contact" className="commercial-cta-btn">Book a Geo Vastu Consultation <span className="arrow">→</span></Link>
          </div>
        </section>

        <section className="commercial-pillars-section">
          <div className="commercial-section-header">
            <span className="commercial-eyebrow">WHAT WE REVIEW</span>
            <h2 className="commercial-section-title">Clarity before commitment.</h2>
          </div>
          <div className="commercial-pillars-grid">
            {[
              ["01", "Plot and surroundings", "Roads, adjacent structures, open spaces, and the wider environment."],
              ["02", "Direction and form", "Orientation, shape, entrances, and the relationship between the site and the plan."],
              ["03", "Practical guidance", "Clear recommendations for purchase, planning, or non-invasive correction."],
            ].map(([num, title, text]) => (
              <article className="commercial-pillar-item" key={num}>
                <span className="pillar-num">{num}</span>
                <h3 className="pillar-heading">{title}</h3>
                <p className="pillar-text">{text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="commercial-closing">
          <div className="commercial-closing-inner">
            <span className="commercial-eyebrow">UAE RESIDENTIAL GUIDANCE</span>
            <h2 className="commercial-closing-title">Make your next property decision with <span className="commercial-title-italic">direction.</span></h2>
            <div className="commercial-btn-wrap">
              <Link to="/contact" className="commercial-cta-btn">Start an enquiry <span className="arrow">→</span></Link>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
