import SectionHead from "./sections/sectionHead";
import Timeline from "./sections/timeline";
import Closer from "./sections/closer";

const Experience = () => {
  return (
    <div className="bg-[#0A0B0A] text-[#F4F1EA]" data-theme="dark">
      <main className="max-w-[1180px] mx-auto px-6 md:px-14 py-24 md:py-32">
        <SectionHead />
        <Timeline />
        <Closer />
      </main>
    </div>
  );
};

export default Experience;
