// src/Sections/FiveTreesPage.js
import React from "react";
import { Element } from "react-scroll";
import Home from "./HomePage/Home";
import Footer from "../Components/Footer";

const FiveTreesPage = () => {
  return (
    <>
      <Element name="home">
        <Home />
      </Element>

      <Element name="footer">
        <Footer />
      </Element>
    </>
  );
};

export default FiveTreesPage;