// Sections/HomePage/Section-5.js
import React, { useState } from "react";
import "./home-section-5.css";
import { NavLink } from "react-router-dom";

import product1 from "../../assets/HomePage/Section5-Card1.png";
import product2 from "../../assets/HomePage/halloumi with salad.png";
import product3 from "../../assets/HomePage/Section5-Card3.png";

const products = [
  { id: 1, title: "Premium\nHalloumi Cheese", image: product1, link: "/product" },
  { id: 2, title: "Authentic - PDO",          image: product2, link: "/product#authentic" },
  { id: 3, title: "Traditional\nCypriot PDO Cheese", image: product3, link: "/product#traditional" },
];

function HomeSection5({ items = products }) {
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
    <section className="home-section-five" id="products-slider">
      <div className="home-section-five__container">
        <button
          type="button"
          className="home-section-five__arrow home-section-five__arrow--left"
          onClick={goPrev}
          aria-label="Previous product"
        >
          <span>&larr;</span>
        </button>

        <div className="home-section-five__cards">
          {getVisibleCards().map((item) => (
            <article
              key={`${item.id}-${item.position}`}
              className={`home-section-five__card home-section-five__card--${item.position}`}
            >
              <div className="home-section-five__image-wrap">
                <img
                  src={item.image}
                  alt={item.title.replace("\n", " ")}
                  className="home-section-five__image"
                />
              </div>

              <div className="home-section-five__label">
                 <NavLink to={item.link} className="home-section-five__title-link">
    <h3 className="home-section-five__title">
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
          className="home-section-five__arrow home-section-five__arrow--right"
          onClick={goNext}
          aria-label="Next product"
        >
          <span>&rarr;</span>
        </button>
      </div>

      <div className="home-section-five__dots">
        {items.map((_, index) => (
          <button
            key={index}
            type="button"
            className={`home-section-five__dot ${
              index === activeIndex ? "home-section-five__dot--active" : ""
            }`}
            onClick={() => setActiveIndex(index)}
            aria-label={`Go to product ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}

export default HomeSection5;