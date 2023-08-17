import React from "react";
import FirstChart from "../../components/charts/chart";
import DonutChart from "../../components/charts/Donut chart";
import Layout from "../../components/Layout/index";
import StatsCard from "../../components/Stats-card";
import Dollar from "../../assets/dollar.png";
import People from "../../assets/people.png";
import Task from "../../assets/task.png";
import Bills from "../../assets/bills.png";

import "./style.css";

const HomePage = () => {
  return (
    <Layout>
      <div className="widgets">
        <StatsCard title="BUDGET" stats="$24k" photo={Dollar} />
        <StatsCard title="TOTAL CUSTOMERS" stats="1.6k" photo={People} />
        <StatsCard title="TASK PROGRESS" stats="75.5%" photo={Task} />
        <StatsCard title="TOTAL PROFIT" stats="$15k" photo={Bills} />
      </div>

      <div className="charts">
        <FirstChart />
        <DonutChart />
      </div>
    </Layout>
  );
};

export default HomePage;
