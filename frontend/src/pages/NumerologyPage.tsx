import ServiceEditorial, { type ServiceStory } from "../components/ServiceEditorial";

const story: ServiceStory = {
  layout: "journal",
  "label": "Numerology",
  "title": "A personal perspective through numbers.",
  "lead": "Explore the patterns in your name and birth date.",
  "hero": "/images/hero-numerology.jpg",
  "heroAlt": "Numerology architectural setting",
  "image": "/images/numerology about.jpg",
  "imageAlt": "Numerology consultation setting",
  "heading": "Your questions come first.",
  "description": "Relate traditional number patterns to the decisions and changes you are considering.",
  "points": [
    [
      "Birth date",
      "Explore the numbers associated with your date of birth."
    ],
    [
      "Personal and business names",
      "Discuss name patterns in the context of your goals."
    ],
    [
      "Life changes",
      "Reflect on work, relationships, and personal direction."
    ]
  ],
  "faqs": [
    [
      "What should I prepare?",
      "Your full name, birth date, and the questions you want to discuss."
    ],
    [
      "What should I know before booking?",
      "Numerology is a traditional interpretive practice, not a guarantee of future events."
    ]
  ],
  "related": [
    "Explore Astro Numerology",
    "/astro-numerology"
  ],
  "variant": "panorama"
};

export default function NumerologyPage() {
  return <ServiceEditorial story={story} />;
}
