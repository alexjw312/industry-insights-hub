import { useState } from "react";
import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, BookOpen, RefreshCw } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { BriefingDetail } from "@/components/BriefingDetail";
import { CATEGORIES, getBriefingsForCategory } from "@/data/briefings";
import { useLocalized } from "@/lib/localized";
import {
  TIME_WINDOW_MAP,
  type Briefing,
  type TimeBucket,
  type TimePeriod,
} from "@/types";

export const Route = createFileRoute("/categories/$slug")({
  loader: ({ params }) => {
    const cat = CATEGORIES.find((c) => c.slug === params.slug);
    if (!cat) throw notFound();
    return { category: cat };
  },
  head: ({ loaderData }) => {
    const name = loaderData?.category.name.en ?? "Category";
    return {
      meta: [
        { title: `${name} briefings — TrendLingo` },
        { name: "description", content: `Today, this week, and this month's top trends in ${name}.` },
      ],
    };
  },
  component: CategoryPage,
});

const BUCKETS: TimeBucket[] = ["daily", "weekly", "monthly"];

function CategoryPage() {
  const { category } = Route.useLoaderData();
  const { t } = useTranslation();
  const loc = useLocalized();
  const [selected, setSelected] = useState<Briefing | null>(null);
  const [open, setOpen] = useState(false);
  // Per-bucket period memory
  const [periods, setPeriods] = useState<Record<TimeBucket, TimePeriod>>({
    daily: "current",
    weekly: "current",
    monthly: "current",
  });

  // Inject category accent as CSS var
  const themeStyle = {
    ["--category" as string]: `var(--${category.colorToken})`,
  } as React.CSSProperties;

  return (
    <div className="min-h-screen" style={themeStyle}>
      <Header />
      <main className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        <Link to="/" className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground">
          <ArrowLeft className="h-4 w-4" /> {t("category.back")}
        </Link>
        <div className="mt-4 mb-8 flex flex-wrap items-end justify-between gap-4">
          <div className="flex items-center gap-4">
            <span
              className="grid h-12 w-12 place-items-center rounded-2xl text-white"
              style={{ background: "var(--category)" }}
              aria-hidden
            />
            <div>
              <h1 className="font-display text-3xl font-semibold sm:text-4xl">{loc(category.name)}</h1>
              <p className="mt-1 text-muted-foreground">{loc(category.description)}</p>
            </div>
          </div>
          <Button variant="outline" size="sm" className="gap-1.5" onClick={() => window.location.reload()}>
            <RefreshCw className="h-3.5 w-3.5" /> {t("category.refresh")}
          </Button>
        </div>

        <Tabs defaultValue="daily" className="w-full">
          <TabsList className="mb-4">
            {BUCKETS.map((b) => (
              <TabsTrigger key={b} value={b}>{t(`bucket.${b}`)}</TabsTrigger>
            ))}
          </TabsList>

          {BUCKETS.map((bucket) => {
            const period = periods[bucket];
            const tw = TIME_WINDOW_MAP[bucket][period];
            const items = getBriefingsForCategory(category.slug, tw);
            return (
              <TabsContent key={bucket} value={bucket}>
                <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
                  <ToggleGroup
                    type="single"
                    value={period}
                    onValueChange={(v) => {
                      if (v) setPeriods((p) => ({ ...p, [bucket]: v as TimePeriod }));
                    }}
                    className="rounded-full border border-border bg-card p-1"
                  >
                    <ToggleGroupItem
                      value="current"
                      className="rounded-full px-3 py-1 text-xs data-[state=on]:bg-secondary data-[state=on]:text-foreground"
                    >
                      {t(`window.${TIME_WINDOW_MAP[bucket].current}`)}
                    </ToggleGroupItem>
                    <ToggleGroupItem
                      value="previous"
                      className="rounded-full px-3 py-1 text-xs data-[state=on]:bg-secondary data-[state=on]:text-foreground"
                    >
                      {t(`window.${TIME_WINDOW_MAP[bucket].previous}`)}
                    </ToggleGroupItem>
                  </ToggleGroup>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <BookOpen className="h-4 w-4" />
                    <span>{t("category.lessonSet")}: {t(`window.${tw}`)} · {items.length} {t("category.briefings")}</span>
                  </div>
                </div>

                {items.length === 0 ? (
                  <div className="rounded-2xl border border-dashed border-border p-10 text-center text-muted-foreground">
                    {t("category.comingSoon", { name: category.name })}
                  </div>
                ) : (
                  <div className="grid gap-5 lg:grid-cols-3">
                    {items.map((b) => (
                      <button
                        key={b.id}
                        onClick={() => { setSelected(b); setOpen(true); }}
                        className="group flex h-full flex-col rounded-2xl border border-border bg-card p-5 text-left transition-all hover:-translate-y-1"
                        style={{
                          boxShadow: "var(--shadow-elegant)",
                          borderTop: "3px solid var(--category)",
                        }}
                      >
                        <div className="mb-3 flex flex-wrap items-center gap-1.5">
                          <Badge variant="secondary">{b.difficulty}</Badge>
                          <Badge variant="outline">{b.readingTime}</Badge>
                        </div>
                        <h3 className="font-display text-lg font-semibold leading-snug">{b.title}</h3>
                        <p className="mt-2 line-clamp-3 text-sm text-muted-foreground">{b.shortSummary}</p>
                        <div className="mt-3 rounded-xl bg-secondary/50 p-3 text-xs">
                          <span className="font-semibold text-foreground">{t("category.whyItMatters")} </span>
                          <span className="text-muted-foreground">{b.whyItMatters}</span>
                        </div>
                        <div className="mt-3 flex flex-wrap gap-1">
                          {b.keywords.slice(0, 3).map((k) => (
                            <span key={k} className="text-xs text-muted-foreground">#{k}</span>
                          ))}
                        </div>
                        <div className="mt-auto flex items-center justify-between pt-4 text-xs text-muted-foreground">
                          <span>{b.sourceName}</span>
                          <span
                            className="inline-flex items-center gap-1 font-medium"
                            style={{ color: "var(--category)" }}
                          >
                            {t("category.learnMore")} <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5" />
                          </span>
                        </div>
                      </button>
                    ))}
                  </div>
                )}
              </TabsContent>
            );
          })}
        </Tabs>
      </main>
      <BriefingDetail briefing={selected} open={open} onOpenChange={setOpen} />
    </div>
  );
}
