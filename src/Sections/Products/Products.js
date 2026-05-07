import React from "react";
import ProductPage from "./productHeader";
import Footer from "../../Components/Footer";
import ProductsSection2 from "./products-section-2";
import WhatsAppWidget from "../../Components/WhatsappWidget";

function Products() {
  return (
    <main id="products">
        <ProductPage />
        <ProductsSection2 />
        <Footer />
        <WhatsAppWidget />
    </main>
  );
}

export default Products;