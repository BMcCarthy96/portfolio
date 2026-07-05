import Image from "next/image";
import type { Project } from "@/data/projects";
import { ExternalLinkIcon } from "@/components/icons";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="flex flex-col overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm">
      <div className="relative aspect-[16/10] w-full border-b border-zinc-100 bg-zinc-50">
        {project.image ? (
          <Image
            src={project.image.src}
            alt={project.image.alt}
            fill
            sizes="(min-width: 1024px) 480px, 100vw"
            className="object-cover object-top"
          />
        ) : (
          <div className="flex h-full w-full flex-col items-center justify-center gap-1 bg-gradient-to-br from-indigo-50 via-white to-zinc-100">
            <span className="text-xl font-semibold text-zinc-400">
              {project.name}
            </span>
            <span className="text-xs text-zinc-400">screenshot coming soon</span>
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-col gap-4 p-6">
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-indigo-600">
            {project.label}
          </p>
          <h3 className="mt-1.5 text-2xl font-semibold tracking-tight text-zinc-900">
            {project.name}
          </h3>
          <p className="mt-2 font-medium leading-snug text-zinc-800">
            {project.tagline}
          </p>
        </div>

        <ul className="list-disc space-y-1.5 pl-5 text-sm leading-relaxed text-zinc-600">
          {project.bullets.map((bullet) => (
            <li key={bullet}>{bullet}</li>
          ))}
        </ul>

        {project.note && (
          <p className="text-xs italic text-zinc-500">{project.note}</p>
        )}

        <div className="flex flex-wrap gap-2">
          {project.chips.map((chip) => (
            <span
              key={chip}
              className="rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1 text-xs text-zinc-700"
            >
              {chip}
            </span>
          ))}
        </div>

        <div className="mt-auto flex flex-wrap items-center gap-3 pt-1">
          {project.links.map((link) =>
            link.primary ? (
              <a
                key={link.href}
                href={link.href}
                className="inline-flex items-center gap-1.5 rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-indigo-700"
              >
                {link.label}
                <ExternalLinkIcon />
              </a>
            ) : (
              <a
                key={link.href}
                href={link.href}
                className="inline-flex items-center gap-1.5 rounded-lg border border-zinc-300 px-4 py-2 text-sm font-medium text-zinc-700 transition-colors hover:bg-zinc-50"
              >
                {link.label}
                <ExternalLinkIcon />
              </a>
            ),
          )}
          {project.loginHint && (
            <span className="font-mono text-xs text-zinc-500">
              {project.loginHint}
            </span>
          )}
        </div>
      </div>
    </article>
  );
}
