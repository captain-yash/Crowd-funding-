import React from "react";
import { FaRegLightbulb, FaUsers, FaMoneyBillWave } from "react-icons/fa";

function Features() {
  return (
    <section className="features text-center py-5 bg-white mt-5 mb-5">
      <div className="container mt-4 mb-4">
        <h2 className="fw-bold">Why Choose Our Platform?</h2>
        <div className="row mt-4">
          <div className="col-md-4">
            <FaRegLightbulb size={50} className="text-primary mb-3" />
            <h4>Innovative Ideas</h4>
            <p>Support groundbreaking projects and be part of something great.</p>
          </div>
          <div className="col-md-4">
            <FaUsers size={50} className="text-success mb-3" />
            <h4>Trusted Community</h4>
            <p>Join a network of backers and creators with a shared vision.</p>
          </div>
          <div className="col-md-4">
            <FaMoneyBillWave size={50} className="text-warning mb-3" />
            <h4>Secure Transactions</h4>
            <p>Enjoy seamless and protected payments through our platform.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features;
