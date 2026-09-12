import React from "react";
import "./Header.css";
import logoImg from "../../images/bmblogo.jpg";

export default function Header() {
  return (
    <header className="site-header">
      {/* Announcement Bar */}
      {/* <div className="announcement-bar">
        <div className="announcement-content">
          <span className="announcement-badge">Special Offer</span>
          <p>
            Book your carpet or sofa clean today and get a{" "}
            <strong>Free Quote</strong>
          </p>
        </div>
      </div> */}

      {/* Main navigation container */}
      <div className="header-container">
        {/* Left Side: Logo & Brand */}
        <div className="header-left">
          <a href="/" className="logo">
            <img src={logoImg} alt="BMB Cleaning Logo" className="logo-img" />
            <span className="brand-text">BMB Cleaning</span>
          </a>
        </div>

        {/* Right Navigation Links pointing to section IDs */}
        <div className="header-right-group">
          <nav className="nav-links">
            <a href="#services">Services</a>
            <a href="#pricing">Pricing</a>
            <a href="#reviews">Reviews</a>
          </nav>
          <a href="#quote" className="quote-btn">
            Free Quote
          </a>
        </div>
      </div>
    </header>
  );
}
