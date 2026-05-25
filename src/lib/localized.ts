import { useTranslation } from "react-i18next";
import type { Language, Localized } from "@/types";

/** Compact constructor for bilingual strings. */
export const L = (en: string, ko: string): Localized => ({ en, ko });

/** Pure resolver — falls back to English when KO is missing/empty. */
export function pickLocalized(loc: Localized, lang: Language): string {
  if (lang === "ko" && loc.ko && loc.ko.trim().length > 0) return loc.ko;
  return loc.en;
}

/** Hook returning a stable resolver tied to the current i18n language. */
export function useLocalized() {
  const { i18n } = useTranslation();
  const lang = (i18n.language?.startsWith("ko") ? "ko" : "en") as Language;
  return (loc: Localized) => pickLocalized(loc, lang);
}
