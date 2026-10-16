import ServiceEditorial, { type ServiceStory } from "../components/ServiceEditorial";

const story: ServiceStory = {
  layout: "land",
  "label": "Residential Geo Vastu · UAE only",
  "title": "Know the site before you commit.",
  "lead": "A closer look at the land, orientation, and surroundings of your UAE home before you commit.",
  "hero": "/images/hero-geo-vastu-site.png",
  "heroAlt": "UAE residential site plan and compass overlooking an undeveloped plot",
  "image": "/images/showcase-sanctuary-pool.jpg",
  "imageAlt": "Residential Geo Vastu · UAE only consultation setting",
  "heading": "The home beyond its walls.",
  "description": "Geo Vastu focuses on the home beyond its walls. Review the residential property's orientation, site shape, roads, neighbouring structures, open spaces, and proposed plans before purchase or development.",
  "points": [
    [
      "Land and surroundings",
      "Consider roads, neighbouring structures, open spaces, and the character of the surrounding site."
    ],
    [
      "Direction and form",
      "Review orientation, site shape, access, and proposed construction plans."
    ],
    [
      "Next steps",
      "Discuss practical considerations for purchase, planning, or future development."
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
