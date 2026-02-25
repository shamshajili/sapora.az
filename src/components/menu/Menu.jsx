import React from "react";
import { menuData } from "../data/menuData";
import MenuItem from "../menu/MenuItem";

const categories = [
  { id: "bruskettalar", label: "Bruskettalar" },
  { id: "sorbalar", label: "Şorbalar" },
  { id: "kofe", label: "Kofe" },
];

const Menu = () => {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <section className="bg-white py-10">
        <div className="flex gap-6 overflow-x-auto flex-nowrap px-6 scrollbar-hide">
          {categories.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="
                min-w-[200px]
                h-[52px]
                flex-shrink-0
                flex items-center justify-center
                border border-[#c9a46a]
                text-[#c9a46a]
                text-sm
                tracking-wide
                transition
                hover:bg-[#c9a46a]
                hover:text-white
              "
            >
              {item.label}
            </button>
          ))}
        </div>
      </section>

      <section id="bruskettalar" className="bg-white py-32">
        <h2 className="text-center text-3xl font-serif tracking-widest text-[#123a3d] mb-16">
          Bruskettalar
        </h2>

        <div className="max-w-3xl mx-auto space-y-10 px-6">
          {menuData.bruskettalar.map((item) => (
            <MenuItem key={item.id} {...item} />
          ))}
        </div>
      </section>

      <section id="sorbalar" className="bg-white py-32">
        <h2 className="text-center text-3xl font-serif tracking-widest text-[#123a3d] mb-16">
          Şorbalar
        </h2>

        <div className="max-w-3xl mx-auto space-y-10 px-6">
          {menuData.sorbalar.map((item) => (
            <MenuItem key={item.id} {...item} />
          ))}
        </div>
      </section>

      <section id="kofe" className="bg-white py-32">
        <h2 className="text-center text-3xl font-serif tracking-widest text-[#123a3d] mb-16">
          Kofe
        </h2>

        <div className="max-w-3xl mx-auto space-y-10 px-6">
          {menuData.kofe.map((item) => (
            <MenuItem key={item.id} {...item} />
          ))}
        </div>
      </section>
    </>
  );
};

export default Menu;