

import {  motion } from "framer-motion";
import { listvariants } from "../../anim";

interface Props {
  title: string;
  link: string;
  index: number;
}
const DURATION = 0.25;
const STAGGER = 0.025;
const ease = [0.76, 0, 0.24, 1];
const MenuItem = ({ title, link, index }: Props) => {
  return (
    <motion.div
      custom={index}
      variants={listvariants}
      initial="initial"
      animate="enter"
      exit={"exit"}
      className="text-text overflow-hidden font-bold
      "
    >
      <motion.a
        href={link}
        initial={"initial"}
        whileHover={"hovered"}
        className="text-4xl bg-black relative"
      >
        {" "}
        <div className="overflow-hidden">
          {title.split("").map((t, i) => (
            <motion.span
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
