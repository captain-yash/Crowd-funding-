import React from "react";

const DonationsReceived = () => {
  return (
    <div className="container py-5 text-center">
      {/* <h2>Donations Received</h2> */}
      <Link to="/donations-received">Donations Received</Link>
      <p>Track the donations you have received for your campaigns.</p>
      <button className="btn btn-info mt-3">View Donation History</button>
    </div>
  );
};

export default DonationsReceived;