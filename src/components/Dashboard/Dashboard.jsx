import React from "react";
import "./Dashboard.css";
import Navbar from "../Navbar/Navbar";

const Dashboard = () => {
  return (
    <section>
      <div className="navbar">
        <Navbar />
      </div>
      <div className="dashboard">
        <h1>Hello</h1>
      </div>
    </section>
  );
};

export default Dashboard;
