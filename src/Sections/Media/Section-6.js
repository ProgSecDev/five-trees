import React from "react";
import "./Section-6.css";

import image1 from "../../assets/Media/media-section6-grid-image1.png";
import image2 from "../../assets/Media/media-section6-grid-image2.png";
import image3 from "../../assets/Media/media-section6-grid-image3.png";
import image4 from "../../assets/Media/media-section6-grid-image4.png";
import image5 from "../../assets/Media/media-section6-grid-image5.png";
import image6 from "../../assets/Media/media-section6-grid-image6.png";

export default function Section6() {
  const images = [
    { id: 1, src: image1, alt: "Grilled cheese skewers with vegetables" },
    { id: 2, src: image2, alt: "Grilled cheese slices with greens on a plate" },
    { id: 3, src: image3, alt: "Grilled cheese served with lemon and tomatoes" },
    { id: 4, src: image4, alt: "Fresh salad with grilled cheese and orange slices" },
    { id: 5, src: image5, alt: "Grilled cheese pieces with greens" },
    { id: 6, src: image6, alt: "Sandwiches with grilled cheese and vegetables" },
  ];

  return (
    <section className="section-6">
      <div className="section-6__grid">
        {images.map((image, index) => (
          <div className="section-6__item" key={image.id || index}>
            <img
              src={image.src}
              alt={image.alt || `section image ${index + 1}`}
              className="section-6__image"
            />
          </div>
        ))}
      </div>
    </section>
  );
}