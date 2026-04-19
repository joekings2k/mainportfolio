import { useTransform, motion, useScroll } from "framer-motion";
import { useRef } from "react";

const ServicesCard = ({
  i,
  range,
  targetScale,
  progress,
}: {
  i: number;
  range: number[];
  targetScale: number;
  progress: any;
}) => {
  const cardRef = useRef<any>(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end 0.65"],
  });
  const scale = useTransform(progress, range, [1, targetScale]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
  return (
    <motion.div
      ref={cardRef}
      className="bg-black/20 backdrop-blur-xl rounded-2xl shadow-2xl shadow-black/50 p-8 max-w-[500px] text-center border border-white/10 ml-10 relative overflow-hidden"
      style={{
        position: "relative",
        top: `calc(-2vh + ${i * 20}px)`,
        scale,
        opacity,
      }}
    >
      {/* Glassy overlay effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-black/10 pointer-events-none rounded-2xl" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-white/5 pointer-events-none rounded-2xl" />

      {/* Subtle inner glow */}
      <div className="absolute inset-[1px] rounded-2xl bg-gradient-to-br from-white/[0.02] to-transparent pointer-events-none" />

      <div className="w-[5rem] h-[5rem] bg-black/30 backdrop-blur-sm rounded-full flex justify-center items-center mx-auto mb-4 shadow-lg border border-white/20 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-full" />
        {/* <img src="path/to/your-icon.svg" alt="Icon" /> */}
      </div>
      <h3 className="text-[1.5rem] font-semibold text-white mb-4 text-center relative z-10">
        Results that speak louder: evidenced
      </h3>
      <p className="text-white/80 text-center relative z-10 leading-relaxed">
        We don’t just promise excellence; we deliver it. Our portfolio is a
        testament to our commitment to producing results that speak louder than
        words.
      </p>
    </motion.div>
  );
};

export default ServicesCard;
