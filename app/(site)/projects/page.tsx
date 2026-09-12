import type { Metadata } from "next";
import { Plate, Score } from "@/components/instrument";
import { ProjectCard } from "@/components/ui";
import { otherExperiences, projects } from "@/content/projects";

export const metadata: Metadata = { title: "Projects" };

export default function ProjectsPage() {
  return (
    <>
      <div className="max-w-[62ch]">
        <Plate className="!text-signal-ink">
          <h1>Projects</h1>
        </Plate>
        <p className="mt-4 text-engrave-2">
          각 프로젝트는 Context → Goal → Role → Decision → Execution → Validation →
          Result → Learning 순서로 적었습니다. 수치와 기간은 PDF 포트폴리오와
          동일합니다.
        </p>
      </div>

      <h2 className="sr-only">프로젝트 5건</h2>
      <div className="mt-10 grid gap-px border border-score bg-score md:grid-cols-2">
        {projects.map((p) => (
          <ProjectCard key={p.slug} p={p} />
        ))}
      </div>

      <Score />

      <section aria-labelledby="other">
        <Plate>
          <h2 id="other">그 외</h2>
        </Plate>
        <ul className="mt-4 border-t border-score">
          {otherExperiences.map((t) => (
            <li
              key={t}
              className="flex gap-3 border-b border-score py-4 text-engrave-2"
            >
              <span
                aria-hidden="true"
                className="mt-[11px] h-px w-4 shrink-0 bg-score-3"
              />
              <span>{t}</span>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
