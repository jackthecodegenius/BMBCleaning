import React, { useState } from "react";
// ==========================================
// EMAILJS: Commented out for now (can uncomment later)
// import emailjs from "emailjs-com";
// ==========================================
import "./GetInTouch.css";

export default function GetInTouch({ onNavigateHomePricing }) {
  // ==========================================
  // FORM STATE: Commented out since the form is hidden
  // ==========================================
  /*
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    postcode: "",
    message: "",
  });

  const [status, setStatus] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    if (e.target.name === "postcode") {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value.toUpperCase(),
      });
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrorMessage("");

    if (!formData.email.includes("@")) {
      setErrorMessage("Please enter a valid email address containing '@'.");
      return;
    }

    const cleanPhone = formData.phone.replace(/\s+/g, "");
    if (
      cleanPhone &&
      (cleanPhone.length < 10 || cleanPhone.length > 11 || isNaN(cleanPhone))
    ) {
      setErrorMessage("Phone number must be between 10 and 11 digits.");
      return;
    }

    const cleanPostcode = formData.postcode.trim();
    if (!cleanPostcode.startsWith("L")) {
      setErrorMessage(
        "Sorry, we only cover the Liverpool area (postcodes starting with 'L').",
      );
      return;
    }

    setStatus("sending...");

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      phone_number: formData.phone || "Not provided",
      postcode: formData.postcode,
      message: formData.message,
    };

    emailjs
      .send(
        "service_801hf3w",
        "template_tco41qu",
        templateParams,
        "MMxpqSIxhr_KoY-7i",
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          setStatus("success");
          setFormData({
            name: "",
            email: "",
            phone: "",
            postcode: "",
            message: "",
          });
          window.scrollTo({ top: 0, behavior: "smooth" });
        },
        (err) => {
          console.log("FAILED...", err);
          setStatus("error");
          setErrorMessage(
            "Failed to send message. Please try calling us directly.",
          );
        },
      );
  };
  */

  return (
    <div className="git-page-wrapper">
      {/* Top Header Section */}
      <div className="git-header-section">
        <div className="git-badge">Contact Us</div>
        <h1 className="git-main-title">Get In Touch</h1>
        <p className="git-subtitle">
          Have questions about our services or ready to schedule your cleaning?
          <br />
          Chat with us directly on WhatsApp for a fast response.
        </p>
      </div>

      {/* Main 3-Column Grid Container */}
      <div className="git-content-container-single">
        <div className="git-locations-side-centered">
          {/* Card 1: Liverpool Details & WhatsApp Button */}
          <div className="git-location-box git-box-featured">
            <div className="git-box-header">
              <div className="git-icon-badge">📍</div>
              <h3 className="location-title">Liverpool Office</h3>
            </div>
            <div className="location-detail">
              <span className="loc-icon">🏠</span>
              <span>94 Princes Rd, Liverpool, L8 8AD</span>
            </div>
            <div className="location-detail">
              <span className="loc-icon">📞</span>
              <span>07498444504</span>
            </div>

            <div style={{ marginTop: "auto", paddingTop: "12px" }}>
              <a
                href="https://wa.me/447498444504?text=Hi%2C%20I%27m%20interested%20in%20booking%20a%20cleaning%20service."
                target="_blank"
                rel="noopener noreferrer"
                className="git-whatsapp-btn"
              >
                <span className="loc-icon" style={{ fontSize: "1.2rem" }}>
                  💬
                </span>{" "}
                Chat with us on WhatsApp
              </a>
            </div>
          </div>

          {/* Card 2: Response Times */}
          <div className="git-location-box">
            <div className="git-box-header">
              <div className="git-icon-badge">⚡</div>
              <h3 className="location-title">Response Times</h3>
            </div>
            <div
              className="location-detail"
              style={{ alignItems: "flex-start", lineHeight: "1.6" }}
            >
              <span className="loc-icon">⏱️</span>
              <span>
                Expect a lightning-fast response via WhatsApp during regular
                working hours.
              </span>
            </div>
          </div>

          {/* Card 3: Pricing Note */}
          <div className="git-location-box">
            <div className="git-box-header">
              <div className="git-icon-badge">💷</div>
              <h3 className="location-title">Pricing Note</h3>
            </div>
            <div className="location-detail">
              <span className="loc-icon">✨</span>
              <span>Cleaning is charged at £25 per hour per person.</span>
            </div>
            <div className="location-detail">
              <span className="loc-icon">🏷️</span>
              <span>
                Add-ons are priced at flat rates depending on condition.
              </span>
            </div>
            <div className="git-pricing-link-container">
              <a
                href="#pricing"
                onClick={onNavigateHomePricing}
                className="git-pricing-more-link"
              >
                View full pricing details →
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
