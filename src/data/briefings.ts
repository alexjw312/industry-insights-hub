import type { Briefing, CategoryMeta, Localized, TimeWindow } from "@/types";
import { L } from "@/lib/localized";

export const CATEGORIES: CategoryMeta[] = [
  {
    slug: "ai",
    name: L("AI", "인공지능"),
    description: L(
      "Foundation models, agents, and AI policy moves.",
      "파운데이션 모델, 에이전트, 그리고 AI 정책 동향.",
    ),
    icon: "Sparkles",
    accent: "primary",
    colorToken: "category-ai",
  },
  {
    slug: "semiconductors",
    name: L("Semiconductors", "반도체"),
    description: L(
      "Chips, fabs, EUV, and the silicon supply chain.",
      "칩, 파운드리, EUV, 그리고 실리콘 공급망.",
    ),
    icon: "Cpu",
    accent: "accent",
    colorToken: "category-semi",
  },
  {
    slug: "stocks",
    name: L("Stocks & Investing", "주식 & 투자"),
    description: L(
      "Markets, earnings, and macro that move portfolios.",
      "시장, 실적, 그리고 포트폴리오를 움직이는 매크로.",
    ),
    icon: "TrendingUp",
    accent: "primary",
    colorToken: "category-stocks",
  },
  {
    slug: "automotive",
    name: L("Automotive / EV", "자동차 / 전기차"),
    description: L(
      "EVs, autonomy, and the future of mobility.",
      "전기차, 자율주행, 그리고 모빌리티의 미래.",
    ),
    icon: "Car",
    accent: "accent",
    colorToken: "category-auto",
  },
  {
    slug: "healthcare",
    name: L("Healthcare", "헬스케어"),
    description: L(
      "Biotech, drug approvals, and health systems.",
      "바이오테크, 신약 승인, 그리고 의료 시스템.",
    ),
    icon: "Stethoscope",
    accent: "primary",
    colorToken: "category-health",
  },
  {
    slug: "energy",
    name: L("Energy", "에너지"),
    description: L(
      "Oil, renewables, grids, and the energy transition.",
      "석유, 재생에너지, 전력망, 그리고 에너지 전환.",
    ),
    icon: "Zap",
    accent: "accent",
    colorToken: "category-energy",
  },
];

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

const makeQuiz = (
  q: Localized,
  opts: Localized[],
  correct: Localized,
) => ({ question: q, options: opts, correctAnswer: correct });

// ---------------------------------------------------------------------------
// Mock briefings.
// ---------------------------------------------------------------------------

