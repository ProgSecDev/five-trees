import React from "react";
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
        backgroundImage: `linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0)), url(${backgroundImage})`,
      }}
    >
      <div className="contact-hero__overlay">
        <nav className="contact-hero__nav" aria-label="Contact page navigation">
          {navItems.map((item) => (
            <span
              key={item.path}
              className={`contact-hero__nav-link${item.path === "/contact" ? " is-active" : ""}`}
              aria-disabled="true"
            >
              {item.label}
            </span>
          ))}
        </nav>

        <div className="contact-hero__content">
          <h1 className="contact-hero__heading">{heading}</h1>
          <h1 className="contact-hero__subheading">{subheading}</h1>
        </div>
      </div>
    </section>
  );
}