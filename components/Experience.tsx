const roles = [
  {
    title: "Production Specialist / Transcriptionist",
    org: "Physician Life Care Planning",
    dates: "Sep 2023 – Present · Remote",
    summary:
      "Structure complex medical records into actionable reports; high-volume unstructured-data processing with physicians.",
  },
  {
    title: "Medical Scribe",
    org: "AQuity Solutions",
    dates: "Jul 2021 – Sep 2023 · Remote",
    summary:
      "Validated structured and unstructured clinical data; improved data quality through workflow optimization.",
  },
];

const education = [
  {
    name: "App Academy",
    detail: "Full-Stack Software Engineering",
    dates: "Mar 2024 – May 2025",
  },
  {
    name: "Hack Reactor",
    detail: "Software Engineering Immersive",
    dates: "Jun 2023 – Oct 2023",
  },
  {
    name: "Machine Learning Specialization",
    detail: "DeepLearning.AI / Stanford Online",
    dates: "Aug 2025",
  },
  {
    name: "East Tennessee State University",
    detail: "B.S. Biology, Minor in Psychology",
    dates: "2014 – 2018",
  },
];

export function Experience() {
  return (
    <section id="experience" className="border-t border-zinc-100 bg-zinc-50/60">
      <div className="mx-auto max-w-5xl px-4 py-20 sm:px-6">
        <h2 className="text-3xl font-semibold tracking-tight text-zinc-900">
          Experience & Education
        </h2>

        <div className="mt-10 space-y-8">
          {roles.map((role) => (
            <div
              key={role.title}
              className="grid gap-1 sm:grid-cols-[220px_1fr] sm:gap-8"
            >
              <p className="text-sm text-zinc-500">{role.dates}</p>
              <div>
                <h3 className="font-semibold text-zinc-900">
                  {role.title}{" "}
                  <span className="font-normal text-zinc-600">
                    — {role.org}
                  </span>
                </h3>
                <p className="mt-1 text-sm leading-relaxed text-zinc-600">
                  {role.summary}
                </p>
              </div>
            </div>
          ))}
        </div>

        <h3 className="mt-14 text-xs font-semibold uppercase tracking-widest text-indigo-600">
          Education & Certifications
        </h3>
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          {education.map((item) => (
            <div
              key={item.name}
              className="rounded-xl border border-zinc-200 bg-white p-4"
            >
              <p className="font-medium text-zinc-900">{item.name}</p>
              <p className="text-sm text-zinc-600">{item.detail}</p>
              <p className="mt-1 text-xs text-zinc-500">{item.dates}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
