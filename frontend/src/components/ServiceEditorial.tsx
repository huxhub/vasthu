import { Link } from "react-router-dom";
import PanoramicCtaBanner from "./PanoramicCtaBanner";
import "./ServiceEditorial.css";
import "./ServiceLayouts.css";

export type ServiceStory = {
  label: string;
  title: string;
  lead: string;
  hero: string;
  heroAlt: string;
  image: string;
  imageAlt: string;
  heading: string;
  description: string;
  points: [string, string][];
  faqs: [string, string][];
  related: [string, string];
  variant?: "split" | "panorama";
  layout?: "journal" | "celestial" | "landscape" | "gallery" | "residential" | "commercial" | "land";
  banner?: {
    title: React.ReactNode;
    buttonText?: string;
    buttonLink?: string;
    image: string;
    imageAlt?: string;
  };
};

export default function ServiceEditorial({ story }: { story: ServiceStory }) {
  return (
    <div className={`service-editorial service-editorial--${story.variant ?? "panorama"} service-layout-${story.layout ?? "landscape"}`}>
      <section className="service-cover" aria-labelledby="service-title">
        <div className="service-cover-image"><img src={story.hero} alt={story.heroAlt} fetchPriority="high" /></div>
        <div className="service-cover-copy">
          <p className="service-label">{story.label}</p>
          <h1 id="service-title">{story.title}</h1>
          <p>{story.lead}</p>
          <Link className="service-link" to="/contact">Book a consultation <span aria-hidden="true">↗</span></Link>
        </div>
      </section>

      <section className="service-story service-shell" aria-labelledby="story-title">
        <div className="service-story-copy">
          <p className="service-label">A considered approach</p>
          <h2 id="story-title">{story.heading}</h2>
          <p>{story.description}</p>
          <Link className="service-text-link" to={story.related[1]}>{story.related[0]} <span aria-hidden="true">↗</span></Link>
        </div>
        <figure className="service-story-image"><img src={story.image} alt={story.imageAlt} loading="lazy" /></figure>
        {story.layout === "residential" && <figure className="service-companion-image"><img src="/images/about image.jpg" alt="A home opening onto a quiet courtyard" loading="lazy" /></figure>}
        {story.layout === "gallery" && <figure className="service-companion-image"><img src="/images/astro intro.jpg" alt="Circular skylight and architectural geometry" loading="lazy" /></figure>}
      </section>

      <section className="service-review">
        <div className="service-shell service-review-grid">
          <div><p className="service-label">Your consultation</p><h2>What we explore.</h2></div>
          <div>{story.points.map(([title, copy], index) => <article className="service-review-row" key={title}><span className="service-number">0{index + 1}</span><div><h3>{title}</h3><p>{copy}</p></div></article>)}</div>
        </div>
      </section>

      {story.banner && (
        <section className="service-shell service-panoramic-wrapper">
          <PanoramicCtaBanner
            title={story.banner.title}
            buttonText={story.banner.buttonText}
            buttonLink={story.banner.buttonLink}
            image={story.banner.image}
            imageAlt={story.banner.imageAlt}
          />
        </section>
      )}

      <section className="service-shell service-questions" aria-labelledby="questions-title">
        <div><p className="service-label">Good to know</p><h2 id="questions-title">Before you begin.</h2></div>
        <div>{story.faqs.map(([q, a]) => <details key={q}><summary>{q}<span aria-hidden="true">+</span></summary><p>{a}</p></details>)}</div>
      </section>
      <section className="service-shell service-closing" id="consultation-booking"><h2>Begin with a conversation.</h2><Link className="service-link" to="/contact">Enquire now <span aria-hidden="true">↗</span></Link></section>
    </div>
  );
}
