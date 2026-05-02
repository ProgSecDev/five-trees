// src/Sections/HomePage/homeHeader.js
import React from "react";
import "./mediaHeader.css";
import mediaHeader from "../../assets/Media/media-header.png";

export default function MediaHeader({ backgroundImage = mediaHeader }) {
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
        backgroundImage: `linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0)), url(${backgroundImage})`,
      }}
    >
      <div className="media-header__overlay">
        <nav className="media-header__nav" aria-label="Home page navigation">
          {navItems.map((item) => (
            <span
              key={item.path}
              className={`media-header__nav-link${item.path === "/media" ? " is-active" : ""}`}
              aria-disabled="true"
            >
              {item.label}
            </span>
          ))}
        </nav>
      </div>
    </header>
  );
}