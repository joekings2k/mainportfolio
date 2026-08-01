import { motion, useTransform, type MotionValue } from "framer-motion";
import { Link } from "react-router-dom";

type Props = {
  index: number;
  slotCount: number;
  scrollYProgress: MotionValue<number>;
  href: string;
};

const EndCard = ({ index, slotCount, scrollYProgress, href }: Props) => {
  const centerProgress = slotCount > 1 ? index / (slotCount - 1) : 0;
  const span = slotCount > 1 ? 1 / (slotCount - 1) : 1;

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

  return (
    <motion.article
      className="relative shrink-0 w-[clamp(360px,38vw,500px)] flex flex-col justify-center"
      style={{ opacity, scale }}
    >
      <Link
        to={href}
        className="group w-full h-[clamp(320px,52vh,560px)] rounded-2xl border border-dashed border-[#2A2E2A] flex flex-col items-center justify-center gap-[18px] text-center transition-colors duration-300 hover:border-[#7BC47F] hover:bg-[#121412]"
      >
        <span className="w-[54px] h-[54px] rounded-full border border-[#2A2E2A] flex items-center justify-center text-[#F4F1EA] transition-colors duration-300 group-hover:bg-[#7BC47F] group-hover:text-[#0A0B0A] group-hover:border-[#7BC47F]">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={1.8}
            className="w-5 h-5"
            aria-hidden
          >
            <path d="M5 12h14M13 6l6 6-6 6" />
          </svg>
        </span>
        <h4 className="text-[22px] font-semibold tracking-[-0.02em] text-[#F4F1EA]">
          The full archive
        </h4>
        <p className="font-mono text-[11px] tracking-[0.14em] uppercase text-[#6E7470]">
          Case studies &amp; code →
        </p>
      </Link>
    </motion.article>
  );
};

export default EndCard;
