import React from "react";
import "./WhyUs.css";
import work3Img from "../../images/work-3.jpg";

export default function WhyUs() {
  const differentiators = [
    {
      icon: "✓",
      title: "We show up. Every time.",
      text: "Reliable scheduling across Liverpool. If we ever need to reschedule, we communicate proactively and always deliver.",
    },
    {
      icon: "⏱",
      title: "Genuine convenience",
      text: "Flexible booking and clear communication. No hassle scheduling tailored around your routine.",
    },
    {
      icon: "🛡",
      title: "Local experts you can trust",
      text: "Dedicated, vetted local professionals who take pride in meticulous standards — no random gig workers.",
    },
    {
      icon: "★",
      title: "Quality you can trust",
      text: "High standards from start to finish. If something's not right, we make it right.",
    },
    {
      icon: "♥",
      title: "Family values, professional results",
      text: "We're a proud family-run company based right here in Liverpool. We treat your home like our own.",
      customClass: "heart-card", // Added special class here
    },
  ];

  return (
    <section className="why-us-section">
      <div className="why-us-container">
        {/* Left Column: Heading & Image */}
        <div className="why-us-left-col">
          <div className="why-us-header-box">
            <h2 className="why-us-title">
              The care and consistency Liverpool families recognise
            </h2>
            <p className="why-us-lead">
              BMB Cleaning has been showing up reliably across
              Liverpool—professionally, and on time. When you see our team in
              your neighbourhood, you know your home is in safe hands.
            </p>
          </div>

          <div className="why-us-image-wrapper">
            <img
              src={work3Img}
              alt="BMB Cleaning team at work"
              className="why-us-featured-img"
            />
          </div>
        </div>

        {/* Right Column: What Makes Us Different List */}
        <div className="why-us-right-col">
          <h3 className="why-us-subheading">What makes us different:</h3>

          <div className="why-us-cards-stack">
            {differentiators.map((item, index) => (
              <div
                className={`why-us-card ${item.customClass || ""}`}
                key={index}
              >
                <div className="why-us-icon-box">
                  <span className="why-us-icon">{item.icon}</span>
                </div>
                <div className="why-us-card-content">
                  <h4 className="why-us-card-title">{item.title}</h4>
                  <p className="why-us-card-text">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
