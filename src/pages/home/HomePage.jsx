import React from "react";
import Hero from "./Hero";
import Features from "./Features";
import Testimonials from "./Testimonials";
import Pricing from "./Pricing";
import Stats from "./Stats";

function HomePage() {
  return (
    <div>
      <Hero />
      <Features />
      <Testimonials />
      <Pricing />
      <Stats />
    </div>
  );
}

export default HomePage;