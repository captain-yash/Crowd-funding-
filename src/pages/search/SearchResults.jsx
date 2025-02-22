import React from "react";
import Card from "../../components/Card";


const SearchResults = () => {
  const results = [
    { title: "Clean Water Initiative", raised: "$12,000", goal: "$15,000" },
    { title: "Education for All", raised: "$8,500", goal: "$10,000" },
    { title: "Medical Aid Fund", raised: "$20,000", goal: "$25,000" },
  ];

  return (
    <div className="container py-5 text-center">
      <h2>Search Results</h2>
      <p>Find the perfect campaign to support.</p>
      <div className="row mt-4">
        {results.map((campaign, index) => (
          <div className="col-md-4" key={index}>
            <Card className="p-3 shadow-sm">
              <h4>{campaign.title}</h4>
              <p>Raised: {campaign.raised} / Goal: {campaign.goal}</p>
              <button className="btn btn-primary">View Campaign</button>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchResults;