import React, { useState } from "react";

const VerifyEmail = () => {
  const [code, setCode] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email verification code submitted:", code);
  };

  return (
    <div className="container py-5">
      <h2 className="text-center">Verify Your Email</h2>
      <p className="text-center">Enter the verification code sent to your email.</p>
      <form className="w-50 mx-auto" onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Verification Code</label>
          <input
            type="text"
            className="form-control"
            value={code}
            onChange={(e) => setCode(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary w-100">Verify</button>
      </form>
    </div>
  );
};

export default VerifyEmail;