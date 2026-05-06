import React from "react";
import ProductPage from "./productHeader";
import Footer from "../../Components/Footer";
import Section2 from "./Section-2";
import WhatsAppWidget from "../../Components/WhatsappWidget";

function Products() {
  return (
    <main id="products">
        <ProductPage />
        <Section2 />
        <Footer />
        <WhatsAppWidget />
    </main>
  );
}

export default Products;