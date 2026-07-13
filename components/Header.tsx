import { navLinks, site } from "@/data/site";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-[#0a0f1e]/80 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-4 sm:px-6">
        <a href="#top" className="text-sm font-semibold tracking-tight text-white">
          {site.name}
        </a>
        <nav className="hidden items-center gap-6 md:flex" aria-label="Main">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-slate-300 transition-colors hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <a
          href={site.resumePath}
          className="rounded-lg bg-indigo-500 px-3.5 py-2 text-sm font-medium text-white transition-colors hover:bg-indigo-400"
        >
          Resume
        </a>
      </div>
    </header>
  );
}
