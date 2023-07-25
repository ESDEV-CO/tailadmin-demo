import React from "react";
import "./index.css";

import Dashboard from "./components/Dashboard/Dashboard";
import Aside from "./components/Aside/Aside";
import Navbar from "./components/Navbar/Navbar";

const App = () => {
  return (
    <>
      <div className="dash_container">
        <aside className="container_side">
          <Aside />
        </aside>
        <div className="container_dash">
          <div className="dash_nav">
            <Navbar />
          </div>
          <div className="dash_db">
            <Dashboard />
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
