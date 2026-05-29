import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { supabaseAdmin } from "@/integrations/supabase/client.server";
import type { Briefing, Category, TimeWindow } from "@/types";
import { getBriefingsForCategory as mockGetBriefings } from "@/data/briefings";

const inputSchema = z.object({
  category: z.string().min(1).max(64),
  timeWindow: z.enum(["today", "yesterday", "week", "lastWeek", "month", "lastMonth"]),
});

function rowToBriefing(row: any): Briefing {
  return {
    id: row.id,
    category: row.category as Category,
    timeWindow: row.time_window as TimeWindow,
    title: row.title,
    shortSummary: row.short_summary,
    longExplanation: row.long_explanation,
    whyItMatters: row.why_it_matters,
    backgroundContext: row.background_context,
    industryImpact: row.industry_impact,
    keyCompanies: row.key_companies ?? [],
    keywords: row.keywords ?? [],
    difficulty: row.difficulty,
    readingTime: row.reading_time,
    sourceName: row.source_name,
    sourceUrl: row.source_url,
    publishedDate: row.published_date,
    importanceScore: Number(row.importance_score) || 5,
    quiz: row.quiz,
    levels: row.levels ?? undefined,
  };
}

export const getBriefings = createServerFn({ method: "GET" })
  .inputValidator((data: { category: string; timeWindow: TimeWindow }) => inputSchema.parse(data))
  .handler(async ({ data }) => {
    const { data: rows, error } = await supabaseAdmin
      .from("briefings")
      .select("*")
      .eq("category", data.category)
      .eq("time_window", data.timeWindow)
      .order("importance_score", { ascending: false })
      .order("published_date", { ascending: false })
      .limit(6);

    if (error) {
      console.error("getBriefings error:", error);
      // Fall back to mock so the UI never goes blank.
      return { briefings: mockGetBriefings(data.category, data.timeWindow), source: "mock" as const };
    }

    if (!rows || rows.length === 0) {
      return { briefings: mockGetBriefings(data.category, data.timeWindow), source: "mock" as const };
    }

    return { briefings: rows.slice(0, 3).map(rowToBriefing), source: "live" as const };
  });

export const getRecentBriefingsByIds = createServerFn({ method: "GET" })
  .inputValidator((data: { ids: string[] }) =>
    z.object({ ids: z.array(z.string()).max(50) }).parse(data),
  )
  .handler(async ({ data }) => {
    if (data.ids.length === 0) return { briefings: [] as Briefing[] };
    const { data: rows, error } = await supabaseAdmin
      .from("briefings")
      .select("*")
      .in("id", data.ids);
    if (error || !rows) return { briefings: [] as Briefing[] };
    return { briefings: rows.map(rowToBriefing) };
  });
