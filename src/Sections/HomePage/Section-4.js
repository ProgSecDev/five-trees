import React, { useEffect, useRef } from "react";
import "./Section-4.css";
import processImg from "../../assets/HomePage/Section4-Img.png";

function Section4({
  image = processImg,
  sideTitle = "OUR PROCESS",
  sections = [
    {
      title: "Packaging Solutions",
      text: <>We source premium Halloumi, olive oil, and olive products <br />crafted using traditional Cypriot methods, ensuring quality, <br />authenticity, and consistency.</>,
    },
    {
      title: "Authentic Sources",
      text: <>Our products are carefully packed using vacuum-<br />sealed or bulk container options to ensure <br />freshness, quality, and safe transport. Customized <br />packaging solutions are available to meet specific <br />client and market requirements.</>,
    },
    {
      title: "Quality & Certification",
      text: <>Certified under IFS Food and FSSC 22000 <br />standards, we ensure the highest levels of <br />food safety, quality assurance, and full <br />compliance with international regulations.</>,
    },
  ],
}) {
  const leftRef  = useRef(null);
  const rightRef = useRef(null);

  useEffect(() => {
    const targets = [leftRef.current, rightRef.current].filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    targets.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="section-four" id="media">
      <div className="section-four__container">

        {/* LEFT — headings + text */}
        <div className="section-four__left" ref={leftRef}>
          <div className="section-four__side-title">
            <span>{sideTitle}</span>
          </div>

          <div className="section-four__content">
            {sections.map((section, index) => (
              <div
                key={`${section.title}-${index}`}
                className="section-four__block"
                style={{ "--block-index": index }}
              >
                <h2 className="section-four__heading">{section.title}</h2>
                <p className="section-four__text">{section.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT — image slices */}
        <div className="section-four__right" ref={rightRef}>
          <div className="section-four__image-stack">
            {["top", "middle", "bottom"].map((pos, i) => (
              <div
                key={pos}
                className={`section-four__slice section-four__slice--${pos}`}
                style={{ "--slice-index": i }}
              >
                <img src={image} alt="Process" className="section-four__image" />
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

export default Section4;