export const BRIEFINGS: Briefing[] = [
  // ============ AI — TODAY ============
  {
    id: "ai-t1",
    category: "ai",
    timeWindow: "today",
    title: L(
      "OpenAI rolls out long-horizon agent mode to enterprise tier",
      "OpenAI, 장시간 작동 '에이전트 모드'를 기업용으로 확대",
    ),
    shortSummary: L(
      "OpenAI expanded its multi-step 'agent mode' to enterprise customers, letting models plan and execute tasks across tools for hours.",
      "OpenAI가 다단계 작업이 가능한 '에이전트 모드'를 기업 고객에게 확대해, 모델이 여러 도구를 넘나들며 몇 시간씩 작업을 계획·실행할 수 있게 했습니다.",
    ),
    longExplanation: L(
      "Agent mode lets a single model break a request like 'plan our quarterly offsite' into many sub-steps — searching the web, drafting docs, calling APIs — and run them autonomously. Today's release moves the feature out of preview and into the enterprise tier with audit logs and per-tool permissions.",
      "에이전트 모드는 '분기 워크숍을 기획해줘' 같은 요청 하나를 웹 검색, 문서 작성, API 호출 등 여러 하위 단계로 쪼개 자율적으로 실행합니다. 오늘 출시로 프리뷰를 졸업해 기업용 등급에 정식 배포되었으며, 감사 로그와 도구별 권한 제어가 함께 제공됩니다.",
    ),
    whyItMatters: L(
      "Agents that work for hours change the unit of automation from a prompt to a project. Knowledge-worker tasks that took half a day can now be triggered with one instruction.",
      "몇 시간 동안 일하는 에이전트는 자동화 단위를 '프롬프트'에서 '프로젝트'로 바꿉니다. 반나절짜리 지식 노동을 명령 한 줄로 시작할 수 있게 됩니다.",
    ),
    backgroundContext: L(
      "Agent frameworks have existed since 2023, but reliability was poor. GPT-class models with native tool-use and longer context windows finally make multi-hour tasks viable.",
      "에이전트 프레임워크는 2023년부터 존재했지만 안정성이 낮았습니다. 도구 사용 기능을 내장하고 컨텍스트 길이를 늘린 GPT급 모델이 등장하면서 비로소 장시간 작업이 가능해졌습니다.",
    ),
    industryImpact: L(
      "Pressure on consulting, BPO, and SaaS tools whose value is workflow orchestration. Expect every major productivity vendor to ship an agent layer within 6 months.",
      "워크플로우 자동화를 가치로 내세우는 컨설팅·BPO·SaaS 업체에 압력이 가해집니다. 주요 생산성 도구는 6개월 안에 에이전트 계층을 출시할 것으로 보입니다.",
    ),
    keyCompanies: ["OpenAI", "Microsoft", "Anthropic", "Google"],
    keywords: ["agents", "tool use", "enterprise AI", "automation"],
    difficulty: "Intermediate",
    readingTime: "4 min",
    sourceName: "OpenAI Blog",
    sourceUrl: "https://openai.com/blog",
    publishedDate: "2026-05-24",
    importanceScore: 0.92,
    quiz: makeQuiz(
      L(
        "What is the main capability that 'agent mode' adds?",
        "'에이전트 모드'가 추가하는 핵심 기능은 무엇입니까?",
      ),
      [
        L("Faster single-prompt responses", "단일 프롬프트에 대한 더 빠른 응답"),
        L("Multi-step autonomous task execution", "다단계 자율 작업 실행"),
        L("Cheaper API pricing", "더 저렴한 API 요금"),
      ],
      L("Multi-step autonomous task execution", "다단계 자율 작업 실행"),
    ),
  },
  {
    id: "ai-t2",
    category: "ai",
    timeWindow: "today",
    title: L(
      "EU AI Act enforcement begins for general-purpose models",
      "EU AI법, 범용 모델 대상 시행 개시",
    ),
    shortSummary: L(
      "Today marks the start of compliance deadlines for foundation model providers operating in the EU, with transparency and copyright duties.",
      "오늘부터 EU에서 활동하는 파운데이션 모델 제공자에게 투명성·저작권 의무 등 준수 시한이 시작됩니다.",
    ),
    longExplanation: L(
      "Providers must now publish a detailed summary of training data, document model capabilities, and respect opt-outs from rights-holders. Systemic-risk models (above a compute threshold) face stricter evaluation requirements.",
      "제공자는 학습 데이터 상세 요약 공개, 모델 성능 문서화, 권리자 옵트아웃 존중 의무를 집니다. 일정 연산량을 넘는 '시스템적 위험' 모델은 더 엄격한 평가를 받아야 합니다.",
    ),
    whyItMatters: L(
      "It's the first major jurisdiction to treat foundation models as a regulated category. Decisions made for the EU often become global defaults.",
      "주요 국가 중 처음으로 파운데이션 모델을 규제 대상으로 명시한 사례입니다. EU 기준은 종종 글로벌 표준이 됩니다.",
    ),
    backgroundContext: L(
      "The AI Act was passed in 2024 with phased deadlines. The general-purpose model chapter is the most contested because it applies to upstream providers, not just app developers.",
      "AI법은 2024년 통과되어 단계적 시한을 두고 있습니다. 범용 모델 조항은 앱 개발자뿐 아니라 상류 제공자에게도 적용되어 가장 큰 논쟁이 됐습니다.",
    ),
    industryImpact: L(
      "Expect new 'EU-compliant' model variants and increased legal headcount at AI labs. Startups may rely on hosted providers to inherit compliance.",
      "'EU 준수 버전' 모델이 새로 등장하고, AI 연구소의 법무 인력이 늘어날 전망입니다. 스타트업은 호스팅 제공자에 의존해 컴플라이언스를 흡수할 가능성이 큽니다.",
    ),
    keyCompanies: ["OpenAI", "Anthropic", "Mistral", "Meta"],
    keywords: ["regulation", "EU AI Act", "compliance", "foundation models"],
    difficulty: "Beginner",
    readingTime: "3 min",
    sourceName: "European Commission",
    sourceUrl: "https://digital-strategy.ec.europa.eu",
    publishedDate: "2026-05-24",
    importanceScore: 0.88,
    quiz: makeQuiz(
      L(
        "Who is primarily targeted by the new EU AI Act deadline?",
        "이번 EU AI법 시한의 주된 대상은 누구입니까?",
      ),
      [
        L("End users of AI apps", "AI 앱의 최종 사용자"),
        L("General-purpose model providers", "범용 모델 제공자"),
        L("Hardware makers", "하드웨어 제조사"),
      ],
      L("General-purpose model providers", "범용 모델 제공자"),
    ),
  },
  {
    id: "ai-t3",
    category: "ai",
    timeWindow: "today",
    title: L(
      "Anthropic raises new round at $200B valuation",
      "Anthropic, 2,000억 달러 기업가치로 신규 라운드 조달",
    ),
    shortSummary: L(
      "Anthropic closed a multi-billion dollar round led by sovereign wealth funds, doubling its valuation in under a year.",
      "Anthropic이 국부펀드 주도로 수십억 달러 규모의 라운드를 마감하며 1년도 안 돼 기업가치를 두 배로 끌어올렸습니다.",
    ),
    longExplanation: L(
      "The round is reportedly led by Middle Eastern sovereign funds with participation from existing cloud partners. Proceeds will fund a new compute cluster and safety research.",
      "이번 라운드는 중동 국부펀드가 주도하고 기존 클라우드 파트너들이 참여한 것으로 알려졌습니다. 자금은 신규 연산 클러스터 구축과 안전성 연구에 쓰입니다.",
    ),
    whyItMatters: L(
      "Capital is concentrating into a small number of frontier labs. The cost of being at the frontier — compute, talent, data — keeps rising faster than revenue.",
      "자본이 소수 프런티어 연구소에 집중되고 있습니다. 연산·인재·데이터 비용은 매출보다 빠르게 오르고 있습니다.",
    ),
    backgroundContext: L(
      "Anthropic's revenue grew from ~$100M ARR in 2023 to multi-billion in 2026, mostly via API and Claude Code. The valuation reflects expected long-term licensing power.",
      "Anthropic의 매출은 2023년 약 1억 달러 ARR에서 2026년 수십억 달러로 성장했으며, 주로 API와 Claude Code가 견인했습니다. 평가가치는 장기 라이선스 파워에 대한 기대를 반영합니다.",
    ),
    industryImpact: L(
      "Pressure on second-tier labs to consolidate. Cloud providers double down on exclusive partnerships to secure model access.",
      "2티어 연구소들은 통합 압력을 받습니다. 클라우드 사업자들은 모델 접근권 확보를 위해 독점 파트너십을 강화하고 있습니다.",
    ),
    keyCompanies: ["Anthropic", "Amazon", "Google", "PIF"],
    keywords: ["funding", "valuation", "frontier labs", "compute"],
    difficulty: "Beginner",
    readingTime: "3 min",
    sourceName: "The Information",
    sourceUrl: "https://www.theinformation.com",
    publishedDate: "2026-05-24",
    importanceScore: 0.81,
    quiz: makeQuiz(
      L(
        "What does Anthropic plan to spend the new capital on primarily?",
        "Anthropic은 신규 자금을 주로 어디에 쓸 계획입니까?",
      ),
      [
        L("Marketing", "마케팅"),
        L("Compute and safety research", "연산과 안전성 연구"),
        L("Acquisitions", "인수"),
      ],
      L("Compute and safety research", "연산과 안전성 연구"),
    ),
  },

  // ============ AI — WEEK ============
  {
    id: "ai-w1",
    category: "ai",
    timeWindow: "week",
    title: L(
      "Open-source 'Llama 5' matches GPT-class reasoning on key benchmarks",
      "오픈소스 '라마 5', 주요 벤치마크에서 GPT급 추론 성능 달성",
    ),
    shortSummary: L(
      "Meta released Llama 5 with mixture-of-experts and improved reasoning, narrowing the gap to closed frontier models.",
      "메타가 MoE 구조와 개선된 추론 능력을 갖춘 라마 5를 공개해 폐쇄형 프런티어 모델과의 격차를 좁혔습니다.",
    ),
    longExplanation: L(
      "Llama 5 uses a sparse MoE architecture and a new reasoning-focused training recipe. On math and coding benchmarks it lands within a few points of the leading closed model, while remaining freely available.",
      "라마 5는 희소 MoE 구조와 추론 중심의 새 학습 레시피를 사용합니다. 수학·코딩 벤치마크에서 선두 폐쇄형 모델과 몇 점 차이까지 따라붙으면서도 무료로 제공됩니다.",
    ),
    whyItMatters: L(
      "Strong open weights cap how much closed labs can charge for similar capability. The 'open vs closed' gap is the single biggest variable in AI economics.",
      "강력한 오픈 가중치는 폐쇄형 연구소가 비슷한 성능에 매길 수 있는 가격에 상한을 둡니다. '오픈 대 폐쇄' 격차는 AI 경제의 가장 큰 변수입니다.",
    ),
    backgroundContext: L(
      "Open weights lagged closed models by ~12 months in 2024. Each Llama release has narrowed that gap, and Llama 5 may be the first where the lag is effectively zero on common tasks.",
      "2024년만 해도 오픈 가중치는 폐쇄형 모델에 약 12개월 뒤처졌습니다. 라마 시리즈가 매번 격차를 줄였고, 라마 5는 일반 작업에서 사실상 격차가 없는 첫 모델일 수 있습니다.",
    ),
    industryImpact: L(
      "Cloud providers win — they sell inference for any model. Pure-play model vendors face margin pressure on commodity workloads.",
      "클라우드 사업자는 어떤 모델이든 추론을 판매하므로 유리합니다. 순수 모델 판매사는 일반 워크로드에서 마진 압박을 받습니다.",
    ),
    keyCompanies: ["Meta", "Hugging Face", "Together AI", "AWS"],
    keywords: ["open source", "Llama", "MoE", "benchmarks"],
    difficulty: "Intermediate",
    readingTime: "5 min",
    sourceName: "Meta AI",
    sourceUrl: "https://ai.meta.com",
    publishedDate: "2026-05-20",
    importanceScore: 0.86,
    quiz: makeQuiz(
      L(
        "What architecture does Llama 5 use to scale efficiently?",
        "라마 5가 효율적으로 확장하기 위해 사용하는 아키텍처는 무엇입니까?",
      ),
      [
        L("Dense transformer", "조밀(dense) 트랜스포머"),
        L("Mixture of Experts", "전문가 혼합 (MoE)"),
        L("Recurrent network", "순환 신경망"),
      ],
      L("Mixture of Experts", "전문가 혼합 (MoE)"),
    ),
  },
  {
    id: "ai-w2",
    category: "ai",
    timeWindow: "week",
    title: L(
      "AI coding assistants now write 40% of code at top tech firms",
      "AI 코딩 어시스턴트, 주요 빅테크에서 코드의 40% 작성",
    ),
    shortSummary: L(
      "Internal surveys at major tech companies show AI-generated code crossing the 40% threshold, up from ~25% a year ago.",
      "주요 빅테크 내부 조사에서 AI가 작성한 코드 비중이 1년 전 약 25%에서 40%를 넘어선 것으로 나타났습니다.",
    ),
    longExplanation: L(
      "The share rises with seniority — senior engineers use AI for boilerplate, tests, and refactors while reviewing the output. Junior hiring is slowing as a result.",
      "AI 사용 비율은 연차가 올라갈수록 높아집니다. 시니어 엔지니어는 보일러플레이트·테스트·리팩터링에 AI를 쓰고 결과물을 검토하는 방식입니다. 그 영향으로 주니어 채용은 둔화되고 있습니다.",
    ),
    whyItMatters: L(
      "It's the first concrete signal that AI is reshaping a high-paid white-collar profession at scale.",
      "AI가 고임금 화이트칼라 직군을 본격적으로 재편하고 있다는 첫 구체적 신호입니다.",
    ),
    backgroundContext: L(
      "Copilot launched in 2021; Cursor and Claude Code accelerated adoption from 2023. The 'review, don't write' workflow became the new default.",
      "Copilot은 2021년에 출시됐고, 2023년부터 Cursor와 Claude Code가 확산을 가속했습니다. '직접 쓰지 말고 검토하라'는 워크플로우가 새로운 기본값이 됐습니다.",
    ),
    industryImpact: L(
      "Slower entry-level hiring, higher leverage per senior engineer, and a premium on code-review skills.",
      "신입 채용은 줄고, 시니어 1인당 레버리지는 커지며, 코드 리뷰 역량의 가치가 더 높아집니다.",
    ),
    keyCompanies: ["GitHub", "Cursor", "Anthropic", "Google"],
    keywords: ["dev tools", "Copilot", "productivity", "labor"],
    difficulty: "Beginner",
    readingTime: "4 min",
    sourceName: "Stack Overflow Survey",
    sourceUrl: "https://survey.stackoverflow.co",
    publishedDate: "2026-05-19",
    importanceScore: 0.78,
    quiz: makeQuiz(
      L(
        "Which group reportedly uses AI coding tools most heavily?",
        "AI 코딩 도구를 가장 많이 쓰는 집단은 어느 쪽이라고 보고됐습니까?",
      ),
      [
        L("Junior engineers", "주니어 엔지니어"),
        L("Senior engineers reviewing output", "결과물을 검토하는 시니어 엔지니어"),
        L("QA testers", "QA 테스터"),
      ],
      L("Senior engineers reviewing output", "결과물을 검토하는 시니어 엔지니어"),
    ),
  },
  {
    id: "ai-w3",
    category: "ai",
    timeWindow: "week",
    title: L(
      "Google DeepMind unveils protein-design model for novel antibodies",
      "구글 딥마인드, 신규 항체를 설계하는 단백질 모델 공개",
    ),
    shortSummary: L(
      "DeepMind's new model designs antibodies against targets that previously had no good binder, with wet-lab confirmation.",
      "딥마인드의 새 모델이 기존에 적절한 결합체가 없던 표적에 대해 항체를 설계하고, 실험실 검증까지 통과했습니다.",
    ),
    longExplanation: L(
      "Building on AlphaFold, the new model generates candidate antibody sequences that bind to specified epitopes. Early collaborations with pharma have validated several leads in vitro.",
      "AlphaFold를 기반으로, 새 모델은 지정된 에피토프에 결합하는 항체 후보 서열을 생성합니다. 제약사와의 초기 협업에서 여러 후보가 시험관 내에서 검증됐습니다.",
    ),
    whyItMatters: L(
      "Antibody discovery is one of the slowest and most expensive parts of biotech. AI-generated candidates could compress timelines from years to months.",
      "항체 발굴은 바이오테크에서 가장 느리고 비싼 단계 중 하나입니다. AI 후보가 일정을 수년에서 수개월로 단축할 수 있습니다.",
    ),
    backgroundContext: L(
      "AlphaFold solved structure prediction; the next frontier is design. Several startups (Generate, Isomorphic) target the same space.",
      "AlphaFold는 구조 예측을 풀었고, 다음 프런티어는 '설계'입니다. Generate, Isomorphic 등 여러 스타트업이 같은 영역을 노립니다.",
    ),
    industryImpact: L(
      "Pharma R&D pipelines re-architect around computational design. Smaller biotechs gain leverage against incumbents with large wet labs.",
      "제약 R&D 파이프라인이 계산 설계 중심으로 재편됩니다. 소규모 바이오테크가 대형 실험실 보유 기업에 대해 레버리지를 얻습니다.",
    ),
    keyCompanies: ["Google DeepMind", "Isomorphic Labs", "Generate Biomedicines"],
    keywords: ["AlphaFold", "biotech", "antibodies", "protein design"],
    difficulty: "Advanced",
    readingTime: "6 min",
    sourceName: "Nature",
    sourceUrl: "https://www.nature.com",
    publishedDate: "2026-05-18",
    importanceScore: 0.84,
    quiz: makeQuiz(
      L(
        "What does the new DeepMind model design?",
        "이번 딥마인드 모델이 설계하는 것은 무엇입니까?",
      ),
      [
        L("Small molecule drugs", "저분자 의약품"),
        L("Antibody sequences", "항체 서열"),
        L("Vaccines", "백신"),
      ],
      L("Antibody sequences", "항체 서열"),
    ),
  },

  // ============ AI — MONTH ============
  {
    id: "ai-m1",
    category: "ai",
    timeWindow: "month",
    title: L(
      "Hyperscaler AI capex hits record $400B annual run rate",
      "하이퍼스케일러 AI 자본지출, 연간 4,000억 달러 사상 최고",
    ),
    shortSummary: L(
      "Combined AI infrastructure spending by Microsoft, Google, Meta, and Amazon hit a $400B annualized pace this quarter.",
      "마이크로소프트·구글·메타·아마존의 AI 인프라 지출 합계가 이번 분기 연환산 4,000억 달러에 도달했습니다.",
    ),
    longExplanation: L(
      "Capex is dominated by data center construction, custom AI chips, and grid upgrades. Investors are increasingly asking whether returns will justify the spend.",
      "지출의 대부분은 데이터센터 건설, 자체 AI 칩, 전력망 보강에 쓰입니다. 투자자들은 이 정도 지출이 회수될 수 있을지 의문을 키우고 있습니다.",
    ),
    whyItMatters: L(
      "This is the largest private infrastructure build-out in modern history. Whether it pays back will define the next decade of tech equities.",
      "현대 역사상 최대 규모의 민간 인프라 구축입니다. 회수 여부가 향후 10년 테크 주식의 방향을 결정합니다.",
    ),
    backgroundContext: L(
      "Total hyperscaler capex was ~$150B in 2022. The ChatGPT moment triggered a step change; capex has roughly tripled since.",
      "2022년 하이퍼스케일러 총 자본지출은 약 1,500억 달러였습니다. ChatGPT 등장 이후 단계적 증가가 일어나 약 3배로 늘었습니다.",
    ),
    industryImpact: L(
      "Big winners: Nvidia, power utilities, HVAC, fiber. Risk: revenue from AI products has to grow into a depreciating asset base.",
      "최대 수혜자는 엔비디아, 전력 유틸리티, HVAC, 광섬유 업체입니다. 리스크는 AI 제품 매출이 감가상각되는 자산 베이스를 따라 성장해야 한다는 점입니다.",
    ),
    keyCompanies: ["Microsoft", "Google", "Meta", "Amazon", "Nvidia"],
    keywords: ["capex", "data centers", "infrastructure", "hyperscalers"],
    difficulty: "Intermediate",
    readingTime: "6 min",
    sourceName: "Bloomberg",
    sourceUrl: "https://www.bloomberg.com",
    publishedDate: "2026-05-08",
    importanceScore: 0.9,
    quiz: makeQuiz(
      L(
        "Which of these is NOT a hyperscaler driving AI capex?",
        "다음 중 AI 자본지출을 견인하는 하이퍼스케일러가 아닌 곳은?",
      ),
      [
        L("Microsoft", "마이크로소프트"),
        L("Oracle", "오라클"),
        L("Meta", "메타"),
      ],
      L("Oracle", "오라클"),
    ),
  },
  {
    id: "ai-m2",
    category: "ai",
    timeWindow: "month",
    title: L(
      "First multimodal world-model robot demos warehouse work end-to-end",
      "최초의 멀티모달 월드모델 로봇, 물류창고 업무를 엔드투엔드로 시연",
    ),
    shortSummary: L(
      "A startup showed a humanoid robot completing a full picking shift in a real warehouse using a single multimodal model.",
      "한 스타트업이 단일 멀티모달 모델만으로 실제 창고에서 풀 교대 픽킹 작업을 수행하는 휴머노이드 로봇을 공개했습니다.",
    ),
    longExplanation: L(
      "Instead of stitched policies, the robot uses one large vision-language-action model. It generalizes to objects it hasn't seen before and handles errors without scripted recovery.",
      "여러 개의 정책을 이어붙이는 대신, 로봇은 하나의 대규모 비전-언어-행동(VLA) 모델을 사용합니다. 처음 보는 물체에도 일반화하고, 별도의 스크립트 없이 오류를 처리합니다.",
    ),
    whyItMatters: L(
      "Physical labor is the largest remaining market that AI hasn't meaningfully touched. End-to-end models suggest the breakthrough is closer than expected.",
      "물리적 노동은 AI가 본격적으로 다루지 못한 가장 큰 시장입니다. 엔드투엔드 모델은 돌파구가 예상보다 가까이 있음을 시사합니다.",
    ),
    backgroundContext: L(
      "Robotics historically used many narrow models. Transformer-based 'world models' trained on internet-scale video plus teleop data are the new approach.",
      "로보틱스는 전통적으로 여러 좁은 모델을 써왔습니다. 인터넷 규모의 영상과 텔레오퍼레이션 데이터로 학습한 트랜스포머 기반 '월드 모델'이 새 접근법입니다.",
    ),
    industryImpact: L(
      "Logistics, manufacturing, and elder-care all in scope. Expect aggressive capital flows into humanoid robotics.",
      "물류·제조·노인 돌봄이 모두 영향권에 들어옵니다. 휴머노이드 로보틱스에 공격적 자본 유입이 예상됩니다.",
    ),
    keyCompanies: ["Figure", "Tesla", "1X", "Physical Intelligence"],
    keywords: ["robotics", "world models", "humanoid", "VLA"],
    difficulty: "Advanced",
    readingTime: "7 min",
    sourceName: "IEEE Spectrum",
    sourceUrl: "https://spectrum.ieee.org",
    publishedDate: "2026-05-02",
    importanceScore: 0.83,
    quiz: makeQuiz(
      L(
        "What is novel about the demonstrated robot's approach?",
        "시연된 로봇 방식의 새로운 점은 무엇입니까?",
      ),
      [
        L("Scripted recovery for every error", "모든 오류에 대한 스크립트 복구"),
        L("One end-to-end multimodal model", "하나의 엔드투엔드 멀티모달 모델"),
        L("Pure rule-based control", "순수 규칙 기반 제어"),
      ],
      L("One end-to-end multimodal model", "하나의 엔드투엔드 멀티모달 모델"),
    ),
  },
  {
    id: "ai-m3",
    category: "ai",
    timeWindow: "month",
    title: L(
      "AI energy demand pushes US grid operators to fast-track nuclear",
      "AI 전력 수요, 미국 전력망 운영사들을 원자력 가속화로 내몰다",
    ),
    shortSummary: L(
      "PJM and ERCOT are working with hyperscalers on dedicated nuclear capacity, including small modular reactors, to power AI data centers.",
      "PJM과 ERCOT가 AI 데이터센터 전력을 위해 소형모듈원자로(SMR)를 포함한 전용 원자력 용량을 하이퍼스케일러와 추진 중입니다.",
    ),
    longExplanation: L(
      "Data center demand is overwhelming traditional grid planning. New deals couple data centers directly to nuclear plants to bypass transmission bottlenecks.",
      "데이터센터 수요가 기존 전력망 계획을 압도하고 있습니다. 새 계약들은 송전 병목을 우회하기 위해 데이터센터를 원자력 발전소에 직접 연결합니다.",
    ),
    whyItMatters: L(
      "Energy is now the binding constraint on AI scale-up. Whoever solves power first wins the next wave.",
      "이제 에너지가 AI 확장의 결정적 제약입니다. 전력 문제를 먼저 푸는 쪽이 다음 파도를 차지합니다.",
    ),
    backgroundContext: L(
      "US grid load was nearly flat for two decades; AI is the first major new load driver. SMRs offer a faster path than gigawatt-scale plants.",
      "미국 전력 수요는 20년간 거의 정체였고, AI는 처음 등장한 대형 신규 수요 드라이버입니다. SMR은 기가와트급 발전소보다 빠른 경로를 제공합니다.",
    ),
    industryImpact: L(
      "Nuclear supply chain (fuel, vessels, EPC contractors) sees a revival. Utilities renegotiate long-dormant capacity contracts.",
      "핵연료, 압력용기, EPC 등 원자력 공급망이 부활합니다. 유틸리티는 오랫동안 잠자던 용량 계약을 재협상합니다.",
    ),
    keyCompanies: ["Constellation", "Microsoft", "NuScale", "Vistra"],
    keywords: ["nuclear", "SMR", "data centers", "energy"],
    difficulty: "Intermediate",
    readingTime: "5 min",
    sourceName: "Wall Street Journal",
    sourceUrl: "https://www.wsj.com",
    publishedDate: "2026-04-30",
    importanceScore: 0.87,
    quiz: makeQuiz(
      L(
        "Why are hyperscalers turning to nuclear power?",
        "하이퍼스케일러가 원자력으로 돌아서는 이유는?",
      ),
      [
        L("It's the cheapest source", "가장 저렴한 전원이라서"),
        L("AI demand exceeds existing grid capacity", "AI 수요가 기존 전력망 용량을 초과해서"),
        L("Regulators require it", "규제 당국이 요구해서"),
      ],
      L("AI demand exceeds existing grid capacity", "AI 수요가 기존 전력망 용량을 초과해서"),
    ),
  },

  // ============ SEMICONDUCTORS — TODAY ============
  {
    id: "sc-t1",
    category: "semiconductors",
    timeWindow: "today",
    title: L(
      "TSMC begins 2nm volume production in Hsinchu",
      "TSMC, 신주에서 2nm 양산 개시",
    ),
    shortSummary: L(
      "TSMC officially started high-volume manufacturing of its 2nm (N2) process, with Apple as the lead customer.",
      "TSMC가 2nm(N2) 공정의 대량 양산을 공식 시작했으며, 애플이 첫 고객입니다.",
    ),
    longExplanation: L(
      "N2 is TSMC's first node using gate-all-around (GAA) nanosheet transistors, replacing FinFET. Early yields are reportedly above plan, paving the way for next-gen iPhone and AI accelerator silicon.",
      "N2는 TSMC가 FinFET 대신 GAA 나노시트 트랜지스터를 적용한 첫 노드입니다. 초기 수율이 계획을 상회하는 것으로 알려져 차세대 아이폰과 AI 가속기 실리콘의 길을 열고 있습니다.",
    ),
    whyItMatters: L(
      "Leading-edge logic is the foundation of every AI chip, smartphone, and PC. TSMC's lead defines the global semiconductor pecking order.",
      "첨단 로직은 모든 AI 칩·스마트폰·PC의 기반입니다. TSMC의 선두 위치가 글로벌 반도체 서열을 정의합니다.",
    ),
    backgroundContext: L(
      "FinFET transistors had served from 16nm through 3nm. GAA is the biggest transistor architecture shift in a decade.",
      "FinFET 트랜지스터는 16nm부터 3nm까지 사용됐습니다. GAA는 10년 만의 가장 큰 트랜지스터 구조 변화입니다.",
    ),
    industryImpact: L(
      "Apple, Nvidia, AMD line up for early capacity. Samsung Foundry and Intel Foundry face renewed pressure to catch up.",
      "애플·엔비디아·AMD가 초기 캐파를 두고 줄을 섰습니다. 삼성 파운드리와 인텔 파운드리는 추격 압박이 다시 커집니다.",
    ),
    keyCompanies: ["TSMC", "Apple", "Nvidia", "AMD", "ASML"],
    keywords: ["2nm", "GAA", "foundry", "node transition"],
    difficulty: "Intermediate",
    readingTime: "4 min",
    sourceName: "DigiTimes",
    sourceUrl: "https://www.digitimes.com",
    publishedDate: "2026-05-24",
    importanceScore: 0.93,
    quiz: makeQuiz(
      L(
        "What transistor architecture does TSMC's 2nm node use?",
        "TSMC의 2nm 노드가 채택한 트랜지스터 구조는?",
      ),
      [
        L("FinFET", "FinFET"),
        L("Gate-all-around (GAA)", "게이트 올 어라운드 (GAA)"),
        L("Planar", "플레이너"),
      ],
      L("Gate-all-around (GAA)", "게이트 올 어라운드 (GAA)"),
    ),
  },
  {
    id: "sc-t2",
    category: "semiconductors",
    timeWindow: "today",
    title: L(
      "US imposes new HBM export controls on China",
      "미국, 중국向 HBM 수출 통제 신규 부과",
    ),
    shortSummary: L(
      "The Commerce Department added high-bandwidth memory above a performance threshold to its restricted list for shipments to China.",
      "미 상무부가 일정 성능 이상의 고대역폭 메모리(HBM)를 중국 수출 제한 목록에 추가했습니다.",
    ),
    longExplanation: L(
      "HBM is essential to modern AI accelerators. The new rule targets HBM3E and above, regardless of manufacturer, including non-US producers using US equipment.",
      "HBM은 현대 AI 가속기에 필수입니다. 새 규정은 제조사를 불문하고 HBM3E 이상을 대상으로 하며, 미국 장비를 쓰는 비미국 생산자에게도 적용됩니다.",
    ),
    whyItMatters: L(
      "HBM is the new chokepoint after logic chips. Restricting it directly slows China's AI infrastructure build-out.",
      "HBM은 로직 칩에 이은 새로운 병목입니다. 이를 제한하면 중국의 AI 인프라 구축이 직접 둔화됩니다.",
    ),
    backgroundContext: L(
      "Three companies dominate HBM: SK hynix, Samsung, and Micron. All rely on US tools for advanced packaging.",
      "HBM 시장은 SK하이닉스, 삼성, 마이크론 세 곳이 지배합니다. 모두 첨단 패키징에 미국 장비를 사용합니다.",
    ),
    industryImpact: L(
      "Short-term tightening of global HBM supply. Chinese players accelerate domestic alternatives, though years behind.",
      "단기적으로 글로벌 HBM 공급이 빡빡해집니다. 중국 업체들은 국산 대안을 가속하지만 수년 뒤처져 있습니다.",
    ),
    keyCompanies: ["SK hynix", "Samsung", "Micron", "Huawei", "SMIC"],
    keywords: ["HBM", "export controls", "AI chips", "geopolitics"],
    difficulty: "Intermediate",
    readingTime: "4 min",
    sourceName: "Reuters",
    sourceUrl: "https://www.reuters.com",
    publishedDate: "2026-05-24",
    importanceScore: 0.89,
    quiz: makeQuiz(
      L(
        "Why is HBM particularly important for AI accelerators?",
        "HBM이 AI 가속기에 특히 중요한 이유는?",
      ),
      [
        L("It is the cheapest memory available", "가장 저렴한 메모리이기 때문"),
        L("It provides the high bandwidth GPUs need", "GPU가 필요로 하는 높은 대역폭을 제공하기 때문"),
        L("It uses less power than DDR", "DDR보다 전력을 적게 쓰기 때문"),
      ],
      L("It provides the high bandwidth GPUs need", "GPU가 필요로 하는 높은 대역폭을 제공하기 때문"),
    ),
  },
  {
    id: "sc-t3",
    category: "semiconductors",
    timeWindow: "today",
    title: L(
      "Nvidia previews next-gen 'Rubin' AI superchip",
      "엔비디아, 차세대 AI 슈퍼칩 '루빈' 공개 예고",
    ),
    shortSummary: L(
      "Nvidia teased its Rubin platform, the successor to Blackwell, with co-packaged optics and a 3x performance-per-watt claim.",
      "엔비디아가 블랙웰의 후속인 루빈 플랫폼을 예고하며 공동 패키지 광학 기술과 와트당 3배 성능을 주장했습니다.",
    ),
    longExplanation: L(
      "Rubin pairs a new GPU with a custom Arm-based CPU and integrates silicon photonics for chip-to-chip interconnect, addressing the bandwidth wall that limits multi-GPU scaling.",
      "루빈은 새 GPU와 자체 Arm 기반 CPU를 결합하고 칩 간 인터커넥트에 실리콘 포토닉스를 통합해, 다중 GPU 확장의 대역폭 한계를 해결합니다.",
    ),
    whyItMatters: L(
      "Each generation of Nvidia silicon sets the AI training cost curve. Faster, more efficient chips compress the cost of frontier-scale models.",
      "엔비디아 실리콘의 세대 교체는 AI 학습 비용 곡선을 결정합니다. 더 빠르고 효율적인 칩은 프런티어 모델의 비용을 압축합니다.",
    ),
    backgroundContext: L(
      "Blackwell shipped in 2024; Rubin keeps Nvidia on a roughly annual cadence, faster than the traditional 2-year datacenter cycle.",
      "블랙웰은 2024년에 출시됐고, 루빈은 엔비디아의 연 1회 사이클을 유지합니다. 전통적 2년 데이터센터 사이클보다 빠른 속도입니다.",
    ),
    industryImpact: L(
      "Cloud customers will queue for early allocation. Competitors (AMD MI400, custom silicon from hyperscalers) face a moving target.",
      "클라우드 고객들은 초기 물량을 두고 줄을 설 것입니다. 경쟁자(AMD MI400, 하이퍼스케일러 자체 실리콘)는 움직이는 표적을 쫓아야 합니다.",
    ),
    keyCompanies: ["Nvidia", "TSMC", "SK hynix", "Coherent"],
    keywords: ["GPU", "Rubin", "photonics", "AI chips"],
    difficulty: "Advanced",
    readingTime: "5 min",
    sourceName: "Nvidia Newsroom",
    sourceUrl: "https://nvidianews.nvidia.com",
    publishedDate: "2026-05-24",
    importanceScore: 0.91,
    quiz: makeQuiz(
      L(
        "What new interconnect technology does Rubin integrate?",
        "루빈이 통합한 새로운 인터커넥트 기술은?",
      ),
      [
        L("Silicon photonics", "실리콘 포토닉스"),
        L("USB-C", "USB-C"),
        L("Thunderbolt", "썬더볼트"),
      ],
      L("Silicon photonics", "실리콘 포토닉스"),
    ),
  },

  // ============ SEMICONDUCTORS — WEEK ============
  {
    id: "sc-w1",
    category: "semiconductors",
    timeWindow: "week",
    title: L(
      "ASML books record High-NA EUV orders",
      "ASML, High-NA EUV 사상 최대 수주",
    ),
    shortSummary: L(
      "ASML reported a surge in orders for its High-NA EUV systems, the most advanced lithography tools in the world.",
      "ASML이 세계 최첨단 노광 장비인 High-NA EUV 시스템의 수주가 급증했다고 밝혔습니다.",
    ),
    longExplanation: L(
      "High-NA EUV enables sub-2nm patterning in fewer steps. Each system costs ~$380M and there is currently a years-long backlog.",
      "High-NA EUV는 2nm 이하 패터닝을 더 적은 공정으로 가능하게 합니다. 1대당 약 3억 8천만 달러이며 현재 수년 단위 대기 물량이 쌓여 있습니다.",
    ),
    whyItMatters: L(
      "ASML is a single point of failure for the entire leading-edge industry. Its order book is a leading indicator of foundry capex.",
      "ASML은 첨단 반도체 산업 전체의 단일 실패 지점입니다. 수주잔고는 파운드리 자본지출의 선행 지표입니다.",
    ),
    backgroundContext: L(
      "ASML has a monopoly on EUV. High-NA is the next step up, with Intel, TSMC, and Samsung as customers.",
      "ASML은 EUV를 독점합니다. High-NA는 그 위 단계이며 인텔·TSMC·삼성이 고객입니다.",
    ),
    industryImpact: L(
      "Strong revenue visibility through 2028. Geopolitical sensitivity remains: Netherlands restricts shipments to China.",
      "2028년까지 강한 매출 가시성이 확보됩니다. 지정학적 민감성은 여전합니다 — 네덜란드는 중국 수출을 제한합니다.",
    ),
    keyCompanies: ["ASML", "Intel", "TSMC", "Samsung"],
    keywords: ["EUV", "High-NA", "lithography", "ASML"],
    difficulty: "Advanced",
    readingTime: "5 min",
    sourceName: "ASML Investor",
    sourceUrl: "https://www.asml.com/en/investors",
    publishedDate: "2026-05-21",
    importanceScore: 0.85,
    quiz: makeQuiz(
      L(
        "What is ASML's near-monopoly product?",
        "ASML이 사실상 독점하는 제품은?",
      ),
      [
        L("EUV lithography systems", "EUV 노광 장비"),
        L("Wafer test equipment", "웨이퍼 테스트 장비"),
        L("Memory chips", "메모리 칩"),
      ],
      L("EUV lithography systems", "EUV 노광 장비"),
    ),
  },
  {
    id: "sc-w2",
    category: "semiconductors",
    timeWindow: "week",
    title: L(
      "Intel Foundry lands first major external 18A customer",
      "인텔 파운드리, 첫 대형 외부 18A 고객 확보",
    ),
    shortSummary: L(
      "Intel announced a marquee external customer for its 18A process, a critical proof point for its foundry ambitions.",
      "인텔이 18A 공정의 대형 외부 고객을 발표하며 파운드리 사업의 핵심 검증점을 통과했습니다.",
    ),
    longExplanation: L(
      "18A combines RibbonFET (Intel's GAA) and PowerVia (backside power delivery). Securing a major external customer validates Intel as a credible alternative to TSMC.",
      "18A는 RibbonFET(인텔의 GAA)와 PowerVia(후면 전력 공급)를 결합합니다. 대형 외부 고객 확보는 TSMC의 신뢰할 만한 대안으로 인텔을 입증합니다.",
    ),
    whyItMatters: L(
      "Western capacity for leading-edge chips remains scarce. A viable Intel Foundry materially changes geopolitical risk in the supply chain.",
      "첨단 칩의 서구 캐파는 여전히 부족합니다. 유효한 인텔 파운드리는 공급망의 지정학적 위험을 의미 있게 바꿉니다.",
    ),
    backgroundContext: L(
      "Intel's foundry strategy was launched in 2021. 18A is the node where it claimed it would reach process parity.",
      "인텔의 파운드리 전략은 2021년에 시작됐습니다. 18A는 인텔이 공정 동등성에 도달하겠다고 공언한 노드입니다.",
    ),
    industryImpact: L(
      "Validates US CHIPS Act bet. Customers gain a second source; TSMC faces real foundry competition for the first time in years.",
      "미국 CHIPS법의 베팅을 입증합니다. 고객사들은 제2 공급원을 확보하며, TSMC는 수년 만에 진짜 파운드리 경쟁에 직면합니다.",
    ),
    keyCompanies: ["Intel", "TSMC", "Samsung Foundry"],
    keywords: ["Intel Foundry", "18A", "RibbonFET", "PowerVia"],
    difficulty: "Intermediate",
    readingTime: "5 min",
    sourceName: "Intel Newsroom",
    sourceUrl: "https://www.intel.com/newsroom",
    publishedDate: "2026-05-20",
    importanceScore: 0.8,
    quiz: makeQuiz(
      L(
        "What does PowerVia refer to in Intel's 18A process?",
        "인텔 18A 공정에서 PowerVia가 가리키는 것은?",
      ),
      [
        L("Backside power delivery", "후면 전력 공급"),
        L("A new battery tech", "새로운 배터리 기술"),
        L("EUV variant", "EUV 변형"),
      ],
      L("Backside power delivery", "후면 전력 공급"),
    ),
  },
  {
    id: "sc-w3",
    category: "semiconductors",
    timeWindow: "week",
    title: L(
      "China's SMIC reportedly produces 5nm-class chips at scale",
      "중국 SMIC, 5nm급 칩 양산 보도",
    ),
    shortSummary: L(
      "Reports indicate SMIC is shipping 5nm-class chips using DUV multi-patterning, despite EUV restrictions.",
      "EUV 제재에도 불구하고 SMIC가 DUV 멀티 패터닝으로 5nm급 칩을 출하 중이라는 보도가 나왔습니다.",
    ),
    longExplanation: L(
      "Without EUV access, SMIC relies on quadruple patterning with DUV — economically painful but technically possible. Yields are well below TSMC's, but volumes are growing.",
      "EUV가 없는 SMIC는 DUV 4중 패터닝에 의존합니다. 경제성은 떨어지지만 기술적으로는 가능합니다. 수율은 TSMC에 한참 못 미치지만 물량은 늘고 있습니다.",
    ),
    whyItMatters: L(
      "It shows export controls slow but don't fully stop China's advance. The cost penalty matters less when subsidies cover the gap.",
      "수출 통제가 중국의 진전을 늦추지만 완전히 막지는 못함을 보여줍니다. 보조금이 격차를 메우면 비용 페널티는 큰 문제가 되지 않습니다.",
    ),
    backgroundContext: L(
      "SMIC was previously believed stuck near 7nm. Domestic demand from Huawei drove an aggressive push down to 5nm equivalents.",
      "SMIC는 이전까지 7nm 수준에서 정체된 것으로 여겨졌습니다. 화웨이의 내수 수요가 5nm급으로의 공격적 진전을 견인했습니다.",
    ),
    industryImpact: L(
      "China's domestic AI chip roadmap stays alive. Global chip equipment vendors lose long-term China upside but gain short-term tool revenue.",
      "중국 내수 AI 칩 로드맵은 유지됩니다. 글로벌 장비 업체는 장기 중국 업사이드를 잃지만 단기 장비 매출은 얻습니다.",
    ),
    keyCompanies: ["SMIC", "Huawei", "Naura", "AMEC"],
    keywords: ["SMIC", "China", "DUV", "export controls"],
    difficulty: "Advanced",
    readingTime: "6 min",
    sourceName: "Financial Times",
    sourceUrl: "https://www.ft.com",
    publishedDate: "2026-05-19",
    importanceScore: 0.82,
    quiz: makeQuiz(
      L(
        "How is SMIC achieving 5nm-class production without EUV?",
        "SMIC가 EUV 없이 5nm급 양산을 달성한 방법은?",
      ),
      [
        L("Buying EUV from a partner", "파트너로부터 EUV 구매"),
        L("Multi-patterning with DUV lithography", "DUV 노광의 멀티 패터닝"),
        L("3D stacking only", "오직 3D 스택만"),
      ],
      L("Multi-patterning with DUV lithography", "DUV 노광의 멀티 패터닝"),
    ),
  },

  // ============ SEMICONDUCTORS — MONTH ============
  {
    id: "sc-m1",
    category: "semiconductors",
    timeWindow: "month",
    title: L(
      "Custom AI silicon from hyperscalers reaches 30% of training compute",
      "하이퍼스케일러 자체 AI 실리콘, 학습 연산의 30% 차지",
    ),
    shortSummary: L(
      "Google TPU, AWS Trainium, and Microsoft Maia together now run roughly 30% of frontier training workloads.",
      "구글 TPU, AWS Trainium, 마이크로소프트 Maia가 합쳐서 프런티어 학습 워크로드의 약 30%를 처리하고 있습니다.",
    ),
    longExplanation: L(
      "Hyperscalers have been quietly maturing their custom silicon. Google's TPU v6 and AWS Trainium2 reach competitive performance-per-dollar versus Nvidia for selected workloads.",
      "하이퍼스케일러들은 자체 실리콘을 조용히 성숙시켜 왔습니다. 구글 TPU v6와 AWS Trainium2는 특정 워크로드에서 엔비디아 대비 달러당 성능에서 경쟁력에 도달했습니다.",
    ),
    whyItMatters: L(
      "Nvidia still dominates, but the trend lowers customer dependence and gives hyperscalers pricing leverage.",
      "엔비디아가 여전히 지배적이지만, 이 흐름은 고객 종속성을 낮추고 하이퍼스케일러에게 가격 협상력을 줍니다.",
    ),
    backgroundContext: L(
      "TPUs have shipped since 2016 but were Google-internal. Trainium and Maia are newer but growing fast under heavy capex.",
      "TPU는 2016년부터 출하됐지만 구글 내부용이었습니다. Trainium과 Maia는 더 늦게 등장했지만 대규모 자본지출 속에 빠르게 성장하고 있습니다.",
    ),
    industryImpact: L(
      "Nvidia's gross margin power may have peaked. Broadcom and Marvell win as ASIC design partners.",
      "엔비디아의 매출총이익률 파워는 정점을 찍었을 수 있습니다. ASIC 설계 파트너로 브로드컴과 마벨이 수혜를 봅니다.",
    ),
    keyCompanies: ["Google", "AWS", "Microsoft", "Broadcom", "Marvell"],
    keywords: ["TPU", "Trainium", "ASIC", "custom silicon"],
    difficulty: "Intermediate",
    readingTime: "6 min",
    sourceName: "SemiAnalysis",
    sourceUrl: "https://www.semianalysis.com",
    publishedDate: "2026-05-05",
    importanceScore: 0.88,
    quiz: makeQuiz(
      L(
        "Which company benefits as an ASIC design partner for hyperscalers?",
        "하이퍼스케일러의 ASIC 설계 파트너로 수혜를 보는 기업은?",
      ),
      [
        L("Broadcom", "브로드컴"),
        L("Tesla", "테슬라"),
        L("Cisco", "시스코"),
      ],
      L("Broadcom", "브로드컴"),
    ),
  },
  {
    id: "sc-m2",
    category: "semiconductors",
    timeWindow: "month",
    title: L(
      "US CHIPS Act final disbursements complete",
      "미국 CHIPS법 최종 지급 완료",
    ),
    shortSummary: L(
      "The Commerce Department finalized the last major CHIPS Act grant agreements, totaling over $40B awarded.",
      "미 상무부가 CHIPS법의 마지막 대형 보조금 계약을 마무리해 총 400억 달러 이상을 지급했습니다.",
    ),
    longExplanation: L(
      "Final disbursements went to TSMC Arizona, Samsung Texas, Intel Ohio/Arizona, and Micron New York. All projects now move into construction or production milestones tied to claw-back clauses.",
      "최종 지급분은 TSMC 애리조나, 삼성 텍사스, 인텔 오하이오/애리조나, 마이크론 뉴욕으로 갔습니다. 모든 프로젝트는 환수 조항이 걸린 건설·생산 마일스톤 단계로 넘어갑니다.",
    ),
    whyItMatters: L(
      "The single largest US industrial policy action in decades is now fully committed. Outcomes will be measured in production volumes from 2027 onward.",
      "수십 년 만의 최대 미국 산업정책이 모두 집행됐습니다. 성과는 2027년 이후 생산량으로 측정됩니다.",
    ),
    backgroundContext: L(
      "The CHIPS Act passed in 2022. Disbursements were spread over multiple years with strict milestone conditions.",
      "CHIPS법은 2022년에 통과됐습니다. 엄격한 마일스톤 조건과 함께 여러 해에 걸쳐 지급됐습니다.",
    ),
    industryImpact: L(
      "Construction, equipment, and skilled-labor markets see sustained tailwinds. Long-term success depends on whether US fabs can match Asian operating costs.",
      "건설·장비·숙련 인력 시장은 지속적인 호재를 봅니다. 장기 성공은 미국 팹이 아시아 수준의 운영 비용을 따라잡을 수 있느냐에 달려 있습니다.",
    ),
    keyCompanies: ["TSMC", "Samsung", "Intel", "Micron"],
    keywords: ["CHIPS Act", "industrial policy", "fabs", "US"],
    difficulty: "Beginner",
    readingTime: "4 min",
    sourceName: "US Commerce Department",
    sourceUrl: "https://www.commerce.gov",
    publishedDate: "2026-04-28",
    importanceScore: 0.79,
    quiz: makeQuiz(
      L(
        "What is the total approximate scale of CHIPS Act awards?",
        "CHIPS법 지원금의 총 규모는 대략 얼마입니까?",
      ),
      [
        L("$4B", "40억 달러"),
        L("$40B", "400억 달러"),
        L("$400B", "4,000억 달러"),
      ],
      L("$40B", "400억 달러"),
    ),
  },
  {
    id: "sc-m3",
    category: "semiconductors",
    timeWindow: "month",
    title: L(
      "Advanced packaging becomes the new node race",
      "첨단 패키징, 새로운 노드 경쟁의 무대로",
    ),
    shortSummary: L(
      "CoWoS, SoIC, and Foveros capacity is sold out through 2027 as 3D stacking replaces transistor scaling as the bottleneck.",
      "트랜지스터 스케일링 대신 3D 스택이 병목이 되면서 CoWoS·SoIC·Foveros 캐파가 2027년까지 매진됐습니다.",
    ),
    longExplanation: L(
      "As Moore's Law slows, performance gains come from stacking chiplets in 3D. TSMC's CoWoS supplies Nvidia, Intel's Foveros enables Lunar Lake, and Samsung's X-Cube is gaining adoption.",
      "무어의 법칙이 둔화되면서 성능 향상은 칩렛을 3D로 쌓는 데서 나옵니다. TSMC의 CoWoS는 엔비디아에 공급하고, 인텔의 Foveros는 Lunar Lake를 가능케 하며, 삼성의 X-Cube도 채택이 늘고 있습니다.",
    ),
    whyItMatters: L(
      "The locus of innovation is shifting from transistor density to packaging. It changes the supplier landscape: substrate makers, bonders, and OSATs all matter more.",
      "혁신의 무대가 트랜지스터 밀도에서 패키징으로 이동하고 있습니다. 기판 제조사, 본더, OSAT 등 공급망 지형이 바뀝니다.",
    ),
    backgroundContext: L(
      "CoWoS demand exploded with the AI boom; TSMC has been doubling capacity yearly but still cannot meet demand.",
      "AI 붐과 함께 CoWoS 수요가 폭증했고, TSMC는 매년 캐파를 두 배로 늘리지만 여전히 수요를 못 따라잡습니다.",
    ),
    industryImpact: L(
      "Winners: Applied Materials, BE Semiconductor, ASE Group. Substrates (Ibiden, Unimicron) also benefit.",
      "수혜자는 어플라이드 머티리얼즈, BE Semiconductor, ASE 그룹입니다. 기판 업체(이비덴, 유니마이크론)도 혜택을 받습니다.",
    ),
    keyCompanies: ["TSMC", "Intel", "Samsung", "ASE", "Ibiden"],
    keywords: ["packaging", "CoWoS", "3D stacking", "chiplets"],
    difficulty: "Advanced",
    readingTime: "7 min",
    sourceName: "EE Times",
    sourceUrl: "https://www.eetimes.com",
    publishedDate: "2026-04-25",
    importanceScore: 0.86,
    quiz: makeQuiz(
      L(
        "What is the main reason advanced packaging matters so much now?",
        "첨단 패키징이 지금 그토록 중요한 주된 이유는?",
      ),
      [
        L("Transistor scaling has slowed", "트랜지스터 스케일링이 둔화됐기 때문"),
        L("Power consumption is no longer a concern", "전력 소비가 더 이상 문제가 아니어서"),
        L("Software has gotten less demanding", "소프트웨어 요구가 줄어서"),
      ],
      L("Transistor scaling has slowed", "트랜지스터 스케일링이 둔화됐기 때문"),
    ),
  },

  // ============ STOCKS — TODAY ============
  {
    id: "st-t1",
    category: "stocks",
    timeWindow: "today",
    title: L(
      "S&P 500 hits new all-time high on soft inflation print",
      "S&P 500, 인플레이션 둔화에 사상 최고치 경신",
    ),
    shortSummary: L(
      "US stocks rallied to a record close after April CPI came in below expectations, reviving rate-cut bets.",
      "4월 CPI가 예상치를 밑돌며 금리 인하 베팅이 살아나 미국 증시가 사상 최고로 마감했습니다.",
    ),
    longExplanation: L(
      "Headline CPI rose 2.3% YoY versus 2.5% expected. Core CPI was also softer. Fed funds futures now price two cuts by year-end, up from one.",
      "헤드라인 CPI는 전년 동월 대비 2.3% 상승(예상 2.5%)했고, 근원 CPI도 둔화됐습니다. 연방기금금리 선물은 연말까지 인하 횟수를 기존 1회에서 2회로 반영하고 있습니다.",
    ),
    whyItMatters: L(
      "Inflation prints remain the single biggest driver of risk assets. Lower inflation → lower yields → higher multiples.",
      "인플레이션 지표는 여전히 위험자산의 최대 동인입니다. 낮은 인플레이션 → 낮은 금리 → 높은 멀티플로 이어집니다.",
    ),
    backgroundContext: L(
      "The Fed has held rates steady since mid-2025 as inflation drifted toward target. Markets oscillate on each data point.",
      "인플레이션이 목표치로 수렴하며 연준은 2025년 중반 이후 금리를 동결해 왔습니다. 시장은 지표마다 출렁입니다.",
    ),
    industryImpact: L(
      "Long-duration assets (tech, growth) outperform. Banks lag on lower-for-longer expectations.",
      "장기 듀레이션 자산(테크·성장주)이 아웃퍼폼합니다. 저금리 장기화 기대에 은행주는 부진합니다.",
    ),
    keyCompanies: ["S&P 500 index", "Federal Reserve"],
    keywords: ["CPI", "inflation", "Fed", "rate cuts"],
    difficulty: "Beginner",
    readingTime: "3 min",
    sourceName: "Bloomberg",
    sourceUrl: "https://www.bloomberg.com",
    publishedDate: "2026-05-24",
    importanceScore: 0.84,
    quiz: makeQuiz(
      L(
        "Why does softer inflation typically lift stock prices?",
        "인플레이션 둔화가 일반적으로 주가를 끌어올리는 이유는?",
      ),
      [
        L("It increases corporate taxes", "법인세를 늘리기 때문"),
        L("It supports lower interest rates", "금리 하락을 뒷받침하기 때문"),
        L("It strengthens the dollar always", "달러를 늘 강하게 하기 때문"),
      ],
      L("It supports lower interest rates", "금리 하락을 뒷받침하기 때문"),
    ),
  },
  {
    id: "st-t2",
    category: "stocks",
    timeWindow: "today",
    title: L(
      "Nvidia earnings beat but guidance disappoints",
      "엔비디아 실적 호조, 가이던스는 실망",
    ),
    shortSummary: L(
      "Nvidia posted record revenue and EPS but next-quarter guidance came in below the highest buy-side expectations, sending shares down after hours.",
      "엔비디아가 사상 최대 매출과 EPS를 기록했지만 다음 분기 가이던스가 시장 최상단 기대치를 밑돌면서 시간외 거래에서 주가가 하락했습니다.",
    ),
    longExplanation: L(
      "Data-center revenue grew 60% YoY. Management cited supply timing for the softer guide. Bears flagged a normalization of AI capex; bulls see a temporary digestion phase.",
      "데이터센터 매출은 전년 대비 60% 성장했습니다. 경영진은 공급 시점 문제로 가이던스가 약했다고 설명했습니다. 약세론자는 AI 자본지출의 정상화를, 강세론자는 일시적 조정 국면을 봅니다.",
    ),
    whyItMatters: L(
      "Nvidia is the bellwether for the AI trade. Its quarterly print moves the entire complex: chips, power, hyperscalers.",
      "엔비디아는 AI 트레이드의 풍향계입니다. 분기 실적은 칩·전력·하이퍼스케일러 전체를 움직입니다.",
    ),
    backgroundContext: L(
      "After two years of triple-digit growth, decelerating comps were inevitable. The question is whether the slowdown is supply-driven or demand-driven.",
      "2년 연속 세 자릿수 성장 이후 둔화는 불가피했습니다. 핵심은 둔화가 공급 요인인지 수요 요인인지입니다.",
    ),
    industryImpact: L(
      "AI-exposed names (AMD, AVGO, MU, power utilities) trade in sympathy. Bond yields dipped on weaker risk appetite.",
      "AI 관련 종목(AMD, AVGO, MU, 전력 유틸)이 동반 움직였습니다. 위험 선호가 약해지며 채권 금리는 하락했습니다.",
    ),
    keyCompanies: ["Nvidia", "AMD", "Broadcom", "Micron"],
    keywords: ["earnings", "AI capex", "guidance", "Nvidia"],
    difficulty: "Intermediate",
    readingTime: "5 min",
    sourceName: "CNBC",
    sourceUrl: "https://www.cnbc.com",
    publishedDate: "2026-05-24",
    importanceScore: 0.9,
    quiz: makeQuiz(
      L(
        "Why did Nvidia stock drop despite beating earnings?",
        "엔비디아가 실적을 상회했음에도 주가가 하락한 이유는?",
      ),
      [
        L("Revenue missed estimates", "매출이 추정치를 하회"),
        L("Forward guidance was below high-end expectations", "향후 가이던스가 최상단 기대치를 하회"),
        L("Dividend was cut", "배당이 삭감"),
      ],
      L("Forward guidance was below high-end expectations", "향후 가이던스가 최상단 기대치를 하회"),
    ),
  },
  {
    id: "st-t3",
    category: "stocks",
    timeWindow: "today",
    title: L(
      "Bitcoin tops $150K as ETF inflows accelerate",
      "비트코인, ETF 자금 유입 가속에 15만 달러 돌파",
    ),
    shortSummary: L(
      "Bitcoin crossed $150,000 for the first time as US spot ETFs saw record weekly inflows.",
      "미국 현물 ETF의 주간 유입액이 사상 최대를 기록하며 비트코인이 처음으로 15만 달러를 돌파했습니다.",
    ),
    longExplanation: L(
      "Spot Bitcoin ETFs have absorbed over $100B in cumulative inflows since launch. Institutional allocations from pensions and sovereigns are now meaningful.",
      "현물 비트코인 ETF는 출시 이후 누적 1,000억 달러 이상을 흡수했습니다. 연기금과 국부펀드의 기관 배분이 의미 있는 수준에 도달했습니다.",
    ),
    whyItMatters: L(
      "BTC is increasingly trading as a macro asset correlated with global liquidity, not just retail sentiment.",
      "비트코인은 점차 개인 심리뿐 아니라 글로벌 유동성과 상관된 매크로 자산으로 거래되고 있습니다.",
    ),
    backgroundContext: L(
      "Spot ETFs were approved in January 2024. Each subsequent halving and rate-cut cycle has reinforced flows.",
      "현물 ETF는 2024년 1월에 승인됐습니다. 이후 반감기와 금리 인하 사이클이 자금 유입을 강화해 왔습니다.",
    ),
    industryImpact: L(
      "Crypto-adjacent equities (Coinbase, MSTR, miners) outperform. Allocators rebalance into digital assets.",
      "코인베이스·MSTR·채굴 기업 등 크립토 관련주가 아웃퍼폼합니다. 자산 배분자들은 디지털 자산 비중을 늘립니다.",
    ),
    keyCompanies: ["BlackRock", "Fidelity", "Coinbase", "MicroStrategy"],
    keywords: ["bitcoin", "ETF", "crypto", "macro"],
    difficulty: "Beginner",
    readingTime: "3 min",
    sourceName: "CoinDesk",
    sourceUrl: "https://www.coindesk.com",
    publishedDate: "2026-05-24",
    importanceScore: 0.76,
    quiz: makeQuiz(
      L(
        "What product was a major driver of institutional Bitcoin demand?",
        "기관의 비트코인 수요를 견인한 주요 상품은?",
      ),
      [
        L("Bitcoin futures only", "비트코인 선물만"),
        L("Spot Bitcoin ETFs", "현물 비트코인 ETF"),
        L("Stablecoins", "스테이블코인"),
      ],
      L("Spot Bitcoin ETFs", "현물 비트코인 ETF"),
    ),
  },

  // ============ STOCKS — WEEK ============
  {
    id: "st-w1",
    category: "stocks",
    timeWindow: "week",
    title: L(
      "Magnificent Seven concentration tops 35% of S&P 500",
      "매그니피센트 7, S&P 500의 35% 초과",
    ),
    shortSummary: L(
      "The largest seven US tech stocks now make up over 35% of S&P 500 market cap, a historic concentration.",
      "미국 7대 테크주가 S&P 500 시가총액의 35% 이상을 차지해 역사적 집중도를 기록했습니다.",
    ),
    longExplanation: L(
      "Apple, Microsoft, Nvidia, Alphabet, Amazon, Meta, and Tesla collectively dwarf the next 100 companies. Index funds passively allocate ever more capital to them.",
      "애플·MS·엔비디아·알파벳·아마존·메타·테슬라가 그 다음 100개사 합계를 압도합니다. 인덱스 펀드는 패시브하게 점점 더 많은 자본을 이들에게 배분합니다.",
    ),
    whyItMatters: L(
      "Passive flows mechanically amplify concentration. A pullback in any single name has outsized index impact.",
      "패시브 자금은 집중도를 기계적으로 증폭합니다. 한 종목의 조정도 지수에 과도한 영향을 줍니다.",
    ),
    backgroundContext: L(
      "Concentration was ~20% in 2020, ~30% in 2024. The AI cycle accelerated the trend.",
      "집중도는 2020년 약 20%, 2024년 약 30%였습니다. AI 사이클이 추세를 가속했습니다.",
    ),
    industryImpact: L(
      "Active managers struggle to outperform without owning Mag 7. Diversification strategies need to overweight non-US.",
      "Mag 7을 보유하지 않은 액티브 매니저는 초과 수익에 어려움을 겪습니다. 분산 전략은 비미국 비중을 늘려야 합니다.",
    ),
    keyCompanies: ["Apple", "Microsoft", "Nvidia", "Alphabet", "Amazon", "Meta", "Tesla"],
    keywords: ["concentration", "Magnificent Seven", "S&P 500", "passive"],
    difficulty: "Intermediate",
    readingTime: "5 min",
    sourceName: "Goldman Sachs Research",
    sourceUrl: "https://www.goldmansachs.com/insights",
    publishedDate: "2026-05-21",
    importanceScore: 0.82,
    quiz: makeQuiz(
      L(
        "Why is index concentration a risk?",
        "지수 집중도가 위험한 이유는?",
      ),
      [
        L("Diversification is reduced", "분산 효과가 줄어들기 때문"),
        L("It increases dividends", "배당이 늘어나기 때문"),
        L("It lowers volatility always", "변동성을 항상 낮추기 때문"),
      ],
      L("Diversification is reduced", "분산 효과가 줄어들기 때문"),
    ),
  },
  {
    id: "st-w2",
    category: "stocks",
    timeWindow: "week",
    title: L(
      "Japan's Nikkei extends gains as BOJ holds policy steady",
      "BOJ 정책 동결에 일본 닛케이 상승세 연장",
    ),
    shortSummary: L(
      "The Nikkei 225 reached fresh 35-year highs after the BOJ left rates unchanged and signaled patience.",
      "BOJ가 금리를 동결하고 인내를 시사하자 닛케이 225가 35년 만의 신고가를 경신했습니다.",
    ),
    longExplanation: L(
      "Strong corporate governance reforms, share buybacks, and weak yen continue to drive Japanese equities. Foreign inflows hit a multi-year high.",
      "강한 기업 거버넌스 개혁, 자사주 매입, 약한 엔화가 일본 주식을 계속 견인하고 있습니다. 외국인 자금 유입은 수년 만의 최고치입니다.",
    ),
    whyItMatters: L(
      "Japan has shifted from value trap to credible reflation story. Global allocators are increasing exposure for the first time in decades.",
      "일본은 '가치 함정'에서 신뢰할 만한 리플레이션 스토리로 전환했습니다. 글로벌 배분자들은 수십 년 만에 처음으로 비중을 늘리고 있습니다.",
    ),
    backgroundContext: L(
      "Abenomics laid the foundation; TSE listing reforms in 2023-24 forced companies to address low P/B ratios.",
      "아베노믹스가 기반을 놨고, 2023-24년 도쿄증권거래소 상장 개혁이 기업들에게 낮은 P/B 해소를 압박했습니다.",
    ),
    industryImpact: L(
      "Japanese banks, industrials, and trading houses (Warren Buffett's bet) outperform. Yen weakness remains a tailwind for exporters.",
      "일본 은행·산업재·종합상사(워런 버핏의 베팅)가 아웃퍼폼합니다. 엔화 약세는 수출주에 계속 호재입니다.",
    ),
    keyCompanies: ["Toyota", "Sony", "Mitsubishi", "SoftBank"],
    keywords: ["Nikkei", "Japan", "BOJ", "governance"],
    difficulty: "Intermediate",
    readingTime: "5 min",
    sourceName: "Nikkei Asia",
    sourceUrl: "https://asia.nikkei.com",
    publishedDate: "2026-05-20",
    importanceScore: 0.74,
    quiz: makeQuiz(
      L(
        "What structural reform supported Japan's equity rally?",
        "일본 증시 랠리를 뒷받침한 구조 개혁은?",
      ),
      [
        L("Tokyo Stock Exchange listing reforms", "도쿄증권거래소 상장 개혁"),
        L("Mandatory stock splits", "주식 분할 의무화"),
        L("Foreign ownership cap", "외국인 지분 한도"),
      ],
      L("Tokyo Stock Exchange listing reforms", "도쿄증권거래소 상장 개혁"),
    ),
  },
  {
    id: "st-w3",
    category: "stocks",
    timeWindow: "week",
    title: L(
      "Oil holds above $80 on OPEC+ extension",
      "OPEC+ 감산 연장에 유가 80달러 상회 유지",
    ),
    shortSummary: L(
      "Brent crude held above $80/barrel after OPEC+ extended voluntary production cuts through year-end.",
      "OPEC+가 자발적 감산을 연말까지 연장하자 브렌트유가 배럴당 80달러 위에서 유지됐습니다.",
    ),
    longExplanation: L(
      "Saudi Arabia and Russia confirmed they would keep ~2.2 mb/d of voluntary cuts. Markets read it as price-supportive, especially with US shale growth slowing.",
      "사우디와 러시아는 일평균 220만 배럴의 자발적 감산을 유지한다고 확인했습니다. 시장은 미국 셰일 성장 둔화와 맞물려 가격 지지적 신호로 해석했습니다.",
    ),
    whyItMatters: L(
      "Oil prices feed into inflation, fiscal balances for producers, and energy sector earnings.",
      "유가는 인플레이션, 산유국 재정 균형, 에너지 섹터 실적에 직접 영향을 줍니다.",
    ),
    backgroundContext: L(
      "OPEC+ has used voluntary cuts as a flexible lever since 2023. Compliance has been mixed but headline messaging matters.",
      "OPEC+는 2023년부터 자발적 감산을 유연한 레버로 활용해 왔습니다. 준수율은 일정치 않지만 헤드라인 메시지가 중요합니다.",
    ),
    industryImpact: L(
      "Energy stocks (XOM, CVX, SHEL) firm up. Airlines and freight margins compress.",
      "엑손모빌·셰브런·셸 등 에너지주는 견조합니다. 항공·물류 마진은 압박을 받습니다.",
    ),
    keyCompanies: ["Saudi Aramco", "ExxonMobil", "Chevron", "Shell"],
    keywords: ["OPEC", "oil", "Brent", "production cuts"],
    difficulty: "Beginner",
    readingTime: "4 min",
    sourceName: "Reuters",
    sourceUrl: "https://www.reuters.com",
    publishedDate: "2026-05-19",
    importanceScore: 0.7,
    quiz: makeQuiz(
      L(
        "What did OPEC+ do this week to support oil prices?",
        "OPEC+가 이번 주 유가를 지지하기 위해 한 조치는?",
      ),
      [
        L("Increased production", "생산 증대"),
        L("Extended voluntary production cuts", "자발적 감산 연장"),
        L("Disbanded", "해체"),
      ],
      L("Extended voluntary production cuts", "자발적 감산 연장"),
    ),
  },

  // ============ STOCKS — MONTH ============
  {
    id: "st-m1",
    category: "stocks",
    timeWindow: "month",
    title: L(
      "Q1 earnings season ends with 12% YoY EPS growth",
      "1분기 실적 시즌, 전년 동기 대비 12% EPS 성장으로 마감",
    ),
    shortSummary: L(
      "S&P 500 Q1 earnings grew 12% YoY, with AI-exposed names contributing more than half of the gain.",
      "S&P 500의 1분기 실적이 전년 대비 12% 성장했고, AI 관련주가 그 절반 이상을 기여했습니다.",
    ),
    longExplanation: L(
      "Excluding the Mag 7, EPS growth was only ~5%. Margin expansion is heavily skewed toward tech, while consumer-facing sectors show pricing fatigue.",
      "Mag 7을 제외하면 EPS 성장은 약 5%에 그쳤습니다. 마진 확장은 테크에 크게 편중돼 있고, 소비재 섹터는 가격 피로가 나타납니다.",
    ),
    whyItMatters: L(
      "Headline growth looks healthy, but the breadth is narrow. Future outperformance depends on AI productivity gains flowing to the rest of the index.",
      "헤드라인 성장은 견조해 보이지만 폭이 좁습니다. 향후 아웃퍼폼은 AI 생산성 향상이 나머지 지수로 흘러가느냐에 달려 있습니다.",
    ),
    backgroundContext: L(
      "EPS growth was negative in 2023, rebounded in 2024-25. The 2026 acceleration has been the case for continued multiple support.",
      "EPS 성장은 2023년에 마이너스였다가 2024-25년에 반등했습니다. 2026년의 가속이 멀티플 지지의 근거였습니다.",
    ),
    industryImpact: L(
      "Tech and communications lead. Materials and consumer staples lag.",
      "테크와 커뮤니케이션이 선도합니다. 소재와 필수소비재는 부진합니다.",
    ),
    keyCompanies: ["Microsoft", "Alphabet", "Meta", "Apple"],
    keywords: ["earnings", "EPS", "S&P 500", "Mag 7"],
    difficulty: "Intermediate",
    readingTime: "5 min",
    sourceName: "FactSet",
    sourceUrl: "https://insight.factset.com",
    publishedDate: "2026-05-10",
    importanceScore: 0.81,
    quiz: makeQuiz(
      L(
        "What's the main caveat about Q1 EPS growth?",
        "1분기 EPS 성장에 대한 주요 단서는?",
      ),
      [
        L("It was entirely driven by share buybacks", "전부 자사주 매입에 의한 것"),
        L("Growth was concentrated in a few mega-cap names", "소수 메가캡에 성장이 집중됨"),
        L("It excluded the financial sector", "금융 섹터를 제외함"),
      ],
      L("Growth was concentrated in a few mega-cap names", "소수 메가캡에 성장이 집중됨"),
    ),
  },
  {
    id: "st-m2",
    category: "stocks",
    timeWindow: "month",
    title: L(
      "Private credit AUM surpasses $2 trillion",
      "사모대출 AUM, 2조 달러 돌파",
    ),
    shortSummary: L(
      "Private credit assets under management crossed $2T globally as banks continue to retreat from middle-market lending.",
      "은행이 중견기업 대출에서 계속 후퇴하면서 글로벌 사모대출 운용자산이 2조 달러를 넘었습니다.",
    ),
    longExplanation: L(
      "Apollo, Blackstone, KKR, and Ares lead the category. Direct lending to mid-sized companies offers floating-rate yield that has held up well.",
      "아폴로·블랙스톤·KKR·에어리스가 이 카테고리를 이끕니다. 중견기업 직접 대출은 변동금리 수익을 제공하며 안정적으로 유지돼 왔습니다.",
    ),
    whyItMatters: L(
      "A growing share of corporate borrowing now sits outside the regulated banking system. Stress in this market would be less visible than a banking crisis.",
      "기업 차입의 상당 부분이 규제 은행권 밖으로 이동하고 있습니다. 이 시장의 스트레스는 은행 위기보다 가시성이 낮습니다.",
    ),
    backgroundContext: L(
      "Private credit grew from ~$0.5T in 2015 to $2T+ in 2026, accelerated by tightening bank capital rules.",
      "사모대출은 은행 자본 규제 강화에 힘입어 2015년 약 0.5조 달러에서 2026년 2조 달러 이상으로 성장했습니다.",
    ),
    industryImpact: L(
      "Alternative asset managers see strong fee growth. Regional banks face permanent erosion of commercial loan share.",
      "대체 자산운용사는 강한 수수료 성장을 봅니다. 지방 은행은 상업 대출 점유율의 영구적 잠식을 겪습니다.",
    ),
    keyCompanies: ["Apollo", "Blackstone", "KKR", "Ares"],
    keywords: ["private credit", "alternatives", "direct lending"],
    difficulty: "Advanced",
    readingTime: "6 min",
    sourceName: "Preqin",
    sourceUrl: "https://www.preqin.com",
    publishedDate: "2026-05-03",
    importanceScore: 0.77,
    quiz: makeQuiz(
      L(
        "Why has private credit grown so rapidly?",
        "사모대출이 빠르게 성장한 이유는?",
      ),
      [
        L("Banks pulled back from middle-market lending", "은행이 중견기업 대출에서 후퇴"),
        L("Interest rates collapsed", "금리가 붕괴"),
        L("Government mandated it", "정부가 의무화"),
      ],
      L("Banks pulled back from middle-market lending", "은행이 중견기업 대출에서 후퇴"),
    ),
  },
  {
    id: "st-m3",
    category: "stocks",
    timeWindow: "month",
    title: L(
      "10-year Treasury yield ranges 4.0-4.5% as Fed in 'wait-and-see' mode",
      "연준 관망 모드 속 10년물 금리, 4.0–4.5% 박스권",
    ),
    shortSummary: L(
      "The benchmark 10-year yield traded in a tight 4.0-4.5% band for most of the month as bond traders await clearer macro signals.",
      "기준 10년물 금리가 채권 트레이더들이 더 명확한 매크로 신호를 기다리는 가운데 한 달 내내 4.0–4.5%의 좁은 박스권에서 움직였습니다.",
    ),
    longExplanation: L(
      "With inflation near target but growth holding up, the Fed has signaled patience. Markets are pricing 1-2 cuts in the next 12 months.",
      "인플레이션은 목표치에 가깝지만 성장세가 유지되며 연준은 인내를 시사했습니다. 시장은 향후 12개월 1–2회 인하를 반영합니다.",
    ),
    whyItMatters: L(
      "The 10-year yield is the most important price in global finance — it sets discount rates for nearly every asset.",
      "10년물 금리는 글로벌 금융에서 가장 중요한 가격으로, 거의 모든 자산의 할인율을 결정합니다.",
    ),
    backgroundContext: L(
      "Yields spiked above 5% in 2023, normalized lower as inflation cooled. The current range reflects a 'soft landing' regime.",
      "2023년에 5% 이상으로 치솟았다가 인플레이션이 식으면서 정상화됐습니다. 현재 레인지는 '소프트랜딩' 체제를 반영합니다.",
    ),
    industryImpact: L(
      "REITs, utilities, and growth stocks all benefit from a stable lower-yield environment. Banks see flatter NIMs.",
      "리츠·유틸리티·성장주는 안정적인 저금리 환경에서 수혜를 봅니다. 은행은 NIM(순이자마진) 평탄화를 겪습니다.",
    ),
    keyCompanies: ["US Treasury", "Federal Reserve"],
    keywords: ["Treasury", "yields", "Fed", "duration"],
    difficulty: "Intermediate",
    readingTime: "5 min",
    sourceName: "Wall Street Journal",
    sourceUrl: "https://www.wsj.com",
    publishedDate: "2026-04-29",
    importanceScore: 0.79,
    quiz: makeQuiz(
      L(
        "Why is the 10-year Treasury yield so important?",
        "10년물 국채 금리가 그토록 중요한 이유는?",
      ),
      [
        L("It sets discount rates for most asset classes", "대부분 자산군의 할인율을 결정"),
        L("It determines mortgage rates only", "오직 주택담보대출 금리만 결정"),
        L("It controls inflation directly", "인플레이션을 직접 통제"),
      ],
      L("It sets discount rates for most asset classes", "대부분 자산군의 할인율을 결정"),
    ),
  },

  // ============ AUTOMOTIVE ============
  {
    id: "ev-t1",
    category: "automotive",
    timeWindow: "today",
    title: L(
      "BYD overtakes Tesla in global EV deliveries for full year",
      "BYD, 연간 글로벌 EV 인도량에서 테슬라 추월",
    ),
    shortSummary: L(
      "BYD surpassed Tesla in trailing-12-month global pure-EV deliveries, marking a historic lead change.",
      "BYD가 직전 12개월 누적 순수 전기차 인도량에서 테슬라를 추월하며 역사적인 선두 교체를 이뤘습니다.",
    ),
    longExplanation: L(
      "BYD's vertically integrated battery and chip strategy plus aggressive overseas expansion in Europe, Southeast Asia, and Latin America drove the milestone.",
      "배터리·반도체 수직 통합 전략과 유럽·동남아·중남미로의 공격적 해외 확장이 이번 성과를 견인했습니다.",
    ),
    whyItMatters: L(
      "The center of gravity in EVs is now firmly in China. Western brands face structural cost disadvantage.",
      "전기차의 중심축은 이제 확실히 중국에 있습니다. 서구 브랜드는 구조적 비용 열위에 직면합니다.",
    ),
    backgroundContext: L(
      "BYD started as a battery maker and only became an EV-first brand in 2022. Tesla's growth has slowed amid pricing wars.",
      "BYD는 배터리 회사로 출발해 2022년에야 EV 중심 브랜드가 됐습니다. 테슬라는 가격 전쟁 속에서 성장이 둔화됐습니다.",
    ),
    industryImpact: L(
      "Legacy OEMs (VW, Stellantis, Ford) face existential pressure. Battery suppliers consolidate.",
      "VW·스텔란티스·포드 등 레거시 OEM은 실존적 압박을 받습니다. 배터리 공급사들은 통합됩니다.",
    ),
    keyCompanies: ["BYD", "Tesla", "VW", "Stellantis"],
    keywords: ["EV", "BYD", "deliveries", "China"],
    difficulty: "Beginner",
    readingTime: "4 min",
    sourceName: "Reuters",
    sourceUrl: "https://www.reuters.com",
    publishedDate: "2026-05-24",
    importanceScore: 0.83,
    quiz: makeQuiz(
      L(
        "What is a key structural advantage of BYD over Tesla?",
        "BYD가 테슬라 대비 갖는 핵심 구조적 강점은?",
      ),
      [
        L("Vertical integration into batteries", "배터리 수직 통합"),
        L("Bigger US market share", "더 큰 미국 시장 점유율"),
        L("Better autonomous driving", "더 나은 자율주행"),
      ],
      L("Vertical integration into batteries", "배터리 수직 통합"),
    ),
  },
  {
    id: "ev-w1",
    category: "automotive",
    timeWindow: "week",
    title: L(
      "Solid-state battery pilot lines come online at Toyota and Samsung SDI",
      "도요타와 삼성SDI, 전고체 배터리 시범 라인 가동",
    ),
    shortSummary: L(
      "Toyota and Samsung SDI both started small-scale production of solid-state batteries, targeting 2027-28 commercialization.",
      "도요타와 삼성SDI가 전고체 배터리 소규모 양산을 시작하며 2027–28년 상용화를 목표로 합니다.",
    ),
    longExplanation: L(
      "Solid-state cells promise higher energy density and faster charging. Pilot lines indicate the tech has moved from lab to manufacturable.",
      "전고체 셀은 더 높은 에너지 밀도와 빠른 충전을 약속합니다. 시범 라인은 이 기술이 실험실에서 제조 가능 단계로 넘어왔음을 보여줍니다.",
    ),
    whyItMatters: L(
      "If commercialized at scale, solid-state could reset the EV competitive landscape — particularly for premium segments.",
      "대규모 상용화에 성공하면 전고체는 EV 경쟁 지형을 재편할 수 있으며, 특히 프리미엄 세그먼트가 영향권입니다.",
    ),
    backgroundContext: L(
      "Solid-state has been '5 years away' for over a decade. Pilot production is the most concrete signal yet.",
      "전고체는 10년 넘게 '5년 후 상용화'였습니다. 시범 양산은 지금까지 중 가장 구체적인 신호입니다.",
    ),
    industryImpact: L(
      "Anode/cathode material suppliers gain. Existing Li-ion players face long-term obsolescence risk.",
      "양·음극재 공급사가 수혜를 봅니다. 기존 리튬이온 업체는 장기 진부화 위험에 직면합니다.",
    ),
    keyCompanies: ["Toyota", "Samsung SDI", "QuantumScape"],
    keywords: ["solid-state", "battery", "EV"],
    difficulty: "Intermediate",
    readingTime: "5 min",
    sourceName: "Nikkei Asia",
    sourceUrl: "https://asia.nikkei.com",
    publishedDate: "2026-05-20",
    importanceScore: 0.75,
    quiz: makeQuiz(
      L(
        "What's the main benefit of solid-state batteries?",
        "전고체 배터리의 주요 이점은?",
      ),
      [
        L("Higher energy density and faster charging", "더 높은 에너지 밀도와 빠른 충전"),
        L("Lower cost only", "오직 더 낮은 비용"),
        L("Lighter packaging only", "오직 더 가벼운 패키징"),
      ],
      L("Higher energy density and faster charging", "더 높은 에너지 밀도와 빠른 충전"),
    ),
  },
  {
    id: "ev-m1",
    category: "automotive",
    timeWindow: "month",
    title: L(
      "Waymo expands robotaxi service to 10 new US metros",
      "웨이모, 미국 10개 신규 대도시로 로보택시 서비스 확대",
    ),
    shortSummary: L(
      "Waymo announced commercial robotaxi service launching in 10 additional US metros over the next 12 months.",
      "웨이모가 향후 12개월 안에 미국 10개 도시에 추가로 상업용 로보택시 서비스를 출시한다고 발표했습니다.",
    ),
    longExplanation: L(
      "Waymo now operates millions of paid rides monthly. The expansion follows successful pilots and regulatory clearances.",
      "웨이모는 현재 월 수백만 건의 유료 운행을 처리합니다. 이번 확장은 성공적인 파일럿과 규제 승인을 바탕으로 합니다.",
    ),
    whyItMatters: L(
      "Robotaxis are scaling from novelty to real transportation. Unit economics are starting to look viable.",
      "로보택시가 신기함에서 실제 교통수단으로 확장 중입니다. 단위 경제성이 유효해 보이기 시작했습니다.",
    ),
    backgroundContext: L(
      "Waymo has been operating in Phoenix since 2020. SF and LA followed in 2023-24.",
      "웨이모는 2020년부터 피닉스에서 운영해 왔습니다. 샌프란시스코와 LA는 2023–24년에 합류했습니다.",
    ),
    industryImpact: L(
      "Ride-share incumbents (Uber, Lyft) integrate Waymo or face disruption. Auto insurers rewrite policy frameworks.",
      "우버·리프트 등 기존 라이드셰어는 웨이모를 통합하거나 파괴적 변화에 직면합니다. 자동차 보험사는 약관을 다시 씁니다.",
    ),
    keyCompanies: ["Waymo", "Uber", "Tesla"],
    keywords: ["robotaxi", "Waymo", "autonomy"],
    difficulty: "Beginner",
    readingTime: "4 min",
    sourceName: "TechCrunch",
    sourceUrl: "https://techcrunch.com",
    publishedDate: "2026-05-04",
    importanceScore: 0.78,
    quiz: makeQuiz(
      L(
        "What is the main signal from Waymo's expansion?",
        "웨이모 확장의 주된 신호는?",
      ),
      [
        L("Robotaxi unit economics may be viable", "로보택시 단위 경제성이 유효할 수 있음"),
        L("Waymo is exiting the market", "웨이모가 시장에서 철수"),
        L("Regulators have banned it", "규제 당국이 금지"),
      ],
      L("Robotaxi unit economics may be viable", "로보택시 단위 경제성이 유효할 수 있음"),
    ),
  },

  // ============ HEALTHCARE ============
  {
    id: "hc-t1",
    category: "healthcare",
    timeWindow: "today",
    title: L(
      "FDA approves first oral GLP-1 for weight loss",
      "FDA, 첫 경구용 GLP-1 비만 치료제 승인",
    ),
    shortSummary: L(
      "The FDA approved the first oral GLP-1 medication for chronic weight management, removing the injection barrier.",
      "FDA가 만성 체중 관리용 첫 경구 GLP-1 약물을 승인해 주사 장벽을 제거했습니다.",
    ),
    longExplanation: L(
      "The new pill achieved comparable weight loss to injectable peers in late-stage trials. Oral dosing dramatically expands the addressable market.",
      "신규 알약은 후기 임상에서 주사제와 비슷한 체중 감량을 달성했습니다. 경구 투여는 대상 시장을 극적으로 확장합니다.",
    ),
    whyItMatters: L(
      "Obesity drugs are the single largest pharma growth driver this decade. Oral access reshapes adoption curves.",
      "비만 약은 이번 10년간 제약 업계 최대 성장 동인입니다. 경구 접근은 채택 곡선을 재편합니다.",
    ),
    backgroundContext: L(
      "Injectable GLP-1s like semaglutide and tirzepatide created a multi-tens-of-billion-dollar market starting in 2022-23.",
      "세마글루타이드와 티르제파타이드 같은 주사형 GLP-1은 2022–23년부터 수백억 달러 규모의 시장을 만들었습니다.",
    ),
    industryImpact: L(
      "Big upside for the approving sponsor. Pressure on injectable franchises and on food/beverage companies.",
      "승인 보유사는 큰 업사이드를 얻습니다. 주사제 프랜차이즈와 식음료 업체는 압박을 받습니다.",
    ),
    keyCompanies: ["Novo Nordisk", "Eli Lilly", "Pfizer"],
    keywords: ["GLP-1", "obesity", "FDA"],
    difficulty: "Beginner",
    readingTime: "4 min",
    sourceName: "FDA",
    sourceUrl: "https://www.fda.gov",
    publishedDate: "2026-05-24",
    importanceScore: 0.87,
    quiz: makeQuiz(
      L(
        "Why does an oral GLP-1 matter commercially?",
        "경구용 GLP-1이 상업적으로 중요한 이유는?",
      ),
      [
        L("It removes the injection barrier and expands the market", "주사 장벽을 없애고 시장을 확장하기 때문"),
        L("It is cheaper to manufacture only", "단지 제조 비용이 더 싸기 때문"),
        L("It works without diet", "식이요법 없이 효과가 있기 때문"),
      ],
      L("It removes the injection barrier and expands the market", "주사 장벽을 없애고 시장을 확장하기 때문"),
    ),
  },
  {
    id: "hc-w1",
    category: "healthcare",
    timeWindow: "week",
    title: L(
      "CRISPR sickle-cell therapy hits 1,000 patient milestone",
      "CRISPR 겸상적혈구 치료제, 환자 1,000명 돌파",
    ),
    shortSummary: L(
      "The first commercial CRISPR therapy has now treated over 1,000 sickle-cell patients globally with durable responses.",
      "최초의 상용 CRISPR 치료제가 전 세계 1,000명 이상의 겸상적혈구 환자를 치료했으며 반응이 지속되고 있습니다.",
    ),
    longExplanation: L(
      "The therapy is essentially curative for eligible patients. Manufacturing and reimbursement remain bottlenecks.",
      "적격 환자에게는 사실상 완치적 효과를 보입니다. 제조와 보험 환급은 여전히 병목입니다.",
    ),
    whyItMatters: L(
      "Gene editing is moving from proof of concept to standard of care in inherited disorders.",
      "유전자 편집이 유전 질환에서 개념 증명을 넘어 표준 치료로 이동하고 있습니다.",
    ),
    backgroundContext: L(
      "The therapy was approved in late 2023. Scaling has been gradual due to apheresis and conditioning requirements.",
      "이 치료제는 2023년 말에 승인됐습니다. 성분채집과 전처리 요건 때문에 확장이 점진적이었습니다.",
    ),
    industryImpact: L(
      "Validates the broader gene-editing pipeline. Insurers experiment with outcome-based payment.",
      "더 광범위한 유전자 편집 파이프라인을 입증합니다. 보험사들은 성과 기반 지불 방식을 시험합니다.",
    ),
    keyCompanies: ["Vertex Pharmaceuticals", "CRISPR Therapeutics"],
    keywords: ["CRISPR", "gene therapy", "sickle cell"],
    difficulty: "Intermediate",
    readingTime: "5 min",
    sourceName: "NEJM",
    sourceUrl: "https://www.nejm.org",
    publishedDate: "2026-05-19",
    importanceScore: 0.8,
    quiz: makeQuiz(
      L(
        "What is the main bottleneck for scaling the CRISPR sickle-cell therapy?",
        "CRISPR 겸상적혈구 치료제 확장의 주요 병목은?",
      ),
      [
        L("Manufacturing and reimbursement", "제조와 보험 환급"),
        L("Patient demand", "환자 수요"),
        L("Regulatory bans", "규제 금지"),
      ],
      L("Manufacturing and reimbursement", "제조와 보험 환급"),
    ),
  },
  {
    id: "hc-m1",
    category: "healthcare",
    timeWindow: "month",
    title: L(
      "US health system M&A rebounds as systems chase scale",
      "규모 추구 속에 미국 의료 시스템 M&A 반등",
    ),
    shortSummary: L(
      "Hospital and physician-group consolidation accelerated this month after a slow 2024-25 antitrust environment.",
      "2024–25년의 둔화된 반독점 환경 이후 이번 달 병원·의사 그룹 통합이 가속됐습니다.",
    ),
    longExplanation: L(
      "Larger systems argue they need scale to negotiate with payers and invest in tech. Antitrust scrutiny remains, but several large deals cleared.",
      "대형 시스템들은 지불자와 협상하고 기술에 투자하기 위해 규모가 필요하다고 주장합니다. 반독점 심사는 여전하지만 여러 대형 거래가 통과됐습니다.",
    ),
    whyItMatters: L(
      "Consolidation reshapes local healthcare economics and reimbursement dynamics.",
      "통합은 지역 의료 경제와 환급 역학을 재편합니다.",
    ),
    backgroundContext: L(
      "US health systems have been consolidating for decades. The pace slowed under tougher FTC review in 2023-25.",
      "미국 의료 시스템은 수십 년간 통합돼 왔습니다. 2023–25년 강화된 FTC 심사에서 속도가 느려졌습니다.",
    ),
    industryImpact: L(
      "Big winners: large IDNs. Independent practices feel pressure to sell.",
      "최대 수혜자는 대형 IDN입니다. 독립 진료소는 매각 압박을 받습니다.",
    ),
    keyCompanies: ["HCA", "Ascension", "UnitedHealth"],
    keywords: ["M&A", "hospitals", "consolidation"],
    difficulty: "Intermediate",
    readingTime: "5 min",
    sourceName: "Modern Healthcare",
    sourceUrl: "https://www.modernhealthcare.com",
    publishedDate: "2026-05-01",
    importanceScore: 0.71,
    quiz: makeQuiz(
      L(
        "What is the main rationale large systems give for consolidation?",
        "대형 시스템들이 통합을 정당화하는 주된 근거는?",
      ),
      [
        L("Scale for negotiation and tech investment", "협상력과 기술 투자를 위한 규모"),
        L("Closing more hospitals", "더 많은 병원 폐쇄"),
        L("Cutting research budgets", "연구 예산 삭감"),
      ],
      L("Scale for negotiation and tech investment", "협상력과 기술 투자를 위한 규모"),
    ),
  },

  // ============ ENERGY ============
  {
    id: "en-t1",
    category: "energy",
    timeWindow: "today",
    title: L(
      "Global solar PV installations on pace for 700 GW in 2026",
      "2026년 글로벌 태양광 설치, 700GW 페이스",
    ),
    shortSummary: L(
      "BloombergNEF raised its 2026 solar PV install forecast to roughly 700 GW, driven by China and falling module prices.",
      "BloombergNEF가 중국과 모듈 가격 하락에 힘입어 2026년 태양광 설치 전망치를 약 700GW로 상향했습니다.",
    ),
    longExplanation: L(
      "Module prices remain near record lows. China dominates manufacturing and is also the largest installer, but US/EU growth is robust.",
      "모듈 가격은 사상 최저 수준에 머물러 있습니다. 중국은 제조와 설치 모두 최대 시장이며, 미국·EU도 견조한 성장세입니다.",
    ),
    whyItMatters: L(
      "Solar is now the cheapest new generation almost everywhere. The energy transition runs on PV economics.",
      "이제 태양광은 거의 모든 곳에서 가장 저렴한 신규 발전원입니다. 에너지 전환은 태양광 경제성 위에서 굴러갑니다.",
    ),
    backgroundContext: L(
      "Installs were ~150 GW in 2021. A near-5x increase in five years is one of the fastest scale-ups in industrial history.",
      "2021년 설치량은 약 150GW였습니다. 5년 만의 약 5배 증가는 산업사에서 가장 빠른 확장 중 하나입니다.",
    ),
    industryImpact: L(
      "Module pricing remains tough for manufacturers. Inverter, tracker, and grid-equipment vendors benefit.",
      "모듈 가격은 제조사에 가혹합니다. 인버터·트래커·전력망 장비 업체가 수혜를 봅니다.",
    ),
    keyCompanies: ["LONGi", "Trina", "First Solar", "Enphase"],
    keywords: ["solar", "PV", "BNEF", "renewables"],
    difficulty: "Beginner",
    readingTime: "4 min",
    sourceName: "BloombergNEF",
    sourceUrl: "https://about.bnef.com",
    publishedDate: "2026-05-24",
    importanceScore: 0.78,
    quiz: makeQuiz(
      L(
        "Why is solar growing so fast?",
        "태양광이 그토록 빠르게 성장하는 이유는?",
      ),
      [
        L("It is the cheapest new generation in most markets", "대부분 시장에서 가장 저렴한 신규 발전원이라서"),
        L("It is mandated globally", "전 세계적으로 의무화돼서"),
        L("It requires no land", "토지가 필요 없어서"),
      ],
      L("It is the cheapest new generation in most markets", "대부분 시장에서 가장 저렴한 신규 발전원이라서"),
    ),
  },
  {
    id: "en-w1",
    category: "energy",
    timeWindow: "week",
    title: L(
      "First commercial offshore wind in US Mid-Atlantic energized",
      "미국 중대서양 지역 첫 상업용 해상풍력, 송전 개시",
    ),
    shortSummary: L(
      "The first large-scale commercial offshore wind farm in the US Mid-Atlantic delivered first power to the grid.",
      "미국 중대서양 지역 최초의 대형 상업 해상풍력 단지가 전력망에 첫 송전을 시작했습니다.",
    ),
    longExplanation: L(
      "After years of delays, the project marks a milestone for a sector that has struggled with rising costs and supply-chain issues.",
      "수년의 지연 끝에 이 프로젝트는 비용 상승과 공급망 문제에 시달려 온 섹터의 이정표가 됩니다.",
    ),
    whyItMatters: L(
      "Offshore wind is a key piece of state-level clean-energy targets. Real megawatts on the grid validate the policy push.",
      "해상풍력은 주(州) 단위 청정에너지 목표의 핵심 조각입니다. 실제 송전된 메가와트는 정책 추진을 입증합니다.",
    ),
    backgroundContext: L(
      "Several US offshore projects were cancelled or repriced in 2023-24. The remaining ones serve as bellwethers.",
      "미국 해상풍력 프로젝트 일부는 2023–24년에 취소되거나 재가격됐습니다. 남은 프로젝트들은 풍향계 역할을 합니다.",
    ),
    industryImpact: L(
      "Validates Tier 1 OEMs and offshore EPC contractors. Encourages re-bidding of paused projects.",
      "Tier 1 OEM과 해상 EPC 업체를 입증합니다. 보류된 프로젝트의 재입찰을 촉진합니다.",
    ),
    keyCompanies: ["Ørsted", "Equinor", "Avangrid"],
    keywords: ["offshore wind", "renewables", "grid"],
    difficulty: "Intermediate",
    readingTime: "5 min",
    sourceName: "Reuters",
    sourceUrl: "https://www.reuters.com",
    publishedDate: "2026-05-19",
    importanceScore: 0.7,
    quiz: makeQuiz(
      L(
        "Why is this offshore wind milestone significant?",
        "이번 해상풍력 이정표가 중요한 이유는?",
      ),
      [
        L("It validates US offshore wind after recent cancellations", "최근 취소 이후 미국 해상풍력을 재입증"),
        L("It replaces all coal in the region", "지역의 모든 석탄을 대체"),
        L("It eliminates grid congestion", "전력망 혼잡을 제거"),
      ],
      L("It validates US offshore wind after recent cancellations", "최근 취소 이후 미국 해상풍력을 재입증"),
    ),
  },
  {
    id: "en-m1",
    category: "energy",
    timeWindow: "month",
    title: L(
      "Grid-scale battery storage installs cross 200 GWh annually",
      "그리드 규모 배터리 저장, 연 200GWh 돌파",
    ),
    shortSummary: L(
      "Global grid-scale battery installations crossed a 200 GWh annual run rate, doubling in under two years.",
      "글로벌 그리드 규모 배터리 설치가 연 200GWh를 넘어, 2년도 안 돼 두 배가 됐습니다.",
    ),
    longExplanation: L(
      "Falling cell prices and growing renewable penetration are pushing utilities to deploy storage at unprecedented rates. China and the US lead.",
      "셀 가격 하락과 재생에너지 보급 확대로 유틸리티들이 전례 없는 속도로 저장장치를 배치하고 있습니다. 중국과 미국이 선도합니다.",
    ),
    whyItMatters: L(
      "Storage is the missing piece that lets renewables scale beyond 50% grid share without reliability issues.",
      "저장장치는 재생에너지가 신뢰성 문제 없이 전력망 비중 50% 이상으로 확장하게 해주는 빠진 조각입니다.",
    ),
    backgroundContext: L(
      "Storage was a niche pre-2020. Tesla Megapack and Chinese suppliers drove a manufacturing scale-up.",
      "저장장치는 2020년 이전엔 틈새였습니다. 테슬라 메가팩과 중국 공급사들이 제조 확장을 견인했습니다.",
    ),
    industryImpact: L(
      "Battery cell oversupply persists, helping integrators. New revenue stacks (arbitrage, ancillary services) emerge.",
      "배터리 셀 공급 과잉이 지속돼 통합 업체에 도움이 됩니다. 차익거래·보조 서비스 등 새로운 수익원이 등장합니다.",
    ),
    keyCompanies: ["Tesla", "CATL", "Fluence", "BYD"],
    keywords: ["storage", "battery", "grid"],
    difficulty: "Intermediate",
    readingTime: "5 min",
    sourceName: "Wood Mackenzie",
    sourceUrl: "https://www.woodmac.com",
    publishedDate: "2026-04-30",
    importanceScore: 0.76,
    quiz: makeQuiz(
      L(
        "Why does grid-scale storage matter for renewables?",
        "그리드 규모 저장이 재생에너지에 중요한 이유는?",
      ),
      [
        L("It enables higher renewable penetration without reliability issues", "신뢰성 문제 없이 재생에너지 비중 확대를 가능케 함"),
        L("It increases coal use", "석탄 사용을 늘림"),
        L("It bypasses the need for transmission lines", "송전선 필요를 우회"),
      ],
      L("It enables higher renewable penetration without reliability issues", "신뢰성 문제 없이 재생에너지 비중 확대를 가능케 함"),
    ),
  },
];

