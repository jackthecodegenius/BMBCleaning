import React from "react";
import "./TermsPage.css";

export default function TermsPage() {
  return (
    <div className="terms-page-wrapper">
      <main className="terms-main-content">
        <div className="terms-container">
          <h1 className="terms-page-heading">
            United Kingdom: Terms & Conditions
          </h1>
          <p className="terms-last-updated">Last updated on June 9, 2026</p>

          <p className="terms-intro-text">
            The terms and conditions stated herein including any referenced
            policies or documents (collectively, this "Agreement") constitute a
            legal agreement between you ("you" or "your") and BMB Cleaning
            ("Company," "we," "our" or "us"). By booking or receiving any
            cleaning services supplied directly by the Company, you hereby
            expressly acknowledge and agree to be bound by the terms and
            conditions of this Agreement.
          </p>

          <p className="terms-intro-text">
            The Company reserves the right to modify the terms and conditions of
            this Agreement at any time, effective upon posting of an updated
            version on the website. Your continued use of the Service after any
            such changes shall constitute your consent to such changes. If you
            have any questions, please contact us by phone.
          </p>

          <div className="terms-security-notice">
            BMB CLEANING PROVIDES DIRECTLY MANAGED PROFESSIONAL CLEANING
            SERVICES ACROSS LIVERPOOL (L1–L24), DELIVERED PERSONALLY BY TRUSTED
            COMPANY PERSONNEL OR MANAGEMENT.
          </div>

          <h2 className="terms-section-title">Table of Contents</h2>
          <ul className="terms-toc-list">
            <li>Service Area & Eligibility</li>
            <li>Direct Service Delivery</li>
            <li>Bookings & Payment Terms</li>
            <li>24-Hour Cancellation Policy</li>
            <li>Satisfaction Guarantee & "We'll Make It Right"</li>
            <li>Property Access & Safety</li>
            <li>Theft, Damage & Liability Policy</li>
            <li>Website Developer & Creator Disclaimer</li>
            <li>Governing Law & Statutory Rights</li>
            <li>Limitation of Liability</li>
            <li>Contact Information</li>
          </ul>

          <div className="terms-section-block">
            <h3>Service Area & Eligibility</h3>
            <p>
              BMB Cleaning provides services exclusively within the Liverpool
              region, spanning postcodes L1 to L24. By using our service, you
              represent and warrant that you are at least eighteen (18) years
              old, have the legal capacity to enter into binding contracts, and
              are booking for personal, residential use within our designated
              service zone.
            </p>
          </div>

          <div className="terms-section-block">
            <h3>Direct Service Delivery</h3>
            <p>
              All customer inquiries, bookings, and communications are handled
              directly by BMB Cleaning management. Cleaning services are
              fulfilled directly by company personnel or authorized management
              representation, ensuring consistent quality control and
              accountability on every job.
            </p>
          </div>

          <div className="terms-section-block">
            <h3>Bookings & Payment Terms</h3>
            <p>
              Any fees charged for our cleaning services are due upon completion
              of your clean unless otherwise agreed in writing. We reserve the
              right to determine final pricing based upon the specific size,
              layout, and condition of your property. Promotional quotes or
              custom offers are valid only under the terms specified at the time
              of booking.
            </p>
          </div>

          <div className="terms-section-block">
            <h3>24-Hour Cancellation Policy</h3>
            <p>
              We require at least <strong>24 hours notice</strong> if you need
              to cancel or reschedule your cleaning appointment. Cancellations
              made within less than 24 hours of the scheduled start time may be
              subject to a late cancellation fee to cover reserved scheduling.
              If we are locked out or denied access to the property upon
              arrival, a full or partial appointment fee may apply.
            </p>
          </div>

          <div className="terms-section-block">
            <h3>Satisfaction Guarantee & "We'll Make It Right"</h3>
            <p>
              Your satisfaction is our absolute priority. If you are unhappy
              with any area of your clean, you must notify us within{" "}
              <strong>24 hours</strong> of service completion. We will promptly
              return to re-clean and make it right at no extra cost.
            </p>
          </div>

          <div className="terms-section-block">
            <h3>Property Access & Safety</h3>
            <p>
              Clients must ensure safe property access, including working
              electricity, adequate lighting, and running water. Any delicate
              items, unstable fixtures, high-value valuables, or pre-existing
              home damages must be secured or pointed out to our team before
              cleaning begins. We reserve the right to refuse or halt service if
              working conditions violate health and safety standards.
            </p>
          </div>

          <div className="terms-section-block">
            <h3>Theft, Damage & Liability Policy</h3>
            <p>
              While we handle your property with the utmost care, accidents can
              occasionally occur. Any damage or loss claims must be reported by
              phone within 24 hours of service completion. BMB Cleaning's
              liability for accidental property damage is evaluated fairly and
              capped at the value of the specific cleaning service provided.
            </p>
          </div>

          <div className="terms-section-block">
            <h3>Website Developer & Creator Disclaimer</h3>
            <p>
              This website and its digital infrastructure are designed, built,
              and maintained by an independent third-party developer/creator on
              behalf of BMB Cleaning. The website creator is solely a technical
              service provider and is not an owner, partner, employee, or agent
              of BMB Cleaning. The website creator holds zero liability for any
              cleaning operations, scheduling disputes, property damage,
              financial transactions, service quality, or legal obligations
              arising from the business activities of BMB Cleaning. All
              commercial and legal responsibilities rest entirely with the
              business owner of BMB Cleaning.
            </p>
          </div>

          <div className="terms-section-block">
            <h3>Governing Law & Statutory Rights</h3>
            <p>
              These Terms and Conditions shall be governed by and construed in
              accordance with the laws of <strong>England and Wales</strong>.
              Any disputes relating to these terms shall be subject to the
              exclusive jurisdiction of the courts of England and Wales. Nothing
              in this Agreement affects your statutory rights under the Consumer
              Rights Act 2015.
            </p>
          </div>

          <div className="terms-section-block">
            <h3>Limitation of Liability</h3>
            <p>
              To the maximum extent permitted by UK law, BMB Cleaning’s total
              liability for any claim arising out of or relating to our cleaning
              services shall not exceed the total amount paid by you for the
              specific service giving rise to the claim.
            </p>
          </div>

          <div className="terms-section-block">
            <h3>Contact Information</h3>
            <p>
              If you require any more information or have any questions about
              these Terms and Conditions, please feel free to contact us by
              phone or visit our main website portal.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
