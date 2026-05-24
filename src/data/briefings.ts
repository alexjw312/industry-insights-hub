import type { Briefing, CategoryMeta, TimeWindow } from "@/types";

export const CATEGORIES: CategoryMeta[] = [
  {
    slug: "ai",
    name: "AI",
    description: "Foundation models, agents, and AI policy moves.",
    icon: "Sparkles",
    accent: "primary",
    colorToken: "category-ai",
  },
  {
    slug: "semiconductors",
    name: "Semiconductors",
    description: "Chips, fabs, EUV, and the silicon supply chain.",
    icon: "Cpu",
    accent: "accent",
    colorToken: "category-semi",
  },
  {
    slug: "stocks",
    name: "Stocks & Investing",
    description: "Markets, earnings, and macro that move portfolios.",
    icon: "TrendingUp",
    accent: "primary",
    colorToken: "category-stocks",
  },
  {
    slug: "automotive",
    name: "Automotive / EV",
    description: "EVs, autonomy, and the future of mobility.",
    icon: "Car",
    accent: "accent",
    colorToken: "category-auto",
  },
  {
    slug: "healthcare",
    name: "Healthcare",
    description: "Biotech, drug approvals, and health systems.",
    icon: "Stethoscope",
    accent: "primary",
    colorToken: "category-health",
  },
  {
    slug: "energy",
    name: "Energy",
    description: "Oil, renewables, grids, and the energy transition.",
    icon: "Zap",
    accent: "accent",
    colorToken: "category-energy",
  },
];

// ---------------------------------------------------------------------------
// Mock briefings. Realistic structure so it can be swapped for live data later.
// ---------------------------------------------------------------------------

const makeQuiz = (q: string, opts: string[], correct: string) => ({
  question: q,
  options: opts,
  correctAnswer: correct,
});

