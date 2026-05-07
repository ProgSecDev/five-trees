import React from "react";
import AboutHeader from "./aboutHeader";
import AboutSection2 from "./about-section-2";
import AboutSection3 from "./about-section-3";
import Footer from "../../Components/Footer";
import WhatsAppWidget from "../../Components/WhatsappWidget";

function About() {
  return (
    <main id="about">
      <section id="about">
        <AboutHeader />
        <AboutSection2 />
        <AboutSection3 />
        <Footer />
        <WhatsAppWidget />
      </section>
    </main>
  );
}

export default About;