// src/Sections/HomePage/homeHeader.js
import React from "react";
import "./Section-3.css";
import media_section3_banner from "../../assets/Media/media-section-3-banner.png";

export default function MediaHeader({
  backgroundImage = media_section3_banner
}) {

  return (
    <header
      className="media-banner"
      style={{
        backgroundImage: `linear-gradient(rgba(255,255,255,0.18), rgba(255,255,255,0.18)), url(${backgroundImage})`,
      }}
    >
      <div className="media-banner">
      </div>
    </header>
  );
}