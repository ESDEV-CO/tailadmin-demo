import React from "react";
import { Line } from "react-chartjs-2";

const AreaChart = () => {
  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
    datasets: [
      {
        label: "Data Set 1",
        data: [23, 42, 13, 67, 35, 79, 58],
        backgroundColor: "rgba(60, 80, 224, 0.5)", // #3C50E0 with alpha 0.5
        borderColor: "rgba(60, 80, 224, 1)", // Solid border color
        borderWidth: 2,
        pointBorderColor: "rgba(60, 80, 224, 1)",
        pointBackgroundColor: "#fff",
        pointBorderWidth: 1,
        fill: "origin",
      },
      {
        label: "Data Set 2",
        data: [10, 25, 18, 7, 45, 32, 88],
        backgroundColor: "rgba(128, 202, 238, 0.5)", // #80CAEE with alpha 0.5
        borderColor: "rgba(128, 202, 238, 1)", // Solid border color
        borderWidth: 2,
        pointBorderColor: "rgba(128, 202, 238, 1)",
        pointBackgroundColor: "#fff",
        pointBorderWidth: 1,
        fill: "origin",
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  return <Line data={data} options={options} />;
};

export default AreaChart;
