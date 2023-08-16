import React from "react";
import FirstChart from "../../components/charts/chart";
import DonutChart from "../../components/charts/Donut chart";

import "./style.css";

const HomePage = () => {
  return (
    <div className="charts">
      <FirstChart />
      <DonutChart />
    </div>
  );
};

export default HomePage;
