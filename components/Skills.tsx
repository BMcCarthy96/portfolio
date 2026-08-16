const skillGroups: { title: string; skills: string[] }[] = [
  {
    title: "AI Delivery & Evaluation",
    skills: [
      "AWS Bedrock",
      "Structured outputs",
      "RAG / pgvector",
      "LLM evaluation",
      "Prompt versioning",
      "Human review",
      "Zod validation",
    ],
  },
  {
    title: "Cloud & Integrations",
    skills: [
      "AWS S3 / SQS",
      "Redis / BullMQ",
      "REST APIs",
      "Webhooks",
      "Retries & DLQs",
      "Idempotency",
      "HMAC verification",
    ],
  },
  {
    title: "Full-Stack Engineering",
    skills: [
      "TypeScript",
      "Python",
      "React",
      "Next.js",
      "Node.js",
      "FastAPI",
      "Docker",
    ],
  },
  {
    title: "Data & Access Control",
    skills: [
      "PostgreSQL",
      "Prisma",
      "Drizzle",
      "pgvector",
      "Multi-tenancy",
      "RBAC / RLS",
      "OIDC / SCIM",
    ],
  },
  {
    title: "Quality & Delivery",
    skills: [
      "Playwright",
      "Vitest",
      "pytest",
      "CI/CD",
      "Observability",
      "Audit trails",
    ],
  },
  {
    title: "Healthcare Workflow Safety",
    skills: [
      "PHI redaction",
      "Independent leak checks",
      "Evidence citation",
      "Synthetic test data",
      "Human approval gates",
    ],
  },
];

export function Skills() {
  return (
    <section id="skills">
      <div className="mx-auto max-w-5xl px-4 py-12 sm:py-20 sm:px-6">
        <h2 className="text-3xl font-semibold tracking-tight text-white">
          Skills
        </h2>
        <div className="mt-10 grid gap-x-10 gap-y-8 sm:grid-cols-2">
          {skillGroups.map((group) => (
            <div key={group.title}>
              <h3 className="text-xs font-semibold uppercase tracking-widest text-indigo-400">
                {group.title}
              </h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-slate-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
