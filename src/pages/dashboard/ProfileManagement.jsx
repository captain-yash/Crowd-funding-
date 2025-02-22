import React from "react";

const ProfileManagement = () => {
  return (
    <div className="container py-5 text-center">
      {/* <h2>Profile Management</h2> */}
      <Link to="/dashboard/profile">Profile Management</Link>
      <p>Update your personal details and security settings.</p>
      <button className="btn btn-primary mt-3">Edit Profile</button>
    </div>
  );
};

export default ProfileManagement;