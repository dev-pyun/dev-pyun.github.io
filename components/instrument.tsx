import type { ReactNode } from "react";

/* ──────────────────────────────────────────────────────────────────────────
   Instrument panel primitives.

   The governing rule of this world: a value is only ever legible against an
   engraved baseline. `Gauge` therefore cannot be constructed without a datum
   — the reference the reading is measured against is a required prop, not an
   optional caption. A number with no condition has no place to render.

   State is drawn as line pattern, never as hue alone, so every reading holds
   in monochrome and under colour-vision deficiency.
   ────────────────────────────────────────────────────────────────────────── */

/** Engraved designation plate. Replaces headings that would otherwise shout by size. */
export function Plate({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return <div className={`plate ${className}`}>{children}</div>;
}

/** A cut in the enamel. `deep` marks a division between instruments. */
export function Score({ deep = false }: { deep?: boolean }) {
  return (
    <hr
      className={
        "my-10 border-0 border-t " + (deep ? "border-score-3" : "border-score")
      }
    />
  );
}

/**
 * A tick scale. Ticks are not decoration: `marks` are real positions on the
 * range, and the datum is engraved into the scale itself.
 */
function TickScale({
  fill,
  datumAt,
  label,
  datumLabel,
  better,
}: {
  /** 0–1, where the reading sits on the range. */
  fill: number;
  /** 0–1, where the baseline being beaten sits. Always drawn. */
  datumAt: number;
  label: string;
  datumLabel: string;
  /** Which end of this scale is the good end. Engraved, never assumed. */
  better: "low" | "high";
}) {
  const beats = better === "low" ? fill < datumAt : fill > datumAt;
  const ticks = Array.from({ length: 41 }, (_, i) => i);
  return (
    <div className="mt-5">
      <div className="relative h-9" aria-hidden="true">
        {/* the etched range. Marks decimate at narrow widths so the scale stays
            readable instead of aliasing into a grey band. */}
        <div className="absolute inset-x-0 top-0 flex h-5 items-start justify-between">
          {ticks.map((t) => (
            <span
              key={t}
              className={
                "w-px " +
                (t % 10 === 0
                  ? "h-5 bg-score-3"
                  : t % 5 === 0
                    ? "h-3 bg-score-2"
                    : "h-2 bg-score") +
                /* every other minor mark is omitted below sm */
                (t % 2 === 1 ? " hidden sm:block" : "")
              }
            />
          ))}
        </div>
        {/* the positional track, inset half a tick so 0 and 1 sit on marks */}
        <div className="absolute inset-x-0 top-0 h-5" style={{ marginInline: "0.5px" }}>
          {/* the reading, cut deep and filled */}
          <div
            className="cut-in absolute top-0 h-5 border-r border-engrave bg-engrave/12"
            style={{ left: 0, width: `${fill * 100}%` }}
          />
          {/* the datum, engraved into the scale. Always present. */}
          <div
            className="datum-rise absolute -top-1 h-7 border-l-2 border-signal"
            style={{ left: `calc(${datumAt * 100}% - 1px)` }}
          />
        </div>
      </div>
      <div className="mt-1.5 flex flex-wrap items-baseline justify-between gap-x-3 gap-y-0.5">
        <span className="plate !tracking-[0.1em] !text-engrave-3">
          {label}
          <span className="ml-1.5 normal-case tracking-normal">
            {better === "low" ? "← 낮을수록 좋음" : "높을수록 좋음 →"}
          </span>
        </span>
        <span
          className={
            "plate !tracking-[0.1em] " +
            (beats ? "!text-signal-ink" : "!text-engrave-3")
          }
        >
          기준 {datumLabel}
        </span>
      </div>
    </div>
  );
}

/**
 * A gauge. `datum` is required — the whole thesis of this panel is that a
 * reading without its reference is unreadable, so the type system enforces it.
 */
export function Gauge({
  designation,
  value,
  unit,
  rangeLabel,
  datum,
  datumLabel,
  fill,
  datumAt,
  note,
  better,
}: {
  /** What this instrument measures. */
  designation: string;
  value: string;
  unit: string;
  /** What the left end of the scale represents. */
  rangeLabel: string;
  /** The baseline this reading is measured against, in full words. */
  datum: string;
  /** The same baseline, abbreviated for the scale engraving. */
  datumLabel: string;
  fill: number;
  datumAt: number;
  note: string;
  /** Which end of this instrument's scale is the good end. */
  better: "low" | "high";
}) {
  return (
    <div className="border-t-2 border-engrave-3 pt-4" data-gauge="rest">
      <Plate>{designation}</Plate>
      <div className="mt-3 flex items-baseline gap-2">
        <span className="readout text-[3.25rem] text-engrave sm:text-[3.75rem]">
          {value}
        </span>
        <span className="plate !text-sm !tracking-[0.08em] !text-engrave-2">
          {unit}
        </span>
      </div>
      <TickScale
        fill={fill}
        datumAt={datumAt}
        label={rangeLabel}
        datumLabel={datumLabel}
        better={better}
      />
      <p className="mt-4 text-engrave-2">{note}</p>
      <p className="mt-2 flex gap-2 text-engrave-3">
        <span className="plate mt-[3px] shrink-0 !text-signal-ink">기준</span>
        <span className="text-[0.875rem] leading-relaxed">{datum}</span>
      </p>
    </div>
  );
}

/**
 * Status is drawn as line pattern first, colour second, so it survives
 * monochrome print and colour-vision deficiency.
 */
export function Status({
  kind,
  children,
}: {
  kind: "open" | "closed" | "held";
  children: ReactNode;
}) {
  const rule =
    kind === "open"
      ? "border-solid border-engrave-3 text-engrave-2"
      : kind === "closed"
        ? "border-dashed border-signal text-signal-ink"
        : "border-dotted border-engrave-3 text-engrave-3";
  /* The link rail: unbroken carries, cross-ticked is interrupted, dotted is held.
     Pattern reads before colour does. */
  const rail =
    kind === "open" ? (
      <line x1="0" y1="4" x2="16" y2="4" />
    ) : kind === "closed" ? (
      <>
        <line x1="0" y1="4" x2="5.5" y2="4" />
        <line x1="5.5" y1="0.5" x2="10.5" y2="7.5" />
        <line x1="10.5" y1="4" x2="16" y2="4" />
      </>
    ) : (
      <line x1="0" y1="4" x2="16" y2="4" strokeDasharray="1.5 2.5" />
    );
  return (
    <span
      className={`plate inline-flex items-center gap-2 border px-2 py-[5px] ${rule}`}
    >
      <svg
        aria-hidden="true"
        width="16"
        height="8"
        viewBox="0 0 16 8"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.25"
        className="shrink-0"
      >
        {rail}
      </svg>
      {children}
    </span>
  );
}

/** A range switch: the panel's control vocabulary for primary actions. */
export function Switch({
  href,
  children,
  live = false,
  download = false,
}: {
  href: string;
  children: ReactNode;
  /** The engaged position, carrying the accent. */
  live?: boolean;
  download?: boolean;
}) {
  return (
    <a
      href={href}
      download={download || undefined}
      rel={href.startsWith("http") ? "noopener" : undefined}
      className={
        "plate group inline-flex items-center gap-2.5 border px-4 py-2.5 no-underline transition-colors duration-200 " +
        (live
          ? "border-signal bg-signal !text-signal-on hover:bg-signal-pressed"
          : "border-score-3 !text-engrave-2 hover:border-engrave-3 hover:!text-engrave")
      }
    >
      <span
        aria-hidden="true"
        className={
          "block h-2 w-2 rounded-full border " +
          (live
            ? "border-signal-on/50 bg-signal-on"
            : "border-score-3 group-hover:border-engrave-3")
        }
      />
      {children}
    </a>
  );
}
