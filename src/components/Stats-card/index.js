import React from "react";
import "./style.css";
const StatsCard = ({ title, stats, photo }) => {
  return (
    <div className="stats-card-cont">
      <div className="stats">
        <div>
          <p>{title}</p>
          <h2>{stats}</h2>
        </div>
        <img src={photo} alt={title} />
      </div>
    </div>
  );
};

export default StatsCard;
