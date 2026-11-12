import { motion } from "framer-motion";
import type { ArchiveLang } from "../data";

/* Identity colours match the /archive page's language switch. */
export const STACKS: {
  id: ArchiveLang;
  label: string;
  short: string;
  caption: string;
  accent: string;
  glyph: string;
}[] = [
  {
    id: "js",
    label: "JavaScript",
    short: "JS / TS",
    caption: "Frontend & full-stack",
    accent: "#F7DF1E",
    glyph: "JS",
  },
  {
    id: "go",
    label: "Golang",
    short: "Go",
    caption: "Backend & systems",
    accent: "#00ADD8",
    glyph: "Go",
  },
];

type Props = {
  value: ArchiveLang;
  counts: Record<ArchiveLang, number>;
  onChange: (l: ArchiveLang) => void;
  /** "lg" = hero-sized tiles in the intro; "sm" = compact pill in the pinned header */
  size?: "lg" | "sm";
  /** shows a nudge on the inactive option until the visitor has switched once */
  hint?: boolean;
  /** layoutId namespace so two switches on the page animate independently */
  id: string;
};

const spring = { type: "spring", stiffness: 420, damping: 36 } as const;

const StackSwitch = ({
  value,
  counts,
  onChange,
  size = "lg",
  hint = false,
  id,
}: Props) => {
  const lg = size === "lg";

  return (
    <div
      role="tablist"
      aria-label="Filter projects by stack"
      className={[
        "relative inline-flex items-stretch rounded-full border border-[#2A2E2A] bg-[#0D0F0D]",
        lg ? "p-1.5 w-full md:w-auto" : "p-1",
      ].join(" ")}
      style={{
        boxShadow: `0 0 0 1px rgba(255,255,255,0.02), 0 18px 50px -30px ${
          STACKS.find((s) => s.id === value)!.accent
        }`,
        transition: "box-shadow 0.5s cubic-bezier(0.22,1,0.36,1)",
      }}
    >
      {STACKS.map((s) => {
        const active = s.id === value;
        const showHint = hint && !active;
        return (
          <button
            key={s.id}
            type="button"
            role="tab"
            aria-selected={active}
            onClick={() => onChange(s.id)}
            className={[
              "group relative rounded-full font-mono uppercase transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#7BC47F]",
              lg
                ? "flex-1 md:flex-none flex items-center gap-3 pl-2 pr-5 py-2 md:pr-7"
                : "flex items-center gap-2 pl-1 pr-3.5 py-1",
            ].join(" ")}
            style={{ color: active ? "#0A0B0A" : "#B9BCB6" }}
          >
            {active && (
              <motion.span
                layoutId={`${id}-pill`}
                className="absolute inset-0 rounded-full"
                style={{ backgroundColor: s.accent }}
                transition={spring}
              />
            )}

            {showHint && (
              <span
                aria-hidden
                className="works-switch-nudge absolute inset-0 rounded-full pointer-events-none"
                style={{ ["--nudge" as string]: s.accent }}
              />
            )}

            {/* glyph chip */}
            <span
              className={[
                "relative z-10 shrink-0 inline-flex items-center justify-center rounded-full font-bold tracking-[0.02em] normal-case transition-colors duration-300",
                lg ? "w-10 h-10 text-[13px]" : "w-7 h-7 text-[10.5px]",
              ].join(" ")}
              style={
                active
                  ? { backgroundColor: "#0A0B0A", color: s.accent }
                  : {
                      backgroundColor: "transparent",
                      color: s.accent,
                      boxShadow: `inset 0 0 0 1px ${s.accent}55`,
                    }
              }
            >
              {s.glyph}
            </span>

            <span className="relative z-10 flex flex-col items-start text-left leading-none">
              <span
                className={[
                  "flex items-center gap-2 font-semibold",
                  lg ? "text-[13px] tracking-[0.12em]" : "text-[11px] tracking-[0.1em]",
                ].join(" ")}
              >
                {lg ? s.label : s.short}
                <span
                  className="tabular-nums font-normal"
                  style={{ opacity: active ? 0.6 : 0.45 }}
                >
                  {String(counts[s.id]).padStart(2, "0")}
                </span>
              </span>
              {lg && (
                <span
                  className="hidden sm:block mt-1.5 text-[10px] tracking-[0.14em] font-normal"
                  style={{ opacity: active ? 0.7 : 0.5 }}
                >
                  {s.caption}
                </span>
              )}
            </span>
          </button>
        );
      })}
    </div>
  );
};

export default StackSwitch;
