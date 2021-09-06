import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import Localsumer from "./components/Localsumer";
import Xoespressobar from "./components/Xoespressobar";
import Escogetusfotos from "./components/Escogetusfotos";
import Flekora from "./components/Flekora";
import About from "./components/About";
import Projects from "./components/Projects";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />{" "}
      <Route exact path="/projects/localsumer" component={Localsumer} />{" "}
      <Route exact path="/projects/xoespressobar" component={Xoespressobar} />{" "}
      <Route exact path="/projects/Escogetusfotos" component={Escogetusfotos} />{" "}
      <Route exact path="/projects/Flekora" component={Flekora} />{" "}
      <Route exact path="/About" component={About}/>{" "}
      <Route exact path="/Projects" component={Projects} />{" "}
    </Switch>
  );
};
export default Routes;
