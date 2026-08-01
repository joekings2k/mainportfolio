import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Headers from "../components/headers";
import Herosect from "../components/herosect";
import About from "../components/about";
import Experience from "../components/experience";
import Works from "../components/works";
import Services from "../components/myservices";
import Contact from "../components/contact";
import FillerComponent from "../components/fillercomponent";

const Home = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (!hash) return;
    // Wait a frame so the target section is mounted before scrolling.
    const id = window.setTimeout(() => {
      document
        .querySelector(hash)
        ?.scrollIntoView({ behavior: "smooth" });
    }, 100);
    return () => window.clearTimeout(id);
  }, [hash]);

  return (
    <div className="mainContainer">
      <Headers />

      <section id="home" data-theme="light">
        <Herosect />
      </section>

      <section id="about">
        <About />
      </section>

      <section id="experience" data-theme="dark">
        <Experience />
      </section>

      <section id="work" data-theme="dark">
        <Works />
      </section>

      <FillerComponent />

      <Services />

      <section id="contact" data-theme="dark">
        <Contact />
      </section>
    </div>
  );
};

export default Home;
