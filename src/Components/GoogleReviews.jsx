import React from "react";
import "./GoogleReviews.css";

function GoogleReviews() {
  return (
    <section className="google-reviews-section">
      <div className="reviews-container">
        <div className="section-divider"></div>
        <h2 className="section-title">Verified Customer Reviews</h2>

        <div className="verified-badge-banner">
          <div className="badge-icon">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 2L15.09 4.26L18.91 4.26L20.18 7.91L23.27 10.18L21.82 14L23.27 17.82L20.18 20.09L18.91 23.74L15.09 23.74L12 26L8.91 23.74L5.09 23.74L3.82 20.09L0.73 17.82L2.18 14L0.73 10.18L3.82 7.91L5.09 4.26L8.91 4.26L12 2Z"
                fill="#ffc72c"
              />
              <path
                d="M9 12L11 14L15 10"
                stroke="#111111"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div className="badge-text-group">
            <span className="badge-heading">100% Verified Reviews</span>
            <p className="badge-subtext">
              All reviews are from real customers who had a cleaning with BMB
              Cleaning.
            </p>
          </div>
        </div>

        <div
          className="elfsight-app-437bfaaa-4950-4658-ac97-cccb756d00dd"
          data-elfsight-app-lazy
        ></div>
      </div>
    </section>
  );
}

export default GoogleReviews;
