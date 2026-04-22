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
  buttonText = "SHOP NOW",
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
        backgroundImage: `linear-gradient(rgba(255,255,255,0.18), rgba(255,255,255,0.18)), url(${backgroundImage})`,
      }}
    >
      <div className="home-header__overlay">
        <nav className="home-header__nav" aria-label="Home page navigation">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === "/"}
              className={({ isActive }) =>
                `home-header__nav-link${isActive ? " is-active" : ""}`
              }
            >
              {item.label}
            </NavLink>
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

          <button
            type="button"
            onClick={onButtonClick}
            className="home-header__button"
          >
            {buttonText}
          </button>
        </div>
      </div>
    </header>
  );
}