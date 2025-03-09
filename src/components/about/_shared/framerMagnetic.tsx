import { MouseEvent, ReactNode, useRef, useState } from "react";
import { motion } from "framer-motion";
const MagneticiIcons = ({ children }: { children: ReactNode }) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [position, setPosition] = useState<any>({ x: 0, y: 0 });

  const mouseMove = (e: MouseEvent) => {
    if (!ref.current) return;

    const { clientX, clientY } = e;
    const { width, height, left, top } = ref.current.getBoundingClientRect();
    const x = clientX - (left + width / 2);
    const y = clientY - (top + height / 2);
    setPosition({ x, y });
  };
  const mouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };
  const { x, y } = position;
  return (
    <motion.div
      onMouseMove={mouseMove}
      onMouseLeave={mouseLeave}
      animate={{ x, y }}
      ref={ref}
      transition={{type:"spring",stiffness:100,damping:3,mass:0.2}}
    >
      {children}
    </motion.div>
  );
};

export default MagneticiIcons;
