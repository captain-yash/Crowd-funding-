import React from "react";
import { Link } from "react-router-dom";
import { CheckCircle } from "lucide-react";

function PaymentSuccess() {
  return (
    <div className="container py-5 text-center mt-5">
      <CheckCircle size={50} className="text-success" />
      <h2 className="mt-3">Payment Successful!</h2>
      <p>Thank you for your generous donation. Your support makes a difference!</p>
      <Link to="/" className="btn btn-primary mt-3">Back to Home</Link>
    </div>
  );
}

export default PaymentSuccess;
