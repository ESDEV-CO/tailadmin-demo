import React from "react";
import "./Graphs1.css";

import { IoIosRadioButtonOn } from "react-icons/io";
import { LineChart, BarChart } from "../Charts/Charts";

const Graphs1 = () => {
  return (
    <div className="graphs1">
      <div className="graphs1_areachart">
        <div className="areachart_info">
          <div className="areachart_legends">
            <span className="legends_radio">
              <IoIosRadioButtonOn />
            </span>
            <span className="legends_info">
              <h2>Total Revenue</h2>
              <h5>12.04.2022 - 12.05-2022</h5>
            </span>
            <span className="legends_radio2">
              <IoIosRadioButtonOn />
            </span>
            <span className="legends_info2">
              <h2>Total Sales</h2>
              <h5>12.04.2022 - 12.05-2022</h5>
            </span>
          </div>
          <div className="areachart_days">
            <button className="active">Day</button>
            <button>Week</button>
            <button>Month</button>
          </div>
        </div>
        <div className="areachart_graph">
          {/* <img src={require("../../assets/graph1.png")} alt="area chart" /> */}
          <LineChart />
        </div>
      </div>
      <div className="graphs1_barchart">
        <BarChart />
      </div>
    </div>
  );
};

export default Graphs1;
