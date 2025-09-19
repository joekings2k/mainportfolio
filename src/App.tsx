import Headers from "./components/headers";
import Herosect from "./components/herosect";
import About from "./components/about";

import WorksTest from "./components/works/test";
import Services from "./components/myservices";
import { useEffect, useState } from "react";
import Lenis from "lenis";
import { motion, useMotionTemplate, useMotionValue, useSpring } from "framer-motion";
import Playground from "./components/playground";
import FillerComponent from "./components/fillercomponent";

function App() {
  const size = 10;
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 300, damping: 30 });
  const springY = useSpring(y, { stiffness: 300, damping: 30 });

  useEffect(() => {
    const setFromEvent = (e: MouseEvent) => {
      x.set(e.clientX - size / 2);
      y.set(e.clientY - size / 2);
    };
    window.addEventListener("mousemove", setFromEvent);
    return () => window.removeEventListener("mousemove", setFromEvent);
  }, [x, y]);
  const maskPosition = useMotionTemplate`${springX}px ${springY}px`;
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: any) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <>
      <div className="mainContainer">
        <motion.div
          className="mainMask"
          style={{
            WebkitMaskPosition: maskPosition,
            WebkitMaskSize: `${size}px`,
          }}
        />

        <Headers />
        <div>
          <Herosect />

          <motion.div
            className="absolute top-1/2 right-[-8rem] h-16 w-[calc(100vh-10rem)] flex justify-center items-center gap-10 font-bold rotate-90 z-20 pointer-events-none"
            style={{
              WebkitMaskImage: "url('./assets/mask.svg')",
              WebkitMaskRepeat: "no-repeat",
              WebkitMaskPosition: maskPosition,
              WebkitMaskSize: `${size}px`,
              backgroundColor: "#000000",
            }}
          ></motion.div>
        </div>
        <About />

        <WorksTest />
        <FillerComponent />
        <Services />

        <Playground />
      </div>
    </>
  );
}

export default App;
{
  /* <Test /> */
}
