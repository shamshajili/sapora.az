import React, { useState, useMemo, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import {
  Soup,
  Coffee,
  Utensils,
  Search,
  X,
  GlassWater,
  Salad,
  Sunrise,
  UtensilsCrossed,
  Sandwich,
  Beef,
  Popcorn,
} from "lucide-react";

import MenuSection from "../menu/MenuSection";
import { menuData } from "../data/menuData";
import CartDrawer from "../CartDrawer";
import FloatingCartButton from "../FloatingCartButton";
import ScrollToTop from "../ScrollToTop";

const categories = [
  { id: "breakfasts", label: "Səhər Yeməkləri", icon: Sunrise },

  { id: "sorbalar", label: "Şorbalar", icon: Soup },

  { id: "noodles", label: "Pasta və Noodle", icon: Utensils },

  { id: "Pizza", label: "Pizza", icon: Coffee },

  { id: "salatlar", label: "Salatlar", icon: Salad },

  {
    id: "avropaKlassikleri",
    label: "Avropa Klassikləri",
    icon: UtensilsCrossed,
  },

  {
    id: "meksikaSapora",
    label: "Meksika Sapora",
    icon: Beef,
  },

  {
    id: "burgerler",
    label: "Burgerlər",
    icon: Sandwich,
  },

  {
    id: "mixFast",
    label: "Mix Fast",
    icon: Popcorn,
  },

  { id: "garnishes", label: "Qarnir", icon: Salad },

  { id: "drinks", label: "İçkilər", icon: GlassWater },
];

const Menu = () => {
  const [cartOpen, setCartOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [active, setActive] = useState("breakfasts");

  const menuStartRef = useRef(null);

  const scrollToSection = (id) => {
    setActive(id);

    const section = document.getElementById(id);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    if (search.trim() && menuStartRef.current) {
      const offset = 20;

      const top =
        menuStartRef.current.getBoundingClientRect().top +
        window.pageYOffset -
        offset;

      window.scrollTo({
        top,
        behavior: "smooth",
      });
    }
  }, [search]);

  const normalize = (text) =>
    text
      ?.toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "") || "";

  const filteredData = useMemo(() => {
    if (!search.trim()) {
      return {
        breakfasts: menuData.breakfasts || [],
        sorbalar: menuData.sorbalar || [],
        noodles: menuData.noodles || [],
        Pizza: menuData.Pizza || [],
        salatlar: menuData.salatlar || [],
        avropaKlassikleri: menuData.avropaKlassikleri || [],
        meksikaSapora: menuData.meksikaSapora || [],
        burgerler: menuData.burgerler || [],
        mixFast: menuData.mixFast || [],
        garnishes: menuData.garnishes || [],
        drinks: menuData.drinks || [],
      };
    }

    const lower = normalize(search);

    const filterItems = (items = []) =>
      items.filter(
        (item) =>
          normalize(item.title).includes(lower) ||
          normalize(item.description).includes(lower),
      );
    return {
      breakfasts: filterItems(menuData.breakfasts),
      sorbalar: filterItems(menuData.sorbalar),
      noodles: filterItems(menuData.noodles),
      Pizza: filterItems(menuData.Pizza),
      salatlar: filterItems(menuData.salatlar),
      avropaKlassikleri: filterItems(menuData.avropaKlassikleri),
      meksikaSapora: filterItems(menuData.meksikaSapora),
      burgerler: filterItems(menuData.burgerler),
      mixFast: filterItems(menuData.mixFast),
      garnishes: filterItems(menuData.garnishes),
      drinks: filterItems(menuData.drinks),
    };
  }, [search]);

  const hasResults =
    filteredData.breakfasts.length > 0 ||
    filteredData.sorbalar.length > 0 ||
    filteredData.noodles.length > 0 ||
    filteredData.Pizza.length > 0 ||
    filteredData.salatlar.length > 0 ||
    filteredData.avropaKlassikleri.length > 0 ||
    filteredData.meksikaSapora.length > 0 ||
    filteredData.burgerler.length > 0 ||
    filteredData.mixFast.length > 0 ||
    filteredData.garnishes.length > 0 ||
    filteredData.drinks.length > 0;
  return (
    <>
      <section
        ref={menuStartRef}
        className="bg-[#f9f7f4] py-4 sticky top-0 z-30 border-b border-[#c9a46a]/15"
      >
        <div className="flex items-center gap-3 px-6">
          {/* SEARCH */}
          <div className="relative">
            {!searchOpen ? (
              <button
                onClick={() => setSearchOpen(true)}
                className="
                  w-9 h-9
                  rounded-full
                  bg-white
                  border border-[#c9a46a]/40
                  flex items-center justify-center
                  text-[#c9a46a]
                "
              >
                <Search size={16} />
              </button>
            ) : (
              <motion.div
                initial={{ width: 0, opacity: 0 }}
                animate={{ width: 190, opacity: 1 }}
                className="flex items-center bg-white rounded-full border border-[#c9a46a]/40 px-3 h-9"
              >
                <Search size={14} className="text-[#c9a46a]" />

                <input
                  autoFocus
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Menyu üzrə axtar..."
                  className="bg-transparent outline-none text-sm px-2 w-full"
                />

                <button
                  onClick={() => {
                    setSearch("");
                    setSearchOpen(false);
                  }}
                >
                  <X size={14} className="text-gray-400" />
                </button>
              </motion.div>
            )}
          </div>

          {/* CATEGORIES */}
          <div className="flex gap-3 overflow-x-auto scrollbar-hide flex-1">
            {categories.map((item) => {
              const Icon = item.icon;

              return (
                <motion.button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  whileTap={{ scale: 0.96 }}
                  className={`
                    flex items-center gap-1.5
                    px-4 py-1.5
                    rounded-full
                    text-[13px]
                    whitespace-nowrap
                    border
                    ${
                      active === item.id
                        ? "bg-[#c9a46a] text-white border-[#c9a46a]"
                        : "bg-white text-[#c9a46a] border-[#c9a46a]/30"
                    }
                  `}
                >
                  <Icon size={15} />
                  {item.label}
                </motion.button>
              );
            })}
          </div>
        </div>
      </section>

      {search && !hasResults && (
        <div className="text-center py-24 text-gray-400 text-lg">
          “{search}” üzrə heç nə tapılmadı
        </div>
      )}

      {/* SƏHƏR YEMƏKLƏRİ */}
      {filteredData.breakfasts.length > 0 && (
        <MenuSection
          id="breakfasts"
          title="Səhər Yeməkləri"
          items={filteredData.breakfasts}
        />
      )}

      {/* ŞORBALAR */}
      {filteredData.sorbalar.length > 0 && (
        <MenuSection
          id="sorbalar"
          title="Şorbalar"
          items={filteredData.sorbalar}
        />
      )}

      {/* PASTA */}
      {filteredData.noodles.length > 0 && (
        <MenuSection
          id="noodles"
          title="Pasta və Noodle"
          items={filteredData.noodles}
        />
      )}

      {/* PIZZA */}
      {filteredData.Pizza.length > 0 && (
        <MenuSection id="Pizza" title="Pizza" items={filteredData.Pizza} />
      )}

      {/* SALATLAR */}
      {filteredData.salatlar.length > 0 && (
        <MenuSection
          id="salatlar"
          title="Salatlar"
          items={filteredData.salatlar}
        />
      )}

      {/* AVROPA KLASSİKLƏRİ */}
      {filteredData.avropaKlassikleri.length > 0 && (
        <MenuSection
          id="avropaKlassikleri"
          title="Avropa Klassikləri"
          items={filteredData.avropaKlassikleri}
        />
      )}

      {/* MEKSİKA SAPORA */}
      {filteredData.meksikaSapora.length > 0 && (
        <MenuSection
          id="meksikaSapora"
          title="Meksika Sapora"
          items={filteredData.meksikaSapora}
        />
      )}

      {/* BURGERLƏR */}
      {filteredData.burgerler.length > 0 && (
        <MenuSection
          id="burgerler"
          title="Burgerlər"
          items={filteredData.burgerler}
        />
      )}

      {/* MIX FAST */}
      {filteredData.mixFast.length > 0 && (
        <MenuSection
          id="mixFast"
          title="Mix Fast"
          items={filteredData.mixFast}
        />
      )}
      {/* QARNİR */}
      {filteredData.garnishes.length > 0 && (
        <MenuSection
          id="garnishes"
          title="Qarnir"
          items={filteredData.garnishes}
        />
      )}

      {/* İÇKİLƏR */}
      {filteredData.drinks.length > 0 && (
        <MenuSection id="drinks" title="İçkilər" items={filteredData.drinks} />
      )}

      <FloatingCartButton setOpen={setCartOpen} hidden={cartOpen} />

      <ScrollToTop />

      <CartDrawer open={cartOpen} setOpen={setCartOpen} />
    </>
  );
};

export default Menu;
