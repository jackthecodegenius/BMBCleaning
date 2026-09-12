import React, { useState } from "react";
import emailjs from "emailjs-com";
import "./GetInTouch.css";

export default function GetInTouch({ onNavigateHomePricing }) {
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
    // Automatically uppercase postcodes as they type for a cleaner look
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

    // 1. Email validation: Must include "@"
    if (!formData.email.includes("@")) {
      setErrorMessage("Please enter a valid email address containing '@'.");
      return;
    }

    // 2. Phone number validation: Must be between 10 and 11 digits (if provided)
    const cleanPhone = formData.phone.replace(/\s+/g, ""); // strip spaces
    if (
      cleanPhone &&
      (cleanPhone.length < 10 || cleanPhone.length > 11 || isNaN(cleanPhone))
    ) {
      setErrorMessage("Phone number must be between 10 and 11 digits.");
      return;
    }

    // 3. Postcode validation: Must start with "L" (Liverpool area check)
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

          // Smooth scroll back to the very top so the success message is immediately visible
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

  return (
    <div className="git-page-wrapper">
      {/* Top Header Section */}
      <div className="git-header-section">
        <div className="git-badge">Contact Us</div>
        <h1 className="git-main-title">Get a free quote</h1>
        <p className="git-subtitle">
          Have questions about our services or ready to schedule your cleaning?
          <br />
          We’re here to help make your home sparkle.
        </p>
      </div>

      {/* Main Content Split Grid */}
      <div className="git-content-container">
        {/* Left Side: Contact Form */}
        <div className="git-form-card">
          <h2 className="git-card-heading">Send us a message</h2>

          <form className="git-form" onSubmit={handleSubmit}>
            <div className="git-input-group">
              <label className="git-label">Your Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="git-input"
                placeholder="John Doe*"
                required
              />
            </div>

            <div className="git-input-group">
              <label className="git-label">Email Address</label>
              <input
                type="text"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="git-input"
                placeholder="john@example.com*"
                required
              />
            </div>

            <div className="git-input-group">
              <label className="git-label">
                Phone Number{" "}
                <span style={{ fontWeight: "400", color: "#6b7280" }}>
                  (Optional)
                </span>
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="git-input"
                placeholder="e.g. 07847414579"
              />
            </div>

            <div className="git-input-group">
              <label className="git-label">
                Postcode <span className="required-star">*</span>
              </label>
              <input
                type="text"
                name="postcode"
                value={formData.postcode}
                onChange={handleChange}
                className="git-input"
                placeholder="e.g. L12 5JE*"
                required
              />
            </div>

            <div className="git-input-group">
              <label className="git-label">Your Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="git-textarea"
                rows="4"
                placeholder="How can we help you?"
                required
              ></textarea>
            </div>

            {/* Error Message Display */}
            {errorMessage && (
              <p
                style={{
                  color: "#dc2626",
                  fontSize: "0.875rem",
                  fontWeight: "600",
                  textAlign: "center",
                  marginBottom: "10px",
                }}
              >
                {errorMessage}
              </p>
            )}

            <button type="submit" className="git-submit-btn">
              {status === "sending..." ? "Sending..." : "Send Message"}
            </button>

            {status === "success" && (
              <p
                style={{
                  color: "#16a34a",
                  fontSize: "0.875rem",
                  fontWeight: "600",
                  textAlign: "center",
                  marginTop: "10px",
                }}
              >
                Message sent successfully! We'll be in touch.
              </p>
            )}
          </form>
        </div>

        {/* Right Side: Locations & Info Cards */}
        <div className="git-locations-side">
          <h2 className="git-card-heading">Contact information</h2>

          {/* Liverpool Details Card */}
          <div className="git-location-box">
            <h3 className="location-title">Liverpool</h3>
            <div className="location-detail">
              <span className="loc-icon">📍</span>
              <span>94 Princes Rd, Liverpool, L8 8AD</span>
            </div>
            <div className="location-detail">
              <span className="loc-icon">📞</span>
              <span>07498444504</span>
            </div>
            <div className="location-detail">
              <span className="loc-icon">✉️</span>
              <span>jackcockerill2222@gmail.com</span>
            </div>
          </div>

          {/* Response Time Card */}
          <div className="git-location-box">
            <h3 className="location-title">Response Times</h3>
            <div className="location-detail">
              <span className="loc-icon">💬</span>
              <span>Expect a response via text or call in under 24 hours.</span>
            </div>
            <div className="location-detail">
              <span className="loc-icon">📧</span>
              <span>Expect an email response within up to 48 hours.</span>
            </div>
          </div>

          {/* Pricing Reminder Card with Hyperlink */}
          <div className="git-location-box">
            <h3 className="location-title">Pricing Note</h3>
            <div className="location-detail">
              <span className="loc-icon">💷</span>
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
                More information →
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
