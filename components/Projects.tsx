import { additionalProjects, featuredProjects } from "@/data/projects";
import { ProjectCard } from "@/components/ProjectCard";
import { ExternalLinkIcon } from "@/components/icons";

export function Projects() {
  return (
    <section id="projects" className="border-t border-white/10 bg-white/[0.03]">
      <div className="mx-auto max-w-5xl px-4 py-12 sm:py-20 sm:px-6">
        <h2 className="text-3xl font-semibold tracking-tight text-white">
          Featured Projects
        </h2>
        <div className="mt-10 grid gap-8 lg:grid-cols-2">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>

        <h3 className="mt-16 text-xl font-semibold tracking-tight text-white">
          Additional Projects
        </h3>
        <div className="mt-4 space-y-3">
          {additionalProjects.map((project) => (
            <div
              key={project.name}
              className="flex flex-col gap-2 rounded-xl border border-white/10 bg-white/[0.04] p-5 sm:flex-row sm:items-center sm:justify-between"
            >
              <div>
                <span className="font-semibold text-white">
                  {project.name}
                </span>
                <span className="text-slate-300"> · {project.description}</span>
              </div>
              <div className="flex shrink-0 gap-4">
                {project.links.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="inline-flex items-center gap-1 text-sm font-medium text-indigo-400 transition-colors hover:text-indigo-300"
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
