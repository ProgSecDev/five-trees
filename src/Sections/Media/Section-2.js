import React, { useState } from "react";
import "./Section-2.css";
import { NavLink } from "react-router-dom";

import product1 from "../../assets/Media/media-reels.jpeg";
import product2 from "../../assets/Media/media-recipes.jpeg";
import product3 from "../../assets/Media/media-photos.jpg";

// const products = [
//   { id: 1, title: "Premium\nHalloumi Cheese", image: product1, link: "/product" },
//   { id: 2, title: "Authentic - PDO", image: product2, link: "/product#authentic" },
//   { id: 3, title: "Traditional\nCypriot PDO Cheese", image: product3, link: "/product#traditional" },
// ];

const products = [
  { id: 1, title: "Reels", image: product1 },
  { id: 2, title: "Recipes", image: product2 },
  { id: 3, title: "Photos", image: product3 },
];

function Section2({ items = products }) {
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
    <section className="section-2" id="products-slider">
      <div className="section-2__container">
        <button
          type="button"
          className="section-2__arrow section-2__arrow--left"
          onClick={goPrev}
          aria-label="Previous product"
        >
          <span>&larr;</span>
        </button>

        <div className="section-2__cards">
          {getVisibleCards().map((item) => (
            <article
              key={`${item.id}-${item.position}`}
              className={`section-2__card section-2__card--${item.position}`}
            >
              <div className="section-2__image-wrap">
                <img
                  src={item.image}
                  alt={item.title.replace("\n", " ")}
                  className="section-2__image"
                />
              </div>

              <div className="section-2__label">
                <NavLink to={item.link} className="section-2__title-link">
                  <h3 className="section-2__title">
                    {item.title.split("\n").map((line, index, arr) => (
                      <React.Fragment key={`${item.id}-${index}`}>
                        {line}
                        {index < arr.length - 1 && <br />}
                      </React.Fragment>
                    ))}
                  </h3>
                </NavLink>
              </div>
            </article>
          ))}
        </div>

        <button
          type="button"
          className="section-2__arrow section-2__arrow--right"
          onClick={goNext}
          aria-label="Next product"
        >
          <span>&rarr;</span>
        </button>
      </div>

      <div className="section-2__dots">
        {items.map((_, index) => (
          <button
            key={index}
            type="button"
            className={`section-2__dot ${index === activeIndex ? "section-2__dot--active" : ""
              }`}
            onClick={() => setActiveIndex(index)}
            aria-label={`Go to product ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}

export default Section2;