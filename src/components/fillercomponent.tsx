import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

function FillerComponent() {
  const boxRef = useRef<any>(null);
  const { scrollYProgress } = useScroll({
    target: boxRef,
    offset: ["start start", "end end"],
  });
  const scale = useTransform(scrollYProgress, [0, 1], [6, 0.5]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <div className="h-[200vh] relative sticky top-0" ref={boxRef} data-theme="light">
      <div className="h-[100vh] bg-white sticky top-[0px] overflow-hidden">
        <div className=" w-[100%] h-[100%] absolute top-0 flex items-center justify-center">
          <motion.div
            style={{ scale, opacity }}
            className=" w-[20rem] h-[20rem] rounded-full bg-black z-50"
          ></motion.div>
        </div>
      </div>
    </div>
  );
}

export default FillerComponent;
