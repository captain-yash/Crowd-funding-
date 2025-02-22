import React from "react";
import { Link } from "react-router-dom";
import { CreditCard } from "lucide-react";

function PaymentPage() {
  return (
    <div className="container py-5 text-center mt-4 mb-4">
      <h2><CreditCard size={28} className="me-2" /> Make a Donation</h2>
      <p>Support your favorite campaign by making a contribution.</p>
      <form className="mt-4">
        <input type="text" className="form-control mb-3" placeholder="Card Number" />
        <input type="text" className="form-control mb-3" placeholder="Cardholder Name" />
        <div className="d-flex gap-2">
          <input type="text" className="form-control" placeholder="MM/YY" />
          <input type="text" className="form-control" placeholder="CVV" />
        </div>
        <Link to="/payment-success" className="btn btn-success mt-3">Donate Now</Link>
      </form>
    </div>
  );
}

export default PaymentPage;