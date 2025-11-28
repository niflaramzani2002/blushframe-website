import React from "react";
import "../styles/Hero.css";

import heroBanner from "../images/hero-banner.png";

import topsImg from "../images/cat-tops.jpg";
import dressesImg from "../images/cat-dresses.jpg";
import pantsImg from "../images/cat-pants.jpg";
import blazersImg from "../images/cat-blazers.jpg";
import casualImg from "../images/cat-casual.jpg";

const categories = [
  { name: "Tops", image: topsImg },
  { name: "Dresses", image: dressesImg },
  { name: "Pants", image: pantsImg },
  { name: "Blazers", image: blazersImg },
  { name: "Casual", image: casualImg },
];

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-inner">
        <div className="hero-banner">
          <img
            src={heroBanner}
            alt="BlushFrame hero"
            className="hero-banner-img"
          />
        </div>

        <div className="hero-cta">
          <h1 className="hero-title">Fashion That Frames You.</h1>

          <a href="#collection">
            <button className="primary-btn hero-primary-btn">Explore</button>
          </a>
        </div>

        <div className="hero-categories">
          {categories.map((cat) => (
            <div className="category-card" key={cat.name}>
              <div className="category-image-wrapper">
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="category-image"
                />
              </div>
              <p className="category-label">{cat.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
