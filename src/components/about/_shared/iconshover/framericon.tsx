import { motion } from "framer-motion";
import { useState } from "react";

const FramerIcon = ({ color, size }: { color: string; size: string }) => {
  const [ishovered, setIsHovered] = useState(false);
  return (
    <motion.svg
      width={size}
      height={size}
      viewBox="0 0 15 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.path
        d="M7.5 5.5H12.5V0.5H2.5L7.5 5.5ZM7.5 5.5H2.5V9.5L7.5 14.5V10.5H12.5L7.5 5.5Z"
        stroke={ishovered ? color : "white"}
        stroke-linejoin="round"
        
        transition={{ duration: 0.3 }}
      />
    </motion.svg>
  );
};

export default FramerIcon;
