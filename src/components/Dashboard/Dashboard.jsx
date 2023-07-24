import React from "react";
import "./Dashboard.css";
import Navbar from "../Navbar/Navbar";
import Cards from "../Cards/Cards";
import Graphs1 from "../Graphs1/Graphs1";
import Graphs2 from "../Graphs2/Graphs2";
// import Table from "../Table/Table";
import Chat from "../Chat/Chat";

const Dashboard = () => {
  return (
    <div className="dashboard_main">
      <section className="dashboard_cards">
        <Cards />
      </section>
      <section className="dashboard_graph1">
        <Graphs1 />
      </section>
      <section className="dashboard_graph2">
        <Graphs2 />
      </section>
      <section className="dashboard_tables">
        <div>{/* <Table /> */}</div>
        <div>
          <Chat />
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