// ---------------------------------------------------------------------------
// Prior-period mock data — one short item per category, so the
// "Yesterday / Last Week / Last Month" toggle is never empty.
// ---------------------------------------------------------------------------

const makePrior = (
  id: string,
  category: Briefing["category"],
  timeWindow: TimeWindow,
  title: Localized,
  short: Localized,
  long: Localized,
  why: Localized,
): Briefing => ({
  id,
  category,
  timeWindow,
  title,
  shortSummary: short,
  longExplanation: long,
  whyItMatters: why,
  backgroundContext: L(
    "This briefing was the top story from the prior period and is preserved for context and comparison.",
    "이 브리핑은 직전 기간의 최상위 기사이며, 맥락과 비교를 위해 보존됩니다.",
  ),
  industryImpact: L(
    "Use this to see how this period's developments build on (or diverge from) the prior period's narrative.",
    "이번 기간의 흐름이 직전 기간의 서사를 어떻게 잇거나 벗어나는지 확인해 보세요.",
  ),
  keyCompanies: [],
  keywords: ["recap", category],
  difficulty: "Beginner",
  readingTime: "2 min",
  sourceName: "TrendLingo Recap",
  sourceUrl: "#",
  publishedDate: "2026-05-20",
  importanceScore: 0.5,
  quiz: {
    question: L("What kind of briefing is this?", "이 브리핑은 어떤 종류입니까?"),
    options: [
      L("A live news alert", "실시간 뉴스 알림"),
      L("A prior-period recap", "직전 기간 요약"),
      L("An ad", "광고"),
    ],
    correctAnswer: L("A prior-period recap", "직전 기간 요약"),
  },
});

