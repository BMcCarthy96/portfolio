import Image from "next/image";
import type { Project } from "@/data/projects";
import { ExternalLinkIcon } from "@/components/icons";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#0d1428]/80 shadow-lg shadow-black/20">
      <div className="relative aspect-[16/10] w-full border-b border-white/10 bg-white/5">
        {project.image ? (
          <Image
            src={project.image.src}
            alt={project.image.alt}
            fill
            sizes="(min-width: 1024px) 480px, 100vw"
            className="object-cover object-top"
          />
        ) : (
          <div className="flex h-full w-full flex-col items-center justify-center gap-1 bg-gradient-to-br from-[#131c38] via-[#0d1428] to-[#0a0f1e]">
            <span className="text-xl font-semibold text-slate-500">
              {project.name}
            </span>
            <span className="text-xs text-slate-500">screenshot coming soon</span>
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-col gap-4 p-6">
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-indigo-400">
            {project.label}
          </p>
          <h3 className="mt-1.5 text-2xl font-semibold tracking-tight text-white">
            {project.name}
          </h3>
          <p className="mt-2 font-medium leading-snug text-slate-200">
            {project.tagline}
          </p>
        </div>

        <ul className="list-disc space-y-1.5 pl-5 text-sm leading-relaxed text-slate-300">
          {project.bullets.map((bullet) => (
            <li key={bullet}>{bullet}</li>
          ))}
        </ul>

        {project.note && (
          <p className="text-xs italic text-slate-400">{project.note}</p>
        )}

        <div className="flex flex-wrap gap-2">
          {project.chips.map((chip) => (
            <span
              key={chip}
              className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-300"
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
                className="inline-flex items-center gap-1.5 rounded-lg bg-indigo-500 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-indigo-400"
              >
                {link.label}
                <ExternalLinkIcon />
              </a>
            ) : (
              <a
                key={link.href}
                href={link.href}
                className="inline-flex items-center gap-1.5 rounded-lg border border-white/20 px-4 py-2 text-sm font-medium text-slate-200 transition-colors hover:bg-white/10"
              >
                {link.label}
                <ExternalLinkIcon />
              </a>
            ),
          )}
          {project.loginHint && (
            <span className="font-mono text-xs text-slate-400">
              {project.loginHint}
            </span>
          )}
        </div>
      </div>
    </article>
  );
}
