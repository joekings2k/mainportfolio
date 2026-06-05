import { useEffect, useRef } from "react";

export function useWordReveal<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const root = ref.current;
    if (!root) return;

    const words = Array.from(root.querySelectorAll<HTMLSpanElement>(".w"));
    if (!words.length) return;

    const update = () => {
      const vh = window.innerHeight;
      const anchor = vh * 0.58;
      const headBand = 60;
      let headEl: HTMLSpanElement | null = null;
      let headDist = Infinity;

      for (const w of words) {
        const r = w.getBoundingClientRect();
        const mid = r.top + r.height / 2;
        const d = anchor - mid;
        const lit = d >= -10;
        w.classList.toggle("lit", lit);
        w.classList.remove("head");
        if (lit) {
          const dist = Math.abs(d);
          if (dist < headBand && dist < headDist) {
            headDist = dist;
            headEl = w;
          }
        }
      }
      if (headEl) headEl.classList.add("head");
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return ref;
}
