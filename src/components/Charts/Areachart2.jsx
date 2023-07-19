import React from "react";
import { Chart } from "react-google-charts";

const Areachart2 = () => {
  const data = [
    ["Year", "", ""],
    ["2013", 1000, 400],
    ["2014", 1170, 460],
    ["2015", 660, 1120],
    ["2016", 1030, 540],
  ];
  const options = {
    isStacked: "relative",
    height: 300,
    vAxis: {
      minValue: 0,
      ticks: [0, 0.3, 0.6, 0.9, 1],
    },
    series: {
      0: { color: "#289995", curveType: "function" },
      1: { color: "#31A1C1", curveType: "function" },
    },
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

export default Areachart2;
