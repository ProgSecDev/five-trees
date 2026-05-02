// src/Sections/HomePage/homeHeader.js
import React from "react";
import { NavLink } from "react-router-dom";
import "./homeHeader.css";
import homeHeaderBG from "../../assets/HomePage/homeHeaderBG.png";
import headerLogo from "../../assets/HomePage/logo-noBG.png";

export default function HomeHeader({
  backgroundImage = homeHeaderBG,
  logoSrc = headerLogo,
  companyName = "FIVE TREES GLOBAL TRADING",
  subtitle = "YOUR TRUSTED SOURCE",
  buttonText = "View Products",
  onButtonClick,
}) {
  const navItems = [
    { label: "HOME", path: "/" },
    { label: "ABOUT US", path: "/about" },
    { label: "PRODUCTS", path: "/product" },
    { label: "MEDIA", path: "/media" },
    { label: "CONTACT US", path: "/contact" },
  ];

  return (
    <header
      className="home-header"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0)), url(${backgroundImage})`,
      }}
    >
      <div className="home-header__overlay">
        <nav className="home-header__nav" aria-label="Home page navigation">
          {navItems.map((item) => (
            <span
              key={item.path}
              className={`home-header__nav-link${item.path === "/" ? " is-active" : ""}`}
              aria-disabled="true"
            >
              {item.label}
            </span>
          ))}
        </nav>

        <div className="home-header__logo-wrap">
          <img
            src={logoSrc}
            alt="Five Trees Global Trading logo"
            className="home-header__logo-image"
          />
        </div>

        <div className="home-header__content">
          <h1 className="home-header__title">{companyName}</h1>
          <p className="home-header__subtitle">{subtitle}</p>

          <NavLink to="/product" className="home-header__button">
            {buttonText}
          </NavLink>
        </div>
      </div>
    </header>
  );
}