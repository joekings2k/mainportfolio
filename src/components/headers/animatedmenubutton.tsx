import { MotionConfig, motion } from "framer-motion";
import type { Theme } from "./useSectionTheme";

interface Props {
  active: boolean;
  setActive: (val: (val: boolean) => boolean) => void;
  theme: Theme;
}

const AnimatedMenuButton = ({ active, setActive, theme }: Props) => {
  const isDark = theme === "dark";

  // When page is dark: button is white (spans black). Active flips.
  // When page is light: button is black (spans white). Active flips.
  const containerBg = active
    ? isDark
      ? "#000000"
      : "#FFFFFF"
    : isDark
    ? "#FFFFFF"
    : "#000000";

  const spanBg = active
    ? isDark
      ? "#FFFFFF"
      : "#000000"
    : isDark
    ? "#000000"
    : "#FFFFFF";

  return (
    <MotionConfig transition={{ duration: "0.3", ease: "easeInOut" }}>
      <motion.div
        className="relative h-10 w-10 rounded-full transition-colors duration-500"
        style={{ backgroundColor: containerBg }}
        animate={active ? "open" : "close"}
        onClick={() => setActive((previous: any) => !previous)}
        initial={false}
      >
        <motion.span
          className="absolute h-0.5 w-5 transition-colors duration-500"
          style={{
            top: "35%",
            left: "50%",
            x: "-50%",
            y: "-50%",
            backgroundColor: spanBg,
          }}
          variants={{
            open: {
              rotate: ["0deg", "0deg", "45deg"],
              top: ["35%", "50%", "50%"],
            },
            close: {
              rotate: ["45deg", "0deg", "0deg"],
              top: ["50%", "50%", "35%"],
            },
          }}
        />
        <motion.span
          className="absolute h-0.5 w-5 transition-colors duration-500"
          style={{
            top: "50%",
            left: "50%",
            x: "-50%",
            y: "-50%",
            backgroundColor: spanBg,
          }}
          variants={{
            open: {
              rotate: ["0deg", "0deg", "-45deg"],
            },
            close: {
              rotate: ["-45deg", "0deg", "0deg"],
            },
          }}
        />
        <motion.span
          className="absolute h-0.5 w-5 transition-colors duration-500"
          style={{
            bottom: "31%",
            left: "50%",
            x: "-50%",
            y: "-50%",
            backgroundColor: spanBg,
          }}
          variants={{
            open: {
              rotate: ["0deg", "0deg", "45deg"],
              bottom: ["31%", "46%", "46%"],
            },
            close: {
              rotate: ["45deg", "0deg", "0deg"],
              bottom: ["46%", "46%", "31%"],
            },
          }}
        />
      </motion.div>
    </MotionConfig>
  );
};

export default AnimatedMenuButton;
