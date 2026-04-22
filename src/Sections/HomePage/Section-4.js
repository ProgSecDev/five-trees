// Sections/HomePage/Section-4.js
import React from "react";
import "./Section-4.css";

import processImg from "../../assets/HomePage/Section4-Img.png";

function Section4({
  image = processImg,
  sideTitle = "OUR PROCESS",
  sections = [
    {
      title: "Packaging Solutions",
      text:
      <> 
      We source premium Halloumi, olive oil, and olive products <br /> 
      crafted using traditional Cypriot methods, ensuring quality, <br /> 
      authenticity, and consistency.,
    </>
    },
    {
      title: "Authentic Sources",
      text: 
      <>
      Our products are carefully packed using vacuum- <br /> 
      sealed or bulk container options to ensure <br />
      freshness, quality, and safe transport. Customized <br /> 
      packaging solutions are available to meet specific <br /> 
      client and market requirements.",
    </>
    },
    {
      title: "QUALITY & CERTIFICATION",
      text: 
      <>
      Certified under IFS Food and FSSC 22000 <br /> 
      standards, we ensure the highest levels of <br /> 
      food safety, quality assurance, and full <br /> 
      compliance with international regulations.",
    </>
    },
  ],
}) {
  return (
    <section className="section-four" id="media">
      <div className="section-four__container">
        <div className="section-four__left">
          <div className="section-four__side-title">
            <span>{sideTitle}</span>
          </div>

          <div className="section-four__content">
            {sections.map((section, index) => (
              <div key={`${section.title}-${index}`} className="section-four__block">
                <h2 className="section-four__heading">{section.title}</h2>
                <p className="section-four__text">{section.text}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="section-four__right">
          <div className="section-four__image-stack">
            <div className="section-four__slice section-four__slice--top">
              <img src={image} alt="Process" className="section-four__image" />
            </div>

            <div className="section-four__slice section-four__slice--middle">
              <img src={image} alt="Process" className="section-four__image" />
            </div>

            <div className="section-four__slice section-four__slice--bottom">
              <img src={image} alt="Process" className="section-four__image" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Section4;