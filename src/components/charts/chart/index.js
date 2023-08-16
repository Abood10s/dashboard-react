import React, { Component } from "react";
import Chart from "react-apexcharts";

class FirstChart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
        chart: {
          id: "basic-bar",
          toolbar: {
            show: false,
          },
        },
        xaxis: {
          categories: [2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023],
        },
        colors: ["#9C27B0"],
        responsive: [
          {
            breakpoint: 568,
            options: {
              chart: {
                width: "100%",
              },
            },
          },
        ],
      },
      series: [
        {
          name: "series-1",
          data: [30, 40, 45, 50, 49, 60, 70, 91],
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
              type="area"
              width="450"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default FirstChart;
