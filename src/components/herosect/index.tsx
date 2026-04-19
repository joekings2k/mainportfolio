import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import MagneticiIcons from "../about/_shared/framerMagnetic";

const SOCIAL_LINKS = [
  { label: "Linkedin", href: "https://www.linkedin.com/" },
  { label: "Github", href: "https://github.com/joekings2k" },
  { label: "Twitter", href: "https://twitter.com/" },
  { label: "Instagram", href: "https://www.instagram.com/" },
];

const Herosect = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [ishovered, setIshovered] = useState<boolean>(false);
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
        {SOCIAL_LINKS.map((s) => (
          <a
            key={s.label}
            href={s.href}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-70 transition-opacity"
          >
            {s.label}
          </a>
        ))}
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
            <p className="text-center">Front-end Heavy</p>
          </aside>
          <div className="w-[150px] h-[50px] bg-white absolute bottom-10 left-8 flex items-center justify-center">
            <p className="text-black text-[1rem] z-50">Time</p>
          </div>
        </div>
        <div className="absolute top-[40%] left-[-150px]  flex gap-10 font-bold rotate-90 z-10 text-white">
          {SOCIAL_LINKS.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-70 transition-opacity"
            >
              {s.label}
            </a>
          ))}
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
