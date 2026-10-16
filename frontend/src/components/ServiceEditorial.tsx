import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";
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
  extraSections?: {
    eyebrow: string;
    title: React.ReactNode;
    body?: string;
    image: string;
    imageAlt: string;
    items?: [string, string][];
    steps?: [string, string][];
    tone?: "paper" | "lavender" | "sage";
  }[];
  closingTitle?: React.ReactNode;
  closingBody?: string;
};

export default function ServiceEditorial({ story }: { story: ServiceStory }) {
  const feature = {
    journal: ["Find", "your pattern.", "/images/editorial-study.png"],
    celestial: ["Read", "the rhythm.", "/images/astro-celestial-hero.jpg"],
    landscape: ["Shape", "your space.", "/images/editorial-courtyard.png"],
    gallery: ["Align", "with intention.", "/images/astro intro.jpg"],
    residential: ["Feel", "at home.", "/images/editorial-courtyard.png"],
    commercial: ["Build", "with direction.", "/images/hero-commercial.jpg"],
    land: ["Know", "the ground.", "/images/editorial-courtyard.png"],
  }[story.layout ?? "landscape"];
  return (
    <div className={`service-editorial service-editorial--${story.variant ?? "panorama"} service-layout-${story.layout ?? "landscape"}`}>
      <section className="service-cover" aria-labelledby="service-title">
        <div className="service-cover-image"><img className="no-reveal" src={story.hero} alt={story.heroAlt} fetchPriority="high" /></div>
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
        <figure className={`service-story-image ${story.layout === "celestial" ? "celestial-expand-image" : ""}`}><img src={story.image} alt={story.imageAlt} loading="lazy" />{story.layout === "celestial" && <span className="celestial-image-caption">A considered perspective on space and self</span>}</figure>
        {story.layout === "residential" && <figure className="service-companion-image"><img src="/images/about image.jpg" alt="A home opening onto a quiet courtyard" loading="lazy" /></figure>}
        {story.layout === "gallery" && <figure className="service-companion-image"><img src="/images/astro intro.jpg" alt="Circular skylight and architectural geometry" loading="lazy" /></figure>}
      </section>

      <section className="service-review">
        <div className="service-shell service-review-grid">
          <div><p className="service-label">Your consultation</p><h2>What we explore.</h2></div>
          <div>{story.points.map(([title, copy], index) => <article className="service-review-row" key={title}><span className="service-number">0{index + 1}</span><div><h3>{title}</h3><p>{copy}</p></div></article>)}</div>
        </div>
      </section>

      {story.extraSections?.map((section, sectionIndex) => (
        <section className={`service-extra service-extra--${section.tone ?? "paper"} ${sectionIndex % 2 ? "service-extra--reverse" : ""}`} key={section.eyebrow}>
          <div className="service-shell service-extra-grid">
            <figure className="service-extra-image"><img src={section.image} alt={section.imageAlt} loading="lazy" /><span>{String(sectionIndex + 1).padStart(2, "0")} / {section.eyebrow}</span></figure>
            <div className="service-extra-copy"><p className="service-label">{section.eyebrow}</p><h2>{section.title}</h2>{section.body && <p className="service-extra-body">{section.body}</p>}
              {section.items && <div className="service-extra-items">{section.items.map(([itemTitle, itemCopy]) => <article key={itemTitle}><h3>{itemTitle}</h3><p>{itemCopy}</p></article>)}</div>}
              {section.steps && <div className="service-extra-steps">{section.steps.map(([step, stepCopy]) => <article key={step}><span>{step.split(" — ")[0]}</span><div><h3>{step.split(" — ").slice(1).join(" — ")}</h3><p>{stepCopy}</p></div></article>)}</div>}
            </div>
          </div>
        </section>
      ))}

      <section className={`service-feature service-feature--${story.layout ?? "landscape"}`}>
        <div className="service-feature-copy"><p className="service-label">A simple intention</p><h2>{feature[0]}<br /><em>{feature[1]}</em></h2></div>
        <figure><img src={feature[2]} alt="" aria-hidden="true" loading="lazy" /></figure>
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
        <div>{story.faqs.map(([q, a]) => <details key={q} name="service-faq"><summary>{q}<ChevronDown className="accordion-caret" size={18} aria-hidden="true" /></summary><div className="accordion-answer"><p>{a}</p></div></details>)}</div>
      </section>
      <section className="service-shell service-closing" id="consultation-booking"><h2>{story.closingTitle ?? "Begin with a conversation."}</h2>{story.closingBody && <p>{story.closingBody}</p>}<Link className="service-link" to="/contact">Book a consultation <span aria-hidden="true">→</span></Link></section>
    </div>
  );
}
