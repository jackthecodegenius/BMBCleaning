import React from "react";
import Header from "./Components/Header.jsx";
import Hero from "./Components/Hero";
import GoogleReviews from "./Components/GoogleReviews";

function App() {
  return (
    <div className="app-container">
      <Header />
      <main>
        <Hero />
        <GoogleReviews />
      </main>
    </div>
  );
}

export default App;
