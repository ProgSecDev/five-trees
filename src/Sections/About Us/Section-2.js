// src/Sections/Section-2.js
import React from "react";
import "./Section-2.css";
import stackedCheeseImage from "../../assets/About US/stacked-cheese.png";
import grilledHalloumiImage from "../../assets/About US/grilled-halloumi-circle.png";

function Section2() {
  return (
    <section className="section-2">
      <div className="section-2__top-image-wrap" aria-hidden="true">
        <img
          src={stackedCheeseImage}
          alt=""
          className="section-2__top-image"
        />
      </div>

      <div className="section-2__content">
        <div className="section-2__left">
          <div className="section-2__circle-frame">
            <div className="section-2__circle-inner">
              <img
                src={grilledHalloumiImage}
                alt="Grilled halloumi"
                className="section-2__circle-image"
              />
            </div>
          </div>
        </div>

        <div className="section-2__right">
          <div className="section-2__mission-icon" aria-hidden="true">
            <svg viewBox="0 0 64 64" className="section-2__mission-svg">
              <circle cx="28" cy="36" r="18" />
              <circle cx="28" cy="36" r="10" />
              <circle cx="28" cy="36" r="3.5" />
              <path d="M28 36 L47 17" />
              <path d="M43 15 L54 10 L49 21 Z" />
              <path d="M47 17 L54 10" />
            </svg>
          </div>

          <h2 className="section-2__title">MISSION</h2>

          <div className="section-2__card">
            <p className="section-2__text">
              To deliver authentic Cypriot halloumi and premium Mediterranean
              products to global markets by combining traditional craftsmanship
              with certified quality standards, ensuring consistency, trust, and
              exceptional taste in every product we offer.
            </p>
          </div>
        </div>
      </div>

      <div className="section-2__shape" aria-hidden="true" />
    </section>
  );
}

export default Section2;