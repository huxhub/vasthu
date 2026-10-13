import ServiceEditorial, { type ServiceStory } from "../components/ServiceEditorial";

const story: ServiceStory = {
  layout: "gallery",
  "label": "Astro Vastu",
  "title": "Your space, in personal context.",
  "lead": "Vastu and astrological interpretation considered together.",
  "hero": "/images/astro vasthu hero.jpg",
  "heroAlt": "Astro Vastu architectural setting",
  "image": "/images/vasthu about.jpg",
  "imageAlt": "Astro Vastu consultation setting",
  "heading": "The person and the place.",
  "description": "Bring your property layout and birth details into one discussion about how you use the space.",
  "points": [
    [
      "Property review",
      "Understand direction, entrances, room use, and layout."
    ],
    [
      "Personal context",
      "Consider birth details alongside your priorities."
    ],
    [
      "Recommendations",
      "Discuss changes that fit your home or workplace."
    ]
  ],
  "faqs": [
    [
      "What should I prepare?",
      "A floor plan, property location, and birth details where available."
    ],
    [
      "What should I know before booking?",
      "Homes and commercial spaces can both be discussed, with guidance specific to their use."
    ]
  ],
  "related": [
    "Explore Vastu",
    "/vastu"
  ],
  "variant": "split"
};

export default function AstroVastuPage() {
  return <ServiceEditorial story={story} />;
}
