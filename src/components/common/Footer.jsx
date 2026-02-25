import React from "react";
import logo from "../../assets/images/saporalogo.png";

const Footer = () => {
  return (
    <footer className="bg-[#123a3d] text-white">
      <div className="max-w-5xl mx-auto px-6 py-24 text-center">
        <img
          src={logo}
          alt="Sapora Logo"
          className="w-72 mx-auto mb-10"
        />

        <a
          href="https://www.instagram.com/sapora.az/"
          target="_blank"
          rel="noopener noreferrer"
          className="
            inline-block
            px-10 py-3
            border border-[#c9a46a]
            text-[#c9a46a]
            text-sm tracking-wide
            transition
            hover:bg-[#c9a46a]
            hover:text-[#123a3d]
          "
        >
          Follow us on Instagram
        </a>
      </div>

      <div className="border-t border-white/20" />

      <div className="text-center py-6 text-sm opacity-80">
        © {new Date().getFullYear()} Sapora. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;