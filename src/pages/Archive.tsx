import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import {
  AnimatePresence,
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
  type MotionValue,
} from "framer-motion";
import {
  archive,
  type ArchiveItem,
  type ArchiveLang,
} from "../components/works/data";
import { useMediaQuery } from "../hooks/useMediaQuery";
import CoverArt from "../components/works/coverArt";

const ease = [0.22, 1, 0.36, 1] as const;

/* -------------------------------------------------------------------------- */
/* Language config — identity colour + fake build logs per stack              */
/* -------------------------------------------------------------------------- */
const LANGS: {
  id: ArchiveLang;
  label: string;
  accent: string;
  prompt: string;
  logs: string[];
}[] = [
  {
    id: "js",
    label: "JavaScript",
    accent: "#F7DF1E",
    prompt: "web ▸ pnpm build",
    logs: [
      "$ pnpm build",
      "vite v6.0.2 building for production…",
      "✓ 412 modules transformed",
      "✓ built in 1.28s",
      "▲ vercel — deployment ready",
    ],
  },
  {
    id: "go",
    label: "Go",
    accent: "#00ADD8",
    prompt: "api ▸ go build",
    logs: [
      "$ go test ./...",
      "ok   ledger/cli         0.42s",
      "ok   shortlink/router   0.18s",
      "✓ go build -o bin/app",
      "→ 8.2MB static binary",
    ],
  },
];

