import ServiceEditorial, { type ServiceStory } from "../components/ServiceEditorial";

const story: ServiceStory = {
  layout: "journal",
  "label": "Numerology",
  "title": "Explore the Patterns in Your Name and Birth Date",
  "lead": "Numerology is a traditional practice that interprets the symbolic significance of numbers associated with your date of birth and name. It offers a different perspective on personal characteristics, recurring themes, and the questions that shape your life journey.",
  "hero": "/images/hero-numerology.jpg",
  "heroAlt": "Numerology architectural setting",
  "image": "/images/numerology about.jpg",
  "imageAlt": "Numerology consultation setting",
  "heading": "Your questions come first.",
  "description": "At Vastu Phi, our astro numerology consultations provide an opportunity to explore these number patterns in relation to your personal interests, professional goals, relationships, and life transitions. Each consultation begins with your questions, allowing the discussion to focus on what matters most to you.",
  "points": [
    [
      "Birth date analysis",
      "Explore birth number and destiny number interpretations and their traditional symbolic meanings."
    ],
    [
      "Personal and business name analysis",
      "Discover how numerical values associated with names are explored in the context of identity and professional goals."
    ],
    [
      "Personal direction and life changes",
      "Bring questions about career, relationships, personal growth, and changing circumstances into the conversation."
    ],
    [
      "Understanding number patterns",
      "Learn how different numbers are interpreted individually and in combination within traditional numerological systems."
    ]
  ],
  "faqs": [
    [
      "What should I prepare?",
      "Your full name, birth date, and the questions you want to discuss."
    ],
    [
      "What should I know before booking?",
      "Numerology is a traditional interpretive practice, not a guarantee of future events."
    ]
  ],
  "related": [
    "Explore Astro Numerology",
    "/astro-numerology"
  ],
  extraSections: [
    {
      eyebrow: "Every Number Has a Story to Explore.",
      title: "Every Number Has a Story to Explore.",
      body: "Our numerology consultations explore traditional interpretations of numbers associated with your birth date and name, helping you understand the concepts and their relevance to the questions you bring.",
      image: "/images/numerology-geometry-hero.jpg",
      imageAlt: "Geometric numerology composition",
      tone: "lavender",
      items: [
        ["Birth Date Analysis", "Explore the numbers derived from your date of birth, including birth number and destiny number interpretations, to understand their traditional symbolic meanings and associated life themes."],
        ["Personal and Business Name Analysis", "Discover how numerology interprets numerical values associated with personal names and business names in the context of identity, aspirations, and professional goals."],
        ["Personal Direction and Life Changes", "Discuss questions related to career development, relationships, personal growth, and changing circumstances through the interpretive perspective of numerology."],
        ["Understanding Number Patterns", "Learn how different numbers are interpreted individually and in combination within traditional numerological systems."],
      ],
    },
    {
      eyebrow: "Your questions come first",
      title: "Your Questions Come First.",
      body: "Every consultation is an opportunity to explore numerology in the context of your individual circumstances. Rather than approaching the subject as a list of calculations, we focus on explaining traditional meanings and discussing the areas you wish to explore.",
      image: "/images/editorial-study.png",
      imageAlt: "A thoughtful consultation workspace with notes and natural light",
      tone: "sage",
      steps: [
        ["01 — Share Your Details", "Provide your name, date of birth, and the questions or topics you would like to discuss."],
        ["02 — Explore Your Numbers", "Review relevant number patterns and their traditional interpretations with clear explanations."],
        ["03 — Discuss Your Questions", "Bring questions about personal goals, work, relationships, or life transitions into the conversation."],
        ["04 — Reflect on the Insights", "Use the discussion to reflect on your circumstances and consider your next steps."],
      ],
    },
    {
      eyebrow: "Before you begin",
      title: "Prepare for your numerology consultation.",
      body: "You do not need prior knowledge of numerology to get started. Having a few details ready can help make your consultation more focused and relevant to your interests.",
      image: "/images/numerology about.jpg",
      imageAlt: "Numerology notes and geometric symbols",
      tone: "paper",
      items: [
        ["What should you prepare?", "Your full name, using the spelling you currently use; your date of birth; your current personal, professional, or business name if relevant; and a few specific questions."],
        ["Who can benefit from a consultation?", "Anyone interested in traditional numerology, name and birth-date number patterns, or reflecting on personal and professional questions through this perspective."],
        ["What should you expect?", "A guided discussion of relevant numerological concepts and traditional interpretations. Numerology is an interpretive practice, not a guarantee of future outcomes or a substitute for professional advice."],
      ],
    },
  ],
  closingTitle: "Find Your Pattern. Explore Your Perspective.",
  closingBody: "Your name and birth date can be a starting point for exploring the traditional world of numerology. Whether you are curious about your birth number, interested in name numerology, or looking for a fresh perspective on a personal or professional question, begin with a conversation. At Vastu Phi, we aim to make numerology understandable, personal, and relevant to the questions you bring.",
  "variant": "panorama"
};

export default function NumerologyPage() {
  return <ServiceEditorial story={story} />;
}
