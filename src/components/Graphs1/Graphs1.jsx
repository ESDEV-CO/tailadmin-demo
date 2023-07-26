import React from "react";
import "./Graphs1.css";

import { IoIosRadioButtonOn } from "react-icons/io";
import { AiOutlineDown } from "react-icons/ai";
import AreaChart from "../Charts/Areachart";
import StackedBarChart from "../Charts/Stackedbar";
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
              <p>Total Revenue</p>
              <h5>12.04.2022 - 12.05-2022</h5>
            </span>
            <span className="legends_radio2">
              <IoIosRadioButtonOn />
            </span>
            <span className="legends_info2">
              <p>Total Sales</p>
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
          <AreaChart />
        </div>
      </div>
      <div className="graphs1_barchart">
        <div className="barchat_info">
          <div className="barchat_info_heading">
            <h2>Profit this week</h2>
            <button>
              The Week <AiOutlineDown />
            </button>
          </div>
          <div className="barchat_info_legends">
            <span className="legends_radio">
              <IoIosRadioButtonOn />
              <h6>Revenue</h6>
            </span>
            <span className="legends_radio2">
              <IoIosRadioButtonOn />
              <h6>Sales</h6>
            </span>
          </div>
        </div>
        <div className="barchat_graph">
          <StackedBarChart />
        </div>
      </div>
    </div>
  );
};

export default Graphs1;
