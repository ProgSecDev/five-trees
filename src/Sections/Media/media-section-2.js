import React, { useState } from "react";
import "./media-section-2.css";
import ReelsModal from "./reels-modal";
import PhotosModal from "./photos-modal";

import product1 from "../../assets/Media/media-reels.jpeg";
import product2 from "../../assets/Media/media-recipes.jpeg";
import product3 from "../../assets/Media/media-photos.jpg";

const products = [
  { id: 1, title: "Reels", image: product1, type: "reels" },
  { id: 2, title: "Recipes", image: product2, type: "recipes" }, // not clickable
  { id: 3, title: "Photos", image: product3, type: "photos" },
];

function MediaSection2({ items = products }) {
  const [activeIndex, setActiveIndex] = useState(1);
  const [openModal, setOpenModal] = useState(null); // 'reels' | 'photos' | null

  const goPrev = () =>
    setActiveIndex((p) => (p === 0 ? items.length - 1 : p - 1));
  const goNext = () =>
    setActiveIndex((p) => (p === items.length - 1 ? 0 : p + 1));

  const getVisibleCards = () => {
    const prev = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    const next = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    return [
      { ...items[prev], position: "left" },
      { ...items[activeIndex], position: "center" },
      { ...items[next], position: "right" },
    ];
  };

  const handleCardClick = (type) => {
    if (type === "reels" || type === "photos") setOpenModal(type);
  };

  return (
    <section className="media-section-2" id="products-slider">
      <div className="media-section-2__container">
        <button
          type="button"
          className="media-section-2__arrow media-section-2__arrow--left"
          onClick={goPrev}
          aria-label="Previous product"
        >
          <span>&larr;</span>
        </button>

        <div className="media-section-2__cards">
          {getVisibleCards().map((item) => {
            const isClickable = item.type === "reels" || item.type === "photos";
            return (
              <article
                key={`${item.id}-${item.position}`}
                className={`media-section-2__card media-section-2__card--${item.position} ${
                  isClickable ? "media-section-2__card--clickable" : ""
                }`}
                onClick={() => isClickable && handleCardClick(item.type)}
                role={isClickable ? "button" : undefined}
                tabIndex={isClickable ? 0 : undefined}
                onKeyDown={(e) => {
                  if (isClickable && (e.key === "Enter" || e.key === " ")) {
                    e.preventDefault();
                    handleCardClick(item.type);
                  }
                }}
              >
                <div className="media-section-2__image-wrap">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="media-section-2__image"
                  />
                </div>

                <div className="media-section-2__label">
                  <h3 className="media-section-2__title">{item.title}</h3>
                </div>
              </article>
            );
          })}
        </div>

        <button
          type="button"
          className="media-section-2__arrow media-section-2__arrow--right"
          onClick={goNext}
          aria-label="Next product"
        >
          <span>&rarr;</span>
        </button>
      </div>

      <div className="media-section-2__dots">
        {items.map((_, index) => (
          <button
            key={index}
            type="button"
            className={`media-section-2__dot ${
              index === activeIndex ? "media-section-2__dot--active" : ""
            }`}
            onClick={() => setActiveIndex(index)}
            aria-label={`Go to product ${index + 1}`}
          />
        ))}
      </div>

      <ReelsModal isOpen={openModal === "reels"} onClose={() => setOpenModal(null)} />
      <PhotosModal isOpen={openModal === "photos"} onClose={() => setOpenModal(null)} />
    </section>
  );
}

export default MediaSection2;