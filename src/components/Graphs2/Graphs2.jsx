import React from "react";
import "./Graphs2.css";
import { AiOutlineDown } from "react-icons/ai";
import DonutPieChart from "../Charts/DonutPieChart";
import { IoIosRadioButtonOn } from "react-icons/io";

const Graphs2 = () => {
  return (
    <div className="graph2">
      <div className="graph2_first">
        <div className="first_info">
          <h2>Profit this week</h2>
          <button>
            Monthly <AiOutlineDown />
          </button>
        </div>
        <div className="first_graph">
          <DonutPieChart />
        </div>
        <div className="first_legends">
          <div className="legends">
            <span className="legend_1">
              <IoIosRadioButtonOn />
            </span>
            <div className="g2_legends_info">
              <span>Desktop</span>
              <span>65%</span>
            </div>
          </div>
          <div className="legends">
            <span className="legend_2">
              <IoIosRadioButtonOn />
            </span>
            <div className="g2_legends_info">
              <span>Tablet</span>
              <span>34%</span>
            </div>
          </div>
          <div className="legends">
            <span className="legend_3">
              <IoIosRadioButtonOn />
            </span>
            <div className="g2_legends_info">
              <span>Mobile</span>
              <span>45%</span>
            </div>
          </div>
          <div className="legends">
            <span className="legend_4">
              <IoIosRadioButtonOn />
            </span>
            <div className="g2_legends_info">
              <span>Unknown</span>
              <span>12%</span>
            </div>
          </div>
        </div>
      </div>
      <div className="graph2_second">
        <div className="second_info">
          <h2>Region Labels</h2>
        </div>
        <div className="second_graph">
          <img src={require("../../assets/map.png")} alt="Map" />
        </div>
      </div>
    </div>
  );
};

export default Graphs2;
