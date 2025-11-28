import React from "react";
import "../styles/About.css";

const About = () => {
  return (
    <section id="about" className="about">
      <div className="about-inner">
        <div className="about-header">
          <span className="section-label">Who We Are</span>
          <h2>About BlushFrame</h2>
          <p className="about-text">
            BlushFrame is a modern clothing brand built around minimal elegance,
            soft tones, and timeless fashion. Our collections are designed for
            women who value comfort, style, and confidence in every outfit.
          </p>
        </div>

        <div className="about-cards">
          <div className="info-card">
            <span className="info-tag">Card 1</span>
            <div className="info-icon">🌸</div>
            <h3>Premium Fabrics</h3>
            <p>Soft, breathable and high-quality materials that feel good all day.</p>
          </div>

          <div className="info-card">
            <span className="info-tag">Card 2</span>
            <div className="info-icon">📐</div>
            <h3>Minimal Designs</h3>
            <p>Timeless cuts crafted for everyday elegance and easy styling.</p>
          </div>

          <div className="info-card">
            <span className="info-tag">Card 3</span>
            <div className="info-icon">💎</div>
            <h3>Affordable Luxury</h3>
            <p>Premium looks without the premium price tag.</p>
          </div>

          <div className="info-card">
            <span className="info-tag">Card 4</span>
            <div className="info-icon">🚚</div>
            <h3>Fast Delivery</h3>
            <p>Quick, island-wide shipping for your favourite pieces.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
