import { useEffect, useState } from "react";

export type Theme = "light" | "dark";

export function useSectionTheme(
  defaultTheme: Theme = "light",
  rescanKey?: unknown
): Theme {
  const [theme, setTheme] = useState<Theme>(defaultTheme);

  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>("[data-theme]");
    if (!elements.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          const t = (entry.target as HTMLElement).dataset.theme;
          if (t === "light" || t === "dark") setTheme(t);
        }
      },
      { rootMargin: "-49% 0px -49% 0px", threshold: 0 }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
    // rescanKey lets callers (e.g. route changes) re-observe a fresh DOM
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [rescanKey]);

  return theme;
}
