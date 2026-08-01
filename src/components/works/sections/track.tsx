import { useCallback, useEffect, useRef, useState } from "react";
import {
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "framer-motion";
import { works, archiveLink } from "../data";
import Card from "./card";
import EndCard from "./endCard";
import Rail from "./rail";

const Track = () => {
  const wrapRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  const totalSlots = works.length + 1;
  const [centerIndex, setCenterIndex] = useState(0);
  const [layout, setLayout] = useState({ c0: 0, travel: 0, viewportW: 0 });

  const { scrollYProgress } = useScroll({
    target: wrapRef,
    offset: ["start start", "end end"],
  });

  const x = useTransform(
    scrollYProgress,
    [0, 1],
    [layout.viewportW / 2 - layout.c0, layout.viewportW / 2 - layout.c0 - layout.travel]
  );

  const measure = useCallback(() => {
    const wrap = wrapRef.current;
    const track = trackRef.current;
    if (!wrap || !track) return;
    const cards = Array.from(track.children) as HTMLElement[];
    if (!cards.length) return;
    const first = cards[0];
    const last = cards[cards.length - 1];
    const c0 = first.offsetLeft + first.offsetWidth / 2;
    const cLast = last.offsetLeft + last.offsetWidth / 2;
    const travel = Math.max(0, cLast - c0);
    wrap.style.height = `${window.innerHeight + travel}px`;
    setLayout({ c0, travel, viewportW: window.innerWidth });
  }, []);

  useEffect(() => {
    measure();
    window.addEventListener("resize", measure);
    window.addEventListener("load", measure);
    const id = window.setTimeout(measure, 300);
    return () => {
      window.removeEventListener("resize", measure);
      window.removeEventListener("load", measure);
      window.clearTimeout(id);
    };
  }, [measure]);

  useMotionValueEvent(scrollYProgress, "change", (p) => {
    const next = Math.round(p * (totalSlots - 1));
    if (next !== centerIndex) setCenterIndex(next);
  });

  const scrollToCard = useCallback(
    (i: number) => {
      const wrap = wrapRef.current;
      if (!wrap) return;
      const clamped = Math.max(0, Math.min(totalSlots - 1, i));
      const p = totalSlots > 1 ? clamped / (totalSlots - 1) : 0;
      const totalV = wrap.offsetHeight - window.innerHeight;
      const top = wrap.offsetTop + p * totalV;
      window.scrollTo({ top, behavior: "smooth" });
    },
    [totalSlots]
  );

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") scrollToCard(centerIndex + 1);
      if (e.key === "ArrowLeft") scrollToCard(centerIndex - 1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [centerIndex, scrollToCard]);

  return (
    <section ref={wrapRef} className="relative">
      <div className="sticky top-0 h-screen flex flex-col pt-9 pb-7 overflow-hidden">
        <div className="w-full max-w-[1180px] mx-auto px-6 md:px-14">
          <div className="flex items-center justify-between gap-6">
            <div className="flex items-center gap-3.5 font-mono text-[12px] tracking-[0.18em] uppercase text-[#6E7470]">
              <span className="inline-flex items-center justify-center w-6 h-6 rounded-full border border-[#2A2E2A] text-[10px] text-[#F4F1EA]">
                03
              </span>
              <span>Selected Work</span>
            </div>
            <div className="hidden md:block font-bold text-[22px] tracking-[-0.02em] text-[#F4F1EA]">
              Selected Work<span className="text-[#6E7470]">.</span>
            </div>
          </div>
        </div>

        <div className="flex-1 flex items-center overflow-hidden min-h-0">
          <motion.div
            ref={trackRef}
            className="flex gap-[34px] items-stretch will-change-transform"
            style={{ x }}
          >
            {works.map((item, i) => (
              <Card
                key={`${item.title}-${i}`}
                item={item}
                index={i}
                totalCount={works.length}
                slotCount={totalSlots}
                scrollYProgress={scrollYProgress}
                isCenter={i === centerIndex}
              />
            ))}
            <EndCard
              index={works.length}
              slotCount={totalSlots}
              scrollYProgress={scrollYProgress}
              href={archiveLink}
            />
          </motion.div>
        </div>

        <Rail
          scrollYProgress={scrollYProgress}
          centerIndex={centerIndex}
          workCount={works.length}
          totalSlots={totalSlots}
          onPrev={() => scrollToCard(centerIndex - 1)}
          onNext={() => scrollToCard(centerIndex + 1)}
        />
      </div>
    </section>
  );
};

export default Track;
