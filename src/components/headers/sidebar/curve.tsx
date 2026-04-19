import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import type { Theme } from "../useSectionTheme";

interface CurveProps {
  theme: Theme;
}

const Curve = ({ theme }: CurveProps) => {
  const [windowHeight, setWindowHeight] = useState(0);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setWindowHeight(window.innerHeight);
    }
  }, []);

  if (!windowHeight) return null;

  const initialPath = `M50 0 L50 ${windowHeight} Q-50 ${
    windowHeight / 2
  } 50 0`;
  const targetPath = `M50 0 L50 ${windowHeight} Q50 ${windowHeight / 2} 50 0`;
  const curve = {
    initial: { d: initialPath },
    enter: {
      d: targetPath,
      transition: { duration: 1.2, ease: [0.76, 0, 0.24, 1] },
    },
    exit: {
      d: initialPath,
      transition: { duration: 1.3, ease: [0.76, 0, 0.24, 1], delay: 0.7 },
    },
  };

  const fill = theme === "dark" ? "#FFFFFF" : "#000000";

  return (
    <svg
      className="absolute top-0 left-[-49.5px] w-[50px] h-full stroke-none transition-[fill] duration-500"
      style={{ fill }}
    >
      <motion.path
        variants={curve}
        initial="initial"
        animate="enter"
        exit="exit"
      />
    </svg>
  );
};

export default Curve;
