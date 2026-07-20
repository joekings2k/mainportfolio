const Intro = () => {
  return (
    <section className="min-h-[62vh] flex items-end pt-[120px] pb-2">
      <div className="w-full max-w-[1180px] mx-auto px-6 md:px-14">
        <div className="flex items-center gap-3.5 font-mono text-[12px] tracking-[0.18em] uppercase text-[#6E7470] mb-[26px]">
          <span className="inline-flex items-center justify-center w-6 h-6 rounded-full border border-[#2A2E2A] text-[10px] text-[#F4F1EA]">
            03
          </span>
          <span>Selected Work</span>
          <span className="w-[60px] h-px bg-[#2A2E2A]" />
        </div>
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-5 md:gap-10 w-full">
          <h2 className="font-bold leading-[0.98] tracking-[-0.035em] text-[#F4F1EA] text-[clamp(44px,6.8vw,84px)]">
            Selected
            <br />
            Work<span className="text-[#6E7470]">.</span>
          </h2>
          <div className="flex flex-col md:items-end gap-3.5 shrink-0 pb-2.5">
            <p className="text-[15px] text-[#B9BCB6] leading-[1.5] max-w-[240px] md:text-right text-pretty">
              A handful of builds I'm proud of — products, tools and the
              occasional experiment.
            </p>
            <span className="inline-flex items-center gap-2.5 font-mono text-[11px] tracking-[0.16em] uppercase text-[#6E7470]">
              <svg
                viewBox="0 0 14 26"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.4}
                className="w-[14px] h-[26px] text-[#7BC47F]"
                aria-hidden
              >
                <rect x="1" y="1" width="12" height="24" rx="6" />
                <circle
                  className="works-scrolldot"
                  cx="7"
                  cy="7"
                  r="1.6"
                  fill="currentColor"
                  stroke="none"
                />
              </svg>
              Scroll to explore
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Intro;
