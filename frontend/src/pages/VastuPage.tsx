import ServiceEditorial, { type ServiceStory } from "../components/ServiceEditorial";

const story: ServiceStory = {
  layout: "landscape",
  label: "Vastu Shastra",
  title: "Traditional wisdom. Thoughtful spaces.",
  lead: "Consider direction, light, and layout in the way you live and work. Explore traditional Vastu Shastra principles through a considered approach to the spaces that shape your everyday life.",
  hero: "/images/vasthu hero.jpg",
  heroAlt: "Vastu Shastra architectural setting",
  image: "/images/vasthu about.jpg",
  imageAlt: "Vastu Shastra consultation setting",
  heading: "Balance begins with your space.",
  description: "Vastu Shastra is a traditional Indian system of architecture that considers the relationship between a built environment, its orientation, and the way spaces are arranged. It offers a framework for reflecting on how a property is planned and experienced. Our approach considers your property as a whole, with attention to its layout, entrances, room placement, surroundings, and everyday use. Recommendations are discussed in the context of your individual needs and the practical realities of your space. Whether you are planning a new property or reviewing an existing one, the intention is to help you explore traditional principles alongside contemporary living requirements.",
  points: [
    ["Orientation and surroundings", "Understand the property's facing direction, entrance position, surrounding features, and overall orientation."],
    ["Layout and daily living", "Review room placement, movement between spaces, natural light, and how different areas support your daily routines."],
    ["Thoughtful recommendations", "Discuss possible adjustments and planning considerations suited to your property's existing layout, priorities, and intended use."]
  ],
  extraSections: [
    {
      eyebrow: "Vastu for different spaces",
      title: "Guidance shaped around your needs.",
      body: "Each consultation begins with understanding the property and the questions you want to address.",
      image: "/images/vastu-sanctuary-banner.jpg",
      imageAlt: "A considered residential space with a reflecting pool",
      items: [
        ["Residential Vastu", "Explore the arrangement of your home, from entrances and bedrooms to kitchens, shared spaces, and everyday movement."],
        ["Commercial Vastu", "Consider offices, shops, hospitality environments, and commercial plots with attention to layout, access, orientation, and intended use."],
        ["Geo Vastu", "Explore location-focused considerations for residential properties through our dedicated Geo Vastu consultation available for the UAE."]
      ],
      tone: "paper"
    },
    {
      eyebrow: "A practical perspective",
      title: "Traditional principles. Modern requirements.",
      body: "Every property has its own opportunities and constraints. Existing structures, building regulations, accessibility, ventilation, and personal preferences all influence what is practical. A Vastu consultation can help you examine traditional recommendations and consider how they relate to your space. Where changes are being considered, structural safety and professional architectural or engineering advice remain essential. The focus is on thoughtful evaluation rather than a one-size-fits-all solution.",
      image: "/images/editorial-courtyard.png",
      imageAlt: "A bright courtyard connecting interior and exterior spaces",
      tone: "sage"
    }
  ],
  banner: {
    title: <>Where timeless wisdom<br />meets modern living</>,
    buttonText: "Book your consultation",
    buttonLink: "/contact",
    image: "/images/vastu-sanctuary-banner.jpg",
    imageAlt: "Vastu sanctuary residence with peaceful reflecting pool"
  },
  faqs: [
    ["What should I prepare?", "A floor plan, the property's facing direction, and a list of your questions are useful starting points. Additional details may be requested depending on the consultation."],
    ["When should I consider a Vastu consultation?", "You may consider one when purchasing a property, planning construction, renovating, or reviewing the arrangement of an existing home or workplace."],
    ["Do I need to make structural changes?", "Not necessarily. Recommendations depend on the property and the consultation. Any proposed changes should be evaluated for practicality, safety, and compliance with applicable building requirements."]
  ],
  related: ["Return to Astro Numerology", "/astro-numerology"],
  variant: "panorama",
  closingTitle: "Begin with a conversation.",
  closingBody: "Share your questions, understand the available consultation options, and take the next step towards a more considered approach to your space."
};

export default function VastuPage() {
  return <ServiceEditorial story={story} />;
}
