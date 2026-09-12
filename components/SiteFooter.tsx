import { site } from "@/content/projects";

/** The rating plate at the foot of the panel: addresses, and who built it.
 *
 * These links carry `normal-case`: an address is a literal string, and the
 * engraved voice's uppercase would misrepresent one. The plate's font, weight,
 * tracking and size are kept, so the row still reads as engraving — only the
 * casing is surrendered, and only where the text is something to be copied. */
export function SiteFooter() {
  return (
    <footer className="border-t border-score-3 bg-panel-recess">
      <div className="mx-auto flex w-full max-w-[68rem] flex-col gap-3 px-5 py-6 sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <div className="flex flex-wrap gap-x-6 gap-y-1.5">
          <a
            href={site.github}
            rel="noopener"
            className="plate !normal-case !text-engrave-2 no-underline transition-colors hover:!text-signal-ink"
          >
            {site.githubLabel}
          </a>
          <a
            href={`mailto:${site.email}`}
            className="plate !normal-case !text-engrave-2 no-underline transition-colors hover:!text-signal-ink"
          >
            {site.email}
          </a>
          <a
            href={site.pdf}
            className="plate !normal-case !text-engrave-2 no-underline transition-colors hover:!text-signal-ink"
          >
            PDF 포트폴리오
          </a>
        </div>
        <div className="flex flex-col gap-1 sm:items-end">
          <span className="plate !text-engrave-3">© 2026 {site.name}</span>
          <span className="text-[0.8125rem] text-engrave-3">{site.affiliation}</span>
        </div>
      </div>
    </footer>
  );
}
