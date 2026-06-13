import React, { useState } from "react";
import { useLanguage } from "../../context/LanguageContext";

const LanguageSwitcher = () => {
  const [open, setOpen] = useState(false);
  const { language, setLanguage } = useLanguage();

  return (
    <div className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="
          px-3 py-1.5 text-xs
          md:px-5 md:py-2 md:text-sm
          border border-[#c9a46a]
          text-[#c9a46a]
          tracking-wide
          flex items-center gap-2
          hover:bg-[#c9a46a]
          hover:text-black
          transition
        "
      >
        {language.toUpperCase()}
        <span>▼</span>
      </button>

      {open && (
        <div className="absolute right-0 mt-2 border border-[#c9a46a] bg-black/90 text-[#c9a46a]">
          {["az", "en", "ru"].map((lang) => (
            <button
              key={lang}
              onClick={() => {
                setLanguage(lang);
                setOpen(false);
              }}
              className="block w-full px-4 py-2 hover:bg-[#c9a46a] hover:text-black"
            >
              {lang.toUpperCase()}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;