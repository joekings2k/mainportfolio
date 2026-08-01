type Cell = { k: string; v: string; mute?: string };

const CELLS: Cell[] = [
  { k: "Role", v: "Full-stack", mute: " / front-leaning" },
  { k: "Based in", v: "Lagos, NG", mute: " / remote" },
  { k: "Focus", v: "Design engineering, UI craft" },
  { k: "Languages", v: "English, Yoruba" },
  { k: "Shipping since", v: "2022", mute: " / 3+ yrs" },
];

const SpecSheet = () => {
  return (
    <section
      aria-label="Identity card"
      className="grid grid-cols-2 md:grid-cols-5 border-t border-b border-[#2A2E2A] mb-24"
    >
      {CELLS.map((c, i) => (
        <div
          key={c.k}
          className={[
            "py-[22px] pr-6 flex flex-col gap-2",
            i === 0 ? "" : "md:pl-6",
            i % 2 === 0 ? "pl-0 md:pl-6 md:pl-0" : "pl-6",
            i === 0 ? "md:pl-0" : "",
            i < CELLS.length - 1 ? "md:border-r md:border-dashed md:border-[#2A2E2A]" : "",
            // mobile borders: 2-col grid; dashed bottom except for last row
            i < CELLS.length - (CELLS.length % 2 === 0 ? 2 : 1)
              ? "border-b border-dashed border-[#2A2E2A] md:border-b-0"
              : "",
          ].join(" ")}
        >
          <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-[#6E7470]">
            {c.k}
          </span>
          <span className="text-[15px] leading-[1.4] font-medium text-[#F4F1EA]">
            {c.v}
            {c.mute && (
              <span className="text-[#6E7470] font-normal">{c.mute}</span>
            )}
          </span>
        </div>
      ))}
    </section>
  );
};

export default SpecSheet;
