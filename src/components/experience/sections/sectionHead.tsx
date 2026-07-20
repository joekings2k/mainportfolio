const SectionHead = () => {
  return (
    <header className="mb-16 md:mb-28 max-w-[760px]">
      <div className="flex items-center gap-3.5 font-mono text-[12px] tracking-[0.18em] uppercase text-[#6E7470] mb-6">
        <span className="inline-flex items-center justify-center w-6 h-6 rounded-full border border-[#2A2E2A] text-[10px] text-[#F4F1EA]">
          02
        </span>
        <span>Experience</span>
        <span className="w-[60px] h-px bg-[#2A2E2A]" />
      </div>
      <h2 className="font-bold leading-[0.98] tracking-[-0.035em] text-[#F4F1EA] text-[clamp(44px,6.8vw,84px)]">
        My Experience<span className="text-[#6E7470]">.</span>
      </h2>
    </header>
  );
};

export default SectionHead;
