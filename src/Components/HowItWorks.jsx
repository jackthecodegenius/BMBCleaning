import React from "react";
import "./HowItWorks.css";

export default function HowItWorks() {
  const steps = [
    {
      number: "1",
      title: "Get an instant quote",
      description:
        "Enter a few details about your home online. Get an obligation-free quote in 90 seconds.",
      icon: (
        <svg
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
          <path d="M5 3v4" />
          <path d="M19 17v4" />
          <path d="M3 5h4" />
          <path d="M17 19h4" />
        </svg>
      ),
    },
    {
      number: "2",
      title: "Schedule your clean",
      description:
        "Pick a day and time that works for you. We'll show up with everything we need.",
      icon: (
        <svg
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
          <line x1="16" x2="16" y1="2" y2="6" />
          <line x1="8" x2="8" y1="2" y2="6" />
          <line x1="3" x2="21" y1="10" y2="10" />
          <path d="m9 16 2 2 4-4" />
        </svg>
      ),
    },
    {
      number: "3",
      title: "Enjoy your spotless home",
      description:
        "Relax and enjoy your clean space. We handle the dirty work so you don't have to.",
      icon: (
        <svg
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
          <polyline points="9 22 9 12 15 12 15 22" />
        </svg>
      ),
    },
  ];

  return (
    <section className="how-it-works-section">
      <div className="how-it-works-container">
        <h2 className="how-it-works-heading">
          3 simple steps to a cleaner home
        </h2>

        <div className="steps-flow-grid">
          {/* Connecting line behind steps */}
          <div className="steps-connecting-line"></div>

          {steps.map((step, index) => (
            <div className="step-column" key={index}>
              <div className="step-icon-circle">{step.icon}</div>
              <span className="step-number-label">{step.number}</span>
              <h3 className="step-title">{step.title}</h3>
              <p className="step-desc">{step.description}</p>
            </div>
          ))}
        </div>

        <div className="how-it-works-cta-wrapper">
          <button className="how-it-works-btn">Get an Instant Quote</button>
          <p className="how-it-works-subtext">
            · No credit card required · We won't spam you with follow-up calls.
          </p>
        </div>
      </div>
    </section>
  );
}
