export function About() {
  return (
    <section id="about">
      <div className="mx-auto max-w-5xl px-4 py-12 sm:py-20 sm:px-6">
        <h2 className="text-3xl font-semibold tracking-tight text-white">
          About
        </h2>
        <div className="mt-8 max-w-3xl border-l border-violet-400/40 pl-5 sm:pl-7">
          <div className="space-y-5 text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">
            <p>
              I have spent more than four years building software through
              full-stack and applied AI projects. I work mainly in TypeScript
              and Python, connecting models to documents, APIs, databases,
              background jobs, and AWS services.
            </p>
            <p>
              Workbench turns requirements and uploaded files into cited
              implementation plans, with human approval before tasks are
              created. Pulse traces failures across simulated healthcare
              connections and shows the evidence behind each finding.
            </p>
            <p>
              During my recent contract with micro1, I evaluated AI responses
              against detailed rubrics and wrote targeted feedback for model
              training. More than five years in healthcare documentation taught
              me to verify details against the source, protect private
              information, and ask for clarification when a record is
              incomplete.
            </p>
            <p>
              I am based in Maryville, Tennessee, and will relocate to Cary when
              I accept a role. I am open to remote work and hybrid roles in the
              Triangle.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
