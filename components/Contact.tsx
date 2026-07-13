import { site } from "@/data/site";
import { GitHubIcon, LinkedInIcon, MailIcon } from "@/components/icons";

export function Contact() {
  return (
    <section id="contact" className="border-t border-white/10 bg-white/[0.03]">
      <div className="mx-auto max-w-5xl px-4 py-12 text-center sm:py-20 sm:px-6">
        <h2 className="text-3xl font-semibold tracking-tight text-white">
          Get in touch
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-slate-300">
          Open to AI engineering, implementation, and full-stack roles.
        </p>
        <a
          href={`mailto:${site.email}`}
          className="mt-6 inline-block text-xl font-medium text-indigo-400 transition-colors hover:text-indigo-300"
        >
          {site.email}
        </a>
        <div className="mt-8 flex items-center justify-center gap-5 text-slate-400">
          <a
            href={site.github}
            aria-label="GitHub"
            className="transition-colors hover:text-white"
          >
            <GitHubIcon className="h-6 w-6" />
          </a>
          <a
            href={site.linkedin}
            aria-label="LinkedIn"
            className="transition-colors hover:text-white"
          >
            <LinkedInIcon className="h-6 w-6" />
          </a>
          <a
            href={`mailto:${site.email}`}
            aria-label="Email"
            className="transition-colors hover:text-white"
          >
            <MailIcon className="h-6 w-6" />
          </a>
        </div>
        <a
          href={site.resumePath}
          className="mt-8 inline-block rounded-lg border border-white/20 px-5 py-2.5 text-sm font-medium text-slate-200 transition-colors hover:bg-white/10"
        >
          Download Resume
        </a>
      </div>
    </section>
  );
}
