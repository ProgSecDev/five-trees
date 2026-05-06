import React from "react";
import "./contactusHeader.css";
import contactHeroBg from "../../assets/Contact US/contactHeroBg.png";

export default function ContactHeader({
  backgroundImage = contactHeroBg,
  heading = "CONTACT US",
  subheading = "WE'D LOVE TO TALK TO YOU",
}) {
  return (
    <section
      className="contact-hero"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="contact-hero__overlay">
        <div className="contact-hero__content animate-hero">
          <h1 className="contact-hero__heading">{heading}</h1>
          <h1 className="contact-hero__subheading">{subheading}</h1>
        </div>
      </div>
    </section>
  );
}