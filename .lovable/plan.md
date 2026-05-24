# TrendLingo — Personalization & Polish Update

## 1. Difficulty levels (per-user reading mode)

User-selectable reading level that controls **how each briefing is explained**:

- **Beginner** — plain language, analogies, no jargon. Defines every acronym.
- **Intermediate** — assumes basic industry knowledge. Default.
- **Advanced** — technical depth, numbers, second-order effects.

Implementation:
- Extend each `Briefing` so the long-form fields (`longExplanation`, `whyItMatters`, `backgroundContext`, `industryImpact`) become `{ beginner, intermediate, advanced }` objects. Mock data filled for AI / Semiconductors / Stocks; other categories fall back to `intermediate`.
- **Reading level** segmented control in the briefing detail modal header (instant switch, no reload).
- Persist preference: `localStorage` for guests, `profiles.reading_level` column for logged-in users (synced on login).
- Quiz also becomes `{ beginner, intermediate, advanced }` with tougher distractors per level.
- Placeholder `summarizeWithLLM(briefing, { level })` signature updated for future LLM regeneration per level.

## 2. Time windows — nested current/previous

Top-level tabs stay **Daily / Weekly / Monthly** (3 tabs). Inside each, a smaller secondary toggle switches between current and previous period:

```text
[ Daily ] [ Weekly ] [ Monthly ]
   └─ ( Today | Yesterday )
   └─ ( This Week | Last Week )
   └─ ( This Month | Last Month )
```

- `TimeWindow` type becomes `{ bucket: 'daily'|'weekly'|'monthly', period: 'current'|'previous' }`.
- Outer = existing `Tabs`; inner = compact `ToggleGroup` (single-select pill) above the briefing grid. Stays readable on the 729px viewport.
- Default lands on current period; selection is remembered per-bucket while navigating (so switching Daily→Weekly→Daily keeps your "Yesterday" pick).
- Mock data gets a small "previous period" set per category (3 per prior window for AI/Semi/Stocks, 1–2 elsewhere) so tabs aren't empty.
- Profile page gains a "this week vs last week" comparison stat.

## 3. Internationalization — English & Korean

- Add `i18next` + `react-i18next`.
- UI strings extracted to `src/locales/{en,ko}.json` (nav, buttons, tab labels, modal sections, profile stats, auth, toasts).
- Briefing content is bilingual: every text field becomes `{ en, ko }`. Mock data filled for both languages on AI/Semi/Stocks; others ship English-only with a "Translation coming soon" notice when KO is selected and missing.
- Language switcher in the header (EN / KO). Persisted in `localStorage` for guests, `profiles.language` for logged-in users.
- `<html lang>` updated reactively for SEO/a11y. Per-route meta titles/descriptions localized.
- Placeholder `summarizeWithLLM(briefing, { level, lang })` updated for future translation pipeline.

## 4. Per-category theming

Each category gets its own accent color + subtle gradient, applied to category cards, the category header, badges, and the "Why it matters" highlight box.

Suggested palette (all defined as CSS tokens in `src/styles.css`):

- **AI** — violet (`oklch(0.62 0.18 290)`)
- **Semiconductors** — electric blue (`oklch(0.62 0.16 240)`)
- **Stocks** — emerald green (current primary)
- **Automotive / EV** — orange (`oklch(0.68 0.17 50)`)
- **Healthcare** — teal (`oklch(0.65 0.12 190)`)
- **Energy** — amber/gold (`oklch(0.72 0.15 80)`)

`CATEGORIES` gains `colorToken` + `gradientToken`. A small `useCategoryTheme(slug)` hook injects scoped CSS vars (`--category`, `--category-gradient`) on the category page wrapper. Global semantic tokens (`--primary`, etc.) stay untouched.

## 5. Other ideas worth considering

Pick any to include now; rest can be deferred:

1. **Daily lesson goal & streak protection** — goal of 1/3/5 briefings/day, progress ring in header, one "freeze" per week.
2. **Bookmark / "Read later"** — save briefings to a personal list on profile.
3. **Search & keyword filter** — search across briefings, filter by tag (`#NVIDIA`, `#EV`) across categories.
4. **"Trending now" on home** — top 3 by importance across all industries, for discovery.
5. **Dark mode toggle** — tokens already OKLCH; mostly a `.dark` palette + header switch.
6. **Share a briefing** — OG image per briefing + copy-link button. Great for portfolio demos.
7. **Audio mode (TTS)** — browser `SpeechSynthesis`, no backend cost.
8. **Glossary tooltips** — hover/tap acronyms (LLM, HBM, P/E) for inline definitions. Pairs naturally with Beginner mode.

My recommendation for this round: **#1, #3, #5, #8** — reinforce the learning-app feel without ballooning scope.

## Technical notes

- DB migration: new `profiles` table with `reading_level` (`text default 'intermediate'`), `language` (`text default 'en'`), optionally `daily_goal int`. Auto-created on first login via trigger on `auth.users`. RLS: user can read/update own row.
- New server fn `updatePreferences({ reading_level?, language?, daily_goal? })` protected by `requireSupabaseAuth`.
- `Briefing` type refactor is the largest mechanical change — done in one pass.
- Guest preferences (localStorage) sync into Supabase on first login (server wins if set, else use local).

## Questions before I build

1. For Korean, do you want me to **translate the existing mock briefings into KO myself**, or ship KO with placeholder copy and let real translation come with the LLM integration later?
2. Which of the "other ideas" should I include in this round? (My pick: 1, 3, 5, 8.)
