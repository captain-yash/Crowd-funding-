import React from "react";

function Stats() {
  return (
    <section className="stats text-center py-5 bg-light mt-5 mb-5">
      <div className="container mt-4 mb-4">
        <h2 className="fw-bold">Our Impact in Numbers</h2>
        <div className="row mt-4">
          <div className="col-md-3">
            <h3 className="text-primary">10,000+</h3>
            <p>Projects Funded</p>
          </div>
          <div className="col-md-3">
            <h3 className="text-success">$50M+</h3>
            <p>Raised by Creators</p>
          </div>
          <div className="col-md-3">
            <h3 className="text-warning">500K+</h3>
            <p>Backers Worldwide</p>
          </div>
          <div className="col-md-3">
            <h3 className="text-danger">98%</h3>
            <p>Success Rate</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Stats;
