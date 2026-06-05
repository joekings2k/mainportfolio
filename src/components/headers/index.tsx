import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import Sidebar from "./sidebar";
import AnimatedMenuButton from "./animatedmenubutton";
import { useSectionTheme } from "../../hooks/useSectionTheme";

const Headers = () => {
  const [active, setActive] = useState<boolean>(false);
  const theme = useSectionTheme("light");

  return (
    <>
      <div className="fixed top-7 right-7 z-[100]">
        <AnimatedMenuButton
          active={active}
          setActive={setActive}
          theme={theme}
        />
      </div>
      <AnimatePresence mode="wait">
        {active && (
          <Sidebar theme={theme} onNavigate={() => setActive(false)} />
        )}
      </AnimatePresence>
    </>
  );
};

export default Headers;
