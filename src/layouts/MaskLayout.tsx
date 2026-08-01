import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Lenis from "lenis";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
} from "framer-motion";
import { useSectionTheme } from "../hooks/useSectionTheme";

const MaskLayout = () => {
  const { pathname } = useLocation();

  const size = 10;
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 300, damping: 30 });
  const springY = useSpring(y, { stiffness: 300, damping: 30 });
  // Re-observe [data-theme] sections whenever the route swaps the DOM.
  const theme = useSectionTheme("light", pathname);
  const maskColor = theme === "dark" ? "#FFFFFF" : "#000000";

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
    return () => lenis.destroy();
  }, []);

  // Case-study pages have their own full-page reveal, so skip the global dot.
  const showGlobalMask = !pathname.startsWith("/work/");

  return (
    <>
      {showGlobalMask && (
        <motion.div
          className="mainMask"
          animate={{ backgroundColor: maskColor }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          style={{
            WebkitMaskPosition: maskPosition,
            WebkitMaskSize: `${size}px`,
          }}
        />
      )}
      <Outlet />
    </>
  );
};

export default MaskLayout;
