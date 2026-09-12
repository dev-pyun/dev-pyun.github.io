import type { ReactNode } from "react";
import type { Reading } from "@/content/readings";
import type { TableData } from "@/content/projects";

/* Print-side instrument primitives. Same grammar as components/instrument.tsx
   — engraved designations, a scale that carries its own datum, state as line
   pattern — rebuilt against the paper token set and at ink weights. */

export function PPlate({
  children,
  className = "",
  style,
}: {
  children: ReactNode;
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <div className={`p-plate ${className}`} style={style}>
      {children}
    </div>
  );
}

export function PScore({ deep = false }: { deep?: boolean }) {
  return (
    <hr
      style={{
        border: 0,
        borderTop: `${deep ? 0.9 : 0.4}pt solid var(--p-score${deep ? "-3" : ""})`,
        margin: "5mm 0",
      }}
    />
  );
}

/** Status drawn as a link rail: pattern before hue, so it holds in monochrome. */
export function PStatus({
  kind,
  children,
}: {
  kind: "open" | "closed" | "held";
  children: ReactNode;
}) {
  const color = kind === "closed" ? "var(--p-signal)" : "var(--p-ink-3)";
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
      className="p-plate"
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "1.6mm",
        border: `0.5pt ${kind === "open" ? "solid" : kind === "closed" ? "dashed" : "dotted"} ${color}`,
        color,
        padding: "0.7mm 1.8mm",
        fontSize: "6.8pt",
      }}
    >
      <svg
        aria-hidden="true"
        width="16"
        height="8"
        viewBox="0 0 16 8"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.25"
      >
        {rail}
      </svg>
      {children}
    </span>
  );
}

/** A stamped tag. `prose` drops the uppercase for phrases. */
export function PChip({
  children,
  prose = false,
}: {
  children: ReactNode;
  prose?: boolean;
}) {
  return (
    <span
      className={prose ? undefined : "p-plate"}
      style={{
        display: "inline-block",
        border: "0.4pt solid var(--p-score-2)",
        color: "var(--p-ink-3)",
        padding: "0.7mm 1.8mm",
        fontSize: prose ? "8.4pt" : undefined,
      }}
    >
      {children}
    </span>
  );
}

/** Section division: the cut rule and engraved designation carry it. */
export function PSection({ title, sub }: { title: string; sub?: string }) {
  const long = title.length > 10;
  return (
    <div
      className="keep"
      style={{
        marginTop: "6mm",
        marginBottom: "2.6mm",
        borderTop: "0.4pt solid var(--p-score-3)",
        paddingTop: "1.8mm",
        display: "flex",
        flexWrap: "wrap",
        alignItems: "baseline",
        gap: "0 2.6mm",
      }}
    >
      <span
        aria-hidden="true"
        style={{
          width: "0.5mm",
          height: "2.4mm",
          background: "var(--p-signal)",
          marginTop: "0.6mm",
        }}
      />
      <h2
        className={long ? undefined : "p-plate"}
        style={
          long
            ? { fontSize: "9.6pt", fontWeight: 700, color: "var(--p-ink)" }
            : { color: "var(--p-ink)", letterSpacing: "0.16em" }
        }
      >
        {title}
      </h2>
      {sub && <span className="p-plate">{sub}</span>}
    </div>
  );
}

/** The tick scale. The datum is engraved into the scale, never captioned away. */
function PScale({ r }: { r: Reading }) {
  const ticks = Array.from({ length: 21 }, (_, i) => i);
  const beats = r.better === "low" ? r.fill < r.datumAt : r.fill > r.datumAt;
  return (
    <div style={{ marginTop: "2.6mm" }}>
      <div style={{ position: "relative", height: "6.5mm" }} aria-hidden="true">
        <div
          style={{
            position: "absolute",
            inset: "0 0 auto 0",
            height: "4mm",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
          }}
        >
          {ticks.map((t) => (
            <span
              key={t}
              style={{
                width: "0.3pt",
                height: t % 5 === 0 ? "4mm" : "2mm",
                background:
                  t % 5 === 0 ? "var(--p-score-3)" : "var(--p-score)",
              }}
            />
          ))}
        </div>
        <div style={{ position: "absolute", inset: "0 0 auto 0", height: "4mm" }}>
          {/* the reading */}
          <div
            style={{
              position: "absolute",
              left: 0,
              top: 0,
              height: "4mm",
              width: `${r.fill * 100}%`,
              background: "rgb(22 24 27 / 0.10)",
              borderRight: "0.8pt solid var(--p-ink)",
            }}
          />
          {/* the datum */}
          <div
            style={{
              position: "absolute",
              left: `calc(${r.datumAt * 100}% - 0.4pt)`,
              top: "-0.8mm",
              height: "5.6mm",
              borderLeft: "1pt solid var(--p-signal)",
            }}
          />
        </div>
      </div>
      <div
        style={{
          marginTop: "1mm",
          display: "flex",
          justifyContent: "space-between",
          gap: "3mm",
        }}
      >
        <span className="p-plate" style={{ letterSpacing: "0.1em" }}>
          {r.rangeLabel}
          <span style={{ textTransform: "none", letterSpacing: 0, marginLeft: "1.4mm" }}>
            {r.better === "low" ? "← 낮을수록 좋음" : "높을수록 좋음 →"}
          </span>
        </span>
        <span
          className="p-plate"
          style={{
            letterSpacing: "0.1em",
            color: beats ? "var(--p-signal)" : "var(--p-ink-3)",
            whiteSpace: "nowrap",
          }}
        >
          기준 {r.datumLabel}
        </span>
      </div>
    </div>
  );
}

