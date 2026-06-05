import { useWordReveal } from "../hooks/useWordReveal";
import { splitWords } from "../hooks/splitWords";

const Intro = () => {
  const ref = useWordReveal<HTMLDivElement>();

  return (
    <div ref={ref} className="flex flex-col gap-18 max-w-[920px]">
      <div className="flex items-center gap-3.5 font-mono text-[11px] tracking-[0.22em] uppercase text-[#6E7470] ">
        <span>— Intro</span>
        <span className="w-20 h-px bg-[#2A2E2A]" />
      </div>

      <p className="about-reveal relative pl-7 text-[clamp(30px,3.6vw,48px)] leading-[1.28] tracking-[-0.018em] font-medium text-[#F4F1EA] text-pretty">
        <span className="about-accent-bar absolute left-0 top-[0.32em] bottom-[0.32em] w-[2px] bg-[#7BC47F]" />
        {splitWords([
          {
            text: "I'm a dedicated Full-Stack Developer with over 3 years of experience, heavily focused on front-end. I specialize in building intuitive, responsive, and dynamic user interfaces — and quietly making sure the back-end keeps up.",
          },
        ])}
      </p>

      <p className="about-reveal text-[clamp(22px,2.4vw,30px)] leading-[1.45] tracking-[-0.018em] font-normal text-[#B9BCB6] text-pretty">
        {splitWords([
          { text: "I love turning ideas into " },
          { text: "sleek, responsive apps", italic: true },
          {
            text: " that feel effortless to use. Whether it's crafting smooth animations, building scalable features, or experimenting with new tech — I'm all about creating experiences that people actually ",
          },
          { text: "enjoy", italic: true },
          { text: "." },
        ])}
      </p>
    </div>
  );
};

export default Intro;
