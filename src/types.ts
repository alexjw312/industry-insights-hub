export type Category =
  | "ai"
  | "semiconductors"
  | "stocks"
  | "automotive"
  | "healthcare"
  | "energy";

export type TimeBucket = "daily" | "weekly" | "monthly";
export type TimePeriod = "current" | "previous";

export type TimeWindow =
  | "today"
  | "yesterday"
  | "week"
  | "lastWeek"
  | "month"
  | "lastMonth";

export const TIME_WINDOW_MAP: Record<
  TimeBucket,
  Record<TimePeriod, TimeWindow>
> = {
  daily: { current: "today", previous: "yesterday" },
  weekly: { current: "week", previous: "lastWeek" },
  monthly: { current: "month", previous: "lastMonth" },
};

export type Difficulty = "Beginner" | "Intermediate" | "Advanced";
export type ReadingLevel = "beginner" | "intermediate" | "advanced";
export type Language = "en" | "ko";

export interface Quiz {
  question: string;
  options: string[];
  correctAnswer: string;
}

export type LevelOverrides = Partial<
  Record<
    ReadingLevel,
    Partial<{
      longExplanation: string;
      whyItMatters: string;
      backgroundContext: string;
      industryImpact: string;
    }>
  >
>;

export interface Briefing {
  id: string;
  category: Category;
  timeWindow: TimeWindow;
  title: string;
  shortSummary: string;
  longExplanation: string;
  whyItMatters: string;
  backgroundContext: string;
  industryImpact: string;
  keyCompanies: string[];
  keywords: string[];
  difficulty: Difficulty;
  readingTime: string;
  sourceName: string;
  sourceUrl: string;
  publishedDate: string;
  importanceScore: number;
  quiz: Quiz;
  /** Optional per-reading-level overrides. Falls back to base fields. */
  levels?: LevelOverrides;
}

export interface CategoryMeta {
  slug: Category;
  name: string;
  description: string;
  icon: string;
  accent: string;
  /** CSS color token name, e.g. "category-ai" — defined in styles.css */
  colorToken: string;
}
