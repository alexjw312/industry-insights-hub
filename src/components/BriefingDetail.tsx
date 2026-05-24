import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useServerFn } from "@tanstack/react-start";
import { Check, ExternalLink, X, Sparkles } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";
import type { Briefing } from "@/types";
import { markBriefingLearned, submitQuizAttempt } from "@/lib/progress.functions";
import { useSession } from "@/routes/__root";

export function BriefingDetail({ briefing, open, onOpenChange }: {
  briefing: Briefing | null; open: boolean; onOpenChange: (v: boolean) => void;
}) {
  const { session } = useSession();
  const qc = useQueryClient();
  const markFn = useServerFn(markBriefingLearned);
  const quizFn = useServerFn(submitQuizAttempt);
  const [picked, setPicked] = useState<string | null>(null);
  const [revealed, setRevealed] = useState(false);

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
  const correctAnswer = briefing.quiz.correctAnswer;

  function reset() {
    setPicked(null);
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
          <DialogTitle className="font-display text-2xl leading-tight">{briefing.title}</DialogTitle>
          <DialogDescription className="text-base leading-relaxed text-foreground/80">
            {briefing.shortSummary}
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-5 pt-2">
          <Section title="What happened?">{briefing.longExplanation}</Section>
          <Section title="Why it matters">{briefing.whyItMatters}</Section>
          <Section title="Background">{briefing.backgroundContext}</Section>
          <Section title="Industry impact">{briefing.industryImpact}</Section>

          <div>
            <h4 className="mb-2 text-sm font-semibold text-muted-foreground">Key companies</h4>
            <div className="flex flex-wrap gap-1.5">
              {briefing.keyCompanies.map((c) => <Badge key={c} variant="outline">{c}</Badge>)}
            </div>
          </div>
          <div>
            <h4 className="mb-2 text-sm font-semibold text-muted-foreground">Keywords</h4>
            <div className="flex flex-wrap gap-1.5">
              {briefing.keywords.map((k) => <Badge key={k} variant="secondary">#{k}</Badge>)}
            </div>
          </div>

          {/* Quiz */}
          <div className="rounded-2xl border border-border bg-secondary/40 p-5">
            <div className="mb-3 flex items-center gap-2 text-sm font-semibold">
              <Sparkles className="h-4 w-4 text-accent" /> Mini quiz
            </div>
            <p className="mb-4 font-medium">{briefing.quiz.question}</p>
            <div className="space-y-2">
              {briefing.quiz.options.map((opt) => {
                const isPicked = picked === opt;
                const isCorrect = opt === correctAnswer;
                const showState = revealed && (isPicked || isCorrect);
                return (
                  <button
                    key={opt}
                    onClick={() => { if (!revealed) setPicked(opt); }}
                    disabled={revealed}
                    className={`flex w-full items-center justify-between rounded-xl border px-4 py-3 text-left text-sm transition-all ${
                      showState && isCorrect ? "border-success bg-success/10" :
                      showState && isPicked && !isCorrect ? "border-destructive bg-destructive/10" :
                      isPicked ? "border-primary bg-primary/5" :
                      "border-border bg-card hover:border-primary/40"
                    }`}
                  >
                    <span>{opt}</span>
                    {showState && isCorrect && <Check className="h-4 w-4 text-success" />}
                    {showState && isPicked && !isCorrect && <X className="h-4 w-4 text-destructive" />}
                  </button>
                );
              })}
            </div>
            {!revealed ? (
              <Button
                className="mt-4 w-full"
                disabled={!picked}
                onClick={() => {
                  setRevealed(true);
                  if (session) recordQuiz.mutate({ selected: picked!, correct: picked === correctAnswer });
                }}
              >
                Check answer
              </Button>
            ) : (
              <p className="mt-4 text-sm text-muted-foreground">
                {picked === correctAnswer ? "✅ Nice — that's correct." : `❌ Not quite. Correct answer: ${correctAnswer}.`}
              </p>
            )}
          </div>

          {/* Footer actions */}
          <div className="flex flex-wrap items-center justify-between gap-3 border-t border-border pt-4">
            <a href={briefing.sourceUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground">
              <ExternalLink className="h-3.5 w-3.5" /> View original source
            </a>
            {session ? (
              <Button onClick={() => mark.mutate()} disabled={mark.isPending}>
                {mark.isPending ? "Saving…" : "Mark as learned"}
              </Button>
            ) : (
              <p className="text-xs text-muted-foreground">Sign in to track progress & streaks.</p>
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
