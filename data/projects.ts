export type ProjectLink = {
  label: string;
  href: string;
  primary?: boolean;
};

export type Project = {
  slug: string;
  label: string;
  name: string;
  tagline: string;
  bullets: string[];
  chips: string[];
  links: ProjectLink[];
  /** Path under /public. Card renders a styled placeholder when absent. */
  image?: { src: string; alt: string };
  /** Small italic note under the bullets (e.g. project origin). */
  note?: string;
  /** Monospace hint under the buttons (e.g. demo credentials). */
  loginHint?: string;
};

export const featuredProjects: Project[] = [
  {
    slug: "mccarthy-ai",
    label: "AI Client Operations Platform",
    name: "McCarthy AI Automations",
    tagline:
      "End-to-end platform for AI automation work: LLM lead classification, RAG-powered support, onboarding, billing, and reporting.",
    bullets: [
      "Built and deployed AI automation systems using OpenAI and Claude to classify and act on structured and unstructured data.",
      "Designed RAG workflows for context-aware responses over project, support, and service data.",
      "End-to-end pipelines connecting APIs, databases, and AI models to automate lead intake, classification, and follow-up.",
    ],
    chips: [
      "Next.js",
      "TypeScript",
      "Supabase",
      "Clerk",
      "OpenAI API",
      "Claude API",
      "SQL",
    ],
    links: [
      {
        label: "Live Site",
        href: "https://www.mccarthyaiautomations.com",
        primary: true,
      },
      {
        label: "GitHub",
        href: "https://github.com/BMcCarthy96/McCarthyAIAutomations",
      },
    ],
    image: {
      src: "/projects/mccarthyai-home.png",
      alt: "McCarthy AI Automations homepage",
    },
  },
  {
    slug: "stockyard",
    label: "Full-Stack Trading Platform",
    name: "StockYard",
    tagline:
      "Paper-trading platform with real market data: live candlestick charts, a portfolio equity curve, and $100k of play money.",
    bullets: [
      "Market-data service with TTL-cached batch fetches (yfinance) and a deterministic simulated fallback, so the app stays fully functional through API outages and rate limits.",
      "Real trading logic (weighted average cost basis, oversell/overbuy rejection) and an equity curve that replays actual transaction history against historical prices.",
      "Multi-stage Docker build (Node → Python) deployed on Render with idempotent migrations and seeding; core logic covered by pytest.",
    ],
    chips: [
      "React",
      "Redux",
      "Flask",
      "SQLAlchemy",
      "PostgreSQL",
      "Docker",
      "pytest",
    ],
    links: [
      {
        label: "Live Demo",
        href: "https://stockyard.onrender.com",
        primary: true,
      },
      { label: "GitHub", href: "https://github.com/BMcCarthy96/StockYard" },
    ],
    note: "Began as a team capstone concept; this repository is my complete solo rebuild.",
    loginHint: "Click \"Try the demo\" on the homepage, no signup needed",
    image: {
      src: "/projects/stockyard-asset-detail.png",
      alt: "StockYard asset detail page with candlestick chart and trade panel",
    },
  },
  {
    slug: "fitbot",
    label: "AI Mobile App · Computer Vision",
    name: "FitBot",
    tagline:
      "Snap a photo of your meal, and Claude's vision API returns calories, macros, and a health score in seconds.",
    bullets: [
      "Camera → compression → Claude vision with a structured-JSON prompt → editable nutrition entry, with prompt caching to cut per-call API cost.",
      "BMR/TDEE goal engine, weight charting, streaks, and configurable push-notification reminders.",
      "Strict TypeScript on Expo SDK 54 / React Native 0.81; conversational AI nutrition coach built on the same Claude integration.",
    ],
    chips: [
      "React Native",
      "Expo",
      "TypeScript",
      "Claude Vision API",
      "AsyncStorage",
    ],
    links: [
      {
        label: "Live Demo",
        href: "https://fit-bot-eight.vercel.app/",
        primary: true,
      },
      { label: "GitHub", href: "https://github.com/BMcCarthy96/FitBot" },
    ],
    loginHint: "Try it in your browser — quick email sign-up, no verification needed",
    image: {
      src: "/projects/fitbot-composite.png",
      alt: "FitBot onboarding, home dashboard, and progress screens",
    },
  },
  {
    slug: "dineair",
    label: "Real-Time Delivery Platform",
    name: "DineAir",
    tagline:
      "Airport food delivery: order from your gate while restaurants and runners coordinate through live WebSocket updates.",
    bullets: [
      "Full-stack real-time platform for four roles (customer, restaurant owner, runner, admin) with role-based access control.",
      "Live data flows over WebSockets; Google Maps and flight-data API integrations for location and status tracking.",
      "Backend designed for high-frequency transactional data with strong validation and state management.",
    ],
    chips: [
      "React",
      "Node.js",
      "Express",
      "PostgreSQL",
      "WebSockets",
      "Google Maps API",
    ],
    links: [
      { label: "Live Demo", href: "https://dineair.onrender.com", primary: true },
      { label: "GitHub", href: "https://github.com/BMcCarthy96/DineAir" },
    ],
    image: {
      src: "/projects/dineair-liveboard.png",
      alt: "DineAir live order board",
    },
  },
];

export type AdditionalProject = {
  name: string;
  description: string;
  links: ProjectLink[];
};

export const additionalProjects: AdditionalProject[] = [
  {
    name: "StayHaven",
    description:
      "Full-stack Airbnb-style booking app with auth, listings, reviews, and bookings on a normalized PostgreSQL schema.",
    links: [
      { label: "Live", href: "https://stayhaven-hyyh.onrender.com" },
      { label: "GitHub", href: "https://github.com/BMcCarthy96/StayHaven" },
    ],
  },
];
