import React from "react";
import "./Hero.css";
import cleaningImage from "../../images/CleaningWoman.webp";

function Hero({ onOpenContact }) {
  return (
    <section className="hero-section">
      <div className="hero-container">
        <div className="hero-split-wrapper">
          {/* Left Side: Clean Split Image (Hidden on mobile via CSS) */}
          <div className="hero-image-side">
            <div className="hero-image-container">
              <img
                src={cleaningImage}
                alt="BMB Cleaning Professional"
                className="hero-cleaning-img"
              />
            </div>
          </div>

          {/* Right Side: Clean Content & Quote Box */}
          <div className="hero-content-side">
            <div className="hero-content-box">
              <h1 className="hero-title">
                Get A Free Quote <br />
                Today.
              </h1>
              <p className="hero-description">
                Get a fast, free estimate from our top-rated professional
                cleaning team.
              </p>
              <p className="hero-subtext">
                Book professional Deep Cleans, Carpet Cleaning, Patio Pressure
                Washing, and Roof Care solutions in your area.
              </p>

              <div className="hero-zip-container">
                <span className="zip-label">Get in touch now:</span>
                <div className="zip-input-group">
                  <a
                    href="#quote"
                    className="zip-go-btn"
                    onClick={(e) => {
                      e.preventDefault();
                      onOpenContact();
                    }}
                  >
                    Free Quote
                  </a>
                </div>

                {/* Trust Checkmarks Micro-Element & Service Area Subtext */}
                <div className="hero-trust-points">
                  <span>
                    ✓ 100% Satisfaction Guaranteed ✓ Fully Insured ⭐ 5.0 Star
                    Rated
                  </span>
                </div>
                <div className="hero-location-subtext">
                  <svg
                    className="hero-location-icon"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="#ffc72c"
                    width="14"
                    height="14"
                  >
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                  </svg>
                  <span>Proudly serving homes from L1 to L24</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
