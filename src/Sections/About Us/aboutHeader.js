// src/Sections/About Us/aboutHeader.js
import React from "react";
import { NavLink } from "react-router-dom";
import "./aboutHeader.css";
import heroImage from "../../assets/About US/aboutHeaderBG.png";

export default function AboutHeader() {
  const navItems = [
    { label: "HOME", path: "/" },
    { label: "ABOUT US", path: "/about" },
    { label: "PRODUCTS", path: "/product" },
    { label: "MEDIA", path: "/media" },
    { label: "CONTACT US", path: "/contact" },
  ];

  return (
    <section className="about-header">
      <div
        className="about-header__hero"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="about-header__overlay" />

        <nav className="about-header__nav" aria-label="About page navigation">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `about-header__nav-link${isActive ? " is-active" : ""}`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="about-header__hero-content">
          <h1 className="about-header__title">BOLD TASTE STARTS HERE</h1>

          <NavLink to="/product" className="about-header__button">
            SHOP NOW
          </NavLink>
        </div>
      </div>

      <div className="about-header__about">
        <div className="about-header__about-inner">
          <h2 className="about-header__about-title">ABOUT US</h2>

          <p className="about-header__about-text">
            Rooted in Cyprus, Five Trees Global Trading is dedicated to
            delivering authentic, high-quality Mediterranean products to
            international markets. Specializing in halloumi cheese and extra
            virgin olive oil, we partner with trusted local producers to ensure
            excellence, consistency, and sustainability. Driven by tradition and
            guided by modern standards, we bring the true taste of Cyprus to the
            world with integrity and care.
          </p>
        </div>
      </div>
    </section>
  );
}