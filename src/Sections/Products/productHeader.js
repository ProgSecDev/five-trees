import React from "react";
import "./productHeader.css";
import productsPageHeader from "../../assets/ProductsPage/productsPageHeader.png";
import mintHerb from "../../assets/ProductsPage/green-herb-img.png";
import { NavLink } from "react-router-dom";

export default function ProductHeader({
  overlayOpacity = 0.05
}) {
  return (
    <div className="product-page">
      <section
        className="hero-section"
        style={{ backgroundImage: `url(${productsPageHeader})` }}
      >
        <div className="hero-overlay" style={{ backgroundColor: `rgba(255, 255, 255, ${overlayOpacity})` }} />

        <main className="hero-content animate-hero">
          <h1 className="hero-title">YOUR BRAND...OUR HALLOUMI</h1>
          <h1 className="hero-title">PRIVATE LABEL & GCC DISTRIBUTION</h1>
          <NavLink to="/contact" className="product-header__button">
            Start Today
          </NavLink>
        </main>

        <img src={mintHerb} alt="" className="hero-mint" aria-hidden="true" />
      </section>
    </div>
  );
}