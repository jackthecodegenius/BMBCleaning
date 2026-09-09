import React from "react";
import "./Header.css";
import logoImg from "../../images/bmblogo.jpg";
import AnnouncementBar from "./AnnouncementBar"; // If you made it a separate file

export default function Header() {
  return (
    <header className="site-header">
      {/* Announcement Bar sits right here at the very top */}
      <div className="announcement-bar">
        <div className="announcement-content">
          <span className="announcement-badge">Special Offer</span>
          <p>
            Book your carpet or sofa clean today and get a{" "}
            <strong>Free Quote</strong>
          </p>
        </div>
      </div>

      {/* Your main navigation container */}
      <div className="header-container">
        {/* Left Side: Logo & Brand */}
        <div className="header-left">
          <a href="/" className="logo">
            <img src={logoImg} alt="BMB Cleaning Logo" className="logo-img" />
            <span className="brand-text">BMB Cleaning</span>
          </a>
        </div>

        {/* Center/Right Navigation Links matching Homeaglow style */}
        <div className="header-right-group">
          <nav className="nav-links">
            <a href="/pricing">Pricing</a>
            <a href="/reviews">Reviews</a>
          </nav>
          <a href="#quote" className="quote-btn">
            Free Quote
          </a>
        </div>
      </div>
    </header>
  );
}
