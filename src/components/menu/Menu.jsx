import React, { useState, useMemo, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "../../context/LanguageContext";
import { translations } from "../data/languages";

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
  CookingPot,
} from "lucide-react";

import MenuSection from "../menu/MenuSection";
import { menuData } from "../data/menuData";
import CartDrawer from "../CartDrawer";
import FloatingCartButton from "../FloatingCartButton";
import ScrollToTop from "../ScrollToTop";

const Menu = () => {
  const [cartOpen, setCartOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [active, setActive] = useState("breakfasts");

  const { language } = useLanguage();
  const t = translations[language];

  const menuStartRef = useRef(null);

  const categories = [
    { id: "breakfasts", label: t.categories.breakfasts, icon: Sunrise },

    { id: "sorbalar", label: t.categories.sorbalar, icon: Soup },

    { id: "noodles", label: t.categories.noodles, icon: Utensils },

    { id: "Pizza", label: t.categories.pizza, icon: Coffee },

    { id: "salatlar", label: t.categories.salatlar, icon: Salad },

    {
      id: "avropaKlassikleri",
      label: t.categories.avropa,
      icon: UtensilsCrossed,
    },

    {
      id: "meksikaSapora",
      label: t.categories.meksika,
      icon: Beef,
    },

    {
      id: "asianFoodFashion",
      label: t.categories.asia,
      icon: CookingPot,
    },
    {
      id: "sushiSets",
      label: "Sushi Setləri",
      icon: CookingPot,
    },

    {
      id: "sushiRolls",
      label: "Sushi Rolls",
      icon: CookingPot,
    },
    {
      id: "burgerler",
      label: t.categories.burgerler,
      icon: Sandwich,
    },

    {
      id: "mixFast",
      label: t.categories.mixfast,
      icon: Popcorn,
    },

    {
      id: "garnishes",
      label: t.categories.garnishes,
      icon: Salad,
    },

    {
      id: "hotCoffees",
      label: t.categories.hotCoffees,
      icon: Coffee,
    },

    {
      id: "coldCoffees",
      label: t.categories.coldCoffees,
      icon: Coffee,
    },

    {
      id: "milkshakes",
      label: t.categories.milkshakes,
      icon: GlassWater,
    },

    {
      id: "lemonades",
      label: t.categories.lemonades,
      icon: GlassWater,
    },

    {
      id: "softDrinks",
      label: t.categories.softDrinks,
      icon: GlassWater,
    },
  ];

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
        asianFoodFashion: menuData.asianFoodFashion || [],
        sushiSets: menuData.sushiSets || [],
        sushiRolls: menuData.sushiRolls || [],
        burgerler: menuData.burgerler || [],
        mixFast: menuData.mixFast || [],
        garnishes: menuData.garnishes || [],
        hotCoffees: menuData.hotCoffees || [],
        coldCoffees: menuData.coldCoffees || [],
        milkshakes: menuData.milkshakes || [],
        lemonades: menuData.lemonades || [],
        softDrinks: menuData.softDrinks || [],
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
      asianFoodFashion: filterItems(menuData.asianFoodFashion),
      sushiSets: filterItems(menuData.sushiSets),
      sushiRolls: filterItems(menuData.sushiRolls),
      burgerler: filterItems(menuData.burgerler),
      mixFast: filterItems(menuData.mixFast),
      garnishes: filterItems(menuData.garnishes),
      hotCoffees: filterItems(menuData.hotCoffees),
      coldCoffees: filterItems(menuData.coldCoffees),
      milkshakes: filterItems(menuData.milkshakes),
      lemonades: filterItems(menuData.lemonades),
      softDrinks: filterItems(menuData.softDrinks),
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
    filteredData.asianFoodFashion.length > 0 ||
    filteredData.sushiSets.length > 0 ||
    filteredData.sushiRolls.length > 0 ||
    filteredData.burgerler.length > 0 ||
    filteredData.mixFast.length > 0 ||
    filteredData.garnishes.length > 0 ||
    filteredData.hotCoffees.length > 0 ||
    filteredData.coldCoffees.length > 0 ||
    filteredData.milkshakes.length > 0 ||
    filteredData.lemonades.length > 0 ||
    filteredData.softDrinks.length > 0;
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
                  placeholder={t.searchPlaceholder}
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
          “{search}” {t.notFound}
        </div>
      )}

      {/* SƏHƏR YEMƏKLƏRİ */}
      {filteredData.breakfasts.length > 0 && (
        <MenuSection
          id="breakfasts"
          title={t.categories.breakfasts}
          items={filteredData.breakfasts}
        />
      )}

      {/* ŞORBALAR */}
      {filteredData.sorbalar.length > 0 && (
        <MenuSection
          id="sorbalar"
          title={t.categories.sorbalar}
          items={filteredData.sorbalar}
        />
      )}

      {/* PASTA */}
      {filteredData.noodles.length > 0 && (
        <MenuSection
          id="noodles"
          title={t.categories.noodles}
          items={filteredData.noodles}
        />
      )}

      {/* PIZZA */}
      {filteredData.Pizza.length > 0 && (
        <MenuSection
          id="Pizza"
          title={t.categories.pizza}
          items={filteredData.Pizza}
        />
      )}

      {/* SALATLAR */}
      {filteredData.salatlar.length > 0 && (
        <MenuSection
          id="salatlar"
          title={t.categories.salatlar}
          items={filteredData.salatlar}
        />
      )}

      {/* AVROPA KLASSİKLƏRİ */}
      {filteredData.avropaKlassikleri.length > 0 && (
        <MenuSection
          id="avropaKlassikleri"
          title={t.categories.avropa}
          items={filteredData.avropaKlassikleri}
        />
      )}

      {/* MEKSİKA SAPORA */}
      {filteredData.meksikaSapora.length > 0 && (
        <MenuSection
          id="meksikaSapora"
          title={t.categories.meksika}
          items={filteredData.meksikaSapora}
        />
      )}
      {/* ASİYA MƏTBƏXİ */}
      {filteredData.asianFoodFashion.length > 0 && (
        <MenuSection
          id="asianFoodFashion"
          title={t.categories.asia}
          items={filteredData.asianFoodFashion}
        />
      )}
      {/* SUSHI SETLƏRİ */}
      {filteredData.sushiSets.length > 0 && (
        <MenuSection
          id="sushiSets"
          title={t.categories.sushiSets}
          items={filteredData.sushiSets}
        />
      )}

      {/* SUSHI ROLLS */}
      {filteredData.sushiRolls.length > 0 && (
        <MenuSection
          id="sushiRolls"
          title={t.categories.sushiRolls}
          items={filteredData.sushiRolls}
        />
      )}
      {/* BURGERLƏR */}
      {filteredData.burgerler.length > 0 && (
        <MenuSection
          id="burgerler"
          title={t.categories.burgerler}
          items={filteredData.burgerler}
        />
      )}

      {/* MIX FAST */}
      {filteredData.mixFast.length > 0 && (
        <MenuSection
          id="mixFast"
          title={t.categories.mixfast}
          items={filteredData.mixFast}
        />
      )}
      {/* QARNİR */}
      {filteredData.garnishes.length > 0 && (
        <MenuSection
          id="garnishes"
          title={t.categories.garnishes}
          items={filteredData.garnishes}
        />
      )}

      {filteredData.hotCoffees.length > 0 && (
        <MenuSection
          id="hotCoffees"
          title={t.categories.hotCoffees}
          items={filteredData.hotCoffees}
        />
      )}

      {filteredData.coldCoffees.length > 0 && (
        <MenuSection
          id="coldCoffees"
          title={t.categories.coldCoffees}
          items={filteredData.coldCoffees}
        />
      )}

      {filteredData.milkshakes.length > 0 && (
        <MenuSection
          id="milkshakes"
          title={t.categories.milkshakes}
          items={filteredData.milkshakes}
        />
      )}

      {filteredData.lemonades.length > 0 && (
        <MenuSection
          id="lemonades"
          title={t.categories.lemonades}
          items={filteredData.lemonades}
        />
      )}

      {filteredData.softDrinks.length > 0 && (
        <MenuSection
          id="softDrinks"
          title={t.categories.softDrinks}
          items={filteredData.softDrinks}
        />
      )}

      <FloatingCartButton setOpen={setCartOpen} hidden={cartOpen} />

      <ScrollToTop />

      <CartDrawer open={cartOpen} setOpen={setCartOpen} />
    </>
  );
};

export default Menu;
