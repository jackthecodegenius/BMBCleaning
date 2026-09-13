import React, { useState } from "react";
import Header from "./Components/Header.jsx";
import Hero from "./Components/Hero";
import GoogleReviews from "./Components/GoogleReviews";
import Features from "./Components/Features.jsx";
import ServicesGrid from "./Components/ServicesGrid.jsx";
import HowItWorks from "./Components/HowItWorks.jsx";
import WhyUs from "./Components/WhyUs.jsx";
import PricingCalculator from "./Components/PricingCalculator.jsx";
import Footer from "./Components/Footer.jsx";
import TermsPage from "./Components/TermsPage.jsx";
import PrivacyPage from "./Components/PrivacyPage.jsx";
import GetInTouch from "./Components/GetInTouch.jsx";

function App() {
  const [currentView, setCurrentView] = useState("home"); // "home", "terms", "privacy", or "contact"

  return (
    <div className="app-container">
      <Header
        onNavigateHome={() => setCurrentView("home")}
        onOpenContact={() => setCurrentView("contact")}
        currentView={currentView}
      />
      <main>
        {currentView === "terms" ? (
          <TermsPage />
        ) : currentView === "privacy" ? (
          <PrivacyPage />
        ) : currentView === "contact" ? (
          <GetInTouch
            onNavigateHomePricing={(e) => {
              e.preventDefault();
              setCurrentView("home");
              setTimeout(() => {
                document
                  .getElementById("pricing")
                  ?.scrollIntoView({ behavior: "smooth" });
              }, 50);
            }}
          />
        ) : (
          <>
            {/* Added the prop here so the Hero button knows how to open the contact view */}
            <Hero onOpenContact={() => setCurrentView("contact")} />
            <Features />
            <section id="services">
              <ServicesGrid />
            </section>
            <section id="pricing">
              <PricingCalculator />
            </section>
            <WhyUs />
            <HowItWorks onOpenContact={() => setCurrentView("contact")} />
            <section id="reviews">
              <GoogleReviews />
            </section>
          </>
        )}
      </main>
      <Footer
        onOpenTerms={() => setCurrentView("terms")}
        onOpenPrivacy={() => setCurrentView("privacy")}
        onOpenContact={() => setCurrentView("contact")}
        onNavigateHome={() => setCurrentView("home")}
      />
    </div>
  );
}

export default App;
