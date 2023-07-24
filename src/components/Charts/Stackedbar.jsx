import Chart from "chart.js/auto";
import { CategoryScale, LinearScale } from "chart.js";
import { Bar } from "react-chartjs-2";

Chart.register(CategoryScale, LinearScale);

const StackedBarChart = () => {
  const data = {
    labels: ["J", "F", "M", "A", "M", "J", "J"],
    datasets: [
      {
        label: "Revenue",
        data: [40, 50, 30, 55, 45, 35, 55],
        backgroundColor: "rgba(60, 80, 224, 0.5)",
        borderColor: "rgba(60, 80, 224, 1)",
        borderWidth: 1,
        stack: "stack1",
      },
      {
        label: "sales",
        data: [30, 35, 25, 20, 40, 45, 35],
        backgroundColor: "rgba(128, 202, 238, 0.5)",
        borderColor: "rgba(128, 202, 238, 1)",
        borderWidth: 1,
        stack: "stack1",
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        display: false,
      },
    },
    responsive: true,
    maintainAspectRatio: false,
    layout: {
      padding: {
        left: 10,
        right: 10,
        top: 10,
        bottom: 10,
      },
    },
    barPercentage: 0.6,
    scales: {
      x: {
        stacked: true,
      },
      y: {
        stacked: true,
        suggestedMin: 0, // Set the minimum value of the y-axis
        suggestedMax: 100, // Set the maximum value of the y-axis
        ticks: {
          stepSize: 20, // Set the interval between ticks on the y-axis
        },
      },
    },
  };

  return <Bar data={data} options={options} />;
};

export default StackedBarChart;
