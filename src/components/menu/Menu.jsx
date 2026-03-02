import React, { useState } from "react";
import { motion } from "framer-motion";
import { Soup, Coffee, Utensils } from "lucide-react";
import MenuSection from "../menu/MenuSection";
import { menuData } from "../data/menuData";

const categories = [
  { id: "bruskettalar", label: "Bruskettalar", icon: Utensils },
  { id: "sorbalar", label: "Şorbalar", icon: Soup },
  { id: "kofe", label: "Kofe", icon: Coffee },
];

const Menu = () => {
  const [active, setActive] = useState("bruskettalar");

  const scrollToSection = (id) => {
    setActive(id);
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* CATEGORY BAR */}
<section className="bg-[#f9f7f4] py-4 sticky top-0 z-40 border-b border-[#c9a46a]/15">
  <div className="flex gap-3 overflow-x-auto px-6 scrollbar-hide">

    {categories.map((item) => {
      const Icon = item.icon;
      const isActive = active === item.id;

      return (
        <motion.button
          key={item.id}
          onClick={() => scrollToSection(item.id)}
          whileTap={{ scale: 0.96 }}
          whileHover={{ y: -1 }}
          transition={{ type: "spring", stiffness: 400, damping: 20 }}
          className={`
            flex items-center gap-1.5
            px-4 py-1.5
            rounded-full
            text-[13px]
            whitespace-nowrap
            border
            transition-all
            duration-300
            ${
              isActive
                ? "bg-[#c9a46a] text-white border-[#c9a46a] shadow-sm"
                : "bg-white text-[#c9a46a] border-[#c9a46a]/30 hover:bg-[#c9a46a]/10"
            }
          `}
        >
          <motion.span
            animate={{ scale: isActive ? 1.05 : 1 }}
            transition={{ duration: 0.25 }}
          >
            <Icon size={15} strokeWidth={1.7} />
          </motion.span>

          {item.label}
        </motion.button>
      );
    })}
  </div>
</section>

      {/* MENU SECTIONS */}
      <MenuSection
        id="bruskettalar"
        title="Bruskettalar"
        items={menuData.bruskettalar}
      />

      <MenuSection
        id="sorbalar"
        title="Şorbalar"
        items={menuData.sorbalar}
      />

      <MenuSection
        id="kofe"
        title="Kofe"
        items={menuData.kofe}
      />
    </>
  );
};

export default Menu;