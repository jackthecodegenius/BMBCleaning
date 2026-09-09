import React from "react";
import "./Hero.css";
import cleaningImage from "../../images/CleaningWoman.jpg";

function Hero() {
  return (
    <section className="hero-section">
      <div className="hero-container">
        <div className="hero-card-wrapper">
          <div className="image-container hero-image-container">
            <img
              src={cleaningImage}
              alt="BMB Cleaning Professional"
              className="hero-cleaning-img"
            />
            {/* Floating Review Badge moved here so it can hang outside safely */}
            <div className="hero-floating-badge">
              <div className="badge-avatars">
                <img
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80"
                  alt="Reviewer 1"
                />
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80"
                  alt="Reviewer 2"
                />
                <div className="badge-number-circle">3</div>
              </div>
              <div className="badge-text-content">
                <strong>Rated 5.0</strong>
                <span>by 90+ Local Homeowners in Liverpool</span>
              </div>
            </div>
          </div>

          <div className="hero-content-box">
            <h1 className="hero-title">
              Get a free quote <br />
              today.
            </h1>
            <p className="hero-description">
              Get a fast, free estimate from our top-rated professional cleaning
              team.
            </p>
            <p className="hero-subtext">
              Speak directly with us for professional carpet, rug, and sofa
              cleaning services, plus deep cleaning solutions in your area.
            </p>

            <div className="hero-zip-container">
              <span className="zip-label">Get in touch now:</span>
              <div className="zip-input-group">
                <a
                  href="tel:07498444504"
                  className="zip-go-btn"
                  style={{
                    position: "relative",
                    right: "auto",
                    top: "auto",
                    bottom: "auto",
                    display: "block",
                    textAlign: "center",
                    width: "100%",
                    borderRadius: "50px",
                    padding: "14px 20px",
                    textDecoration: "none",
                  }}
                >
                  Free Quote
                </a>
              </div>
              {/* Trust Checkmarks Micro-Element */}
              <div className="hero-trust-points">
                <span>
                  ✓ 100% Satisfaction Guaranteed ✓ Fully Insured ⭐ 5.0 Star
                  Rated
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
