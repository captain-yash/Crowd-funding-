// src/components/Card.jsx
import React from "react";

function Card({ title, description }) {
  return (
    <div className="card p-3 shadow-sm">
      <h5>{title}</h5>
      <p>{description}</p>
    </div>
  );
}

export default Card;
