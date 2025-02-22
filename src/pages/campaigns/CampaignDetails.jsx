import React from "react";
import { Link, useParams } from "react-router-dom";

const CampaignDetails = () => {
  const { id } = useParams();
  return (
    <div className="container py-5">
      <h2 className="text-center fw-bold">Campaign Details</h2>
      <p className="text-center text-muted">Details for campaign ID: {id}</p>
      <div className="d-flex justify-content-center">
        <Link to="/payment" className="btn btn-success btn-lg">Contribute</Link>
      </div>
    </div>
  );
};

export default CampaignDetails;
