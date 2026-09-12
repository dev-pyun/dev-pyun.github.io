import type { Metadata } from "next";
import { Plate, Status } from "@/components/instrument";
import { site } from "@/content/projects";

export const metadata: Metadata = { title: "Contact" };

/* The terminal block: every line is a labelled connection, and each carries a
   link rail showing whether it is live or held, drawn as pattern before hue. */
const terminals: {
  no: string;
  designation: string;
  href: string;
  label: string;
  state: "open" | "held";
  note: string;
}[] = [
  {
    no: "01",
    designation: "Email",
    href: `mailto:${site.email}`,
    label: site.email,
    state: "open",
    note: "가장 빠른 경로",
  },
  {
    no: "02",
    designation: "GitHub",
    href: site.github,
    label: site.githubLabel,
    state: "open",
    note: "공개 저장소",
  },
  {
    no: "03",
    designation: "PDF",
    href: site.pdf,
    label: "포트폴리오 내려받기",
    state: "open",
    note: "사이트와 같은 사실",
  },
  {
    no: "04",
    designation: "Web",
    href: site.url,
    label: site.url.replace("https://", ""),
    state: "held",
    note: "지금 보고 있는 화면",
  },
];

export default function ContactPage() {
  return (
    <>
      <h1 className="readout max-w-[30ch] text-[1.5rem] leading-[1.25] text-engrave">
        연락은 이메일이 가장 빠릅니다.
      </h1>

      <div className="mt-10 max-w-[48rem] border-t-2 border-engrave-3">
        <dl>
          {terminals.map((t) => (
            <div
              key={t.no}
              className="grid grid-cols-[2.25rem_1fr] items-baseline gap-x-3 gap-y-1 border-b border-score py-4 sm:grid-cols-[2.25rem_7rem_1fr_auto] sm:gap-x-5"
            >
              <span className="readout text-[0.875rem] text-engrave-3">{t.no}</span>
              <dt>
                <Plate className="!text-engrave-3">{t.designation}</Plate>
              </dt>
              <dd className="col-start-2 sm:col-start-3">
                <a
                  href={t.href}
                  rel="noopener"
                  className="text-engrave transition-colors hover:text-signal-ink"
                >
                  {t.label}
                </a>
                <p className="mt-0.5 text-[0.8125rem] text-engrave-3">{t.note}</p>
              </dd>
              <div className="col-start-2 mt-1 sm:col-start-4 sm:mt-0">
                <Status kind={t.state}>
                  {t.state === "open" ? "연결" : "현재 위치"}
                </Status>
              </div>
            </div>
          ))}
        </dl>
      </div>

      <p className="mt-8 max-w-[48ch] text-engrave-3">{site.affiliation}</p>
    </>
  );
}
