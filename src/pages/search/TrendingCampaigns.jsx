import React from "react";
import { TrendingUp } from "lucide-react";

const TrendingCampaigns = () => {
  const trending = [
    { title: "Tech for Kids", image: "/assets/tech-kids.jpg" },
    { title: "Green Energy Movement", image: "/assets/green-energy.jpg" },
    { title: "Wildlife Conservation", image: "/assets/wildlife.jpg" },
  ];

  return (
    <div className="container py-5 text-center">
      <h2><TrendingUp size={28} className="me-2" /> Trending Campaigns</h2>
      <p>Join the most impactful campaigns today.</p>
      <div className="row mt-4">
        {trending.map((campaign, index) => (
          <div className="col-md-4" key={index}>
            <div className="card shadow-sm">
              <img src={campaign.image} className="card-img-top" alt={campaign.title} />
              <div className="card-body">
                <h4>{campaign.title}</h4>
                <button className="btn btn-primary">Support Now</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrendingCampaigns;