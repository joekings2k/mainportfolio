type Row = { label: string; what: string; mute?: string; meta: string };

const ROWS: Row[] = [
  {
    label: "Building",
    what: "Wenigro admin v2",
    mute: " — operator console",
    meta: "@ tensGlobal",
  },
  {
    label: "Reading",
    what: "Refactoring UI",
    mute: " — Adam Wathan, Steve Schoger",
    meta: "re-read",
  },
  {
    label: "Learning",
    what: "Rust",
    mute: " + a bit of WebGPU on the side",
    meta: "2026",
  },
  {
    label: "Listening",
    what: "Tame Impala",
    mute: " on a permanent loop",
    meta: "Spotify",
  },
];

const NowStrip = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-[140px_1fr] gap-5 md:gap-10 pt-2">
      <h4 className="font-mono text-[10px] tracking-[0.22em] uppercase text-[#6E7470] font-semibold pt-3.5 whitespace-nowrap">
        Right now
        <em className="block mt-1.5 font-['Instrument_Serif'] italic font-normal tracking-normal text-[22px] text-[#F4F1EA] normal-case">
          / 2026
        </em>
      </h4>
      <div className="flex flex-col">
        {ROWS.map((r, i) => (
          <div
            key={r.label}
            className={[
              "grid grid-cols-1 md:grid-cols-[110px_1fr_auto] gap-1.5 md:gap-6 md:items-center py-4",
              i === 0 ? "" : "border-t border-dashed border-[#2A2E2A]",
            ].join(" ")}
          >
            <span className="font-mono text-[10px] tracking-[0.18em] uppercase text-[#6E7470]">
              {r.label}
            </span>
            <span className="text-[17px] text-[#F4F1EA]">
              <b className="font-semibold text-[#F4F1EA]">{r.what}</b>
              {r.mute && <span className="text-[#6E7470]">{r.mute}</span>}
            </span>
            <span className="hidden md:inline font-mono text-[11px] tracking-[0.04em] text-[#6E7470]">
              {r.meta}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NowStrip;
