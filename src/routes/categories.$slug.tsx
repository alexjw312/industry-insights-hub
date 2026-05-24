import { useState } from "react";
import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, BookOpen, RefreshCw } from "lucide-react";
import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { BriefingDetail } from "@/components/BriefingDetail";
import { CATEGORIES, getBriefingsForCategory } from "@/data/briefings";
import type { Briefing, TimeWindow } from "@/types";

export const Route = createFileRoute("/categories/$slug")({
  loader: ({ params }) => {
    const cat = CATEGORIES.find((c) => c.slug === params.slug);
    if (!cat) throw notFound();
    return { category: cat };
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: `${loaderData?.category.name ?? "Category"} briefings — TrendLingo` },
      { name: "description", content: `Today, this week, and this month's top trends in ${loaderData?.category.name}.` },
    ],
  }),
  component: CategoryPage,
});

function CategoryPage() {
  const { category } = Route.useLoaderData();
  const [selected, setSelected] = useState<Briefing | null>(null);
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen">
      <Header />
      <main className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        <Link to="/" className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground">
          <ArrowLeft className="h-4 w-4" /> Back to categories
        </Link>
        <div className="mt-4 mb-8 flex flex-wrap items-end justify-between gap-4">
          <div>
            <h1 className="font-display text-3xl font-semibold sm:text-4xl">{category.name}</h1>
            <p className="mt-1 text-muted-foreground">{category.description}</p>
          </div>
          <Button variant="outline" size="sm" className="gap-1.5" onClick={() => window.location.reload()}>
            <RefreshCw className="h-3.5 w-3.5" /> Refresh briefings
          </Button>
        </div>

        <Tabs defaultValue="today" className="w-full">
          <TabsList className="mb-6">
            <TabsTrigger value="today">Today</TabsTrigger>
            <TabsTrigger value="week">This Week</TabsTrigger>
            <TabsTrigger value="month">This Month</TabsTrigger>
          </TabsList>
          {(["today", "week", "month"] as TimeWindow[]).map((tw) => {
            const items = getBriefingsForCategory(category.slug, tw);
            return (
              <TabsContent key={tw} value={tw}>
                <div className="mb-4 flex items-center gap-2 text-sm text-muted-foreground">
                  <BookOpen className="h-4 w-4" />
                  <span>Lesson set: {tw === "today" ? "Today" : tw === "week" ? "This week" : "This month"} · {items.length} briefings</span>
                </div>
                {items.length === 0 ? (
                  <div className="rounded-2xl border border-dashed border-border p-10 text-center text-muted-foreground">
                    More briefings for {category.name} are coming soon.
                  </div>
                ) : (
                  <div className="grid gap-5 lg:grid-cols-3">
                    {items.map((b) => (
                      <button
                        key={b.id}
                        onClick={() => { setSelected(b); setOpen(true); }}
                        className="group flex h-full flex-col rounded-2xl border border-border bg-card p-5 text-left transition-all hover:-translate-y-1 hover:border-primary/40"
                        style={{ boxShadow: "var(--shadow-elegant)" }}
                      >
                        <div className="mb-3 flex flex-wrap items-center gap-1.5">
                          <Badge variant="secondary">{b.difficulty}</Badge>
                          <Badge variant="outline">{b.readingTime}</Badge>
                        </div>
                        <h3 className="font-display text-lg font-semibold leading-snug">{b.title}</h3>
                        <p className="mt-2 line-clamp-3 text-sm text-muted-foreground">{b.shortSummary}</p>
                        <div className="mt-3 rounded-xl bg-secondary/50 p-3 text-xs">
                          <span className="font-semibold text-foreground">Why it matters: </span>
                          <span className="text-muted-foreground">{b.whyItMatters}</span>
                        </div>
                        <div className="mt-3 flex flex-wrap gap-1">
                          {b.keywords.slice(0, 3).map((k) => (
                            <span key={k} className="text-xs text-muted-foreground">#{k}</span>
                          ))}
                        </div>
                        <div className="mt-auto flex items-center justify-between pt-4 text-xs text-muted-foreground">
                          <span>{b.sourceName}</span>
                          <span className="inline-flex items-center gap-1 font-medium text-primary">
                            Learn more <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5" />
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
