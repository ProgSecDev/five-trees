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
        <div className="media-header__content">
          <h1 className="media-header__title">
            <span>EVERY SLICE TELLS A STORY</span>
            <span>OF TRADITIONAL</span>
          </h1>
        </div>
      </div>
    </header>
  );
}