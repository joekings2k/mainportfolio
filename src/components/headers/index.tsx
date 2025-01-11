import  { useState } from "react";
import { AnimatePresence } from "framer-motion";
import Sidebar from "./sidebar";
import AnimatedMenuButton from "./animatedmenubutton";

const Headers = () => {
  const [active, setActive] = useState<boolean>(false);
  console.log(active);
  return (
    <>
      {/* <Navbar /> */}
      <div className="fixed top-7 right-7 z-10">
        <AnimatedMenuButton active={active} setActive={setActive} />
      </div>
      <AnimatePresence mode="wait">{active && <Sidebar />}</AnimatePresence>
    </>
  );
};

export default Headers;
