import React, { ReactNode } from "react";
import MagneticiIcons from "../framerMagnetic";
import ReactHoverIcon from "../iconshover/reacthover";
import CssIcon from "../iconshover/cssicon";
import TailwindIcon from "../iconshover/tailwindicon";
import ReduxIcon from "../iconshover/reduxicon";
import { motion } from "framer-motion";
import FramerIcon from "../iconshover/framericon";
import GithubIcon from "../iconshover/githubicon";
import NextjsIcon from "../iconshover/nextjsicon";
import HtmlIcon from "../iconshover/htmlicon";
import NodeIcon from "../iconshover/nodeicon";
import Expressicon from "../iconshover/expressicon";
import MongodbIcon from "../iconshover/mongodbicon";
import Tooltip from "../../../playground/tooltip";
const Radialbg = () => {
  const color = " orange";
  const size = "50px";
  return (
    <div className=" w-full h-full relative bg-[#1D2D44]  px-[6rem]">
      <div className="w-full h-screen top-0 flex items-center justify-center rounded-full bg-circularLight sticky">
        <Tooltip text="React">
          <MagneticiIcons>
            <ReactHoverIcon color={color} size={size} />
          </MagneticiIcons>
        </Tooltip>
        <SkillsAnimate x={"5vw"} y={"10vw"}>
          <Tooltip text="CSS">
            <MagneticiIcons>
              <CssIcon color={color} size={size} />
            </MagneticiIcons>
          </Tooltip>
        </SkillsAnimate>
        <SkillsAnimate x={"-9vw"} y={"19vw"}>
          <Tooltip text="Tailwind Css">
            <MagneticiIcons>
              <TailwindIcon color={color} size={size} />
            </MagneticiIcons>
          </Tooltip>
        </SkillsAnimate>
        <SkillsAnimate x={"10vw"} y={"-15vw"}>
          <MagneticiIcons>
            <ReduxIcon color={color} size={size} />
          </MagneticiIcons>
        </SkillsAnimate>
        <SkillsAnimate x={"-7.2vw"} y={"-9vw"}>
          <MagneticiIcons>
            <FramerIcon color={color} size={size} />
          </MagneticiIcons>
        </SkillsAnimate>
        <SkillsAnimate x={"25vw"} y={"0vw"}>
          <MagneticiIcons>
            <GithubIcon color={color} size={size} />
          </MagneticiIcons>
        </SkillsAnimate>
        <SkillsAnimate x={"-25vw"} y={"0vw"}>
          <MagneticiIcons>
            <NextjsIcon color={color} size={size} />
          </MagneticiIcons>
        </SkillsAnimate>
        <SkillsAnimate x={"25vw"} y={"13vw"}>
          <MagneticiIcons>
            <HtmlIcon color={color} size={size} />
          </MagneticiIcons>
        </SkillsAnimate>
        <SkillsAnimate x={"43vw"} y={"-5vw"}>
          <MagneticiIcons>
            <NodeIcon color={color} size={size} />
          </MagneticiIcons>
        </SkillsAnimate>
        <SkillsAnimate x={"-16vw"} y={"-18vw"}>
          <MagneticiIcons>
            <Expressicon color={color} size={size} />
          </MagneticiIcons>
        </SkillsAnimate>
        <SkillsAnimate x={"-35vw"} y={"-9vw"}>
          <MagneticiIcons>
            <MongodbIcon color={color} size={size} />
          </MagneticiIcons>
        </SkillsAnimate>
      </div>
    </div>
  );
};

export default Radialbg;

const SkillsAnimate = ({
  children,
  x,
  y,
}: {
  children: ReactNode;
  x: any;
  y: any;
}) => {
  return (
    <motion.div
      className="absolute"
      initial={{ x: 0, y: 0 }}
      whileInView={{ x: x, y: y }}
      transition={{ duration: 1.5 }}
      viewport={{once:true}}
    >
      {" "}
      {children}
    </motion.div>
  );
};