/* -------------------------------------------------------------------------- */
/* Presentational project block — media + info + giant index. Shared by the    */
/* mobile Row and the desktop PinnedProject. Pass imageY / numberY to animate   */
/* those pieces; omit them for a static render.                                 */
/* -------------------------------------------------------------------------- */
const ProjectBlock = ({
  item,
  no,
  flip,
  imageY,
  numberY,
}: {
  item: ArchiveItem;
  no: string;
  flip: boolean;
  imageY?: MotionValue<string>;
  numberY?: MotionValue<string>;
}) => {
  const isLink = Boolean(item.slug);
  const rowClass = [
    "group flex flex-col gap-8 md:gap-14 items-center w-full",
    flip ? "md:flex-row-reverse" : "md:flex-row",
  ].join(" ");

  const inner = (
    <>
      {/* media */}
      <div className="relative w-full md:w-[54%] shrink-0">
        <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-[#2A2E2A] bg-[#121412]">
          {item.image ? (
            <motion.img
              src={item.image}
              alt={item.title}
              style={imageY ? { y: imageY } : undefined}
              className={[
                "absolute inset-0 w-full h-full object-cover will-change-transform",
                imageY ? "scale-[1.18]" : "",
              ].join(" ")}
            />
          ) : item.cover ? (
            <CoverArt cover={item.cover} />
          ) : (
            <motion.div
              style={imageY ? { y: imageY } : undefined}
              className="absolute inset-[-14%] flex items-center justify-center"
            >
              <div
                className="w-full h-full rounded-2xl opacity-90"
                style={{
                  background: `radial-gradient(120% 120% at 30% 20%, ${
                    item.accent?.[0] ?? "#7BC47F"
                  }, ${item.accent?.[1] ?? "#0A0B0A"} 78%)`,
                }}
              />
              <span className="absolute font-mono text-[13px] tracking-[0.2em] uppercase text-white/70">
                Placeholder — add shot
              </span>
            </motion.div>
          )}
          <div className="absolute inset-0 ring-1 ring-inset ring-white/[0.04] rounded-2xl pointer-events-none" />
        </div>

        {isLink && (
          <span className="absolute bottom-4 left-4 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[rgba(10,11,10,0.55)] backdrop-blur-md border border-white/[0.1] font-mono text-[10.5px] tracking-[0.12em] uppercase text-[#7BC47F]">
            View case →
          </span>
        )}
      </div>

      {/* text */}
      <div className="relative flex-1 md:pt-6">
        <motion.span
          aria-hidden
          style={numberY ? { y: numberY } : undefined}
          className="absolute -top-24 md:-top-16 -z-0 font-mono font-bold text-[clamp(120px,20vw,240px)] leading-none tracking-tighter text-transparent [-webkit-text-stroke:1px_#20241F] select-none pointer-events-none"
        >
          {no}
        </motion.span>

        <div className="relative z-10">
          <div className="flex items-center gap-3 font-mono text-[11px] tracking-[0.16em] uppercase text-[#6E7470] mb-4">
            <span>{item.year}</span>
            <span className="w-[3px] h-[3px] rounded-full bg-[#6E7470]" />
            <span>{item.role}</span>
          </div>
          <h2 className="text-[clamp(34px,5vw,64px)] font-bold tracking-[-0.03em] leading-[0.98] text-[#F4F1EA]">
            {item.title}
          </h2>
          <p className="mt-5 text-[16px] leading-[1.6] text-[#B9BCB6] max-w-[46ch] text-pretty">
            {item.blurb}
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {item.stack.map((t) => (
              <span
                key={t}
                className="px-2.5 py-1 border border-[#2A2E2A] rounded-md font-mono text-[11px] text-[#B9BCB6]"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </>
  );

  // A real external link only when href is set and not the "#" placeholder.
  const hasHref = Boolean(item.href && item.href !== "#");

  if (item.slug) {
    return (
      <Link to={`/work/${item.slug}`} className={rowClass}>
        {inner}
      </Link>
    );
  }
  if (hasHref) {
    return (
      <a href={item.href} target="_blank" rel="noreferrer" className={rowClass}>
        {inner}
      </a>
    );
  }
  // No destination yet → plain block, so clicking doesn't jump to the top.
  return <div className={rowClass}>{inner}</div>;
};

/* -------------------------------------------------------------------------- */
/* Mobile / reduced-motion fallback — a normal stacked row with a fade-in.     */
/* -------------------------------------------------------------------------- */
const Row = ({ item, i }: { item: ArchiveItem; i: number }) => {
  const flip = i % 2 === 1;
  const no = String(i + 1).padStart(2, "0");
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -15% 0px" }}
      transition={{ duration: 0.8, ease }}
      className="py-16 md:py-28"
    >
      <ProjectBlock item={item} no={no} flip={flip} />
    </motion.div>
  );
};

/* -------------------------------------------------------------------------- */
/* Desktop — each project PINS full-screen (sticky) while its whole block       */
/* (image + info) parallax-rises, then releases to the next. Same tall-wrapper  */
/* + sticky-stage recipe as the Works carousel (track.tsx).                     */
/* -------------------------------------------------------------------------- */
const PinnedProject = ({
  item,
  i,
  z,
}: {
  item: ArchiveItem;
  i: number;
  z: number;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const flip = i % 2 === 1;
  const no = String(i + 1).padStart(2, "0");

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  // the whole block rises while pinned
  const blockY = useTransform(scrollYProgress, [0, 1], ["18%", "-18%"]);
  // depth: image drifts a touch more, the index number drifts opposite
  const imageY = useTransform(scrollYProgress, [0, 1], ["8%", "-8%"]);
  const numberY = useTransform(scrollYProgress, [0, 1], ["-30%", "30%"]);

  return (
    <div ref={ref} className="relative h-[250vh]" style={{ zIndex: z }}>
      <div className="sticky top-0 h-screen overflow-hidden bg-[#0A0B0A] flex items-center">
        <motion.div
          style={{ y: blockY }}
          className="w-full max-w-[1180px] mx-auto px-6 md:px-14 will-change-transform"
        >
          <ProjectBlock
            item={item}
            no={no}
            flip={flip}
            imageY={imageY}
            numberY={numberY}
          />
        </motion.div>
      </div>
    </div>
  );
};

/* -------------------------------------------------------------------------- */
/* Language switch — sliding pill between JavaScript and Go                    */
/* -------------------------------------------------------------------------- */
const LangSwitch = ({
  value,
  counts,
  onChange,
}: {
  value: ArchiveLang;
  counts: Record<ArchiveLang, number>;
  onChange: (l: ArchiveLang) => void;
}) => (
  <div className="inline-flex items-center gap-1 p-1.5 rounded-full border border-[#2A2E2A] bg-[#0D0F0D]">
    {LANGS.map((l) => {
      const active = l.id === value;
      return (
        <button
          key={l.id}
          onClick={() => onChange(l.id)}
          className="relative px-5 py-2.5 rounded-full font-mono text-[12px] tracking-[0.08em] uppercase transition-colors"
          style={{ color: active ? "#0A0B0A" : "#B9BCB6" }}
        >
          {active && (
            <motion.span
              layoutId="langPill"
              className="absolute inset-0 rounded-full"
              style={{ backgroundColor: l.accent }}
              transition={{ type: "spring", stiffness: 480, damping: 38 }}
            />
          )}
          <span className="relative z-10 flex items-center gap-2">
            {l.label}
            <span
              className="tabular-nums"
              style={{ opacity: active ? 0.7 : 0.5 }}
            >
              {String(counts[l.id]).padStart(2, "0")}
            </span>
          </span>
        </button>
      );
    })}
  </div>
);

/* -------------------------------------------------------------------------- */
/* Terminal — replays a short build log whenever the language switches        */
/* -------------------------------------------------------------------------- */
const Terminal = ({ lang }: { lang: ArchiveLang }) => {
  const cfg = LANGS.find((l) => l.id === lang)!;
  return (
    <div className="w-full max-w-[480px] rounded-xl border border-[#2A2E2A] bg-[#0B0D0B] overflow-hidden shadow-[0_24px_60px_-24px_rgba(0,0,0,0.7)]">
      <div className="flex items-center gap-2 px-4 py-2.5 border-b border-[#171A17]">
        <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F57]" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#FEBC2E]" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#28C840]" />
        <span className="ml-2 font-mono text-[10.5px] tracking-[0.1em] text-[#6E7470]">
          {cfg.prompt}
        </span>
      </div>
      <div className="p-4 font-mono text-[12.5px] leading-[1.7] min-h-[150px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={lang}
            initial="hidden"
            animate="visible"
            exit={{ opacity: 0 }}
            variants={{ visible: { transition: { staggerChildren: 0.09 } } }}
          >
            {cfg.logs.map((line, i) => (
              <motion.div
                key={i}
                variants={{
                  hidden: { opacity: 0, x: -8 },
                  visible: { opacity: 1, x: 0 },
                }}
                className={
                  line.startsWith("$")
                    ? "text-[#F4F1EA]"
                    : line.startsWith("✓") || line.startsWith("→")
                    ? "text-[#7BC47F]"
                    : line.startsWith("▲")
                    ? "text-[#B9BCB6]"
                    : "text-[#6E7470]"
                }
                style={
                  line.startsWith("$") ? { color: cfg.accent } : undefined
                }
              >
                {line}
              </motion.div>
            ))}
            <motion.span
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1 },
              }}
              className="inline-block w-[8px] h-[15px] align-middle mt-1"
              style={{ backgroundColor: cfg.accent }}
              animate={{ opacity: [1, 0.15, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            />
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

/* -------------------------------------------------------------------------- */
/* Parallax hero band                                                         */
/* -------------------------------------------------------------------------- */
const Hero = ({ progress }: { progress: MotionValue<number> }) => {
  const y = useTransform(progress, [0, 1], [0, -120]);
  const opacity = useTransform(progress, [0, 0.6], [1, 0]);
  const scale = useTransform(progress, [0, 1], [1, 0.94]);

  return (
    <motion.header
      style={{ y, opacity, scale }}
      className="pt-28 md:pt-36 pb-8 md:pb-16 text-center"
    >
      <div className="flex items-center justify-center gap-3.5 font-mono text-[12px] tracking-[0.2em] uppercase text-[#6E7470] mb-8">
        <span className="w-[60px] h-px bg-[#2A2E2A]" />
        <span>Everything, in order</span>
        <span className="w-[60px] h-px bg-[#2A2E2A]" />
      </div>
      <h1 className="font-bold leading-[0.9] tracking-[-0.04em] text-[clamp(64px,15vw,220px)] text-[#F4F1EA]">
        Archive<span className="text-[#7BC47F]">.</span>
      </h1>
      <p className="mt-6 font-mono text-[12px] tracking-[0.16em] uppercase text-[#6E7470]">
        {String(archive.length).padStart(2, "0")} projects · 2023 — 2025
      </p>
    </motion.header>
  );
};

const Archive = () => {
  const rootRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLDivElement>(null);
  const mounted = useRef(false);
  const { scrollYProgress } = useScroll();
  const [lang, setLang] = useState<ArchiveLang>("js");

  const isDesktop = useMediaQuery("(min-width: 768px)");
  const reduceMotion = useReducedMotion();
  const pinned = isDesktop && !reduceMotion;

  const counts = {
    js: archive.filter((a) => a.lang === "js").length,
    go: archive.filter((a) => a.lang === "go").length,
  };
  const filtered = archive.filter((a) => a.lang === lang);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // On language change (pinned mode), if we're already inside the panel stack,
  // snap back to the first panel so we're not stranded past a shorter list.
  useEffect(() => {
    if (!mounted.current) {
      mounted.current = true;
      return;
    }
    if (!pinned || !listRef.current) return;
    const top = listRef.current.getBoundingClientRect().top + window.scrollY;
    if (window.scrollY > top) window.scrollTo({ top, behavior: "smooth" });
  }, [lang, pinned]);

  return (
    <main
      ref={rootRef}
      data-theme="dark"
      className="bg-[#0A0B0A] text-[#F4F1EA] min-h-screen overflow-x-clip"
    >
      {/* fixed progress line */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] bg-[#7BC47F] origin-left z-[80]"
        style={{ scaleX: scrollYProgress }}
      />

      <div className="max-w-[1180px] mx-auto px-6 md:px-14">
        <div className="pt-8 flex items-center justify-between">
          <Link
            to="/#work"
            className="group inline-flex items-center gap-2.5 font-mono text-[11.5px] tracking-[0.14em] uppercase text-[#B9BCB6] transition-colors hover:text-[#F4F1EA]"
          >
            <span className="transition-transform group-hover:-translate-x-1">
              ←
            </span>
            Back home
          </Link>
          <span className="font-mono text-[11.5px] tracking-[0.16em] text-[#6E7470]">
            Selected → All
          </span>
        </div>

        <Hero progress={scrollYProgress} />

        {/* language switch + reactive build log */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8 pb-10 md:pb-16 border-b border-[#171A17]">
          <div className="flex flex-col gap-4">
            <span className="font-mono text-[10px] tracking-[0.22em] uppercase text-[#6E7470]">
              Filter by stack
            </span>
            <LangSwitch value={lang} counts={counts} onChange={setLang} />
            <p className="font-mono text-[11px] tracking-[0.06em] text-[#6E7470] max-w-[34ch]">
              Flip the switch — the build log and the project list swap with it.
            </p>
          </div>
          <Terminal lang={lang} />
        </div>

        <div ref={listRef}>
          {pinned ? (
            /* full-bleed stack of pinned panels (breaks out of the container) */
            <motion.div
              key={lang}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4 }}
              className="mx-[calc(50%-50vw)]"
            >
              {filtered.map((item, i) => (
                <PinnedProject
                  key={item.title}
                  item={item}
                  i={i}
                  z={i + 1}
                />
              ))}
            </motion.div>
          ) : (
            <div className="divide-y divide-[#171A17]">
              <AnimatePresence mode="popLayout">
                {filtered.map((item, i) => (
                  <motion.div
                    key={item.title}
                    layout
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -16 }}
                    transition={{ duration: 0.5, ease }}
                  >
                    <Row item={item} i={i} />
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          )}
        </div>

        {/* footer CTA */}
        <section className="py-24 md:py-36 text-center">
          <p className="text-[clamp(24px,3.4vw,40px)] font-semibold tracking-[-0.02em] text-[#F4F1EA] max-w-[18ch] mx-auto text-balance">
            Got something that belongs on this list?
          </p>
          <Link
            to="/#contact"
            className="mt-8 inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-[#7BC47F] text-[#0A0B0A] font-mono text-[11px] tracking-[0.16em] uppercase font-semibold transition-transform hover:translate-x-1"
          >
            Start a conversation →
          </Link>
        </section>
      </div>
    </main>
  );
};

export default Archive;
