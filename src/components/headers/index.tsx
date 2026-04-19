import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import Sidebar from "./sidebar";
import AnimatedMenuButton from "./animatedmenubutton";

const Headers = () => {
  const [active, setActive] = useState<boolean>(false);
  return (
    <>
      <div className="fixed top-7 right-7 z-[100]">
        <AnimatedMenuButton active={active} setActive={setActive} />
      </div>
      <AnimatePresence mode="wait">
        {active && <Sidebar onNavigate={() => setActive(false)} />}
      </AnimatePresence>
    </>
  );
};

export default Headers;
