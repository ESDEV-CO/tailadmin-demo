import React from "react";
import { Doughnut } from "react-chartjs-2";
import "./DonutPieChart.css"; // Import custom CSS file

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
        align: "center",
        labels: {
          generateLabels: function (chart) {
            const data = chart.data;
            if (data.labels.length && data.datasets.length) {
              return data.labels.map((label, i) => ({
                text: `${label} (${data.datasets[0].data[i]}%)`,
                fillStyle: data.datasets[0].backgroundColor[i],
                hidden:
                  isNaN(data.datasets[0].data[i]) ||
                  chart.getDatasetMeta(0).data[i].hidden,
              }));
            }
            return [];
          },
        },
      },
    },
  };

  return <Doughnut data={data} options={options} />;
};

export default DonutPieChart;
