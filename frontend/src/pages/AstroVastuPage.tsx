import ServiceEditorial, { type ServiceStory } from "../components/ServiceEditorial";

const story: ServiceStory = {
  layout: "gallery",
  label: "Astro Vastu",
  title: "Your space, in personal context.",
  lead: "Vastu and astrological interpretation considered together.",
  hero: "/images/astro vasthu hero.jpg",
  heroAlt: "Astro Vastu architectural setting",
  image: "/images/vasthu about.jpg",
  imageAlt: "Astro Vastu consultation setting",
  heading: "The person and the place.",
  description: "Our surroundings are part of everyday life, shaping how we rest, work, move, and spend time with others. Astro Vastu brings traditional Vastu principles and astrological interpretation together to explore your property alongside your personal context. The consultation considers relevant details about your space, birth information, and individual priorities. Rather than relying on generalised recommendations, the discussion focuses on your particular questions and the practical realities of your home or workplace. The intention is to offer an additional perspective for reflection, helping you consider your surroundings and possible changes with greater awareness.",
  points: [
    ["Property review", "Understand your property's direction, entrances, layout, room functions, and surrounding environment."],
    ["Personal context", "Discuss your birth details and current priorities where relevant to the consultation."],
    ["Considered recommendations", "Explore traditional interpretations and possible adjustments in the context of your property's practical requirements."]
  ],
  extraSections: [
    {
      eyebrow: "A combined perspective",
      title: "Understanding space and personal context.",
      body: "Astro Vastu brings these perspectives together in a conversation shaped around your property, priorities, and everyday circumstances.",
      image: "/images/astro intro.jpg",
      imageAlt: "Architectural geometry and natural light",
      items: [
        ["Vastu principles", "Explore property orientation, entrance placement, room arrangement, and the relationship between different spaces through traditional Vastu concepts."],
        ["Astrological interpretation", "Consider relevant birth details through traditional astrological frameworks, depending on the nature of your consultation and the questions you bring."],
        ["A personalised discussion", "Bring these perspectives together in a conversation shaped around your property, priorities, and everyday circumstances."]
      ],
      tone: "lavender"
    },
    {
      eyebrow: "Who is Astro Vastu for?",
      title: "A different perspective on your space.",
      body: "Astro Vastu may interest people planning a new home, reviewing an existing property, considering a workplace, or seeking to understand traditional perspectives on the relationship between personal circumstances and surroundings. It can also provide an opportunity to discuss questions that involve both property planning and individual priorities in one consultation. Every property and personal situation is different. The discussion is tailored to the information available and the topics you wish to explore.",
      image: "/images/astro-celestial-hero.jpg",
      imageAlt: "Atmospheric light across an interior space",
      tone: "sage"
    }
  ],
  faqs: [
    ["What should I prepare?", "A floor plan, property-facing direction, full date of birth, birth time, and birthplace are useful starting points. The exact information required may depend on the consultation."],
    ["What should I know before booking?", "Astro Vastu combines traditional Vastu and astrological interpretations. These practices are not scientifically established methods for predicting outcomes, and recommendations should be considered alongside practical property requirements and professional advice where needed."],
    ["Do I need to make major changes to my property?", "Not necessarily. Any recommendations depend on the property, your questions, and the practical options available. Structural changes should always be assessed by qualified professionals."]
  ],
  related: ["Return to Astro Numerology", "/astro-numerology"],
  variant: "split",
  banner: {
    title: "Bring your space and your questions.",
    buttonText: "Enquire now",
    buttonLink: "/contact",
    image: "/images/astro-vastu-oculus.jpg",
    imageAlt: "A circular architectural opening framing the sky"
  },
  closingTitle: "Begin with a conversation.",
  closingBody: "Whether you are planning, reassessing, or simply exploring a different perspective, begin with a conversation about your property and what matters to you. Book an Astro Vastu consultation to explore the approach and discuss the next steps."
};

export default function AstroVastuPage() {
  return <ServiceEditorial story={story} />;
}
