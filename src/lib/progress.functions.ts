import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { requireSupabaseAuth } from "@/integrations/supabase/auth-middleware";
import { supabaseAdmin } from "@/integrations/supabase/client.server";

export const markBriefingLearned = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .inputValidator((input) =>
    z
      .object({
        briefingId: z.string().min(1).max(100),
        category: z.string().min(1).max(64),
      })
      .parse(input),
  )
  .handler(async ({ data, context }) => {
    const { supabase, userId } = context;
    const { error } = await supabase
      .from("user_progress")
      .upsert(
        {
          user_id: userId,
          briefing_id: data.briefingId,
          category: data.category,
        },
        { onConflict: "user_id,briefing_id" },
      );
    if (error) throw new Error(error.message);

    // Bump streak via admin client (function is revoked from end users)
    const { error: streakErr } = await supabaseAdmin.rpc("bump_user_streak", {
      _user_id: userId,
    });
    if (streakErr) console.error("streak bump failed:", streakErr.message);

    return { ok: true };
  });

export const submitQuizAttempt = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .inputValidator((input) =>
    z
      .object({
        briefingId: z.string().min(1).max(100),
        selectedAnswer: z.string().min(1).max(500),
        isCorrect: z.boolean(),
      })
      .parse(input),
  )
  .handler(async ({ data, context }) => {
    const { supabase, userId } = context;
    const { error } = await supabase.from("quiz_attempts").insert({
      user_id: userId,
      briefing_id: data.briefingId,
      selected_answer: data.selectedAnswer,
      is_correct: data.isCorrect,
    });
    if (error) throw new Error(error.message);
    return { ok: true };
  });

export const getUserProgress = createServerFn({ method: "GET" })
  .middleware([requireSupabaseAuth])
  .handler(async ({ context }) => {
    const { supabase, userId } = context;
    const [progressRes, streakRes, quizRes] = await Promise.all([
      supabase
        .from("user_progress")
        .select("briefing_id, category, completed_at")
        .order("completed_at", { ascending: false }),
      supabase
        .from("user_streaks")
        .select("current_streak, longest_streak, last_active_date")
        .eq("user_id", userId)
        .maybeSingle(),
      supabase
        .from("quiz_attempts")
        .select("briefing_id, is_correct, attempted_at")
        .order("attempted_at", { ascending: false })
        .limit(50),
    ]);

    return {
      completed: progressRes.data ?? [],
      streak: streakRes.data ?? {
        current_streak: 0,
        longest_streak: 0,
        last_active_date: null,
      },
      recentQuizzes: quizRes.data ?? [],
    };
  });
