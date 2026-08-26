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
      "Workbench reads project requirements and uploaded documents. It drafts a cited plan, and a manager reviews it before the app creates tasks.",
    bullets: [
      "The app searches only the current tenant's requirements and documents. pgvector finds the relevant passages. Zod checks the draft and gives the model one repair attempt when the shape is wrong.",
      "Four roles control what each person can see and do. PostgreSQL RLS adds a database check. A manager must approve the plan before it becomes tasks.",
      "Files go to S3 and jobs run through SQS. Failed jobs retry before moving to a dead letter queue. The app keeps an audit record and tests 15 cases across three prompt versions.",
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
        label: "Live Demo",
        href: "https://enterprise-ai-implementation-workbe.vercel.app/",
        primary: true,
      },
      {
        label: "GitHub",
        href: "https://github.com/BMcCarthy96/enterprise-ai-implementation-workbench",
      },
    ],
    note: "The demo uses seeded synthetic data and fixed test cases.",
    loginHint: "Start the seeded demo from the landing page, no account needed",
    image: {
      src: "/projects/enterprise-workbench.png",
      alt: "Workbench demo showing project requirements, a draft plan, and the approval step",
    },
  },
  {
    slug: "pulse",
    label: "AI Reliability Platform · Healthcare",
    name: "Pulse",
    tagline:
      "Pulse watches four simulated healthcare connections. When a job fails, it opens an incident and gathers the evidence a reviewer needs.",
    bullets: [
      "Health checks use rolling windows. A failing connector opens an incident, and the investigation cites the events behind each finding.",
      "Patient details are removed before the model sees them. A separate check looks for anything the first pass missed.",
      "A reviewer approves recovery. Pulse checks the target again at that point. Incoming events use HMAC signatures, duplicate events are ignored, and queued jobs follow Retry-After responses.",
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
        label: "Live Demo",
        href: "https://pulse-live-demo.vercel.app/demo",
        primary: true,
      },
      {
        label: "GitHub",
        href: "https://github.com/BMcCarthy96/pulse",
      },
    ],
    note: "The demo uses synthetic healthcare data and simulated connectors.",
    loginHint: "Launch the interactive demo, no credentials needed",
    image: {
      src: "/projects/pulse-recruiter-landing.png",
      alt: "Pulse demo showing simulated healthcare connections, an incident, and the recovery approval",
    },
  },
  {
    slug: "healthcare-intake-ai",
    label: "AI Document Workflow · Healthcare",
    name: "IntakeFlow",
    tagline:
      "IntakeFlow reads a synthetic intake packet and shows the page behind each field. Unclear cases go to a reviewer.",
    bullets: [
      "The model extracts fields from a PDF and returns the source page with each value. The demo can use a fixed local model response or Claude.",
      "Application code decides where the case goes. Missing fields, contradictions, and text that looks like a prompt injection send the case to review.",
      "Processing and export are safe to retry. Every status change is recorded. The evaluation set has 60 synthetic packets.",
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
    note: "The demo uses synthetic data. Clinical decisions stay outside the project.",
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
      "StockYard is a paper trading app with live market charts, a portfolio history, and $100,000 in demo funds.",
    bullets: [
      "Market quotes are cached for a short time. When the data provider is unavailable, the demo switches to a fixed fallback data set.",
      "Buy and sell rules reject orders that exceed the available cash or shares. Cost basis uses a weighted average. The chart rebuilds account value from the transaction history.",
      "The app runs in Docker with PostgreSQL on Render. Database setup can run more than once safely, and pytest covers the trading logic.",
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
    note: "This is my solo rebuild of a team capstone idea.",
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
      "DoseWise reads a supplement label and builds a source-grounded report from NIH DSLD, PubMed, and openFDA. It separates evidence completeness from safety conclusions and clearly marks unknowns.",
    links: [
      { label: "Live Demo", href: "https://dose-wise-beta.vercel.app" },
      { label: "GitHub", href: "https://github.com/BMcCarthy96/DoseWise" },
    ],
  },
  {
    name: "DineAir",
    description:
      "DineAir is an airport food delivery demo. Customers, restaurants, runners, and admins share live order updates through WebSockets.",
    links: [
      { label: "Live", href: "https://dineair.onrender.com" },
      { label: "GitHub", href: "https://github.com/BMcCarthy96/DineAir" },
    ],
  },
  {
    name: "McCarthy AI Automations",
    description:
      "I built this personal prototype to explore lead intake and support in one app. It uses demo data.",
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
      "FitBot is a React Native nutrition tracker. It reads a meal photo, drafts nutrition details, and lets the user edit the result before saving it.",
    links: [
      { label: "Live", href: "https://fit-bot-eight.vercel.app/" },
      { label: "GitHub", href: "https://github.com/BMcCarthy96/FitBot" },
    ],
  },
];
