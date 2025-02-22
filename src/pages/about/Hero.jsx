import React from "react";

const Hero = () => {
  return (
    <header className="hero bg-primary text-white text-center py-5 mt-5 mb-5">
      <div className="container mt-4 mb-4">
        <h1 className="display-4">Welcome to Our Crowdfunding Platform</h1>
        <p className="lead">Turn your dreams into reality with the support of our community.</p>
        <a href="/campaigns" className="btn btn-light btn-lg mt-3">Explore Campaigns</a>
      </div>
    </header>
  );
};

export default Hero;