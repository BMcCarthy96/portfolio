import { site } from "@/data/site";
import { GitHubIcon, LinkedInIcon, MailIcon } from "@/components/icons";

export function Contact() {
  return (
    <section id="contact" className="border-t border-zinc-100 bg-zinc-50/60">
      <div className="mx-auto max-w-5xl px-4 py-12 text-center sm:py-20 sm:px-6">
        <h2 className="text-3xl font-semibold tracking-tight text-zinc-900">
          Get in touch
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-zinc-600">
          Open to AI engineering, implementation, and full-stack roles.
        </p>
        <a
          href={`mailto:${site.email}`}
          className="mt-6 inline-block text-xl font-medium text-indigo-600 transition-colors hover:text-indigo-800"
        >
          {site.email}
        </a>
        <div className="mt-8 flex items-center justify-center gap-5 text-zinc-500">
          <a
            href={site.github}
            aria-label="GitHub"
            className="transition-colors hover:text-zinc-900"
          >
            <GitHubIcon className="h-6 w-6" />
          </a>
          <a
            href={site.linkedin}
            aria-label="LinkedIn"
            className="transition-colors hover:text-zinc-900"
          >
            <LinkedInIcon className="h-6 w-6" />
          </a>
          <a
            href={`mailto:${site.email}`}
            aria-label="Email"
            className="transition-colors hover:text-zinc-900"
          >
            <MailIcon className="h-6 w-6" />
          </a>
        </div>
        <a
          href={site.resumePath}
          className="mt-8 inline-block rounded-lg border border-zinc-300 px-5 py-2.5 text-sm font-medium text-zinc-700 transition-colors hover:bg-white"
        >
          Download Resume
        </a>
      </div>
    </section>
  );
}
