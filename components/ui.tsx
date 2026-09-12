import Link from "next/link";
import type { Project, TableData } from "@/content/projects";
import { Plate, Status } from "@/components/instrument";

/** A stamped specification tag. */
export function Chip({
  children,
  accent = false,
  prose = false,
}: {
  children: React.ReactNode;
  accent?: boolean;
  /** Set for phrases (roles, descriptive tags): keeps the stamped frame, drops
      the uppercase engraving, which only suits short labels. */
  prose?: boolean;
}) {
  return (
    <span
      className={
        "inline-block border px-2 " +
        (prose
          ? "py-[5px] text-[0.8125rem] "
          : "plate py-[5px] ") +
        (accent
          ? "border-signal !text-signal-ink"
          : "border-score-2 !text-engrave-3")
      }
    >
      {children}
    </span>
  );
}

/**
 * An instrument division. The cut rule and the engraved designation carry the
 * division; a numeral is not added, because a sequence that counts only what
 * this project happens to have identifies no stable stage across the rack.
 */
export function SectionTitle({
  title,
  sub,
}: {
  title: string;
  sub?: string;
}) {
  return (
    <div className="mt-14 mb-5 border-t border-score-3 pt-4">
      <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
        <span aria-hidden="true" className="mt-[7px] h-2.5 w-0.5 bg-signal" />
        <Plate className="!tracking-[0.16em] !text-engrave">
          <h2>{title}</h2>
        </Plate>
        {sub && <span className="plate !text-engrave-3">{sub}</span>}
      </div>
    </div>
  );
}

export function Label({ children }: { children: React.ReactNode }) {
  return <Plate className="mb-2 !text-engrave-3">{children}</Plate>;
}

export function Rule({ soft = false }: { soft?: boolean }) {
  return (
    <hr
      className={"my-10 border-0 border-t " + (soft ? "border-score" : "border-score-3")}
    />
  );
}

/** Readings in a table stay tabular; the best row is cut deeper, not tinted alone. */
export function DataTable({ data }: { data: TableData }) {
  const numFrom = data.numericFrom ?? Number.MAX_SAFE_INTEGER;
  return (
    /* The panel edge fades where the readings continue past it, so a narrow
       viewport shows that the rack scrolls rather than that it ends. */
    <div
      className="overflow-x-auto"
      style={{
        maskImage:
          "linear-gradient(to right, #000 0, #000 calc(100% - 24px), transparent 100%)",
        WebkitMaskImage:
          "linear-gradient(to right, #000 0, #000 calc(100% - 24px), transparent 100%)",
      }}
      tabIndex={0}
      role="region"
      aria-label="측정값 표 (가로 스크롤)"
    >
      <table className="w-full min-w-[30rem] border-collapse text-[0.875rem]">
        <thead>
          <tr>
            {data.head.map((h, i) => (
              <th
                key={h}
                scope="col"
                className={
                  "plate border-y border-score-3 px-2.5 py-2.5 !text-engrave-2 " +
                  (i >= numFrom ? "text-right" : "text-left")
                }
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.rows.map((r, ri) => {
            const best = ri === data.highlightRow;
            return (
              <tr
                key={ri}
                className={best ? "bg-signal-wash" : undefined}
              >
                {r.map((c, ci) => (
                  <td
                    key={ci}
                    className={
                      "tnum border-b px-2.5 py-2.5 align-top " +
                      (best
                        ? "border-signal/40 font-semibold text-signal-ink"
                        : "border-score text-engrave-2") +
                      (ci >= numFrom ? " text-right" : "") +
                      /* the datum mark: the best row is cut, not merely coloured */
                      (best && ci === 0 ? " border-l-2 border-l-signal pl-2" : "")
                    }
                  >
                    {c}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

/** An instrument in the rack: designation, reading, and what it is read against. */
export function ProjectCard({ p }: { p: Project }) {
  return (
    <Link
      href={`/projects/${p.slug}/`}
      className="group block bg-panel p-6 no-underline transition-colors duration-200 hover:bg-panel-raised"
    >
      <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
        <Status kind={p.visibility === "private" ? "closed" : "open"}>
          {p.visibility === "private" ? "비공개 · 일반화" : "공개"}
        </Status>
        <span className="plate !text-engrave-3">{p.period}</span>
      </div>

      <h3 className="mt-4 text-[1.0625rem] font-bold leading-snug text-engrave transition-colors group-hover:text-signal-ink">
        {p.title}
      </h3>

      <dl className="mt-5 space-y-3 border-t border-score pt-4">
        <div>
          <dt className="plate !text-engrave-3">문제</dt>
          <dd className="mt-0.5 text-engrave-2">{p.problem}</dd>
        </div>
        <div>
          <dt className="plate !text-engrave-3">역할</dt>
          <dd className="mt-0.5 text-engrave-2">{p.role}</dd>
        </div>
        <div>
          <dt className="plate !text-engrave-3">핵심 결과</dt>
          <dd className="mt-1 flex gap-2">
            <span aria-hidden="true" className="mt-[9px] h-3.5 w-0.5 shrink-0 bg-signal" />
            <span className="font-semibold text-engrave">{p.headline}</span>
          </dd>
        </div>
      </dl>
    </Link>
  );
}
