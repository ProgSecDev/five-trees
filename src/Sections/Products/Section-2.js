// src/Sections/Products/Section-2.js
import React from "react";
import "./Section-2.css";

import sectionLogo from "../../assets/ProductsPage/products-logo.png";

import authenticChili from "../../assets/ProductsPage/Authentic/chili.png";
import authentic1 from "../../assets/ProductsPage/Authentic/cyprus-cheese-with-chili.png";
import authentic2 from "../../assets/ProductsPage/Authentic/mature-halloumi.png";
import authentic3 from "../../assets/ProductsPage/Authentic/cyprus-cheese-lactose-free.png";
import authentic4 from "../../assets/ProductsPage/Authentic/the-art-of-halloumi.png";
import authentic5 from "../../assets/ProductsPage/Authentic/cyprus-cheese-light.png";
import authentic6 from "../../assets/ProductsPage/Authentic/cyprus-cheese-with-basil.png";
import authentic7 from "../../assets/ProductsPage/Authentic/cyprus-cheese-in-slices.png";

import traditionalDecor from "../../assets/ProductsPage/Traditional/grilled-halloumi.png";
import traditional1 from "../../assets/ProductsPage/Traditional/halloumi-with-goats-milk.png";
import traditional2 from "../../assets/ProductsPage/Traditional/halloumi-with-sheep-and-goats-milk.png";
import traditional3 from "../../assets/ProductsPage/Traditional/halloumi-with-sheep-and-goats-milk-blue.png";
import traditional4 from "../../assets/ProductsPage/Traditional/halloumi-pre-sliced.png";

const authenticProducts = [
  { id: 1, image: authentic1, title: "Cyprus Cheese", subtitle: "With Chili" },
  { id: 2, image: authentic2, title: "Mature Halloumi", subtitle: "" },
  { id: 3, image: authentic3, title: "Cyprus Cheese", subtitle: "Lactose Free" },
  { id: 4, image: authentic4, title: "The Art Of", subtitle: "Halloumi" },
  { id: 5, image: authentic5, title: "Cyprus Cheese", subtitle: "Light" },
  { id: 6, image: authentic6, title: "Cyprus Cheese", subtitle: "With Basil" },
  { id: 7, image: authentic7, title: "Cyprus Cheese", subtitle: "In Slices" },
];

const traditionalProducts = [
  { id: 1, image: traditional1, title: "Halloumi", subtitle: "with Goat’s Milk" },
  { id: 2, image: traditional2, title: "Halloumi", subtitle: "with Sheep & Goat’s Milk" },
  { id: 3, image: traditional3, title: "Halloumi", subtitle: "with Sheep & Goat’s Milk" },
  { id: 4, image: traditional4, title: "Halloumi", subtitle: "Pre_Sliced" },
];

function ProductCard({ image, title, subtitle }) {
  return (
    <article className="section2__card">
      <div className="section2__card-image-wrap">
        <img src={image} alt={`${title} ${subtitle}`.trim()} className="section2__card-image" />
      </div>

      <h3 className="section2__card-title">
        <span>{title}</span>
        {subtitle ? <span>{subtitle}</span> : null}
      </h3>
    </article>
  );
}

export default function Section2() {
  const authenticTop = authenticProducts.slice(0, 3);
  const authenticMiddle = authenticProducts.slice(3, 6);
  const authenticBottom = authenticProducts.slice(6);

  const traditionalTop = traditionalProducts.slice(0, 3);
  const traditionalBottom = traditionalProducts.slice(3);

  return (
    <section className="section2">
      <div className="section2__container">
        <header className="section2__header">
          <img src={sectionLogo} alt="" className="section2__logo" aria-hidden="true" />
          <h2 className="section2__heading">OUR PRODUCTS</h2>
        </header>

        <section className="section2__group section2__group--authentic">
          <div className="section2__label">AUTHENTIC - PDO</div>

          <div className="section2__grid section2__grid--three">
            {authenticTop.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>

          <div className="section2__grid section2__grid--three">
            {authenticMiddle.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>

          <div className="section2__grid section2__grid--single">
            {authenticBottom.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>

          <img
            src={authenticChili}
            alt=""
            aria-hidden="true"
            className="section2__decor section2__decor--chili"
          />
        </section>

        <section className="section2__group section2__group--traditional">
          <div className="section2__label">Traditional Cypriot PDO Cheese</div>

          <div className="section2__grid section2__grid--three">
            {traditionalTop.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>

          <div className="section2__grid section2__grid--single">
            {traditionalBottom.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>

          <img
            src={traditionalDecor}
            alt=""
            aria-hidden="true"
            className="section2__decor section2__decor--halloumi"
          />
        </section>
      </div>
    </section>
  );
}