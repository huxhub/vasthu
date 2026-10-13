import { Link } from "react-router-dom";
import "../components/ServiceEditorial.css";

export default function ProfilePage() {
  return (
    <div className="service-editorial profile-editorial">
      <section className="service-shell service-story profile-introduction">
        <div className="service-story-copy">
          <p className="service-label">Meet Sunandha</p>
          <h1>A personal approach to your space.</h1>
          <p>Sunandha offers Vastu and Astro Numerology guidance for homes, workplaces, and personal decisions.</p>
          <Link className="service-link" to="/contact">Start a conversation <span aria-hidden="true">↗</span></Link>
        </div>
        <figure className="service-story-image"><img src="/images/home-woman-hero.png" alt="Woman in an ivory saree in a sunlit courtyard" fetchPriority="high" /></figure>
      </section>
      <section className="service-review">
        <div className="service-shell service-review-grid">
          <div><p className="service-label">Her approach</p><h2>Listen. Understand. Guide.</h2></div>
          <div>
            <article className="service-review-row"><span className="service-number">01</span><div><h3>Your priorities</h3><p>Begin with what matters to you and how you use your space.</p></div></article>
            <article className="service-review-row"><span className="service-number">02</span><div><h3>A considered review</h3><p>Explore the layout, directions, and relevant personal details.</p></div></article>
            <article className="service-review-row"><span className="service-number">03</span><div><h3>Practical guidance</h3><p>Discuss recommendations that fit your property and daily life.</p></div></article>
          </div>
        </div>
      </section>
      <section className="service-shell service-closing"><h2>Explore her practice.</h2><Link className="service-text-link" to="/vastu">Vastu ↗</Link><Link className="service-text-link" to="/astro-numerology">Astro Numerology ↗</Link></section>
    </div>
  );
}
