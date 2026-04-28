import React from "react";
import { NavLink } from "react-router-dom";
import "./contactusHeader.css";
import contactHeroBg from "../../assets/Contact US/contactHeroBg.png";

export default function ContactHeader({
  backgroundImage = contactHeroBg,
  heading = "CONTACT US",
  subheading = "WE’D LOVE TO TALK TO YOU",
}) {
  const navItems = [
    { label: "HOME", path: "/" },
    { label: "ABOUT US", path: "/about" },
    { label: "PRODUCTS", path: "/product" },
    { label: "MEDIA", path: "/media" },
    { label: "CONTACT US", path: "/contact" },
  ];

  return (
    <section
      className="contact-hero"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.18), rgba(0,0,0,0.18)), url(${backgroundImage})`,
      }}
    >
      <div className="contact-hero__overlay">
        <nav className="contact-hero__nav" aria-label="Contact page navigation">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === "/"}
              className={({ isActive }) =>
                `contact-hero__nav-link${isActive ? " is-active" : ""}`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="contact-hero__content">
          <h2 className="contact-hero__heading">{heading}</h2>
          <h1 className="contact-hero__subheading">{subheading}</h1>
        </div>
      </div>
    </section>
  );
}