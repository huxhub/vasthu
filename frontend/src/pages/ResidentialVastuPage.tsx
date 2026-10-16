import ServiceEditorial, { type ServiceStory } from "../components/ServiceEditorial";

const story: ServiceStory = {
  layout: "residential",
  label: "Residential Vastu",
  title: "A home that feels right.",
  lead: "A considered approach to the home you are creating, choosing, or already living in.",
  hero: "/images/hero-residential.jpg",
  heroAlt: "Residential Vastu architectural setting",
  image: "/images/upper image.jpg",
  imageAlt: "Residential Vastu consultation setting",
  heading: "A home that feels right.",
  description: "Your home is more than a floor plan. It is where everyday routines unfold, relationships grow, and personal moments find their place. Our Residential Vastu consultation explores how your home's layout, entrance, room placement, and movement between spaces relate to traditional Vastu principles. Whether you are planning a new home, considering a property, or improving your existing space, we offer a thoughtful perspective to help you make informed decisions.",
  points: [
    ["Living and entrance", "Explore the entrance, circulation, and shared spaces that shape everyday living."],
    ["Rest and routine", "Review bedrooms, kitchen placement, work areas, and the spaces that support your daily habits."],
    ["Before you move", "Consider floor plans and layout possibilities before buying, renting, or renovating."]
  ],
  banner: {
    title: <>A simple intention.<br /><em>Feel at home.</em></>,
    buttonText: "Book your consultation",
    buttonLink: "/contact",
    image: "/images/vastu-sanctuary-banner.jpg",
    imageAlt: "Vastu sanctuary residence with serene reflecting courtyard"
  },
  faqs: [
    ["What should I prepare?", "A floor plan, the home's facing direction, and your questions are useful starting points."],
    ["What should I know before booking?", "Our consultation offers traditional Vastu-based perspectives to support your planning and reflection."],
    ["Can I enquire about Geo Vastu?", "Geo Vastu is available for UAE residential properties only. You can also enquire about a Residential Vastu consultation to begin."]
  ],
  related: ["Explore Geo Vastu — UAE only", "/geo-vastu"],
  variant: "panorama",
  closingTitle: "Begin with a conversation.",
  closingBody: "Create a living environment that reflects your needs, routines, and aspirations. Begin with a conversation and explore a considered approach to your home's design."
};

export default function ResidentialVastuPage() {
  return <ServiceEditorial story={story} />;
}
