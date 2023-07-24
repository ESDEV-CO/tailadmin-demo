import React from "react";
import "./Graphs2.css";
import { AiOutlineDown } from "react-icons/ai";
import DonutPieChart from "../Charts/DonutPieChart";

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
      </div>
      <div className="graph2_second">
        <img src={require("../../assets/map.png")} alt="Map" />
      </div>
    </div>
  );
};

export default Graphs2;
