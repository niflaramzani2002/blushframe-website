import React from "react";
import "../styles/Navbar.css";
import blushframeLogo from "../images/blushframe.png"; // 👈 add this

const Navbar = () => {
  return (
    <header className="navbar">
      <div className="navbar-content">
        <div className="navbar-left">
          <div className="logo-icon">
            <img
              src={blushframeLogo}
              alt="BlushFrame logo"
              className="logo-img"
            />
          </div>
          <div className="logo-text-wrap">
            <span className="logo-text">BLUSHFRAME</span>
            <span className="logo-sub">Minimal. Soft. Timeless.</span>
          </div>
        </div>

        <nav className="navbar-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#collection">Collection</a>
          <a href="#contact">Contact Us</a>
        </nav>

        <div className="navbar-search">
          <input type="text" placeholder="Search" />
          <span className="search-icon">🔍</span>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
