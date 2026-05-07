import React from "react";
import "./about-section-2.css";
import stackedCheeseImage from "../../assets/About US/stacked-cheese.png";
import grilledHalloumiImage from "../../assets/About US/grilled-halloumi-circle.png";

function Section2() {
  return (
    <section className="about-section-2">
      <div className="about-section-2__top-image-wrap" aria-hidden="true">
        <img
          src={stackedCheeseImage}
          alt=""
          className="about-section-2__top-image"
        />
      </div>

      <div className="about-section-2__content">
        <div className="about-section-2__left">
          <div className="about-section-2__circle-frame">
            <div className="about-section-2__circle-inner">
              <img
                src={grilledHalloumiImage}
                alt="Grilled halloumi"
                className="about-section-2__circle-image"
              />
            </div>
          </div>
        </div>

        <div className="about-section-2__right">
          <div className="about-section-2__mission-icon" aria-hidden="true">
            <svg
              viewBox="0 0 72 72"
              className="about-section-2__mission-svg"
              fill="none"
              stroke="#5d7128"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {/* Outer ring */}
              <circle cx="30" cy="40" r="22" strokeWidth="2.8" />
              {/* Second ring */}
              <circle cx="30" cy="40" r="16" strokeWidth="2.8" />
              {/* Third ring */}
              <circle cx="30" cy="40" r="10" strokeWidth="2.8" />
              {/* Inner bullseye dot */}
              <circle cx="30" cy="40" r="4" strokeWidth="2.8" />

              {/* Arrow shaft — from top-right toward center */}
              <line x1="62" y1="10" x2="34" y2="36" strokeWidth="2.8" />

              {/* Arrowhead tip */}
              <polyline points="34,28 34,36 42,36" strokeWidth="2.8" />

              {/* Arrow fletching (tail feathers) */}
              <polyline points="56,10 62,10 62,16" strokeWidth="2.8" />
              <line x1="58" y1="8" x2="64" y2="14" strokeWidth="2.8" />
            </svg>
          </div>

          <h2 className="about-section-2__title">MISSION</h2>

          <div className="about-section-2__card">
            <p className="about-section-2__text">
              To deliver authentic Cypriot halloumi and premium Mediterranean
              products to global markets by combining traditional craftsmanship
              with certified quality standards, ensuring consistency, trust, and
              exceptional taste in every product we offer.
            </p>
          </div>
        </div>
      </div>

    </section>
  );
}

export default Section2;