import React from "react";
import { ScrollTrigger, SplitText } from "gsap/all";
import Navbar from "./assets/components/Navbar";
import Banner from "./assets/components/Banner";

const App = () => {
  return (
    <>
      <Navbar />
      <Banner />
      <div className="h-dvh bg-black"></div>
    </>
  );
};

export default App;
