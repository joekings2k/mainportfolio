import { useEffect, useRef, useState } from "react";
import {
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "framer-motion";
import { experiences } from "../data";
import Entry from "./entry";

const Timeline = () => {
  const ref = useRef<HTMLElement | null>(null);
  const markerRefs = useRef<Array<HTMLSpanElement | null>>([]);
  const [activeIndex, setActiveIndex] = useState(-1);
  const [markerFractions, setMarkerFractions] = useState<number[]>([]);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.45", "end 0.45"],
  });
  const fillHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  useEffect(() => {
    const measure = () => {
      const root = ref.current;
      if (!root) return;
      const rect = root.getBoundingClientRect();
      if (!rect.height) return;
      const fractions = markerRefs.current.map((m) => {
        if (!m) return Infinity;
        const r = m.getBoundingClientRect();
        const mid = r.top + r.height / 2 - rect.top;
        return mid / rect.height;
      });
      setMarkerFractions(fractions);
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  useMotionValueEvent(scrollYProgress, "change", (p) => {
    if (!markerFractions.length) return;
    let next = -1;
    for (let i = 0; i < markerFractions.length; i++) {
      if (markerFractions[i] <= p) next = i;
      else break;
    }
    if (next !== activeIndex) setActiveIndex(next);
  });

  return (
    <section ref={ref} className="relative pl-[52px] md:pl-20">
      <span className="exp-spine">
        <motion.span className="exp-spine-fill" style={{ height: fillHeight }} />
      </span>
      {experiences.map((e, i) => (
        <Entry
          key={`${e.company}-${i}`}
          entry={e}
          isActive={i === activeIndex}
          markerRef={(el) => {
            markerRefs.current[i] = el;
          }}
        />
      ))}
    </section>
  );
};

export default Timeline;
