import { motion } from "framer-motion";

export const GlobalMask = ({ mousePosition, size }: { mousePosition:any; size:any }) => {
  return (
    <motion.div
      className="fixed top-0 left-0 w-screen h-screen z-50 pointer-events-none"
      animate={{
        WebkitMaskPosition: `${mousePosition.x - parseInt(size) / 2}px ${
          mousePosition.y - parseInt(size) / 2
        }px`,
        WebkitMaskSize: `${size}px`,
      }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      style={{
        WebkitMaskImage: "radial-gradient(circle, white, black)",
        background: "rgba(0, 0, 0, 0.8)",
      }}
    >
      
    </motion.div>
  );
};