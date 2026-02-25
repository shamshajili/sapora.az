import React from "react";
import logo from "../../assets/images/saporalogo.png";
import interier from "../../assets/images/interier.jpeg";

const Hero = () => {
  return (
    <section className="relative w-full min-h-screen overflow-hidden">
      {/* Background */}
      <img
        src={interier}
        alt="Sapora Interior"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/75" />

      {/* Content */}
      <div className="relative z-10 min-h-screen flex flex-col items-center text-white px-4">

        {/* TOP LOGO (ONLY IMAGE, NO TEXT) */}
        <div className="pt-38">
          <img
            src={logo}
            alt="Sapora Logo"
            className="w-54 md:w-62 opacity-95"
          />
        </div>

        {/* BOTTOM MENU */}
        <div className="mt-auto pb-28 text-center">
          <p className="text-m italic font-serif text-white/90 mb-2">
            Check out our
          </p>
          <p className="text-4xl md:text-3xl tracking-[0.35em] font-serif">
            MENU
          </p>
        </div>

      </div>
    </section>
  );
};

export default Hero;