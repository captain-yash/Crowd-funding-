import React from "react";
import Hero from "./Hero";
import Team from "./Team";

const AboutPage = () => {
  return (
    <div>
      <Hero />
      <section className="container my-5 text-center">
        <h2>About Our Crowdfunding Platform</h2>
        <p className="lead text-muted">
          Empowering individuals and organizations to bring their ideas to life through the power of community funding.
        </p>
      </section>
      <Team />
    </div>
  );
};

export default AboutPage;