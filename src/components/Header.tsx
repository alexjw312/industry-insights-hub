import { Link } from "@tanstack/react-router";
import { Flame, Globe, LogIn, LogOut } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { supabase } from "@/integrations/supabase/client";
import { useSession } from "@/routes/__root";
import { setLanguage } from "@/lib/i18n";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function Header() {
  const { session } = useSession();
  const { t, i18n } = useTranslation();
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/80 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link to="/" className="flex items-center gap-2">
          <span className="grid h-8 w-8 place-items-center rounded-xl bg-[image:var(--gradient-primary)] text-primary-foreground font-bold">T</span>
          <span className="font-display text-lg font-semibold tracking-tight">TrendLingo</span>
        </Link>
        <nav className="flex items-center gap-2">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="sm" className="gap-1.5">
                <Globe className="h-4 w-4" />
                <span className="hidden sm:inline uppercase">{i18n.language === "ko" ? "KO" : "EN"}</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => setLanguage("en")}>{t("lang.en")}</DropdownMenuItem>
              <DropdownMenuItem onClick={() => setLanguage("ko")}>{t("lang.ko")}</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          {session ? (
            <>
              <Link to="/profile">
                <Button variant="ghost" size="sm" className="gap-1.5">
                  <Flame className="h-4 w-4 text-accent" />
                  <span className="hidden sm:inline">{t("nav.streak")}</span>
                </Button>
              </Link>
              <Button variant="outline" size="sm" onClick={() => supabase.auth.signOut()} className="gap-1.5">
                <LogOut className="h-4 w-4" /> <span className="hidden sm:inline">{t("nav.signOut")}</span>
              </Button>
            </>
          ) : (
            <Link to="/login">
              <Button size="sm" className="gap-1.5">
                <LogIn className="h-4 w-4" /> {t("nav.signIn")}
              </Button>
            </Link>
          )}
        </nav>
      </div>
    </header>
  );
}
