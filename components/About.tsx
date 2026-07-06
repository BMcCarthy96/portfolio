export function About() {
  return (
    <section id="about">
      <div className="mx-auto max-w-5xl px-4 py-20 sm:px-6">
        <h2 className="text-3xl font-semibold tracking-tight text-zinc-900">
          About
        </h2>
        <div className="mt-10 flex flex-col gap-10 sm:flex-row">
          {/* TODO: replace the monogram block with the upscaled headshot once provided:
              <Image src="/headshot.jpg" alt="Brandon McCarthy" width={192} height={192}
                     className="h-48 w-48 rounded-2xl object-cover" /> */}
          <div className="flex h-48 w-48 shrink-0 items-center justify-center rounded-2xl border border-zinc-200 bg-gradient-to-br from-indigo-50 to-zinc-100">
            <span className="text-5xl font-semibold text-indigo-300">BM</span>
          </div>
          <div className="space-y-4 text-zinc-600 leading-relaxed">
            <p>
              I&apos;m a software engineer focused on AI-powered workflow
              automation: systems that take in messy real-world data, use LLMs
              to classify and act on it, and hand results to people through
              clean internal tools.
            </p>
            <p>
              I came to engineering from five years in healthcare
              documentation, where I watched skilled people lose hours to
              manual process. That&apos;s exactly the problem I build against
              now, and it means I&apos;m comfortable with the messy, regulated,
              real-world data most demos ignore.
            </p>
            <p>
              Recent work: an AI client-operations platform (McCarthy AI
              Automations), a paper-trading platform with a fault-tolerant
              market-data pipeline (StockYard), and a mobile nutrition tracker
              built on Claude&apos;s vision API (FitBot). Based in Maryville,
              TN. Open to remote and hybrid roles.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
