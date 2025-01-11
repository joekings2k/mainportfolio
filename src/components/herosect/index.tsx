import placebit from "../../assets/placebitmoji.png";
import backdrop from "../../assets/backdrop.png";
import { useEffect, useState } from "react";
import {motion} from "framer-motion"
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
    const size = ishovered ? "250" : "50";
  
  return (
    <div className="boxxx">
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
        <div
          onMouseEnter={() => setIshovered(true)}
          onMouseLeave={() => setIshovered(false)}
          className="flex items-center"
        >
          <aside>
            <h1 className="text-2xl">Hi, i am very sad </h1>
            <h1 className="text-4xl">and need some tiddy piccs</h1>
          </aside>
          <div className=" p-0 m-0">
            <img
              src={backdrop}
              alt="place"
              style={{ width: "20rem", filter: "grayscale(100%)" }}
            />
          </div>
        </div>
      </motion.div>
      <div>
        <div className="flex items-center text-white ">
          <aside>
            <h1 className="text-2xl">Hi, i am jonathan</h1>
            <h1 className="text-4xl">professional web developer</h1>
          </aside>
          <div className=" p-0 m-0">
            <img src={placebit} alt="place" style={{ width: "20rem" }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Herosect