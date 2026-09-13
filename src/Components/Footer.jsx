import React from "react";
import "./Footer.css";
import logoImg from "../../images/bmblogo.jpg";

export default function Footer({
  onOpenTerms,
  onOpenPrivacy,
  onOpenContact,
  onNavigateHome,
}) {
  return (
    <footer className="footer-main-section">
      <div className="footer-main-container">
        <div className="footer-grid">
          <div className="footer-col brand-col">
            <div className="footer-brand-row">
              <a
                href="/"
                className="footer-logo-link"
                onClick={(e) => {
                  e.preventDefault();
                  window.location.href = "/";
                }}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  textDecoration: "none",
                }}
              >
                <img
                  src={logoImg}
                  alt="BMB Cleaning Logo"
                  className="footer-logo-sm"
                />
                <span className="footer-brand-title">BMB Cleaning</span>
              </a>
            </div>
            <ul className="footer-simple-list">
              <li>
                <a href="#services" onClick={onNavigateHome}>
                  Services
                </a>
              </li>
              <li>
                <a href="#pricing" onClick={onNavigateHome}>
                  Pricing
                </a>
              </li>
              <li>
                <a href="#reviews" onClick={onNavigateHome}>
                  Reviews
                </a>
              </li>
            </ul>
            <a
              href="#quote"
              className="footer-signin-btn"
              onClick={(e) => {
                e.preventDefault();
                onOpenContact();
              }}
            >
              Free Quote
            </a>
          </div>

          <div className="footer-col">
            <h4>Top Zones</h4>
            <ul className="footer-simple-list">
              <li>
                <span>Liverpool City Centre</span>
              </li>
              <li>
                <span>Everton & Anfield</span>
              </li>
              <li>
                <span>Walton & Bootle</span>
              </li>
              <li>
                <span>Wavertree</span>
              </li>
              <li>
                <span>Aigburth</span>
              </li>
              <li>
                <span>Woolton & Gateacre</span>
              </li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Top Postcodes</h4>
            <ul className="footer-simple-list">
              <li>
                <span>L1, L2, L3</span>
              </li>
              <li>
                <span>L8, L15, L17</span>
              </li>
              <li>
                <span>L18, L19, L25</span>
              </li>
              <li>
                <span>Full L1 – L24 Coverage</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-rule"></div>

        <div className="footer-sub-row">
          <div className="footer-sub-links">
            <span className="footer-brand-name">BMB Cleaning</span>
            <button onClick={onOpenTerms} className="footer-link-button">
              Terms & Conditions
            </button>
            <button onClick={onOpenPrivacy} className="footer-link-button">
              Privacy Policy
            </button>
          </div>

          {/* Social Icons (Instagram only) */}
          <div className="footer-social-icons">
            <a
              href="https://www.instagram.com/bmbcleaning/"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social-btn"
              aria-label="Instagram"
            >
              <svg
                width="20"
                height="20"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>
          </div>
        </div>

        <div className="footer-disclaimer">
          <p>
            Online appointment required. 24-hour cancellation policy applies.
            Professional residential cleaning across Liverpool L1 to L24.
          </p>
        </div>
      </div>
    </footer>
  );
}
