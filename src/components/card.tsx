
import React, { useRef, useState } from "react";
import {  motion, useInView, } from "framer-motion";
interface Props {
  image: any;
  title: string;
  stack: string[];
}
const Card = ({ image, title, stack }: Props) => {
  const ref = useRef<any>();
  const [isHoverd ,setIsHovered]= useState<boolean>(false)
  const isInview = useInView(ref, { once: false });
  const textVarients = {
    initial: {
      y: -500,
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 1,
        ease: "easeOut",
      },
    },
  };
  return (
    <div
      className="w-[95vw] md:w-[65vw] h-[80vh] flex justify-center items-center relative"
      ref={ref}
    >
      <motion.div
        className="w-[100%] h-[100%] relative overflow-hidden rounded-[15px] "
        initial="initial"
        whileHover="hovered"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <motion.img
          src={image}
          alt="workimage"
          variants={{
            initial: { opacity: 1, scale: 1.2 },
            hovered: { opacity: 1, scale: 1 },
          }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          style={{
            height: "100%",
            width: "100%",
            objectFit: "cover",
            objectPosition: "center",
          }}
          className="rounded-[15px]"
        />
        <motion.div
          className="absolute inset-0 bg-gradient-to-b from-transparent to-black  rounded-[15px] z-10"
          animate={isHoverd ? { opacity: 0.7 } : { opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        />
        <motion.aside
          className="absolute top-0 flex flex-col justify-end inset-0 text-white p-4 z-50"
          animate={isHoverd ? { opacity: 1 } : { opacity: 0 }}
          // variants={textVarients}
          // animate={isInview ? "animate" : "initial"}
        >
          <motion.h3
            className="text-2xl"
            // initial={{ y: -300, opacity: 0 }}
            // whileInView={{ y: 0, opacity: 1 }}
            // transition={{ delay: 0.1, duration: 0.1 }}
            viewport={{ once: true }}
          >
            {title}
          </motion.h3>
          <ol className="flex space-x-4 mt-2">
            {stack.map((item: string, i: number) => (
              <motion.div
                className="text-[1.5rem] border-2  rounded-3xl relative overflow-hidden group"
                // initial={{ y: -300, opacity: 0 }}
                // whileInView={{ y: 0, opacity: 1 }}
                // key={i}
                // transition={{ delay: 0.5 + i * 0.3, duration: 0.5 }}
                // viewport={{ once: true }}
              >
                <motion.div
                  className="bg-cyan-300 rounded-3xl h-full"
                  initial={{ width: "0%" }}
                  transition={{ duration: 0.35 }}
                  whileHover={{ width: "100%" }}
                >
                  <li
                    key={i}
                    className="px-5 z-10 whitespace-nowrap group-hover:text-black"
                  >
                    {item}
                  </li>
                </motion.div>
              </motion.div>
            ))}
          </ol>
        </motion.aside>
      </motion.div>
    </div>
  );
};

export default Card;
