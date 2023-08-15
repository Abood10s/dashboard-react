import React, { Component } from "react";
import Chart from "react-apexcharts";

class DonutChart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
        chart: {
          type: "bar",
        },
        xaxis: {
          categories: ["Smartphones", "Clothing", "Houseware", "Plants"],
        },
        colors: ["#6366F1"],
        responsive: [
          {
            breakpoint: 568,
            options: {
              chart: {
                width: "115%",
              },
            },
          },
        ],
      },
      series: [
        {
          name: "series-1",
          data: [25, 18, 24, 5],
        },
      ],
    };
  }

  render() {
    return (
      <div className="app">
        <div className="row">
          <div className="mixed-chart">
            <Chart
              options={this.state.options}
              series={this.state.series}
              type="bar"
              width="450" // set initial width to 100% for responsiveness
            />
          </div>
        </div>
      </div>
    );
  }
}

export default DonutChart;
