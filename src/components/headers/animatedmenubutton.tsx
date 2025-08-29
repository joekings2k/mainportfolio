import { MotionConfig, motion } from "framer-motion";
interface Props {
  active: boolean;
  setActive: (val: (val: boolean) => boolean) => void;
}
const AnimatedMenuButton = ({ active, setActive }: Props) => {
  return (
    <MotionConfig transition={{ duration: "0.3", ease: "easeInOut" }}>
      <motion.div
        className={`relative h-10 w-10 rounded-full ${active ? "bg-[white]" : "bg-black"} transition-colors duration-1000`}
        animate={active ? "open" : "close"}
        onClick={() => setActive((previous: any) => !previous)}
        initial={false}
      >
        <motion.span
          className={`absolute h-0.5 w-5 ${active ? "bg-[black]" : "bg-white"}`}
          style={{ top: "35%", left: "50%", x: "-50%", y: "-50%" }}
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
          className={`absolute h-0.5 w-5 ${active ? "bg-[black]" : "bg-white"}`}
          style={{ top: "50%", left: "50%", x: "-50%", y: "-50%" }}
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
          className={`absolute h-0.5 w-5 ${active ? "bg-[black]" : "bg-white"}`}
          style={{ bottom: "31%", left: "50%", x: "-50%", y: "-50%" }}
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
