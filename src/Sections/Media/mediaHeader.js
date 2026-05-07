import React from "react";
import "./mediaHeader.css";
import mediaHeader from "../../assets/Media/media-header.jpg";

export default function MediaHeader({ backgroundImage = mediaHeader }) {
  return (
    <header
      className="media-header"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="media-header__overlay">
        <div className="media-header__content animate-hero">
          <h1 className="media-header__title">
            <span className="media-header__line">EVERY SLICE TELLS</span>
            <span className="media-header__line">A STORY</span>
            <span className="media-header__line">OF TRADITIONAL</span>
          </h1>
        </div>
      </div>
    </header>
  );
}