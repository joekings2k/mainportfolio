import  { useRef } from "react";
import {  motion, useScroll ,useTransform} from "framer-motion";
import { Word } from "./wordanimation";

import MagneticiIcons from "./_shared/framerMagnetic";
import ReactHoverIcon from "./_shared/iconshover/reacthover";
import HtmlIcon from "./_shared/iconshover/htmlicon";
import CssIcon from "./_shared/iconshover/cssicon";
import FramerIcon from "./_shared/iconshover/framericon";
import NextjsIcon from "./_shared/iconshover/nextjsicon";
import JsIcon from "./_shared/iconshover/jsicon";
import ReduxIcon from "./_shared/iconshover/reduxicon";
import TailwindIcon from "./_shared/iconshover/tailwindicon";
import GithubIcon from "./_shared/iconshover/githubicon";
import NodeIcon from "./_shared/iconshover/nodeicon";
import Expressicon from "./_shared/iconshover/expressicon";
import MongodbIcon from "./_shared/iconshover/mongodbicon";
import Radialbg from "./_shared/components/radialbg";
import Experience_and_education from "./_shared/expreience";

const About = () => {
  const boxRef  = useRef<any>(null);
  const wordref = useRef<any>(null);
  const wordref1 = useRef<any>(null);
  const content =
    "I am a dedicated Full-Stack Developer with over 3 years of experience heavily focused on front-end development. I specialize in creating intuitive, responsive, and dynamic user interfaces, while ensuring seamless integration with back-end systems."

  const seccontent =
    "I love turning ideas into sleek, responsive apps that feel effortless to use. Whether it’s crafting smooth animations, building scalable features, or experimenting with new tech, I’m all about creating experiences that people actually enjoy.";
  const splitContent = content.split(/(\s+)/);;
  const splitSecContent = seccontent.split(/(\s+)/);;
  
  const { scrollYProgress } = useScroll({
    target: wordref,
    offset: ["start 0.8", "end 0.8"],
  });

  const { scrollYProgress: scrollYProgress1 } = useScroll({
    target: wordref1,
    offset: ["start 0.8", "end 0.8"],
  });
const wordopacity1 = useTransform(scrollYProgress1, [0, 1], [0, 1]);

  const { scrollYProgress: scrollYProgress2 } = useScroll({
    target: boxRef,
    offset: ["start start", "end end"],
  });
  const scale  = useTransform(scrollYProgress2, [0, 1], [0, 6]); 
  const opacity = useTransform(scrollYProgress2, [0, 1], [0.3, 1]);
  const wordopacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const color ="orange"
  const size= "50px"

  return (
    <div className="w-full ">
      <div className="h-[200vh] relative  " ref={boxRef} data-theme="light">
        <div className="h-[100vh] bg-white sticky top-[0px] overflow-hidden">
          <div className=" w-[100%] h-[100%] absolute top-0 flex items-center justify-center">
            <motion.div
              style={{ scale,opacity }}
              className=" w-[20rem] h-[20rem] rounded-full bg-black z-50"
            ></motion.div>
          </div>
        </div>
      </div>

      <motion.div
        className="bg-black text-white  px-[10rem] h-screen"
        data-theme="dark"
      >
        <div className="flex items-center ">
          
          <div>
            <motion.p
              className="text-[2.5rem]  mt-[5rem] text-wrap "
              ref={wordref}
              style={{opacity:wordopacity}}
            >
              {splitContent.map((word, i) => {
                const start = i / splitContent.length;
                const end = (i + 1) / splitContent.length;
                return (
                  <Word
                    key={i}
                    range={[start, end]}
                    scrollYProgress={scrollYProgress}
                  >
                    {word}
                  </Word>
                );
              })}

              
            </motion.p>

            <motion.p
              className="text-[2.5rem]  mt-[2rem] text-wrap "
              ref={wordref1}
              style={{opacity:wordopacity1}}
            >
              {splitSecContent.map((word, i) => {
                const start = i / splitSecContent.length;
                const end = (i + 1) / splitSecContent.length;
                return (
                  <Word
                    key={i}
                    range={[start, end]}
                    scrollYProgress={scrollYProgress1}
                  >
                    {word}
                  </Word>
                );
              })}
            </motion.p>
          </div>
        </div>
      </motion.div>

      <div className="bg-[black] text-white  px-[6rem] py-[4rem]" data-theme="dark">
        <h3 className="text-2xl"> My Experience </h3>
        <Experience_and_education />
      </div>
      <div className="px-[6rem] py-[4rem]" data-theme="dark">
        <p className="text-5xl  text-white">Insight about me</p>
        <div className="flex flex-wrap gap-6  px-10 justify-between mt-9">
          <MagneticiIcons>
            <ReactHoverIcon color={color} size={size} />
          </MagneticiIcons>
          <MagneticiIcons>
            <HtmlIcon color={color} size={size} />
          </MagneticiIcons>
          <MagneticiIcons>
            <CssIcon color={color} size={size} />
          </MagneticiIcons>
          <MagneticiIcons>
            <FramerIcon color={color} size={size} />
          </MagneticiIcons>
          <MagneticiIcons>
            <NextjsIcon color={color} size={size} />
          </MagneticiIcons>
          <MagneticiIcons>
            <JsIcon color={color} size={size} />
          </MagneticiIcons>
          <MagneticiIcons>
            <ReduxIcon color={color} size={size} />
          </MagneticiIcons>
          <MagneticiIcons>
            <TailwindIcon color={color} size={size} />
          </MagneticiIcons>
          <MagneticiIcons>
            <GithubIcon color={color} size={size} />
          </MagneticiIcons>
          <MagneticiIcons>
            <NodeIcon color={color} size={size} />
          </MagneticiIcons>
          <MagneticiIcons>
            <Expressicon color={color} size={size} />
          </MagneticiIcons>
          <MagneticiIcons>
            <MongodbIcon color={color} size={size} />
          </MagneticiIcons>
        </div>
      </div>
      <Radialbg />
    </div>
  );
};

export default About;
