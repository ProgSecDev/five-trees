// Sections/HomePage/Section-5.js
import React, { useState } from "react";
import "./Section-5.css";

import product1 from "../../assets/HomePage/Section5-Card1.png";
import product2 from "../../assets/HomePage/Section5-Card2.png";
import product3 from "../../assets/HomePage/Section5-Card3.png";

const products = [
  {
    id: 1,
    title: "Premium\nHalloumi Cheese",
    image: product1,
  },
  {
    id: 2,
    title: "Authentic - PDO",
    image: product2,
  },
  {
    id: 3,
    title: "Traditional\nCypriot PDO Cheese",
    image: product3,
  },
];

function Section5({ items = products }) {
  const [activeIndex, setActiveIndex] = useState(1);

  const goPrev = () => {
    setActiveIndex((prev) => (prev === 0 ? items.length - 1 : prev - 1));
  };

  const goNext = () => {
    setActiveIndex((prev) => (prev === items.length - 1 ? 0 : prev + 1));
  };

  const getVisibleCards = () => {
    const prevIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;

    return [
      { ...items[prevIndex], position: "left" },
      { ...items[activeIndex], position: "center" },
      { ...items[nextIndex], position: "right" },
    ];
  };

  return (
    <section className="section-five" id="products-slider">
      <div className="section-five__container">
        <button
          type="button"
          className="section-five__arrow section-five__arrow--left"
          onClick={goPrev}
          aria-label="Previous product"
        >
          <span>&larr;</span>
        </button>

        <div className="section-five__cards">
          {getVisibleCards().map((item) => (
            <article
              key={`${item.id}-${item.position}`}
              className={`section-five__card section-five__card--${item.position}`}
            >
              <div className="section-five__image-wrap">
                <img
                  src={item.image}
                  alt={item.title.replace("\n", " ")}
                  className="section-five__image"
                />
              </div>

              <div className="section-five__label">
                <h3 className="section-five__title">
                  {item.title.split("\n").map((line, index, arr) => (
                    <React.Fragment key={`${item.id}-${index}`}>
                      {line}
                      {index < arr.length - 1 && <br />}
                    </React.Fragment>
                  ))}
                </h3>
              </div>
            </article>
          ))}
        </div>

        <button
          type="button"
          className="section-five__arrow section-five__arrow--right"
          onClick={goNext}
          aria-label="Next product"
        >
          <span>&rarr;</span>
        </button>
      </div>

      <div className="section-five__dots">
        {items.map((_, index) => (
          <button
            key={index}
            type="button"
            className={`section-five__dot ${
              index === activeIndex ? "section-five__dot--active" : ""
            }`}
            onClick={() => setActiveIndex(index)}
            aria-label={`Go to product ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}

export default Section5;