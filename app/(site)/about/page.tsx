import type { Metadata } from "next";
import { Plate, Score } from "@/components/instrument";
import { Chip } from "@/components/ui";
import {
  background,
  capabilities,
  howIWork,
  stackGroups,
} from "@/content/projects";

export const metadata: Metadata = { title: "About" };

export default function AboutPage() {
  return (
    <>
      <div className="max-w-[46ch]">
        <Plate className="!text-signal-ink">
          <h1>About</h1>
        </Plate>
        <p className="readout mt-4 text-[1.5rem] leading-[1.3] text-engrave sm:text-[1.75rem]">
          혼자 맡겨도 끝까지 갑니다.
          <br />
          결과는 숫자로, 실패는 원인으로 보고합니다.
        </p>
      </div>

      <Score deep />

      <div className="grid gap-10 md:grid-cols-2">
        <section aria-labelledby="background">
          <Plate>
            <h2 id="background">배경</h2>
          </Plate>
          <ul className="mt-4 border-t border-score">
            {background.map((b) => (
              <li
                key={b}
                className="border-b border-score py-3 text-engrave-2"
              >
                {b}
              </li>
            ))}
          </ul>
        </section>
        <section
          aria-labelledby="focus"
          className="md:border-l md:border-score md:pl-10"
        >
          <Plate>
            <h2 id="focus">관심 분야</h2>
          </Plate>
          <p className="mt-3 leading-[1.75] text-engrave-2">
            현업 워크플로우 안에서 실제로 돌아가는 LLM Agent 시스템. 라벨이 부족한
            도메인(원격탐사)에서의 딥러닝 모델 설계와 검증.
          </p>
          <div className="mt-7">
            <Plate>
              <h2>지원 직무</h2>
            </Plate>
            <p className="mt-3 leading-[1.75] text-engrave-2">
              AI Engineer — LLM Agent / AX. 모델 개발 경험과 프론트엔드 구현 경험을
              함께 갖춰 “결과를 쓸 수 있는 형태”까지 책임집니다.
            </p>
          </div>
        </section>
      </div>

      <Score />

      <section aria-labelledby="capabilities">
        <Plate>
          <h2 id="capabilities">핵심 역량</h2>
        </Plate>
        <div className="mt-5 grid gap-px border border-score bg-score md:grid-cols-3">
          {capabilities.map((c, i) => (
            <div key={c.title} className="bg-panel p-5">
              <span className="readout text-[1.125rem] text-signal-ink">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-2 font-bold text-engrave">{c.title}</h3>
              <p className="mt-2.5 leading-[1.75] text-engrave-2">{c.body}</p>
            </div>
          ))}
        </div>
      </section>

      <Score />

      <section aria-labelledby="howiwork">
        <Plate>
          <h2 id="howiwork">일하는 방식</h2>
        </Plate>
        <ol className="mt-4 border-t border-score">
          {howIWork.map((h, i) => (
            <li key={h} className="flex gap-4 border-b border-score py-4">
              <span
                aria-hidden="true"
                className="readout mt-[3px] shrink-0 text-[0.8125rem] text-engrave-3"
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="leading-[1.75] text-engrave-2">{h}</span>
            </li>
          ))}
        </ol>
      </section>

      <Score />

      <section aria-labelledby="stack">
        <Plate>
          <h2 id="stack">기술 스택</h2>
        </Plate>
        <dl className="mt-5 grid gap-8 sm:grid-cols-3">
          {stackGroups.map((g) => (
            <div key={g.label}>
              <dt>
                <Plate className="!text-engrave-3">{g.label}</Plate>
              </dt>
              <dd className="mt-3 flex flex-wrap gap-2">
                {g.items.map((it) => (
                  <Chip key={it}>{it}</Chip>
                ))}
              </dd>
            </div>
          ))}
        </dl>
      </section>
    </>
  );
}
