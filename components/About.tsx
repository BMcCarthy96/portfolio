import Image from "next/image";

export function About() {
  return (
    <section id="about">
      <div className="mx-auto max-w-5xl px-4 py-12 sm:py-20 sm:px-6">
        <h2 className="text-3xl font-semibold tracking-tight text-white">
          About
        </h2>
        <div className="mt-10 flex flex-col gap-10 sm:flex-row">
          <div className="relative h-64 w-48 shrink-0 overflow-hidden rounded-2xl border border-white/10">
            <Image
              src="/headshot.jpg"
              alt="Brandon McCarthy"
              fill
              sizes="192px"
              className="object-cover"
            />
          </div>
          <div className="space-y-4 text-slate-300 leading-relaxed">
            <p>
              I build software for AI projects that involve documents,
              integrations, and review steps. Workbench reads requirements and
              source files, drafts a cited plan, and waits for a manager to
              approve it. Pulse watches simulated healthcare connections and
              gathers the evidence behind an incident.
            </p>
            <p>
              I spent more than five years working with healthcare records. I
              learned to check each claim against its source and protect private
              information. When a record was unclear, I asked for clarification.
              I now review AI responses for micro1 on a contract basis.
            </p>
            <p>
              I live in Maryville, Tennessee. I plan to move to Cary when I
              accept a role. I am looking for remote work or a hybrid role in
              the Triangle.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
