import { Link } from "react-router-dom";
import "../components/ServiceEditorial.css";

export default function ProfilePage() {
  return (
    <div className="service-editorial profile-editorial">
      <section className="service-shell service-story profile-introduction">
        <div className="service-story-copy">
          <p className="service-label">Meet Sunandha</p>
          <h1>A personal approach to your space.</h1>
          <p>Sunandha offers Vastu and Astro Numerology guidance for homes, workplaces, and personal decisions. Her approach begins with listening &mdash; understanding your concerns, your surroundings, and what you hope to achieve before exploring traditional principles and possible perspectives.</p>
          <p>Whether you are planning a new home, reviewing an existing property, considering a commercial space, or seeking personal clarity through Astro Numerology, each consultation begins with your individual needs.</p>
          <Link className="service-link" to="/contact">Start a conversation &rarr;</Link>
        </div>
        <figure className="service-story-image"><img src="/images/home-woman-hero.png" alt="Woman in an ivory saree in a sunlit courtyard" fetchPriority="high" /></figure>
      </section>
      <section className="service-review">
        <div className="service-shell service-review-grid">
          <div><p className="service-label">Her approach</p><h2>Listen. Understand. Guide.</h2></div>
          <div>
            <article className="service-review-row"><span className="service-number">01</span><div><h3>Your priorities</h3><p>Begin with what matters to you. Discuss your property, daily routines, plans, or personal questions so the consultation reflects your circumstances.</p></div></article>
            <article className="service-review-row"><span className="service-number">02</span><div><h3>A considered review</h3><p>Explore relevant details such as property orientation, room placement, floor plans, birth information, or other details appropriate to your chosen consultation.</p></div></article>
            <article className="service-review-row"><span className="service-number">03</span><div><h3>Practical guidance</h3><p>Discuss traditional interpretations and recommendations in the context of your everyday life, property requirements, and individual priorities.</p></div></article>
          </div>
        </div>
      </section>
      <section className="service-shell service-closing profile-final-section">
        <div className="profile-final-rail">
          <p className="service-label">Her practice</p>
          <h2>Guidance for spaces and personal journeys.</h2>
        </div>
        <div className="profile-final-content">
          <div className="profile-practice-links">
            <Link className="service-text-link" to="/vastu">Residential Vastu &rarr;</Link>
            <Link className="service-text-link" to="/vastu">Commercial Vastu &rarr;</Link>
            <Link className="service-text-link" to="/vastu">Geo Vastu &rarr;</Link>
            <Link className="service-text-link" to="/astro-numerology">Astro Numerology &rarr;</Link>
          </div>
          <h2>A thoughtful way forward</h2>
          <h3>Every space has a story.</h3>
          <p>A home reflects the way you live. A workplace supports the way you work. Personal decisions often begin with questions that deserve time and consideration.</p>
          <p>Sunandha's approach creates room to explore these subjects through traditional Vastu and Astro Numerology perspectives, without losing sight of your individual circumstances and practical needs.</p>
          <p>The intention is to help you consider different perspectives, understand possible recommendations, and make your own informed decisions.</p>
          <h2>Begin with a conversation.</h2>
          <h3>Tell her what matters to you.</h3>
          <p>Whether you are planning a property, reviewing your current space, or exploring Astro Numerology, your consultation begins with understanding your questions.</p>
          <p>Share what you are looking for, discuss your priorities, and discover which consultation may be appropriate for your needs.</p>
          <Link className="service-link" to="/contact">Start a conversation with Sunandha &rarr;</Link>
        </div>
      </section>
    </div>
  );
}
