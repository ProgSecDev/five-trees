import React from "react";
import "./Section-3.css";
import visionImage from "../../assets/About US/vision-image.png";

function Section3() {
  return (
    <section className="section-3">
      <div className="section-3__decor section-3__decor--top-right" aria-hidden="true" />
      <div className="section-3__decor section-3__decor--bottom-left" aria-hidden="true" />

      <div className="section-3__content">
        <div className="section-3__left">
          <div className="section-3__text-block">
            <div className="section-3__icon" aria-hidden="true">
              <svg viewBox="0 0 64 64" className="section-3__icon-svg">
                <path d="M18 10h28v8c0 9.2-6.8 17-16 18-9.2-1-16-8.8-16-18v-8Z" />
                <path d="M18 14H9v2c0 7.6 4.8 14 12 16" />
                <path d="M46 14h9v2c0 7.6-4.8 14-12 16" />
                <path d="M32 28v10" />
                <path d="M24 46h16" />
                <path d="M22 54h20" />
                <path d="M26 42h12v6H26z" />
                <path d="m32 16 2.4 4.9 5.4.8-3.9 3.8.9 5.4-4.8-2.5-4.8 2.5.9-5.4-3.9-3.8 5.4-.8Z" />
              </svg>
            </div>

            <h2 className="section-3__title">VISION</h2>

            <div className="section-3__card">
              <p className="section-3__text">
                To become a globally recognized leader in premium halloumi and
                Mediterranean food exports, representing the true taste of Cyprus
                while setting new standards in quality, innovation, and customer
                satisfaction.
              </p>
            </div>
          </div>
        </div>

        <div className="section-3__right">
          <div className="section-3__image-ring">
            <img
              src={visionImage}
              alt="Savory pastry"
              className="section-3__image"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Section3;