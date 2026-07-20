import { Fragment, useState } from "react";
import { motion } from "framer-motion";
import type { ExperienceEntry } from "../data";

type Props = {
  entry: ExperienceEntry;
  isActive: boolean;
  markerRef?: (el: HTMLSpanElement | null) => void;
};

const articleVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const },
  },
};
const tickVariants = {
  hidden: { scaleX: 0 },
  visible: {
    scaleX: 1,
    transition: { duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] as const },
  },
};

const Entry = ({ entry, isActive, markerRef }: Props) => {
  const [hasEntered, setHasEntered] = useState(false);

  const className = [
    "exp-entry",
    hasEntered && "exp-in",
    isActive && "exp-active",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <motion.article
      className={className}
      variants={articleVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "0px 0px -12% 0px" }}
      onViewportEnter={() => setHasEntered(true)}
    >
      <span ref={markerRef} className="exp-marker">
        <span className="exp-marker-dot" />
      </span>
      <motion.span
        className="exp-tick"
        variants={tickVariants}
        style={{ originX: 0 }}
      />

      <header className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-1.5 md:gap-6 md:items-baseline mb-4">
        <h3 className="text-[clamp(22px,2.6vw,32px)] font-semibold tracking-[-0.02em] leading-[1.15] text-[#F4F1EA]">
          <span className="text-[#B9BCB6] font-medium">{entry.role}</span>
          <span className="text-[#6E7470] font-normal mx-1.5">@</span>
          <span className="exp-role-co transition-colors duration-300">
            {entry.company}
          </span>
        </h3>
        <div className="font-mono text-[12px] tracking-[0.06em] text-[#B9BCB6] whitespace-nowrap flex items-center gap-2.5">
          {entry.current && <span className="exp-pulse" />}
          <span>{entry.when}</span>
        </div>
      </header>

      <div className="font-mono text-[11px] tracking-[0.16em] uppercase text-[#6E7470] mb-[22px] flex items-center gap-3.5 flex-wrap">
        {entry.meta.map((m, i) => (
          <Fragment key={m}>
            {i > 0 && (
              <span className="w-[3px] h-[3px] rounded-full bg-[#6E7470]" />
            )}
            <span>{m}</span>
          </Fragment>
        ))}
      </div>

      <p className="exp-desc text-[15.5px] leading-[1.6] text-[#B9BCB6] max-w-[66ch] mb-[22px] text-pretty">
        {entry.description.map((part, i) =>
          typeof part === "string" ? (
            <Fragment key={i}>{part}</Fragment>
          ) : (
            <strong key={i}>{part.strong}</strong>
          )
        )}
      </p>

      {entry.metrics && entry.metrics.length > 0 && (
        <div className="flex flex-wrap gap-6 mb-[22px] py-[18px] px-[22px] border border-[#2A2E2A] rounded-xl bg-gradient-to-b from-[#121412] to-[#0A0B0A]">
          {entry.metrics.map((m) => (
            <div key={m.k} className="flex flex-col gap-1 min-w-[100px]">
              <span
                className={[
                  "text-[26px] font-bold tracking-[-0.02em] leading-none tabular-nums",
                  m.accent ? "text-[#7BC47F]" : "text-[#F4F1EA]",
                ].join(" ")}
              >
                {m.v}
              </span>
              <span className="font-mono text-[10px] tracking-[0.18em] uppercase text-[#6E7470]">
                {m.k}
              </span>
            </div>
          ))}
        </div>
      )}

      <div className="flex flex-wrap gap-1.5 items-center">
        <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-[#6E7470] mr-1.5">
          Stack
        </span>
        {entry.stack.map((t) => (
          <span
            key={t}
            className="px-2.5 py-1 border border-[#2A2E2A] rounded-md font-mono text-[11px] text-[#B9BCB6] transition-colors duration-200 hover:border-[#6E7470] hover:text-[#F4F1EA]"
          >
            {t}
          </span>
        ))}
      </div>
    </motion.article>
  );
};

export default Entry;
