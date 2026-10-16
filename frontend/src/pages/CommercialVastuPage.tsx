import ServiceEditorial, { type ServiceStory } from "../components/ServiceEditorial";

const story: ServiceStory = {
  layout: "commercial",
  label: "Commercial Vastu · Plots",
  title: "Build with direction.",
  lead: "Commercial spaces with purpose.",
  hero: "/images/hero-commercial.jpg",
  heroAlt: "Commercial Vastu architectural setting",
  image: "/images/lower image.jpg",
  imageAlt: "Commercial Vastu consultation setting",
  heading: "Commercial spaces with purpose.",
  description: "Every commercial property has its own opportunities and practical requirements. Our Commercial Vastu consultation explores how entrances, spatial arrangement, circulation, and orientation relate to traditional Vastu principles while considering the intended use of your business space. Whether you are planning an office, opening a retail store, developing a hospitality space, or evaluating a commercial plot, the consultation offers a structured perspective before you make important property decisions.",
  points: [
    ["Business layout", "Review entrances, workstations, customer movement, and the arrangement of functional areas."],
    ["Hospitality and shared spaces", "Consider arrival experiences, circulation, and the relationship between communal and private areas."],
    ["Commercial plots", "Explore plot orientation, shape, access, and surroundings before planning future development."]
  ],
  banner: {
    title: <>Build with direction.<br />Grow with purpose.</>,
    buttonText: "Book your consultation",
    buttonLink: "/contact",
    image: "/images/commercial-vastu-banner.jpg",
    imageAlt: "Commercial corporate pavilion with architectural reflecting water"
  },
  faqs: [
    ["What should I prepare?", "Bring the site plan, property orientation, intended business use, and any specific questions."],
    ["When should I consult?", "Consider a consultation before purchasing, leasing, designing, or renovating a commercial property."]
  ],
  related: ["Return to Astro Numerology", "/astro-numerology"],
  variant: "split",
  closingTitle: "Build with direction. Grow with purpose.",
  closingBody: "Every successful space begins with thoughtful planning. Explore how traditional Vastu principles can inform your commercial property decisions, from selecting a plot to shaping a workspace that reflects your business needs. Whether you are planning a new development, expanding your operations, or rethinking an existing space, begin with a conversation tailored to your goals. Take the next step towards a more considered commercial space."
};

export default function CommercialVastuPage() {
  return <ServiceEditorial story={story} />;
}
