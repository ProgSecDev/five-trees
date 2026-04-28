import React from "react";
import "./Section-2.css";

import image1 from "../../assets/Media/media-section2-image1.png";
import image2 from "../../assets/Media/media-section2-image2.png";

export default function Section2() {
  const images = [
    {
      id: 1,
      src: image1,
      alt: "Cheese slices on a wooden board",
    },
    {
      id: 2,
      src: image2,
      alt: "Sandwiches with cheese and tomato",
    },
  ];

  return (
    <section className="section-2">
      <div className="section-2__grid">
        {images.map((image, index) => (
          <div className="section-2__item" key={image.id || index}>
            <img
              src={image.src}
              alt={image.alt || `section image ${index + 1}`}
              className="section-2__image"
            />
          </div>
        ))}
      </div>
    </section>
  );
}