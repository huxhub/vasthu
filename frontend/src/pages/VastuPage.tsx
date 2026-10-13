import ServiceEditorial, { type ServiceStory } from "../components/ServiceEditorial";

const story: ServiceStory = {
  layout: "landscape",
  "label": "Vastu",
  "title": "Traditional wisdom. Thoughtful spaces.",
  "lead": "Consider direction, light, and layout in the way you live and work.",
  "hero": "/images/vasthu hero.jpg",
  "heroAlt": "Vastu architectural setting",
  "image": "/images/vasthu about.jpg",
  "imageAlt": "Vastu consultation setting",
  "heading": "Balance begins with your space.",
  "description": "Review the property as a whole, with recommendations shaped around its layout and use.",
  "points": [
    [
      "Orientation",
      "Review entrances, directions, and surroundings."
    ],
    [
      "Daily use",
      "Consider room placement, movement, and natural light."
    ],
    [
      "Practical changes",
      "Discuss adjustments suited to the existing property."
    ]
  ],
  banner: {
    title: (
      <>
        Where timeless wisdom<br />
        meets modern living
      </>
    ),
    buttonText: "ENQUIRE NOW",
    buttonLink: "/contact",
    image: "/images/vastu-sanctuary-banner.jpg",
    imageAlt: "Vastu sanctuary residence with peaceful reflecting pool",
  },
  "faqs": [
    [
      "What should I prepare?",
      "A floor plan, location, photographs, and your plans for the space."
    ],
    [
      "What should I know before booking?",
      "The consultation begins with room use and placement; renovation is not assumed to be necessary."
    ]
  ],
  "related": [
    "Explore Residential Vastu",
    "/residential-vastu"
  ],
  "variant": "panorama"
};

export default function VastuPage() {
  return <ServiceEditorial story={story} />;
}
