import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

import SectionHead from "./sections/sectionHead";
import Masthead from "./sections/masthead";
import SpecSheet from "./sections/specSheet";
import Intro from "./sections/intro";
import Highlights from "./sections/highlights";
import NowStrip from "./sections/nowStrip";
import Principles from "./sections/principles";
import Signoff from "./sections/signoff";

const About = () => {
  const boxRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: boxRef,
    offset: ["start start", "end end"],
  });
  const scale = useTransform(scrollYProgress, [0, 1], [0, 6]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0.3, 1]);

  return (
    <div className="w-full">
      <div className="h-[200vh] relative" ref={boxRef} data-theme="light">
        <div className="h-screen bg-white sticky top-0 overflow-hidden">
          <div className="w-full h-full absolute top-0 flex items-center justify-center">
            <motion.div
              style={{ scale, opacity }}
              className="w-80 h-80 rounded-full bg-black z-50"
            />
          </div>
        </div>
      </div>

      <div className="bg-[#0A0B0A] text-[#F4F1EA]" data-theme="dark">
        <main className="max-w-[1280px] mx-auto px-6 md:px-14 py-24 md:py-32">
          <SectionHead />
          <Masthead />
          <SpecSheet />
          <div className="flex flex-col gap-18">
            <Intro />
            <Highlights />
            <NowStrip />
            {/* <Principles /> */}
            <Signoff />
          </div>
        </main>
      </div>
    </div>
  );
};

export default About;
