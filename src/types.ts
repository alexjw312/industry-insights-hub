export type Category =
  | "ai"
  | "semiconductors"
  | "stocks"
  | "automotive"
  | "healthcare"
  | "energy";

export type TimeWindow = "today" | "week" | "month";

export type Difficulty = "Beginner" | "Intermediate" | "Advanced";

export interface Quiz {
  question: string;
  options: string[];
  correctAnswer: string;
}

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
}

export interface CategoryMeta {
  slug: Category;
  name: string;
  description: string;
  icon: string; // lucide icon name (used via dynamic lookup)
  accent: string; // tailwind class hue
}
