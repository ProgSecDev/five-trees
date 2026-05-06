// src/Sections/About Us/aboutHeader.js
import React, { useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import "./aboutHeader.css";
import heroImage from "../../assets/About US/aboutHeaderBG.png";

export default function AboutHeader() {
  const aboutRef = useRef(null);

  // IntersectionObserver for the about section (below the fold)
  useEffect(() => {
    const el = aboutRef.current;
    if (!el) return;

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
    return () => observer.disconnect();
  }, []);

  return (
    <section className="about-header">
      <div
        className="about-header__hero"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="about-header__overlay" />

        {/* hero-content animates on mount (always visible on load) */}
        <div className="about-header__hero-content animate-hero">
          <h1 className="about-header__title">{`BOLD TASTE STARTS HERE`}</h1>
          <NavLink to="/product" className="about-header__button">
            View Products
          </NavLink>
        </div>
      </div>

      {/* about section animates when scrolled into view */}
      <div className="about-header__about" ref={aboutRef}>
        <div className="about-header__about-inner">
          <h2 className="about-header__about-title">ABOUT US</h2>
          <p className="about-header__about-text">
            Rooted in Cyprus, Five Trees Global Trading is dedicated to
            delivering authentic, high-quality Mediterranean products to
            international markets. Specializing in halloumi cheese and extra
            virgin olive oil, we partner with trusted local producers to ensure
            excellence, consistency, and sustainability. Driven by tradition and
            guided by modern standards, we bring the true taste of Cyprus to the
            world with integrity and care.
          </p>
        </div>
      </div>
    </section>
  );
}