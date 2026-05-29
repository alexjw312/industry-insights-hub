import { createFileRoute } from "@tanstack/react-router";
import { supabaseAdmin } from "@/integrations/supabase/client.server";
import { FEEDS, fetchFeed, type CategorySlug } from "@/lib/briefings.server";

function authorized(request: Request) {
  const key = request.headers.get("apikey") ?? request.headers.get("x-api-key");
  return key && key === process.env.SUPABASE_PUBLISHABLE_KEY;
}

export const Route = createFileRoute("/api/public/hooks/ingest-rss")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        if (!authorized(request)) {
          return new Response("Unauthorized", { status: 401 });
        }

        const results: Record<string, { fetched: number; inserted: number; errors: string[] }> = {};

        for (const [category, sources] of Object.entries(FEEDS) as [CategorySlug, typeof FEEDS[CategorySlug]][]) {
          const summary = { fetched: 0, inserted: 0, errors: [] as string[] };
          for (const source of sources) {
            try {
              const items = await fetchFeed(category, source);
              summary.fetched += items.length;
              if (items.length === 0) continue;
              const { data, error } = await supabaseAdmin
                .from("briefings_raw")
                .upsert(items, { onConflict: "source_url", ignoreDuplicates: true })
                .select("id");
              if (error) {
                summary.errors.push(`${source.name}: ${error.message}`);
              } else {
                summary.inserted += data?.length ?? 0;
              }
            } catch (e) {
              summary.errors.push(`${source.name}: ${(e as Error).message}`);
            }
          }
          results[category] = summary;
        }

        return Response.json({ ok: true, results });
      },
    },
  },
});
