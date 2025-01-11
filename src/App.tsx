import Headers from "./components/headers";
import Herosect from "./components/herosect";
import About from "./components/about";

import WorksTest from "./components/works/test";
import Services from "./components/myservices";
import { useEffect } from "react";
import Lenis from "lenis";

function App() {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: any) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <>
      <Headers />
      <Herosect />
      <About />
      {/* <Test /> */}
      <WorksTest />
      <Services />
    </>
  );
}

export default App;
