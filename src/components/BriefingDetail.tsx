import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useServerFn } from "@tanstack/react-start";
import { Check, ExternalLink, X, Sparkles, Info } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { toast } from "sonner";
import type { Briefing, Localized, ReadingLevel } from "@/types";
import { markBriefingLearned, submitQuizAttempt } from "@/lib/progress.functions";
import { useSession } from "@/routes/__root";
import { useReadingLevel } from "@/lib/preferences";
import { useLocalized } from "@/lib/localized";

const LEVELS: ReadingLevel[] = ["beginner", "intermediate", "advanced"];

function pick(
  b: Briefing,
  level: ReadingLevel,
  field: "longExplanation" | "whyItMatters" | "backgroundContext" | "industryImpact",
): Localized {
  return b.levels?.[level]?.[field] ?? b[field];
}

export function BriefingDetail({ briefing, open, onOpenChange }: {
  briefing: Briefing | null; open: boolean; onOpenChange: (v: boolean) => void;
}) {
  const { t } = useTranslation();
  const loc = useLocalized();
  const { session } = useSession();
  const qc = useQueryClient();
  const markFn = useServerFn(markBriefingLearned);
  const quizFn = useServerFn(submitQuizAttempt);
  // Track picked answer by its English value (stable identity across languages).
  const [pickedEn, setPickedEn] = useState<string | null>(null);
  const [revealed, setRevealed] = useState(false);
  const [level, setLevel] = useReadingLevel();

  const mark = useMutation({
    mutationFn: () => markFn({ data: { briefingId: briefing!.id, category: briefing!.category } }),
    onSuccess: () => {
      toast.success("Marked as learned! 🎉");
      qc.invalidateQueries({ queryKey: ["progress"] });
    },
    onError: (e: Error) => toast.error(e.message),
  });
  const recordQuiz = useMutation({
    mutationFn: (args: { selected: string; correct: boolean }) =>
      quizFn({ data: { briefingId: briefing!.id, selectedAnswer: args.selected, isCorrect: args.correct } }),
  });

  if (!briefing) return null;
  const correctAnswerEn = briefing.quiz.correctAnswer.en;
  const hasOverride = !!briefing.levels?.[level];
  const showLevelNotice = level !== "intermediate" && !hasOverride;

  function reset() {
    setPickedEn(null);
    setRevealed(false);
  }

  return (
    <Dialog open={open} onOpenChange={(v) => { onOpenChange(v); if (!v) reset(); }}>
      <DialogContent className="max-h-[90vh] max-w-2xl overflow-y-auto">
        <DialogHeader>
          <div className="mb-2 flex flex-wrap items-center gap-2">
            <Badge variant="secondary">{briefing.difficulty}</Badge>
            <Badge variant="outline">{briefing.readingTime}</Badge>
            <span className="text-xs text-muted-foreground">{briefing.publishedDate} · {briefing.sourceName}</span>
          </div>
          <DialogTitle className="font-display text-2xl leading-tight">{loc(briefing.title)}</DialogTitle>
          <DialogDescription className="text-base leading-relaxed text-foreground/80">
            {loc(briefing.shortSummary)}
          </DialogDescription>
        </DialogHeader>

        {/* Reading level selector */}
        <div className="rounded-xl border border-border bg-secondary/30 p-3">
          <div className="mb-2 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
            {t("level.label")}
          </div>
          <ToggleGroup
            type="single"
            value={level}
            onValueChange={(v) => v && setLevel(v as ReadingLevel)}
            className="grid grid-cols-3 gap-1"
          >
            {LEVELS.map((l) => (
              <ToggleGroupItem
                key={l}
                value={l}
                className="rounded-lg border border-transparent px-2 py-1.5 text-xs data-[state=on]:border-primary/40 data-[state=on]:bg-card data-[state=on]:text-foreground"
              >
                {t(`level.${l}`)}
              </ToggleGroupItem>
            ))}
          </ToggleGroup>
          <p className="mt-2 text-xs text-muted-foreground">{t(`level.${level}Hint`)}</p>
        </div>

        {showLevelNotice && (
          <div className="flex items-start gap-2 rounded-xl border border-dashed border-border bg-card p-3 text-xs text-muted-foreground">
            <Info className="mt-0.5 h-3.5 w-3.5 shrink-0" />
            <p>{t("level.fallbackNotice")}</p>
          </div>
        )}

        <div className="space-y-5 pt-2">
          <Section title={t("detail.whatHappened")}>{loc(pick(briefing, level, "longExplanation"))}</Section>
          <Section title={t("detail.whyMatters")}>{loc(pick(briefing, level, "whyItMatters"))}</Section>
          <Section title={t("detail.background")}>{loc(pick(briefing, level, "backgroundContext"))}</Section>
          <Section title={t("detail.industryImpact")}>{loc(pick(briefing, level, "industryImpact"))}</Section>

          {briefing.keyCompanies.length > 0 && (
            <div>
              <h4 className="mb-2 text-sm font-semibold text-muted-foreground">{t("detail.keyCompanies")}</h4>
              <div className="flex flex-wrap gap-1.5">
                {briefing.keyCompanies.map((c) => <Badge key={c} variant="outline">{c}</Badge>)}
              </div>
            </div>
          )}
          <div>
            <h4 className="mb-2 text-sm font-semibold text-muted-foreground">{t("detail.keywords")}</h4>
            <div className="flex flex-wrap gap-1.5">
              {briefing.keywords.map((k) => <Badge key={k} variant="secondary">#{k}</Badge>)}
            </div>
          </div>

          {/* Quiz */}
          <div className="rounded-2xl border border-border bg-secondary/40 p-5">
            <div className="mb-3 flex items-center gap-2 text-sm font-semibold">
              <Sparkles className="h-4 w-4 text-accent" /> {t("detail.miniQuiz")}
            </div>
            <p className="mb-4 font-medium">{loc(briefing.quiz.question)}</p>
            <div className="space-y-2">
              {briefing.quiz.options.map((opt) => {
                const isPicked = pickedEn === opt.en;
                const isCorrect = opt.en === correctAnswerEn;
                const showState = revealed && (isPicked || isCorrect);
                return (
                  <button
                    key={opt.en}
                    onClick={() => { if (!revealed) setPickedEn(opt.en); }}
                    disabled={revealed}
                    className={`flex w-full items-center justify-between rounded-xl border px-4 py-3 text-left text-sm transition-all ${
                      showState && isCorrect ? "border-success bg-success/10" :
                      showState && isPicked && !isCorrect ? "border-destructive bg-destructive/10" :
                      isPicked ? "border-primary bg-primary/5" :
                      "border-border bg-card hover:border-primary/40"
                    }`}
                  >
                    <span>{loc(opt)}</span>
                    {showState && isCorrect && <Check className="h-4 w-4 text-success" />}
                    {showState && isPicked && !isCorrect && <X className="h-4 w-4 text-destructive" />}
                  </button>
                );
              })}
            </div>
            {!revealed ? (
              <Button
                className="mt-4 w-full"
                disabled={!pickedEn}
                onClick={() => {
                  setRevealed(true);
                  if (session) recordQuiz.mutate({ selected: pickedEn!, correct: pickedEn === correctAnswerEn });
                }}
              >
                {t("detail.checkAnswer")}
              </Button>
            ) : (
              <p className="mt-4 text-sm text-muted-foreground">
                {pickedEn === correctAnswerEn
                  ? t("detail.correct")
                  : t("detail.incorrect", { answer: loc(briefing.quiz.correctAnswer) })}
              </p>
            )}
          </div>

          {/* Footer actions */}
          <div className="flex flex-wrap items-center justify-between gap-3 border-t border-border pt-4">
            <a href={briefing.sourceUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground">
              <ExternalLink className="h-3.5 w-3.5" /> {t("detail.viewSource")}
            </a>
            {session ? (
              <Button onClick={() => mark.mutate()} disabled={mark.isPending}>
                {mark.isPending ? t("detail.saving") : t("detail.markLearned")}
              </Button>
            ) : (
              <p className="text-xs text-muted-foreground">{t("detail.signInPrompt")}</p>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h4 className="mb-1.5 text-sm font-semibold text-muted-foreground">{title}</h4>
      <p className="text-sm leading-relaxed text-foreground/90">{children}</p>
    </div>
  );
}
