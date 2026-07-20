import React from "react";
import { navLinks } from "../../../constants";
import logo from "../../../public/images/logo.png";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
const Navbar = () => {
  useGSAP(() => {
    const navTween = gsap.timeline({
      ScrollTrigger: {
        trigger: "nav",
        start: "bottom top",
      },
    });

    navTween.fromTo(
      "nav",
      { backgroundColor: "transparent" },
      {
        backgroundColor: "#00000050",
        backgroundFilter: "blur(10px)",
        duriation: 1,
        ease: "power1.inOut",
      },
    );
  });
  return (
    <nav>
      <div>
        <a href="#home" className="flex items-center gap-2">
          <img src={logo} alt="logo" />
          <p>Velvet pour</p>
        </a>
        <ul>
          {navLinks.map((link) => {
            return (
              <li key={link.id}>
                <a href={`#${link.id}`}>{link.title}</a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
