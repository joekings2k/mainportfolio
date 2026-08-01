import { motion, useTransform, type MotionValue } from "framer-motion";

type Props = {
  scrollYProgress: MotionValue<number>;
  centerIndex: number;
  workCount: number;
  totalSlots: number;
  onPrev: () => void;
  onNext: () => void;
};

const Rail = ({
  scrollYProgress,
  centerIndex,
  workCount,
  totalSlots,
  onPrev,
  onNext,
}: Props) => {
  const fillWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const shown = Math.min(workCount, centerIndex + 1);
  const prevDisabled = centerIndex <= 0;
  const nextDisabled = centerIndex >= totalSlots - 1;

  return (
    <div className="w-full max-w-[1180px] mx-auto px-6 md:px-14">
      <div className="flex items-center gap-7">
        <div className="flex gap-2.5">
          <button
            type="button"
            onClick={onPrev}
            disabled={prevDisabled}
            aria-label="Previous"
            className="w-[46px] h-[46px] rounded-full border border-[#2A2E2A] text-[#F4F1EA] flex items-center justify-center transition-colors duration-200 hover:border-[#7BC47F] hover:text-[#7BC47F] disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:border-[#2A2E2A] disabled:hover:text-[#6E7470]"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={1.8}
              className="w-[18px] h-[18px]"
              aria-hidden
            >
              <path d="M19 12H5M11 6l-6 6 6 6" />
            </svg>
          </button>
          <button
            type="button"
            onClick={onNext}
            disabled={nextDisabled}
            aria-label="Next"
            className="w-[46px] h-[46px] rounded-full border border-[#2A2E2A] text-[#F4F1EA] flex items-center justify-center transition-colors duration-200 hover:border-[#7BC47F] hover:text-[#7BC47F] disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:border-[#2A2E2A] disabled:hover:text-[#6E7470]"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={1.8}
              className="w-[18px] h-[18px]"
              aria-hidden
            >
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </button>
        </div>

        <div className="relative flex-1 h-0.5 bg-[#2A2E2A] rounded-sm overflow-hidden">
          <motion.div
            className="absolute left-0 top-0 h-full bg-[#7BC47F] rounded-sm shadow-[0_0_8px_rgba(123,196,127,0.5)]"
            style={{ width: fillWidth }}
          />
        </div>

        <div className="font-mono text-[13px] tracking-[0.06em] text-[#6E7470] tabular-nums whitespace-nowrap">
          <b className="text-[#F4F1EA] font-semibold">
            {String(shown).padStart(2, "0")}
          </b>{" "}
          / {String(workCount).padStart(2, "0")}
        </div>
      </div>
    </div>
  );
};

export default Rail;
