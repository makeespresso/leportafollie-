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
        <Link to="/about">
          <p>ana silvia</p>
        </Link>
        <p>+ info </p>
      </div>
    );
  }
}
