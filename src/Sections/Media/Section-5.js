// src/Sections/HomePage/homeHeader.js
import React from "react";
import "./Section-5.css";
import media_section5_banner from "../../assets/Media/media-section-5-banner.png";

export default function MediaHeader({
  backgroundImage = media_section5_banner
}) {

  return (
    <header
      className="media-banner5"
      style={{
        backgroundImage: `linear-gradient(rgba(255,255,255,0.18), rgba(255,255,255,0.18)), url(${backgroundImage})`,
      }}
    >
      <div className="media-banner5__overlay">
      </div>
    </header>
  );
}