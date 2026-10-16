import ServiceEditorial, { type ServiceStory } from "../components/ServiceEditorial";

const story: ServiceStory = {
  layout: "celestial",
  label: "Astro Numerology",
  title: "Numbers and astrology. One conversation.",
  lead: "A combined reading of your birth details, name, and personal questions.",
  hero: "/images/astro numerology hero.jpg",
  heroAlt: "Astro Numerology architectural setting",
  image: "/images/astro intro.jpg",
  imageAlt: "Astro Numerology consultation setting",
  heading: "A combined perspective.",
  description: "Numerology explores symbolic patterns associated with numbers, while astrology interprets birth details through traditional astrological frameworks. Together, they offer two perspectives for reflecting on your experiences, priorities, and personal questions. The aim is not to predict every outcome, but to create space for reflection and a deeper understanding of the choices that matter to you.",
  points: [
    ["Your details", "Begin with your name, date of birth, birth time, birthplace, and the questions you would like to discuss."],
    ["Patterns and timing", "Explore relevant numerical associations and astrological interpretations through a combined perspective."],
    ["Personal guidance", "Connect the discussion to your current circumstances, priorities, and everyday decisions."],
    ["Reflection and next steps", "Take away perspectives to consider at your own pace, with the freedom to decide what feels relevant to your situation."]
  ],
  extraSections: [
    {
      eyebrow: "What is Astro Numerology?",
      title: "A personalised conversation.",
      body: "Astro Numerology brings numerological interpretations and astrological perspectives into one personalised conversation. It considers information such as your name and birth details alongside the questions you wish to explore. Rather than treating numbers or planetary positions as fixed answers, the consultation uses these traditional interpretive systems as starting points for reflection, helping you consider different perspectives on your personal journey.",
      image: "/images/numerology-geometry-hero.jpg",
      imageAlt: "Geometric numerology-inspired composition",
      tone: "lavender"
    },
    {
      eyebrow: "Why explore Astro Numerology?",
      title: "A broader perspective.",
      body: "Explore how numerological patterns and astrological interpretations may complement one another within a single reading. Bring your individual circumstances, interests, and questions into the consultation rather than relying on generalised interpretations. Use the discussion to examine your priorities, recognise recurring themes, and think more deliberately about possible next steps.",
      image: "/images/astro-celestial-hero.jpg",
      imageAlt: "Celestial light across a reflective interior",
      tone: "sage"
    },
    {
      eyebrow: "What can you explore?",
      title: "Personal direction.",
      body: "Reflect on your interests, priorities, and the themes that shape your personal journey. Explore traditional perspectives on relationships, communication, career choices, professional priorities, personal timing, and the questions that matter to you. These interpretations are reflective rather than scientifically established predictions and should not replace professional advice for consequential decisions.",
      image: "/images/hero-astro.jpg",
      imageAlt: "Atmospheric celestial consultation setting",
      tone: "paper"
    }
  ],
  faqs: [
    ["What is an Astro Numerology consultation?", "It combines numerological interpretations with astrological perspectives to explore your personal questions and circumstances."],
    ["What information should I prepare?", "Your full name, date of birth, birth time, and birthplace are useful starting points. You can also prepare a few questions you would like to discuss."],
    ["Do I need to know numerology or astrology beforehand?", "No. The consultation can introduce relevant concepts and explain their interpretations in an accessible way."],
    ["Can Astro Numerology help with personal decisions?", "It can provide a framework for reflection and exploring different perspectives. Your decisions should also consider practical circumstances and reliable information."],
    ["Is an exact birth time necessary?", "An accurate birth time can be important for certain astrological interpretations. If you do not know it, mention this when booking."],
    ["What should I know before booking?", "Consider the questions you want to explore and the kind of perspective you hope to gain. No prior knowledge is required."]
  ],
  related: ["Explore Numerology", "/numerology"],
  variant: "split",
  closingTitle: "Begin with a conversation.",
  closingBody: "Bring your questions, your experiences, and an open mind. Start a personalised Astro Numerology consultation designed around the topics that matter to you."
};

export default function AstroNumerologyPage() {
  return <ServiceEditorial story={story} />;
}
