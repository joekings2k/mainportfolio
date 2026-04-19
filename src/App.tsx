import Headers from "./components/headers";
import Herosect from "./components/herosect";
import About from "./components/about";
import WorksTest from "./components/works/test";
import Services from "./components/myservices";
import Contact from "./components/contact";
import FillerComponent from "./components/fillercomponent";
import { useEffect } from "react";
import Lenis from "lenis";
import { motion, useMotionTemplate, useMotionValue, useSpring } from "framer-motion";

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

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <div className="mainContainer">
      <motion.div
        className="mainMask"
        style={{
          WebkitMaskPosition: maskPosition,
          WebkitMaskSize: `${size}px`,
        }}
      />

      <Headers />

      <section id="home" data-theme="light">
        <Herosect />
      </section>

      <section id="about">
        <About />
      </section>

      <section id="work" data-theme="dark">
        <WorksTest />
      </section>

      <FillerComponent />

      <Services />

      <section id="contact" data-theme="dark">
        <Contact />
      </section>
    </div>
  );
}

export default App;
