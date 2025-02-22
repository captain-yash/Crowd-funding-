import React from "react";
import { Link } from "react-router-dom";

const UserDashboard = () => {
  return (
    <div className="container py-5 text-center">
      {/* <h2>User Dashboard</h2> */}
      <Link to="/dashboard/user" className="fw-bold fs-2">User Dashboard</Link>
      <p>Manage your campaigns and track contributions effectively.</p>
      <div className="d-flex justify-content-center mt-4">
        <Link to="/my-campaigns" className="btn btn-primary mx-2">My Campaigns</Link>
        <Link to="/donations-received" className="btn btn-success mx-2">Donations Received</Link>
        <Link to="/profile" className="btn btn-info mx-2">Profile Management</Link>
      </div>
    </div>
  );
};

export default UserDashboard;