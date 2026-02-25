import React, { useEffect, useState } from "react";
import interier from "../../assets/images/interier.jpeg";
import logo from "../../assets/images/saporalogo.png";

const Hero = () => {
  const [scrollY, setScrollY] = useState(0);
  const [langOpen, setLangOpen] = useState(false);
  const [lang, setLang] = useState("AZ");

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center will-change-transform"
        style={{
          backgroundImage: `url(${interier})`,
          transform: `translateY(${scrollY * 0.35}px) scale(1.1)`,
        }}
      />

      <div className="absolute inset-0 bg-black/75" />

      {/* TOP RIGHT */}
      <div className="absolute top-6 right-6 z-30 flex items-center gap-4">
        {/* LANGUAGE */}
        <div className="relative">
          <button
            onClick={() => setLangOpen(!langOpen)}
            className="
              px-3 py-1.5 text-xs
              md:px-5 md:py-2 md:text-sm
              border border-[#c9a46a]
              text-[#c9a46a]
              bg-transparent
              tracking-wide
              flex items-center gap-2
              transition-all duration-300
              hover:bg-[#c9a46a]
              hover:text-black
            "
          >
            {lang}
            <span className="text-[10px] md:text-xs">▼</span>
          </button>

          {langOpen && (
            <div
              className="
                absolute right-0 mt-2
                w-full
                border border-[#c9a46a]
                bg-black/90
                backdrop-blur-md
                text-[#c9a46a]
                text-xs md:text-sm
                overflow-hidden
              "
            >
              {["EN", "RU"].map((item) => (
                <button
                  key={item}
                  onClick={() => {
                    setLang(item);
                    setLangOpen(false);
                  }}
                  className="
                    w-full px-3 py-1.5
                    md:px-4 md:py-2
                    text-left
                    hover:bg-[#c9a46a]
                    hover:text-black
                    transition
                  "
                >
                  {item}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* REVIEW */}
        <button
          className="
            px-4 py-1.5 text-xs
            md:px-6 md:py-2 md:text-sm
            border border-[#c9a46a]
            text-[#c9a46a]
            bg-transparent
            tracking-wide
            transition-all duration-300
            hover:bg-[#c9a46a]
            hover:text-black
            hover:shadow-lg
          "
        >
          Rəy bildirin
        </button>
      </div>

      {/* CENTER CONTENT – TOXUNULMAYIB */}
      <div className="relative z-10 flex h-full flex-col mb-26 items-center justify-center text-center text-white">
        <img
          src={logo}
          alt="Sapora Logo"
          className="
            mb-10
            w-[300px]
            md:w-[360px]
            lg:w-[440px]
            left-1/2
            ml-[18px]
          "
        />

        <p className="mt-[-16px] text-xs italic tracking-wide opacity-90">
          Check out our
        </p>

        <h1 className="text-4xl text-[#c9a46a] md:text-5xl lg:text-6xl font-serif tracking-widest">
          MENU
        </h1>
      </div>
    </section>
  );
};

export default Hero;