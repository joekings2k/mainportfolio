import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useMediaQuery } from "../../hooks/useMediaQuery";

const ease = [0.76, 0, 0.24, 1] as const;

/**
 * First-load splash. A short progress reveal that slides away on desktop; on
 * mobile it holds with a nudge to come back on a bigger screen, dismissable by
 * tapping "Continue anyway" (or anywhere). It never traps scroll: the body's
 * original overflow is restored on dismiss.
 */
const SplashScreen = () => {
  const isDesktop = useMediaQuery("(min-width: 768px)");
  const [visible, setVisible] = useState(true);
  const [progress, setProgress] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const originalOverflow = useRef<string>("");

  // fill the progress bar over ~1.6s
  useEffect(() => {
    const duration = 1600;
    const start = performance.now();
    let raf = 0;
    const tick = (now: number) => {
      const p = Math.min(1, (now - start) / duration);
      setProgress(Math.round(p * 100));
      if (p < 1) raf = requestAnimationFrame(tick);
      else setLoaded(true);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  // desktop auto-dismisses once loaded; mobile waits for the user.
  useEffect(() => {
    if (loaded && isDesktop) {
      const t = setTimeout(() => setVisible(false), 550);
      return () => clearTimeout(t);
    }
  }, [loaded, isDesktop]);

  // lock scroll only while visible, then restore whatever was there before.
  useEffect(() => {
    originalOverflow.current = document.body.style.overflow;
  }, []);
  useEffect(() => {
    document.body.style.overflow = visible ? "hidden" : originalOverflow.current;
    return () => {
      document.body.style.overflow = originalOverflow.current;
    };
  }, [visible]);

  const showMobileNote = loaded && !isDesktop;

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          exit={{ y: "-100%" }}
          transition={{ duration: 0.8, ease }}
          onClick={() => showMobileNote && setVisible(false)}
          className="fixed inset-0 z-[100000] bg-[#0A0B0A] text-[#F4F1EA] flex flex-col justify-between p-6 md:p-10 overflow-y-auto"
        >
          {/* top row */}
          <div className="flex items-center justify-between font-mono text-[10px] sm:text-[11px] tracking-[0.2em] uppercase text-[#6E7470]">
            <span>Jonathan Ogbeide</span>
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#7BC47F] animate-pulse" />
              Portfolio v.04
            </span>
          </div>

          {/* center */}
          <div className="flex-1 flex flex-col items-center justify-center text-center gap-8 min-h-0 py-8">
            {showMobileNote ? (
              <motion.div
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease }}
                className="max-w-[36ch] mx-auto"
              >
                <p className="font-mono text-[10px] tracking-[0.24em] uppercase text-[#7BC47F] mb-3">
                  Hold up ✋
                </p>
                <p className="text-[clamp(18px,5vw,22px)] font-semibold leading-[1.5] text-[#F4F1EA] text-pretty">
                  You're on a phone, dude — what are you doing?
                </p>
                <p className="mt-3 text-[15px] leading-[1.6] text-[#B9BCB6] text-pretty">
                  This site is built for the big screen: cursor-reveal masks,
                  pinned scroll, the whole animated experience. Come back on a
                  laptop for the good stuff.
                </p>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setVisible(false);
                  }}
                  className="mt-7 inline-flex items-center gap-2 px-5 py-3 rounded-full bg-[#7BC47F] text-[#0A0B0A] font-mono text-[11px] tracking-[0.16em] uppercase font-semibold active:scale-95 transition-transform"
                >
                  Continue anyway →
                </button>
              </motion.div>
            ) : (
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease }}
                className="font-extrabold tracking-tight leading-[0.9] text-[clamp(2.6rem,9vw,6.5rem)]"
              >
                Full-stack
                <br />
                Developer
                <span className="text-[#7BC47F]">.</span>
              </motion.h1>
            )}
          </div>

          {/* bottom — progress */}
          <div className="flex flex-col gap-3">
            <div className="flex items-center justify-between font-mono text-[10px] sm:text-[11px] tracking-[0.16em] uppercase text-[#6E7470]">
              <span>{loaded ? "Ready" : "Loading experience"}</span>
              <span className="tabular-nums text-[#F4F1EA]">
                {String(progress).padStart(3, "0")}%
              </span>
            </div>
            <div className="h-px w-full bg-white/10 overflow-hidden">
              <motion.div
                className="h-full bg-[#7BC47F]"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SplashScreen;
