import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-light text-dark py-4 border-top">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <Link to="/" className="navbar-brand">
              <img
                src="crowdfunding-logo.webp"
                alt="Logo"
                style={{ height: "40px" }}
                className="d-inline-block align-text-top"
              />
            </Link>
            <p className="mt-2">
              Empowering fundraisers and backers to bring ideas to life.
            </p>
          </div>


          <div className="col-md-4">
            <h6>Quick Links</h6>
            <ul className="list-unstyled">
              <li><Link to="/about" className="text-dark text-decoration-none">About Us</Link></li>
              <li><Link to="/blog" className="text-dark text-decoration-none">Blog</Link></li>
              <li><Link to="/careers" className="text-dark text-decoration-none">Careers</Link></li>
              <li><Link to="/contact" className="text-dark text-decoration-none">Contact</Link></li>
            </ul>
          </div>

          <div className="col-md-4">
            <h6>Follow Us</h6>
            <div className="d-flex gap-3">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-facebook fa-lg text-dark"></i>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-twitter fa-lg text-dark"></i>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-instagram fa-lg text-dark"></i>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin fa-lg text-dark"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="text-center mt-3">
          <small>© {new Date().getFullYear()} Crowdfunding Platform. All rights reserved.</small>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
