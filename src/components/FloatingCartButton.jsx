import React from "react";
import { ShoppingCart } from "lucide-react";
import { useCart } from "../context/CartContext";
import { motion } from "framer-motion";

export default function FloatingCartButton({ setOpen }) {
  const { totalItems } = useCart();

  return (
    <motion.button
      onClick={() => setOpen(true)}
      whileTap={{ scale: 0.95 }}
      className="
        fixed bottom-6 left-6
        w-12 h-12
        rounded-full
        bg-[#c9a46a]
        text-white
        flex items-center justify-center
        shadow-xl
        z-[999]
      "
    >
      <ShoppingCart size={20} />

      {totalItems > 0 && (
        <span
          className="
            absolute -top-2 -right-2
            bg-white text-[#123a3d]
            text-xs font-bold
            w-5 h-5
            rounded-full
            flex items-center justify-center
          "
        >
          {totalItems}
        </span>
      )}
    </motion.button>
  );
}