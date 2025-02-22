import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary border-bottom fixed-top" style={{ backgroundColor: "#FFF" }}>
      <div className="container">
        {/* Logo on the left */}
        <Link className="navbar-brand" to="/">
          <img src="/assets/images/crowdfunding-logo.webp" alt="Logo" style={{ height: "40px" }} className="d-inline-block align-text-top" />
        </Link>

        {/* Toggler for mobile */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar links */}
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0"> 
            <li className="nav-item">
              <Link className="nav-link active" to="/about">About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="/dashboard/user">Dashboard</Link>
              {/*Opening admin's dashboard from navbar for now*/}
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="/campaigns">Campaigns</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="/signup">Signup</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="/login">Login</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
