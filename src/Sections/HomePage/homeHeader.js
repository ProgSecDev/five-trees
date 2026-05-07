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
  overlayOpacity = 0.15,
  onButtonClick,
}) {
  const [animKey, setAnimKey] = useState(0);

  useEffect(() => {
    setAnimKey((k) => k + 1);
  }, []);

  return (
    <header
      className="home-header"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="home-header__overlay" style={{ backgroundColor: `rgba(255, 255, 255, ${overlayOpacity})` }}>
        <div className="home-header__logo-wrap">
          <img
            src={logoSrc}
            alt="Five Trees Global Trading logo"
            className="home-header__logo-image"
          />
        </div>

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