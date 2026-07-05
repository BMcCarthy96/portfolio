import { site } from "@/data/site";

export function Footer() {
  return (
    <footer className="border-t border-zinc-200">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-2 px-4 py-8 text-sm text-zinc-500 sm:flex-row sm:px-6">
        <p>© 2026 Brandon McCarthy</p>
        <p>
          Built with Next.js + Tailwind, deployed on Vercel ·{" "}
          <a
            href={site.repoUrl}
            className="text-indigo-600 transition-colors hover:text-indigo-800"
          >
            Source
          </a>
        </p>
      </div>
    </footer>
  );
}
