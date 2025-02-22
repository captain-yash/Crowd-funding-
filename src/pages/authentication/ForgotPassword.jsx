import React, { useState } from "react";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Password reset request for", email);
  };

  return (
    <div className="container py-5">
      <h2 className="text-center">Reset Your Password</h2>
      <form className="w-50 mx-auto" onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Email Address</label>
          <input
            type="email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-warning w-100">Send Reset Link</button>
      </form>
    </div>
  );
};

export default ForgotPassword;