import Link from "next/link";
import { site } from "@/content/projects";

const nav = [
  { href: "/projects/", label: "Projects" },
  { href: "/about/", label: "About" },
  { href: "/contact/", label: "Contact" },
];

/** The maker's plate riveted to the top of the panel. */
export function SiteHeader() {
  return (
    <header className="border-b border-score-3 bg-panel-recess">
      <div className="mx-auto flex w-full max-w-[68rem] flex-wrap items-center justify-between gap-x-6 gap-y-2 px-5 py-3.5 sm:px-8">
        <Link href="/" className="group flex items-baseline gap-2.5 no-underline">
          <span className="plate !text-[0.8125rem] !tracking-[0.2em] !text-engrave transition-colors group-hover:!text-signal-ink">
            {site.name}
          </span>
          <span className="plate !text-engrave-3">{site.role}</span>
        </Link>
        <nav aria-label="주요 메뉴" className="flex items-center gap-5">
          {nav.map((n) => (
            <Link
              key={n.href}
              href={n.href}
              className="plate !text-engrave-2 no-underline transition-colors hover:!text-signal-ink"
            >
              {n.label}
            </Link>
          ))}
          <a
            href={site.github}
            rel="noopener"
            className="plate hidden !text-engrave-2 no-underline transition-colors hover:!text-signal-ink sm:inline"
          >
            GitHub
          </a>
        </nav>
      </div>
    </header>
  );
}
