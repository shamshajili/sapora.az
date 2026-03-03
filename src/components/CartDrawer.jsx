import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  Trash2,
  Pencil,
  ShoppingCart,
} from "lucide-react";
import { useCart } from "../context/CartContext";

const CartDrawer = ({ open, setOpen }) => {
  const { cart, updateQuantity, removeFromCart, total } =
    useCart();

  const [notes, setNotes] = useState("");

  useEffect(() => {
    document.body.style.overflow = open
      ? "hidden"
      : "auto";
  }, [open]);

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* BACKDROP */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={() => setOpen(false)}
            className="fixed inset-0 bg-black/60 backdrop-blur-md z-40"
          />

          {/* DRAWER */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.3 }}
            className="fixed right-0 top-0 h-full w-96 bg-[#123a3d] text-white z-50 shadow-2xl flex flex-col"
          >
            {/* HEADER */}
            <div className="px-6 py-5 border-b border-white/20 flex justify-between items-center">
              <h2 className="text-2xl font-semibold tracking-wide">
                Səbət
              </h2>
              <button
                onClick={() => setOpen(false)}
                className="hover:scale-110 transition"
              >
                <X size={22} />
              </button>
            </div>

            {/* CONTENT */}
            <div className="flex-1 overflow-y-auto px-6 py-6 space-y-6">

              {/* EMPTY STATE */}
              {cart.length === 0 && (
                <div className="flex flex-col items-center justify-center text-center mt-32">
                  <div className="w-24 h-24 rounded-full bg-white/10 flex items-center justify-center mb-6">
                    <ShoppingCart
                      size={32}
                      className="text-[#c9a46a]"
                    />
                  </div>

                  <h3 className="text-lg font-medium">
                    Səbətiniz boşdur
                  </h3>

                  <p className="text-white/50 text-sm mt-2 max-w-xs">
                    Sevdiyiniz yeməkləri seçin və
                    sifarişinizi tamamlayın
                  </p>

                  <button
                    onClick={() => setOpen(false)}
                    className="mt-6 px-6 py-2 rounded-full border border-[#c9a46a] text-[#c9a46a] hover:bg-[#c9a46a] hover:text-white transition"
                  >
                    Menyuya qayıt
                  </button>
                </div>
              )}

              {/* CART ITEMS */}
              {cart.map((item) => (
                <div
                  key={item.id}
                  className="bg-white/5 rounded-xl p-4 backdrop-blur-md"
                >
                  <div className="flex gap-4">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-20 h-20 rounded-xl object-cover"
                    />

                    <div className="flex-1">
                      <p className="text-sm font-medium leading-snug">
                        {item.title}
                      </p>

                      <div className="flex items-center gap-3 mt-4">
                        <button
                          onClick={() =>
                            updateQuantity(item.id, -1)
                          }
                          className="w-8 h-8 rounded-lg bg-white/10 hover:bg-white/20 transition flex items-center justify-center"
                        >
                          -
                        </button>

                        <span className="text-sm font-medium">
                          {item.quantity}
                        </span>

                        <button
                          onClick={() =>
                            updateQuantity(item.id, 1)
                          }
                          className="w-8 h-8 rounded-lg bg-white/10 hover:bg-white/20 transition flex items-center justify-center"
                        >
                          +
                        </button>
                      </div>
                    </div>

                    <div className="flex flex-col justify-between items-end">
                      <span className="text-sm font-semibold">
                        {(item.price *
                          item.quantity).toFixed(2)}{" "}
                        ₼
                      </span>

                      <button
                        onClick={() =>
                          removeFromCart(item.id)
                        }
                        className="text-red-300 hover:text-red-400 transition"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}

              {/* NOTES */}
              {cart.length > 0 && (
                <div>
                  <div className="flex items-center gap-2 mb-2 text-white/70 text-sm">
                    <Pencil size={14} />
                    <span>Qeyd əlavə edin</span>
                  </div>

                  <textarea
                    value={notes}
                    onChange={(e) =>
                      setNotes(e.target.value)
                    }
                    className="w-full h-24 bg-white/10 rounded-xl p-3 text-sm outline-none focus:ring-2 focus:ring-[#c9a46a] resize-none"
                  />
                </div>
              )}
            </div>

            {/* FOOTER */}
            {cart.length > 0 && (
              <div className="px-6 py-5 border-t border-white/20">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-white/70 text-sm">
                    Cəmi
                  </span>
                  <span className="text-lg font-semibold">
                    {total.toFixed(2)} ₼
                  </span>
                </div>

                <button className="w-full bg-[#c9a46a] hover:bg-[#b89355] transition py-3 rounded-full text-white font-medium shadow-lg">
                  Sifarişi tamamla
                </button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default CartDrawer;