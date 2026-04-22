import React from "react";
import "./Section-2.css";
import section2img from "../../assets/HomePage/section2img.png";

function Section2({
  image = section2img,
  title = "HALLOUMI: THE TASTE OF CYPRUS",
  description = `Halloumi is Cyprus’s most iconic cheese, crafted through generations of tradition. Known for its unique ability to be grilled or fried without melting, it offers a perfect balance, crispy on the outside, soft and rich on the inside. With its fresh, slightly salty flavor and subtle hint of mint, halloumi delivers an authentic Mediterranean experience. Protected within the European Union, true halloumi is produced exclusively in Cyprus, preserving its quality and heritage.`,
}) {
  return (
    <section className="section-two" id="story">
      <div className="section-two__image-wrap">
        <img src={image} alt={title} className="section-two__image" />

        <div className="section-two__overlay">
          <div className="section-two__title-bar">
            <h2 className="section-two__title">{title}</h2>
          </div>

          <div className="section-two__content">
            <p className="section-two__description">{description}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Section2;