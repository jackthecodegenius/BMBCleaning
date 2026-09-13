import React from "react";
import "./PricingCalculator.css";

export default function PricingCalculator() {
  const pricingTiers = [
    {
      price: "£25/hr",
      subtitleEst: "e.g., ~£75 total (~3 hours for 1 worker)",
      title: "Deep Clean",
      items: ["Kitchen", "1 Bath", "1 Bed"],
    },
    {
      price: "£25/hr",
      subtitleEst: "e.g., ~£150 total (~3 hours for 2 workers)",
      title: "Deep Clean",
      items: ["Kitchen", "2 Baths", "2 Beds"],
      isHighlighted: true,
    },
    {
      price: "£25/hr",
      subtitleEst: "e.g., ~£200 total (~4 hours for 2 workers)",
      title: "Deep Clean",
      items: ["Kitchen", "2+ Baths", "3+ Beds"],
    },
  ];

  return (
    <section className="pricing-calculator-section">
      <div className="pricing-calc-container">
        <div className="pricing-header-box">
          <h3 className="pricing-section-title">
            How to price your home clean
          </h3>
          <p className="pricing-section-subtitle">
            Transparent pricing charged at{" "}
            <strong className="highlight-rate">£25/hr per worker</strong>.
            Estimated totals based on space:
          </p>
        </div>

        <div className="pricing-chart-stack">
          {pricingTiers.map((tier, index) => (
            <div
              className={`pricing-chart-row ${tier.isHighlighted ? "pricing-row-highlight" : ""}`}
              key={index}
            >
              <div className="pricing-price-group">
                <div className="pricing-price-tag">{tier.price}</div>
                <div className="pricing-est-label">{tier.subtitleEst}</div>
              </div>

              <div className="pricing-tier-name">{tier.title}</div>

              {/* Leveled Columns Container */}
              <div className="pricing-features-grid">
                <div className="pricing-feature-item">
                  <span className="pricing-check">✓</span> {tier.items[0]}
                </div>
                <div className="pricing-feature-item">
                  <span className="pricing-check">✓</span> {tier.items[1]}
                </div>
                <div className="pricing-feature-item">
                  <span className="pricing-check">✓</span> {tier.items[2]}
                </div>
              </div>
            </div>
          ))}
        </div>

        <p className="pricing-subnote">
          * All cleaning is billed at £25 per hour per worker. Final duration
          and total price may vary based on property condition. Any add-ons are
          set prices, not per hour.
        </p>

        {/* ==========================================
            WHAT'S INCLUDED & ADD-ONS CARD BOX
            ========================================== */}
        <div className="included-card-box">
          <h3 className="included-main-title">What's Included & Add-ons?</h3>
          <div className="included-grid-columns">
            {/* Left Column */}
            <div className="included-column">
              <div className="included-item">
                <span className="included-check">✓</span>
                <div>
                  <strong>Cleaning supplies:</strong> fully equipped including
                  professional vacuum & mop.
                </div>
              </div>

              <div className="included-item">
                <span className="included-check">✓</span>
                <div>
                  <strong>Kitchen:</strong> sinks, counters, hob exterior,
                  microwave, and appliance exteriors wiped down.
                </div>
              </div>

              <div className="included-item">
                <span className="included-check">✓</span>
                <div>
                  <strong>Bedrooms:</strong> making beds, dusting surfaces,
                  mirror cleaning, and general tidy-up.
                </div>
              </div>

              <div className="included-item">
                <span className="included-check">✓</span>
                <div>
                  <strong>Every Room:</strong> thorough organising, high & low
                  dusting, skirting boards, and vacuuming.
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="included-column">
              <div className="included-item">
                <span className="included-check">✓</span>
                <div>
                  <strong>Bathrooms:</strong> sanitising toilets, scrubbing
                  sinks, showers, bathtubs, and polishing mirrors.
                </div>
              </div>

              <div className="included-item">
                <span className="included-star">★</span>
                <div>
                  <strong>Carpet Deep Clean:</strong>{" "}
                  <span className="addon-price-tag">£120</span> — professional
                  deep shampooing and stain extraction.
                </div>
              </div>

              <div className="included-item">
                <span className="included-star">★</span>
                <div>
                  <strong>Patio or Roof Clean:</strong>{" "}
                  <span className="addon-price-tag">£150 each</span> — thorough
                  patio pressure washing or roof debris clearance.
                </div>
              </div>
            </div>
          </div>

          <p className="included-disclaimer">
            * Add-ons are flat prices but may vary depending on condition or
            size.
          </p>
        </div>
      </div>
    </section>
  );
}
