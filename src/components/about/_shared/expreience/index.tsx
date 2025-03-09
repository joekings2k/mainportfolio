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
          className="absolute left-4 top-1 w-[4px] h-full bg-red-400 origin-top"
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
        <h4>FrontEnd dev @tensGlbal</h4>
        <p>2023-present| Lagos Festac</p>
        <p>
          Optimized the Wenigro admin application's state management process by
          40% using built-in hooks, enhancing data retrieval speed and
          application performance. Improved data fetching and caching strategies
          to boost retrieval speed and component interaction, benefiting over
          1,000 users who rely on the admin application to modify an external
          system's operations. Collaborated with the backend team to streamline
          data flow and API communication, ensuring seamless integration of
          frontend and backend functionalities. Additionally, decluttered and
          consolidated global variables in the codebase, reducing redundancy by
          30% and enhancing code readability and maintainability.
        </p>
      </motion.div>
    </div>
  );
};
