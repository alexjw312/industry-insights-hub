# Plan: Translate content with the language switch

Right now only UI chrome strings (`src/locales/en.json` / `ko.json`) swap when you toggle EN/KO. The category names, descriptions, and every briefing field (`title`, `shortSummary`, `longExplanation`, `whyItMatters`, `backgroundContext`, `industryImpact`, `quiz.question`, `quiz.options`, `quiz.correctAnswer`) live as plain English strings in `src/data/briefings.ts` and never change.

This plan ships **Phase A now** (hand-authored KO) and **queues Phase B** (AI Gateway + RSS) as the next milestone.

---

## Phase A — Hand-authored KO (this round)

### 1. Type changes (`src/types.ts`)
- Add `type Localized = { en: string; ko: string }`.
- On `Briefing`, convert these fields from `string` → `Localized`: `title`, `shortSummary`, `longExplanation`, `whyItMatters`, `backgroundContext`, `industryImpact`.
- On `Quiz`: `question: Localized`, `options: Localized[]`, `correctAnswer: Localized`.
- On `LevelOverrides`: same `Localized` shape for the four overridable text fields.
- On `CategoryMeta`: `name: Localized`, `description: Localized`.
- Keep `keyCompanies`, `keywords`, `sourceName` as plain strings (proper nouns / brands).

### 2. Helper (`src/lib/preferences.ts` or new `src/lib/localized.ts`)
- Add `useLocalized()` → returns `(loc: Localized) => string` based on `i18n.language`, with `en` fallback when `ko` is empty.
- Add `pickLocalized(loc, lang)` for non-hook contexts (e.g. inside `pick()` in `BriefingDetail`).

### 3. Data rewrite (`src/data/briefings.ts`)
- Convert all 6 `CATEGORIES` entries to `Localized` (KO category names: AI=인공지능, Semiconductors=반도체, Stocks=주식, Automotive=자동차, Healthcare=헬스케어, Energy=에너지).
- Translate every existing mock briefing's text fields + quizzes into KO. I'll write the KO copy myself at the same reading register as the EN.
- Remove the "Korean translation coming soon" notice (`detail.translationMissing`) — no longer accurate.

### 4. Component updates
- `src/components/BriefingDetail.tsx`: `pick()` now returns `Localized`; render via `useLocalized()`. Quiz options/answer comparison switches to comparing `Localized` by `en` key (stable identity) but rendering localized label.
- `src/routes/categories.$slug.tsx`: category header + briefing cards use `useLocalized()`.
- `src/routes/index.tsx`: category grid renders localized `name` / `description`.
- `src/routes/profile.tsx`: recently-learned list shows localized titles.

### 5. Cleanup
- Drop `detail.translationMissing` from both locale files; remove the `showKoNotice` branch in `BriefingDetail`.
- Keep the reading-level fallback notice (still relevant — beginner/advanced rewrites are still sparse).

### Out of scope for Phase A
- No DB changes. Briefings remain client-side mock.
- No SEO/meta translation for dynamic routes (already EN-only and acceptable for mock content).

---

## Phase B — Queued for next round (not built this turn)

Logged in `.lovable/plan.md` so we don't lose it:

1. **AI Gateway translation fallback** — server fn `translateBriefing({ id, level, lang })` calls Lovable AI (`google/gemini-2.5-flash`), caches result in a new `briefing_translations` table keyed by `(briefing_id, level, lang, field)`. UI shows skeleton on first view, cached forever after. Useful once briefings come from a feed.
2. **Real news via RSS** — server route under `src/routes/api/public/hooks/ingest-rss.ts` triggered by `pg_cron` (hourly). Per category, a curated RSS list (e.g. AI: TechCrunch AI, The Verge AI; Semiconductors: AnandTech, Tom's Hardware; Stocks: Reuters Markets, WSJ Markets; etc.). Parser writes raw items into a new `briefings_raw` table; a second job summarizes + level-rewrites via Lovable AI and writes the final localized `briefings` table that the UI reads (replacing `src/data/briefings.ts`).
3. **Migration path** — once Phase B is live, `briefings.ts` becomes a seed/fallback only; UI swaps to a server-fn `getBriefings({ category, window, lang, level })`.

---

## Technical notes

- `Localized` lookup uses `i18n.language` from `react-i18next`; fallback chain is `ko → en`. Empty string in `ko` still falls back so partial translations are safe.
- Quiz answer comparison must use a stable key (the `en` value) so a user picking an answer in KO still grades correctly — store `picked` as the `Localized` object, compare `picked.en === correctAnswer.en`.
- No DB migration in Phase A. Phase B will introduce `briefings`, `briefings_raw`, `briefing_translations` tables with RLS (public select, service-role write).
- No new dependencies for Phase A.

## Files touched (Phase A)
- `src/types.ts` — add `Localized`, change field types
- `src/data/briefings.ts` — full KO translation pass
- `src/lib/localized.ts` (new) — `useLocalized` hook + `pickLocalized` helper
- `src/components/BriefingDetail.tsx` — localized rendering, quiz comparison fix
- `src/routes/index.tsx` — localized category cards
- `src/routes/categories.$slug.tsx` — localized header + briefing cards
- `src/routes/profile.tsx` — localized recent-learned titles
- `src/locales/{en,ko}.json` — remove `detail.translationMissing`
- `.lovable/plan.md` — append Phase B backlog
