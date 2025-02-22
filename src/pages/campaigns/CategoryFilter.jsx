import React from "react";

const CategoryFilter = () => {
  return (
    <div className="container py-3">
      {/* <h4>Filter by Category</h4> */}
      <Link to="/campaigns/category">Filter by Category</Link>
      <select className="form-select">
        <option value="all">All</option>
        <option value="tech">Technology</option>
        <option value="health">Health</option>
        <option value="education">Education</option>
      </select>
    </div>
  );
};

export default CategoryFilter;
