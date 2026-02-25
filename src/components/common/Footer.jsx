import React from "react";
import logo from "../../assets/images/saporalogo.png";

const Footer = () => {
  return (
    <footer className="bg-[#123a3d] text-white">
      <div className="max-w-5xl mx-auto px-6 py-20 flex flex-col items-center gap-6">
        {/* LOGO – OPTICAL CENTER */}
        <img
          src={logo}
          alt="Sapora Logo"
          className="w-72 translate-x-[3px]"
        />

        {/* BUTTON – OPTICAL CENTER */}
        <a
          href="https://www.instagram.com/sapora.az/"
          target="_blank"
          rel="noopener noreferrer"
          className="
            inline-flex
            items-center
            justify-center
            px-8 py-2
            border border-[#c9a46a]
            text-[#c9a46a]
            text-xs tracking-wide
            transition
            hover:bg-[#c9a46a]
            hover:text-[#123a3d]
            -translate-x-[2px]
          "
        >
          Follow us on Instagram
        </a>
      </div>

      <div className="border-t border-white/20" />

      <div className="text-center py-5 text-sm opacity-80">
        © {new Date().getFullYear()} Sapora. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;