import { createFileRoute } from "@tanstack/react-router";
import { supabaseAdmin } from "@/integrations/supabase/client.server";
import { deriveTimeWindow, summarizeArticle, type CategorySlug } from "@/lib/briefings.server";

const BATCH_SIZE = 8;

function authorized(request: Request) {
  const key = request.headers.get("apikey") ?? request.headers.get("x-api-key");
  return key && key === process.env.SUPABASE_PUBLISHABLE_KEY;
}

export const Route = createFileRoute("/api/public/hooks/summarize-briefings")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        if (!authorized(request)) {
          return new Response("Unauthorized", { status: 401 });
        }

        const { data: rows, error } = await supabaseAdmin
          .from("briefings_raw")
          .select("*")
          .is("processed_at", null)
          .order("published_at", { ascending: false })
          .limit(BATCH_SIZE);

        if (error) {
          return Response.json({ ok: false, error: error.message }, { status: 500 });
        }
        if (!rows?.length) {
          return Response.json({ ok: true, processed: 0 });
        }

        let processed = 0;
        const errors: string[] = [];

        for (const row of rows) {
          try {
            const out = await summarizeArticle({
              category: row.category as CategorySlug,
              title: row.title,
              description: row.description,
              source_url: row.source_url,
              source_name: row.source_name,
            });

            const { error: insertErr } = await supabaseAdmin.from("briefings").insert({
              category: row.category,
              time_window: deriveTimeWindow(row.published_at),
              title: out.title,
              short_summary: out.short_summary,
              long_explanation: out.long_explanation,
              why_it_matters: out.why_it_matters,
              background_context: out.background_context,
              industry_impact: out.industry_impact,
              key_companies: out.key_companies ?? [],
              keywords: out.keywords ?? [],
              difficulty: out.difficulty,
              reading_time: out.reading_time,
              source_name: row.source_name,
              source_url: row.source_url,
              published_date: row.published_at,
              importance_score: out.importance_score ?? 5,
              quiz: {
                question: out.quiz.question,
                options: out.quiz.options,
                correctAnswer: out.quiz.correct_answer,
              },
            });

            if (insertErr) throw new Error(insertErr.message);

            await supabaseAdmin
              .from("briefings_raw")
              .update({ processed_at: new Date().toISOString() })
              .eq("id", row.id);

            processed++;
          } catch (e) {
            const msg = (e as Error).message;
            errors.push(`${row.id}: ${msg}`);
            await supabaseAdmin
              .from("briefings_raw")
              .update({ processed_at: new Date().toISOString(), process_error: msg })
              .eq("id", row.id);
          }
        }

        return Response.json({ ok: true, processed, errors });
      },
    },
  },
});
