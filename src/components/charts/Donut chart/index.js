import React, { Component } from "react";
import Chart from "react-apexcharts";

class DonutChart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
        colors: ["#430f58", "#6643b5", "#8594e4"],
      },
      series: [44, 55, 41],
      labels: ["A", "B", "C"],
    };
  }

  render() {
    return (
      <div className="donut">
        <Chart
          options={this.state.options}
          series={this.state.series}
          type="donut"
          width="380"
        />
      </div>
    );
  }
}

export default DonutChart;
