// Server-only helpers: RSS feed list + AI summarization prompt.
import { XMLParser } from "fast-xml-parser";

export type CategorySlug =
  | "ai"
  | "semiconductors"
  | "stocks"
  | "automotive"
  | "healthcare"
  | "energy";

export const FEEDS: Record<CategorySlug, { name: string; url: string }[]> = {
  ai: [
    { name: "TechCrunch AI", url: "https://techcrunch.com/category/artificial-intelligence/feed/" },
    { name: "The Verge AI", url: "https://www.theverge.com/rss/ai-artificial-intelligence/index.xml" },
    { name: "MIT Technology Review", url: "https://www.technologyreview.com/feed/" },
  ],
  semiconductors: [
    { name: "AnandTech", url: "https://www.anandtech.com/rss/" },
    { name: "Tom's Hardware", url: "https://www.tomshardware.com/feeds/all" },
  ],
  stocks: [
    { name: "Reuters Markets", url: "https://feeds.reuters.com/reuters/businessNews" },
    { name: "CNBC Markets", url: "https://www.cnbc.com/id/100003114/device/rss/rss.html" },
  ],
  automotive: [
    { name: "Electrek", url: "https://electrek.co/feed/" },
    { name: "InsideEVs", url: "https://insideevs.com/rss/articles/all/" },
  ],
  healthcare: [
    { name: "STAT News", url: "https://www.statnews.com/feed/" },
    { name: "Fierce Biotech", url: "https://www.fiercebiotech.com/rss/xml" },
  ],
  energy: [
    { name: "Oilprice.com", url: "https://oilprice.com/rss/main" },
    { name: "Electrek Energy", url: "https://electrek.co/guides/energy/feed/" },
  ],
};

export interface RawItem {
  category: CategorySlug;
  source_name: string;
  source_url: string;
  title: string;
  description: string | null;
  published_at: string;
}

const parser = new XMLParser({
  ignoreAttributes: false,
  attributeNamePrefix: "@_",
  trimValues: true,
});

function stripHtml(s: string | undefined | null): string {
  if (!s) return "";
  return String(s).replace(/<[^>]*>/g, "").replace(/\s+/g, " ").trim();
}

export async function fetchFeed(category: CategorySlug, source: { name: string; url: string }): Promise<RawItem[]> {
  const res = await fetch(source.url, {
    headers: { "User-Agent": "TrendLingoBot/1.0 (+https://trendlingo.app)" },
  });
  if (!res.ok) throw new Error(`${source.name} ${res.status}`);
  const text = await res.text();
  const parsed = parser.parse(text);

  // Handle both RSS 2.0 (<rss><channel><item>) and Atom (<feed><entry>)
  const channelItems = parsed?.rss?.channel?.item;
  const atomEntries = parsed?.feed?.entry;
  const rawItems: any[] = Array.isArray(channelItems)
    ? channelItems
    : channelItems
    ? [channelItems]
    : Array.isArray(atomEntries)
    ? atomEntries
    : atomEntries
    ? [atomEntries]
    : [];

  const items: RawItem[] = [];
  for (const it of rawItems.slice(0, 15)) {
    const title = stripHtml(it.title?.["#text"] ?? it.title);
    const link =
      typeof it.link === "string"
        ? it.link
        : it.link?.["@_href"] ?? it.link?.[0]?.["@_href"] ?? it.guid?.["#text"] ?? it.guid;
    const desc = stripHtml(it.description ?? it.summary?.["#text"] ?? it.summary ?? it["content:encoded"]);
    const pub = it.pubDate ?? it.published ?? it.updated ?? new Date().toISOString();
    if (!title || !link) continue;
    items.push({
      category,
      source_name: source.name,
      source_url: String(link),
      title: title.slice(0, 500),
      description: desc.slice(0, 1500) || null,
      published_at: new Date(pub).toISOString(),
    });
  }
  return items;
}

