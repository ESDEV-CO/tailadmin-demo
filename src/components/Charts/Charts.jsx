import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import { Pie, Line, Bar } from "react-chartjs-2";

Chart.register(CategoryScale);

const data = {
  labels: ["M", "T", "W", "T", "F", "S", "S"],
  datasets: [
    {
      label: "Popularity of colours",
      data: [55, 23, 96, 34, 72, 50, 69],
      backgroundColor: [
        "rgba(60, 80, 224, 1)",
        "rgba(128, 202, 238, 1)",
        "rgba(130, 205, 240, 0.6)",
        "rgba(75, 192, 192, 1)",
        "rgba(255, 205, 86, 0.6)",
        "rgba(153, 102, 255, 1)",
      ],
      borderWidth: 1,
    },
  ],
};
const options = {
  plugins: {
    title: {
      display: false,
      text: "Users Gained between 2016-2020",
    },
    legend: {
      display: false,
    },
  },
  responsive: true,
  maintainAspectRatio: false,
  width: 400,
  heighth: 300,
};

export const PieChart = () => {
  return <Pie data={data} options={options} />;
};

export const LineChart = () => {
  return <Line data={data} options={options} />;
};

export const BarChart = () => {
  return <Bar data={data} options={options} />;
};

function Charts() {
  return (
    <div className="App">
      {/* <PieChart />
      <BarChart />
      <LineChart /> */}
      {/* <Pie
        data={data}
        options={{
          plugins: {
            title: {
              display: true,
              text: "Users Gained between 2016-2020",
            },
          },
        }}
      /> */}

      {/* <Line
        data={data}
        options={{
          plugins: {
            title: {
              display: true,
              text: "Users Gained between 2016-2020",
            },
          },
        }}
      /> */}
      {/* <Bar
        data={data}
        options={{
          plugins: {
            title: {
              display: true,
              text: "Users Gained between 2016-2020",
            },
            legend: {
              display: false,
            },
          },
        }}
      /> */}
    </div>
  );
}

export default Charts;
