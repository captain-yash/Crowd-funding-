import React, { useState } from "react";

function StartCampaign() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [goal, setGoal] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("New Campaign Submitted", { title, description, goal });
  };

  return (
    <div className="container py-5 mt-4 mb-5">
      <h2 className="text-center mt-4 mb-4">Start a New Campaign</h2>
      <form className="w-50 mx-auto" onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Campaign Title</label>
          <input type="text" className="form-control" value={title} onChange={(e) => setTitle(e.target.value)} required />
        </div>
        <div className="mb-3">
          <label className="form-label">Description</label>
          <textarea className="form-control" value={description} onChange={(e) => setDescription(e.target.value)} required />
        </div>
        <div className="mb-3">
          <label className="form-label">Goal Amount ($)</label>
          <input type="number" className="form-control" value={goal} onChange={(e) => setGoal(e.target.value)} required />
        </div>
        <button type="submit" className="btn btn-primary w-100 mt-2">Create Campaign</button>
      </form>
    </div>
  );
};

export default StartCampaign;