// src/Sections/HomePage/homeHeader.js
import React from "react";
import "./mediaHeader.css";
import mediaHeader from "../../assets/Media/media-header.png";

export default function MediaHeader({ backgroundImage = mediaHeader }) {

  return (
    <header
      className="media-header"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0)), url(${backgroundImage})`,
      }}
    >
      <div className="media-header__overlay">
      </div>
    </header>
  );
}