const roles = [
  {
    title: "AI Trainer (Contract)",
    org: "micro1",
    dates: "Jul 2026 - Aug 2026 · Remote",
    summary:
      "I evaluated AI responses against project instructions and scoring guides. My feedback identified instruction-following failures, quality gaps, and edge cases, and I flagged requirements that could lead to inconsistent scoring.",
  },
  {
    title: "Production Specialist / Transcriptionist",
    org: "Physician Life Care Planning",
    dates: "Sep 2023 – Present · Remote",
    summary:
      "I turned long medical records into structured reports for physicians and legal teams. I also tracked down missing or conflicting details and documented what needed clarification.",
  },
  {
    title: "Medical Scribe",
    org: "AQuity Solutions",
    dates: "Jul 2021 – Sep 2023 · Remote",
    summary:
      "I wrote clinical notes in the EHR during patient visits and asked providers to clear up details when the source was unclear.",
  },
];

const education = [
  {
    name: "East Tennessee State University",
    detail: "B.S. Biology · Psychology minor · GPA 3.2",
    dates: "Aug 2014 - May 2018",
  },
  {
    name: "App Academy",
    detail: "Full Stack Web Development Bootcamp",
    dates: "Mar 2024 - May 2025",
  },
  {
    name: "Hack Reactor",
    detail: "Full Stack Web Development Bootcamp",
    dates: "Jun 2023 - Oct 2023",
  },
  {
    name: "Coursera",
    detail: "Machine Learning Specialization (Andrew Ng)",
    dates: "Aug 2025",
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
          Education & Training
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
