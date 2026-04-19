

import { motion } from "framer-motion";
import { listvariants } from "../../anim";

interface Props {
  title: string;
  link: string;
  index: number;
  onNavigate?: () => void;
}
const DURATION = 0.25;
const STAGGER = 0.025;
const ease = [0.76, 0, 0.24, 1];

const MenuItem = ({ title, link, index, onNavigate }: Props) => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (link.startsWith("#")) {
      e.preventDefault();
      const target = document.querySelector(link);
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
      onNavigate?.();
    }
  };

  return (
    <motion.div
      custom={index}
      variants={listvariants}
      initial="initial"
      animate="enter"
      exit={"exit"}
      className="text-text overflow-hidden font-bold"
    >
      <motion.a
        href={link}
        onClick={handleClick}
        initial={"initial"}
        whileHover={"hovered"}
        className="text-4xl bg-black relative cursor-pointer"
      >
        <div className="overflow-hidden">
          {title.split("").map((t, i) => (
            <motion.span
              key={i}
              variants={{ initial: { y: 0 }, hovered: { y: "-100%" } }}
              className="inline-block"
              transition={{
                duration: DURATION,
                ease: ease,
                delay: STAGGER * i,
              }}
            >
              {t}
            </motion.span>
          ))}
        </div>
        <div className="absolute inset-0">
          {title.split("").map((t, i) => (
            <motion.span
              key={i}
              className="inline-block gradient-text"
              variants={{ initial: { y: "100%" }, hovered: { y: 0 } }}
              transition={{
                duration: DURATION,
                ease: ease,
                delay: STAGGER * i,
              }}
            >
              {t}
            </motion.span>
          ))}
        </div>
      </motion.a>
    </motion.div>
  );
};

export default MenuItem;
