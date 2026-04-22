// Sections/HomePage/Home.js
import React from "react";
import AboutHeader from "./aboutHeader";
import Section2 from "./Section-2";
import Section3 from "./Section-3";
import Footer from "../../Components/Footer";

function About() {
  return (
    <main id="about">
      <section id="about">
        <AboutHeader />
        <Section2 />
        <Section3 />
        <Footer />
      </section>
    </main>
  );
}

export default About;