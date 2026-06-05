import { useEffect, useState } from "react";

const SectionHead = () => {
  const [clock, setClock] = useState("--:--");

  useEffect(() => {
    const update = () => {
      const parts = new Intl.DateTimeFormat("en-GB", {
        timeZone: "Africa/Lagos",
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
      }).formatToParts(new Date());
      const get = (t: string) => parts.find((p) => p.type === t)?.value ?? "00";
      setClock(`${get("hour")}:${get("minute")}`);
    };
    update();
    const id = setInterval(update, 30_000);
    return () => clearInterval(id);
  }, []);

  return (
    <header className="flex items-end justify-between gap-8 pb-9 border-b border-[#2A2E2A] mb-22">
      <div className="flex items-center gap-3.5 font-mono text-[12px] tracking-[0.18em] uppercase text-[#6E7470]">
        <span className="inline-flex items-center justify-center w-6 h-6 rounded-full border border-[#2A2E2A] text-[10px] text-[#F4F1EA]">
          01
        </span>
        <span>About me</span>
        <span className="w-[60px] h-px bg-[#2A2E2A]" />
      </div>
      <div className="flex items-center gap-3.5 font-mono text-[11px] tracking-[0.18em] uppercase text-[#6E7470]">
        <span className="about-pulse-dot w-1.5 h-1.5 rounded-full bg-[#7BC47F]" />
        <span>Lagos · {clock}</span>
      </div>
    </header>
  );
};

export default SectionHead;
