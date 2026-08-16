import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { featuredProjects } from "@/data/projects";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

const previewDescriptions: Record<string, string> = {
  "enterprise-ai-implementation-workbench":
    "I built Workbench to help a team draft an implementation plan from project requirements and source documents. A reviewer approves the plan before tasks are created.",
  pulse:
    "I built Pulse to watch four simulated healthcare connections. It opens an incident when a job fails and gathers the evidence a reviewer needs.",
  "healthcare-intake-ai":
    "I built IntakeFlow around the intake work I did in healthcare. It reads a synthetic PDF and shows the page behind each extracted field.",
  stockyard:
    "I rebuilt StockYard as a paper trading app with market charts, trading rules, and a fallback that keeps the demo working when live data is unavailable.",
};

const imageDimensions: Record<string, { width: number; height: number }> = {
  "enterprise-ai-implementation-workbench": { width: 1440, height: 900 },
  pulse: { width: 1440, height: 900 },
  "healthcare-intake-ai": { width: 2560, height: 1600 },
  stockyard: { width: 2560, height: 1600 },
};

export function generateStaticParams() {
  return featuredProjects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = featuredProjects.find((item) => item.slug === slug);

  if (!project) {
    return {};
  }

  const description = previewDescriptions[slug] ?? project.tagline;
  const dimensions = imageDimensions[slug];
  const image = project.image
    ? [
        {
          url: project.image.src,
          alt: project.image.alt,
          ...(dimensions ?? {}),
        },
      ]
    : undefined;

  return {
    title: `${project.name} | Brandon McCarthy`,
    description,
    alternates: { canonical: `/projects/${slug}` },
    openGraph: {
      title: project.name,
      description,
      url: `/projects/${slug}`,
      siteName: "Brandon McCarthy Portfolio",
      type: "website",
      images: image,
    },
    twitter: {
      card: "summary_large_image",
      title: project.name,
      description,
      images: project.image ? [project.image.src] : undefined,
    },
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = featuredProjects.find((item) => item.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="relative z-10 min-h-screen px-4 py-10 sm:px-6 sm:py-16">
      <article className="mx-auto max-w-5xl">
        <Link
          href="/"
          className="text-sm font-medium text-indigo-300 transition hover:text-indigo-200"
        >
          ← Back to portfolio
        </Link>

        <div className="mt-8 overflow-hidden rounded-3xl border border-white/10 bg-slate-950/80 shadow-2xl shadow-indigo-950/20">
          {project.image ? (
            <div className="relative aspect-[16/10] w-full border-b border-white/10">
              <Image
                src={project.image.src}
                alt={project.image.alt}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 1024px"
                className="object-cover object-top"
              />
            </div>
          ) : null}

          <div className="p-6 sm:p-10">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-indigo-300">
              {project.label}
            </p>
            <h1 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-5xl">
              {project.name}
            </h1>
            <p className="mt-5 max-w-3xl text-base leading-7 text-slate-300 sm:text-lg">
              {previewDescriptions[slug] ?? project.tagline}
            </p>

            {project.proof?.length ? (
              <div className="mt-7 flex flex-wrap gap-2">
                {project.proof.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-emerald-400/25 bg-emerald-400/10 px-3 py-1 text-xs font-medium text-emerald-200"
                  >
                    {item}
                  </span>
                ))}
              </div>
            ) : null}

            <ul className="mt-8 space-y-4 text-sm leading-6 text-slate-300 sm:text-base">
              {project.bullets.map((bullet) => (
                <li key={bullet} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-indigo-400" />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-wrap gap-2">
              {project.chips.map((chip) => (
                <span
                  key={chip}
                  className="rounded-md bg-white/[0.06] px-2.5 py-1 text-xs text-slate-300"
                >
                  {chip}
                </span>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              {project.links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className={
                    link.primary
                      ? "rounded-lg bg-indigo-500 px-4 py-2 text-sm font-medium text-white transition hover:bg-indigo-400"
                      : "rounded-lg border border-white/15 px-4 py-2 text-sm font-medium text-slate-200 transition hover:border-white/30 hover:bg-white/[0.05]"
                  }
                >
                  {link.label}
                </a>
              ))}
            </div>

            {project.note ? (
              <p className="mt-6 text-sm leading-6 text-slate-400">
                {project.note}
              </p>
            ) : null}
          </div>
        </div>
      </article>
    </main>
  );
}
