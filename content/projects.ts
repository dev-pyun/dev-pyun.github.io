export type Figure = {
  src: string;
  alt: string;
  label?: string;
};

export type FigureGroup = {
  caption: string;
  items: Figure[];
};

export type TableData = {
  head: string[];
  rows: string[][];
  highlightRow?: number;
  numericFrom?: number; // column index from which cells are right-aligned
};

export type Project = {
  slug: string;
  title: string;
  period: string;
  org: string;
  visibility: "public" | "private";
  role: string;
  tags: string[];
  problem: string; // one-line problem statement for cards
  headline: string; // one-line message on cards
  proves: string; // what this experience proves (recruiter view)
  lead: string;
  context: string;
  goal: string;
  roleDetail: string;
  decisions: { title: string; body: string }[];
  execution: string[];
  validation: string[];
  results: { title: string; body: string }[];
  tables?: { title: string; note?: string; data: TableData }[];
  figures?: FigureGroup[];
  failure?: string[];
  learning: string[];
  limits?: string;
  stack: string[];
  links: { label: string; href: string }[];
  privateNote?: string;
  featured: boolean;
};

export const site = {
  name: "편채범",
  role: "AI Engineer",
  tagline: "현업 업무를 끝까지 돌아가는 AI 파이프라인으로 만드는 사람",
  valueProp:
    "PoC를 데모에서 끝내지 않습니다. 현업 기준으로 범위를 정하고, 실제 케이스로 재고, 안 되는 이유까지 문서로 남깁니다.",
  github: "https://github.com/dev-pyun",
  githubLabel: "github.com/dev-pyun",
  email: "hanpa2001@snu.ac.kr",
  url: "https://dev-pyun.github.io",
  pdf: "/portfolio.pdf",
  affiliation: "서울대학교 지구환경과학부 · 인공지능 복수전공",
};

export const keyResults = [
  {
    value: "21.5",
    unit: "분",
    body: "손해사정 34건 평균 처리 시간. 사례당 30~70시간 걸리던 업무를 2개월 안에 PoC로.",
  },
  {
    value: "+3.68",
    unit: "%p",
    body: "남극 구름 탐지 Recall, 운영 알고리즘 CFMask 대비. 정답 라벨이 거의 없는 조건에서 단독 수행.",
  },
  {
    value: "4",
    unit: "분류",
    body: "안 된 실험은 원인을 분류해 보고. 로컬 LLM 실패 4분류, self-training 성능 저하 원인 규명.",
  },
];

export const capabilities = [
  {
    title: "현업 언어를 요구사항으로",
    body: "의사·손해사정사 인터뷰로 판단 기준을 뽑아, AI가 결정하면 안 되는 지점과 사람 승인 게이트를 먼저 설계합니다.",
  },
  {
    title: "혼자서 end-to-end",
    body: "에이전트 10개 하니스, U-Net self-training 파이프라인, 위성자료 정합 파이프라인, React/TS 프론트엔드까지 직접 구현합니다.",
  },
  {
    title: "숫자로 보고, 실패는 분류",
    body: "34건 실측과 단계별 타이밍 계측. 실패 원인 4분류. 기대와 다른 실험 결과는 숨기지 않고 원인을 밝혀 다음 설계 조건으로 남깁니다.",
  },
];

export const howIWork = [
  "착수 전에 현업이 실제로 쓰는 판단 기준을 확인하고, AI가 결정하면 안 되는 지점을 먼저 정합니다.",
  "전체 흐름을 먼저 돌린 뒤 계측으로 병목을 찾습니다. 추측으로 고치지 않습니다.",
  "안 된 실험은 원인을 분류해 보고합니다. 나쁜 소식을 늦게 전하지 않습니다.",
];

export const background = [
  "서울대학교 지구환경과학부 · 인공지능 복수전공 (2021 입학)",
  "학점 3.77 / 4.3 · 자연과학대학 성적우수상 2회 (2024-1, 2024-2)",
  "위성기상기후연구실 학부연구생 (2026.03–06)",
  "AIDAS 연구실 인턴 (2026.07–08)",
  "TOEIC 905 (2026.08) · OPIc IM2 (2026.09) · 공군 기상대 복무",
];

