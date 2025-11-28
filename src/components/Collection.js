import React from "react";
import "../styles/Collection.css";

// TOPS product images
import tops1 from "../images/top1.jpg";
import tops2 from "../images/top2.jpg";
import tops3 from "../images/top3.jpg";
import tops4 from "../images/top5.jpg";
import tops5 from "../images/top6.jpg";
import tops6 from "../images/top7.jpg";
import tops7 from "../images/top8.jpg";

// SKIRTS product images
import skirts1 from "../images/skirt1.jpg";
import skirts2 from "../images/skirt2.jpg";
import skirts3 from "../images/skirt3.jpg";
import skirts4 from "../images/skirt4.jpg";
import skirts5 from "../images/skirt5.jpg";
import skirts6 from "../images/skirt6.jpg";
import skirts7 from "../images/skirt7.jpg";

// TROUSERS product images
import trousers1 from "../images/trousers1.jpg";
import trousers2 from "../images/trousers2.jpg";
import trousers3 from "../images/trousers3.jpg";
import trousers4 from "../images/trousers4.jpg";
import trousers5 from "../images/trousers5.jpg";
import trousers6 from "../images/trousers6.jpg";
import trousers7 from "../images/trousers7.jpg";

// DENIMS product images
import denims1 from "../images/denim1.jpg";
import denims2 from "../images/denim2.jpg";
import denims3 from "../images/denim3.jpg";
import denims4 from "../images/denim4.jpg";
import denims5 from "../images/denim5.jpg";
import denims6 from "../images/denim6.jpg";
import denims7 from "../images/denim7.jpg";

const categories = [
  {
    name: "Tops",
    tagline: "Soft basics & statement blouses",
    items: [
      { image: tops1, name: "Top", price: "LKR 4,990" },
      { image: tops2, name: "Top", price: "LKR 4,990" },
      { image: tops3, name: "Top", price: "LKR 4,990" },
      { image: tops4, name: "Top", price: "LKR 4,990" },
      { image: tops5, name: "Top", price: "LKR 4,990" },
      { image: tops6, name: "Top", price: "LKR 4,990" },
      { image: tops7, name: "Top", price: "LKR 4,990" },
    ],
  },
  {
    name: "Skirts",
    tagline: "Flowy, feminine and effortless",
    items: [
      { image: skirts1, name: "Skirt", price: "LKR 5,990" },
      { image: skirts2, name: "Skirt", price: "LKR 5,990" },
      { image: skirts3, name: "Skirt", price: "LKR 5,990" },
      { image: skirts4, name: "Skirt", price: "LKR 5,990" },
      { image: skirts5, name: "Skirt", price: "LKR 5,990" },
      { image: skirts6, name: "Skirt", price: "LKR 5,990" },
      { image: skirts7, name: "Skirt", price: "LKR 5,990" },
    ],
  },
  {
    name: "Trousers",
    tagline: "Tailored comfort for every day",
    items: [
      { image: trousers1, name: "Trousers", price: "LKR 6,990" },
      { image: trousers2, name: "Trousers", price: "LKR 6,990" },
      { image: trousers3, name: "Trousers", price: "LKR 6,990" },
      { image: trousers4, name: "Trousers", price: "LKR 6,990" },
      { image: trousers5, name: "Trousers", price: "LKR 6,990" },
      { image: trousers6, name: "Trousers", price: "LKR 6,990" },
      { image: trousers7, name: "Trousers", price: "LKR 6,990" },
    ],
  },
  {
    name: "Denims",
    tagline: "Classic cuts in modern washes",
    items: [
      { image: denims1, name: "Denims", price: "LKR 7,990" },
      { image: denims2, name: "Denims", price: "LKR 7,990" },
      { image: denims3, name: "Denims", price: "LKR 7,990" },
      { image: denims4, name: "Denims", price: "LKR 7,990" },
      { image: denims5, name: "Denims", price: "LKR 7,990" },
      { image: denims6, name: "Denims", price: "LKR 7,990" },
      { image: denims7, name: "Denims", price: "LKR 7,990" },
    ],
  },
];

const CollectionRow = ({ name, tagline, items }) => (
  <div className="collection-row">
    {/* heading */}
    <div className="collection-row-header">
      <div className="collection-heading-wrap">
        <h3 className="collection-heading">{name}</h3>
        <p className="collection-tagline">{tagline}</p>
      </div>
    </div>

    {/* grid of product cards */}
    <div className="collection-grid">
      {items.map((item, index) => (
        <div className="collection-item" key={index}>
          <div className="collection-item-img-wrap">
            <img
              src={item.image}
              alt={item.name}
              className="collection-item-img"
            />
          </div>
          <div className="collection-item-info">
            <p className="collection-item-name">{item.name}</p>
            <p className="collection-item-price">{item.price}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
);

const Collection = () => {
  return (
    <section id="collection" className="collection">
      <div className="collection-inner">
        <h2 className="collection-title">BlushFrame Collection</h2>
        <p className="collection-intro">
          Explore curated edits of tops, skirts, trousers and denims – designed
          in soft tones and easy silhouettes to frame your everyday style.
        </p>

        {categories.map((cat) => (
          <CollectionRow
            key={cat.name}
            name={cat.name}
            tagline={cat.tagline}
            items={cat.items}
          />
        ))}
      </div>
    </section>
  );
};

export default Collection;
