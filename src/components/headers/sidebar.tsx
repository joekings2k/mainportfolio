import { motion } from "framer-motion";

import { menuSlide } from "../anim";
import MenuItem from "./sidebar/menuItems";
import { navItems } from "../../constants";
import Curve from "./sidebar/curve";

interface SidebarProps {
  onNavigate?: () => void;
}

const Sidebar = ({ onNavigate }: SidebarProps) => {
  return (
    <motion.div
      variants={menuSlide}
      initial="initial"
      animate="enter"
      exit="exit"
      className="h-screen bg-[#000000] fixed right-0 top-0 text-white"
      style={{ width: "25rem", zIndex: 50 }}
    >
      <motion.div className="flex flex-col items-center gap-10 mt-40">
        {navItems.map((item, index) => (
          <MenuItem
            key={item.title}
            title={item.title}
            link={item.link}
            index={index}
            onNavigate={onNavigate}
          />
        ))}
      </motion.div>
      <Curve />
    </motion.div>
  );
};

export default Sidebar;
