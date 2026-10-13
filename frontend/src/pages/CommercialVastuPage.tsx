import ServiceEditorial, { type ServiceStory } from "../components/ServiceEditorial";

const story: ServiceStory = {
  layout: "commercial",
  "label": "Commercial Vastu · Plots",
  "title": "Space to work with purpose.",
  "lead": "Guidance for offices, shops, hospitality spaces, and commercial plots.",
  "hero": "/images/hero-commercial.jpg",
  "heroAlt": "Commercial Vastu · Plots architectural setting",
  "image": "/images/lower image.jpg",
  "imageAlt": "Commercial Vastu · Plots consultation setting",
  "heading": "Designed around your business.",
  "description": "Consider direction and layout alongside the way your team and customers use the property.",
  "points": [
    [
      "Offices and shops",
      "Review entrances, workstations, and customer movement."
    ],
    [
      "Hospitality spaces",
      "Consider arrival, circulation, and communal areas."
    ],
    [
      "Commercial plots",
      "Review orientation, site shape, access, and surroundings before development."
    ]
  ],
  banner: {
    title: (
      <>
        Spaces designed for<br />
        growth & purpose
      </>
    ),
    buttonText: "ENQUIRE NOW",
    buttonLink: "/contact",
    image: "/images/commercial-vastu-banner.jpg",
    imageAlt: "Commercial corporate pavilion with architectural reflecting water",
  },
  "faqs": [
    [
      "What should I prepare?",
      "Your floor or site plan, location, and intended business use."
    ],
    [
      "What should I know before booking?",
      "Existing businesses and vacant plots can both be reviewed, with your operational constraints in mind."
    ]
  ],
  "related": [
    "Explore Astro Vastu",
    "/astro-vastu"
  ],
  "variant": "split"
};

export default function CommercialVastuPage() {
  return <ServiceEditorial story={story} />;
}
