import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { useServerFn } from "@tanstack/react-start";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Flame, BookOpen, Award } from "lucide-react";
import { Header } from "@/components/Header";
import { Badge } from "@/components/ui/badge";
import { getUserProgress } from "@/lib/progress.functions";
import { useLocalized } from "@/lib/localized";
import { BRIEFINGS } from "@/data/briefings";
import { getRecentBriefingsByIds } from "@/lib/briefings.functions";
import { useSession } from "@/routes/__root";

export const Route = createFileRoute("/profile")({
  head: () => ({ meta: [{ title: "Your progress — TrendLingo" }] }),
  component: ProfilePage,
});

function ProfilePage() {
  const { session, ready } = useSession();
  const navigate = useNavigate();
  const { t } = useTranslation();
  const loc = useLocalized();
  const fn = useServerFn(getUserProgress);
  useEffect(() => {
    if (ready && !session) navigate({ to: "/login" });
  }, [ready, session, navigate]);

  const { data, isLoading } = useQuery({
    queryKey: ["progress"],
    queryFn: () => fn(),
    enabled: !!session,
  });

  const completedIds = (data?.completed ?? []).map((p) => p.briefing_id);
  const fetchByIds = useServerFn(getRecentBriefingsByIds);
  const { data: liveBriefings } = useQuery({
    queryKey: ["recent-briefings", completedIds.slice(0, 20)],
    queryFn: () => fetchByIds({ data: { ids: completedIds.slice(0, 20) } }),
    enabled: completedIds.length > 0,
  });
  const liveMap = new Map((liveBriefings?.briefings ?? []).map((b) => [b.id, b]));

  if (!session) return null;

  const completed = data?.completed ?? [];
  const streak = data?.streak ?? { current_streak: 0, longest_streak: 0, last_active_date: null };
  const correctCount = (data?.recentQuizzes ?? []).filter((q) => q.is_correct).length;
  const totalQuiz = (data?.recentQuizzes ?? []).length;

  return (
    <div className="min-h-screen">
      <Header />
      <main className="mx-auto max-w-5xl px-4 py-10 sm:px-6">
        <h1 className="font-display text-3xl font-semibold">{t("profile.title")}</h1>
        <p className="mt-1 text-muted-foreground">{t("profile.subtitle")}</p>

        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          <StatCard icon={<Flame className="h-5 w-5 text-accent" />} label={t("profile.currentStreak")} value={`${streak.current_streak} ${streak.current_streak === 1 ? t("profile.day") : t("profile.days")}`} />
          <StatCard icon={<Award className="h-5 w-5 text-primary" />} label={t("profile.longestStreak")} value={`${streak.longest_streak} ${t("profile.days")}`} />
          <StatCard icon={<BookOpen className="h-5 w-5 text-primary" />} label={t("profile.learned")} value={`${completed.length}`} />
        </div>

        <div className="mt-6 rounded-2xl border border-border bg-card p-5" style={{ boxShadow: "var(--shadow-elegant)" }}>
          <div className="text-sm font-semibold">{t("profile.quizAccuracy")}</div>
          <div className="mt-1 text-2xl font-display">
            {totalQuiz === 0 ? "—" : `${Math.round((correctCount / totalQuiz) * 100)}%`}
          </div>
          <div className="text-xs text-muted-foreground">{correctCount} / {totalQuiz} {t("profile.recent", { total: totalQuiz })}</div>
        </div>

        <h2 className="mt-10 mb-4 font-display text-xl font-semibold">{t("profile.recentlyLearned")}</h2>
        {isLoading ? (
          <p className="text-sm text-muted-foreground">{t("profile.loading")}</p>
        ) : completed.length === 0 ? (
          <div className="rounded-2xl border border-dashed border-border p-10 text-center text-sm text-muted-foreground">
            {t("profile.empty")} <Link to="/" className="text-primary hover:underline">{t("profile.pickCategory")}</Link>
          </div>
        ) : (
          <ul className="space-y-2">
            {completed.slice(0, 20).map((p) => {
              const b = liveMap.get(p.briefing_id) ?? BRIEFINGS.find((x) => x.id === p.briefing_id);
              return (
                <li key={p.briefing_id} className="flex items-center justify-between rounded-xl border border-border bg-card px-4 py-3">
                  <div>
                    <div className="text-sm font-medium">{b ? loc(b.title) : p.briefing_id}</div>
                    <div className="text-xs text-muted-foreground">{new Date(p.completed_at).toLocaleDateString()}</div>
                  </div>
                  <Badge variant="secondary">{p.category}</Badge>
                </li>
              );
            })}
          </ul>
        )}
      </main>
    </div>
  );
}

function StatCard({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-border bg-card p-5" style={{ boxShadow: "var(--shadow-elegant)" }}>
      <div className="flex items-center gap-2 text-sm text-muted-foreground">{icon} {label}</div>
      <div className="mt-2 font-display text-2xl font-semibold">{value}</div>
    </div>
  );
}
