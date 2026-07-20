const Masthead = () => {
  return (
    <section className="relative grid grid-cols-1 md:grid-cols-[1fr_auto] gap-10 md:items-end pb-9 mb-20 border-b border-[#2A2E2A]">
      <div className="flex flex-col gap-[18px]">
        <div className="flex items-center gap-3 font-mono text-[11px] tracking-[0.22em] uppercase text-[#6E7470]">
          <span className="about-accent-bar inline-block w-7 h-px bg-[#7BC47F]" />
          <span>Full-stack developer · est. 2022</span>
        </div>
        <h1 className="font-semibold leading-[0.92] tracking-[-0.04em] text-[#F4F1EA] text-[clamp(64px,9vw,132px)]">
          Jonathan,
          <br />
          <em className="font-['Instrument_Serif'] italic font-normal tracking-[-0.02em] text-[#F4F1EA]">
            building
          </em>{" "}
          <span className="text-[#7BC47F] about-accent-glow">on the web.</span>
        </h1>
        <p className="text-[17px] leading-[1.5] text-[#B9BCB6] max-w-[520px] text-pretty">
          Front-of-front-end engineer with a soft spot for typography, motion
          and the quiet craft of{" "}
          <b className="text-[#F4F1EA] font-semibold">making things feel right</b>.
        </p>
      </div>
      <div className="flex flex-col md:items-end gap-2.5 pb-1">
        <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[rgba(123,196,127,0.08)] text-[#7BC47F] font-mono text-[11px] tracking-[0.14em] uppercase border border-[rgba(123,196,127,0.55)]">
          <span className="about-pulse-dot w-1.5 h-1.5 rounded-full bg-[#7BC47F]" />
          Available · Q3 2026
        </span>
        <span className="font-mono text-[10px] tracking-[0.18em] uppercase text-[#6E7470]">
          Lagos, NG → remote
        </span>
      </div>
    </section>
  );
};

export default Masthead;
