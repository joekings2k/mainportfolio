import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

function FillerComponent() {
  const boxRef = useRef<any>(null);
  const { scrollYProgress } = useScroll({
    target: boxRef,
    offset: ["start start", "end end"],
  });
  // 60vmax base × 3 = 180vmax covers the viewport diagonal (~141vmax) at the
  // start, so the fill leaves no corners exposed on big screens.
  const scale = useTransform(scrollYProgress, [0, 1], [3, 0.5]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <div className="h-[200vh] relative sticky top-0" ref={boxRef} data-theme="light">
      <div className="h-[100vh] bg-white sticky top-[0px] overflow-hidden">
        <div className=" w-[100%] h-[100%] absolute top-0 flex items-center justify-center">
          <motion.div
            style={{ scale, opacity }}
            className=" w-[60vmax] h-[60vmax] rounded-full bg-[#0A0B0A] z-50"
          ></motion.div>
        </div>
      </div>
    </div>
  );
}

export default FillerComponent;
