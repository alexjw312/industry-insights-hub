# Phase B: Real news from RSS feeds

Replace the hard-coded mock briefings in `src/data/briefings.ts` with real articles pulled from per-category RSS feeds, summarized into briefing format by Lovable AI (with EN + KO in one pass), and cached in the database.

## Architecture

```text
RSS feeds ──► ingest route ──► briefings_raw ──► summarize route ──► briefings (DB) ──► server fn ──► UI
                  ▲                                    ▲
              pg_cron hourly                     pg_cron every 15min
```

Two `/api/public/*` routes triggered by `pg_cron`; one server fn (`getBriefings`) read by the UI; `briefings.ts` becomes a fallback only.

## Database (one migration)

- `briefings_raw` — `id`, `category`, `source_name`, `source_url` (unique), `title`, `description`, `published_at`, `fetched_at`, `processed_at` (nullable)
- `briefings` — same shape as today's `Briefing` type but every localized field stored as `jsonb` (`{en, ko}`). Columns: `id` (uuid), `category`, `time_window` (computed from `published_at`), `title_jsonb`, `short_summary_jsonb`, `long_explanation_jsonb`, `why_it_matters_jsonb`, `background_context_jsonb`, `industry_impact_jsonb`, `key_companies text[]`, `keywords text[]`, `difficulty`, `reading_time`, `source_name`, `source_url`, `published_date`, `importance_score`, `quiz_jsonb`, `levels_jsonb`, `created_at`. Indexed on `(category, published_at desc)`.
- RLS: public `SELECT` on `briefings`; `service_role` writes both tables. `briefings_raw` is service-role-only.
- GRANTs included per project rules.

## RSS feed list (curated, per category)

- **AI**: TechCrunch AI, The Verge AI, MIT Tech Review AI
- **Semiconductors**: AnandTech, Tom's Hardware, SemiAnalysis
- **Stocks**: Reuters Markets, WSJ Markets, CNBC Markets
- **Automotive**: Electrek, InsideEVs, Automotive News
- **Healthcare**: STAT News, Fierce Biotech, Reuters Health
- **Energy**: Bloomberg Green, Reuters Energy, Oilprice.com

Stored as a constant in the route file (no separate config table — easy to edit in code).

## Routes

### `src/routes/api/public/hooks/ingest-rss.ts` (POST, hourly)
- Fetches each feed, parses XML (use `fast-xml-parser` — pure JS, Worker-safe).
- Upserts items into `briefings_raw` keyed by `source_url` (skip dupes).
- Auth: `apikey` header check against `SUPABASE_PUBLISHABLE_KEY`.

### `src/routes/api/public/hooks/summarize-briefings.ts` (POST, every 15 min)
- Picks up to N unprocessed rows from `briefings_raw`.
- For each, one Lovable AI call (`google/gemini-2.5-flash`) returning structured JSON with all localized fields (EN+KO), quiz, level overrides, difficulty, reading time, keywords, importance score.
- Inserts into `briefings`, marks raw as processed.
- Auth: same `apikey` header.

### `pg_cron` jobs (in the same migration)
- `ingest-rss-hourly` → `0 * * * *`
- `summarize-briefings-quarterly` → `*/15 * * * *`
Both call the stable preview URL via `pg_net` with the anon key.

## Server function

### `src/lib/briefings.functions.ts` — `getBriefings({ category, timeWindow })`
- Queries `briefings` table by category + window (today/yesterday/week/etc. derived from `published_date`).
- Falls back to `briefings.ts` mock if DB is empty (smooth dev experience + safety net).
- Returns the same `Briefing[]` shape the UI already consumes — no UI changes needed beyond swapping the data source.

## UI changes (minimal)

- `src/routes/categories.$slug.tsx`: replace `getBriefingsForCategory(...)` call with a `useQuery` wrapping `getBriefings`. Loading skeleton during fetch.
- `src/routes/index.tsx` + `profile.tsx`: same swap where they read briefings.
- `src/data/briefings.ts`: keep as fallback/seed only — types and `CATEGORIES` stay.

## Secrets

- `LOVABLE_API_KEY` — already present.
- No new secrets needed (anon key used for cron auth).

## Dependencies

- `fast-xml-parser` (Worker-safe RSS parser).

## Out of scope (queued for later)

- On-demand translation cache table (`briefing_translations`) — current design generates EN+KO upfront so it's unneeded.
- Per-user feed customization / source preferences.
- Image extraction from articles.

## Files touched

- New: `supabase` migration; `src/routes/api/public/hooks/ingest-rss.ts`; `src/routes/api/public/hooks/summarize-briefings.ts`; `src/lib/briefings.functions.ts`; `src/lib/briefings.server.ts` (RSS list + summarization prompt)
- Edited: `src/routes/categories.$slug.tsx`, `src/routes/index.tsx`, `src/routes/profile.tsx`, `package.json` (fast-xml-parser)
- Kept: `src/data/briefings.ts` (fallback)
