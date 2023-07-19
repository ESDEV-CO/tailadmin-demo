import React from "react";
import { Chart } from "react-google-charts";

const Barchart = () => {
  let data = [
    ["Year", "", "", ""],
    ["2014", 1000, 400, 200],
    ["2015", 1170, 460, 250],
    ["2016", 660, 1120, 300],
    ["2017", 1030, 540, 350],
  ];
  let options = {
    legend: { position: "none" },
  };
  return (
    <Chart
      chartType="Bar"
      width="100%"
      height="70%"
      data={data}
      options={options}
    />
  );
};

export default Barchart;
