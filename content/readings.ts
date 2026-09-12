/**
 * The three panel readings, shared by the site and the print layout.
 *
 * Every figure here is quoted from content/projects.ts — nothing is computed
 * or rounded here, and nothing new is asserted. `fill` and `datumAt` place the
 * reading and its baseline on a named axis; `better` records which end of that
 * axis is the good end, so a scale can never be read backwards.
 *
 * This lives outside app/ because the screen panel and the PDF must state the
 * same numbers. A second copy of these values is a second source of truth.
 */
export type Reading = {
  designation: string;
  value: string;
  unit: string;
  /** What the axis runs across. */
  rangeLabel: string;
  /** The baseline, in full words. */
  datum: string;
  /** The same baseline, abbreviated for the scale engraving. */
  datumLabel: string;
  fill: number;
  datumAt: number;
  better: "low" | "high";
  note: string;
};

export const readings: Reading[] = [
  {
    // Time axis, 0–60분. Lower is better, so the reading sits LEFT of the
    // datum it beats. 21.5 / 60 = 0.358; the 약 50분 initial pipeline at 0.833.
    designation: "손해사정 처리 시간",
    value: "21.5",
    unit: "분 / 34건 평균",
    rangeLabel: "0분 – 60분",
    datum: "수작업 기준선 30~70시간, 초기 파이프라인 약 50분. 초기 대비 57% 단축.",
    datumLabel: "초기 약 50분",
    fill: 0.358,
    datumAt: 0.833,
    better: "low",
    note: "사례당 30~70시간 걸리던 업무를 2개월 안에 PoC로.",
  },
  {
    // Recall axis, 0–1. Higher is better; EXP 3 at 0.872 past CFMask 0.835.
    designation: "남극 구름 탐지 Recall",
    value: "+3.68",
    unit: "%p / CFMask 대비",
    rangeLabel: "Recall 0 – 1",
    datum:
      "운영 알고리즘 CFMask 0.835. 본 연구 EXP 3은 0.872. 5개 입력 조합 중 기준선을 넘은 것은 하나뿐.",
    datumLabel: "CFMask 0.835",
    fill: 0.872,
    datumAt: 0.835,
    better: "high",
    note: "정답 라벨이 거의 없는 조건에서 단독 수행.",
  },
  {
    // F1 axis, 0–1. Higher is better; EXP 3 at 0.904 past CFMask 0.885. Same
    // 8-scene manual validation set as the Recall reading above.
    designation: "남극 구름 탐지 F1",
    value: "+1.83",
    unit: "%p / CFMask 대비",
    rangeLabel: "F1 0 – 1",
    datum:
      "운영 알고리즘 CFMask 0.885. 본 연구 EXP 3은 0.904. 수동 라벨 검증셋 8 scene, cloud 클래스 기준.",
    datumLabel: "CFMask 0.885",
    fill: 0.904,
    datumAt: 0.885,
    better: "high",
    note: "Recall만 올리고 정밀도를 잃지 않았다는 확인.",
  },
];
