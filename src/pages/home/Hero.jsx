import React from "react";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="hero bg-light text-center py-5">
      <div className="container-fluid mt-5">
        <div className="row justify-content-center">
          <div className="col-lg-12">
            <h1 className="display-4 fw-bold">Empower Ideas, Fund Dreams</h1>
            <p className="lead">Join thousands of backers supporting innovative projects worldwide.</p>
            <Link to="/campaigns/start" className="btn btn-primary btn-lg mx-2">Start a Campaign</Link>
            <Link to="/explore" className="btn btn-outline-primary btn-lg mx-2">Explore Campaigns</Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;