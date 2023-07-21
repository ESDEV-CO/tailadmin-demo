import React from "react";
import { Bar } from "react-chartjs-2";

const StackedBarChart = () => {
  const data = {
    labels: ["J", "F", "M", "A", "M", "J", "J"],
    datasets: [
      {
        label: "Data Set 1",
        data: [40, 50, 30, 60, 45, 35, 55],
        backgroundColor: "rgba(60, 80, 224, 0.5)", // #3C50E0 with alpha 0.5
        borderColor: "rgba(60, 80, 224, 1)", // Solid border color
        borderWidth: 1,
      },
      {
        label: "Data Set 2",
        data: [30, 35, 25, 20, 40, 45, 35],
        backgroundColor: "rgba(128, 202, 238, 0.5)", // #80CAEE with alpha 0.5
        borderColor: "rgba(128, 202, 238, 1)", // Solid border color
        borderWidth: 1,
      },
    ],
  };

  const options = {
    scales: {
      x: {
        stacked: true, // Enable stacked bars on the x-axis
      },
      y: {
        stacked: true, // Enable stacked bars on the y-axis
        beginAtZero: true,
        max: 100, // Set the maximum value for the y-axis to 80
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  return <Bar data={data} options={options} />;
};

export default StackedBarChart;
