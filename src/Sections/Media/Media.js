import React from "react";
import MediaHeader from "./mediaHeader";
import MediaSection2 from "./media-section-2";
import Footer from "../../Components/Footer";
import WhatsAppWidget from "../../Components/WhatsappWidget";

function Media() {
  return (
    <main id="media">
      <section id="media">
        <MediaHeader />
        <MediaSection2 />
        <Footer />
        <WhatsAppWidget />
      </section>
    </main>
  );
}

export default Media;