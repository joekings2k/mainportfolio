const Signoff = () => {
  return (
    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5 md:gap-10 pt-9 border-t border-[#2A2E2A]">
      <div className="font-['Instrument_Serif'] italic text-[38px] tracking-[-0.01em] text-[#F4F1EA]">
        — Jonathan<span className="text-[#7BC47F]">.</span>
      </div>
      <div className="font-mono text-[10px] tracking-[0.2em] uppercase text-[#6E7470] md:text-right leading-[1.8]">
        Last updated · May 2026
        <br />
        Page 01 / 04 · About
      </div>
    </div>
  );
};

export default Signoff;
