import { useRef, useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import ServicesCard from "./_shared/servicesCard";
import { services } from "./_shared/data";
const Services = () => {
  const containerRef = useRef<any>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const [active, setActive] = useState(0);
  useMotionValueEvent(scrollYProgress, "change", (p) => {
    const idx = Math.min(
      services.length - 1,
      Math.max(0, Math.floor(p * services.length))
    );
    setActive(idx);
  });
  return (
    <div className="relative h-[560vh]" data-theme="light">
      <div className="flex flex-col justify-center h-[100vh] items-center pt-10 sticky top-0 bg-white overflow-hidden">
        {/* dotted-grid backdrop, faded toward the edges */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(rgba(0,0,0,0.08) 1px, transparent 1px)",
            backgroundSize: "22px 22px",
            WebkitMaskImage:
              "radial-gradient(ellipse 78% 62% at 50% 46%, #000 28%, transparent 76%)",
            maskImage:
              "radial-gradient(ellipse 78% 62% at 50% 46%, #000 28%, transparent 76%)",
          }}
        />

        <div className="absolute top-16 z-10">
          <p className="font-mono text-[11px] tracking-[0.28em] uppercase text-black/40 text-center mb-5">
            Services
          </p>
          <p className="text-5xl font-extrabold text-black text-center ">
            Exceptional{" "}
          </p>
          <p className="text-5xl font-extrabold text-black text-center">
            is the standard
          </p>
          <p className="text-1xl  text-black mt-10 text-center">What i offer</p>
        </div>

        {/* live index rail — highlights the active service as you scroll */}
        <div className="hidden lg:flex flex-col gap-4 absolute left-14 top-1/2 -translate-y-1/2 z-0">
          {services.map((s, i) => (
            <div
              key={s.no}
              className="flex items-center gap-3 transition-opacity duration-300"
              style={{ opacity: active === i ? 1 : 0.3 }}
            >
              <span className="font-mono text-[11px] tabular-nums text-black/50 w-5">
                {s.no}
              </span>
              <span
                className="h-px transition-all duration-300"
                style={{
                  width: active === i ? 34 : 16,
                  background: active === i ? "#3F8A45" : "rgba(0,0,0,0.3)",
                }}
              />
              <span
                className="font-mono text-[11px] tracking-[0.16em] uppercase transition-colors duration-300"
                style={{ color: active === i ? "#111" : "rgba(0,0,0,0.5)" }}
              >
                {s.category}
              </span>
            </div>
          ))}
        </div>

        {/* big faint active number on the right */}
        <div className="hidden lg:block absolute right-16 top-1/2 -translate-y-1/2 z-0 pointer-events-none">
          <span className="font-mono font-bold leading-none text-[180px] text-black/[0.045] tabular-nums">
            {services[active].no}
          </span>
        </div>

        {/* progress counter at the bottom */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-3">
          <div className="w-40 h-px bg-black/10 overflow-hidden">
            <motion.div
              className="h-full origin-left bg-black/50"
              style={{ scaleX: scrollYProgress }}
            />
          </div>
          <span className="font-mono text-[10px] tracking-[0.22em] uppercase text-black/40 tabular-nums">
            {String(active + 1).padStart(2, "0")} —{" "}
            {String(services.length).padStart(2, "0")}
          </span>
        </div>
        <svg
          width="250"
          height="213"
          viewBox="0 0 250 213"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute top-[5rem] left-[26rem]"
        >
          <motion.path
            d="M161 0.5H0.5V212.5H250"
            stroke="#00000080" //add opacity to the stroke
            strokeWidth="9"
            fill="none"
            strokeDasharray="900" // Approximate total length of the path
            strokeDashoffset="900" // Initially hidden
            // animate={{ strokeDashoffset: 0 }} // Fully drawn
            whileInView={{ strokeDashoffset: 0 }}
            transition={{ duration: 2, ease: "easeInOut" }} // Smooth animation
          />
        </svg>

        <svg
          width="251"
          height="213"
          viewBox="0 0 251 213"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute top-[5rem] right-[25rem]"
        >
          <motion.path
            d="M89.5 0.5H250V212.5H0.5"
            stroke="#00000080"
            strokeWidth="9"
            fill="none"
            strokeDasharray="900" // Approximate total length of the path
            strokeDashoffset="900" // Initially hidden
            whileInView={{ strokeDashoffset: 0 }}
            transition={{ duration: 2, ease: "easeInOut" }} // Smooth animation
          />
        </svg>
      </div>
      <div className="relative " ref={containerRef}>
        {services.map((service, i) => {
          const targetScale = 1 - (services.length - i) * 0.05;
          return (
            <div
              key={service.no}
              className={`h-[90vh] flex flex-col items-center justify-center sticky top-0`}
            >
              <ServicesCard
                i={i}
                service={service}
                range={[i * (1 / (services.length - 1)), 1]}
                targetScale={targetScale}
                progress={scrollYProgress}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Services;
