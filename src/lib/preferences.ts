import { useEffect, useState } from "react";
import type { ReadingLevel } from "@/types";

const LEVEL_KEY = "trendlingo.level";

export function getStoredLevel(): ReadingLevel {
  if (typeof window === "undefined") return "intermediate";
  const v = window.localStorage.getItem(LEVEL_KEY);
  return v === "beginner" || v === "advanced" || v === "intermediate"
    ? v
    : "intermediate";
}

export function setStoredLevel(level: ReadingLevel) {
  if (typeof window !== "undefined") {
    window.localStorage.setItem(LEVEL_KEY, level);
    window.dispatchEvent(new CustomEvent("trendlingo:level", { detail: level }));
  }
}

export function useReadingLevel(): [ReadingLevel, (l: ReadingLevel) => void] {
  const [level, setLevel] = useState<ReadingLevel>("intermediate");
  useEffect(() => {
    setLevel(getStoredLevel());
    const handler = (e: Event) => {
      const ce = e as CustomEvent<ReadingLevel>;
      if (ce.detail) setLevel(ce.detail);
    };
    window.addEventListener("trendlingo:level", handler);
    return () => window.removeEventListener("trendlingo:level", handler);
  }, []);
  return [
    level,
    (l) => {
      setStoredLevel(l);
      setLevel(l);
    },
  ];
}
