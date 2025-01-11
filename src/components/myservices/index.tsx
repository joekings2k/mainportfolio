import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import ServicesCard from "./_shared/servicesCard";
const Services = () => {
  const containerRef = useRef<any>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });
  return (
    <div className=" relative">
      <div className="flex flex-col justify-center items-center pt-10 sticky top-0">
        <p className="text-5xl font-extrabold text-white ">Exceptional </p>
        <p className="text-5xl font-extrabold text-white">is the standard</p>
        <p className="text-1xl  text-white mt-10">What i offer</p>
        <svg
          width="250"
          height="213"
          viewBox="0 0 250 213"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute top-[5rem] left-[25rem]"
        >
          <motion.path
            d="M161 0.5H0.5V212.5H250"
            stroke="green"
            strokeWidth="9"
            fill="none"
            strokeDasharray="900" // Approximate total length of the path
            strokeDashoffset="900" // Initially hidden
            // animate={{ strokeDashoffset: 0 }} // Fully drawn
            whileInView={{ strokeDashoffset: 0 }}
            transition={{ duration: 2, ease: "easeInOut" }} // Smooth animation
          />
        </svg>

        <svg
          width="251"
          height="213"
          viewBox="0 0 251 213"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute top-[5rem] right-[25rem]"
        >
          <motion.path
            d="M89.5 0.5H250V212.5H0.5"
            stroke="green"
            strokeWidth="9"
            fill="none"
            strokeDasharray="900" // Approximate total length of the path
            strokeDashoffset="900" // Initially hidden
            whileInView={{ strokeDashoffset: 0 }}
            transition={{ duration: 2, ease: "easeInOut" }} // Smooth animation
          />
        </svg>
      </div>
      <div className="relative" ref={containerRef}>
        {Array.from({ length: 5 }).map((item, i) => {
          const targetScale = 1 - (Array.from({ length: 5 }).length - i) * 0.05;
          return (
            <div
              className={`h-[100vh] flex flex-col items-center justify-center sticky top-0`}
            >
              <ServicesCard key={i} i={i} range={[i * 0.25, 1]} targetScale={targetScale} progress={scrollYProgress} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Services;