export const BRIEFINGS: Briefing[] = [
  // ============ AI — TODAY ============
  {
    id: "ai-t1",
    category: "ai",
    timeWindow: "today",
    title: "OpenAI rolls out long-horizon agent mode to enterprise tier",
    shortSummary:
      "OpenAI expanded its multi-step 'agent mode' to enterprise customers, letting models plan and execute tasks across tools for hours.",
    longExplanation:
      "Agent mode lets a single model break a request like 'plan our quarterly offsite' into many sub-steps — searching the web, drafting docs, calling APIs — and run them autonomously. Today's release moves the feature out of preview and into the enterprise tier with audit logs and per-tool permissions.",
    whyItMatters:
      "Agents that work for hours change the unit of automation from a prompt to a project. Knowledge-worker tasks that took half a day can now be triggered with one instruction.",
    backgroundContext:
      "Agent frameworks have existed since 2023, but reliability was poor. GPT-class models with native tool-use and longer context windows finally make multi-hour tasks viable.",
    industryImpact:
      "Pressure on consulting, BPO, and SaaS tools whose value is workflow orchestration. Expect every major productivity vendor to ship an agent layer within 6 months.",
    keyCompanies: ["OpenAI", "Microsoft", "Anthropic", "Google"],
    keywords: ["agents", "tool use", "enterprise AI", "automation"],
    difficulty: "Intermediate",
    readingTime: "4 min",
    sourceName: "OpenAI Blog",
    sourceUrl: "https://openai.com/blog",
    publishedDate: "2026-05-24",
    importanceScore: 0.92,
    quiz: makeQuiz(
      "What is the main capability that 'agent mode' adds?",
      [
        "Faster single-prompt responses",
        "Multi-step autonomous task execution",
        "Cheaper API pricing",
      ],
      "Multi-step autonomous task execution",
    ),
  },
  {
    id: "ai-t2",
    category: "ai",
    timeWindow: "today",
    title: "EU AI Act enforcement begins for general-purpose models",
    shortSummary:
      "Today marks the start of compliance deadlines for foundation model providers operating in the EU, with transparency and copyright duties.",
    longExplanation:
      "Providers must now publish a detailed summary of training data, document model capabilities, and respect opt-outs from rights-holders. Systemic-risk models (above a compute threshold) face stricter evaluation requirements.",
    whyItMatters:
      "It's the first major jurisdiction to treat foundation models as a regulated category. Decisions made for the EU often become global defaults.",
    backgroundContext:
      "The AI Act was passed in 2024 with phased deadlines. The general-purpose model chapter is the most contested because it applies to upstream providers, not just app developers.",
    industryImpact:
      "Expect new 'EU-compliant' model variants and increased legal headcount at AI labs. Startups may rely on hosted providers to inherit compliance.",
    keyCompanies: ["OpenAI", "Anthropic", "Mistral", "Meta"],
    keywords: ["regulation", "EU AI Act", "compliance", "foundation models"],
    difficulty: "Beginner",
    readingTime: "3 min",
    sourceName: "European Commission",
    sourceUrl: "https://digital-strategy.ec.europa.eu",
    publishedDate: "2026-05-24",
    importanceScore: 0.88,
    quiz: makeQuiz(
      "Who is primarily targeted by the new EU AI Act deadline?",
      ["End users of AI apps", "General-purpose model providers", "Hardware makers"],
      "General-purpose model providers",
    ),
  },
  {
    id: "ai-t3",
    category: "ai",
    timeWindow: "today",
    title: "Anthropic raises new round at $200B valuation",
    shortSummary:
      "Anthropic closed a multi-billion dollar round led by sovereign wealth funds, doubling its valuation in under a year.",
    longExplanation:
      "The round is reportedly led by Middle Eastern sovereign funds with participation from existing cloud partners. Proceeds will fund a new compute cluster and safety research.",
    whyItMatters:
      "Capital is concentrating into a small number of frontier labs. The cost of being at the frontier — compute, talent, data — keeps rising faster than revenue.",
    backgroundContext:
      "Anthropic's revenue grew from ~$100M ARR in 2023 to multi-billion in 2026, mostly via API and Claude Code. The valuation reflects expected long-term licensing power.",
    industryImpact:
      "Pressure on second-tier labs to consolidate. Cloud providers double down on exclusive partnerships to secure model access.",
    keyCompanies: ["Anthropic", "Amazon", "Google", "PIF"],
    keywords: ["funding", "valuation", "frontier labs", "compute"],
    difficulty: "Beginner",
    readingTime: "3 min",
    sourceName: "The Information",
    sourceUrl: "https://www.theinformation.com",
    publishedDate: "2026-05-24",
    importanceScore: 0.81,
    quiz: makeQuiz(
      "What does Anthropic plan to spend the new capital on primarily?",
      ["Marketing", "Compute and safety research", "Acquisitions"],
      "Compute and safety research",
    ),
  },

  // ============ AI — WEEK ============
  {
    id: "ai-w1",
    category: "ai",
    timeWindow: "week",
    title: "Open-source 'Llama 5' matches GPT-class reasoning on key benchmarks",
    shortSummary:
      "Meta released Llama 5 with mixture-of-experts and improved reasoning, narrowing the gap to closed frontier models.",
    longExplanation:
      "Llama 5 uses a sparse MoE architecture and a new reasoning-focused training recipe. On math and coding benchmarks it lands within a few points of the leading closed model, while remaining freely available.",
    whyItMatters:
      "Strong open weights cap how much closed labs can charge for similar capability. The 'open vs closed' gap is the single biggest variable in AI economics.",
    backgroundContext:
      "Open weights lagged closed models by ~12 months in 2024. Each Llama release has narrowed that gap, and Llama 5 may be the first where the lag is effectively zero on common tasks.",
    industryImpact:
      "Cloud providers win — they sell inference for any model. Pure-play model vendors face margin pressure on commodity workloads.",
    keyCompanies: ["Meta", "Hugging Face", "Together AI", "AWS"],
    keywords: ["open source", "Llama", "MoE", "benchmarks"],
    difficulty: "Intermediate",
    readingTime: "5 min",
    sourceName: "Meta AI",
    sourceUrl: "https://ai.meta.com",
    publishedDate: "2026-05-20",
    importanceScore: 0.86,
    quiz: makeQuiz(
      "What architecture does Llama 5 use to scale efficiently?",
      ["Dense transformer", "Mixture of Experts", "Recurrent network"],
      "Mixture of Experts",
    ),
  },
  {
    id: "ai-w2",
    category: "ai",
    timeWindow: "week",
    title: "AI coding assistants now write 40% of code at top tech firms",
    shortSummary:
      "Internal surveys at major tech companies show AI-generated code crossing the 40% threshold, up from ~25% a year ago.",
    longExplanation:
      "The share rises with seniority — senior engineers use AI for boilerplate, tests, and refactors while reviewing the output. Junior hiring is slowing as a result.",
    whyItMatters:
      "It's the first concrete signal that AI is reshaping a high-paid white-collar profession at scale.",
    backgroundContext:
      "Copilot launched in 2021; Cursor and Claude Code accelerated adoption from 2023. The 'review, don't write' workflow became the new default.",
    industryImpact:
      "Slower entry-level hiring, higher leverage per senior engineer, and a premium on code-review skills.",
    keyCompanies: ["GitHub", "Cursor", "Anthropic", "Google"],
    keywords: ["dev tools", "Copilot", "productivity", "labor"],
    difficulty: "Beginner",
    readingTime: "4 min",
    sourceName: "Stack Overflow Survey",
    sourceUrl: "https://survey.stackoverflow.co",
    publishedDate: "2026-05-19",
    importanceScore: 0.78,
    quiz: makeQuiz(
      "Which group reportedly uses AI coding tools most heavily?",
      ["Junior engineers", "Senior engineers reviewing output", "QA testers"],
      "Senior engineers reviewing output",
    ),
  },
  {
    id: "ai-w3",
    category: "ai",
    timeWindow: "week",
    title: "Google DeepMind unveils protein-design model for novel antibodies",
    shortSummary:
      "DeepMind's new model designs antibodies against targets that previously had no good binder, with wet-lab confirmation.",
    longExplanation:
      "Building on AlphaFold, the new model generates candidate antibody sequences that bind to specified epitopes. Early collaborations with pharma have validated several leads in vitro.",
    whyItMatters:
      "Antibody discovery is one of the slowest and most expensive parts of biotech. AI-generated candidates could compress timelines from years to months.",
    backgroundContext:
      "AlphaFold solved structure prediction; the next frontier is design. Several startups (Generate, Isomorphic) target the same space.",
    industryImpact:
      "Pharma R&D pipelines re-architect around computational design. Smaller biotechs gain leverage against incumbents with large wet labs.",
    keyCompanies: ["Google DeepMind", "Isomorphic Labs", "Generate Biomedicines"],
    keywords: ["AlphaFold", "biotech", "antibodies", "protein design"],
    difficulty: "Advanced",
    readingTime: "6 min",
    sourceName: "Nature",
    sourceUrl: "https://www.nature.com",
    publishedDate: "2026-05-18",
    importanceScore: 0.84,
    quiz: makeQuiz(
      "What does the new DeepMind model design?",
      ["Small molecule drugs", "Antibody sequences", "Vaccines"],
      "Antibody sequences",
    ),
  },

  // ============ AI — MONTH ============
  {
    id: "ai-m1",
    category: "ai",
    timeWindow: "month",
    title: "Hyperscaler AI capex hits record $400B annual run rate",
    shortSummary:
      "Combined AI infrastructure spending by Microsoft, Google, Meta, and Amazon hit a $400B annualized pace this quarter.",
    longExplanation:
      "Capex is dominated by data center construction, custom AI chips, and grid upgrades. Investors are increasingly asking whether returns will justify the spend.",
    whyItMatters:
      "This is the largest private infrastructure build-out in modern history. Whether it pays back will define the next decade of tech equities.",
    backgroundContext:
      "Total hyperscaler capex was ~$150B in 2022. The ChatGPT moment triggered a step change; capex has roughly tripled since.",
    industryImpact:
      "Big winners: Nvidia, power utilities, HVAC, fiber. Risk: revenue from AI products has to grow into a depreciating asset base.",
    keyCompanies: ["Microsoft", "Google", "Meta", "Amazon", "Nvidia"],
    keywords: ["capex", "data centers", "infrastructure", "hyperscalers"],
    difficulty: "Intermediate",
    readingTime: "6 min",
    sourceName: "Bloomberg",
    sourceUrl: "https://www.bloomberg.com",
    publishedDate: "2026-05-08",
    importanceScore: 0.9,
    quiz: makeQuiz(
      "Which of these is NOT a hyperscaler driving AI capex?",
      ["Microsoft", "Oracle", "Meta"],
      "Oracle",
    ),
  },
  {
    id: "ai-m2",
    category: "ai",
    timeWindow: "month",
    title: "First multimodal world-model robot demos warehouse work end-to-end",
    shortSummary:
      "A startup showed a humanoid robot completing a full picking shift in a real warehouse using a single multimodal model.",
    longExplanation:
      "Instead of stitched policies, the robot uses one large vision-language-action model. It generalizes to objects it hasn't seen before and handles errors without scripted recovery.",
    whyItMatters:
      "Physical labor is the largest remaining market that AI hasn't meaningfully touched. End-to-end models suggest the breakthrough is closer than expected.",
    backgroundContext:
      "Robotics historically used many narrow models. Transformer-based 'world models' trained on internet-scale video plus teleop data are the new approach.",
    industryImpact:
      "Logistics, manufacturing, and elder-care all in scope. Expect aggressive capital flows into humanoid robotics.",
    keyCompanies: ["Figure", "Tesla", "1X", "Physical Intelligence"],
    keywords: ["robotics", "world models", "humanoid", "VLA"],
    difficulty: "Advanced",
    readingTime: "7 min",
    sourceName: "IEEE Spectrum",
    sourceUrl: "https://spectrum.ieee.org",
    publishedDate: "2026-05-02",
    importanceScore: 0.83,
    quiz: makeQuiz(
      "What is novel about the demonstrated robot's approach?",
      [
        "Scripted recovery for every error",
        "One end-to-end multimodal model",
        "Pure rule-based control",
      ],
      "One end-to-end multimodal model",
    ),
  },
  {
    id: "ai-m3",
    category: "ai",
    timeWindow: "month",
    title: "AI energy demand pushes US grid operators to fast-track nuclear",
    shortSummary:
      "PJM and ERCOT are working with hyperscalers on dedicated nuclear capacity, including small modular reactors, to power AI data centers.",
    longExplanation:
      "Data center demand is overwhelming traditional grid planning. New deals couple data centers directly to nuclear plants to bypass transmission bottlenecks.",
    whyItMatters:
      "Energy is now the binding constraint on AI scale-up. Whoever solves power first wins the next wave.",
    backgroundContext:
      "US grid load was nearly flat for two decades; AI is the first major new load driver. SMRs offer a faster path than gigawatt-scale plants.",
    industryImpact:
      "Nuclear supply chain (fuel, vessels, EPC contractors) sees a revival. Utilities renegotiate long-dormant capacity contracts.",
    keyCompanies: ["Constellation", "Microsoft", "NuScale", "Vistra"],
    keywords: ["nuclear", "SMR", "data centers", "energy"],
    difficulty: "Intermediate",
    readingTime: "5 min",
    sourceName: "Wall Street Journal",
    sourceUrl: "https://www.wsj.com",
    publishedDate: "2026-04-30",
    importanceScore: 0.87,
    quiz: makeQuiz(
      "Why are hyperscalers turning to nuclear power?",
      [
        "It's the cheapest source",
        "AI demand exceeds existing grid capacity",
        "Regulators require it",
      ],
      "AI demand exceeds existing grid capacity",
    ),
  },

  // ============ SEMICONDUCTORS — TODAY ============
  {
    id: "sc-t1",
    category: "semiconductors",
    timeWindow: "today",
    title: "TSMC begins 2nm volume production in Hsinchu",
    shortSummary:
      "TSMC officially started high-volume manufacturing of its 2nm (N2) process, with Apple as the lead customer.",
    longExplanation:
      "N2 is TSMC's first node using gate-all-around (GAA) nanosheet transistors, replacing FinFET. Early yields are reportedly above plan, paving the way for next-gen iPhone and AI accelerator silicon.",
    whyItMatters:
      "Leading-edge logic is the foundation of every AI chip, smartphone, and PC. TSMC's lead defines the global semiconductor pecking order.",
    backgroundContext:
      "FinFET transistors had served from 16nm through 3nm. GAA is the biggest transistor architecture shift in a decade.",
    industryImpact:
      "Apple, Nvidia, AMD line up for early capacity. Samsung Foundry and Intel Foundry face renewed pressure to catch up.",
    keyCompanies: ["TSMC", "Apple", "Nvidia", "AMD", "ASML"],
    keywords: ["2nm", "GAA", "foundry", "node transition"],
    difficulty: "Intermediate",
    readingTime: "4 min",
    sourceName: "DigiTimes",
    sourceUrl: "https://www.digitimes.com",
    publishedDate: "2026-05-24",
    importanceScore: 0.93,
    quiz: makeQuiz(
      "What transistor architecture does TSMC's 2nm node use?",
      ["FinFET", "Gate-all-around (GAA)", "Planar"],
      "Gate-all-around (GAA)",
    ),
  },
  {
    id: "sc-t2",
    category: "semiconductors",
    timeWindow: "today",
    title: "US imposes new HBM export controls on China",
    shortSummary:
      "The Commerce Department added high-bandwidth memory above a performance threshold to its restricted list for shipments to China.",
    longExplanation:
      "HBM is essential to modern AI accelerators. The new rule targets HBM3E and above, regardless of manufacturer, including non-US producers using US equipment.",
    whyItMatters:
      "HBM is the new chokepoint after logic chips. Restricting it directly slows China's AI infrastructure build-out.",
    backgroundContext:
      "Three companies dominate HBM: SK hynix, Samsung, and Micron. All rely on US tools for advanced packaging.",
    industryImpact:
      "Short-term tightening of global HBM supply. Chinese players accelerate domestic alternatives, though years behind.",
    keyCompanies: ["SK hynix", "Samsung", "Micron", "Huawei", "SMIC"],
    keywords: ["HBM", "export controls", "AI chips", "geopolitics"],
    difficulty: "Intermediate",
    readingTime: "4 min",
    sourceName: "Reuters",
    sourceUrl: "https://www.reuters.com",
    publishedDate: "2026-05-24",
    importanceScore: 0.89,
    quiz: makeQuiz(
      "Why is HBM particularly important for AI accelerators?",
      [
        "It is the cheapest memory available",
        "It provides the high bandwidth GPUs need",
        "It uses less power than DDR",
      ],
      "It provides the high bandwidth GPUs need",
    ),
  },
  {
    id: "sc-t3",
    category: "semiconductors",
    timeWindow: "today",
    title: "Nvidia previews next-gen 'Rubin' AI superchip",
    shortSummary:
      "Nvidia teased its Rubin platform, the successor to Blackwell, with co-packaged optics and a 3x performance-per-watt claim.",
    longExplanation:
      "Rubin pairs a new GPU with a custom Arm-based CPU and integrates silicon photonics for chip-to-chip interconnect, addressing the bandwidth wall that limits multi-GPU scaling.",
    whyItMatters:
      "Each generation of Nvidia silicon sets the AI training cost curve. Faster, more efficient chips compress the cost of frontier-scale models.",
    backgroundContext:
      "Blackwell shipped in 2024; Rubin keeps Nvidia on a roughly annual cadence, faster than the traditional 2-year datacenter cycle.",
    industryImpact:
      "Cloud customers will queue for early allocation. Competitors (AMD MI400, custom silicon from hyperscalers) face a moving target.",
    keyCompanies: ["Nvidia", "TSMC", "SK hynix", "Coherent"],
    keywords: ["GPU", "Rubin", "photonics", "AI chips"],
    difficulty: "Advanced",
    readingTime: "5 min",
    sourceName: "Nvidia Newsroom",
    sourceUrl: "https://nvidianews.nvidia.com",
    publishedDate: "2026-05-24",
    importanceScore: 0.91,
    quiz: makeQuiz(
      "What new interconnect technology does Rubin integrate?",
      ["Silicon photonics", "USB-C", "Thunderbolt"],
      "Silicon photonics",
    ),
  },

  // ============ SEMICONDUCTORS — WEEK ============
  {
    id: "sc-w1",
    category: "semiconductors",
    timeWindow: "week",
    title: "ASML books record High-NA EUV orders",
    shortSummary:
      "ASML reported a surge in orders for its High-NA EUV systems, the most advanced lithography tools in the world.",
    longExplanation:
      "High-NA EUV enables sub-2nm patterning in fewer steps. Each system costs ~$380M and there is currently a years-long backlog.",
    whyItMatters:
      "ASML is a single point of failure for the entire leading-edge industry. Its order book is a leading indicator of foundry capex.",
    backgroundContext:
      "ASML has a monopoly on EUV. High-NA is the next step up, with Intel, TSMC, and Samsung as customers.",
    industryImpact:
      "Strong revenue visibility through 2028. Geopolitical sensitivity remains: Netherlands restricts shipments to China.",
    keyCompanies: ["ASML", "Intel", "TSMC", "Samsung"],
    keywords: ["EUV", "High-NA", "lithography", "ASML"],
    difficulty: "Advanced",
    readingTime: "5 min",
    sourceName: "ASML Investor",
    sourceUrl: "https://www.asml.com/en/investors",
    publishedDate: "2026-05-21",
    importanceScore: 0.85,
    quiz: makeQuiz(
      "What is ASML's near-monopoly product?",
      ["EUV lithography systems", "Wafer test equipment", "Memory chips"],
      "EUV lithography systems",
    ),
  },
  {
    id: "sc-w2",
    category: "semiconductors",
    timeWindow: "week",
    title: "Intel Foundry lands first major external 18A customer",
    shortSummary:
      "Intel announced a marquee external customer for its 18A process, a critical proof point for its foundry ambitions.",
    longExplanation:
      "18A combines RibbonFET (Intel's GAA) and PowerVia (backside power delivery). Securing a major external customer validates Intel as a credible alternative to TSMC.",
    whyItMatters:
      "Western capacity for leading-edge chips remains scarce. A viable Intel Foundry materially changes geopolitical risk in the supply chain.",
    backgroundContext:
      "Intel's foundry strategy was launched in 2021. 18A is the node where it claimed it would reach process parity.",
    industryImpact:
      "Validates US CHIPS Act bet. Customers gain a second source; TSMC faces real foundry competition for the first time in years.",
    keyCompanies: ["Intel", "TSMC", "Samsung Foundry"],
    keywords: ["Intel Foundry", "18A", "RibbonFET", "PowerVia"],
    difficulty: "Intermediate",
    readingTime: "5 min",
    sourceName: "Intel Newsroom",
    sourceUrl: "https://www.intel.com/newsroom",
    publishedDate: "2026-05-20",
    importanceScore: 0.8,
    quiz: makeQuiz(
      "What does PowerVia refer to in Intel's 18A process?",
      ["Backside power delivery", "A new battery tech", "EUV variant"],
      "Backside power delivery",
    ),
  },
  {
    id: "sc-w3",
    category: "semiconductors",
    timeWindow: "week",
    title: "China's SMIC reportedly produces 5nm-class chips at scale",
    shortSummary:
      "Reports indicate SMIC is shipping 5nm-class chips using DUV multi-patterning, despite EUV restrictions.",
    longExplanation:
      "Without EUV access, SMIC relies on quadruple patterning with DUV — economically painful but technically possible. Yields are well below TSMC's, but volumes are growing.",
    whyItMatters:
      "It shows export controls slow but don't fully stop China's advance. The cost penalty matters less when subsidies cover the gap.",
    backgroundContext:
      "SMIC was previously believed stuck near 7nm. Domestic demand from Huawei drove an aggressive push down to 5nm equivalents.",
    industryImpact:
      "China's domestic AI chip roadmap stays alive. Global chip equipment vendors lose long-term China upside but gain short-term tool revenue.",
    keyCompanies: ["SMIC", "Huawei", "Naura", "AMEC"],
    keywords: ["SMIC", "China", "DUV", "export controls"],
    difficulty: "Advanced",
    readingTime: "6 min",
    sourceName: "Financial Times",
    sourceUrl: "https://www.ft.com",
    publishedDate: "2026-05-19",
    importanceScore: 0.82,
    quiz: makeQuiz(
      "How is SMIC achieving 5nm-class production without EUV?",
      [
        "Buying EUV from a partner",
        "Multi-patterning with DUV lithography",
        "3D stacking only",
      ],
      "Multi-patterning with DUV lithography",
    ),
  },

  // ============ SEMICONDUCTORS — MONTH ============
  {
    id: "sc-m1",
    category: "semiconductors",
    timeWindow: "month",
    title: "Custom AI silicon from hyperscalers reaches 30% of training compute",
    shortSummary:
      "Google TPU, AWS Trainium, and Microsoft Maia together now run roughly 30% of frontier training workloads.",
    longExplanation:
      "Hyperscalers have been quietly maturing their custom silicon. Google's TPU v6 and AWS Trainium2 reach competitive performance-per-dollar versus Nvidia for selected workloads.",
    whyItMatters:
      "Nvidia still dominates, but the trend lowers customer dependence and gives hyperscalers pricing leverage.",
    backgroundContext:
      "TPUs have shipped since 2016 but were Google-internal. Trainium and Maia are newer but growing fast under heavy capex.",
    industryImpact:
      "Nvidia's gross margin power may have peaked. Broadcom and Marvell win as ASIC design partners.",
    keyCompanies: ["Google", "AWS", "Microsoft", "Broadcom", "Marvell"],
    keywords: ["TPU", "Trainium", "ASIC", "custom silicon"],
    difficulty: "Intermediate",
    readingTime: "6 min",
    sourceName: "SemiAnalysis",
    sourceUrl: "https://www.semianalysis.com",
    publishedDate: "2026-05-05",
    importanceScore: 0.88,
    quiz: makeQuiz(
      "Which company benefits as an ASIC design partner for hyperscalers?",
      ["Broadcom", "Tesla", "Cisco"],
      "Broadcom",
    ),
  },
  {
    id: "sc-m2",
    category: "semiconductors",
    timeWindow: "month",
    title: "US CHIPS Act final disbursements complete",
    shortSummary:
      "The Commerce Department finalized the last major CHIPS Act grant agreements, totaling over $40B awarded.",
    longExplanation:
      "Final disbursements went to TSMC Arizona, Samsung Texas, Intel Ohio/Arizona, and Micron New York. All projects now move into construction or production milestones tied to claw-back clauses.",
    whyItMatters:
      "The single largest US industrial policy action in decades is now fully committed. Outcomes will be measured in production volumes from 2027 onward.",
    backgroundContext:
      "The CHIPS Act passed in 2022. Disbursements were spread over multiple years with strict milestone conditions.",
    industryImpact:
      "Construction, equipment, and skilled-labor markets see sustained tailwinds. Long-term success depends on whether US fabs can match Asian operating costs.",
    keyCompanies: ["TSMC", "Samsung", "Intel", "Micron"],
    keywords: ["CHIPS Act", "industrial policy", "fabs", "US"],
    difficulty: "Beginner",
    readingTime: "4 min",
    sourceName: "US Commerce Department",
    sourceUrl: "https://www.commerce.gov",
    publishedDate: "2026-04-28",
    importanceScore: 0.79,
    quiz: makeQuiz(
      "What is the total approximate scale of CHIPS Act awards?",
      ["$4B", "$40B", "$400B"],
      "$40B",
    ),
  },
  {
    id: "sc-m3",
    category: "semiconductors",
    timeWindow: "month",
    title: "Advanced packaging becomes the new node race",
    shortSummary:
      "CoWoS, SoIC, and Foveros capacity is sold out through 2027 as 3D stacking replaces transistor scaling as the bottleneck.",
    longExplanation:
      "As Moore's Law slows, performance gains come from stacking chiplets in 3D. TSMC's CoWoS supplies Nvidia, Intel's Foveros enables Lunar Lake, and Samsung's X-Cube is gaining adoption.",
    whyItMatters:
      "The locus of innovation is shifting from transistor density to packaging. It changes the supplier landscape: substrate makers, bonders, and OSATs all matter more.",
    backgroundContext:
      "CoWoS demand exploded with the AI boom; TSMC has been doubling capacity yearly but still cannot meet demand.",
    industryImpact:
      "Winners: Applied Materials, BE Semiconductor, ASE Group. Substrates (Ibiden, Unimicron) also benefit.",
    keyCompanies: ["TSMC", "Intel", "Samsung", "ASE", "Ibiden"],
    keywords: ["packaging", "CoWoS", "3D stacking", "chiplets"],
    difficulty: "Advanced",
    readingTime: "7 min",
    sourceName: "EE Times",
    sourceUrl: "https://www.eetimes.com",
    publishedDate: "2026-04-25",
    importanceScore: 0.86,
    quiz: makeQuiz(
      "What is the main reason advanced packaging matters so much now?",
      [
        "Transistor scaling has slowed",
        "Power consumption is no longer a concern",
        "Software has gotten less demanding",
      ],
      "Transistor scaling has slowed",
    ),
  },

  // ============ STOCKS — TODAY ============
  {
    id: "st-t1",
    category: "stocks",
    timeWindow: "today",
    title: "S&P 500 hits new all-time high on soft inflation print",
    shortSummary:
      "US stocks rallied to a record close after April CPI came in below expectations, reviving rate-cut bets.",
    longExplanation:
      "Headline CPI rose 2.3% YoY versus 2.5% expected. Core CPI was also softer. Fed funds futures now price two cuts by year-end, up from one.",
    whyItMatters:
      "Inflation prints remain the single biggest driver of risk assets. Lower inflation → lower yields → higher multiples.",
    backgroundContext:
      "The Fed has held rates steady since mid-2025 as inflation drifted toward target. Markets oscillate on each data point.",
    industryImpact:
      "Long-duration assets (tech, growth) outperform. Banks lag on lower-for-longer expectations.",
    keyCompanies: ["S&P 500 index", "Federal Reserve"],
    keywords: ["CPI", "inflation", "Fed", "rate cuts"],
    difficulty: "Beginner",
    readingTime: "3 min",
    sourceName: "Bloomberg",
    sourceUrl: "https://www.bloomberg.com",
    publishedDate: "2026-05-24",
    importanceScore: 0.84,
    quiz: makeQuiz(
      "Why does softer inflation typically lift stock prices?",
      [
        "It increases corporate taxes",
        "It supports lower interest rates",
        "It strengthens the dollar always",
      ],
      "It supports lower interest rates",
    ),
  },
  {
    id: "st-t2",
    category: "stocks",
    timeWindow: "today",
    title: "Nvidia earnings beat but guidance disappoints",
    shortSummary:
      "Nvidia posted record revenue and EPS but next-quarter guidance came in below the highest buy-side expectations, sending shares down after hours.",
    longExplanation:
      "Data-center revenue grew 60% YoY. Management cited supply timing for the softer guide. Bears flagged a normalization of AI capex; bulls see a temporary digestion phase.",
    whyItMatters:
      "Nvidia is the bellwether for the AI trade. Its quarterly print moves the entire complex: chips, power, hyperscalers.",
    backgroundContext:
      "After two years of triple-digit growth, decelerating comps were inevitable. The question is whether the slowdown is supply-driven or demand-driven.",
    industryImpact:
      "AI-exposed names (AMD, AVGO, MU, power utilities) trade in sympathy. Bond yields dipped on weaker risk appetite.",
    keyCompanies: ["Nvidia", "AMD", "Broadcom", "Micron"],
    keywords: ["earnings", "AI capex", "guidance", "Nvidia"],
    difficulty: "Intermediate",
    readingTime: "5 min",
    sourceName: "CNBC",
    sourceUrl: "https://www.cnbc.com",
    publishedDate: "2026-05-24",
    importanceScore: 0.9,
    quiz: makeQuiz(
      "Why did Nvidia stock drop despite beating earnings?",
      [
        "Revenue missed estimates",
        "Forward guidance was below high-end expectations",
        "Dividend was cut",
      ],
      "Forward guidance was below high-end expectations",
    ),
  },
  {
    id: "st-t3",
    category: "stocks",
    timeWindow: "today",
    title: "Bitcoin tops $150K as ETF inflows accelerate",
    shortSummary:
      "Bitcoin crossed $150,000 for the first time as US spot ETFs saw record weekly inflows.",
    longExplanation:
      "Spot Bitcoin ETFs have absorbed over $100B in cumulative inflows since launch. Institutional allocations from pensions and sovereigns are now meaningful.",
    whyItMatters:
      "BTC is increasingly trading as a macro asset correlated with global liquidity, not just retail sentiment.",
    backgroundContext:
      "Spot ETFs were approved in January 2024. Each subsequent halving and rate-cut cycle has reinforced flows.",
    industryImpact:
      "Crypto-adjacent equities (Coinbase, MSTR, miners) outperform. Allocators rebalance into digital assets.",
    keyCompanies: ["BlackRock", "Fidelity", "Coinbase", "MicroStrategy"],
    keywords: ["bitcoin", "ETF", "crypto", "macro"],
    difficulty: "Beginner",
    readingTime: "3 min",
    sourceName: "CoinDesk",
    sourceUrl: "https://www.coindesk.com",
    publishedDate: "2026-05-24",
    importanceScore: 0.76,
    quiz: makeQuiz(
      "What product was a major driver of institutional Bitcoin demand?",
      ["Bitcoin futures only", "Spot Bitcoin ETFs", "Stablecoins"],
      "Spot Bitcoin ETFs",
    ),
  },

  // ============ STOCKS — WEEK ============
  {
    id: "st-w1",
    category: "stocks",
    timeWindow: "week",
    title: "Magnificent Seven concentration tops 35% of S&P 500",
    shortSummary:
      "The largest seven US tech stocks now make up over 35% of S&P 500 market cap, a historic concentration.",
    longExplanation:
      "Apple, Microsoft, Nvidia, Alphabet, Amazon, Meta, and Tesla collectively dwarf the next 100 companies. Index funds passively allocate ever more capital to them.",
    whyItMatters:
      "Passive flows mechanically amplify concentration. A pullback in any single name has outsized index impact.",
    backgroundContext:
      "Concentration was ~20% in 2020, ~30% in 2024. The AI cycle accelerated the trend.",
    industryImpact:
      "Active managers struggle to outperform without owning Mag 7. Diversification strategies need to overweight non-US.",
    keyCompanies: ["Apple", "Microsoft", "Nvidia", "Alphabet", "Amazon", "Meta", "Tesla"],
    keywords: ["concentration", "Magnificent Seven", "S&P 500", "passive"],
    difficulty: "Intermediate",
    readingTime: "5 min",
    sourceName: "Goldman Sachs Research",
    sourceUrl: "https://www.goldmansachs.com/insights",
    publishedDate: "2026-05-21",
    importanceScore: 0.82,
    quiz: makeQuiz(
      "Why is index concentration a risk?",
      [
        "Diversification is reduced",
        "It increases dividends",
        "It lowers volatility always",
      ],
      "Diversification is reduced",
    ),
  },
  {
    id: "st-w2",
    category: "stocks",
    timeWindow: "week",
    title: "Japan's Nikkei extends gains as BOJ holds policy steady",
    shortSummary:
      "The Nikkei 225 reached fresh 35-year highs after the BOJ left rates unchanged and signaled patience.",
    longExplanation:
      "Strong corporate governance reforms, share buybacks, and weak yen continue to drive Japanese equities. Foreign inflows hit a multi-year high.",
    whyItMatters:
      "Japan has shifted from value trap to credible reflation story. Global allocators are increasing exposure for the first time in decades.",
    backgroundContext:
      "Abenomics laid the foundation; TSE listing reforms in 2023-24 forced companies to address low P/B ratios.",
    industryImpact:
      "Japanese banks, industrials, and trading houses (Warren Buffett's bet) outperform. Yen weakness remains a tailwind for exporters.",
    keyCompanies: ["Toyota", "Sony", "Mitsubishi", "SoftBank"],
    keywords: ["Nikkei", "Japan", "BOJ", "governance"],
    difficulty: "Intermediate",
    readingTime: "5 min",
    sourceName: "Nikkei Asia",
    sourceUrl: "https://asia.nikkei.com",
    publishedDate: "2026-05-20",
    importanceScore: 0.74,
    quiz: makeQuiz(
      "What structural reform supported Japan's equity rally?",
      [
        "Tokyo Stock Exchange listing reforms",
        "Mandatory stock splits",
        "Foreign ownership cap",
      ],
      "Tokyo Stock Exchange listing reforms",
    ),
  },
  {
    id: "st-w3",
    category: "stocks",
    timeWindow: "week",
    title: "Oil holds above $80 on OPEC+ extension",
    shortSummary:
      "Brent crude held above $80/barrel after OPEC+ extended voluntary production cuts through year-end.",
    longExplanation:
      "Saudi Arabia and Russia confirmed they would keep ~2.2 mb/d of voluntary cuts. Markets read it as price-supportive, especially with US shale growth slowing.",
    whyItMatters:
      "Oil prices feed into inflation, fiscal balances for producers, and energy sector earnings.",
    backgroundContext:
      "OPEC+ has used voluntary cuts as a flexible lever since 2023. Compliance has been mixed but headline messaging matters.",
    industryImpact:
      "Energy stocks (XOM, CVX, SHEL) firm up. Airlines and freight margins compress.",
    keyCompanies: ["Saudi Aramco", "ExxonMobil", "Chevron", "Shell"],
    keywords: ["OPEC", "oil", "Brent", "production cuts"],
    difficulty: "Beginner",
    readingTime: "4 min",
    sourceName: "Reuters",
    sourceUrl: "https://www.reuters.com",
    publishedDate: "2026-05-19",
    importanceScore: 0.7,
    quiz: makeQuiz(
      "What did OPEC+ do this week to support oil prices?",
      ["Increased production", "Extended voluntary production cuts", "Disbanded"],
      "Extended voluntary production cuts",
    ),
  },

  // ============ STOCKS — MONTH ============
  {
    id: "st-m1",
    category: "stocks",
    timeWindow: "month",
    title: "Q1 earnings season ends with 12% YoY EPS growth",
    shortSummary:
      "S&P 500 Q1 earnings grew 12% YoY, with AI-exposed names contributing more than half of the gain.",
    longExplanation:
      "Excluding the Mag 7, EPS growth was only ~5%. Margin expansion is heavily skewed toward tech, while consumer-facing sectors show pricing fatigue.",
    whyItMatters:
      "Headline growth looks healthy, but the breadth is narrow. Future outperformance depends on AI productivity gains flowing to the rest of the index.",
    backgroundContext:
      "EPS growth was negative in 2023, rebounded in 2024-25. The 2026 acceleration has been the case for continued multiple support.",
    industryImpact:
      "Tech and communications lead. Materials and consumer staples lag.",
    keyCompanies: ["Microsoft", "Alphabet", "Meta", "Apple"],
    keywords: ["earnings", "EPS", "S&P 500", "Mag 7"],
    difficulty: "Intermediate",
    readingTime: "5 min",
    sourceName: "FactSet",
    sourceUrl: "https://insight.factset.com",
    publishedDate: "2026-05-10",
    importanceScore: 0.81,
    quiz: makeQuiz(
      "What's the main caveat about Q1 EPS growth?",
      [
        "It was entirely driven by share buybacks",
        "Growth was concentrated in a few mega-cap names",
        "It excluded the financial sector",
      ],
      "Growth was concentrated in a few mega-cap names",
    ),
  },
  {
    id: "st-m2",
    category: "stocks",
    timeWindow: "month",
    title: "Private credit AUM surpasses $2 trillion",
    shortSummary:
      "Private credit assets under management crossed $2T globally as banks continue to retreat from middle-market lending.",
    longExplanation:
      "Apollo, Blackstone, KKR, and Ares lead the category. Direct lending to mid-sized companies offers floating-rate yield that has held up well.",
    whyItMatters:
      "A growing share of corporate borrowing now sits outside the regulated banking system. Stress in this market would be less visible than a banking crisis.",
    backgroundContext:
      "Private credit grew from ~$0.5T in 2015 to $2T+ in 2026, accelerated by tightening bank capital rules.",
    industryImpact:
      "Alternative asset managers see strong fee growth. Regional banks face permanent erosion of commercial loan share.",
    keyCompanies: ["Apollo", "Blackstone", "KKR", "Ares"],
    keywords: ["private credit", "alternatives", "direct lending"],
    difficulty: "Advanced",
    readingTime: "6 min",
    sourceName: "Preqin",
    sourceUrl: "https://www.preqin.com",
    publishedDate: "2026-05-03",
    importanceScore: 0.77,
    quiz: makeQuiz(
      "Why has private credit grown so rapidly?",
      [
        "Banks pulled back from middle-market lending",
        "Interest rates collapsed",
        "Government mandated it",
      ],
      "Banks pulled back from middle-market lending",
    ),
  },
  {
    id: "st-m3",
    category: "stocks",
    timeWindow: "month",
    title: "10-year Treasury yield ranges 4.0-4.5% as Fed in 'wait-and-see' mode",
    shortSummary:
      "The benchmark 10-year yield traded in a tight 4.0-4.5% band for most of the month as bond traders await clearer macro signals.",
    longExplanation:
      "With inflation near target but growth holding up, the Fed has signaled patience. Markets are pricing 1-2 cuts in the next 12 months.",
    whyItMatters:
      "The 10-year yield is the most important price in global finance — it sets discount rates for nearly every asset.",
    backgroundContext:
      "Yields spiked above 5% in 2023, normalized lower as inflation cooled. The current range reflects a 'soft landing' regime.",
    industryImpact:
      "REITs, utilities, and growth stocks all benefit from a stable lower-yield environment. Banks see flatter NIMs.",
    keyCompanies: ["US Treasury", "Federal Reserve"],
    keywords: ["Treasury", "yields", "Fed", "duration"],
    difficulty: "Intermediate",
    readingTime: "5 min",
    sourceName: "Wall Street Journal",
    sourceUrl: "https://www.wsj.com",
    publishedDate: "2026-04-29",
    importanceScore: 0.79,
    quiz: makeQuiz(
      "Why is the 10-year Treasury yield so important?",
      [
        "It sets discount rates for most asset classes",
        "It determines mortgage rates only",
        "It controls inflation directly",
      ],
      "It sets discount rates for most asset classes",
    ),
  },

  // ============ AUTOMOTIVE — sample ============
  {
    id: "ev-t1",
    category: "automotive",
    timeWindow: "today",
    title: "BYD overtakes Tesla in global EV deliveries for full year",
    shortSummary:
      "BYD surpassed Tesla in trailing-12-month global pure-EV deliveries, marking a historic lead change.",
    longExplanation:
      "BYD's vertically integrated battery and chip strategy plus aggressive overseas expansion in Europe, Southeast Asia, and Latin America drove the milestone.",
    whyItMatters:
      "The center of gravity in EVs is now firmly in China. Western brands face structural cost disadvantage.",
    backgroundContext:
      "BYD started as a battery maker and only became an EV-first brand in 2022. Tesla's growth has slowed amid pricing wars.",
    industryImpact:
      "Legacy OEMs (VW, Stellantis, Ford) face existential pressure. Battery suppliers consolidate.",
    keyCompanies: ["BYD", "Tesla", "VW", "Stellantis"],
    keywords: ["EV", "BYD", "deliveries", "China"],
    difficulty: "Beginner",
    readingTime: "4 min",
    sourceName: "Reuters",
    sourceUrl: "https://www.reuters.com",
    publishedDate: "2026-05-24",
    importanceScore: 0.83,
    quiz: makeQuiz(
      "What is a key structural advantage of BYD over Tesla?",
      [
        "Vertical integration into batteries",
        "Bigger US market share",
        "Better autonomous driving",
      ],
      "Vertical integration into batteries",
    ),
  },
  {
    id: "ev-w1",
    category: "automotive",
    timeWindow: "week",
    title: "Solid-state battery pilot lines come online at Toyota and Samsung SDI",
    shortSummary:
      "Toyota and Samsung SDI both started small-scale production of solid-state batteries, targeting 2027-28 commercialization.",
    longExplanation:
      "Solid-state cells promise higher energy density and faster charging. Pilot lines indicate the tech has moved from lab to manufacturable.",
    whyItMatters:
      "If commercialized at scale, solid-state could reset the EV competitive landscape — particularly for premium segments.",
    backgroundContext:
      "Solid-state has been '5 years away' for over a decade. Pilot production is the most concrete signal yet.",
    industryImpact:
      "Anode/cathode material suppliers gain. Existing Li-ion players face long-term obsolescence risk.",
    keyCompanies: ["Toyota", "Samsung SDI", "QuantumScape"],
    keywords: ["solid-state", "battery", "EV"],
    difficulty: "Intermediate",
    readingTime: "5 min",
    sourceName: "Nikkei Asia",
    sourceUrl: "https://asia.nikkei.com",
    publishedDate: "2026-05-20",
    importanceScore: 0.75,
    quiz: makeQuiz(
      "What's the main benefit of solid-state batteries?",
      ["Higher energy density and faster charging", "Lower cost only", "Lighter packaging only"],
      "Higher energy density and faster charging",
    ),
  },
  {
    id: "ev-m1",
    category: "automotive",
    timeWindow: "month",
    title: "Waymo expands robotaxi service to 10 new US metros",
    shortSummary:
      "Waymo announced commercial robotaxi service launching in 10 additional US metros over the next 12 months.",
    longExplanation:
      "Waymo now operates millions of paid rides monthly. The expansion follows successful pilots and regulatory clearances.",
    whyItMatters:
      "Robotaxis are scaling from novelty to real transportation. Unit economics are starting to look viable.",
    backgroundContext:
      "Waymo has been operating in Phoenix since 2020. SF and LA followed in 2023-24.",
    industryImpact:
      "Ride-share incumbents (Uber, Lyft) integrate Waymo or face disruption. Auto insurers rewrite policy frameworks.",
    keyCompanies: ["Waymo", "Uber", "Tesla"],
    keywords: ["robotaxi", "Waymo", "autonomy"],
    difficulty: "Beginner",
    readingTime: "4 min",
    sourceName: "TechCrunch",
    sourceUrl: "https://techcrunch.com",
    publishedDate: "2026-05-04",
    importanceScore: 0.78,
    quiz: makeQuiz(
      "What is the main signal from Waymo's expansion?",
      [
        "Robotaxi unit economics may be viable",
        "Waymo is exiting the market",
        "Regulators have banned it",
      ],
      "Robotaxi unit economics may be viable",
    ),
  },

  // ============ HEALTHCARE — sample ============
  {
    id: "hc-t1",
    category: "healthcare",
    timeWindow: "today",
    title: "FDA approves first oral GLP-1 for weight loss",
    shortSummary:
      "The FDA approved the first oral GLP-1 medication for chronic weight management, removing the injection barrier.",
    longExplanation:
      "The new pill achieved comparable weight loss to injectable peers in late-stage trials. Oral dosing dramatically expands the addressable market.",
    whyItMatters:
      "Obesity drugs are the single largest pharma growth driver this decade. Oral access reshapes adoption curves.",
    backgroundContext:
      "Injectable GLP-1s like semaglutide and tirzepatide created a multi-tens-of-billion-dollar market starting in 2022-23.",
    industryImpact:
      "Big upside for the approving sponsor. Pressure on injectable franchises and on food/beverage companies.",
    keyCompanies: ["Novo Nordisk", "Eli Lilly", "Pfizer"],
    keywords: ["GLP-1", "obesity", "FDA"],
    difficulty: "Beginner",
    readingTime: "4 min",
    sourceName: "FDA",
    sourceUrl: "https://www.fda.gov",
    publishedDate: "2026-05-24",
    importanceScore: 0.87,
    quiz: makeQuiz(
      "Why does an oral GLP-1 matter commercially?",
      [
        "It removes the injection barrier and expands the market",
        "It is cheaper to manufacture only",
        "It works without diet",
      ],
      "It removes the injection barrier and expands the market",
    ),
  },
  {
    id: "hc-w1",
    category: "healthcare",
    timeWindow: "week",
    title: "CRISPR sickle-cell therapy hits 1,000 patient milestone",
    shortSummary:
      "The first commercial CRISPR therapy has now treated over 1,000 sickle-cell patients globally with durable responses.",
    longExplanation:
      "The therapy is essentially curative for eligible patients. Manufacturing and reimbursement remain bottlenecks.",
    whyItMatters:
      "Gene editing is moving from proof of concept to standard of care in inherited disorders.",
    backgroundContext:
      "The therapy was approved in late 2023. Scaling has been gradual due to apheresis and conditioning requirements.",
    industryImpact:
      "Validates the broader gene-editing pipeline. Insurers experiment with outcome-based payment.",
    keyCompanies: ["Vertex Pharmaceuticals", "CRISPR Therapeutics"],
    keywords: ["CRISPR", "gene therapy", "sickle cell"],
    difficulty: "Intermediate",
    readingTime: "5 min",
    sourceName: "NEJM",
    sourceUrl: "https://www.nejm.org",
    publishedDate: "2026-05-19",
    importanceScore: 0.8,
    quiz: makeQuiz(
      "What is the main bottleneck for scaling the CRISPR sickle-cell therapy?",
      ["Manufacturing and reimbursement", "Patient demand", "Regulatory bans"],
      "Manufacturing and reimbursement",
    ),
  },
  {
    id: "hc-m1",
    category: "healthcare",
    timeWindow: "month",
    title: "US health system M&A rebounds as systems chase scale",
    shortSummary:
      "Hospital and physician-group consolidation accelerated this month after a slow 2024-25 antitrust environment.",
    longExplanation:
      "Larger systems argue they need scale to negotiate with payers and invest in tech. Antitrust scrutiny remains, but several large deals cleared.",
    whyItMatters:
      "Consolidation reshapes local healthcare economics and reimbursement dynamics.",
    backgroundContext:
      "US health systems have been consolidating for decades. The pace slowed under tougher FTC review in 2023-25.",
    industryImpact:
      "Big winners: large IDNs. Independent practices feel pressure to sell.",
    keyCompanies: ["HCA", "Ascension", "UnitedHealth"],
    keywords: ["M&A", "hospitals", "consolidation"],
    difficulty: "Intermediate",
    readingTime: "5 min",
    sourceName: "Modern Healthcare",
    sourceUrl: "https://www.modernhealthcare.com",
    publishedDate: "2026-05-01",
    importanceScore: 0.71,
    quiz: makeQuiz(
      "What is the main rationale large systems give for consolidation?",
      [
        "Scale for negotiation and tech investment",
        "Closing more hospitals",
        "Cutting research budgets",
      ],
      "Scale for negotiation and tech investment",
    ),
  },

  // ============ ENERGY — sample ============
  {
    id: "en-t1",
    category: "energy",
    timeWindow: "today",
    title: "Global solar PV installations on pace for 700 GW in 2026",
    shortSummary:
      "BloombergNEF raised its 2026 solar PV install forecast to roughly 700 GW, driven by China and falling module prices.",
    longExplanation:
      "Module prices remain near record lows. China dominates manufacturing and is also the largest installer, but US/EU growth is robust.",
    whyItMatters:
      "Solar is now the cheapest new generation almost everywhere. The energy transition runs on PV economics.",
    backgroundContext:
      "Installs were ~150 GW in 2021. A near-5x increase in five years is one of the fastest scale-ups in industrial history.",
    industryImpact:
      "Module pricing remains tough for manufacturers. Inverter, tracker, and grid-equipment vendors benefit.",
    keyCompanies: ["LONGi", "Trina", "First Solar", "Enphase"],
    keywords: ["solar", "PV", "BNEF", "renewables"],
    difficulty: "Beginner",
    readingTime: "4 min",
    sourceName: "BloombergNEF",
    sourceUrl: "https://about.bnef.com",
    publishedDate: "2026-05-24",
    importanceScore: 0.78,
    quiz: makeQuiz(
      "Why is solar growing so fast?",
      [
        "It is the cheapest new generation in most markets",
        "It is mandated globally",
        "It requires no land",
      ],
      "It is the cheapest new generation in most markets",
    ),
  },
  {
    id: "en-w1",
    category: "energy",
    timeWindow: "week",
    title: "First commercial offshore wind in US Mid-Atlantic energized",
    shortSummary:
      "The first large-scale commercial offshore wind farm in the US Mid-Atlantic delivered first power to the grid.",
    longExplanation:
      "After years of delays, the project marks a milestone for a sector that has struggled with rising costs and supply-chain issues.",
    whyItMatters:
      "Offshore wind is a key piece of state-level clean-energy targets. Real megawatts on the grid validate the policy push.",
    backgroundContext:
      "Several US offshore projects were cancelled or repriced in 2023-24. The remaining ones serve as bellwethers.",
    industryImpact:
      "Validates Tier 1 OEMs and offshore EPC contractors. Encourages re-bidding of paused projects.",
    keyCompanies: ["Ørsted", "Equinor", "Avangrid"],
    keywords: ["offshore wind", "renewables", "grid"],
    difficulty: "Intermediate",
    readingTime: "5 min",
    sourceName: "Reuters",
    sourceUrl: "https://www.reuters.com",
    publishedDate: "2026-05-19",
    importanceScore: 0.7,
    quiz: makeQuiz(
      "Why is this offshore wind milestone significant?",
      [
        "It validates US offshore wind after recent cancellations",
        "It replaces all coal in the region",
        "It eliminates grid congestion",
      ],
      "It validates US offshore wind after recent cancellations",
    ),
  },
  {
    id: "en-m1",
    category: "energy",
    timeWindow: "month",
    title: "Grid-scale battery storage installs cross 200 GWh annually",
    shortSummary:
      "Global grid-scale battery installations crossed a 200 GWh annual run rate, doubling in under two years.",
    longExplanation:
      "Falling cell prices and growing renewable penetration are pushing utilities to deploy storage at unprecedented rates. China and the US lead.",
    whyItMatters:
      "Storage is the missing piece that lets renewables scale beyond 50% grid share without reliability issues.",
    backgroundContext:
      "Storage was a niche pre-2020. Tesla Megapack and Chinese suppliers drove a manufacturing scale-up.",
    industryImpact:
      "Battery cell oversupply persists, helping integrators. New revenue stacks (arbitrage, ancillary services) emerge.",
    keyCompanies: ["Tesla", "CATL", "Fluence", "BYD"],
    keywords: ["storage", "battery", "grid"],
    difficulty: "Intermediate",
    readingTime: "5 min",
    sourceName: "Wood Mackenzie",
    sourceUrl: "https://www.woodmac.com",
    publishedDate: "2026-04-30",
    importanceScore: 0.76,
    quiz: makeQuiz(
      "Why does grid-scale storage matter for renewables?",
      [
        "It enables higher renewable penetration without reliability issues",
        "It increases coal use",
        "It bypasses the need for transmission lines",
      ],
      "It enables higher renewable penetration without reliability issues",
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
  title: string,
  short: string,
  long: string,
  why: string,
): Briefing => ({
  id,
  category,
  timeWindow,
  title,
  shortSummary: short,
  longExplanation: long,
  whyItMatters: why,
  backgroundContext:
    "This briefing was the top story from the prior period and is preserved for context and comparison.",
  industryImpact:
    "Use this to see how this period's developments build on (or diverge from) the prior period's narrative.",
  keyCompanies: [],
  keywords: ["recap", category],
  difficulty: "Beginner",
  readingTime: "2 min",
  sourceName: "TrendLingo Recap",
  sourceUrl: "#",
  publishedDate: "2026-05-20",
  importanceScore: 0.5,
  quiz: {
    question: "What kind of briefing is this?",
    options: ["A live news alert", "A prior-period recap", "An ad"],
    correctAnswer: "A prior-period recap",
  },
});

const PRIOR_BRIEFINGS: Briefing[] = [
  makePrior("ai-y1", "ai", "yesterday",
    "OpenAI publishes safety eval results for agent mode",
    "Ahead of today's rollout, OpenAI shared red-team results on its long-horizon agent.",
    "Yesterday's release covered jailbreak resistance, tool misuse, and audit-log completeness — setting expectations for today's enterprise launch.",
    "Safety evals are how labs preempt regulator and enterprise-buyer questions."),
  makePrior("ai-lw1", "ai", "lastWeek",
    "Claude 4.5 ships with longer context and tool-use upgrades",
    "Anthropic shipped Claude 4.5 last week with a 2M-token context and better tool routing.",
    "The release closed a feature gap on context length and made tool selection more reliable, setting up this week's frontier-lab comparisons.",
    "Context length compounds — agents can reason over entire codebases or document sets in one pass."),
  makePrior("ai-lm1", "ai", "lastMonth",
    "AI agents cross 50% on a public office-work benchmark",
    "Last month, agents broke 50% completion on a real-world office benchmark.",
    "It's the first time an open evaluation showed agents finishing the majority of standard office tasks unsupervised — context for this month's capex acceleration.",
    "It is the data point that justified another leg of hyperscaler spend."),

  makePrior("sc-y1", "semiconductors", "yesterday",
    "TSMC raises 2026 capex guidance ahead of N2 launch",
    "TSMC pre-announced higher capex, setting up today's N2 ramp news.",
    "Yesterday's guidance increase signaled confidence in early-N2 demand and front-loaded equipment orders.",
    "Capex guidance is the cleanest leading indicator for the entire equipment supply chain."),
  makePrior("sc-lw1", "semiconductors", "lastWeek",
    "SK hynix sells out HBM4 capacity through 2027",
    "Last week SK hynix confirmed full sell-out of HBM4 capacity.",
    "HBM remains the tightest AI-chip input. Last week's allocation news set the stage for today's export-control move.",
    "When supply is sold out years ahead, regulation becomes the next lever buyers and governments pull."),
  makePrior("sc-lm1", "semiconductors", "lastMonth",
    "Nvidia Blackwell Ultra hits full production",
    "Last month Blackwell Ultra reached steady-state volume — context for this month's Rubin tease.",
    "It freed Nvidia to talk about the next platform without spooking buyers of the current one.",
    "Product transitions are choreographed: prior-gen has to be 'safe' before next-gen marketing begins."),

  makePrior("st-y1", "stocks", "yesterday",
    "Yesterday's PPI hints at today's CPI surprise",
    "Producer prices surprised to the downside yesterday, foreshadowing today's softer CPI.",
    "PPI often leads CPI by a day. Traders who read the signal positioned ahead of today's rally.",
    "Sequencing of macro prints matters as much as the prints themselves."),
  makePrior("st-lw1", "stocks", "lastWeek",
    "Mag-7 earnings season wraps with mixed reads",
    "Mega-cap tech earnings finished mixed last week — guidance gaps set up this week's volatility.",
    "Aggregate AI capex commentary was strong, but per-name margin guides diverged.",
    "Index-level optimism can mask growing dispersion under the surface."),
  makePrior("st-lm1", "stocks", "lastMonth",
    "BOJ signals patience, kicking off Japan's run",
    "The BOJ's patience signal last month is why Japan kept grinding higher this month.",
    "It anchored expectations for an extended weak-yen, equity-positive backdrop.",
    "Central-bank guidance changes the discount rate every asset is priced against."),

  makePrior("auto-y1", "automotive", "yesterday",
    "EV price war intensifies in China",
    "Chinese EV makers cut prices again yesterday, pressuring global incumbents.",
    "BYD and rivals trimmed sticker prices and added incentives, squeezing margins across the sector.",
    "Auto pricing in China sets the global ceiling for EV margins."),
  makePrior("auto-lw1", "automotive", "lastWeek",
    "Self-driving rideshare crosses 10M paid trips",
    "Robotaxi services reported a milestone in trip volume last week.",
    "Volume growth proves the unit economics work in at least a handful of cities.",
    "It validates the model for cautious capital — expect more launch cities next."),
  makePrior("auto-lm1", "automotive", "lastMonth",
    "Solid-state battery pilot lines come online",
    "Two OEMs brought solid-state pilot lines online last month.",
    "Pilot-line news matters more than lab results because it commits real capex.",
    "Battery chemistry is the single biggest cost lever in EVs for the next decade."),

  makePrior("health-y1", "healthcare", "yesterday",
    "FDA accepts BLA for novel obesity dual-agonist",
    "The FDA accepted a Biologics License Application for a next-gen obesity drug yesterday.",
    "Acceptance starts the review clock — a near-term catalyst the market priced in immediately.",
    "BLA acceptance is procedural but information-rich; the market treats it as a real catalyst."),
  makePrior("health-lw1", "healthcare", "lastWeek",
    "GLP-1 supply finally meets demand in the US",
    "Manufacturing scale-ups closed the GLP-1 shortage last week.",
    "Pricing power may finally normalize as on-shelf supply becomes routine.",
    "Shortages distort revenue and margin — normalization resets the baseline."),
  makePrior("health-lm1", "healthcare", "lastMonth",
    "First CRISPR therapy hits commercial milestone",
    "A first-wave CRISPR therapy passed a meaningful commercial milestone last month.",
    "It is the first proof that gene-editing economics can clear regulatory and payer hurdles.",
    "The 'will payers pay?' question is finally getting answered."),

  makePrior("energy-y1", "energy", "yesterday",
    "OPEC+ holds production unchanged",
    "OPEC+ left production targets unchanged yesterday, keeping oil rangebound.",
    "A no-news decision is itself a signal: the cartel is comfortable at current price levels.",
    "Inaction maintains the floor under prices without spiking them."),
  makePrior("energy-lw1", "energy", "lastWeek",
    "US grid sets new summer peak record",
    "Multiple US ISOs reported new peak loads last week, driven by data centers and heat.",
    "Peak records compress reserve margins and accelerate the case for new capacity.",
    "Demand growth, not just generation mix, is now the binding story for the grid."),
  makePrior("energy-lm1", "energy", "lastMonth",
    "Long-duration storage projects break ground",
    "Last month saw multiple long-duration storage projects move from FID to construction.",
    "Long-duration storage is the missing piece for high-renewable grids.",
    "Once construction starts, learning curves and supply chains begin to form."),
];

// Per-difficulty rewrites for a handful of flagship briefings. Other briefings
// fall back to base text; the modal surfaces a notice in that case.
const LEVEL_OVERRIDES: Record<string, Briefing["levels"]> = {
  "ai-t1": {
    beginner: {
      longExplanation:
        "Imagine asking an assistant to 'plan our team offsite' and walking away. It searches for venues, drafts the agenda, and emails vendors — by itself. That's 'agent mode': it breaks one big request into many small steps and does them on its own. Today's update lets large companies use it with proper safety controls.",
      whyItMatters:
        "Most office work is a series of small steps. If AI can chain them together reliably, a task that took half a day can now be triggered with one sentence.",
    },
    advanced: {
      longExplanation:
        "Agent mode exposes a planner-executor loop with tool routing, persistent memory, and audit hooks. Today's enterprise GA tier adds per-tool RBAC, signed audit logs streamed to the customer's SIEM, and per-run budget caps — the missing controls that previously blocked production use beyond pilots.",
      whyItMatters:
        "The unit of automation shifts from prompt to multi-hour workflow. Vendors whose value proposition is workflow orchestration face direct substitution risk on a 12–18 month horizon.",
    },
  },
  "sc-t1": {
    beginner: {
      longExplanation:
        "Transistors are the tiny on/off switches inside every chip. To pack more in, the industry keeps redesigning them. TSMC's new '2nm' process uses a new switch design (called gate-all-around) so chips in next year's iPhones and AI servers can be faster and use less power.",
    },
    advanced: {
      longExplanation:
        "N2 transitions from FinFET to nanosheet GAA, improving electrostatic control and enabling Vt tuning via sheet width. Early defect density is reportedly tracking ahead of N3 at the equivalent ramp point. Apple holds lead-customer status; HPC tape-outs (Nvidia Rubin, AMD MI400) follow in H2 with CoWoS-L packaging.",
    },
  },
  "st-t1": {
    beginner: {
      longExplanation:
        "Inflation came in lower than expected. When inflation cools, the Federal Reserve usually lowers interest rates. Lower rates make stocks more attractive than savings accounts and bonds, so investors bought today.",
      whyItMatters:
        "Inflation is the single biggest thing investors watch. Even a small surprise can move the entire market.",
    },
    advanced: {
      longExplanation:
        "Headline CPI printed 2.3% YoY vs 2.5% consensus; core moderated on softer shelter and services ex-energy. Fed funds futures repriced from 1 cut to 2 cuts by year-end, with the first cut now ~70% by September. Curve bull-steepened: 2s richened 12bp, 10s 6bp, lifting long-duration equities (XLK, semis) into the close.",
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
