import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import {
  caseStudies,
  worksBySlug,
  type WorkItem,
} from "../components/works/data";
import MaskReveal from "../components/shared/MaskReveal";
import CoverArt from "../components/works/coverArt";

const ease = [0.22, 1, 0.36, 1] as const;

const fade = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease },
  },
};

const Section = ({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) => (
  <motion.section
    variants={fade}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: "0px 0px -12% 0px" }}
    className="py-10 md:py-14 border-t border-[#2A2E2A] grid grid-cols-1 md:grid-cols-[200px_1fr] gap-6 md:gap-14"
  >
    <h2 className="font-mono text-[11px] tracking-[0.2em] uppercase text-[#7BC47F] md:pt-1">
      {label}
    </h2>
    <div>{children}</div>
  </motion.section>
);

/** The full case-study page content. Rendered twice by CaseStudy — once as the
 *  base layer, once inside the inverted spotlight layer — so both copies share
 *  exactly one source of truth and line up pixel-for-pixel. */
const CaseBody = ({ item }: { item: WorkItem }) => {
  const s = item.study;
  const index = caseStudies.findIndex((w) => w.slug === item.slug);
  const next = caseStudies[(index + 1) % caseStudies.length];

  return (
    <div className="bg-[#0A0B0A] text-[#F4F1EA] min-h-screen">
      <div className="max-w-[1000px] mx-auto px-6 md:px-10">
        {/* top bar */}
        <div className="pt-10 md:pt-14 flex items-center justify-between gap-4">
          <Link
            to="/#work"
            className="group inline-flex items-center gap-2.5 font-mono text-[11.5px] tracking-[0.14em] uppercase text-[#B9BCB6] transition-colors hover:text-[#F4F1EA]"
          >
            <span className="transition-transform group-hover:-translate-x-1">
              ←
            </span>
            Selected Work
          </Link>
          <span className="font-mono text-[11.5px] tracking-[0.16em] text-[#6E7470] tabular-nums">
            {String(index + 1).padStart(2, "0")} /{" "}
            {String(caseStudies.length).padStart(2, "0")}
          </span>
        </div>

        {/* hero */}
        <header className="pt-12 md:pt-20 pb-10 md:pb-14">
          <div className="flex items-center gap-3.5 font-mono text-[11px] tracking-[0.16em] uppercase text-[#6E7470] mb-6">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#2A2E2A] text-[#B9BCB6]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#7BC47F]" />
              {item.badge}
            </span>
            <span>{item.sub}</span>
            <span className="w-[3px] h-[3px] rounded-full bg-[#6E7470]" />
            <span>{item.year}</span>
          </div>
          <h1 data-spotlight="140" className="font-bold leading-[0.98] tracking-[-0.035em] text-[clamp(48px,8vw,104px)] text-[#F4F1EA]">
            {item.title}
            <span className="text-[#6E7470]">.</span>
          </h1>
          <p className="mt-6 text-[clamp(17px,2vw,21px)] leading-[1.55] text-[#B9BCB6] max-w-[64ch] text-pretty">
            {s.overview}
          </p>
          <div className="mt-9 flex flex-wrap gap-x-12 gap-y-5">
            {[
              { k: "Role", v: s.role },
              { k: "Timeframe", v: s.timeframe },
              { k: "Team", v: s.team },
            ].map((f) => (
              <div key={f.k} className="flex flex-col gap-1.5">
                <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-[#6E7470]">
                  {f.k}
                </span>
                <span className="text-[14px] text-[#F4F1EA] leading-snug max-w-[30ch]">
                  {f.v}
                </span>
              </div>
            ))}
          </div>
        </header>

        {/* hero image (screenshot, or code-drawn cover when there's no shot) */}
        <figure data-spotlight="240" className="relative w-full h-[clamp(240px,46vw,540px)] rounded-2xl overflow-hidden border border-[#2A2E2A] bg-[#121412]">
          {item.image ? (
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-full object-cover"
            />
          ) : item.cover ? (
            <CoverArt cover={item.cover} />
          ) : null}
        </figure>

        {/* body */}
        <div className="pt-4">
          <Section label="The problem">
            <p className="text-[clamp(16px,1.8vw,19px)] leading-[1.65] text-[#B9BCB6] max-w-[62ch] text-pretty">
              {s.problem}
            </p>
          </Section>

          <Section label="Constraints">
            <div className="flex flex-wrap gap-2.5">
              {s.constraints.map((c) => (
                <span
                  key={c}
                  className="px-3.5 py-2 border border-[#2A2E2A] rounded-lg font-mono text-[12px] text-[#B9BCB6]"
                >
                  {c}
                </span>
              ))}
            </div>
          </Section>

          <Section label="Approach & decisions">
            <ol className="flex flex-col gap-8">
              {s.decisions.map((d, i) => (
                <li key={d.choice} className="flex gap-5">
                  <span className="shrink-0 mt-1 font-mono text-[13px] font-bold text-[#7BC47F] tabular-nums">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="flex flex-col gap-2">
                    <h3 className="text-[clamp(17px,2vw,21px)] font-semibold tracking-[-0.015em] text-[#F4F1EA]">
                      {d.choice}
                    </h3>
                    <p className="text-[15.5px] leading-[1.65] text-[#B9BCB6] max-w-[62ch] text-pretty">
                      {d.detail}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </Section>

          <Section label="What shipped">
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3">
              {s.built.map((b) => (
                <li
                  key={b}
                  className="flex items-start gap-3 text-[15px] leading-[1.5] text-[#B9BCB6]"
                >
                  <span className="shrink-0 mt-[9px] w-1.5 h-1.5 rounded-full bg-[#7BC47F]" />
                  {b}
                </li>
              ))}
            </ul>
          </Section>

          <Section label="Outcome">
            <p className="text-[clamp(18px,2.2vw,24px)] leading-[1.5] text-[#F4F1EA] font-medium max-w-[58ch] text-pretty">
              {s.outcome}
            </p>
            {s.outcomeMetrics && s.outcomeMetrics.length > 0 && (
              <div className="mt-8 flex flex-wrap gap-6 py-6 px-7 border border-[#2A2E2A] rounded-xl bg-gradient-to-b from-[#121412] to-[#0A0B0A]">
                {s.outcomeMetrics.map((m) => (
                  <div key={m.k} className="flex flex-col gap-1.5 min-w-[110px]">
                    <span className="text-[32px] font-bold tracking-[-0.02em] leading-none tabular-nums text-[#7BC47F]">
                      {m.v}
                    </span>
                    <span className="font-mono text-[10px] tracking-[0.18em] uppercase text-[#6E7470]">
                      {m.k}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </Section>

          <Section label="What I'd carry forward">
            <p className="pl-5 border-l-2 border-[#7BC47F] text-[clamp(16px,1.9vw,20px)] leading-[1.6] text-[#B9BCB6] italic max-w-[60ch] text-pretty">
              {s.learned}
            </p>
          </Section>

          <Section label="Stack">
            <div className="flex flex-wrap gap-2">
              {item.stack.map((t) => (
                <span
                  key={t}
                  className="px-3 py-1.5 border border-[#2A2E2A] rounded-md font-mono text-[12px] text-[#B9BCB6]"
                >
                  {t}
                </span>
              ))}
            </div>
            {s.links && s.links.length > 0 && (
              <div className="mt-6 flex flex-wrap gap-3">
                {s.links.map((l) => (
                  <a
                    key={l.href}
                    href={l.href}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-[#7BC47F] text-[#0A0B0A] font-mono text-[11px] tracking-[0.14em] uppercase font-semibold transition-transform hover:translate-x-0.5"
                  >
                    {l.label} →
                  </a>
                ))}
              </div>
            )}
          </Section>
        </div>

        {/* next project */}
        <Link
          to={`/work/${next.slug}`}
          className="group block mt-8 mb-20 md:mb-28 pt-10 border-t border-[#2A2E2A]"
        >
          <span className="font-mono text-[10px] tracking-[0.22em] uppercase text-[#6E7470]">
            Next project
          </span>
          <div className="mt-3 flex items-center justify-between gap-6">
            <h3 className="text-[clamp(28px,4.5vw,52px)] font-bold tracking-[-0.03em] text-[#F4F1EA] transition-colors group-hover:text-[#7BC47F]">
              {next.title}
            </h3>
            <span className="shrink-0 text-[#7BC47F] text-[28px] transition-transform group-hover:translate-x-1.5">
              →
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
};

const CaseStudy = () => {
  const { slug } = useParams();
  const item = slug ? worksBySlug[slug] : undefined;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!item) {
    return (
      <div
        data-theme="dark"
        className="min-h-screen bg-[#0A0B0A] text-[#F4F1EA] flex flex-col items-center justify-center gap-6 px-6 text-center"
      >
        <p className="font-mono text-[12px] tracking-[0.2em] uppercase text-[#6E7470]">
          404 — Case not found
        </p>
        <Link
          to="/#work"
          className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-[#7BC47F] text-[#0A0B0A] font-mono text-[11px] tracking-[0.16em] uppercase font-semibold"
        >
          ← Back to work
        </Link>
      </div>
    );
  }

  return (
    <main data-theme="dark" className="bg-[#0A0B0A]">
      {/* Whole-page cursor-spotlight reveal: the page is rendered twice and the
          top copy is colour-inverted, then clipped to a circle at the cursor. */}
      <MaskReveal
        baseSize={50}
        hoverSize={50}
        revealClassName="mask-invert"
        base={<CaseBody item={item} />}
        reveal={<CaseBody item={item} />}
      />
    </main>
  );
};

export default CaseStudy;
