import { Link } from "@tanstack/react-router";
import { Flame, LogIn, LogOut, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { supabase } from "@/integrations/supabase/client";
import { useSession } from "@/routes/__root";

export function Header() {
  const { session } = useSession();
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/80 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link to="/" className="flex items-center gap-2">
          <span className="grid h-8 w-8 place-items-center rounded-xl bg-[image:var(--gradient-primary)] text-primary-foreground font-bold">T</span>
          <span className="font-display text-lg font-semibold tracking-tight">TrendLingo</span>
        </Link>
        <nav className="flex items-center gap-2">
          {session ? (
            <>
              <Link to="/profile">
                <Button variant="ghost" size="sm" className="gap-1.5">
                  <Flame className="h-4 w-4 text-accent" />
                  <span className="hidden sm:inline">Streak</span>
                </Button>
              </Link>
              <Button variant="outline" size="sm" onClick={() => supabase.auth.signOut()} className="gap-1.5">
                <LogOut className="h-4 w-4" /> <span className="hidden sm:inline">Sign out</span>
              </Button>
            </>
          ) : (
            <Link to="/login">
              <Button size="sm" className="gap-1.5">
                <LogIn className="h-4 w-4" /> Sign in
              </Button>
            </Link>
          )}
        </nav>
      </div>
    </header>
  );
}
