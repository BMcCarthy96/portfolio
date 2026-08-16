const roles = [
  {
    title: "AI Trainer (Contract)",
    org: "micro1",
    dates: "Jul 2026 – Present · Remote",
    summary:
      "Evaluate AI model outputs against detailed rubrics and project specifications, write structured feedback, and flag ambiguous requirements or edge cases.",
  },
  {
    title: "Medical Records Specialist",
    org: "Physician Life Care Planning",
    dates: "Feb 2021 – Jul 2026 · Remote",
    summary:
      "Prepared structured reports from complex clinical records for physicians and legal teams, traced missing or conflicting details, and documented needed clarifications.",
  },
  {
    title: "Medical Scribe",
    org: "AQuity Solutions",
    dates: "Nov 2020 – Feb 2021 · Remote",
    summary:
      "Created real-time clinical documentation in EHR systems and resolved unclear details with providers.",
  },
];

const education = [
  {
    name: "Maryville University",
    detail: "M.S. Artificial Intelligence",
    dates: "Expected Dec 2027",
  },
  {
    name: "University of Tennessee, Knoxville",
    detail: "B.A. Psychology",
    dates: "Dec 2020",
  },
  {
    name: "Pellissippi State Community College",
    detail: "A.S. Psychology",
    dates: "May 2018",
  },
];

export function Experience() {
  return (
    <section id="experience" className="border-t border-white/10 bg-white/[0.03]">
      <div className="mx-auto max-w-5xl px-4 py-12 sm:py-20 sm:px-6">
        <h2 className="text-3xl font-semibold tracking-tight text-white">
          Experience & Education
        </h2>

        <div className="mt-10 space-y-8">
          {roles.map((role) => (
            <div
              key={role.title}
              className="grid gap-1 sm:grid-cols-[220px_1fr] sm:gap-8"
            >
              <p className="text-sm text-slate-400">{role.dates}</p>
              <div>
                <h3 className="font-semibold text-white">
                  {role.title}{" "}
                  <span className="font-normal text-slate-400">
                    · {role.org}
                  </span>
                </h3>
                <p className="mt-1 text-sm leading-relaxed text-slate-300">
                  {role.summary}
                </p>
              </div>
            </div>
          ))}
        </div>

        <h3 className="mt-14 text-xs font-semibold uppercase tracking-widest text-indigo-400">
          Education
        </h3>
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          {education.map((item) => (
            <div
              key={item.name}
              className="rounded-xl border border-white/10 bg-white/[0.04] p-4"
            >
              <p className="font-medium text-white">{item.name}</p>
              <p className="text-sm text-slate-300">{item.detail}</p>
              <p className="mt-1 text-xs text-slate-400">{item.dates}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
