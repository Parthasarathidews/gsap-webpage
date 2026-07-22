import React from "react";
import { cocktailLists, mockTailLists } from "../../../constants";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
const Cocktails = () => {
  useGSAP(() => {
    const parallaxTimeline = gsap
      .timeline({
        scrollTrigger: {
          trigger: "#cocktails",
          start: "top 30%",
          end: "bottom 80%",
          scrub: true,
        },
      })
      .from("#c-left-leaf", {
        x: -100,
        y: 100,
      })
      .from("#c-right-leaf", {
        x: 100,
        y: 100,
      });
  });
  return (
    <section id="cocktails" className="niosy">
      <img
        src="./images/cocktail-left-leaf.png"
        alt="left leaf image"
        id="c-left-leaf"
      />
      <img
        src="./images/cocktail-right-leaf.png"
        alt="left right image"
        id="c-right-leaf"
      />

      <div className="list max-lg:max-w-[95%]">
        <div className="popular">
          <h2>Most Popular Cocktails</h2>
          <ul>
            {cocktailLists.map((lists) => {
              return (
                <li key={lists.name}>
                  <div className="md:me-28">
                    <h3>{lists.name}</h3>
                    <p>
                      {lists.country} | {lists.detail}
                    </p>
                  </div>
                  <span>- {lists.price}</span>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="loved">
          <h2>Most Popular Mocktails</h2>
          <ul>
            {mockTailLists.map((lists) => {
              return (
                <li key={lists.name}>
                  <div className="me-28">
                    <h3>{lists.name}</h3>
                    <p>
                      {lists.country} | {lists.detail}
                    </p>
                  </div>
                  <span>- {lists.price}</span>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Cocktails;
