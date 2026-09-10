import React from "react";
import "./PricingCalculator.css";

export default function PricingCalculator() {
  const pricingTiers = [
    {
      price: "£125",
      title: "Standard Clean",
      items: ["Kitchen", "1 Bath", "1 Bed"],
    },
    {
      price: "£150",
      title: "Medium Space",
      items: ["Kitchen", "2 Baths", "2 Beds"],
      isHighlighted: true,
    },
    {
      price: "£175",
      title: "Large Family",
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
            Use the chart below to estimate pricing based on your space.
          </p>
        </div>

        <div className="pricing-chart-stack">
          {pricingTiers.map((tier, index) => (
            <div
              className={`pricing-chart-row ${tier.isHighlighted ? "pricing-row-highlight" : ""}`}
              key={index}
            >
              <div className="pricing-price-tag">{tier.price}</div>
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
          * Additional rooms or bathrooms auto-adjust at +£25 each
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
                  <strong>Every Room:</strong> thorough organizing, high & low
                  dusting, skirting boards, and vacuuming.
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="included-column">
              <div className="included-item">
                <span className="included-check">✓</span>
                <div>
                  <strong>Bathrooms:</strong> sanitizing toilets, scrubbing
                  sinks, showers, bathtubs, and polishing mirrors.
                </div>
              </div>

              <div className="included-item">
                <span className="included-star">★</span>
                <div>
                  <strong>Deep Clean Add-on:</strong>{" "}
                  <span className="addon-price-tag">+£35</span> — intensive
                  heavy-duty scrubbing for neglected or buildup areas.
                </div>
              </div>

              <div className="included-item">
                <span className="included-star">★</span>
                <div>
                  <strong>Oven Clean Add-on:</strong>{" "}
                  <span className="addon-price-tag">+£35</span> — deep internal
                  degreasing of racks, glass, and walls.
                </div>
              </div>

              <div className="included-item">
                <span className="included-star">★</span>
                <div>
                  <strong>Specialist Add-ons:</strong>{" "}
                  <span className="addon-price-tag">+£50 each</span> — Carpet
                  shampooing, Patio pressure washing, or Roof debris cleaning.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
