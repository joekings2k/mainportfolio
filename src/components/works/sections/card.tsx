import {
  motion,
  useMotionTemplate,
  useTransform,
  type MotionValue,
} from "framer-motion";
import { Link } from "react-router-dom";
import type { WorkItem } from "../data";

type Props = {
  item: WorkItem;
  index: number;
  totalCount: number;
  slotCount: number;
  scrollYProgress: MotionValue<number>;
  isCenter: boolean;
};

const Card = ({
  item,
  index,
  totalCount,
  slotCount,
  scrollYProgress,
  isCenter,
}: Props) => {
  const centerProgress = slotCount > 1 ? index / (slotCount - 1) : 0;
  const span = slotCount > 1 ? 1 / (slotCount - 1) : 1;

  const px = useTransform(
    scrollYProgress,
    [centerProgress - 0.5, centerProgress, centerProgress + 0.5],
    [26, 0, -26],
    { clamp: true }
  );
  const scale = useTransform(
    scrollYProgress,
    [centerProgress - span, centerProgress, centerProgress + span],
    [0.9, 1, 0.9],
    { clamp: true }
  );
  const opacity = useTransform(
    scrollYProgress,
    [centerProgress - span, centerProgress, centerProgress + span],
    [0.38, 1, 0.38],
    { clamp: true }
  );
  const saturate = useTransform(
    scrollYProgress,
    [centerProgress - span, centerProgress, centerProgress + span],
    [0.45, 1, 0.45],
    { clamp: true }
  );
  const filter = useMotionTemplate`saturate(${saturate})`;

  const idx = String(index + 1).padStart(2, "0");
  const wmNumber = idx;
  const idxLabel = `${idx} / ${String(totalCount).padStart(2, "0")}`;

  return (
    <motion.article
      className="relative shrink-0 w-[clamp(360px,38vw,500px)] flex flex-col"
      style={{ opacity, scale, filter }}
    >
      <span
        className={[
          "works-wm absolute -top-[30px] -left-1 z-[4] font-mono font-bold text-[84px] leading-none tracking-[-0.04em] text-transparent pointer-events-none",
          isCenter && "works-wm-active",
        ]
          .filter(Boolean)
          .join(" ")}
      >
        {wmNumber}
      </span>

      <Link
        to={`/work/${item.slug}`}
        aria-label={`View ${item.title} case study`}
        className={[
          "works-shot-shadow block relative w-full h-[clamp(320px,52vh,560px)] rounded-2xl overflow-hidden bg-[#121412] border border-[#2A2E2A] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#7BC47F]",
          isCenter && "works-shot-shadow-active",
        ]
          .filter(Boolean)
          .join(" ")}
      >
        <motion.div
          className="absolute top-0 bottom-0 -left-[8%] w-[116%] h-full"
          style={{ x: px }}
        >
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-full object-cover"
          />
        </motion.div>

        <div className="absolute inset-0 z-[3] pointer-events-none bg-[linear-gradient(to_top,rgba(10,11,10,0.86)_0%,rgba(10,11,10,0.18)_36%,transparent_58%)]" />

        <span className="absolute left-[18px] top-[18px] z-[4] inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[rgba(10,11,10,0.5)] backdrop-blur-md border border-white/[0.08] font-mono text-[10.5px] tracking-[0.12em] uppercase text-[#B9BCB6]">
          <span className="works-badge-pulse w-1.5 h-1.5 rounded-full bg-[#7BC47F]" />
          {item.badge}
        </span>

        <div className="absolute left-5 right-5 bottom-[18px] z-[4] flex items-end justify-between gap-3.5">
          <motion.span
            className="inline-flex items-center gap-2 font-mono text-[11px] tracking-[0.12em] uppercase text-[#7BC47F]"
            initial={false}
            animate={{
              opacity: isCenter ? 1 : 0,
              y: isCenter ? 0 : 6,
            }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          >
            View case
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              className="w-3.5 h-3.5"
              aria-hidden
            >
              <path d="M7 17 17 7M9 7h8v8" />
            </svg>
          </motion.span>
          <span className="font-mono text-[11px] tracking-[0.16em] text-[#B9BCB6]">
            {item.year}
          </span>
        </div>
      </Link>

      <div className="pt-5 px-1 border-t border-[#2A2E2A] mt-5 flex flex-col gap-3">
        <div className="flex items-baseline justify-between gap-4">
          <h3 className="text-[clamp(22px,2.2vw,30px)] font-semibold tracking-[-0.025em] leading-[1.02] text-[#F4F1EA]">
            {item.title}
          </h3>
          <span className="font-mono text-[12px] text-[#6E7470] tabular-nums shrink-0">
            {idxLabel}
          </span>
        </div>
        <div className="font-mono text-[11.5px] tracking-[0.04em] text-[#6E7470] flex items-center gap-2.5 flex-wrap">
          <span>{item.sub}</span>
          <span className="w-[3px] h-[3px] rounded-full bg-current opacity-60" />
          <span>{item.meta}</span>
        </div>
        <div className="flex gap-[7px] flex-wrap">
          {item.stack.map((t) => (
            <span
              key={t}
              className="px-2.5 py-1 border border-[#2A2E2A] rounded-md font-mono text-[10.5px] text-[#B9BCB6] whitespace-nowrap"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </motion.article>
  );
};

export default Card;
