import React from "react";
import "./Dashboard.css";
import Navbar from "../Navbar/Navbar";

const Dashboard = () => {
  return (
    <div>
      <div className="dash_nav">
        <Navbar />
      </div>
      <div className="dashboard">
        <section className="dashboard_cards"></section>
        <section className="dashboard_graph1"></section>
        <section className="dashboard_graph2"></section>
        <section className="dashboard_tables"></section>
      </div>
    </div>
  );
};

export default Dashboard;
