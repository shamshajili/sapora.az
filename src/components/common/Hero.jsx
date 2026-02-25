import React, { useEffect, useState } from "react";
import interier from "../../assets/images/interier.jpeg";
import logo from "../../assets/images/saporalogo.png";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const [scrollY, setScrollY] = useState(0);
  const [langOpen, setLangOpen] = useState(false);
  const [lang, setLang] = useState("AZ");
  const [sideOpen, setSideOpen] = useState(false);
  const navigate = useNavigate();

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

      <button
        onClick={() => setSideOpen(true)}
        className="absolute top-6 left-6 z-30 flex flex-col gap-1"
      >
        <span className="w-6 h-[2px] bg-[#c9a46a]" />
        <span className="w-4 h-[2px] bg-[#c9a46a]" />
        <span className="w-5 h-[2px] bg-[#c9a46a]" />
      </button>

      <div
        className={`
          fixed top-0 left-0 h-full w-[300px] md:w-[360px]
          bg-[#123a3d]
          z-40
          transition-transform duration-500
          ${sideOpen ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        <button
          onClick={() => setSideOpen(false)}
          className="absolute top-5 right-5 text-[#c9a46a] text-2xl"
        >
          ✕
        </button>

        <div className="h-full overflow-y-auto px-8 pt-10 pb-8 text-[#c9a46a]">
          <img
            src={logo}
            alt="Sapora"
            className="w-56 mx-auto mb-4"
          />

          <div className="space-y-2 text-sm mb-10">
            <p>Bazar ertəsi – Cümə</p>
            <p className="font-semibold">11:00 – 00:00</p>

            <p className="mt-4">Şənbə – Bazar</p>
            <p className="font-semibold">10:00 – 00:00</p>

            <p className="mt-6">Rashid Behbudov str. 41</p>
            <p>+994 xx xxx xx xx</p>
          </div>

          <div className="flex gap-4 mb-10">
              <a
                href="https://www.instagram.com/sapora.az/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 border border-[#c9a46a] rounded-full flex items-center justify-center hover:bg-[#c9a46a] hover:text-black transition"
              >
                IG
              </a>

              <a
                href="https://wa.me/994105551050"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 border border-[#c9a46a] rounded-full flex items-center justify-center hover:bg-[#c9a46a] hover:text-black transition"
              >
                WA
              </a>
            </div>
          <button
            onClick={() => setLang(lang === "AZ" ? "EN" : "AZ")}
            className="
              px-4 py-2
              border border-[#c9a46a]
              text-xs tracking-wide
              hover:bg-[#c9a46a]
              hover:text-black
              transition
            "
          >
            {lang}
          </button>

          <p className="mt-10 text-xs opacity-70">
            Sapora of taste
          </p>
        </div>
      </div>

      <div className="absolute top-6 right-6 z-30 flex items-center gap-4">
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
              transition
              hover:bg-[#c9a46a]
              hover:text-black
            "
          >
            {lang}
            <span className="text-[10px] md:text-xs">▼</span>
          </button>

          {langOpen && (
            <div className="absolute right-0 mt-2 w-full border border-[#c9a46a] bg-black/90 text-[#c9a46a] text-xs md:text-sm">
              {["EN", "RU"].map((item) => (
                <button
                  key={item}
                  onClick={() => {
                    setLang(item);
                    setLangOpen(false);
                  }}
                  className="w-full px-3 py-1.5 hover:bg-[#c9a46a] hover:text-black"
                >
                  {item}
                </button>
              ))}
            </div>
          )}
        </div>

        <button
        onClick={() => navigate("/review")}
        className="
            px-4 py-1.5 text-xs
            md:px-6 md:py-2 md:text-sm
            border border-[#c9a46a]
            text-[#c9a46a]
            bg-transparent
            tracking-wide
            transition
            hover:bg-[#c9a46a]
            hover:text-black
          "
        >
          Rəy bildirin
        </button>
      </div>

      <div className="relative z-10 flex h-full flex-col items-center justify-center text-center text-white">
        <img
          src={logo}
          alt="Sapora Logo"
          className="mb-12 w-[300px] md:w-[360px] lg:w-[440px]"
        />

        <p className="mt-[-16px] text-xs italic tracking-wide opacity-90">
          Check out our
        </p>

        <h1 className="text-4xl text-[#c9a46a] md:text-5xl lg:text-6xl font-serif tracking-widest">
          MENU
        </h1>

        <div
          onClick={() =>
            window.scrollTo({
              top: window.innerHeight,
              behavior: "smooth",
            })
          }
          className="mt-18 flex justify-center cursor-pointer"
        >
          <div className="w-4 h-8 border-2 border-[#c9a46a] rounded-full flex justify-center">
            <span className="w-1 h-2 bg-[#c9a46a] rounded-full mt-2 animate-scrollDot" />
          </div>
        </div>
      </div>
    </section>
  );
};
export default Hero;