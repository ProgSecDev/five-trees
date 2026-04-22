// Sections/HomePage/Home.js
import React from "react";
import HomeHeader from "./homeHeader";
import Section2 from "./Section-2";
import Section3 from "./Section-3";
import Section4 from "./Section-4";
import Section5 from "./Section-5";

function Home() {
  return (
    <main id="home">
      <section id="home">
        <HomeHeader />
        <Section2 />
        <Section3 />
        <Section4 />
        <Section5 />
      </section>
    </main>
  );
}

export default Home;