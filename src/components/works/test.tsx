import { AnimatePresence, useMotionValueEvent, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import { workData } from "../../constants";
import { WorkDataType } from "../../constants/type";
import Card from "../card";
import { motion } from "framer-motion";

const WorksTest = () => {
  const ref = useRef<any>();
  const { scrollYProgress } = useScroll({ target: ref });
  const x = useTransform(scrollYProgress, [0, 1], ["5%", "-80%"]);

  const [centeredIndex, setCenteredIndex] = useState(0);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const newIndex = Math.round(latest * (workData.length - 1));
    setCenteredIndex(newIndex);
  });
  return (
    <AnimatePresence>
      <div className="mt-14">
        <div className="h-[600vh] relative" ref={ref}>
          <div className="sticky top-0 flex h-screen gap-4 items-center bg-black overflow-hidden ">
            <motion.div className="flex" style={{ x }}>
              {workData.map((item: WorkDataType, i) => {
                const isActive = i === centeredIndex;
                const scale = isActive ? 1 : 0.7;
                const opacity = isActive ? 1 : 0.8;
                return (
                  <motion.div
                    key={i}
                    className={` h-screen w- flex items-center justify-center `}
                    style={{
                      scale,
                      opacity,
                      transition: "all 0.7s ease-out",
                    }}
                  >
                    <motion.div key={i} className="flex-shrink-0">
                      <Card
                        image={item.image}
                        title={item.title}
                        stack={item.stack}
                      />
                    </motion.div>
                  </motion.div>
                );
              })}
            </motion.div>
            <div className="  absolute bottom-5  w-full h-10 flex items-center justify-center gap-5">
              {workData.map((_, i) => (
                <motion.div
                  key={i}
                  className={`w-3 h-3 rounded-full  mx-1`}
                  animate={{
                    scale: centeredIndex === i ? 2 : 1,
                    backgroundColor: centeredIndex === i ? "#1D2D44" : "white",
                  }}
                  transition={{ duration: 0.3 ,ease: "easeInOut" }}
                ></motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </AnimatePresence>
  );
};

export default WorksTest;
