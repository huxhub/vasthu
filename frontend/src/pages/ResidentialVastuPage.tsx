import ServiceEditorial, { type ServiceStory } from "../components/ServiceEditorial";

const story: ServiceStory = {
  layout: "residential",
  "label": "Residential Vastu",
  "title": "A home that feels considered.",
  "lead": "Guidance for apartments, villas, rented homes, and new beginnings.",
  "hero": "/images/hero-residential.jpg",
  "heroAlt": "Residential Vastu architectural setting",
  "image": "/images/upper image.jpg",
  "imageAlt": "Residential Vastu consultation setting",
  "heading": "Room for everyday life.",
  "description": "Review your home through the routines it supports: rest, family time, work, and movement.",
  "points": [
    [
      "Living and entrance",
      "Consider arrival, circulation, and shared spaces."
    ],
    [
      "Rest and routine",
      "Review bedrooms, kitchen placement, and work areas."
    ],
    [
      "Before you move",
      "Compare floor plans before renting, buying, or renovating."
    ]
  ],
  banner: {
    title: (
      <>
        Live where harmony<br />
        becomes home
      </>
    ),
    buttonText: "ENQUIRE NOW",
    buttonLink: "/contact",
    image: "/images/vastu-sanctuary-banner.jpg",
    imageAlt: "Vastu sanctuary residence with serene reflecting courtyard",
  },
  "faqs": [
    [
      "What should I prepare?",
      "Your floor plan, location, photographs, and the questions you want to explore."
    ],
    [
      "What should I know before booking?",
      "Rented homes can be reviewed too. Geo Vastu is available for UAE residential properties only."
    ]
  ],
  "related": [
    "Geo Vastu · UAE only",
    "/geo-vastu"
  ],
  "variant": "panorama"
};

export default function ResidentialVastuPage() {
  return <ServiceEditorial story={story} />;
}
