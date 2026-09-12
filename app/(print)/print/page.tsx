import Image from "next/image";
import "./print.css";
import {
  PChip,
  PFoot,
  PGauge,
  PLabel,
  PList,
  PPlate,
  PScore,
  PSection,
  PStatus,
  PTable,
} from "./parts";
import { readings } from "@/content/readings";
import {
  background,
  capabilities,
  howIWork,
  otherExperiences,
  projects,
  site,
  stackGroups,
} from "@/content/projects";

const TOTAL = 9;

const bySlug = (s: string) => {
  const p = projects.find((x) => x.slug === s);
  if (!p) throw new Error(`print layout expects project "${s}" in content/projects.ts`);
  return p;
};

export default function PrintPage() {
  const claims = bySlug("insurance-claims-agent");
  const cloud = bySlug("antarctic-cloud-masking");
  const minor = ["west-coast-air-sea-temperature", "extreme-snowfall-2024", "wiki-racing"].map(
    bySlug,
  );

  return (
    <div className="sheet">
      <p className="no-print preview-note">
        인쇄 미리보기 · Ctrl+P → 대상 &quot;PDF로 저장&quot;, 여백 &quot;기본&quot;, 배경 그래픽 켜기
      </p>

      {/* ── p1 · 계기판 ─────────────────────────────────────────────────── */}
      <section className="page">
        <header>
          <div style={{ display: "flex", alignItems: "baseline", gap: "3mm" }}>
            <h1 className="p-readout" style={{ fontSize: "19pt" }}>
              {site.name}
            </h1>
            <span className="p-plate" style={{ letterSpacing: "0.2em" }}>
              {site.role}
            </span>
          </div>
          <p style={{ marginTop: "2mm", color: "var(--p-ink-2)", maxWidth: "132mm" }}>
            {site.tagline}
          </p>
        </header>

        <PScore deep />

        <p
          style={{
            fontSize: "12pt",
            fontWeight: 600,
            lineHeight: 1.5,
            maxWidth: "132mm",
            letterSpacing: "-0.01em",
          }}
        >
          {site.valueProp}
        </p>

        <div
          style={{
            marginTop: "8mm",
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "6.5mm",
          }}
        >
          {readings.map((r) => (
            <PGauge key={r.designation} r={r} />
          ))}
        </div>

        <div style={{ marginTop: "7mm" }}>
          <PPlate>수록 프로젝트</PPlate>
          <div style={{ marginTop: "2.4mm", display: "flex", flexWrap: "wrap", gap: "2mm" }}>
            {projects.map((p) => (
              <PChip key={p.slug} prose>
                {p.title}
              </PChip>
            ))}
          </div>
        </div>

        <div className="page-foot">
          <span style={{ fontSize: "7.6pt", color: "var(--p-ink-3)" }}>
            {site.affiliation} · {site.email}
          </span>
          <span style={{ fontSize: "7.6pt", color: "var(--p-ink-3)" }}>
            {site.url.replace("https://", "")}
          </span>
        </div>
      </section>

      {/* ── p2 · 요약과 범례 ───────────────────────────────────────────── */}
      <section className="page">
        <PPlate style={{ color: "var(--p-signal)" }}>
          <h2>일하는 방식</h2>
        </PPlate>

        <div style={{ marginTop: "5mm", display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "6mm" }}>
          {capabilities.map((c, i) => (
            <div key={c.title} className="keep">
              <span className="p-readout" style={{ fontSize: "11pt", color: "var(--p-signal)" }}>
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 style={{ marginTop: "1.4mm", fontWeight: 700 }}>{c.title}</h3>
              <p style={{ marginTop: "1.6mm", color: "var(--p-ink-2)" }}>{c.body}</p>
            </div>
          ))}
        </div>

        <PScore />

        <PPlate>
          <h2>착수부터 보고까지</h2>
        </PPlate>
        <div style={{ marginTop: "3mm" }}>
          <PList items={howIWork} numbered />
        </div>

        <PScore />

        <PPlate>
          <h2>판독 범례</h2>
        </PPlate>
        <p style={{ marginTop: "2mm", color: "var(--p-ink-3)", maxWidth: "128mm" }}>
          이 문서의 모든 수치는 무엇 대비인지를 눈금에 새겨 함께 적었습니다. 상태는 색이
          아니라 선의 형태로 구분되므로 흑백으로 출력해도 판독됩니다.
        </p>
        <dl style={{ marginTop: "4mm", display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "6mm" }}>
          <div>
            <dt>
              <PStatus kind="open">공개</PStatus>
            </dt>
            <dd style={{ marginTop: "1.8mm", color: "var(--p-ink-3)" }}>
              코드와 결과를 그대로 볼 수 있는 프로젝트.
            </dd>
          </div>
          <div>
            <dt>
              <PStatus kind="closed">비공개 · 일반화</PStatus>
            </dt>
            <dd style={{ marginTop: "1.8mm", color: "var(--p-ink-3)" }}>
              비공개 연구라 문제 구조와 검증 방식으로 한정해 기술한 프로젝트.
            </dd>
          </div>
          <div>
            <dt>
              <PStatus kind="held">기준 미달</PStatus>
            </dt>
            <dd style={{ marginTop: "1.8mm", color: "var(--p-ink-3)" }}>
              기대와 달랐던 실험. 원인을 분류해 함께 적어둔 항목.
            </dd>
          </div>
        </dl>

        <PFoot page={2} total={TOTAL} />
      </section>

      {/* ── p3 · 손해사정 · 문제와 판단 ────────────────────────────────── */}
      <section className="page">
        <ProjectHead p={claims} />

        <PSection title="문제" />
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "6mm" }}>
          <div>
            <PLabel>Context</PLabel>
            <p style={{ marginTop: "1.4mm", color: "var(--p-ink-2)" }}>{claims.context}</p>
          </div>
          <div style={{ borderLeft: "0.4pt solid var(--p-score)", paddingLeft: "6mm" }}>
            <PLabel>Goal</PLabel>
            <p style={{ marginTop: "1.4mm", color: "var(--p-ink-2)" }}>{claims.goal}</p>
            <div style={{ marginTop: "4mm" }}>
              <PLabel>Role</PLabel>
              <p style={{ marginTop: "1.4mm", color: "var(--p-ink-2)" }}>{claims.roleDetail}</p>
            </div>
          </div>
        </div>

        <PSection title="판단" sub="설계에서 지킨 것" />
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4mm 6mm" }}>
          {claims.decisions.map((d) => (
            <div key={d.title} className="keep">
              <h3 style={{ fontWeight: 700 }}>{d.title}</h3>
              <p style={{ marginTop: "1.2mm", color: "var(--p-ink-2)" }}>{d.body}</p>
            </div>
          ))}
        </div>

        <PFoot page={3} total={TOTAL} />
      </section>

      {/* ── p4 · 손해사정 · 결과와 실패 ────────────────────────────────── */}
      <section className="page">
        <p style={{ fontSize: "8pt", color: "var(--p-ink-3)" }}>
          {claims.org} · {claims.period}
        </p>
        <h2 className="p-readout" style={{ fontSize: "13pt", marginTop: "1.4mm" }}>
          {claims.title} <span style={{ color: "var(--p-ink-3)" }}>· 결과</span>
        </h2>

        <PSection title="구현과 검증" />
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "6mm" }}>
          <div>
            <PLabel>Execution</PLabel>
            <div style={{ marginTop: "1.8mm" }}>
              <PList items={claims.execution} numbered />
            </div>
          </div>
          <div style={{ borderLeft: "0.4pt solid var(--p-score)", paddingLeft: "6mm" }}>
            <PLabel>Validation</PLabel>
            <div style={{ marginTop: "1.8mm" }}>
              <PList items={claims.validation} />
            </div>
          </div>
        </div>

        <PSection title="결과" />
        <div style={{ display: "grid", gap: "5mm" }}>
          {claims.results.map((r) => (
            <div key={r.title} className="keep">
              <PLabel>{r.title}</PLabel>
              <p style={{ marginTop: "1.4mm", color: "var(--p-ink-2)", maxWidth: "132mm" }}>
                {r.body}
              </p>
            </div>
          ))}
        </div>

        <PSection title="배운 것" />
        <div style={{ display: "grid", gap: "2.4mm" }}>
          {claims.learning.map((l) => (
            <p key={l} style={{ color: "var(--p-ink-2)", maxWidth: "132mm" }}>
              {l}
            </p>
          ))}
        </div>

        <PScore />

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "6mm" }}>
          <div>
            <PLabel>Tech stack</PLabel>
            <div style={{ marginTop: "1.8mm", display: "flex", flexWrap: "wrap", gap: "1.6mm" }}>
              {claims.stack.map((s) => (
                <PChip key={s}>{s}</PChip>
              ))}
            </div>
          </div>
          {claims.privateNote && (
            <div className="keep" style={{ display: "flex", gap: "2.4mm" }}>
              <span
                aria-hidden="true"
                style={{ width: "0.5mm", background: "var(--p-signal)", flexShrink: 0 }}
              />
              <p style={{ fontSize: "8.4pt", color: "var(--p-ink-2)", lineHeight: 1.55 }}>
                <span className="p-plate" style={{ display: "inline", color: "var(--p-signal)", marginRight: "1.4mm" }}>
                  공개 범위 안내
                </span>
                {claims.privateNote}
              </p>
            </div>
          )}
        </div>

        <PFoot page={4} total={TOTAL} />
      </section>

      {/* ── p5 · 남극 · 문제 · 판단 · 표 ───────────────────────────────── */}
      <section className="page">
        <ProjectHead p={cloud} />

        <PSection title="문제" />
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "6mm" }}>
          <div>
            <PLabel>Context</PLabel>
            <p style={{ marginTop: "1.4mm", color: "var(--p-ink-2)" }}>{cloud.context}</p>
          </div>
          <div style={{ borderLeft: "0.4pt solid var(--p-score)", paddingLeft: "6mm" }}>
            <PLabel>Goal</PLabel>
            <p style={{ marginTop: "1.4mm", color: "var(--p-ink-2)" }}>{cloud.goal}</p>
            <div style={{ marginTop: "4mm" }}>
              <PLabel>Role</PLabel>
              <p style={{ marginTop: "1.4mm", color: "var(--p-ink-2)" }}>{cloud.roleDetail}</p>
            </div>
          </div>
        </div>

        <PSection title="판단" sub="설계에서 지킨 것" />
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4mm 6mm" }}>
          {cloud.decisions.map((d) => (
            <div key={d.title} className="keep">
              <h3 style={{ fontWeight: 700 }}>{d.title}</h3>
              <p style={{ marginTop: "1.2mm", color: "var(--p-ink-2)" }}>{d.body}</p>
            </div>
          ))}
        </div>

        <PSection title="구현과 검증" />
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "6mm" }}>
          <div>
            <PLabel>Execution</PLabel>
            <div style={{ marginTop: "1.8mm" }}>
              <PList items={cloud.execution} numbered />
            </div>
          </div>
          <div style={{ borderLeft: "0.4pt solid var(--p-score)", paddingLeft: "6mm" }}>
            <PLabel>Validation</PLabel>
            <div style={{ marginTop: "1.8mm" }}>
              <PList items={cloud.validation} />
            </div>
          </div>
        </div>

        <PSection title="결과" />
        <div style={{ display: "grid", gap: "5mm" }}>
          {cloud.tables?.map((t) => (
            <div key={t.title} className="keep">
              <p
                style={{
                  marginBottom: "1.8mm",
                  borderLeft: "0.8pt solid var(--p-score-3)",
                  paddingLeft: "1.8mm",
                  fontSize: "8.2pt",
                  color: "var(--p-ink-3)",
                }}
              >
                {t.title}
              </p>
              <PTable data={t.data} />
              {t.note && (
                <p style={{ marginTop: "1.4mm", fontSize: "7.8pt", color: "var(--p-ink-3)" }}>
                  {t.note}
                </p>
              )}
            </div>
          ))}
        </div>

        <PFoot page={5} total={TOTAL} />
      </section>

      {/* ── p6 · 남극 · 그림과 실패 보고 ───────────────────────────────── */}
      <section className="page">
        <p style={{ fontSize: "8pt", color: "var(--p-ink-3)" }}>
          {cloud.org} · {cloud.period}
        </p>
        <h2 className="p-readout" style={{ fontSize: "13pt", marginTop: "1.4mm" }}>
          {cloud.title} <span style={{ color: "var(--p-ink-3)" }}>· 근거</span>
        </h2>


        <div style={{ marginTop: "4mm", display: "grid", gap: "4mm" }}>
          {cloud.figures?.map((g, gi) => (
            <figure key={gi} className="keep">
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: `repeat(${g.items.length}, 1fr)`,
                  gap: "2mm",
                }}
              >
                {g.items.map((it) => (
                  <div key={it.src}>
                    <Image
                      src={it.src}
                      alt={it.alt}
                      width={700}
                      height={700}
                      style={{
                        width: "100%",
                        height: "auto",
                        border: "0.4pt solid var(--p-score-2)",
                      }}
                    />
                    {it.label && (
                      <p style={{ marginTop: "1.2mm", fontSize: "7.2pt", color: "var(--p-ink-3)" }}>
                        {it.label}
                      </p>
                    )}
                  </div>
                ))}
              </div>
              <figcaption
                style={{
                  marginTop: "1.8mm",
                  borderTop: "0.4pt solid var(--p-score)",
                  paddingTop: "1.4mm",
                  fontSize: "7.8pt",
                  color: "var(--p-ink-3)",
                  maxWidth: "132mm",
                }}
              >
                <span className="p-plate" style={{ display: "inline", marginRight: "1.4mm", color: "var(--p-ink-2)" }}>
                  그림 {gi + 1}
                </span>
                {g.caption}
              </figcaption>
            </figure>
          ))}
        </div>

        <PFoot page={6} total={TOTAL} />
      </section>

      {/* ── p7 · 남극 · 기대와 달랐던 결과 ─────────────────────────────── */}
      <section className="page">
        <p style={{ fontSize: "8pt", color: "var(--p-ink-3)" }}>
          {cloud.org} · {cloud.period}
        </p>
        <h2 className="p-readout" style={{ fontSize: "13pt", marginTop: "1.4mm" }}>
          {cloud.title} <span style={{ color: "var(--p-ink-3)" }}>· 기대와 달랐던 결과</span>
        </h2>

        <PSection title="기대와 달랐던 결과를 어떻게 다뤘는가" />
        <PList items={cloud.failure ?? []} />

        <div style={{ marginTop: "6mm", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "6mm" }}>
          <div>
            <PLabel>Learning</PLabel>
            {cloud.learning.map((l) => (
              <p key={l} style={{ marginTop: "1.4mm", color: "var(--p-ink-2)" }}>
                {l}
              </p>
            ))}
          </div>
          <div style={{ borderLeft: "0.4pt solid var(--p-score)", paddingLeft: "6mm" }}>
            <PLabel>Limits</PLabel>
            <p style={{ marginTop: "1.4mm", fontSize: "8.2pt", color: "var(--p-ink-3)" }}>
              {cloud.limits}
            </p>
            <div style={{ marginTop: "4mm" }}>
              <PLabel>Tech stack</PLabel>
              <div style={{ marginTop: "1.8mm", display: "flex", flexWrap: "wrap", gap: "1.6mm" }}>
                {cloud.stack.map((s) => (
                  <PChip key={s}>{s}</PChip>
                ))}
              </div>
            </div>
          </div>
        </div>

        <PFoot page={7} total={TOTAL} />
      </section>

      {/* ── p8 · 보조 프로젝트 3건 ─────────────────────────────────────── */}
      <section className="page">
        <PPlate style={{ color: "var(--p-signal)" }}>
          <h2>보조 프로젝트</h2>
        </PPlate>
        <p style={{ marginTop: "2mm", color: "var(--p-ink-3)", maxWidth: "132mm" }}>
          아래 3건은 상세를 사이트에 두고 여기서는 문제·역할·결과만 적었습니다.
        </p>

        <div style={{ marginTop: "6mm", display: "grid", gap: "6mm" }}>
          {minor.map((p) => (
            <div
              key={p.slug}
              className="keep"
              style={{ borderTop: "0.9pt solid var(--p-ink-3)", paddingTop: "2.4mm" }}
            >
              <div style={{ display: "flex", flexWrap: "wrap", alignItems: "baseline", gap: "2.4mm" }}>
                <h3 className="p-readout" style={{ fontSize: "11.5pt" }}>
                  {p.title}
                </h3>
                <span style={{ fontSize: "8pt", color: "var(--p-ink-3)" }}>
                  {p.org} · {p.period}
                </span>
              </div>

              <div
                style={{
                  marginTop: "2.4mm",
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr 1fr",
                  gap: "5mm",
                }}
              >
                <div>
                  <PLabel>문제</PLabel>
                  <p style={{ marginTop: "1.2mm", color: "var(--p-ink-2)" }}>{p.problem}</p>
                </div>
                <div>
                  <PLabel>역할</PLabel>
                  <p style={{ marginTop: "1.2mm", color: "var(--p-ink-2)" }}>{p.role}</p>
                </div>
                <div>
                  <PLabel>결과</PLabel>
                  <p style={{ marginTop: "1.2mm", fontWeight: 600 }}>{p.headline}</p>
                </div>
              </div>

              <p style={{ marginTop: "2.4mm", color: "var(--p-ink-2)", maxWidth: "132mm" }}>
                {p.lead}
              </p>

              <div style={{ marginTop: "2.4mm", display: "flex", flexWrap: "wrap", gap: "1.6mm" }}>
                {p.stack.map((s) => (
                  <PChip key={s}>{s}</PChip>
                ))}
              </div>
            </div>
          ))}
        </div>

        <PFoot page={8} total={TOTAL} />
      </section>

      {/* ── p9 · 배경 · 스택 · 연락처 ──────────────────────────────────── */}
      <section className="page">
        <PPlate style={{ color: "var(--p-signal)" }}>
          <h2>배경</h2>
        </PPlate>
        <ul style={{ marginTop: "3mm", borderTop: "0.4pt solid var(--p-score)" }}>
          {background.map((b) => (
            <li
              key={b}
              style={{
                borderBottom: "0.4pt solid var(--p-score)",
                padding: "1.8mm 0",
                color: "var(--p-ink-2)",
              }}
            >
              {b}
            </li>
          ))}
        </ul>

        <PScore />

        <PPlate>
          <h2>기술 스택</h2>
        </PPlate>
        <dl style={{ marginTop: "3mm", display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "5mm" }}>
          {stackGroups.map((g) => (
            <div key={g.label}>
              <dt>
                <PPlate>{g.label}</PPlate>
              </dt>
              <dd style={{ marginTop: "1.8mm", display: "flex", flexWrap: "wrap", gap: "1.6mm" }}>
                {g.items.map((it) => (
                  <PChip key={it}>{it}</PChip>
                ))}
              </dd>
            </div>
          ))}
        </dl>

        <PScore />

        <PPlate>
          <h2>그 외</h2>
        </PPlate>
        <div style={{ marginTop: "3mm" }}>
          <PList items={otherExperiences} />
        </div>

        <PScore />

        <PPlate>
          <h2>연락처</h2>
        </PPlate>
        <dl style={{ marginTop: "3mm", borderTop: "0.9pt solid var(--p-ink-3)" }}>
          {[
            ["Email", site.email],
            ["GitHub", site.githubLabel],
            ["Web", site.url.replace("https://", "")],
          ].map(([k, v]) => (
            <div
              key={k}
              style={{
                display: "grid",
                gridTemplateColumns: "28mm 1fr",
                gap: "4mm",
                borderBottom: "0.4pt solid var(--p-score)",
                padding: "1.8mm 0",
              }}
            >
              <dt>
                <PPlate>{k}</PPlate>
              </dt>
              <dd>{v}</dd>
            </div>
          ))}
        </dl>
        <p style={{ marginTop: "4mm", color: "var(--p-ink-3)" }}>{site.affiliation}</p>

        <PFoot page={9} total={TOTAL} />
      </section>
    </div>
  );
}

/** The nameplate at the head of a project's first sheet. */
function ProjectHead({ p }: { p: (typeof projects)[number] }) {
  return (
    <header className="keep" style={{ borderTop: "1pt solid var(--p-ink-3)", paddingTop: "2.4mm" }}>
      <p style={{ fontSize: "8pt", color: "var(--p-ink-3)" }}>
        {p.org} · {p.period}
      </p>
      <h2 className="p-readout" style={{ fontSize: "16pt", marginTop: "1.6mm", maxWidth: "132mm" }}>
        {p.title}
      </h2>
      <div style={{ marginTop: "2.4mm", display: "flex", flexWrap: "wrap", gap: "1.6mm" }}>
        <PStatus kind={p.visibility === "private" ? "closed" : "open"}>
          {p.visibility === "private" ? "비공개 · 일반화" : "공개"}
        </PStatus>
        <PChip prose>{p.role}</PChip>
        {p.tags.map((t) => (
          <PChip key={t} prose>
            {t}
          </PChip>
        ))}
      </div>
      <p style={{ marginTop: "3mm", fontWeight: 600, maxWidth: "160mm", lineHeight: 1.65 }}>
        {p.lead}
      </p>
    </header>
  );
}
