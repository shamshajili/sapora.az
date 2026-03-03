import React, {
  useState,
  useMemo,
  useEffect,
  useRef,
} from "react";
import { motion } from "framer-motion";
import {
  Soup,
  Coffee,
  Utensils,
  Search,
  X,
} from "lucide-react";

import MenuSection from "../menu/MenuSection";
import { menuData } from "../data/menuData";
import CartDrawer from "../CartDrawer";
import FloatingCartButton from "../FloatingCartButton";
import ScrollToTop from "../ScrollToTop";

const categories = [
  { id: "bruskettalar", label: "Bruskettalar", icon: Utensils },
  { id: "sorbalar", label: "Şorbalar", icon: Soup },
  { id: "kofe", label: "Kofe", icon: Coffee },
];

const Menu = () => {
  const [active, setActive] = useState("bruskettalar");
  const [cartOpen, setCartOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [search, setSearch] = useState("");

  const menuStartRef = useRef(null);

  const scrollToSection = (id) => {
    setActive(id);
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  /* 🔥 Search yazanda yalnız menu hissəsinə scroll et */
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

  /* 🔥 Normalize (Ş, Ğ, Ç və s.) */
  const normalize = (text) =>
    text
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "");

  /* 🔥 Smart realtime filter */
  const filteredData = useMemo(() => {
    if (!search.trim()) return menuData;

    const lower = normalize(search);

    const filterItems = (items) =>
      items.filter((item) =>
        normalize(item.title).includes(lower)
      );

    return {
      bruskettalar: filterItems(menuData.bruskettalar),
      sorbalar: filterItems(menuData.sorbalar),
      kofe: filterItems(menuData.kofe),
    };
  }, [search]);

  const hasResults =
    filteredData.bruskettalar.length > 0 ||
    filteredData.sorbalar.length > 0 ||
    filteredData.kofe.length > 0;

  return (
    <>
      {/* CATEGORY + SEARCH */}
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
                  onChange={(e) =>
                    setSearch(e.target.value)
                  }
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
              const isActive =
                active === item.id;

              return (
                <motion.button
                  key={item.id}
                  onClick={() =>
                    scrollToSection(item.id)
                  }
                  whileTap={{ scale: 0.96 }}
                  className={`
                    flex items-center gap-1.5
                    px-4 py-1.5
                    rounded-full
                    text-[13px]
                    whitespace-nowrap
                    border
                    ${
                      isActive
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

      {/* NO RESULT */}
      {search && !hasResults && (
        <div className="text-center py-24 text-gray-400 text-lg">
          “{search}” üzrə heç nə tapılmadı
        </div>
      )}

      {/* SECTIONS */}
      {filteredData.bruskettalar.length > 0 && (
        <MenuSection
          id="bruskettalar"
          title="Bruskettalar"
          items={filteredData.bruskettalar}
        />
      )}

      {filteredData.sorbalar.length > 0 && (
        <MenuSection
          id="sorbalar"
          title="Şorbalar"
          items={filteredData.sorbalar}
        />
      )}

      {filteredData.kofe.length > 0 && (
        <MenuSection
          id="kofe"
          title="Kofe"
          items={filteredData.kofe}
        />
      )}

     <FloatingCartButton
      setOpen={setCartOpen}
      hidden={cartOpen}
    />
      <ScrollToTop />
      <CartDrawer
        open={cartOpen}
        setOpen={setCartOpen}
      />
    </>
  );
};

export default Menu;