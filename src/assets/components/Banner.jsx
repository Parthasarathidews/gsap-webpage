import React from "react";
import leftLeaf from "../../../public/images/hero-left-leaf.png";
import gsap from "gsap";
import rightLeaf from "../../../public/images/hero-right-leaf.png";
import { useGSAP } from "@gsap/react";
import { SplitText, ScrollTrigger } from "gsap/all";

// register plugins
gsap.registerPlugin(useGSAP, SplitText, ScrollTrigger);
const Banner = () => {
  useGSAP(() => {
    const heroSplit = new SplitText(".title", { type: "chars, words" });
    const paragraphSplit = new SplitText(".subtitle", { type: "lines" });

    heroSplit.chars.forEach((char) => char.classList.add("text-gradient"));

    gsap.from(heroSplit.chars, {
      yPercent: 100,
      duration: 1.8,
      ease: "expo.out",
      stagger: 0.05,
    });

    gsap.from(paragraphSplit.lines, {
      opacity: 0,
      duration: 1.8,
      delay: 1,
      stagger: 0.05,
      ease: "expo.out",
    });

    gsap
      .timeline({
        scrollTrigger: {
          trigger: "#hero",
          start: "top top ",
          end: "bottom top",
          scrub: true,
        },
      })
      .to(
        ".left-leaf",
        {
          y: -200,
        },
        0,
      )
      .to(".right-leaf", { y: 200 }, 0);
  }, []);
  return (
    <section id="hero" className="noisy">
      <h1 className="title uppercase">Mojito</h1>
      <img className="left-leaf" src={leftLeaf} alt="left leaf image" />
      <img className="right-leaf" src={rightLeaf} alt="right leaf image" />
      <div className="body">
        <div className="content">
          <div className="space-y-5 hidden md:block">
            <p>Cool. Crisp. Classic. </p>
            <p className="subtitle">
              Sip the Sprit <br /> Summer
            </p>
          </div>
          <div className="view-cocktails">
            <p className="subtitle">
              Every cocktail on our menu is a blend of premium ingredients,
              creative flair, and timeless recipes — designed to delight your
              senses.
            </p>
            <a href="#cocktails">View Cocktails</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