/** A gauge. The datum is structural here too: no reading renders without it. */
export function PGauge({ r }: { r: Reading }) {
  return (
    <div className="keep" style={{ borderTop: "1pt solid var(--p-ink-3)", paddingTop: "2.4mm" }}>
      <PPlate>{r.designation}</PPlate>
      <div style={{ display: "flex", alignItems: "baseline", gap: "1.6mm", marginTop: "1.6mm" }}>
        <span className="p-readout" style={{ fontSize: "27pt" }}>
          {r.value}
        </span>
        <span className="p-plate" style={{ fontSize: "8.2pt", color: "var(--p-ink-2)" }}>
          {r.unit}
        </span>
      </div>
      <PScale r={r} />
      <p style={{ marginTop: "2.4mm", color: "var(--p-ink-2)" }}>{r.note}</p>
      <p style={{ marginTop: "1.4mm", display: "flex", gap: "1.8mm", color: "var(--p-ink-3)" }}>
        <span className="p-plate" style={{ color: "var(--p-signal)", flexShrink: 0, marginTop: "0.4mm" }}>
          기준
        </span>
        <span style={{ fontSize: "8.4pt", lineHeight: 1.5 }}>{r.datum}</span>
      </p>
    </div>
  );
}

/** Measured values stay tabular; the best row is cut, not merely tinted. */
export function PTable({ data }: { data: TableData }) {
  const numFrom = data.numericFrom ?? Number.MAX_SAFE_INTEGER;
  return (
    <table
      className="keep"
      style={{ width: "100%", borderCollapse: "collapse", fontSize: "8.4pt" }}
    >
      <thead>
        <tr>
          {data.head.map((h, i) => (
            <th
              key={h}
              scope="col"
              className="p-plate"
              style={{
                borderTop: "0.5pt solid var(--p-score-3)",
                borderBottom: "0.5pt solid var(--p-score-3)",
                padding: "1.4mm 1.6mm",
                textAlign: i >= numFrom ? "right" : "left",
                color: "var(--p-ink-2)",
                fontSize: "6.8pt",
              }}
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
            <tr key={ri} style={best ? { background: "var(--p-tint)" } : undefined}>
              {r.map((c, ci) => (
                <td
                  key={ci}
                  className="p-tnum"
                  style={{
                    borderBottom: "0.4pt solid var(--p-score)",
                    padding: "1.4mm 1.6mm",
                    textAlign: ci >= numFrom ? "right" : "left",
                    verticalAlign: "top",
                    fontWeight: best ? 600 : 400,
                    color: best ? "var(--p-signal)" : "var(--p-ink-2)",
                    ...(best && ci === 0
                      ? { borderLeft: "1pt solid var(--p-signal)", paddingLeft: "1.2mm" }
                      : null),
                  }}
                >
                  {c}
                </td>
              ))}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

/** A list whose items are marked, not bulleted. */
export function PList({
  items,
  numbered = false,
}: {
  items: string[];
  numbered?: boolean;
}) {
  const Tag = numbered ? "ol" : "ul";
  return (
    <Tag style={{ display: "grid", gap: "1.8mm" }}>
      {items.map((t, i) => (
        <li key={t} style={{ display: "flex", gap: "2.2mm" }}>
          {numbered ? (
            <span
              aria-hidden="true"
              className="p-readout"
              style={{
                fontSize: "7.4pt",
                color: "var(--p-ink-3)",
                flexShrink: 0,
                marginTop: "0.9mm",
                width: "4mm",
              }}
            >
              {String(i + 1).padStart(2, "0")}
            </span>
          ) : (
            <span
              aria-hidden="true"
              style={{
                height: "0.4pt",
                width: "3mm",
                background: "var(--p-score-3)",
                flexShrink: 0,
                marginTop: "2.4mm",
              }}
            />
          )}
          <span style={{ color: "var(--p-ink-2)" }}>{t}</span>
        </li>
      ))}
    </Tag>
  );
}

export function PLabel({ children }: { children: ReactNode }) {
  return <PPlate className="keep">{children}</PPlate>;
}

/** The running foot on every sheet. */
export function PFoot({ page, total }: { page: number; total: number }) {
  return (
    <div className="page-foot">
      <span style={{ fontSize: "7.6pt", color: "var(--p-ink-3)" }}>
        편채범 · AI Engineer · dev-pyun.github.io
      </span>
      <span className="p-readout" style={{ fontSize: "8pt", color: "var(--p-ink-3)" }}>
        {String(page).padStart(2, "0")} / {String(total).padStart(2, "0")}
      </span>
    </div>
  );
}
