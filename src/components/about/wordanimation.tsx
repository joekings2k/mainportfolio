import  { ReactNode, useRef } from "react";
import { motion, MotionValue, useScroll, useTransform } from "framer-motion";

export const Word = ({
  children,
  range,
  scrollYProgress,
}: {
  children: any;
  range: number[];
  scrollYProgress: MotionValue<number>;
}) => {
  const opacity = useTransform(scrollYProgress, range, [0, 1]);
  const splitLetter = children?.split("");

  const amount = range[1] - range[0];
  const step = amount / children.length;
  return (
    <span className="relative whitespace-nowrap">
      {splitLetter.map((letter: string, i: number) => {
        const start = range[0] + step * i;
        const end = range[0] + step * (i + 1);
        return (
          <Letter
            key={i}
            range={[start, end]}
            scrollYProgress={scrollYProgress}
          >
            {letter}
          </Letter>
        );
      })}

      {/* <motion.span style={{ opacity }}>{children}</motion.span> */}
    </span>
  );
};

const Letter = ({
  children,
  range,
  scrollYProgress,
}: {
  children: ReactNode;
  range: number[];
  scrollYProgress: MotionValue<number>;
}) => {
  const opacity = useTransform(scrollYProgress, range, [0, 1]);
  return (
    <span className="relative">
      <span className="absolute opacity-[0.2]">{children} </span>
      <motion.span style={{ opacity }}>{children}</motion.span>
    </span>
  );
};
