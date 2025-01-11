import React, { useEffect, useRef } from "react";
import Card from "../card";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { workData } from "../../constants";
import { WorkDataType } from "../../constants/type";
// import CountAnimation from "../animation/counanimation";

const Test = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const triggerRef = useRef<HTMLDivElement | null>(null);
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const horizontalGsapPin = () => {
      const sectionPin = sectionRef.current;
      const sectionTrigger = triggerRef.current;

      if (sectionPin && window) {
        const scrollWidth =
          sectionPin.scrollWidth - document.documentElement.clientWidth + 40;

        gsap.fromTo(
          sectionPin,
          {
            translateX: 20,
          },
          {
            translateX: -scrollWidth,
            ease: "none",
            scrollTrigger: {
              trigger: sectionTrigger,
              start: "top top",
              end: () => "+=" + scrollWidth,
              scrub: true,
              pin: true,
              anticipatePin: 1,
              invalidateOnRefresh: true,
            },
          }
        );
      }
    };

    horizontalGsapPin();

    const handleRefresh = () => {
      ScrollTrigger.refresh();
    };
    window.addEventListener("resize", handleRefresh);

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      window.removeEventListener("resize", handleRefresh);
    };
  }, []);

  return (
    <div>
      <div className="overflow-hidden">
        <div ref={triggerRef}>
          <div
            className="h-[100vh] flex flex-row gap-5 relative items-center w-[max-content]"
            ref={sectionRef}
          >
            <div className="w-[30rem] flex-shrink-0">
              <h3 className="text-[5rem]">Work</h3>
              <p className="text-[2rem]">
                A selection of my crafted work, built from scratch by the
                talented wonder boy himself.
              </p>
            </div>
            {workData.map((item: WorkDataType, i) => (
              <div key={i} className="flex-shrink-0">
                <Card
                  image={item.image}
                  title={item.title}
                  stack={item.stack}
                />
              </div>
            ))}
            {/* <CountAnimation from={0} to={100} /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Test;
