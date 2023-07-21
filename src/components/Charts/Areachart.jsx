import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import { Pie, Line } from "react-chartjs-2";

Chart.register(CategoryScale);

const data = {
  labels: ["Red", "Orange", "Blue"],
  datasets: [
    {
      label: "Popularity of colours",
      data: [55, 23, 96],
      backgroundColor: [
        "rgba(60, 80, 224, 1)",
        "rgba(128, 202, 238, 1)",
        "rgba(130, 205, 240, 0.6)",
      ],
      borderWidth: 1,
    },
  ],
};

function MyChart() {
  return (
    <div className="App">
      <Pie
        data={data}
        options={{
          plugins: {
            title: {
              display: true,
              text: "Users Gained between 2016-2020",
            },
          },
        }}
      />

      <Line
        data={data}
        options={{
          plugins: {
            title: {
              display: true,
              text: "Users Gained between 2016-2020",
            },
          },
        }}
      />
    </div>
  );
}

export default MyChart;
