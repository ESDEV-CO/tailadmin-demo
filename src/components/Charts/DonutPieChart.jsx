import React from "react";
import { Doughnut } from "react-chartjs-2";

const DonutPieChart = () => {
  const data = {
    labels: ["Desktop", "Tablet", "Mobile", "Unknown"],
    datasets: [
      {
        data: [65, 34, 45, 12],
        backgroundColor: ["#3C50E0", "#6577F3", "#8FD0EF", "#0FADCF"],
      },
    ],
  };

  const options = {
    cutoutPercentage: 70, // Adjust this value to control the width of the donut circle
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: "bottom",
      },
    },
  };

  return <Doughnut data={data} options={options} />;
};

export default DonutPieChart;
