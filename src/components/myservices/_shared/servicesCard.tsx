import { useTransform,motion, useScroll } from 'framer-motion';
import React, { useRef } from 'react'

const ServicesCard = ({i,range,targetScale,progress}:{i:number,range:number[],targetScale:number,progress:any}) => {
  const cardRef = useRef<any>(null)
  const {scrollYProgress} = useScroll({target:cardRef,offset:["start end","end 0.65"]})
  const scale  = useTransform(progress,range,[1,targetScale])
  const opacity = useTransform(scrollYProgress,[0,1],[0,1])
  return (
    <motion.div
      ref={cardRef}
      className="bg-white/30 backdrop-blur-md rounded-2xl shadow-lg shadow-white/15 p-8 max-w-[500px] text-center border border-white/20 ml-10"
      style={{ position: "relative", top: `calc(-2vh + ${i * 20}px)`,scale,opacity}}
    >
      {/* <div className="absolute  inset-0 bg-gradient-to-r from-purple-500/50 via-transparent to-blue-500/50 mix-blend-overlay pointer-events-none rounded-2xl" />
      <div className="absolute inset-0 bg-gradient-to-br from-white/0 to-pink-300 opacity-20 pointer-events-none rounded-2xl" /> */}
      <div className="w-[5rem] h-[5rem] bg-white rounded-full flex justify-center items-center mx-auto mb-4 shadow-md">
        {/* <img src="path/to/your-icon.svg" alt="Icon" /> */}
      </div>
      <h3 className="font-[1.5rem] font-semibold text-gray-800 mb-4 text-center">
        Results that speak louder: evidenced
      </h3>
      <p className="text-gray-800 text-center">
        We don’t just promise excellence; we deliver it. Our portfolio is a
        testament to our commitment to producing results that speak louder than
        words.
      </p>
    </motion.div>
  );
}

export default ServicesCard