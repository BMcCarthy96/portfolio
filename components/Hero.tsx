import { site } from "@/data/site";
import { GitHubIcon, LinkedInIcon, MailIcon } from "@/components/icons";

export function Hero() {
  return (
    <section id="top" className="mx-auto max-w-5xl px-4 pb-12 pt-16 sm:pb-24 sm:pt-32 sm:px-6">
      <p className="text-base font-semibold text-indigo-400">{site.title}</p>
      <h1 className="mt-3 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
        {site.name}
      </h1>
      <p className="mt-5 max-w-2xl text-lg leading-relaxed text-slate-300">
        {site.tagline}
      </p>
      <div className="mt-8 flex flex-wrap items-center gap-3">
        <a
          href="#projects"
          className="rounded-lg bg-indigo-500 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-indigo-400"
        >
          View Projects
        </a>
        <a
          href={site.resumePath}
          className="rounded-lg border border-white/20 px-5 py-2.5 text-sm font-medium text-slate-200 transition-colors hover:bg-white/10"
        >
          Download Resume
        </a>
        <span className="ml-1 flex items-center gap-3 text-slate-400">
          <a
            href={site.github}
            aria-label="GitHub"
            className="transition-colors hover:text-white"
          >
            <GitHubIcon />
          </a>
          <a
            href={site.linkedin}
            aria-label="LinkedIn"
            className="transition-colors hover:text-white"
          >
            <LinkedInIcon />
          </a>
          <a
            href={`mailto:${site.email}`}
            aria-label="Email"
            className="transition-colors hover:text-white"
          >
            <MailIcon />
          </a>
        </span>
      </div>
      <p className="mt-10 text-sm text-slate-400">
        {site.stats.join("  ·  ")}
      </p>
    </section>
  );
}
