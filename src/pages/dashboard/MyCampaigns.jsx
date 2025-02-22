import React from "react";
import { Link } from "react-router-dom";

const MyCampaigns = () => {
  return (
    <div className="container py-5 text-center">
      {/* <h2>My Campaigns</h2> */}
      <Link to="/dashboard/my-campaigns">My Campaigns</Link>
      <p>View and manage your crowdfunding campaigns.</p>
      <Link to="/campaigns/start" className="btn btn-success mt-3">Start a New Campaign</Link>
    </div>
  );
};

export default MyCampaigns;