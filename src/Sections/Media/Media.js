import React from "react";
import MediaHeader from "./mediaHeader";
import Section2 from "./Section-2";
import Footer from "../../Components/Footer";
import WhatsAppWidget from "../../Components/WhatsappWidget";

function Media() {
  return (
    <main id="media">
      <section id="media">
        <MediaHeader />
        <Section2 />
        <Footer />
        <WhatsAppWidget />
      </section>
    </main>
  );
}

export default Media;