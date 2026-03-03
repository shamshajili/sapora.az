import React, { useEffect, useState } from "react";
import { ShoppingCart } from "lucide-react";
import { useCart } from "../context/CartContext";
import { motion, AnimatePresence } from "framer-motion";

export default function FloatingCartButton({ setOpen, hidden }) {
  const { totalItems } = useCart();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // 🔥 ScrollToTop ilə eyni limit
      if (window.scrollY > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (hidden) return null;

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, y: 20, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.9 }}
          transition={{ duration: 0.25 }}
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
      )}
    </AnimatePresence>
  );
}