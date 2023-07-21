import React from "react";
import "./Graphs2.css";
import DonutPieChart from "../Charts/DonutPieChart";
import { AiOutlineDown } from "react-icons/ai";
import MapArea from "../Maparea/Maparea";

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
        <MapArea />
      </div>
    </div>
  );
};

export default Graphs2;
