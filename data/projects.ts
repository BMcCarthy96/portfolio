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
    slug: "healthcare-intake-ai",
    label: "AI Document Workflow · Healthcare",
    name: "IntakeFlow",
    tagline:
      "Healthcare intake packets go from PDF to reviewed, exportable record: AI proposes evidence-backed fields, deterministic rules route, humans approve.",
    bullets: [
      "Model gateway extracts structured fields with page-level evidence quotes and confidence scores — swappable between a deterministic stub and Claude with one env var.",
      "Deterministic code owns every status change: missing fields, contradictions, and prompt-injection attempts in documents route to a human reviewer, never to auto-export.",
      "Idempotent processing and export, an audit event on every transition, and an eval harness that scores routing + field accuracy across 60 synthetic packets in CI.",
    ],
    chips: [
      "FastAPI",
      "Python",
      "Next.js",
      "TypeScript",
      "SQLAlchemy",
      "Claude API",
      "pytest",
    ],
    links: [
      {
        label: "Live Demo",
        href: "https://healthcare-intake-ai.vercel.app",
        primary: true,
      },
      {
        label: "GitHub",
        href: "https://github.com/BMcCarthy96/healthcare-intake-ai",
      },
    ],
    note: "Synthetic data only — no PHI, no clinical decisions. Built against the manual intake work I did for five years in healthcare documentation.",
    loginHint: "Click \"Load a complete synthetic demo\", no signup needed",
    image: {
      src: "/projects/healthcare-intake-workspace.png",
      alt: "IntakeFlow case workspace: extracted fields with page-level evidence and the reviewer approval gate",
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
    loginHint: "Click \"Try the demo\" on the landing screen, no signup needed",
    image: {
      src: "/projects/fitbot-composite.png",
      alt: "FitBot onboarding, home dashboard, and progress screens",
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
    name: "DineAir",
    description:
      "Real-time airport food delivery: four coordinated roles (customer, restaurant, runner, admin) over live WebSockets with Google Maps and flight-data integrations.",
    links: [
      { label: "Live", href: "https://dineair.onrender.com" },
      { label: "GitHub", href: "https://github.com/BMcCarthy96/DineAir" },
    ],
  },
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
