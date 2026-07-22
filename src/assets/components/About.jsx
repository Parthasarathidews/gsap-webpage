import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";
import React from "react";

const About = () => {
  useGSAP(() => {
    const titleSplit = SplitText.create("#about h2", {
      type: "words",
    });
    const scrollTimeline = gsap
      .timeline({
        scrollTrigger: {
          trigger: "#about",
        },
      })
      .from(titleSplit.words, {
        opacity: 0,
        duration: 1,
        yPercent: 100,
        ease: "expo.out",
        stagger: 0.02,
      })
      .from(
        ".top-grid div, .bottom-grid div ",
        {
          opacity: 0,
          duration: 1,
          ease: "Power1.inOut",
          stagger: 0.04,
        },
        "-=0.5",
      );
  });

  return (
    <div id="about" className="max-lg:max-w-[95%]">
      <div className="mb-16 md:px-0 pc-5">
        <div className="content">
          <div className="md:col-span-8">
            <div className="badge">Best Cocktails</div>
            <h2>
              Where Every Details Matters <span className="text-wiite">- </span>
              from muddle to garnisg
            </h2>
          </div>
          <div className="sub-content">
            <p>
              Every cocktail we serve is a reflection of our obsession with
              detail — from the first muddle to the final garnish. That care is
              what turns a simple drink into something truly memorable.{" "}
            </p>
            <div className="">
              <p className="md:text-3xl text-xl font-bold">
                <span>4.5</span>/5
              </p>
              <p className="text-sm text-white-100">
                More than 12300+ Customers
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="top-grid">
        <div className="md:col-span-3">
          <div className="noisy " />
          <img src="./images/abt1.png" alt="grid images 1" />
        </div>
        <div className="md:col-span-6">
          <div className="noisy " />
          <img src="./images/abt2.png" alt="grid images 1" />
        </div>
        <div className="md:col-span-3">
          <div className="noisy " />
          <img src="./images/abt5.png" alt="grid images 1" />
        </div>
      </div>
      <div className="bottom-grid">
        <div className="md:col-span-8">
          <div className="noisy " />
          <img src="./images/abt3.png" alt="grid images 1" />
        </div>
        <div className="md:col-span-4">
          <div className="noisy " />
          <img src="./images/abt4.png" alt="grid images 1" />
        </div>
      </div>
    </div>
  );
};

export default About;
