import placebit from "../../assets/placebitmoji.png";
import backdrop from "../../assets/backdrop.png";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import MagneticiIcons from "../about/_shared/framerMagnetic";
interface HerosectProps {
  setIshovered: (hovered: boolean) => void;
  mousePosition: { x: number; y: number };
}
const Herosect = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [ishovered, setIshovered] = useState<Boolean>(false);
  useEffect(() => {
    const setFromEvent = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", setFromEvent);
    return () => {
      window.removeEventListener("mousemove", setFromEvent);
    };
  }, []);
  const size = ishovered ? "250" : "60";

  return (
    <div className="boxxx">
      <div className="w-[150px] h-[50px] bg-black absolute bottom-10 left-8 flex items-center justify-center z-0 ">
        <div className="text-white ">Time</div>
      </div>
      <div className="absolute top-[40%] left-[-150px]  flex gap-10 font-bold rotate-90 z-0">
        <p>Linkedin</p>
        <p>Github</p>
        <p>Twitter</p>
        <p>Instagram</p>
      </div>
      <div className="absolute bottom-10 right-10  flex gap-10  font-bold z-0">
        <MagneticiIcons>
          <p className="text-[1.5rem]">OG</p>
        </MagneticiIcons>
      </div>
      <motion.div
        className="masked"
        animate={{
          WebkitMaskPosition: `${mousePosition.x - parseInt(size) / 2}px ${
            mousePosition.y - parseInt(size) / 2
          }px`,
          WebkitMaskSize: `${size}px`,
        }}
        transition={{ duration: 0.2, ease: "easeOut" }}
      >
        <div className="text-[6rem] font-extrabold ">
          <aside
            onMouseEnter={() => setIshovered(true)}
            onMouseLeave={() => setIshovered(false)}
          >
            <p className="text-[#FFFFFF] text-center">Hello there,</p>
            <p className="text-[#FFFFFF] text-center">I am Jonathan</p>
            <p className="text-center">Front-end Heavy as seen</p>
          </aside>
          <div className="w-[150px] h-[50px] bg-white absolute bottom-10 left-8 flex items-center justify-center">
            <p className="text-black text-[1rem] z-50">Time</p>
          </div>
        </div>
        <div className="absolute top-[40%] left-[-150px]  flex gap-10 font-bold rotate-90 z-10 text-white">
          <p>Linkedin</p>
          <p>Github</p>
          <p>Twitter</p>
          <p>Instagram</p>
        </div>
        <div className="absolute bottom-10 right-10  flex gap-10 font-bold z-10 text-white">
          <MagneticiIcons>
            <p className="text-[1.5rem]">OG</p>
          </MagneticiIcons>
        </div>
      </motion.div>
      <div>
        <div className="flex items-center text-[#000000] font-extrabold text-[6rem]">
          <aside>
            <p className="text-center">Hello there,</p>
            <p className="text-center">I am Jonathan</p>
            <p className="text-center">Full- stack Developer</p>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default Herosect;
