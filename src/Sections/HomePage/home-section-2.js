import React, { useEffect, useRef } from "react";
import "./home-section-2.css";
import section2img from "../../assets/HomePage/section2img.png";

function HomeSection2({
  image = section2img,
  title = "HALLOUMI: THE TASTE OF CYPRUS",
  description = `Halloumi is Cyprus's most iconic cheese, crafted through generations of tradition. Known for its unique ability to be grilled or fried without melting, it offers a perfect balance, crispy on the outside, soft and rich on the inside. With its fresh, slightly salty flavor and subtle hint of mint, halloumi delivers an authentic Mediterranean experience. Protected within the European Union, true halloumi is produced exclusively in Cyprus, preserving its quality and heritage.`,
}) {
  const sectionRef = useRef(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("is-visible");
          observer.disconnect(); // animate once, then stop observing
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="home-section-two" id="story">
      <div className="home-section-two__image-wrap" ref={sectionRef}>
        <img src={image} alt={title} className="home-section-two__image" />

        <div className="home-section-two__overlay">
          <div className="home-section-two__title-bar">
            <h2 className="home-section-two__title">{title}</h2>
          </div>

          <div className="home-section-two__content">
            <p className="home-section-two__description">{description}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomeSection2;