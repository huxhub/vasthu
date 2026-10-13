import { Link } from "react-router-dom";
import PanoramicCtaBanner from "../components/PanoramicCtaBanner";

type Origin = "Germany" | "the UK";

const pages = {
  Germany: {
    slug: "germany",
    label: "GERMANY → UAE",
    title: <>From one way of living<br /><em>to another.</em></>,
    intro: "Moving from Germany to the UAE? Review your next home before you make the move.",
    image: "/images/hero-geo-vastu.jpg",
    imageAlt: "Warm UAE courtyard with natural light and geometric pathways",
    caption: "A home in the UAE should feel considered from the moment you enter it.",
    detailTitle: "A new home, read with familiar care.",
    detail: "Compare UAE apartments and villas through their orientation, floor plan, and the routines you want to bring with you.",
    moments: [
      ["Before the search", "Compare orientation, entrances, surroundings, and floor plans while you still have choices."],
      ["Before the move", "Understand where rest, work, family time, and everyday movement may sit within the home."],
      ["After arrival", "Make practical adjustments that help the new space feel settled and supportive."],
    ],
  },
  "the UK": {
    slug: "uk",
    label: "UK → UAE",
    title: <>A new address.<br /><em>A different rhythm.</em></>,
    intro: "From the UK to the UAE: choose a home that fits your new daily rhythm.",
    image: "/images/hero-residential.jpg",
    imageAlt: "Light filled UAE residence with a calm, welcoming interior",
    caption: "The right home can make a new country feel familiar sooner.",
    detailTitle: "Choose a space that meets you where you are.",
    detail: "Consider natural light, entrances, and room use as you move from familiar UK routines to life in the UAE.",
    moments: [
      ["While viewing", "Read the property as a whole: its direction, shape, entry, light, and relationship to the surroundings."],
      ["While planning", "Think through how the rooms will support work, rest, children, guests, and the routines of your new life."],
      ["While settling", "Use simple, non-structural recommendations to make the property feel more balanced."],
    ],
  },
} as const;

const faqs = [
  ["Can the property be reviewed before I travel?", "Yes. Floor plans, location details, photographs, compass information, and a video call can support an initial review."],
  ["Do I need to own the property?", "No. The guidance can be used while comparing properties, renting a home, or settling into a place you have already chosen."],
  ["Will this require renovation?", "The consultation begins with practical observations and non-invasive recommendations. Any next step depends on the property."],
];

export default function UaeRelocationPage({ origin }: { origin: Origin }) {
  const page = pages[origin];
  return (
    <main className={`relocation-page relocation-${page.slug}`}>
      <section className="relocation-new-hero">
        <div className="relocation-new-hero-image"><img src={page.image} alt={page.imageAlt} /></div>
        <div className="relocation-new-hero-copy relocation-shell">
          <p className="relocation-eyebrow">{page.label}</p>
          <h1>{page.title}</h1>
          <p>{page.intro}</p>
          <Link className="relocation-primary-cta" to="/contact">Plan your consultation <span>↗</span></Link>
        </div>
      </section>

      <section className="relocation-new-intro relocation-shell">
        <figure className="relocation-intro-photo"><img src={origin === "Germany" ? "/images/upper image.jpg" : "/images/about image.jpg"} alt="Residential interior with natural light and space for daily living" loading="lazy" /></figure>
        <div><p className="relocation-section-label">A UAE HOME, CONSIDERED IN CONTEXT</p><h2>{page.detailTitle}</h2><p>{page.detail}</p></div>
      </section>

      <section className="relocation-new-moments">
        <div className="relocation-shell">
          <div className="relocation-new-section-head"><p className="relocation-section-label">THE RIGHT MOMENT TO ASK</p><h2>Guidance across the move.</h2></div>
          <div className="relocation-new-timeline">
            {page.moments.map(([title, text], index) => <div className="relocation-new-moment" key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{text}</p></div>)}
          </div>
        </div>
      </section>

      <section className="relocation-shell">
        <PanoramicCtaBanner
          title={
            <>
              Live where a new<br />
              chapter begins
            </>
          }
          buttonText="ENQUIRE NOW"
          buttonLink="/contact"
          image="/images/uae-vastu-banner.jpg"
          imageAlt="Luxury UAE residence with tranquil courtyard pool"
        />
      </section>

      <section className="relocation-new-faq relocation-shell">
        <div><p className="relocation-section-label">COMMON QUESTIONS</p><h2>Before you make the move.</h2></div>
        <div>{faqs.map(([q, a]) => <details key={q}><summary>{q}<span>+</span></summary><p>{a}</p></details>)}</div>
      </section>

      <section className="relocation-new-closing relocation-shell">
        <p className="relocation-section-label">PRIVATE UAE ADVISORY</p>
        <h2>Begin with a clearer<br /><em>sense of place.</em></h2>
        <Link className="relocation-primary-cta" to="/contact">Book a consultation <span>↗</span></Link>
      </section>
    </main>
  );
}
