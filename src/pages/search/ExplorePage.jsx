import React from "react";
import { Search, Globe, TrendingUp } from "lucide-react";

const ExplorePage = () => {
  return (
    <div className="container py-5 text-center">
      <h2><Globe size={28} className="me-2" /> Explore Campaigns</h2>
      <p>Discover trending and successful campaigns.</p>
      <div className="input-group mt-4">
        <input type="text" className="form-control" placeholder="Search campaigns..." />
        <button className="btn btn-primary"><Search size={20} /></button>
      </div>
    </div>
  );
};

export default ExplorePage;