import React from "react";
import "./TermsPage.css"; // Reuses the same clean styling as your terms page

export default function PrivacyPage() {
  return (
    <div className="terms-page-wrapper">
      <main className="terms-main-content">
        <div className="terms-container">
          <h1 className="terms-page-heading">Privacy Policy</h1>
          <p className="terms-last-updated">Last updated on June 9, 2026</p>

          <p className="terms-intro-text">
            This Privacy Policy explains how BMB Cleaning ("Company," "we,"
            "our" or "us") handles information when you interact with our
            website or contact us directly. We are committed to protecting your
            personal privacy and complying with the UK GDPR and the Data
            Protection Act 2018.
          </p>

          <div className="terms-security-notice">
            BMB CLEANING RESPECTS YOUR PRIVACY. WE DO NOT HARVEST AUTOMATED DATA
            OR STORE USER DATABASES VIA THIS WEBSITE.
          </div>

          <h2 className="terms-section-title">Table of Contents</h2>
          <ul className="terms-toc-list">
            <li>Information We Collect & How It's Gathered</li>
            <li>How We Use Your Information</li>
            <li>Data Sharing & Third Parties</li>
            <li>Data Security</li>
            <li>Your Data Protection Rights</li>
            <li>Website Developer & Creator Disclaimer</li>
            <li>Contact Us</li>
          </ul>

          <div className="terms-section-block">
            <h3>Information We Collect & How It's Gathered</h3>
            <p>
              Our website operates on a direct-contact basis.{" "}
              <strong>
                We do not utilize automated online registration forms or harvest
                data databases through this site.
              </strong>{" "}
              Any personal information—such as your name, phone number, email
              address, or property address—is only provided when you voluntarily
              choose to contact us directly via telephone, text message, or
              direct email to arrange a cleaning service.
            </p>
          </div>

          <div className="terms-section-block">
            <h3>How We Use Your Information</h3>
            <p>
              Any personal details you provide when reaching out are used
              exclusively for the following purposes:
            </p>
            <ul
              style={{
                paddingLeft: "20px",
                color: "#374151",
                lineHeight: "1.7",
                marginBottom: "16px",
              }}
            >
              <li>
                Responding to your inquiries and scheduling cleaning
                appointments.
              </li>
              <li>
                Fulfilling the direct cleaning services you have requested
                within our Liverpool (L1–L24) service zone.
              </li>
              <li>
                Communicating regarding service updates, arrival times, or
                customer satisfaction follow-ups.
              </li>
            </ul>
          </div>

          <div className="terms-section-block">
            <h3>Data Sharing & Third Parties</h3>
            <p>
              We do not sell, trade, rent, or lease your personal information to
              third parties. Your information remains strictly between you and
              BMB Cleaning management for the sole purpose of carrying out your
              requested cleaning service.
            </p>
          </div>

          <div className="terms-section-block">
            <h3>Data Security</h3>
            <p>
              We take reasonable and appropriate administrative and physical
              precautions to ensure that any contact information or messages you
              send directly to us are kept secure and handled with
              confidentiality.
            </p>
          </div>

          <div className="terms-section-block">
            <h3>Your Data Protection Rights</h3>
            <p>
              Under UK data protection laws, you have the right to request
              access to any personal information we hold about you, or to ask
              that we correct or delete your contact details at any time by
              reaching out to us directly.
            </p>
          </div>

          <div className="terms-section-block">
            <h3>Website Developer & Creator Disclaimer</h3>
            <p>
              This website is designed, built, and maintained by an independent
              third-party developer/creator on behalf of BMB Cleaning. The
              website creator acts solely as a technical service provider, does
              not collect, access, or store any user personal data, and holds
              zero liability or responsibility for data handling, privacy
              compliance, or business operations associated with BMB Cleaning.
            </p>
          </div>

          <div className="terms-section-block">
            <h3>Contact Us</h3>
            <p>
              If you have any questions or concerns regarding this Privacy
              Policy or how your information is handled, please contact us by
              email at <strong>support@bmbcleaning.co.uk</strong>.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
