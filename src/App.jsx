import React from "react";
import "./index.css";

import Dashboard from "./components/Dashboard/Dashboard";
import Aside from "./components/Aside/Aside";

const App = () => {
  return (
    <div className="dash_container">
      <aside className="Aside">
        <Aside />
      </aside>
      <div className="Dashboard">{/* <Dashboard /> */}</div>
    </div>
  );
};

export default App;
