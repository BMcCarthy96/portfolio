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
  /** Compact, recruiter-readable evidence points shown above the stack. */
  proof?: string[];
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
    slug: "enterprise-ai-implementation-workbench",
    label: "Enterprise AI Implementation Platform",
    name: "Enterprise AI Implementation Workbench",
    tagline:
      "Turns messy requirements and uploaded documents into cited, schema-validated delivery plans—with human approval before any task is created.",
    bullets: [
      "Multi-tenant requirements and document intake grounds plans with tenant-filtered pgvector retrieval; Zod validation and one repair attempt keep model output inside the delivery contract.",
      "Four-role RBAC, application scoping, and PostgreSQL RLS reinforce tenant isolation; approval-gated task materialization keeps AI output separate from delivery state.",
      "S3, SQS, Bedrock, retries, a DLQ, append-only audit history, OIDC/SCIM surfaces, and prompt-versioned evaluation make the workflow inspectable and recoverable.",
    ],
    proof: [
      "4-role RBAC + RLS",
      "15 cases × 3 prompt variants",
      "SQS retries + DLQ",
    ],
    chips: [
      "Next.js",
      "TypeScript",
      "PostgreSQL",
      "Drizzle",
      "AWS Bedrock",
      "S3 / SQS",
      "pgvector",
      "Zod",
      "Playwright",
    ],
    links: [
      {
        label: "Case Study",
        href: "https://github.com/BMcCarthy96/enterprise-ai-implementation-workbench/blob/main/docs/case-study.md",
        primary: true,
      },
      {
        label: "GitHub",
        href: "https://github.com/BMcCarthy96/enterprise-ai-implementation-workbench",
      },
    ],
    note: "Seeded synthetic data and deterministic fixtures only. This is an engineering demonstration, not a client production deployment.",
    image: {
      src: "/projects/enterprise-workbench.png",
      alt: "Enterprise AI Implementation Workbench recruiter demo showing requirements-to-plan flow, schema repair, and a human approval gate",
    },
  },
  {
    slug: "pulse",
    label: "AI Reliability Platform · Healthcare",
    name: "Pulse",
    tagline:
      "Investigates failures across simulated healthcare integrations, cites the evidence, and keeps recovery behind human approval.",
    bullets: [
      "Monitors four simulated connectors with rolling health windows and automatic incident creation, then produces evidence-cited AI investigations.",
      "Redacts PHI before inference and runs an independent leak check before findings are persisted or shown to a reviewer.",
      "Human-approved recovery revalidates the target; HMAC verification, deduplication, Retry-After handling, background jobs, and audit history harden the workflow.",
    ],
    proof: [
      "274 automated tests",
      "19 evaluation fixtures",
      "4 simulated connectors",
    ],
    chips: [
      "Next.js",
      "TypeScript",
      "PostgreSQL",
      "Prisma",
      "Redis",
      "BullMQ",
      "Claude API",
      "Docker",
      "Playwright",
    ],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/BMcCarthy96/pulse",
        primary: true,
      },
      {
        label: "Verified CI",
        href: "https://github.com/BMcCarthy96/pulse/actions/runs/31920943916",
      },
    ],
    note: "All healthcare data, identities, incidents, and connectors are synthetic. Pulse is not presented as a client production deployment.",
    image: {
      src: "/projects/pulse-recruiter-landing.png",
      alt: "Pulse recruiter landing page showing synthetic healthcare integration monitoring, AI investigation, and approval-gated recovery",
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
];

export type AdditionalProject = {
  name: string;
  description: string;
  links: ProjectLink[];
};

export const additionalProjects: AdditionalProject[] = [
  {
    name: "DoseWise",
    description:
      "Mobile supplement scanner that combines label vision, NIH data, PubMed research, openFDA signals, and independently rebuilt citations into a plain-language trust report.",
    links: [
      { label: "GitHub", href: "https://github.com/BMcCarthy96/DoseWise" },
    ],
  },
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
    name: "McCarthy AI Automations",
    description:
      "Independent product prototype for lead intake, support, onboarding, billing, and reporting—not a client-services claim.",
    links: [
      { label: "Live", href: "https://www.mccarthyaiautomations.com" },
      {
        label: "GitHub",
        href: "https://github.com/BMcCarthy96/McCarthyAIAutomations",
      },
    ],
  },
  {
    name: "FitBot",
    description:
      "React Native nutrition tracker with meal-photo analysis, structured Claude vision output, editable nutrition entries, and goal/progress tools.",
    links: [
      { label: "Live", href: "https://fit-bot-eight.vercel.app/" },
      { label: "GitHub", href: "https://github.com/BMcCarthy96/FitBot" },
    ],
  },
];
