import React from "react";
import FirstChart from "../../components/charts/chart";
import DonutChart from "../../components/charts/Donut chart";
import Layout from "../../components/Layout/index";

import "./style.css";

const HomePage = () => {
  return (
    <Layout>
      <div className="charts">
        <FirstChart />
        <DonutChart />
      </div>
    </Layout>
  );
};

export default HomePage;
