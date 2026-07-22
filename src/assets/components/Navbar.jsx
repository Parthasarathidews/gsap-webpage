import React, { useState } from "react";
import { navLinks } from "../../../constants";
import logo from "../../../public/images/logo.png";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  useGSAP(() => {
    const navTween = gsap.timeline({
      scrollTrigger: {
        trigger: "nav",
        start: "bottom top",
      },
    });

    navTween.fromTo(
      "nav",
      { backgroundColor: "transparent" },
      {
        backgroundColor: "#00000050",
        backdropFilter: "blur(10px)",
        duration: 0.8,
        ease: "power1.inOut",
      },
    );
  });

  return (
    <nav className="fixed top-0 left-0 w-full z-50 ">
      <div className="w-[95%] mx-auto flex items-center justify-between  max-lg:max-w-full max-md:flex-row">
        <a href="#home" className="flex items-center gap-2">
          <img src={logo} alt="logo" className="w-10 h-10 object-contain" />
          <p className="text-white text-[2rem] font-semibold">Velvet Pour</p>
        </a>

        <ul className="hidden lg:flex items-center gap-10 ">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                className="text-white text-[16px] hover:text-yellow-400 transition-colors duration-300"
              >
                {link.title}
              </a>
            </li>
          ))}
        </ul>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden relative w-10 h-10 flex items-center justify-center z-[60]"
          aria-label="Toggle Menu"
        >
          <span
            className={`absolute w-7 h-[2px] bg-white transition-all duration-300 ${
              isOpen ? "rotate-45" : "-translate-y-2"
            }`}
          />
          <span
            className={`absolute w-7 h-[2px] bg-white transition-all duration-300 ${
              isOpen ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`absolute w-7 h-[2px] bg-white transition-all duration-300 ${
              isOpen ? "-rotate-45" : "translate-y-2"
            }`}
          />
        </button>

        <div
          className={`lg:hidden fixed top-0 left-0 h-screen  w-[35%] bg-black/95 backdrop-blur-md transform transition-transform duration-500 ease-in-out z-50 ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          } `}
        >
          <ul className="flex flex-col gap-8 items-center mx-auto max-md:my-auto">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  onClick={() => setIsOpen(false)}
                  className="text-white text-[16px] font-medium hover:text-yellow-400 transition-colors duration-300"
                >
                  {link.title}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {isOpen && (
          <div
            className="lg:hidden fixed inset-0 bg-black/50 z-40"
            onClick={() => setIsOpen(false)}
          />
        )}
      </div>
    </nav>
  );
};

export default Navbar;
