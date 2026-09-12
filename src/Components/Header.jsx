import React from "react";
import "./Header.css";
import logoImg from "../../images/bmblogo.jpg";

export default function Header({ onNavigateHome, onOpenContact, currentView }) {
  return (
    <header className="site-header">
      <div className="header-container">
        {/* Left Side: Logo & Brand */}
        <div className="header-left">
          <a
            href="/"
            className="logo"
            onClick={(e) => {
              e.preventDefault();
              onNavigateHome();
            }}
          >
            <img src={logoImg} alt="BMB Cleaning Logo" className="logo-img" />
            <span className="brand-text">BMB Cleaning</span>
          </a>
        </div>

        {/* Right Navigation Group */}
        <div className="header-right-group">
          {/* Only show Services, Pricing, and Reviews when on the home view */}
          {currentView === "home" && (
            <nav className="nav-links">
              <a href="#services" onClick={onNavigateHome}>
                Services
              </a>
              <a href="#pricing" onClick={onNavigateHome}>
                Pricing
              </a>
              <a href="#reviews" onClick={onNavigateHome}>
                Reviews
              </a>
            </nav>
          )}

          <a
            href="#quote"
            className="quote-btn"
            onClick={(e) => {
              e.preventDefault();
              onOpenContact();
            }}
          >
            Free Quote
          </a>
        </div>
      </div>
    </header>
  );
}
