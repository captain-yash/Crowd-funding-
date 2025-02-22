import React from "react";

function Pricing() {
  return (
    <section className="pricing text-center py-5 bg-white mt-5 mb-5 ">
      <div className="container mt-4 mb-4">
        <h2 className="fw-bold">Simple & Transparent Pricing</h2>
        <p>We take a small fee to keep the platform running and secure.</p>
        <div className="row mt-4">
          <div className="col-md-6">
            <div className="card border-primary">
              <div className="card-body">
                <h4 className="card-title">Standard Plan</h4>
                <p className="card-text">5% platform fee + payment processing</p>
                <button className="btn btn-primary">Learn More</button>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card border-success">
              <div className="card-body">
                <h4 className="card-title">Premium Plan</h4>
                <p className="card-text">3% platform fee + priority support</p>
                <button className="btn btn-success">Learn More</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Pricing;
