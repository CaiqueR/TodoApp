import React from "react";
import "./App.css";

import Menu from "./components/menu/menu";
import Routes from "./main/routes";

function App() {
  return (
    <div className="container">
      <Menu />
      <Routes />
    </div>
  );
}

export default App;
