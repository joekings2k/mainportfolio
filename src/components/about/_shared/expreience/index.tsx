import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Lilicon from "../components/lilicon";
const Experience_and_education = () => {
  const ref = useRef<any>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  return (
    <div className="w-full relative mt-16">
      <div className="flex flex-col gap-10  relative overflow-hidden">
        <motion.div
          ref={ref}
          style={{ scaleY: y }}
          className="absolute left-4 top-1 w-[4px] h-full bg-white/50 origin-top"
        />
        <div className="ml-[6rem] flex flex-col gap-10 ">
          <Details />
          <Details />
          <Details />
        </div>
      </div>
    </div>
  );
};

export default Experience_and_education;

const Details = () => {
  const detsref = useRef<any>(null);
  return (
    <div >
      <Lilicon refs={detsref} />
      <motion.div className="w-[55vw]" ref={detsref} initial={{x:"1000px",opacity:0}} whileInView={{x:0,opacity:1}} transition={{ease:"easeInOut",duration:1}} viewport={{once:true}}>
        <h4>Full-Stack Developer @ Tens Global Systems</h4>
        <p>Jun 2022 – Nov 2024 | Remote</p>
        <p>
          Designed and built 15+ secure REST APIs with Node.js, Express, and
          Supabase, with JWT auth and role-based access control. Refactored
          1,000+ lines of state logic with React hooks, cutting load times by
          ~40%. Integrated Redis caching to reduce API latency by ~50%, and set
          up GitHub Actions and Vercel deployments — shipping 20+ features at a
          90% release success rate while sustaining 99.9% uptime.
        </p>
      </motion.div>
    </div>
  );
};
