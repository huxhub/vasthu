import ServiceEditorial, { type ServiceStory } from "../components/ServiceEditorial";

const story: ServiceStory = {
  layout: "celestial",
  "label": "Astro Numerology",
  "title": "Numbers and astrology. One conversation.",
  "lead": "A combined reading of your birth details, name, and personal questions.",
  "hero": "/images/astro numerology hero.jpg",
  "heroAlt": "Astro Numerology architectural setting",
  "image": "/images/astro intro.jpg",
  "imageAlt": "Astro Numerology consultation setting",
  "heading": "A combined perspective.",
  "description": "Consider numerology alongside astrological interpretation to discuss the choices that matter to you.",
  "points": [
    [
      "Your details",
      "Start with your name, birth date, time, and place."
    ],
    [
      "Patterns and timing",
      "Consider numerical and astrological perspectives together."
    ],
    [
      "Personal guidance",
      "Bring the discussion back to your everyday decisions."
    ]
  ],
  "faqs": [
    [
      "What should I prepare?",
      "Your name and birth date, time, and place where available."
    ],
    [
      "What should I know before booking?",
      "This reading combines numerology with an astrological birth chart. It does not guarantee future outcomes."
    ]
  ],
  "related": [
    "Explore Numerology",
    "/numerology"
  ],
  "variant": "split"
};

export default function AstroNumerologyPage() {
  return <ServiceEditorial story={story} />;
}
