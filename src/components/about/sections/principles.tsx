type Item = { num: string; title: string; body: string };

const ITEMS: Item[] = [
  {
    num: "/ 01",
    title: "Ship the boring version first.",
    body: "Working software earns the right to be improved. Polish, animations and abstractions come after something is in users' hands.",
  },
  {
    num: "/ 02",
    title: "Design and code aren't separate.",
    body: "The interface is the product. I prototype in the medium of the real thing — Figma is for sketching, the browser is for deciding.",
  },
  {
    num: "/ 03",
    title: "Take feedback personally — once.",
    body: "The first reaction is fine. The second time you hear it, it's data. By the third, you owe the user a change.",
  },
];

const Principles = () => {
  return (
    <div>
      <div className="flex items-baseline gap-[18px] mb-8">
        <span className="font-mono text-[11px] tracking-[0.18em] text-[#6E7470]">
          01.2
        </span>
        <h3 className="font-semibold text-[32px] tracking-[-0.02em] text-[#F4F1EA]">
          How I{" "}
          <em className="font-['Instrument_Serif'] italic font-normal">work</em>
        </h3>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3">
        {ITEMS.map((it, i) => (
          <div
            key={it.num}
            className={[
              "p-8 md:p-7 flex flex-col gap-4 border border-[#2A2E2A] transition-colors duration-300",
              "hover:bg-[#121412] hover:border-[#6E7470]",
              i > 0 ? "md:border-l-0" : "",
            ].join(" ")}
          >
            <span className="font-mono text-[11px] tracking-[0.16em] text-[#6E7470]">
              {it.num}
            </span>
            <h5 className="text-[22px] font-semibold tracking-[-0.015em] leading-[1.2] text-[#F4F1EA]">
              {it.title}
            </h5>
            <p className="text-[14px] leading-[1.6] text-[#B9BCB6] text-pretty">
              {it.body}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Principles;
