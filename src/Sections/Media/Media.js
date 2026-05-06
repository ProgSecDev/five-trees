import React from "react";
import MediaHeader from "./mediaHeader";
import Section2 from "./Section-2";
import Section3 from "./Section-3";
import Section4 from "./Section-4";
import Section5 from "./Section-5";
import Section6 from "./Section-6";
import Footer from "../../Components/Footer";
import WhatsAppWidget from "../../Components/WhatsappWidget";

function Media() {
  return (
    <main id="media">
      <section id="media">
        <MediaHeader />
        <Section2 />
        <Section3 />
        <Section4 />
        <Section5 />
        <Section6 />
        <Footer />
        <WhatsAppWidget />
      </section>
    </main>
  );
}

export default Media;