import { motion } from "framer-motion";


import { menuSlide } from "../anim";
import MenuItem from "./sidebar/menuItems";
import { navItems } from "../../constants";
import Curve from "./sidebar/curve";

const Sidebar = () => {
  return (
    <motion.div
      variants={menuSlide}
      initial="initial"
      animate="enter"
      exit="exit"
      className="h-screen bg-[red] fixed right-0 top-0 text-white "
      style={{ width: "25rem", zIndex: 1 }}
    >
      <motion.div className="flex flex-col items-center gap-10 mt-40">
        {navItems.map((item: any, index: number) => (
          <MenuItem title={item.title} link={item.link} index={index} />
        ))}
      </motion.div>
      <Curve />
    </motion.div>
  );
};

export default Sidebar;
