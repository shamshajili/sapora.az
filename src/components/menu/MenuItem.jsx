import React from "react";
import { Plus } from "lucide-react";
import { motion } from "framer-motion";
import { useCart } from "../../context/CartContext";

const MenuItem = ({ id, image, title, price }) => {
  const { addToCart } = useCart();

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="relative flex gap-6 items-center group"
    >
      {/* IMAGE WRAPPER */}
      <div className="relative">
        <motion.img
          src={image}
          alt={title}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
          className="w-20 h-20 rounded-xl object-cover shadow-md"
        />

        {/* ADD BUTTON */}
        <motion.button
          onClick={() =>
            addToCart({ id, title, price, image })
          }
          whileHover={{ scale: 1.15 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: "spring", stiffness: 400, damping: 15 }}
          className="
            absolute -bottom-2 -right-2
            w-8 h-8
            rounded-full
            bg-[#c9a46a]
            text-white
            flex items-center justify-center
            shadow-lg
            hover:shadow-xl
          "
        >
          <Plus size={15} />
        </motion.button>
      </div>

      {/* TEXT + PRICE */}
      <div className="flex-1 flex items-center">
        <p className="text-[#123a3d] text-lg font-medium transition-colors duration-300 group-hover:text-[#0e2f32]">
          {title}
        </p>

        <div className="flex-1 border-b border-dotted border-[#123a3d]/40 mx-4" />

        <span className="text-[#123a3d] text-lg font-semibold">
          {price}
        </span>
      </div>
    </motion.div>
  );
};

export default MenuItem;