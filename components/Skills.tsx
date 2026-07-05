const skillGroups: { title: string; skills: string[] }[] = [
  {
    title: "AI / LLM & Automation",
    skills: [
      "Claude & OpenAI APIs",
      "RAG",
      "Prompt engineering & caching",
      "LLM classification pipelines",
      "n8n",
      "Webhooks",
    ],
  },
  {
    title: "Backend & APIs",
    skills: [
      "Node.js",
      "Express",
      "Flask",
      "REST API design",
      "WebSockets",
      "Third-party integrations (Google Maps, flight data, market data)",
    ],
  },
  {
    title: "Frontend & Mobile",
    skills: [
      "React",
      "Redux",
      "Next.js",
      "React Native / Expo",
      "TypeScript",
      "JavaScript",
    ],
  },
  {
    title: "Data",
    skills: [
      "PostgreSQL",
      "Supabase",
      "SQLite",
      "SQLAlchemy",
      "Data modeling",
      "Pandas / NumPy",
    ],
  },
  {
    title: "Testing & Tooling",
    skills: ["pytest", "Playwright (E2E)", "Git / GitHub", "Docker", "Postman"],
  },
  {
    title: "Deployment",
    skills: ["Vercel", "Render", "Docker multi-stage builds"],
  },
  {
    title: "Domain Strength",
    skills: ["Healthcare & clinical data workflows (5+ years)"],
  },
];

export function Skills() {
  return (
    <section id="skills">
      <div className="mx-auto max-w-5xl px-4 py-20 sm:px-6">
        <h2 className="text-3xl font-semibold tracking-tight text-zinc-900">
          Skills
        </h2>
        <div className="mt-10 grid gap-x-10 gap-y-8 sm:grid-cols-2">
          {skillGroups.map((group) => (
            <div key={group.title}>
              <h3 className="text-xs font-semibold uppercase tracking-widest text-indigo-600">
                {group.title}
              </h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1 text-sm text-zinc-700"
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
