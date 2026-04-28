import React from "react";
import "./Section-4.css";

import image1 from "../../assets/Media/media-section4-grid-image1.png";
import image2 from "../../assets/Media/media-section4-grid-image2.png";
import image3 from "../../assets/Media/media-section4-grid-image3.png";
import image4 from "../../assets/Media/media-section4-grid-image4.png";

export default function Section4() {
  const images = [
    { id: 1, src: image1, alt: "Stacked white cheese cubes" },
    { id: 2, src: image2, alt: "Grilled cheese with red peppers on a plate" },
    { id: 3, src: image3, alt: "Cheese slices served with greens on a plate" },
    { id: 4, src: image4, alt: "Fresh salad with cheese cubes in a white bowl" },
  ];

  return (
    <section className="section-4">
      <div className="section-4__grid">
        {images.map((image, index) => (
          <div className="section-4__item" key={image.id || index}>
            <img
              src={image.src}
              alt={image.alt || `section image ${index + 1}`}
              className="section-4__image"
            />
          </div>
        ))}
      </div>
    </section>
  );
}