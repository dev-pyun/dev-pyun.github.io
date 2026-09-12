import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Plate, Status } from "@/components/instrument";
import { Chip, DataTable, Label, Rule, SectionTitle } from "@/components/ui";
import { projects } from "@/content/projects";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const p = projects.find((x) => x.slug === slug);
  return { title: p?.title ?? "Project", description: p?.lead };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const p = projects.find((x) => x.slug === slug);
  if (!p) notFound();

  return (
    <article>
      <Link
        href="/projects/"
        className="plate inline-flex items-center gap-2 !text-engrave-3 no-underline transition-colors hover:!text-signal-ink"
      >
        <span aria-hidden="true" className="h-px w-5 bg-current" />
        Projects
      </Link>

      {/* ── Instrument nameplate ──────────────────────────────────────────── */}
      <header className="mt-6 border-t-2 border-engrave-3 pt-5">
        <p className="text-[0.8125rem] text-engrave-3">
          {p.org} · {p.period}
        </p>
        <h1 className="readout mt-3 max-w-[24ch] text-[1.75rem] leading-[1.15] text-engrave sm:text-[2.125rem]">
          {p.title}
        </h1>
        <div className="mt-5 flex flex-wrap gap-2">
          <Status kind={p.visibility === "private" ? "closed" : "open"}>
            {p.visibility === "private"
              ? "비공개 · 세부 구현은 일반화하여 기술"
              : "공개"}
          </Status>
          <Chip prose>{p.role}</Chip>
          {p.tags.map((t) => (
            <Chip key={t} prose>
              {t}
            </Chip>
          ))}
        </div>
        <p className="mt-7 max-w-[58ch] font-semibold leading-[1.75] text-engrave">
          {p.lead}
        </p>
        {p.privateNote && (
          <div className="mt-6 flex max-w-[62ch] gap-3 border border-score-2 bg-panel-recess p-4">
            <span aria-hidden="true" className="w-0.5 shrink-0 bg-signal" />
            <p className="text-[0.875rem] leading-relaxed text-engrave-2">
              <span className="plate mr-1.5 !inline !text-signal-ink">
                공개 범위 안내
              </span>
              {p.privateNote}
            </p>
          </div>
        )}
      </header>

      {/* ── ① 문제 ────────────────────────────────────────────────────────── */}
      <SectionTitle title="문제" />
      <div className="grid gap-8 md:grid-cols-2">
        <div>
          <Label>Context</Label>
          <p className="max-w-[62ch] leading-[1.75] text-engrave-2">{p.context}</p>
        </div>
        <div className="md:border-l md:border-score md:pl-8">
          <Label>Goal</Label>
          <p className="leading-[1.75] text-engrave-2">{p.goal}</p>
          <div className="mt-6">
            <Label>Role</Label>
            <p className="leading-[1.75] text-engrave-2">{p.roleDetail}</p>
          </div>
        </div>
      </div>

      {/* ── ② 판단 ────────────────────────────────────────────────────────── */}
      {p.decisions.length > 0 && (
        <>
          <SectionTitle title="판단" sub="설계에서 지킨 것" />
          <div className="grid gap-px border border-score bg-score sm:grid-cols-2">
            {p.decisions.map((d) => (
              <div key={d.title} className="bg-panel p-5">
                <h3 className="font-semibold text-engrave">{d.title}</h3>
                <p className="mt-2 max-w-[62ch] leading-[1.75] text-engrave-2">
                  {d.body}
                </p>
              </div>
            ))}
          </div>
        </>
      )}

      {/* ── ③ 구현과 검증 ─────────────────────────────────────────────────── */}
      {(p.execution.length > 0 || p.validation.length > 0) && (
        <>
          <SectionTitle title="구현과 검증" />
          <div className="grid gap-8 md:grid-cols-2">
            {p.execution.length > 0 && (
              <div>
                <Label>Execution</Label>
                <StepList items={p.execution} numbered />
              </div>
            )}
            {p.validation.length > 0 && (
              <div className="md:border-l md:border-score md:pl-8">
                <Label>Validation</Label>
                <StepList items={p.validation} />
              </div>
            )}
          </div>
        </>
      )}

      {/* ── ④ 결과 ────────────────────────────────────────────────────────── */}
      <SectionTitle title="결과" />
      <div className="grid gap-8 md:grid-cols-2">
        {p.results.map((r) => (
          <div key={r.title}>
            <Label>{r.title}</Label>
            <p className="max-w-[62ch] leading-[1.75] text-engrave-2">{r.body}</p>
          </div>
        ))}
      </div>

      {p.tables && (
        <div className="mt-10 grid gap-8 md:grid-cols-2">
          {p.tables.map((t) => (
            <div key={t.title}>
              <p className="mb-3 border-l-2 border-score-3 pl-2.5 text-[0.8125rem] text-engrave-3">
                {t.title}
              </p>
              <DataTable data={t.data} />
              {t.note && (
                <p className="mt-2.5 text-[0.8125rem] text-engrave-3">{t.note}</p>
              )}
            </div>
          ))}
        </div>
      )}

      {p.figures && (
        <div className="mt-10 grid gap-8 md:grid-cols-2">
          {p.figures.map((g, gi) => (
            <figure key={gi} className="border border-score bg-panel-recess p-3">
              <div
                className={
                  "grid gap-2 " +
                  (g.items.length === 3
                    ? "grid-cols-3"
                    : g.items.length === 2
                      ? "grid-cols-2"
                      : "grid-cols-1")
                }
              >
                {g.items.map((it) => (
                  <div key={it.src}>
                    <Image
                      src={it.src}
                      alt={it.alt}
                      width={700}
                      height={700}
                      className="h-auto w-full border border-score-2"
                    />
                    {it.label && (
                      <p className="mt-2 text-[0.75rem] leading-snug text-engrave-3">
                        {it.label}
                      </p>
                    )}
                  </div>
                ))}
              </div>
              <figcaption className="mt-3 border-t border-score pt-2.5 text-[0.8125rem] leading-relaxed text-engrave-3">
                <span className="plate mr-1.5 !inline !text-engrave-2">
                  그림 {gi + 1}
                </span>
                {g.caption}
              </figcaption>
            </figure>
          ))}
        </div>
      )}

      {/* ── ⑤ 기대와 달랐던 결과 ──────────────────────────────────────────── */}
      {(p.failure || p.learning.length > 0 || p.limits) && (
        <>
          <SectionTitle
            title={p.failure ? "기대와 달랐던 결과를 어떻게 다뤘는가" : "배운 것"}
          />
          <div className="grid gap-8 md:grid-cols-2">
            {p.failure && (
              <ol className="space-y-4">
                {p.failure.map((f) => (
                  <li key={f} className="flex gap-3">
                    <span
                      aria-hidden="true"
                      className="mt-[11px] h-px w-4 shrink-0 bg-signal"
                    />
                    <span className="max-w-[62ch] leading-[1.75] text-engrave-2">
                      {f}
                    </span>
                  </li>
                ))}
              </ol>
            )}
            <div
              className={
                p.failure ? "md:border-l md:border-score md:pl-8" : "md:col-span-2"
              }
            >
              {p.learning.length > 0 && (
                <>
                  <Label>Learning</Label>
                  {p.learning.map((l) => (
                    <p key={l} className="mb-3 max-w-[62ch] leading-[1.75] text-engrave-2">
                      {l}
                    </p>
                  ))}
                </>
              )}
              {p.limits && (
                <div className="mt-6 border-t border-score pt-3">
                  <Plate className="!text-engrave-3">Limits</Plate>
                  <p className="mt-1.5 text-[0.8125rem] leading-relaxed text-engrave-3">
                    {p.limits}
                  </p>
                </div>
              )}
            </div>
          </div>
        </>
      )}

      <Rule />

      <div className="grid gap-8 sm:grid-cols-2">
        <div>
          <Label>Tech stack</Label>
          <div className="flex flex-wrap gap-2">
            {p.stack.map((s) => (
              <Chip key={s}>{s}</Chip>
            ))}
          </div>
        </div>
        <div>
          <Label>Links</Label>
          {p.links.length === 0 ? (
            <p className="text-engrave-3">공개 링크 없음</p>
          ) : (
            <ul className="space-y-1.5">
              {p.links.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    rel="noopener"
                    className="text-signal-ink hover:underline"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </article>
  );
}

/** Steps read as a sequence of marks on the panel, not as bullet dots. */
function StepList({ items, numbered = false }: { items: string[]; numbered?: boolean }) {
  const Tag = numbered ? "ol" : "ul";
  return (
    <Tag className="space-y-3.5">
      {items.map((t, i) => (
        <li key={t} className="flex gap-3">
          {numbered ? (
            <span
              aria-hidden="true"
              className="readout mt-[5px] w-4 shrink-0 text-[0.75rem] text-engrave-3"
            >
              {String(i + 1).padStart(2, "0")}
            </span>
          ) : (
            <span
              aria-hidden="true"
              className="mt-[11px] h-px w-4 shrink-0 bg-score-3"
            />
          )}
          <span className="max-w-[62ch] leading-[1.75] text-engrave-2">{t}</span>
        </li>
      ))}
    </Tag>
  );
}
