import Intro from "./sections/intro";
import Track from "./sections/track";
import Outro from "./sections/outro";

const Works = () => {
  return (
    <div className="bg-[#0A0B0A] text-[#F4F1EA]" data-theme="dark">
      <Intro />
      <Track />
      <Outro />
    </div>
  );
};

export default Works;
