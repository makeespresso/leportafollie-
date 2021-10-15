import React from "react";
import "./App.css";
import Routes from "./Routes";
import Navbar from "./components/Navbar";
import HeaderHome from "./components/HeaderHome";


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes />
      {/* <HeaderHome/> */}
    </div>
  );
}
export default App;
