import { motion } from "framer-motion";

import { menuSlide } from "../anim";
import MenuItem from "./sidebar/menuItems";
import { navItems } from "../../constants";
import Curve from "./sidebar/curve";
import type { Theme } from "../../hooks/useSectionTheme";

interface SidebarProps {
  theme: Theme;
  onNavigate?: () => void;
}

const Sidebar = ({ theme, onNavigate }: SidebarProps) => {
  const isDark = theme === "dark";
  const bg = isDark ? "#FFFFFF" : "#000000";
  const fg = isDark ? "#000000" : "#FFFFFF";

  return (
    <motion.div
      variants={menuSlide}
      initial="initial"
      animate="enter"
      exit="exit"
      className="h-screen fixed right-0 top-0 transition-colors duration-500"
      style={{
        width: "25rem",
        zIndex: 50,
        backgroundColor: bg,
        color: fg,
      }}
    >
      <motion.div className="flex flex-col items-center gap-10 mt-40">
        {navItems.map((item, index) => (
          <MenuItem
            key={item.title}
            title={item.title}
            link={item.link}
            index={index}
            theme={theme}
            onNavigate={onNavigate}
          />
        ))}
      </motion.div>
      <Curve theme={theme} />
    </motion.div>
  );
};

export default Sidebar;
