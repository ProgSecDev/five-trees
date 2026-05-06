// src/Sections/HomePage/homeHeader.js
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "./homeHeader.css";
import homeHeaderBG from "../../assets/HomePage/homeHeaderBG.png";
import headerLogo from "../../assets/HomePage/logo-final-nobg.png";

export default function HomeHeader({
  backgroundImage = homeHeaderBG,
  logoSrc = headerLogo,
  companyName = "FIVE TREES GLOBAL TRADING",
  subtitle = "YOUR TRUSTED SOURCE",
  buttonText = "View Products",
  onButtonClick,
}) {
  const [animKey, setAnimKey] = useState(0);

  // Re-trigger animations if user navigates back to this page
  useEffect(() => {
    setAnimKey((k) => k + 1);
  }, []);

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
      style={{ backgroundImage: `url(${backgroundImage})` }}
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

        {/* key forces React to remount → CSS animations retrigger */}
        <div className="home-header__content" key={animKey}>
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