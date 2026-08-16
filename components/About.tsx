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
              I build AI implementation systems that turn messy requirements,
              documents, and operational signals into evidence-backed outputs
              people can review and trust. My strongest recent work is the
              Enterprise AI Implementation Workbench and Pulse: full-stack
              products built around integrations, validation, evaluation,
              human approval, auditability, and failure recovery.
            </p>
            <p>
              Five years in healthcare documentation taught me to trace claims
              back to source records, protect confidential information, resolve
              contradictions, and communicate clearly with physicians and
              legal teams. I now apply the same discipline while evaluating AI
              model outputs on contract with micro1.
            </p>
            <p>
              Based in Maryville, Tennessee and relocating to Cary, North
              Carolina upon offer. I&apos;m targeting remote roles first, along
              with strong hybrid opportunities across the Triangle.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
