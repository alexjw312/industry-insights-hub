import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "@/locales/en.json";
import ko from "@/locales/ko.json";

const STORAGE_KEY = "trendlingo.lang";

function detectInitialLang(): "en" | "ko" {
  if (typeof window === "undefined") return "en";
  const stored = window.localStorage.getItem(STORAGE_KEY);
  if (stored === "en" || stored === "ko") return stored;
  const nav = window.navigator.language?.toLowerCase() ?? "";
  return nav.startsWith("ko") ? "ko" : "en";
}

if (!i18n.isInitialized) {
  void i18n.use(initReactI18next).init({
    resources: {
      en: { translation: en },
      ko: { translation: ko },
    },
    lng: detectInitialLang(),
    fallbackLng: "en",
    interpolation: { escapeValue: false },
  });
}

export function setLanguage(lng: "en" | "ko") {
  void i18n.changeLanguage(lng);
  if (typeof window !== "undefined") {
    window.localStorage.setItem(STORAGE_KEY, lng);
    document.documentElement.setAttribute("lang", lng);
  }
}

export default i18n;
