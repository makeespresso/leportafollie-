import React from "react";
import "./App.css";
import Routes from "./Routes";
import HeaderHome from "./components/HeaderHome";

function App() {
  return (
    <div className="App">
      <HeaderHome />
      <Routes/>
    </div>
  );
}
export default App;