const PRIOR_BRIEFINGS: Briefing[] = [
  makePrior("ai-y1", "ai", "yesterday",
    L("OpenAI publishes safety eval results for agent mode", "OpenAI, 에이전트 모드 안전 평가 결과 공개"),
    L("Ahead of today's rollout, OpenAI shared red-team results on its long-horizon agent.", "오늘 출시에 앞서 OpenAI가 장시간 작동 에이전트에 대한 레드팀 결과를 공유했습니다."),
    L("Yesterday's release covered jailbreak resistance, tool misuse, and audit-log completeness — setting expectations for today's enterprise launch.", "어제 공개는 탈옥 저항성·도구 오남용·감사 로그 완전성을 다뤘으며, 오늘 기업용 출시에 대한 기대치를 설정했습니다."),
    L("Safety evals are how labs preempt regulator and enterprise-buyer questions.", "안전 평가는 연구소가 규제 당국과 기업 구매자의 질문을 선제 대응하는 방식입니다.")),
  makePrior("ai-lw1", "ai", "lastWeek",
    L("Claude 4.5 ships with longer context and tool-use upgrades", "Claude 4.5, 더 긴 컨텍스트와 도구 사용 개선과 함께 출시"),
    L("Anthropic shipped Claude 4.5 last week with a 2M-token context and better tool routing.", "Anthropic이 지난주 200만 토큰 컨텍스트와 개선된 도구 라우팅의 Claude 4.5를 출시했습니다."),
    L("The release closed a feature gap on context length and made tool selection more reliable, setting up this week's frontier-lab comparisons.", "이번 출시는 컨텍스트 길이 격차를 좁히고 도구 선택을 더 안정적으로 만들어, 이번 주 프런티어 연구소 비교의 무대를 만들었습니다."),
    L("Context length compounds — agents can reason over entire codebases or document sets in one pass.", "컨텍스트 길이는 복리로 작용합니다 — 에이전트가 전체 코드베이스나 문서 묶음을 한 번에 추론할 수 있게 됩니다.")),
  makePrior("ai-lm1", "ai", "lastMonth",
    L("AI agents cross 50% on a public office-work benchmark", "AI 에이전트, 공개 사무 업무 벤치마크에서 50% 돌파"),
    L("Last month, agents broke 50% completion on a real-world office benchmark.", "지난달 에이전트들이 실제 사무 업무 벤치마크에서 완료율 50%를 돌파했습니다."),
    L("It's the first time an open evaluation showed agents finishing the majority of standard office tasks unsupervised — context for this month's capex acceleration.", "공개 평가에서 에이전트가 표준 사무 업무 다수를 감독 없이 마친 첫 사례로, 이번 달 자본지출 가속의 배경입니다."),
    L("It is the data point that justified another leg of hyperscaler spend.", "하이퍼스케일러 지출의 또 다른 단계를 정당화한 데이터 포인트입니다.")),

  makePrior("sc-y1", "semiconductors", "yesterday",
    L("TSMC raises 2026 capex guidance ahead of N2 launch", "TSMC, N2 출시 앞두고 2026 자본지출 가이던스 상향"),
    L("TSMC pre-announced higher capex, setting up today's N2 ramp news.", "TSMC가 자본지출 상향을 사전 발표하며 오늘의 N2 양산 소식을 예고했습니다."),
    L("Yesterday's guidance increase signaled confidence in early-N2 demand and front-loaded equipment orders.", "어제 가이던스 상향은 초기 N2 수요에 대한 자신감과 장비 주문 선반영을 시사했습니다."),
    L("Capex guidance is the cleanest leading indicator for the entire equipment supply chain.", "자본지출 가이던스는 전체 장비 공급망의 가장 깨끗한 선행 지표입니다.")),
  makePrior("sc-lw1", "semiconductors", "lastWeek",
    L("SK hynix sells out HBM4 capacity through 2027", "SK하이닉스, 2027년까지 HBM4 캐파 매진"),
    L("Last week SK hynix confirmed full sell-out of HBM4 capacity.", "지난주 SK하이닉스가 HBM4 캐파 완전 매진을 확인했습니다."),
    L("HBM remains the tightest AI-chip input. Last week's allocation news set the stage for today's export-control move.", "HBM은 여전히 AI 칩에서 가장 빡빡한 입력재입니다. 지난주 물량 배정 소식이 오늘의 수출 통제 조치 무대를 만들었습니다."),
    L("When supply is sold out years ahead, regulation becomes the next lever buyers and governments pull.", "수년치 공급이 매진되면, 규제가 구매자와 정부가 당기는 다음 레버가 됩니다.")),
  makePrior("sc-lm1", "semiconductors", "lastMonth",
    L("Nvidia Blackwell Ultra hits full production", "엔비디아 블랙웰 울트라, 완전 양산 도달"),
    L("Last month Blackwell Ultra reached steady-state volume — context for this month's Rubin tease.", "지난달 블랙웰 울트라가 정상 양산에 도달했으며, 이번 달 루빈 예고의 배경입니다."),
    L("It freed Nvidia to talk about the next platform without spooking buyers of the current one.", "현 플랫폼 구매자를 놀라게 하지 않으면서 다음 플랫폼을 이야기할 수 있게 됐습니다."),
    L("Product transitions are choreographed: prior-gen has to be 'safe' before next-gen marketing begins.", "제품 전환은 안무처럼 짜여 있습니다 — 차세대 마케팅이 시작되기 전 전 세대가 '안전' 단계여야 합니다.")),

  makePrior("st-y1", "stocks", "yesterday",
    L("Yesterday's PPI hints at today's CPI surprise", "어제의 PPI가 오늘의 CPI 서프라이즈를 시사"),
    L("Producer prices surprised to the downside yesterday, foreshadowing today's softer CPI.", "어제 생산자물가가 하방 서프라이즈를 내며 오늘의 둔화된 CPI를 예고했습니다."),
    L("PPI often leads CPI by a day. Traders who read the signal positioned ahead of today's rally.", "PPI는 종종 CPI보다 하루 앞섭니다. 신호를 읽은 트레이더들은 오늘 랠리 전에 포지션을 잡았습니다."),
    L("Sequencing of macro prints matters as much as the prints themselves.", "매크로 지표의 발표 순서는 지표 자체만큼이나 중요합니다.")),
  makePrior("st-lw1", "stocks", "lastWeek",
    L("Mag-7 earnings season wraps with mixed reads", "Mag-7 실적 시즌, 엇갈린 결과로 마무리"),
    L("Mega-cap tech earnings finished mixed last week — guidance gaps set up this week's volatility.", "지난주 메가캡 테크 실적이 엇갈리며 마무리됐고, 가이던스 격차가 이번 주 변동성을 만들었습니다."),
    L("Aggregate AI capex commentary was strong, but per-name margin guides diverged.", "AI 자본지출 코멘트는 합계 기준 강했지만 종목별 마진 가이드는 엇갈렸습니다."),
    L("Index-level optimism can mask growing dispersion under the surface.", "지수 단위의 낙관론은 수면 아래에서 커지는 분산을 가릴 수 있습니다.")),
  makePrior("st-lm1", "stocks", "lastMonth",
    L("BOJ signals patience, kicking off Japan's run", "BOJ 인내 시사, 일본 증시 랠리 점화"),
    L("The BOJ's patience signal last month is why Japan kept grinding higher this month.", "지난달 BOJ의 인내 신호가 이번 달 일본이 계속 상승한 이유입니다."),
    L("It anchored expectations for an extended weak-yen, equity-positive backdrop.", "장기 약엔·주식 우호 환경에 대한 기대를 고정시켰습니다."),
    L("Central-bank guidance changes the discount rate every asset is priced against.", "중앙은행 가이던스는 모든 자산이 가격 매겨지는 할인율을 바꿉니다.")),

  makePrior("auto-y1", "automotive", "yesterday",
    L("EV price war intensifies in China", "중국 전기차 가격 전쟁 격화"),
    L("Chinese EV makers cut prices again yesterday, pressuring global incumbents.", "중국 EV 업체들이 어제 다시 가격을 인하해 글로벌 기존 업체들을 압박했습니다."),
    L("BYD and rivals trimmed sticker prices and added incentives, squeezing margins across the sector.", "BYD와 경쟁사들이 권장가를 낮추고 인센티브를 추가해 섹터 전반의 마진을 짜냅니다."),
    L("Auto pricing in China sets the global ceiling for EV margins.", "중국의 자동차 가격이 글로벌 EV 마진의 상한을 결정합니다.")),
  makePrior("auto-lw1", "automotive", "lastWeek",
    L("Self-driving rideshare crosses 10M paid trips", "자율주행 라이드셰어, 누적 유료 운행 1,000만 건 돌파"),
    L("Robotaxi services reported a milestone in trip volume last week.", "지난주 로보택시 서비스가 운행량 이정표를 보고했습니다."),
    L("Volume growth proves the unit economics work in at least a handful of cities.", "운행량 증가는 최소 몇 개 도시에서 단위 경제성이 작동함을 증명합니다."),
    L("It validates the model for cautious capital — expect more launch cities next.", "보수적 자본에게 모델을 입증합니다 — 다음에는 더 많은 출시 도시가 예상됩니다.")),
  makePrior("auto-lm1", "automotive", "lastMonth",
    L("Solid-state battery pilot lines come online", "전고체 배터리 시범 라인 가동"),
    L("Two OEMs brought solid-state pilot lines online last month.", "지난달 두 OEM이 전고체 시범 라인을 가동했습니다."),
    L("Pilot-line news matters more than lab results because it commits real capex.", "시범 라인 뉴스는 실제 자본지출을 약속하기 때문에 실험실 결과보다 중요합니다."),
    L("Battery chemistry is the single biggest cost lever in EVs for the next decade.", "배터리 화학은 향후 10년 EV에서 가장 큰 비용 레버입니다.")),

  makePrior("health-y1", "healthcare", "yesterday",
    L("FDA accepts BLA for novel obesity dual-agonist", "FDA, 신규 비만 이중작용제 BLA 접수"),
    L("The FDA accepted a Biologics License Application for a next-gen obesity drug yesterday.", "어제 FDA가 차세대 비만 약물의 BLA를 접수했습니다."),
    L("Acceptance starts the review clock — a near-term catalyst the market priced in immediately.", "접수는 심사 시계를 가동시킵니다 — 시장이 즉시 반영한 단기 촉매입니다."),
    L("BLA acceptance is procedural but information-rich; the market treats it as a real catalyst.", "BLA 접수는 절차적이지만 정보량이 많아 시장은 실질 촉매로 다룹니다.")),
  makePrior("health-lw1", "healthcare", "lastWeek",
    L("GLP-1 supply finally meets demand in the US", "미국에서 GLP-1 공급, 마침내 수요와 맞물림"),
    L("Manufacturing scale-ups closed the GLP-1 shortage last week.", "지난주 제조 확장으로 GLP-1 부족이 해소됐습니다."),
    L("Pricing power may finally normalize as on-shelf supply becomes routine.", "매대 공급이 일상화되면서 가격 결정력이 비로소 정상화될 수 있습니다."),
    L("Shortages distort revenue and margin — normalization resets the baseline.", "부족은 매출과 마진을 왜곡합니다 — 정상화는 기준선을 재설정합니다.")),
  makePrior("health-lm1", "healthcare", "lastMonth",
    L("First CRISPR therapy hits commercial milestone", "최초 CRISPR 치료제, 상업 이정표 달성"),
    L("A first-wave CRISPR therapy passed a meaningful commercial milestone last month.", "지난달 1세대 CRISPR 치료제가 의미 있는 상업적 이정표를 통과했습니다."),
    L("It is the first proof that gene-editing economics can clear regulatory and payer hurdles.", "유전자 편집 경제성이 규제와 지불자 장벽을 통과할 수 있다는 첫 증거입니다."),
    L("The 'will payers pay?' question is finally getting answered.", "'지불자가 지불할 것인가?'라는 질문에 마침내 답이 나오고 있습니다.")),

  makePrior("energy-y1", "energy", "yesterday",
    L("OPEC+ holds production unchanged", "OPEC+, 생산량 동결"),
    L("OPEC+ left production targets unchanged yesterday, keeping oil rangebound.", "어제 OPEC+가 생산 목표를 유지해 유가를 박스권에 묶었습니다."),
    L("A no-news decision is itself a signal: the cartel is comfortable at current price levels.", "무뉴스 결정 자체가 신호입니다 — 카르텔이 현 가격 수준에 만족한다는 뜻입니다."),
    L("Inaction maintains the floor under prices without spiking them.", "행동하지 않음으로써 가격을 끌어올리지 않고 바닥만 유지합니다.")),
  makePrior("energy-lw1", "energy", "lastWeek",
    L("US grid sets new summer peak record", "미국 전력망, 여름 피크 신기록"),
    L("Multiple US ISOs reported new peak loads last week, driven by data centers and heat.", "지난주 미국 다수 ISO가 데이터센터와 폭염에 의한 신규 피크 부하를 보고했습니다."),
    L("Peak records compress reserve margins and accelerate the case for new capacity.", "피크 신기록은 예비율을 압축하고 신규 용량 도입 명분을 가속합니다."),
    L("Demand growth, not just generation mix, is now the binding story for the grid.", "이제 전력망의 결정적 화두는 발전 믹스만이 아니라 수요 증가입니다.")),
  makePrior("energy-lm1", "energy", "lastMonth",
    L("Long-duration storage projects break ground", "장기 지속 저장 프로젝트, 착공"),
    L("Last month saw multiple long-duration storage projects move from FID to construction.", "지난달 다수의 장기 지속 저장 프로젝트가 최종 투자 결정에서 건설 단계로 이동했습니다."),
    L("Long-duration storage is the missing piece for high-renewable grids.", "장기 지속 저장은 고비중 재생에너지 전력망의 빠진 조각입니다."),
    L("Once construction starts, learning curves and supply chains begin to form.", "건설이 시작되면 학습 곡선과 공급망이 형성되기 시작합니다.")),
];

