// Sections/HomePage/Home.js
import React from "react";
import HomeHeader from "./homeHeader";
import HomeSection2 from "./home-section-2";
import HomeSection3 from "./home-section-3";
import HomeSection4 from "./home-section-4";
import HomeSection5 from "./home-section-5";
import WhatsAppWidget from "../../Components/WhatsappWidget";

function Home() {
  return (
    <main id="home">
      <section id="home">
        <HomeHeader />
        <HomeSection2 />
        <HomeSection3 />
        <HomeSection4 />
        <HomeSection5 />
        <WhatsAppWidget />
      </section>
    </main>
  );
}

export default Home;