import { useEffect, useState, type Dispatch, type SetStateAction } from "react";
import { motion } from "framer-motion";
import MagneticiIcons from "../about/_shared/framerMagnetic";

const SOCIAL_LINKS = [
  { label: "Linkedin", href: "https://www.linkedin.com/" },
  { label: "Github", href: "https://github.com/joekings2k" },
  { label: "Twitter", href: "https://twitter.com/" },
  { label: "Instagram", href: "https://www.instagram.com/" },
];

type HeadlineProps = {
  setIshovered: Dispatch<SetStateAction<boolean>>;
  inverted?: boolean;
};

const HeroHeadline = ({ setIshovered, inverted = false }: HeadlineProps) => {
  const textColor = inverted ? "text-white" : "text-black";
  const eyebrowText = inverted ? "text-white/60" : "text-[#6E7470]";
  const eyebrowChip = inverted
    ? "border-white/40 text-white"
    : "border-[#E2DED4] text-black";
  const eyebrowRule = inverted ? "bg-white/30" : "bg-[#E2DED4]";

  return (
    <div className="flex flex-col items-center">
      <div
        className={`flex items-center justify-center gap-4 mb-8 font-mono text-[11px] tracking-[0.18em] uppercase ${eyebrowText}`}
      >
        <span
          className={`inline-flex items-center justify-center w-6 h-6 rounded-full border text-[10px] ${eyebrowChip}`}
        >
          01
        </span>
        <span>Introduction</span>
        <span className={`w-16 h-px ${eyebrowRule}`} />
        <span>scroll to continue ↓</span>
      </div>

      <aside
        onMouseEnter={() => setIshovered(true)}
        onMouseLeave={() => setIshovered(false)}
        className="text-[6rem] font-extrabold leading-[0.92] tracking-tight text-center"
      >
        <p className={textColor}>Hello there,</p>
        <p className={textColor}>I am Jonathan</p>
        <p
          className={`flex items-center justify-center gap-5 ${textColor}`}
        >
          {/* <span className="hero-star" aria-hidden="true" /> */}
          <span>Full-stack Developer</span>
        </p>
      </aside>
    </div>
  );
};

const Herosect = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [ishovered, setIshovered] = useState<boolean>(false);
  const [clock, setClock] = useState("--:--");

  useEffect(() => {
    const setFromEvent = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", setFromEvent);
    return () => {
      window.removeEventListener("mousemove", setFromEvent);
    };
  }, []);

  useEffect(() => {
    const updateClock = () => {
      const parts = new Intl.DateTimeFormat("en-GB", {
        timeZone: "Africa/Lagos",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      }).formatToParts(new Date());
      const get = (t: string) =>
        parts.find((p) => p.type === t)?.value ?? "00";
      setClock(`${get("hour")}:${get("minute")}`);
    };
    updateClock();
    const id = setInterval(updateClock, 30_000);
    return () => clearInterval(id);
  }, []);

  const size = ishovered ? "250" : "60";

  return (
    <div className="boxxx">
      <span className="frame-tick frame-tick-tl" />
      <span className="frame-tick frame-tick-tr" />
      <span className="frame-tick frame-tick-bl" />
      <span className="frame-tick frame-tick-br" />

      <div className="absolute top-7 left-9 flex items-center gap-3 font-mono text-[12px] tracking-[0.04em] text-black z-10">
        <span className="w-2.5 h-2.5 rounded-full bg-black shadow-[0_0_0_4px_rgba(15,20,16,0.08)]" />
        <span>jonathan / portfolio · v.04</span>
      </div>

      <div className="absolute top-9 left-1/2 -translate-x-1/2 flex items-center gap-2 font-mono text-[11px] tracking-[0.04em] text-[#3A3F3B] z-10">
        <span className="hero-pulse" />
        <span>Available for work — Q3 2026</span>
      </div>

      <div className="absolute right-5 top-1/2 -translate-y-1/2 z-10">
        <p className="[writing-mode:vertical-rl] font-mono text-[11px] tracking-[0.2em] uppercase text-[#6E7470]">
          Based in Lisbon &nbsp;·&nbsp;{" "}
          <b className="text-black font-semibold">EST. 2026</b>
        </p>
      </div>

      <div className="time-chip absolute bottom-10 left-8 z-10">
        <span className="time-chip-label">LISBON</span>
        <span className="time-chip-clock">{clock}</span>
      </div>

      <div className="absolute top-[40%] left-[-150px] flex gap-10 font-bold rotate-90 z-0">
        {SOCIAL_LINKS.map((s) => (
          <a
            key={s.label}
            href={s.href}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#7BC47F] transition-colors duration-300"
          >
            {s.label}
          </a>
        ))}
      </div>

      <div className="absolute bottom-10 right-10 flex items-center gap-4 font-bold z-10 text-black">
        <span className="font-mono text-[11px] tracking-[0.16em] uppercase text-[#3A3F3B] font-normal">
          Selected works →
        </span>
        <MagneticiIcons>
          <span className="og-circle">OG</span>
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
        <HeroHeadline setIshovered={setIshovered} inverted />

        <div className="time-chip time-chip-inverted absolute bottom-10 left-8 z-10">
          <span className="time-chip-label">LISBON</span>
          <span className="time-chip-clock">{clock}</span>
        </div>

        <div className="absolute top-[40%] left-[-150px] flex gap-10 font-bold rotate-90 z-10 text-white">
          {SOCIAL_LINKS.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#7BC47F] transition-colors duration-300"
            >
              {s.label}
            </a>
          ))}
        </div>

        <div className="absolute bottom-10 right-10 flex items-center gap-4 font-bold z-10 text-white">
          <span className="font-mono text-[11px] tracking-[0.16em] uppercase text-white/60 font-normal">
            Selected works →
          </span>
          <MagneticiIcons>
            <span className="og-circle og-circle-inverted">OG</span>
          </MagneticiIcons>
        </div>
      </motion.div>

      <HeroHeadline setIshovered={setIshovered} />
    </div>
  );
};

export default Herosect;
