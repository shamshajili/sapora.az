import React from "react";
import { Plus } from "lucide-react";
import { useCart } from "../../context/CartContext";

const MenuItem = ({ id, image, title, price }) => {
  const { addToCart } = useCart();

  return (
    <div className="relative flex gap-6 items-center group">
      <div className="relative">
        <img
          src={image}
          alt={title}
          className="w-20 h-20 rounded-xl object-cover transition-transform duration-300 group-hover:scale-105"
        />

        {/* ADD BUTTON */}
        <button
          onClick={() => addToCart({ id, title, price, image })}
          className="
            absolute -bottom-2 -right-2
            w-7 h-7
            rounded-full
            bg-[#c9a46a]
            text-white
            flex items-center justify-center
            shadow-md
            hover:scale-110
            transition
          "
        >
          <Plus size={14} />
        </button>
      </div>

      <div className="flex-1 flex items-center">
        <p className="text-[#123a3d] text-lg font-medium">{title}</p>

        <div className="flex-1 border-b border-dotted border-[#123a3d]/40 mx-4" />

        <span className="text-[#123a3d] text-lg font-semibold">
          {price}
        </span>
      </div>
    </div>
  );
};

export default MenuItem;