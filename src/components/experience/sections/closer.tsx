const EMAIL = "eromoselejonthan@gmail.com";

const Closer = () => {
  return (
    <aside className="mt-20 md:ml-20 p-6 md:p-8 border border-[#2A2E2A] rounded-2xl flex flex-col md:flex-row md:items-center md:justify-between gap-6 bg-gradient-to-br from-[#121412] to-[#0A0B0A]">
      <div>
        <h4 className="font-mono text-[10px] tracking-[0.22em] uppercase text-[#6E7470] mb-2 font-semibold">
          What's next
        </h4>
        <p className="text-[18px] text-[#F4F1EA] font-medium">
          Open to product-shaped roles. Small teams, real users.
        </p>
      </div>
      <a
        href={`mailto:${EMAIL}`}
        className="inline-flex items-center gap-2.5 px-5 py-3 rounded-full bg-[#7BC47F] text-[#0A0B0A] font-mono text-[11px] tracking-[0.16em] uppercase font-semibold transition-transform duration-200 hover:translate-x-1"
      >
        Get in touch →
      </a>
    </aside>
  );
};

export default Closer;
