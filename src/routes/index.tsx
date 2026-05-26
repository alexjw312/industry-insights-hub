import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Sparkles, Cpu, TrendingUp, Car, Stethoscope, Zap, ArrowRight, Clock, BookOpen,
} from "lucide-react";
import { useTranslation } from "react-i18next";
import { Header } from "@/components/Header";
import { useLocalized } from "@/lib/localized";
import { Button } from "@/components/ui/button";
import { CATEGORIES } from "@/data/briefings";

const ICONS = { Sparkles, Cpu, TrendingUp, Car, Stethoscope, Zap } as const;

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "TrendLingo — Learn today's most important industry trends in minutes" },
      { name: "description", content: "AI-powered daily, weekly, and monthly briefings for AI, semiconductors, stocks, EV, healthcare, and energy." },
      { property: "og:title", content: "TrendLingo — Industry trends, learned fast" },
      { property: "og:description", content: "Duolingo-style briefings for fast-moving industries." },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  const { t } = useTranslation();
  const loc = useLocalized();
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <section className="relative overflow-hidden border-b border-border">
          <div className="absolute inset-0 -z-10 opacity-60"
               style={{ background: "radial-gradient(60% 50% at 50% 0%, oklch(0.62 0.13 160 / 12%), transparent 70%)" }} />
          <div className="mx-auto max-w-4xl px-6 py-20 text-center sm:py-28">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-3 py-1 text-xs font-medium text-muted-foreground">
              <Sparkles className="h-3 w-3" /> {t("home.tagline")}
            </span>
            <h1 className="mt-6 font-display text-4xl font-semibold tracking-tight sm:text-6xl">
              {t("home.headlineA")} <br className="hidden sm:block" />
              <span className="bg-[image:var(--gradient-primary)] bg-clip-text text-transparent">{t("home.headlineB")}</span> {t("home.headlineC")}
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
              {t("home.subtitle")}
            </p>
            <div className="mt-8 flex items-center justify-center gap-3">
              <a href="#categories">
                <Button size="lg" className="gap-2">
                  {t("home.ctaPick")} <ArrowRight className="h-4 w-4" />
                </Button>
              </a>
              <Link to="/login">
                <Button size="lg" variant="outline">{t("home.ctaSignIn")}</Button>
              </Link>
            </div>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
              <span className="inline-flex items-center gap-1.5"><Clock className="h-4 w-4" /> {t("home.perBriefing")}</span>
              <span className="inline-flex items-center gap-1.5"><BookOpen className="h-4 w-4" /> {t("home.topStories")}</span>
            </div>
          </div>
        </section>

        <section id="categories" className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
          <div className="mb-10 text-center">
            <h2 className="font-display text-3xl font-semibold sm:text-4xl">{t("home.pickIndustry")}</h2>
            <p className="mt-2 text-muted-foreground">{t("home.pickIndustrySub")}</p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {CATEGORIES.map((cat) => {
              const Icon = ICONS[cat.icon as keyof typeof ICONS] ?? Sparkles;
              const tint = `var(--${cat.colorToken})`;
              return (
                <Link
                  key={cat.slug}
                  to="/categories/$slug"
                  params={{ slug: cat.slug }}
                  className="group relative overflow-hidden rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-1"
                  style={{
                    boxShadow: "var(--shadow-elegant)",
                    borderTop: `3px solid ${tint}`,
                  }}
                >
                  <div
                    className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl text-white"
                    style={{ background: tint }}
                  >
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-semibold">{loc(cat.name)}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{loc(cat.description)}</p>
                  <div
                    className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium"
                    style={{ color: tint }}
                  >
                    {t("home.startLearning")} <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                  </div>
                </Link>
              );
            })}
          </div>
        </section>
      </main>
    </div>
  );
}
