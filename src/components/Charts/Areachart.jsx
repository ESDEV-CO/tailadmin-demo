import React from "react";
import { Chart } from "react-google-charts";
const Areachart = () => {
  const data = [
    ["Year", "", ""],
    ["Today", 14, 11],
    ["Yesterday", 18, 18],
    ["07/04", 25, 30],
    ["06/04", 11, 25],
  ];
  const options = {
    vAxis: { minValue: 0 },
    chartArea: { width: "80%", height: "70%" },
    series: {
      0: { color: "#EC5C42", curveType: "function" },
      1: { color: "#289995", curveType: "function" },
    },
    curveType: "function",
    legend: "none",
  };
  return (
    <Chart
      chartType="AreaChart"
      width="100%"
      height="400px"
      data={data}
      options={options}
    />
  );
};

export default Areachart;