// Per-difficulty rewrites for a handful of flagship briefings. Other briefings
// fall back to base text; the modal surfaces a notice in that case.
const LEVEL_OVERRIDES: Record<string, Briefing["levels"]> = {
  "ai-t1": {
    beginner: {
      longExplanation: L(
        "Imagine asking an assistant to 'plan our team offsite' and walking away. It searches for venues, drafts the agenda, and emails vendors — by itself. That's 'agent mode': it breaks one big request into many small steps and does them on its own. Today's update lets large companies use it with proper safety controls.",
        "비서에게 '우리 팀 워크숍 기획해줘'라고 하고 자리를 떠난다고 상상해 보세요. 비서가 알아서 장소를 찾고, 일정을 짜고, 업체에 이메일을 보냅니다. 그것이 '에이전트 모드'입니다 — 큰 요청 하나를 작은 단계 여러 개로 쪼개 스스로 처리합니다. 오늘 업데이트로 대기업이 적절한 안전 통제와 함께 이 기능을 쓸 수 있게 됐습니다.",
      ),
      whyItMatters: L(
        "Most office work is a series of small steps. If AI can chain them together reliably, a task that took half a day can now be triggered with one sentence.",
        "대부분의 사무 업무는 작은 단계의 연속입니다. AI가 이 단계들을 안정적으로 이어붙일 수 있다면, 반나절 걸리던 일을 문장 하나로 시작할 수 있습니다.",
      ),
    },
    advanced: {
      longExplanation: L(
        "Agent mode exposes a planner-executor loop with tool routing, persistent memory, and audit hooks. Today's enterprise GA tier adds per-tool RBAC, signed audit logs streamed to the customer's SIEM, and per-run budget caps — the missing controls that previously blocked production use beyond pilots.",
        "에이전트 모드는 도구 라우팅·영구 메모리·감사 훅을 갖춘 플래너-실행자 루프를 노출합니다. 오늘 기업용 GA 등급은 도구별 RBAC, 고객 SIEM으로 스트리밍되는 서명된 감사 로그, 실행당 예산 상한을 추가합니다 — 이전에 파일럿 이상의 프로덕션 사용을 막던 빠진 통제 요소들입니다.",
      ),
      whyItMatters: L(
        "The unit of automation shifts from prompt to multi-hour workflow. Vendors whose value proposition is workflow orchestration face direct substitution risk on a 12–18 month horizon.",
        "자동화 단위가 프롬프트에서 멀티시간 워크플로우로 이동합니다. 워크플로우 오케스트레이션을 가치 제안으로 삼는 벤더는 12–18개월 시계 안에서 직접적 대체 위험에 직면합니다.",
      ),
    },
  },
  "sc-t1": {
    beginner: {
      longExplanation: L(
        "Transistors are the tiny on/off switches inside every chip. To pack more in, the industry keeps redesigning them. TSMC's new '2nm' process uses a new switch design (called gate-all-around) so chips in next year's iPhones and AI servers can be faster and use less power.",
        "트랜지스터는 모든 칩 안에 들어있는 작은 켜짐/꺼짐 스위치입니다. 더 많이 넣으려고 업계는 계속 새 설계를 합니다. TSMC의 새 '2nm' 공정은 '게이트 올 어라운드'라는 새 스위치 설계를 써서, 내년 아이폰과 AI 서버 칩이 더 빠르고 전력은 덜 쓰게 만듭니다.",
      ),
    },
    advanced: {
      longExplanation: L(
        "N2 transitions from FinFET to nanosheet GAA, improving electrostatic control and enabling Vt tuning via sheet width. Early defect density is reportedly tracking ahead of N3 at the equivalent ramp point. Apple holds lead-customer status; HPC tape-outs (Nvidia Rubin, AMD MI400) follow in H2 with CoWoS-L packaging.",
        "N2는 FinFET에서 나노시트 GAA로 전환되어 전기 정전 제어를 개선하고 시트 폭을 통한 Vt 조정을 가능케 합니다. 초기 결함 밀도는 동등 양산 시점의 N3보다 앞선다고 보고됩니다. 애플이 리드 고객 지위를 보유하며, HPC 테이프아웃(엔비디아 루빈, AMD MI400)은 하반기 CoWoS-L 패키징으로 뒤따릅니다.",
      ),
    },
  },
  "st-t1": {
    beginner: {
      longExplanation: L(
        "Inflation came in lower than expected. When inflation cools, the Federal Reserve usually lowers interest rates. Lower rates make stocks more attractive than savings accounts and bonds, so investors bought today.",
        "인플레이션이 예상보다 낮게 나왔습니다. 인플레이션이 식으면 연준은 보통 금리를 내립니다. 금리가 낮아지면 예금이나 채권보다 주식이 매력적이 되므로 오늘 투자자들이 매수에 나섰습니다.",
      ),
      whyItMatters: L(
        "Inflation is the single biggest thing investors watch. Even a small surprise can move the entire market.",
        "인플레이션은 투자자들이 가장 주시하는 단일 지표입니다. 작은 서프라이즈만으로도 시장 전체가 움직일 수 있습니다.",
      ),
    },
    advanced: {
      longExplanation: L(
        "Headline CPI printed 2.3% YoY vs 2.5% consensus; core moderated on softer shelter and services ex-energy. Fed funds futures repriced from 1 cut to 2 cuts by year-end, with the first cut now ~70% by September. Curve bull-steepened: 2s richened 12bp, 10s 6bp, lifting long-duration equities (XLK, semis) into the close.",
        "헤드라인 CPI는 전년 대비 2.3%로 컨센서스 2.5%를 하회했으며, 근원 지표는 주거비와 에너지 제외 서비스가 둔화되며 함께 약해졌습니다. 연방기금금리 선물은 연말까지 인하 횟수를 1회에서 2회로 재가격했으며, 9월까지 첫 인하 확률이 약 70%로 반영됐습니다. 커브는 불 스티프닝됐고(2년물 12bp, 10년물 6bp 강세), 장기 듀레이션 주식(XLK, 반도체)이 종가까지 끌어올려졌습니다.",
      ),
    },
  },
};

