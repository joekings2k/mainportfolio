"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
const Curve = () => {
  const [windowHeight, setWindowHeight] = useState(0);

  useEffect(() => {
    // This will run only on the client
    if (typeof window !== "undefined") {
      setWindowHeight(window.innerHeight);
    }
  }, []);

  if (!windowHeight) return null; // Wait for windowHeight to be set
  const initialPath = `M50 0 L50 ${window.innerHeight} Q-50 ${
    window.innerHeight / 2
  } 50 0`;
  const targetPath = `M50 0 L50 ${window.innerHeight} Q50 ${
    window.innerHeight / 2
  } 50 0`;
  const curve = {
    initial: {
      d: initialPath,
    },
    enter: {
      d: targetPath,
      transition: { duration: 1.2, ease: [0.76, 0, 0.24, 1] },
    },
    exit: {
      d: initialPath,
      transition: { duration: 1.3, ease: [0.76, 0, 0.24, 1], delay: 0.7 },
    },
  };
  return (
    <svg className="absolute top-0 left-[-49.5px] w-[50px] h-full fill-[red] stroke-none">
      <motion.path
        variants={curve}
        initial="initial"
        animate="enter"
        exit="exit"
      ></motion.path>
    </svg>
  );
};

export default Curve;
