import { useEffect, useRef, type ReactNode } from "react";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";

type Props = {
  /** Always-visible base layer. */
  base: ReactNode;
  /** Duplicate layer revealed under the cursor spotlight. */
  reveal: ReactNode;
  /** Classes for the outer positioned container. */
  className?: string;
  /** Classes for the revealed layer (its background / filter). */
  revealClassName?: string;
  /** Spotlight diameter at rest / over plain content. */
  baseSize?: number;
  /** Kept for backward-compat; per-region sizes come from `data-spotlight`. */
  hoverSize?: number;
};

/**
 * Cursor-spotlight reveal — two stacked copies of the same content, the top one
 * masked to a circle that follows the pointer.
 *
 * Both the circle's POSITION and its SIZE are driven through sprung motion
 * values, and the centering offset (`size / 2`) is derived from the *same*
 * sprung size. That's what keeps region size-changes (via `data-spotlight`)
 * smooth: without it, size pops instantly and the center lurches by half the
 * size delta — the "snap". Position is recomputed on both pointer move and
 * scroll so the circle stays glued to the cursor while scrolling.
 */
const MaskReveal = ({
  base,
  reveal,
  className = "",
  revealClassName = "",
  baseSize = 80,
}: Props) => {
  const ref = useRef<HTMLDivElement>(null);
  const client = useRef({ x: -9999, y: -9999 });

  // raw pointer position in the layer's coordinate space (client − rect)
  const px = useMotionValue(-9999);
  const py = useMotionValue(-9999);
  const sizeMV = useMotionValue(baseSize);

  const spx = useSpring(px, { stiffness: 700, damping: 45, mass: 0.25 });
  const spy = useSpring(py, { stiffness: 700, damping: 45, mass: 0.25 });
  // softer spring on size so growing/shrinking reads as an ease, not a pop
  const ssize = useSpring(sizeMV, { stiffness: 260, damping: 30, mass: 0.5 });

  // top-left of the mask = pointer − radius, using the *animated* size so the
  // circle stays centered on the cursor as it grows.
  const maskPosition = useTransform(
    [spx, spy, ssize] as const,
    ([x, y, s]: number[]) => `${x - s / 2}px ${y - s / 2}px`
  );
  const maskSize = useMotionTemplate`${ssize}px`;

  useEffect(() => {
    const place = () => {
      const el = ref.current;
      if (!el) return;
      const r = el.getBoundingClientRect();
      px.set(client.current.x - r.left);
      py.set(client.current.y - r.top);
    };

    const onMove = (e: MouseEvent) => {
      client.current = { x: e.clientX, y: e.clientY };
      const hit = (e.target as HTMLElement)?.closest?.("[data-spotlight]");
      const attr = hit?.getAttribute("data-spotlight");
      sizeMV.set(attr ? Number(attr) : baseSize);
      place();
    };

    window.addEventListener("mousemove", onMove);
    // capture:true also catches scrolls from inner scroll containers (e.g. Lenis)
    window.addEventListener("scroll", place, { passive: true, capture: true });
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("scroll", place, true);
    };
  }, [px, py, sizeMV, baseSize]);

  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`}>
      {base}
      <motion.div
        aria-hidden
        className={`mask-reveal-layer ${revealClassName}`}
        style={{
          WebkitMaskPosition: maskPosition,
          WebkitMaskSize: maskSize,
        }}
      >
        {reveal}
      </motion.div>
    </div>
  );
};

export default MaskReveal;
