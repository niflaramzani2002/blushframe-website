import React from "react";
import "../styles/Footer.css";
import blushframeLogo from "../images/blushframe.png";

import { FaInstagram, FaFacebookF, FaTiktok, FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <footer id="contact" className="footer">
      <div className="footer-inner">
        <div className="footer-left-block">
          <div className="footer-left-top">
            <div className="footer-logo-row">
              <img
                src={blushframeLogo}
                alt="BlushFrame logo"
                className="footer-logo-img"
              />
              <div className="footer-logo-text-wrap">
                <span className="footer-logo-text">BLUSHFRAME</span>
                <span className="footer-logo-sub">
                  Minimal. Soft. Timeless.
                </span>
              </div>
            </div>


            <div className="footer-email-row">
              <MdEmail className="footer-email-icon" />
              <a
                href="mailto:info@blushframe.lk"
                className="footer-email-link"
              >
                info@blushframe.lk
              </a>
            </div>

            {/* Social icons on the right */}
            <div className="footer-social-row">
              <a href="#" className="social-icon" aria-label="Instagram">
                <FaInstagram />
              </a>
              <a href="#" className="social-icon" aria-label="Facebook">
                <FaFacebookF />
              </a>
              <a href="#" className="social-icon" aria-label="WhatsApp">
                <FaWhatsapp />
              </a>
              <a href="#" className="social-icon" aria-label="TikTok">
                <FaTiktok />
              </a>
            </div>
          </div>
        </div>

        {/*  contact form */}
        <div className="footer-right-block">
          <h4 className="footer-contact-title">Contact Us</h4>
          <span className="footer-heading-underline" />

          <form className="footer-form" onSubmit={handleSubmit}>
            <div className="footer-form-row">
              <input type="text" placeholder="Your name" required />
              <input type="email" placeholder="Your email" required />
            </div>
            <textarea
              rows="3"
              placeholder="Write your message..."
              required
            />
            <button type="submit" className="footer-submit-btn">
              Send Message
            </button>
          </form>
        </div>
      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} BlushFrame. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
