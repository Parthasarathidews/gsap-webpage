import React from "react";
import { ScrollTrigger, SplitText } from "gsap/all";
import Navbar from "./assets/components/Navbar";
import Banner from "./assets/components/Banner";
import Cocktails from "./assets/components/Cocktails";
import About from "./assets/components/About";
import Art from "./assets/components/Art";
import Menu from "./assets/components/Menu";
import Contact from "./assets/components/Contact";

const App = () => {
  return (
    <>
      <Navbar />
      <Banner />
      <Cocktails />
      <About />
      <Art />
      <Menu />
      <Contact />
    </>
  );
};

export default App;
