import { useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";
import { workData } from "../../constants";
import { WorkDataType } from "../../constants/type";
import Card from "../card";
import {motion} from "framer-motion"
const WorksTest = () => {
  const ref = useRef<any>();
  const { scrollYProgress } = useScroll({ target: ref });
  const x = useTransform(scrollYProgress, [0, 1], ["5%", "-80%"]);
  const gradient = useTransform(
    scrollYProgress,
    [0, 1],
    [
      "linear-gradient(to right, #00FF00, #FF0000)", 
      "linear-gradient(to right, #0000FF, #FFFF00)", 
    ]
  );

  return (
    <div>
      <div className="h-[600vh] relative" ref={ref}>
        {/* <div className="w-screen h-[calc(100vh-5rem)] flex items center  "> my Works</div> */}
        <div className="sticky top-0 flex h-screen gap-4 items-center bg-red-300 overflow-hidden">   m
          <motion.div
           
            className="flex"
            style={{ x, background: gradient }}
          >
            {/* <div className="h-screen w-screen flex items-center justify-center bg-gradient-to-r from-green-300-300 to-red-300 "></div> */}
            {/* <div className="h-screen w-screen flex md:hidden items-center justify-center bg-gradient-to-r from-green-300 to-red-300  "></div> */}
            {workData.map((item: WorkDataType, i) => (
              <div
                key={i}
                className={` h-screen w-screen flex items-center justify-center `}
              >
                <div key={i} className="flex-shrink-0">
                  <Card
                    image={item.image}
                    title={item.title}
                    stack={item.stack}
                  />
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default WorksTest;
