import React, { useState } from "react";
import "./ServicesGrid.css";

export default function ServicesGrid() {
  const [activeVideo, setActiveVideo] = useState(null);

  const services = [
    {
      title: "Regular Cleaning",
      description:
        "Ongoing house cleaning designed to help maintain a cleaner home week to week or fortnight to fortnight.",
      badge: "Best for recurring upkeep",
      videoUrl: "https://www.instagram.com/p/C_bAcPBMqtQ/embed", // Replace with your public Instagram reel/video URL
    },
    {
      title: "Deep Cleaning",
      description:
        "A more detailed clean for homes that need extra attention before returning to a better everyday standard.",
      badge: "Best for a detailed reset",
      videoUrl: "https://www.instagram.com/p/C-_Ax0DsT6N/embed",
    },
    {
      title: "Patio Cleaning",
      description:
        "High-pressure washing and surface restoration to clear away dirt, moss, and weather wear from your outdoor spaces.",
      badge: "Best for outdoor refreshment",
      videoUrl: "https://www.instagram.com/p/C_jDKHTsLHa/embed",
    },
    {
      title: "Roof Cleaning",
      description:
        "Safe and thorough removal of debris, stains, and buildup to protect your roof and boost curb appeal.",
      badge: "Best for property protection",
      videoUrl: "https://www.instagram.com/p/C_n7dJCsvHN/embed",
    },
  ];

  return (
    <section className="services-overview-section">
      <div className="services-overview-container">
        {/* Header content */}
        <div className="services-header-box">
          <span className="services-subtitle">SERVICE OVERVIEW</span>
          <h2 className="services-title">
            Explore Our Residential Cleaning Services
          </h2>
          <p className="services-lead-text">
            From ongoing upkeep to detailed resets, empty homes and outdoor
            care, BMB Cleaning offers structured residential services across
            Liverpool, so you can choose the right fit for your home.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="services-grid-cards">
          {services.map((service, index) => (
            <div className="service-item-card" key={index}>
              {/* Empty placeholder picture box */}
              <div className="service-img-placeholder">
                <span className="placeholder-text">Image Coming Soon</span>
              </div>

              <div className="service-card-body">
                <h3 className="service-card-title">{service.title}</h3>
                <p className="service-card-desc">{service.description}</p>

                <div className="service-badge-pill">✓ {service.badge}</div>

                <button
                  className="watch-video-link"
                  onClick={() => setActiveVideo(service.videoUrl)}
                >
                  Watch Video <span className="arrow-icon">→</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Video Popup Modal */}
      {activeVideo && (
        <div
          className="video-modal-overlay"
          onClick={() => setActiveVideo(null)}
        >
          <div
            className="video-modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="modal-close-btn"
              onClick={() => setActiveVideo(null)}
            >
              ✕
            </button>
            <div className="video-container-wrapper">
              <iframe
                src={activeVideo}
                title="Instagram Video Player"
                className="instagram-iframe-player"
                frameBorder="0"
                allow="encrypted-media"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
