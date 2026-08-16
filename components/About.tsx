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
              I build AI software for projects that depend on source documents
              and outside systems. Workbench turns requirements and uploaded
              files into a cited implementation plan that a manager reviews
              before tasks are created. Pulse traces failures across simulated
              healthcare connections and shows the events behind each finding.
            </p>
            <p>
              More than five years in healthcare documentation taught me to
              verify details against the source, protect private information,
              and ask for clarification when a record is incomplete. I now
              review AI responses for micro1 on a contract basis and use those
              same habits in my engineering work.
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
