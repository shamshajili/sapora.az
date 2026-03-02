import React from "react";
import MenuItem from "./MenuItem";

const MenuSection = ({ id, title, items }) => {
  return (
    <section id={id} className="bg-white py-24 scroll-mt-32">
      <h2 className="text-center text-3xl font-serif text-[#123a3d] mb-12 tracking-widest">
        {title}
      </h2>

      <div className="max-w-3xl mx-auto space-y-8 px-6">
        {items.map((item) => (
          <MenuItem key={item.id} {...item} />
        ))}
      </div>
    </section>
  );
};

export default MenuSection;