export const stackGroups = [
  { label: "AI · 데이터", items: ["Python", "PyTorch", "NumPy / pandas / xarray", "rasterio · GeoTIFF · Zarr"] },
  { label: "Agent · 검증", items: ["Claude Code 기반 Agent 하니스", "JSON Schema", "pytest", "OpenRouter (오픈웨이트 모델 실험)"] },
  { label: "웹 · 협업", items: ["TypeScript", "React", "Next.js", "Zustand", "Git / GitHub"] },
];

export const projects: Project[] = [
  {
    slug: "insurance-claims-agent",
    problem: "사례당 30~70시간 걸리는 서류 검토·약관 대조·부지급 사유 반박",
    title: "손해사정 AI Agent 파이프라인 PoC",
    period: "2026.07 – 08",
    org: "AIDAS Lab, SNU",
    visibility: "private",
    role: "2인 팀 · 설계·구현·실측 전담",
    tags: ["보험금 청구·심사 도메인", "Claude Code 기반 하니스", "범용 모델 Opus 5"],
    headline: "34건 평균 21.5분 (초기 파이프라인 약 50분)",
    proves: "비공개 의료 데이터 환경에서 30~70시간 업무를 21.5분 파이프라인으로 만들어 실무자 검토를 통과시켰습니다.",
    lead: "2개월 안에, 비공개 의료 데이터 환경에서, 30~70시간짜리 업무를 21.5분 파이프라인으로 만들어 실무자 검토를 통과시켰습니다.",
    context:
      "손해사정사 1명이 케이스 하나에 30~70시간을 씁니다. 진단서·판독지·진료비 명세서·약관·보험사 부지급 통지 등 수십 건의 서류를 검토하고, 약관과 대조하고, 부지급 사유를 반박해야 합니다. 법률·의료 판단 오류에는 책임이 따르고, 의료정보라 외부 서비스에 그대로 올릴 수 없습니다.",
    goal: "문서 처리부터 스크리닝 리포트와 손해사정서 초안까지, 기존 OCR·LLM·검색 모델의 조합으로 자동화할 수 있는지 검증합니다. 최종 판단은 사람이 합니다.",
    roleDetail:
      "2인 팀에서 설계·구현·실측을 전담했습니다. 동료의 18단계 초안을 10단계로 줄인 것이 첫 의사결정이었습니다.",
    decisions: [
      {
        title: "책임 경계",
        body: "법률·의료 판단은 사람에게 남기고 AI는 초안까지. 의사·손해사정사 인터뷰로 출처 신뢰성, 보험사 주장 내 쟁점, 문서 검토 우선순위를 정해 범위를 확정.",
      },
      {
        title: "평가 오염 방지",
        body: "평가 기준인 최종 손해사정서는 어떤 단계에서도 모델 입력에 들어가지 않도록 접근 경로를 차단. 그래서 성능 숫자를 믿을 수 있음.",
      },
      {
        title: "감사 가능성",
        body: "OCR 이중 판독 불일치, 문서 분할 경계, 분류 검토, 개인정보 유출 의심 — 4곳은 사람이 승인해야 진행되고, 누가 언제 승인했는지 기록이 남음.",
      },
      {
        title: "데이터 통제",
        body: "모든 에이전트는 락·원장·스키마 검증이 있는 DAO 하나를 통해서만 읽고 씀. 의료정보 접근 경로가 하나뿐.",
      },
    ],
    execution: [
      "전체 흐름이 끝까지 실행되도록 먼저 구축한 뒤, 각 에이전트의 중간 산출물을 단계별로 검토. 동일 자료의 중복 참조와 최종 결과에 기여하지 않는 긴 추론이 병목임을 확인",
      "의료문서 17종, 추출 필드 56개로 세분화. 우선순위 문서에서 값이 확보되면 탐색을 중단하고, 중간 결과를 후속 단계가 재사용",
      "문서별 OCR과 약관 처리·거절 사유 추출을 병렬화",
      "OCR은 두 경로로 판독해 교차검증. 개인정보는 LLM이 위치를 찾고 결정적 규칙으로 치환, 유출 감지 시 즉시 중단",
    ],
    validation: [
      "실제 종결 케이스 34건 실측. 단계별 타이밍 계측을 파이프라인에 내장해 “어디서 시간이 가는지”를 기록으로 확인",
      "출력은 손해사정사가 검토 — 출처 제시, 보험사 주장 내 쟁점 파악 등 핵심 품질 유지 여부",
      "단위 테스트(pytest)는 실제 케이스가 아닌 임시 경로에서만 실행",
    ],
    results: [
      {
        title: "처리 시간",
        body: "기준선(수작업) 30~70시간 → 초기 파이프라인 약 50분 → 최종 PoC 34건 평균 21.5분. 초기 대비 57% 단축. 수작업 기준선과는 단위가 달라 배수로 표현하지 않았습니다.",
      },
      {
        title: "로컬(오픈웨이트) 모델 전환 실험",
        body: "케이스 2건 × 오픈웨이트 모델 8종(OpenRouter). 16회 중 5회 완주, 두 케이스 모두 완주한 모델은 Qwen3-VL 32B 1종. 실패 원인 4분류: tool call 미반환 · 출력 절단 · JSON 위반 · OCR 환각. Qwen 계열을 우선 후보로, EXAONE 등 한국어 특화 모델을 같은 조건에서 비교하는 과제를 남겼습니다.",
      },
    ],
    learning: [
      "속도는 모델 교체보다 어떤 단계가 결과에 기여하지 않는지를 기록으로 찾는 데서 나왔습니다. 계측 없이 추측으로 고치지 않는 것이 원칙이 됐습니다.",
      "범용 모델로 검증한 설계가 로컬 모델에서 깨졌습니다. 다음 프로젝트에서는 배포 모델의 제약(도구 호출 형식, 출력 길이)을 설계 첫날 확인합니다.",
      "“보험사 주장 허점 발견” 같은 정성 성과는 실무자 검토를 거쳐야만 성과로 인정했습니다.",
    ],
    stack: ["Claude Code 기반 Agent 하니스", "Opus 5", "OpenRouter", "JSON Schema", "pytest", "Python"],
    links: [],
    privateNote:
      "가명처리된 의료·보험 케이스를 다루는 연구실 프로젝트라 코드·프롬프트·케이스는 공개하지 않습니다. 이 페이지는 문제 구조, 시스템 흐름, 본인의 판단과 검증 방식으로 한정해 기술했습니다.",
    featured: true,
  },
  {
    slug: "antarctic-cloud-masking",
    problem: "눈·얼음과 구름의 스펙트럼 유사성, 픽셀 정답 라벨 부재",
    title: "남극 구름 탐지 Self-training",
    period: "2026.03 – 06",
    org: "Satellite Meteorology Lab, SNU",
    visibility: "public",
    role: "단독 수행 (연구실 선배 자문)",
    tags: ["Landsat 8 OLI", "PyTorch", "U-Net", "Semi-supervised"],
    headline: "CFMask 대비 Recall +3.68%p, F1 +1.83%p",
    proves: "정답이 없으면 검증 데이터를 직접 만들고, 채널 수 대신 물리적으로 맞는 feature로 기준선을 넘었습니다.",
    lead: "정답 라벨이 거의 없는 문제에서, 채널을 늘리는 대신 물리적으로 맞는 4개를 골라 운영 알고리즘(CFMask)을 넘었습니다. 기대했던 방법이 안 됐을 때는 원인을 밝혀 다음 설계 조건으로 남겼습니다.",
    context:
      "위성 영상에서 구름 마스크의 품질은 후속 분석의 품질을 결정합니다. Landsat의 규칙 기반 마스크 CFMask는 눈·얼음 지역에서 유독 정확도가 낮고(Foga et al., 2017), 남극은 픽셀 단위 정답 라벨이 거의 없습니다 — 기존 검증 데이터셋에서 극지 scene은 48개 중 2~4개뿐입니다.",
    goal: "CFMask의 noisy label만으로 남극 구름 마스크를 개선할 수 있는지, 어떤 스펙트럼 feature가 유효한지, 정답이 부족할 때 self-training이 실제로 도움이 되는지 검증합니다.",
    roleDetail:
      "단독 수행. 논문 23편 검토부터 데이터셋 구성, 검증용 픽셀 라벨링, U-Net·self-training 구현, 실험 설계와 발표까지 4개월 안에 혼자 완주했습니다.",
    decisions: [
      { title: "Self-training 채택", body: "정답 부족 + noisy label 활용 가능 조건에 맞는 방법 (Nambiar et al., 2022 참고)." },
      {
        title: "검증 데이터는 직접 만듦",
        body: "Weddell Sea 37 scene 중 8 scene을 오픈소스 도구 napari로 픽셀 단위 라벨링. 불명확한 영역은 라벨링하지 않고, 수동 라벨 비율 30% 이상 패치만 평가에 사용.",
      },
      {
        title: "밴드 선택은 PCA로",
        body: "Band 6·7·9에 영향받는 주성분이 구름을 잘 구분하는 것을 확인해 SWIR·Cirrus 중심 4채널 구성(EXP 3)을 추가.",
      },
      {
        title: "평가 지표는 mIoU",
        body: "cloud/no-cloud 불균형을 고려해 accuracy 대신 사용. 검증셋은 gradient 업데이트에 쓰지 않고 모델 선택에만 사용.",
      },
    ],
    execution: [
      "2020년 1–4월, 10–12월 Weddell Sea 37 scene → 258×258 패치. train 29 / validation 8, 인접 위치가 양쪽에 섞이지 않도록 scene 단위 분할",
      "U-Net(Conv-BN-Dropout 인코더, skip connection 디코더)",
      "학습 데이터를 A–D 25%씩 나눠 stage마다 범위 확장(1.9M → 7.8M → 17.5M → 31.1M 픽셀). 이전 stage best 모델의 confidence ≥ 0.65 픽셀만 pseudo label로 채택",
      "입력 조합 5종 실험 (Band 2–7+NDSI / +NDWI / +PC1–3 / Band 2–7,9+NDSI / Band 6,7,9+NDSI)",
    ],
    validation: [
      "수동 라벨 검증셋 8 scene, cloud 클래스 기준 OA·Precision·Recall·F1과 mIoU",
      "각 stage의 best 모델은 검증셋 mIoU로 선택. 검증셋은 학습에 미사용",
    ],
    results: [
      {
        title: "EXP 3 (Band 6, 7, 9, NDSI)",
        body: "OA 88.4%, mIoU 0.778. CFMask 대비 Recall +3.68%p · F1 +1.83%p · OA +1.91%p. 5개 입력 조합 중 CFMask보다 나은 것은 EXP 3 하나뿐이었습니다.",
      },
      {
        title: "해석",
        body: "SWIR(Band 6·7)과 Cirrus(Band 9)가 눈·구름 구분에 가장 유효했고, 가시·NIR 채널을 많이 넣은 조합은 오히려 성능을 떨어뜨렸습니다. 채널 수보다 물리적으로 유효한 feature 선택이 중요합니다.",
      },
    ],
    tables: [
      {
        title: "수동 라벨 검증셋 8 scene, cloud 클래스 기준",
        data: {
          head: ["모델 (입력 채널)", "OA", "Prec.", "Recall", "F1"],
          rows: [
            ["CFMask (기준선)", "0.862", "0.942", "0.835", "0.885"],
            ["EXP 1 · B2–7, NDSI, NDWI", "0.817", "0.907", "0.796", "0.848"],
            ["EXP 2 · B2–7, 9, NDSI", "0.839", "0.909", "0.832", "0.869"],
            ["EXP 3 · B6, 7, 9, NDSI", "0.884", "0.938", "0.872", "0.904"],
          ],
          highlightRow: 3,
          numericFrom: 1,
        },
      },
      {
        title: "입력 조합 5종 · best stage (검증셋 mIoU 기준)",
        note: "CFMask는 같은 검증셋에서 OA 86.2%. 5개 중 4개 실험에서 Stage 0 또는 1이 best.",
        data: {
          head: ["입력 채널", "Best stage", "OA", "mIoU"],
          rows: [
            ["B2–7, NDSI", "0", "53.6%", "0.349"],
            ["B2–7, NDSI, NDWI", "3", "81.7%", "0.682"],
            ["B2–7, NDSI, PC1–3", "0", "77.2%", "0.474"],
            ["B6, 7, 9, NDSI", "0", "88.4%", "0.778"],
            ["B2–7, 9, NDSI", "1", "83.9%", "0.712"],
          ],
          highlightRow: 3,
          numericFrom: 1,
        },
      },
    ],
    figures: [
      {
        caption: "맑은 하늘(SKC) scene에서 CFMask가 과대탐지한 영역을 EXP 3이 줄인 사례. LC08_L1GT_160109_20201126.",
        items: [
          { src: "/images/p25_falsecolor.jpg", alt: "False color 위성 영상", label: "False color" },
          { src: "/images/p25_cfmask.jpg", alt: "CFMask 구름 마스크 결과", label: "CFMask" },
          { src: "/images/p25_exp3.jpg", alt: "EXP 3 모델 구름 마스크 결과", label: "EXP 3 (본 연구)" },
        ],
      },
      {
        caption: "같은 scene에서 Stage 3이 Stage 0보다 구름을 놓치는 사례. pseudo label 누적 후 성능이 떨어진 근거.",
        items: [
          { src: "/images/p31_false.jpg", alt: "False color 위성 영상", label: "False color" },
          { src: "/images/p31_s0.jpg", alt: "EXP 3 Stage 0 예측", label: "EXP 3 · Stage 0" },
          { src: "/images/p31_s3.jpg", alt: "EXP 3 Stage 3 예측", label: "EXP 3 · Stage 3" },
        ],
      },
    ],
    failure: [
      "무엇이 달랐나 — 설계 의도는 Stage 3에서 최고 성능이 나오는 것이었지만, 5개 중 4개 실험에서 Stage 0 또는 1이 best였고 이후 stage에서 mIoU가 떨어졌습니다.",
      "어떻게 확인했나 — 좋은 결과만 고르지 않고 5개 실험 전부의 stage별 mIoU를 표로 정리하고, 같은 scene의 Stage 0 / Stage 3 예측을 나란히 놓아 성능 저하가 실제 탐지 누락으로 나타나는지 확인했습니다.",
      "원인을 어떻게 판단했나 — pseudo label 오류가 stage마다 누적되는 확증편향(confirmation bias)으로 판단했고, 격자무늬 artifact는 패치 경계 예측이 stitching에서 해소되지 않은 것으로 추정했습니다.",
      "어떻게 남겼나 — 원인과 대응(confidence 임계값 상향, supervised baseline 우선)을 발표에 한계와 다음 과제로 명시했습니다.",
    ],
    learning: [
      "이 실험에서 배운 것은 방법론보다 학습 데이터의 품질이 먼저라는 점입니다. 다음 실험에서는 신뢰할 수 있는 정답 기반의 supervised baseline을 먼저 확보한 뒤 semi-supervised를 보조로 쓸 계획이며, confidence 임계값 상향(0.95), SCSI 등 feature 추가, 다른 극지 영역·계절 검증을 다음 과제로 정리했습니다.",
    ],
    limits: "독립 test set 없이 수동 검증셋으로만 평가 · Weddell Sea, 2020년에 한정 · 3-class(cloud/shadow/snow) 확장은 라벨만 준비",
    stack: ["Python", "PyTorch", "rasterio", "Zarr", "napari", "Landsat 8 OLI"],
    links: [{ label: "github.com/dev-pyun/CMA-project", href: "https://github.com/dev-pyun/CMA-project" }],
    featured: true,
  },
  {
    slug: "west-coast-air-sea-temperature",
    problem: "해기차가 구름 발생을 얼마나 설명하는지 위성 관측으로 정량화",
    title: "서해안 해기차–구름 상관 분석",
    period: "2025.10 – 12",
    org: "개인연구 · 위성기상기후학 (A+)",
    visibility: "public",
    role: "단독 · 3종 위성·재분석 자료 정합, 통계 분석",
    tags: ["GK-2A", "GHRSST", "ERA5", "xarray"],
    headline: "1,083시각 분석, 해기차는 “필요조건”으로 결론",
    proves: "결과가 약해도(상관 0.16) 데이터를 왜곡하지 않고 “필요조건”으로 정직하게 해석했습니다.",
    lead: "결과가 약해도 데이터를 왜곡하지 않고, 왜 약한지를 설명해 A+를 받았습니다.",
    context: "겨울철 서해안 강설의 지표로 쓰이는 해기차(SST − 상층 기온)가 실제 구름 발생을 얼마나 설명하는지 위성 관측으로 정량화합니다.",
    goal: "겨울철 서해상 해기차와 위성 관측 운량 사이의 상관관계를 정량적으로 분석합니다.",
    roleDetail: "단독 수행. 자료 선정, 격자 정합, 통계 분석, 발표까지.",
    decisions: [
      { title: "SST 자료 선택", body: "정지궤도 위성 SST 대신 구름 오염이 적은 야간 GHRSST L4 사용." },
      { title: "품질 플래그 적용", body: "GK-2A 운량은 품질 플래그(CA_DQF, CT_DQF)로 유효 픽셀만 집계." },
      { title: "한계를 명시", body: "하층운 변수(CLL)는 결측이 많아 제외하고 한계로 명시." },
    ],
    execution: [
      "GK-2A CLA · GHRSST · ERA5(850/700hPa)를 0.25° 격자로 정합(bilinear)",
      "2021–2025 겨울 1,083시각 Spearman 상관, 일별 상관, CFAD 분석",
    ],
    validation: ["전체 상관과 일별 상관 분포, cloud fraction 분포(이봉 구조)로 해석 검증"],
    results: [
      {
        title: "결과",
        body: "전체 상관 0.16 / 0.04로 약했지만 일별로는 −0.6~0.8, |r|>0.4인 날 26.7% / 17.6%. 운량이 0과 1에 몰린 이봉 분포를 근거로 해기차는 구름 발생의 필요조건이지 충분조건은 아니다로 결론.",
      },
    ],
    figures: [
      {
        caption: "ΔT vs cloud fraction 산점도(850/700hPa)와 일별 상관계수 분포.",
        items: [
          { src: "/images/astd_scatter.jpg", alt: "해기차와 운량 산점도", label: "산점도" },
          { src: "/images/astd_hist.png", alt: "일별 상관계수 히스토그램", label: "일별 상관계수 분포" },
        ],
      },
    ],
    learning: ["단일 지표로 설명이 안 될 때는 지표를 버리지 않고 조건부 관계로 재해석하는 것이 다음 분석의 출발점이 됩니다."],
    stack: ["Python", "xarray", "GK-2A", "GHRSST", "ERA5"],
    links: [],
    featured: false,
  },
  {
    slug: "extreme-snowfall-2024",
    problem: "해기차 모델로 설명되지 않는 수도권 집중·지속 강설",
    title: "2024.11 수도권 극한강설 원인 분석",
    period: "2025.09 – 12",
    org: "3인 팀 · 영어 발표",
    visibility: "public",
    role: "중간발표 미해결 질문 3건의 종관 분석 담당",
    tags: ["종관기상", "팀 프로젝트", "영어 발표"],
    headline: "5개 팀 중 1위",
    proves: "팀이 답하지 못한 질문 3개를 맡아 5팀 중 1위 발표를 만들었습니다.",
    lead: "팀이 답하지 못한 질문 3개를 맡아 5팀 중 1위 발표를 만들었습니다.",
    context: "해기차 기반 서해안 강설 모델로는 수도권에 집중·지속된 기록적 11월 폭설을 설명할 수 없었습니다.",
    goal: "발생·집중·지속·종료의 분석 틀로 강설 메커니즘을 설명합니다.",
    roleDetail:
      "중간발표에서 답하지 못한 3개 질문의 종관 분석 — 남중국 고기압의 이상 형태(상층 한기 침강), 절리저기압의 경압→순압 전이로 인한 정체와 제트 블로킹(AO 음의 지수), 28일 강설 종료 원인 3가지. 분석 틀과 영어 대본 조율.",
    decisions: [
      {
        title: "중간발표 지적 3건을 그대로 분석 과제로",
        body: "“상층 블로킹 때문”이라고만 답했던 부분을 물리적 발생 메커니즘 수준으로 다시 세움. 답하지 못한 질문을 넘기지 않고 남은 기간의 분석 범위로 확정.",
      },
      {
        title: "정체를 시간축으로 보기",
        body: "정체는 한 시각의 일기도로는 증명되지 않는다고 보고, 40°N·90–160°E 단면의 Hovmöller를 26·27·28일 3장으로 그려 같은 축에서 비교.",
      },
      {
        title: "구조 판정은 상·하층 중심의 상대 위치로",
        body: "경압/순압을 서술이 아니라 500hPa 저기압과 지상 저기압 중심의 위도 차로 판정. 두 날짜의 일기도에 두 중심을 같이 표시해 전이를 보이게 함.",
      },
      {
        title: "종료도 원인별로 나눠 검증",
        body: "강설이 그친 이유를 하나로 단정하지 않고 트로프 동진 · 700hPa 해기차 감소 · 풍향 변화 3개로 나눠 각각 자료를 붙임.",
      },
    ],
    execution: [
      "300hPa V-wind Hovmöller(40°N, 90–160°E)를 11.26 / 11.27 / 11.28 3일치로 작성 — 27일만 같은 경도에 머무는 정체 패턴 확인",
      "500hPa 일기도에서 지상 저기압과 500hPa 저기압 중심의 위도를 비교(26일 서편 → 27일 수직 정렬)",
      "300hPa 지오포텐셜·바람장으로 제트 사행과 저기압 동편 남풍 확인, AO 지수 26–28일 음의 값 대조",
      "850hPa 연직속도와 지상 기압을 겹쳐 상층 한기 침강 영역과 고기압 확장 영역의 일치 확인",
      "종료 국면은 Hovmöller 트로프 동진, 700hPa 해기차, radar CMAX·1000hPa 바람장 풍향 변화로 교차 확인",
    ],
    validation: [
      "정체 주장은 단일 시각이 아니라 3일 연속 Hovmöller로 확인 — 26·28일과 대비해 27일만 정체",
      "경압→순압 전이는 두 날짜 일기도의 상·하층 중심 위도로 판정",
      "블로킹 유지는 제트 사행(300hPa)과 AO 음의 지수, 두 경로로 교차 확인",
    ],
    results: [
      { title: "결과", body: "5개 팀 중 1위. 담당 교수로부터 “대학원생 수준”이라는 평가." },
      {
        title: "배나온 고기압의 발생 메커니즘",
        body: "상층 절리저기압 후면에서 찬 공기가 침강해 지상 공기 밀도를 높이고, 그 결과 지상 기압이 강제로 상승해 대륙고기압이 서해상으로 불룩하게 확장한 것으로 설명. 850hPa 연직속도의 침강 영역과 지상 기압 상승 영역이 일치했습니다.",
      },
      {
        title: "정체의 원인 — 경압에서 순압으로",
        body: "26일에는 500hPa 저기압이 지상 저기압보다 서편에 있어 경압 구조로 저기압이 발달했고, 27일에는 상·하층 중심이 수직으로 정렬된 순압 구조로 바뀌었습니다. 이동성을 잃은 시스템이 제자리에서 회전하며 눈구름을 계속 공급했습니다.",
      },
      {
        title: "블로킹이 유지된 이유",
        body: "300hPa 제트가 큰 진폭으로 사행하며 저기압을 가뒀고, 저기압 동편의 강한 남풍이 동진을 막았습니다. 26–28일 AO 지수가 일관되게 음의 값이었던 것과도 일치합니다.",
      },
      {
        title: "28일 강설 종료",
        body: "정체했던 트로프가 28일 동해상으로 동진하고, 700hPa 서해 해기차가 감소했으며, 풍향이 서풍에서 북풍으로 시계방향으로 바뀌었습니다. 850hPa 해기차와 풍속은 그대로였는데도 강설이 그친 이유를 이 3가지로 설명했습니다. 이를 기상청 수도권 강설 가이던스에 대입하면 “1cm 미만 또는 무강수”로, 실제 종료와 일치했습니다.",
      },
    ],
    figures: [
      {
        caption:
          "300hPa V-wind Hovmöller(40°N, 90–160°E). 26일은 기울어져 동진하던 파동이 27일에는 같은 경도에 머물고(정체), 28일 다시 동쪽으로 기울며 풀립니다. 정체–해소를 한 축에서 보이려고 3일치를 같은 좌표로 그렸습니다.",
        items: [
          { src: "/images/snow_hov_1126.jpg", alt: "2024년 11월 26일 300hPa V-wind Hovmöller 다이어그램", label: "11.26" },
          { src: "/images/snow_hov_1127.jpg", alt: "2024년 11월 27일 300hPa V-wind Hovmöller 다이어그램 — 정체", label: "11.27 · 정체" },
          { src: "/images/snow_hov_1128.jpg", alt: "2024년 11월 28일 300hPa V-wind Hovmöller 다이어그램 — 동진", label: "11.28 · 동진" },
        ],
      },
      {
        caption:
          "경압 → 순압 전이. 26일에는 500hPa 저기압이 지상 저기압보다 서편에 있었고(경압), 27일에는 상·하층 중심이 수직으로 정렬했습니다(순압). 기상청 발행 500hPa 일기도(AUAS50).",
        items: [
          { src: "/images/snow_500_1126.png", alt: "2024년 11월 26일 12UTC 기상청 500hPa 일기도", label: "11.26 12UTC · 경압" },
          { src: "/images/snow_500_1127.png", alt: "2024년 11월 27일 00UTC 기상청 500hPa 일기도", label: "11.27 00UTC · 순압" },
        ],
      },
      {
        caption:
          "블로킹과 종료의 근거. 300hPa 제트가 큰 진폭으로 사행하며 저기압 동편에 남풍의 “벽”을 만들었고(좌), 700hPa 서해 해기차 감소는 28일 강설 종료의 두 번째 원인입니다(우).",
        items: [
          { src: "/images/snow_jet300.jpg", alt: "2024년 11월 27일 00UTC 300hPa 동서바람과 지오포텐셜 고도", label: "300hPa 제트 · 11.27" },
          { src: "/images/snow_astd700.jpg", alt: "700hPa 해기차 분포", label: "700hPa 해기차" },
        ],
      },
      {
        caption: "2024.11.26 18UTC 위성영상 — 기압골 영향의 곡률을 보이는 구름대.",
        items: [{ src: "/images/snow_sat.jpg", alt: "2024년 11월 26일 위성영상" }],
      },
    ],
    learning: [
      "“상층 블로킹 때문”처럼 현상 이름을 대는 것과 메커니즘을 보이는 것은 다릅니다. 지적받은 3건을 그대로 분석 과제로 삼아, 각 주장에 자료를 하나씩 붙이는 방식으로 다시 세웠습니다.",
      "정체처럼 시간에 걸친 주장은 한 시각의 그림으로 증명되지 않습니다. 같은 좌표의 Hovmöller 3장을 나란히 놓는 것이 “움직이지 않았다”를 보이는 가장 짧은 길이었습니다.",
      "종료 원인을 하나로 단정하지 않고 3가지로 나눠 각각 자료를 붙인 것이, 850hPa 해기차가 그대로인데 왜 그쳤냐는 반문에 답할 수 있게 해줬습니다.",
    ],
    stack: ["ERA5", "Hovmöller", "종관 분석"],
    links: [],
    featured: false,
  },
  {
    slug: "wiki-racing",
    problem: "링크 탐색 경로의 분기·되돌리기 상태 관리",
    title: "위키레이싱 게임 사이트",
    period: "2025.11 – 12",
    org: "네이버 커넥트재단 연계 수업 (A+)",
    visibility: "public",
    role: "단독 · React·TS·Zustand 프론트엔드",
    tags: ["React", "TypeScript", "Zustand"],
    headline: "분기 경로 트리 시각화, 리더보드 구현",
    proves: "AI 결과를 사용자가 쓸 수 있는 화면까지 직접 만들 수 있습니다.",
    lead: "AI 결과를 사용자가 쓸 수 있는 화면까지 만들 수 있습니다.",
    context: "링크 클릭만으로 목표 문서에 도달하는 게임. 되돌리기·분기가 잦은 탐색 경로를 어떻게 저장하고 보여줄지가 핵심 문제였습니다.",
    goal: "탐색 경로를 분기 구조로 저장하고 시각화하며, 리더보드 중복 기록을 방지합니다.",
    roleDetail: "단독 구현.",
    decisions: [{ title: "branches / pathRefs 구조", body: "경로를 Git 그래프처럼 분기로 관리해 되돌리기와 재탐색을 자연스럽게 표현." }],
    execution: ["React · TypeScript · Zustand 상태 설계", "분기 경로 트리 시각화, 리더보드 중복 방지"],
    validation: [],
    results: [{ title: "결과", body: "수업 A+. 저장소 공개." }],
    learning: [],
    stack: ["React", "TypeScript", "Zustand"],
    links: [{ label: "github.com/dev-pyun/Wiki_Racing-dev-pyun", href: "https://github.com/dev-pyun/Wiki_Racing-dev-pyun" }],
    featured: false,
  },
];

export const otherExperiences = [
  "예비창업패키지 ‘점주로’ (2026.01–02, 팀) — 구조·인증·상태관리 기획 주도, 구현은 PR 기반 공동 작업. 사업계획서·MVP 제출, 최종 미선정. 비공개 저장소.",
  "영화 추천 챌린지 (데이터마이닝 수업) — 협업 필터링 AUC 0.952에서 TruncatedSVD(rank 150) + 6 seed 앙상블로 0.996.",
];
