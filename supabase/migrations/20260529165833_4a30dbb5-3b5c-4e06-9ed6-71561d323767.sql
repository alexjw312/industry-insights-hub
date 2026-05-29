
-- Extensions for scheduling
CREATE EXTENSION IF NOT EXISTS pg_cron;
CREATE EXTENSION IF NOT EXISTS pg_net;

-- Raw RSS items
CREATE TABLE public.briefings_raw (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  category text NOT NULL,
  source_name text NOT NULL,
  source_url text NOT NULL UNIQUE,
  title text NOT NULL,
  description text,
  published_at timestamptz NOT NULL,
  fetched_at timestamptz NOT NULL DEFAULT now(),
  processed_at timestamptz,
  process_error text
);
CREATE INDEX idx_briefings_raw_unprocessed ON public.briefings_raw (category, published_at DESC) WHERE processed_at IS NULL;

GRANT ALL ON public.briefings_raw TO service_role;
ALTER TABLE public.briefings_raw ENABLE ROW LEVEL SECURITY;
-- No policies: only service_role (which bypasses RLS) can access.

-- Final, AI-summarized briefings
CREATE TABLE public.briefings (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  category text NOT NULL,
  time_window text NOT NULL,
  title jsonb NOT NULL,
  short_summary jsonb NOT NULL,
  long_explanation jsonb NOT NULL,
  why_it_matters jsonb NOT NULL,
  background_context jsonb NOT NULL,
  industry_impact jsonb NOT NULL,
  key_companies text[] NOT NULL DEFAULT '{}',
  keywords text[] NOT NULL DEFAULT '{}',
  difficulty text NOT NULL,
  reading_time text NOT NULL,
  source_name text NOT NULL,
  source_url text NOT NULL UNIQUE,
  published_date timestamptz NOT NULL,
  importance_score numeric NOT NULL DEFAULT 5,
  quiz jsonb NOT NULL,
  levels jsonb,
  created_at timestamptz NOT NULL DEFAULT now()
);
CREATE INDEX idx_briefings_cat_window ON public.briefings (category, time_window, published_date DESC);
CREATE INDEX idx_briefings_cat_published ON public.briefings (category, published_date DESC);

GRANT SELECT ON public.briefings TO anon;
GRANT SELECT ON public.briefings TO authenticated;
GRANT ALL ON public.briefings TO service_role;

ALTER TABLE public.briefings ENABLE ROW LEVEL SECURITY;

CREATE POLICY "briefings public read"
ON public.briefings
FOR SELECT
TO anon, authenticated
USING (true);
