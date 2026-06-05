import type { ReactNode } from "react";

type Cell = { v: ReactNode; k: string };

const CELLS: Cell[] = [
  {
    v: (
      <>
        3<sup className="text-[20px] font-medium text-[#6E7470]">+</sup>
      </>
    ),
    k: "Years shipping",
  },
  { v: "14", k: "Projects in production" },
  {
    v: <span className="text-[#7BC47F]">1k+</span>,
    k: "Daily users impacted",
  },
  { v: "∞", k: "Cups of coffee" },
];

const Highlights = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 border-t border-b border-[#2A2E2A]">
      {CELLS.map((c, i) => (
        <div
          key={i}
          className={[
            "py-7 px-6 flex flex-col gap-2.5",
            i < CELLS.length - 1 ? "md:border-r md:border-[#2A2E2A]" : "",
            i % 2 === 0 ? "border-r border-[#2A2E2A] md:border-r" : "",
            i < 2 ? "border-b border-[#2A2E2A] md:border-b-0" : "",
          ].join(" ")}
        >
          <span className="text-[44px] font-bold tracking-[-0.025em] leading-none text-[#F4F1EA] tabular-nums">
            {c.v}
          </span>
          <span className="font-mono text-[10px] tracking-[0.18em] uppercase text-[#6E7470]">
            {c.k}
          </span>
        </div>
      ))}
    </div>
  );
};

export default Highlights;
