import React from "react";
import { History } from "lucide-react";

const DonationHistory = () => {
  const donations = [
    { campaign: "Clean Water Initiative", amount: "$50", date: "Feb 15, 2025" },
    { campaign: "Education for All", amount: "$100", date: "Jan 28, 2025" },
    { campaign: "Medical Aid Fund", amount: "$75", date: "Dec 10, 2024" },
  ];

  return (
    <div className="container py-5 text-center">
      <h2><History size={28} className="me-2" /> Donation History</h2>
      <p>Your past contributions to crowdfunding campaigns.</p>
      <table className="table mt-4">
        <thead>
          <tr>
            <th>Campaign</th>
            <th>Amount</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {donations.map((donation, index) => (
            <tr key={index}>
              <td>{donation.campaign}</td>
              <td>{donation.amount}</td>
              <td>{donation.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DonationHistory;