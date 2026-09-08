import React from "react";
import "./Header.css";
import logoImg from "../../images/bmblogo.jpg";

export default function Header() {
  return (
    <header className="site-header">
      <div className="header-container">
        {/* Left Side: Logo & Main Navigation */}
        <div className="header-left">
          <a href="/" className="logo">
            <img src={logoImg} alt="BMB Cleaning Logo" className="logo-img" />
            BMB Cleaning
          </a>
          <nav className="nav-links">
            <a href="/pricing">Pricing</a>
            <a href="/reviews">Reviews</a>
          </nav>
        </div>

        {/* Right Side: Free Quote Action Button */}
        <div className="header-right">
          <a href="#quote" className="quote-btn">
            Free quote
          </a>
        </div>
      </div>
    </header>
  );
}
