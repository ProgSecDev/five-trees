import React from "react";
import "./productHeader.css";
import productsPageHeader from "../../assets/ProductsPage/productsPageHeader.png";
import mintHerb from "../../assets/ProductsPage/green-herb-img.png";

export default function ProductHeader() {
  return (
    <div className="product-page">
      <section
        className="hero-section"
        style={{ backgroundImage: `url(${productsPageHeader})` }}
      >
        <div className="hero-overlay" />

        <main className="hero-content animate-hero">
          <h1 className="hero-title">THE ART OF HALLOUMI</h1>
        </main>

        <img src={mintHerb} alt="" className="hero-mint" aria-hidden="true" />
      </section>
    </div>
  );
}