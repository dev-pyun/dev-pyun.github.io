import Link from "next/link";
import { ArmGauges } from "@/components/arm-gauges";
import { Gauge, Plate, Score, Status, Switch } from "@/components/instrument";
import { ProjectCard } from "@/components/ui";
import { projects, site } from "@/content/projects";
import { readings } from "@/content/readings";


export default function Home() {
  const featured = projects.filter((p) => p.featured);
  const others = projects.filter((p) => !p.featured);

  return (
    <>
      <ArmGauges />
      {/* ── The panel's maker plate and its three instruments ─────────────── */}
      <section>
        <div className="max-w-[52ch]">
          <h1 className="text-[1.6rem] font-bold leading-[1.45] tracking-[-0.01em] text-engrave sm:text-[1.9rem]">
            {site.valueProp}
          </h1>
          <p className="mt-5 flex gap-3 text-engrave-2">
            <span aria-hidden="true" className="mt-[13px] h-px w-6 shrink-0 bg-signal" />
            <span>{site.tagline}</span>
          </p>
        </div>

        <div className="mt-12 grid gap-x-10 gap-y-12 md:grid-cols-3">
          {readings.map((r) => (
            <Gauge key={r.designation} {...r} />
          ))}
        </div>

        <div className="mt-12 flex flex-wrap items-center gap-3">
          <Switch href={site.pdf} live download>
            PDF 포트폴리오 내려받기
          </Switch>
          <Switch href={site.github}>GitHub</Switch>
          <span className="text-[0.8125rem] text-engrave-3">
            {site.affiliation}
          </span>
        </div>
      </section>

      <Score deep />

      {/* ── Featured instruments ──────────────────────────────────────────── */}
      <section aria-labelledby="featured">
        <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2">
          <Plate>
            <h2 id="featured">대표 프로젝트</h2>
          </Plate>
          <Link
            href="/projects/"
            className="plate !text-signal-ink no-underline hover:underline"
          >
            전체 5건 보기
          </Link>
        </div>
        <div className="mt-6 grid gap-px border border-score bg-score md:grid-cols-2">
          {featured.map((p) => (
            <ProjectCard key={p.slug} p={p} />
          ))}
        </div>

        <div className="mt-12">
          <Plate>
            <h2>보조 프로젝트</h2>
          </Plate>
          <ul className="mt-4 border-t border-score">
            {others.map((p) => (
              <li key={p.slug} className="border-b border-score">
                <Link
                  href={`/projects/${p.slug}/`}
                  className="group grid gap-x-6 gap-y-1 py-4 no-underline sm:grid-cols-[1fr_auto] sm:items-baseline"
                >
                  <div>
                    <span className="font-semibold text-engrave transition-colors group-hover:text-signal-ink">
                      {p.title}
                    </span>
                    <p className="mt-1 text-engrave-3">{p.proves}</p>
                  </div>
                  <span className="plate !text-engrave-3 sm:text-right">
                    {p.period}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <Score />

      {/* ── Operating principles, as panel legend ─────────────────────────── */}
      <section aria-labelledby="legend">
        <Plate>
          <h2 id="legend">판독 범례</h2>
        </Plate>
        <dl className="mt-5 grid gap-x-10 gap-y-5 sm:grid-cols-3">
          <div>
            <dt>
              <Status kind="open">공개</Status>
            </dt>
            <dd className="mt-2 text-engrave-3">
              코드와 결과를 그대로 볼 수 있는 프로젝트.
            </dd>
          </div>
          <div>
            <dt>
              <Status kind="closed">비공개 · 일반화</Status>
            </dt>
            <dd className="mt-2 text-engrave-3">
              비공개 연구라 문제 구조와 검증 방식으로 한정해 기술한 프로젝트.
            </dd>
          </div>
          <div>
            <dt>
              <Status kind="held">기준 미달</Status>
            </dt>
            <dd className="mt-2 text-engrave-3">
              기대와 달랐던 실험. 원인을 분류해 함께 적어둔 항목.
            </dd>
          </div>
        </dl>
      </section>
    </>
  );
}
