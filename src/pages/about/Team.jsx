import React from "react";

const Team = () => {
  const teamMembers = [
    { name: "Alice Johnson", role: "Founder & CEO", image: "team1.jpg" },
    { name: "Michael Smith", role: "CTO", image: "team2.jpg" },
    { name: "Emma Davis", role: "Marketing Head", image: "team3.jpg" },
  ];

  return (
    <section className="container text-center my-5">
      <h2>Meet Our Team</h2>
      <div className="row mt-4">
        {teamMembers.map((member, index) => (
          <div key={index} className="col-md-4">
            <img
              src={`/assets/images/${member.image}`}
              alt={member.name}
              className="rounded-circle mb-3"
              style={{ width: "150px", height: "150px" }}
            />
            <h5>{member.name}</h5>
            <p className="text-muted">{member.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Team;