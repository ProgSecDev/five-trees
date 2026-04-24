import React from "react";
import { NavLink } from "react-router-dom";
import "./productHeader.css";
import productsPageHeader from "../../assets/ProductsPage/productsPageHeader.png";
import mintHerb from "../../assets/ProductsPage/green-herb-img.png";

export default function ProductHeader() {
  const navItems = [
    { label: "HOME", path: "/" },
    { label: "ABOUT US", path: "/about" },
    { label: "PRODUCTS", path: "/product" },
    { label: "MEDIA", path: "/media" },
    { label: "CONTACT US", path: "/contact" },
  ];

  return (
    <div className="product-page">
      <section
        className="hero-section"
        style={{
          backgroundImage: `url(${productsPageHeader})`,
        }}
      >
        <div className="hero-overlay" />

        <header className="hero-header">
          <nav className="hero-nav" aria-label="Products page navigation">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                end={item.path === "/"}
                className={({ isActive }) =>
                  `hero-nav-link${isActive ? " active" : ""}`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
        </header>

        <main className="hero-content">
          <h1 className="hero-title">THE ART OF HALLOUMI</h1>

          <button type="button" className="hero-button">
            SHOP NOW
          </button>
        </main>

        <img
          src={mintHerb}
          alt=""
          className="hero-mint"
          aria-hidden="true"
        />
      </section>
    </div>
  );
}