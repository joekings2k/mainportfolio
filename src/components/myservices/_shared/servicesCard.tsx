import { useTransform, motion, useScroll, type MotionValue } from "framer-motion";
import { useRef } from "react";
import type { Service } from "./data";

const ServicesCard = ({
  i,
  service,
  range,
  targetScale,
  progress,
}: {
  i: number;
  service: Service;
  range: number[];
  targetScale: number;
  progress: MotionValue<number>;
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end 0.65"],
  });
  const scale = useTransform(progress, range, [1, targetScale]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <motion.div
      ref={cardRef}
      className="relative w-[min(560px,90vw)] overflow-hidden rounded-[28px] border border-white/10 bg-[#0C0D0B]/90 backdrop-blur-xl p-8 md:p-10 shadow-[0_40px_90px_-30px_rgba(0,0,0,0.7)]"
      style={{
        position: "relative",
        top: `calc(-2vh + ${i * 20}px)`,
        scale,
        opacity,
      }}
    >
      {/* accent wash */}
      <div className="pointer-events-none absolute inset-0 rounded-[28px] bg-gradient-to-br from-[#7BC47F]/[0.07] via-transparent to-transparent" />
      <div className="pointer-events-none absolute -top-24 -right-20 w-56 h-56 rounded-full bg-[#7BC47F]/[0.10] blur-3xl" />

      <div className="relative z-10">
        {/* top row — icon + number */}
        <div className="flex items-start justify-between mb-8">
          <div className="w-[58px] h-[58px] rounded-2xl bg-[#7BC47F]/[0.12] border border-[#7BC47F]/25 flex items-center justify-center text-[#7BC47F]">
            {service.icon}
          </div>
          <span className="font-mono text-[13px] font-bold tabular-nums text-[#7BC47F]/70">
            {service.no}
          </span>
        </div>

        {/* category */}
        <span className="font-mono text-[10.5px] tracking-[0.22em] uppercase text-white/40">
          {service.category}
        </span>

        {/* title */}
        <h3 className="mt-2.5 text-[clamp(22px,3.2vw,30px)] font-semibold tracking-[-0.02em] leading-[1.12] text-white text-balance">
          {service.title}
        </h3>

        {/* description */}
        <p className="mt-4 text-[15px] leading-[1.62] text-white/65 text-pretty">
          {service.desc}
        </p>

        {/* deliverables */}
        <div className="mt-7 flex flex-wrap gap-2">
          {service.points.map((p) => (
            <span
              key={p}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-white/10 bg-white/[0.03] font-mono text-[11px] text-white/75"
            >
              <span className="w-1 h-1 rounded-full bg-[#7BC47F]" />
              {p}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ServicesCard;
