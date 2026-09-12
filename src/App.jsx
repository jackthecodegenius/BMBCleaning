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
import PrivacyPage from "./Components/PrivacyPage.jsx"; // Import privacy page

function App() {
  const [currentView, setCurrentView] = useState("home"); // "home", "terms", or "privacy"

  return (
    <div className="app-container">
      <Header />
      <main>
        {currentView === "terms" ? (
          <TermsPage />
        ) : currentView === "privacy" ? (
          <PrivacyPage />
        ) : (
          <>
            <Hero />
            <Features />
            <section id="services">
              <ServicesGrid />
            </section>
            <section id="pricing">
              <PricingCalculator />
            </section>
            <WhyUs />
            <HowItWorks />
            <section id="reviews">
              <GoogleReviews />
            </section>
          </>
        )}
      </main>
      <Footer
        onOpenTerms={() => setCurrentView("terms")}
        onOpenPrivacy={() => setCurrentView("privacy")}
      />
    </div>
  );
}

export default App;