// Time-window bucketing for the UI tabs (today/yesterday/week/lastWeek/month/lastMonth)
export function deriveTimeWindow(publishedAt: string): string {
  const now = Date.now();
  const t = new Date(publishedAt).getTime();
  const dayMs = 24 * 60 * 60 * 1000;
  const diffDays = Math.floor((now - t) / dayMs);
  if (diffDays < 1) return "today";
  if (diffDays < 2) return "yesterday";
  if (diffDays < 7) return "week";
  if (diffDays < 14) return "lastWeek";
  if (diffDays < 30) return "month";
  return "lastMonth";
}

// ---- AI summarization ----

export const SUMMARY_SYSTEM_PROMPT = `You are a financial/tech news educator who writes bilingual (English + Korean) learning briefings for retail investors and curious learners. Output STRICT JSON matching the provided schema. Korean must be natural, written by a fluent native speaker — not literal MT. Keep numbers, ticker symbols, and proper nouns intact.`;

export const SUMMARY_TOOL = {
  type: "function" as const,
  function: {
    name: "emit_briefing",
    description: "Emit a fully-localized briefing.",
    parameters: {
      type: "object",
      additionalProperties: false,
      required: [
        "title", "short_summary", "long_explanation", "why_it_matters",
        "background_context", "industry_impact", "key_companies", "keywords",
        "difficulty", "reading_time", "importance_score", "quiz",
      ],
      properties: {
        title: localizedSchema(),
        short_summary: localizedSchema(),
        long_explanation: localizedSchema(),
        why_it_matters: localizedSchema(),
        background_context: localizedSchema(),
        industry_impact: localizedSchema(),
        key_companies: { type: "array", items: { type: "string" } },
        keywords: { type: "array", items: { type: "string" } },
        difficulty: { type: "string", enum: ["Beginner", "Intermediate", "Advanced"] },
        reading_time: { type: "string", description: "e.g. '3 min'" },
        importance_score: { type: "number", minimum: 1, maximum: 10 },
        quiz: {
          type: "object",
          additionalProperties: false,
          required: ["question", "options", "correct_answer"],
          properties: {
            question: localizedSchema(),
            options: {
              type: "array",
              minItems: 3,
              maxItems: 4,
              items: localizedSchema(),
            },
            correct_answer: localizedSchema(),
          },
        },
      },
    },
  },
};

function localizedSchema() {
  return {
    type: "object",
    additionalProperties: false,
    required: ["en", "ko"],
    properties: { en: { type: "string" }, ko: { type: "string" } },
  };
}

export async function summarizeArticle(input: {
  category: CategorySlug;
  title: string;
  description: string | null;
  source_url: string;
  source_name: string;
}): Promise<any> {
  const LOVABLE_API_KEY = process.env.LOVABLE_API_KEY;
  if (!LOVABLE_API_KEY) throw new Error("LOVABLE_API_KEY missing");

  const userPrompt = `Category: ${input.category}
Source: ${input.source_name} (${input.source_url})
Headline: ${input.title}
Snippet: ${input.description ?? "(no snippet)"}

Write a fully-localized educational briefing. The "long_explanation" should be 3-5 sentences. The quiz should have 3 options and test understanding (not trivia).`;

  const res = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${LOVABLE_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model: "google/gemini-2.5-flash",
      messages: [
        { role: "system", content: SUMMARY_SYSTEM_PROMPT },
        { role: "user", content: userPrompt },
      ],
      tools: [SUMMARY_TOOL],
      tool_choice: { type: "function", function: { name: "emit_briefing" } },
    }),
  });

  if (!res.ok) {
    const body = await res.text();
    throw new Error(`AI gateway ${res.status}: ${body.slice(0, 200)}`);
  }

  const json = await res.json();
  const call = json?.choices?.[0]?.message?.tool_calls?.[0];
  if (!call?.function?.arguments) {
    throw new Error("AI gateway returned no tool call");
  }
  return JSON.parse(call.function.arguments);
}