for (const b of BRIEFINGS) {
  if (LEVEL_OVERRIDES[b.id]) {
    b.levels = LEVEL_OVERRIDES[b.id];
  }
}

BRIEFINGS.push(...PRIOR_BRIEFINGS);

// ---------------------------------------------------------------------------
// Helpers (also act as placeholders for future real-API integration)
// ---------------------------------------------------------------------------

export function getBriefingsForCategory(
  category: string,
  timeWindow: TimeWindow,
) {
  return BRIEFINGS.filter(
    (b) => b.category === category && b.timeWindow === timeWindow,
  )
    .slice()
    .sort((a, b) => b.importanceScore - a.importanceScore)
    .slice(0, 3);
}

export function getBriefingById(id: string) {
  return BRIEFINGS.find((b) => b.id === id);
}

// Future: replace with live news/LLM pipeline.
export async function fetchNewsByCategory(_category: string) {
  return [];
}

export function rankArticlesByImportance<T extends { importanceScore: number }>(
  items: T[],
) {
  return [...items].sort((a, b) => b.importanceScore - a.importanceScore);
}

// Future LLM hooks — now aware of reading level and language.
export async function summarizeWithLLM(
  _rawText: string,
  _opts?: { level?: "beginner" | "intermediate" | "advanced"; lang?: "en" | "ko" },
) {
  return "";
}

export async function generateQuizFromBriefing(
  _b: unknown,
  _opts?: { level?: "beginner" | "intermediate" | "advanced"; lang?: "en" | "ko" },
) {
  return null;
}
