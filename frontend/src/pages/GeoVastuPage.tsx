import ServiceEditorial, { type ServiceStory } from "../components/ServiceEditorial";

const story: ServiceStory = {
  layout: "land",
  "label": "Residential Geo Vastu · UAE only",
  "title": "Know the site before you commit.",
  "lead": "A closer look at the land and surroundings of your UAE home.",
  "hero": "/images/hero-geo-vastu.jpg",
  "heroAlt": "Residential Geo Vastu · UAE only architectural setting",
  "image": "/images/showcase-sanctuary-pool.jpg",
  "imageAlt": "Residential Geo Vastu · UAE only consultation setting",
  "heading": "The home beyond its walls.",
  "description": "Review a residential property's orientation and surrounding site before purchase or planning.",
  "points": [
    [
      "Land and surroundings",
      "Consider roads, neighbouring structures, and open spaces."
    ],
    [
      "Direction and form",
      "Review orientation, site shape, access, and proposed plans."
    ],
    [
      "Next steps",
      "Discuss practical considerations for purchase or development."
    ]
  ],
  banner: {
    title: (
      <>
        Grounded spaces across<br />
        the UAE horizon
      </>
    ),
    buttonText: "ENQUIRE NOW",
    buttonLink: "/contact",
    image: "/images/uae-vastu-banner.jpg",
    imageAlt: "UAE residential villa courtyard with reflecting pool",
  },
  "faqs": [
    [
      "What should I prepare?",
      "The site plan, location, photographs, and any proposed construction details."
    ],
    [
      "What should I know before booking?",
      "This service is available for residential properties in the UAE only."
    ]
  ],
  "related": [
    "Explore Residential Vastu",
    "/residential-vastu"
  ],
  "variant": "split"
};

export default function GeoVastuPage() {
  return <ServiceEditorial story={story} />;
}
