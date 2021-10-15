import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/asbLogo.svg";

export default class Navbar extends Component {
  render() {
    return (
      <div className="NavbarContent">
        <Link to="/">
          <div className="asbLogo">
            <img className="logo" src={logo} alt="Logo" />
          </div>
        </Link>

          <h2><a href="https://www.linkedin.com/in/anasbenedict/" target="_blanks">ana silvia</a></h2>

        <p><a href="https://github.com/makeespresso" target="_blank">Github</a></p>
      </div>
    );
  }
}
