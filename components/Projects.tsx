import { additionalProjects, featuredProjects } from "@/data/projects";
import { ProjectCard } from "@/components/ProjectCard";
import { ExternalLinkIcon } from "@/components/icons";

export function Projects() {
  return (
    <section id="projects" className="border-t border-zinc-100 bg-zinc-50/60">
      <div className="mx-auto max-w-5xl px-4 py-20 sm:px-6">
        <h2 className="text-3xl font-semibold tracking-tight text-zinc-900">
          Featured Projects
        </h2>
        <div className="mt-10 grid gap-8 lg:grid-cols-2">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>

        <h3 className="mt-16 text-xl font-semibold tracking-tight text-zinc-900">
          Additional Projects
        </h3>
        <div className="mt-4 space-y-3">
          {additionalProjects.map((project) => (
            <div
              key={project.name}
              className="flex flex-col gap-2 rounded-xl border border-zinc-200 bg-white p-5 sm:flex-row sm:items-center sm:justify-between"
            >
              <div>
                <span className="font-semibold text-zinc-900">
                  {project.name}
                </span>
                <span className="text-zinc-600"> — {project.description}</span>
              </div>
              <div className="flex shrink-0 gap-4">
                {project.links.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="inline-flex items-center gap-1 text-sm font-medium text-indigo-600 transition-colors hover:text-indigo-800"
                  >
                    {link.label}
                    <ExternalLinkIcon />
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
