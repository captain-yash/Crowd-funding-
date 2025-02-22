import React from "react";
import { Link } from "react-router-dom";

const AdminDashboard = () => {
  return (
    <div className="container py-5 text-center">
      {/* <h2>Admin Dashboard</h2> */}
      <Link to="/dashboard/admin" className="fw-bold fs-2">Admin Dashboard</Link>
      <p>Manage campaigns, users, and transactions efficiently.</p>
      <div className="d-flex justify-content-center mt-4">
        <Link to="/admin/campaigns" className="btn btn-warning mx-2">Manage Campaigns</Link>
        <Link to="/admin/users" className="btn btn-danger mx-2">Manage Users</Link>
        <Link to="/admin/transactions" className="btn btn-secondary mx-2">View Transactions</Link>
      </div>
    </div>
  );
};

export default AdminDashboard;