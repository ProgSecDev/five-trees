import React, { useEffect, useRef } from "react";
import "./home-section-3.css";

import card1 from "../../assets/HomePage/Section3Card1.png";
import card2 from "../../assets/HomePage/Section3Card2.png";
import card3 from "../../assets/HomePage/Section3Card3.png";

import cardImg1 from "../../assets/HomePage/Section3-Card1-Img.png";
import cardImg2 from "../../assets/HomePage/Section3-Card2-Img.png";
import cardImg3 from "../../assets/HomePage/Section3-Card3-Img.png";

const sectionItems = [
  {
    id: 1,
    title: "20 ft Minimum Order",
    image: cardImg1,
    icon: card1,
    text: "Supplying bulk orders with a minimum of one 20ft container tailored to client needs.",
  },
  {
    id: 2,
    title: "1980 Established",
    image: cardImg2,
    icon: card2,
    text: "A Cyprus based company with 40+ years of expertise in dairy and olive product exports.",
  },
  {
    id: 3,
    title: "20+ Global Markets",
    image: cardImg3,
    icon: card3,
    text: "Trusted supplier for clients across the Emirates, Europe USA, and worldwide.",
  },
];

function HomeSection3({ items = sectionItems }) {
  const itemRefs = useRef([]);

  useEffect(() => {
    const observers = itemRefs.current.map((el) => {
      if (!el) return null;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            el.classList.add("is-visible");
            observer.disconnect();
          }
        },
        { threshold: 0.2 }
      );

      observer.observe(el);
      return observer;
    });

    return () => observers.forEach((obs) => obs?.disconnect());
  }, []);

  return (
    <section className="home-section-three" id="product">
      <div className="home-section-three__container">
        {items.map((item, i) => (
          <article
            key={item.id}
            className="home-section-three__item"
            ref={(el) => (itemRefs.current[i] = el)}
          >
            <div className="home-section-three__icon-wrap">
              <div className="home-section-three__icon-circle" aria-hidden="true">
                <img
                  src={item.icon}
                  alt={item.title}
                  className="home-section-three__icon"
                />
              </div>
            </div>

            <h2 className="home-section-three__title">{item.title}</h2>

            <div className="home-section-three__card">
              <img
                src={item.image}
                alt={item.title}
                className="home-section-three__image"
              />
              <div className="home-section-three__overlay">
                <p className="home-section-three__text">{item.text}</p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default HomeSection3;