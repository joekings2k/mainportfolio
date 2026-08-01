import { Fragment, useMemo, useRef, useState } from "react";
import {
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
  type MotionValue,
} from "framer-motion";

type Segment = { text: string; italic?: boolean };

type Token =
  | { kind: "word"; text: string; italic: boolean }
  | { kind: "space"; text: string };

const tokenize = (segments: Segment[]): Token[] => {
  const out: Token[] = [];
  for (const seg of segments) {
    const parts = seg.text.split(/(\s+)/);
    for (const part of parts) {
      if (!part) continue;
      if (/^\s+$/.test(part)) out.push({ kind: "space", text: part });
      else out.push({ kind: "word", text: part, italic: !!seg.italic });
    }
  }
  return out;
};

type WordProps = {
  text: string;
  italic: boolean;
  range: [number, number];
  scrollYProgress: MotionValue<number>;
  isHead: boolean;
};

const Word = ({ text, italic, range, scrollYProgress, isHead }: WordProps) => {
  const opacity = useTransform(scrollYProgress, range, [0.18, 1]);
  const className = [
    "inline-block transition-[color,text-shadow] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]",
    italic ? "font-['Instrument_Serif'] italic font-normal" : "",
    isHead ? "text-[#7BC47F] [text-shadow:_0_0_14px_rgba(123,196,127,0.55)]" : "",
  ]
    .filter(Boolean)
    .join(" ");
  return (
    <motion.span style={{ opacity }} className={className}>
      {text}
    </motion.span>
  );
};

type ParagraphProps = {
  segments: Segment[];
  className: string;
  decorate?: React.ReactNode;
};

const RevealParagraph = ({ segments, className, decorate }: ParagraphProps) => {
  const ref = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.85", "end 0.5"],
  });

  const tokens = useMemo(() => tokenize(segments), [segments]);
  const wordIndices = useMemo(
    () => tokens.map((t, i) => (t.kind === "word" ? i : -1)).filter((i) => i >= 0),
    [tokens]
  );
  const wordCount = wordIndices.length;

  const [headWord, setHeadWord] = useState(-1);
  useMotionValueEvent(scrollYProgress, "change", (p) => {
    if (p <= 0 || p >= 1) {
      if (headWord !== -1) setHeadWord(-1);
      return;
    }
    const next = Math.min(wordCount - 1, Math.floor(p * wordCount));
    if (next !== headWord) setHeadWord(next);
  });

  let wordCursor = 0;
  return (
    <p ref={ref} className={className}>
      {decorate}
      {tokens.map((tok, i) => {
        if (tok.kind === "space") return <Fragment key={i}>{tok.text}</Fragment>;
        const idx = wordCursor++;
        const start = idx / wordCount;
        const end = (idx + 1) / wordCount;
        return (
          <Word
            key={i}
            text={tok.text}
            italic={tok.italic}
            range={[start, end]}
            scrollYProgress={scrollYProgress}
            isHead={idx === headWord}
          />
        );
      })}
    </p>
  );
};

const Intro = () => {
  return (
    <div className="flex flex-col gap-[72px] max-w-[920px]">
      <div className="flex items-center gap-3.5 font-mono text-[11px] tracking-[0.22em] uppercase text-[#6E7470]">
        <span>— Intro</span>
        <span className="w-20 h-px bg-[#2A2E2A]" />
      </div>

      <RevealParagraph
        className="relative pl-7 text-[clamp(30px,3.6vw,48px)] leading-[1.28] tracking-[-0.018em] font-medium text-[#F4F1EA] text-pretty"
        decorate={
          <span className="about-accent-bar absolute left-0 top-[0.32em] bottom-[0.32em] w-[2px] bg-[#7BC47F]" />
        }
        segments={[
          {
            text: "I'm a dedicated Full-Stack Developer with over 3 years of experience, heavily focused on front-end. I specialize in building intuitive, responsive, and dynamic user interfaces — and quietly making sure the back-end keeps up.",
          },
        ]}
      />

      <RevealParagraph
        className="text-[clamp(22px,2.4vw,30px)] leading-[1.45] tracking-[-0.018em] font-normal text-[#B9BCB6] text-pretty"
        segments={[
          { text: "I love turning ideas into " },
          { text: "sleek, responsive apps", italic: true },
          {
            text: " that feel effortless to use. Whether it's crafting smooth animations, building scalable features, or experimenting with new tech — I'm all about creating experiences that people actually ",
          },
          { text: "enjoy", italic: true },
          { text: "." },
        ]}
      />
    </div>
  );
};

export default Intro;
