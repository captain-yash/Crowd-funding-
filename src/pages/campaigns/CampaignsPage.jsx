import React from "react";
import { Link } from "react-router-dom";

const CampaignsPage = () => {
  return (
    <div className="container-fluid px-5 py-5">
      <h2 className="text-center fw-bold mt-4 mb-4 ">Explore Campaigns</h2>
      <p className="text-center text-muted">Discover and support campaigns that matter to you.</p>
      
      {/* Category Filter */}
      <div className="d-flex justify-content-center my-4">
        <select className="form-select w-25">
          <option value="">All Categories</option>
          <option value="tech">Technology</option>
          <option value="health">Health</option>
          <option value="education">Education</option>
          <option value="arts">Arts</option>
        </select>
      </div>
      
      {/* Featured Campaigns */}
      <div className="row mt-4">
        <div className="col-md-6">
          <div className="card shadow-lg">
            <img src="https://source.unsplash.com/600x400/?education" className="card-img-top" alt="Education Campaign" />
            <div className="card-body">
              <h5 className="card-title">Empower Underprivileged Students</h5>
              <p className="card-text">Help provide education and resources to children in need.</p>
              <Link to="/campaigns/1" className="btn btn-primary">View Campaign</Link>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card shadow-lg">
            <img src="https://source.unsplash.com/600x400/?healthcare" className="card-img-top" alt="Healthcare Campaign" />
            <div className="card-body">
              <h5 className="card-title">Support Rural Healthcare</h5>
              <p className="card-text">Fund medical aid and healthcare facilities for rural communities.</p>
              <Link to="/campaigns/2" className="btn btn-primary">View Campaign</Link>
            </div>
          </div>
        </div>
      </div>
      
      {/* Start a Campaign Button */}
      <div className="d-flex justify-content-center mt-5">
        <Link to="/campaigns/start" className="btn btn-success btn-lg">Start a Campaign</Link>
      </div>
    </div>
  );
};

export default CampaignsPage;
