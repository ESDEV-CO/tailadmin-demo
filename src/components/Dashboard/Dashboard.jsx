import React from "react";
import "./Dashboard.css";
import Navbar from "../Navbar/Navbar";

const Dashboard = () => {
  return (
    <section>
      <div className="dash_nav">
        <Navbar />
      </div>
      <div className="dashboard"></div>
    </section>
  );
};

export default Dashboard;
