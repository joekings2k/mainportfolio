import { archiveLink } from "../data";

const Outro = () => {
  return (
    <section className="min-h-[50vh] flex items-center pt-[60px] pb-[120px]">
      <div className="w-full max-w-[1180px] mx-auto px-6 md:px-14">
        <div className="w-full p-8 md:py-[30px] md:px-[34px] border border-[#2A2E2A] rounded-2xl flex flex-col md:flex-row md:items-center md:justify-between gap-6 bg-gradient-to-br from-[#121412] to-[#0A0B0A]">
          <div>
            <h4 className="font-mono text-[10px] tracking-[0.22em] uppercase text-[#6E7470] mb-2 font-semibold">
              The full archive
            </h4>
            <p className="text-[18px] text-[#F4F1EA] font-medium">
              Case studies, code and a few experiments that never shipped.
            </p>
          </div>
          <a
            href={archiveLink}
            className="inline-flex items-center gap-2.5 px-5 py-3 rounded-full bg-[#7BC47F] text-[#0A0B0A] font-mono text-[11px] tracking-[0.16em] uppercase font-semibold transition-transform duration-200 hover:translate-x-1"
          >
            View all work →
          </a>
        </div>
      </div>
    </section>
  );
};

export default Outro;
