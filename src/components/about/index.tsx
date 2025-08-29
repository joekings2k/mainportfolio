import React, { useRef } from "react";
import { color, motion, useScroll ,useTransform} from "framer-motion";
import { Word } from "./wordanimation";
import me from "../../assets/aboutmeimg.jpg"
import mask from "../../assets/mask.svg";
import { Reactsvg } from "../../constants/icons";
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
  const content =
    "I am a dedicated Full-Stack Developer with over 2 years of experience heavily focused on front-end development. I specialize in creating intuitive, responsive, and dynamic user interfaes,while ensuring seamless integration with back-end systems. My expertise includes modern JavaScript frameworks like React, and I am passionate about delivering optimized user experiences with clean, maintainable code. Constantly learning and adapting, I stay updated with the latest industry trends and best practices, always aiming to push the boundaries of web development.";
  const splitContent = content.split(/(\s+)/);;
  
  const { scrollYProgress } = useScroll({
    target: wordref,
    offset: ["start 0.8", "end 0.8"],
  });

  const { scrollYProgress: scrollYProgress2 } = useScroll({
    target: boxRef,
    offset: ["start start", "end end"],
  });
  const scale  = useTransform(scrollYProgress2, [0, 1], [0.4, 6]); 
  const opacity = useTransform(scrollYProgress2, [0, 1], [0.3, 1]);
  const color =" orange"
  const size= "50px"

  return (
    <div className="w-full bg-white ">
      <div className="h-[300vh] relative  " ref={boxRef}>
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
        className="bg-black text-white  px-[6rem] py-[4rem]"
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <div className="text-6xl"> Insights about me</div>
        <div className="flex items-center gap-14">
          <div>
            <div className="h-[19rem] w-[18rem]  overflow-hidden relative mt-5">
              <div className="inset-0 absolute bg-black/10 " />
              <img
                src={me}
                alt="image of me"
                style={{
                  height: "100%",
                  width: "100%",
                  objectFit: "cover",
                  objectPosition: "center",
                }}
              />
            </div>
          </div>
          <div>
            <p
              className="text-[2rem] font-bold mt-[1rem] text-wrap"
              ref={wordref}
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
            </p>
          </div>
        </div>
      </motion.div>

      <div className="bg-[#0D1321] text-white  px-[6rem] py-[4rem]">
        <h3 className="text-2xl"> My Experience </h3>
        <Experience_and_education />
      </div>
      <div className="px-[6rem] py-[4rem] bg-[#1D2D44]">
        <p className="text-5xl  text-white">Insight about me</p>
        <div className="hidden  px-10 justify-between mt-9">
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
