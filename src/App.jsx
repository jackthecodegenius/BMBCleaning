import React from "react";
import Header from "./Components/Header.jsx";
import Hero from "./Components/Hero";
import GoogleReviews from "./Components/GoogleReviews";
import Features from "./Components/Features.jsx";
import ServicesGrid from "./Components/ServicesGrid.jsx";
import HowItWorks from "./Components/HowItWorks.jsx";

function App() {
  return (
    <div className="app-container">
      <Header />
      <main>
        <Hero />
        <Features />
        <ServicesGrid />
        <HowItWorks />
        <GoogleReviews />
      </main>
    </div>
  );
}

export default App;
