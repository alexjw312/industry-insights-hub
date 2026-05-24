import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Sparkles, Cpu, TrendingUp, Car, Stethoscope, Zap, ArrowRight, Clock, BookOpen,
} from "lucide-react";
import { Header } from "@/components/Header";
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
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero */}
        <section className="relative overflow-hidden border-b border-border">
          <div className="absolute inset-0 -z-10 opacity-60"
               style={{ background: "radial-gradient(60% 50% at 50% 0%, oklch(0.62 0.13 160 / 12%), transparent 70%)" }} />
          <div className="mx-auto max-w-4xl px-6 py-20 text-center sm:py-28">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-3 py-1 text-xs font-medium text-muted-foreground">
              <Sparkles className="h-3 w-3" /> Daily · Weekly · Monthly
            </span>
            <h1 className="mt-6 font-display text-4xl font-semibold tracking-tight sm:text-6xl">
              Learn today's most important <br className="hidden sm:block" />
              <span className="bg-[image:var(--gradient-primary)] bg-clip-text text-transparent">industry trends</span> in minutes.
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
              AI-powered daily, weekly, and monthly briefings for fast-moving industries. Bite-sized lessons, beginner-friendly explanations, and a quiz to test what you learned.
            </p>
            <div className="mt-8 flex items-center justify-center gap-3">
              <a href="#categories">
                <Button size="lg" className="gap-2">
                  Pick a category <ArrowRight className="h-4 w-4" />
                </Button>
              </a>
              <Link to="/login">
                <Button size="lg" variant="outline">Sign in to track progress</Button>
              </Link>
            </div>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
              <span className="inline-flex items-center gap-1.5"><Clock className="h-4 w-4" /> 3–7 min per briefing</span>
              <span className="inline-flex items-center gap-1.5"><BookOpen className="h-4 w-4" /> Top 3 stories per window</span>
            </div>
          </div>
        </section>

        {/* Categories */}
        <section id="categories" className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
          <div className="mb-10 text-center">
            <h2 className="font-display text-3xl font-semibold sm:text-4xl">Pick your industry</h2>
            <p className="mt-2 text-muted-foreground">Six fast-moving categories. More coming soon.</p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {CATEGORIES.map((cat) => {
              const Icon = ICONS[cat.icon as keyof typeof ICONS] ?? Sparkles;
              return (
                <Link
                  key={cat.slug}
                  to="/categories/$slug"
                  params={{ slug: cat.slug }}
                  className="group relative overflow-hidden rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:border-primary/40"
                  style={{ boxShadow: "var(--shadow-elegant)" }}
                >
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[image:var(--gradient-primary)] text-primary-foreground">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-semibold">{cat.name}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{cat.description}</p>
                  <div className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-primary">
                    Start learning <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
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
