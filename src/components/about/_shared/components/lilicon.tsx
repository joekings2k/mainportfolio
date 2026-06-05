import { useScroll, motion, useTransform } from 'framer-motion';

const Lilicon = ({refs}:{refs:any}) => {
  const  {scrollYProgress}= useScroll({
    target:refs ,
    offset: ["start end", "center center"]
  })
   const reversedProgress = useTransform(scrollYProgress, [0, 1], [1, 0]);
  return (
    <figure className="absolute -left-5 stroke-black">
      <svg width="75" height="75" viewBox="0 0 100 100" className='-rotate-90'>
        <circle
          cx={"75"}
          cy={"50"}
          r={"20"}
          className="stroke-blue-900 stroke-3 fill-none"
        />

        <motion.circle cx={"75"} cy={"50"} r={"20"} className=" stroke-[5px] fill-white/90" style={{pathLength:reversedProgress}} />

        <circle cx={"75"} cy={"50"} r={"10"} className="stroke-1 fill-blue-400 animate-pulse" />
      </svg>
    </figure>
  );
}

export default Lilicon