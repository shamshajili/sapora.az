import React, { useEffect, useState } from "react";
import sapora from "../../assets/images/sapora.jpeg";
import logo from "../../assets/images/saporalogo.png";
import { useNavigate } from "react-router-dom";
import LanguageSwitcher from "./LanguageSwitcher";
import { useLanguage } from "../../context/LanguageContext";
import { translations } from "../data/languages";

const Hero = () => {
  const [scrollY, setScrollY] = useState(0);
  const [sideOpen, setSideOpen] = useState(false);

  const navigate = useNavigate();

  const { language } = useLanguage();
  const t = translations[language];

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (sideOpen) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = "hidden";

      return () => {
        document.body.style.overflow = prev || "";
      };
    }

    document.body.style.overflow = "";

    return () => {};
  }, [sideOpen]);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center will-change-transform"
        style={{
          backgroundImage: `url(${sapora})`,
          transform: `translateY(${scrollY * 0.35}px) scale(1.1)`,
        }}
      />

      <div className="absolute inset-0 bg-black/75" />

      {/* Burger Menu */}
      <button
        onClick={() => setSideOpen(true)}
        className="absolute top-6 left-6 z-30 flex flex-col gap-1"
      >
        <span className="w-6 h-[2px] bg-[#c9a46a]" />
        <span className="w-4 h-[2px] bg-[#c9a46a]" />
        <span className="w-5 h-[2px] bg-[#c9a46a]" />
      </button>

      {/* Language + Review */}
      <div className="absolute top-6 right-6 z-30 flex items-center gap-4">
        <LanguageSwitcher />

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
          {t.review}
        </button>
      </div>

      {/* Sidebar */}
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
          <img src={logo} alt="Sapora" className="w-56 mx-auto mb-4" />

          <div className="space-y-2 text-sm mb-10">
            <p>{t.workingDays}</p>
            <p className="font-semibold">{t.workingHours}</p>

            <p className="mt-6">{t.address}</p>

            <p>{t.phone}</p>
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
              href="https://"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 border border-[#c9a46a] rounded-full flex items-center justify-center hover:bg-[#c9a46a] hover:text-black transition"
            >
              WA
            </a>
          </div>

          <p className="mt-10 text-xs opacity-70">{t.slogan}</p>
        </div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center text-center text-white">
        <img
          src={logo}
          alt="Sapora Logo"
          className="mb-12 w-[300px] md:w-[360px] lg:w-[440px]"
        />

        <p className="mt-[-16px] text-xs italic tracking-wide opacity-90">
          {t.checkMenu}
        </p>

        <h1 className="text-4xl text-[#c9a46a] md:text-5xl lg:text-6xl font-serif tracking-widest">
          {t.menu}
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
