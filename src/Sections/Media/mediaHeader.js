// src/Sections/HomePage/homeHeader.js
import React from "react";
import { NavLink } from "react-router-dom";
import "./mediaHeader.css";
import homeHeaderBG from "../../assets/HomePage/homeHeaderBG.png";

export default function MediaHeader({
  backgroundImage = homeHeaderBG
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
      className="media-header"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.18), rgba(0,0,0,0.18)), url(${backgroundImage})`,
      }}
    >
      <div className="media-header__overlay">
        <nav className="media-header__nav" aria-label="Home page navigation">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === "/"}
              className={({ isActive }) =>
                `media-header__nav-link${isActive ? " is-active" : ""}`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
}