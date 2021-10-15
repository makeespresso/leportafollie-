import React, { Component } from "react";
import Navbar from "./Navbar";

class Localsumer extends Component {
  render() {
    return (
      <>
        <div className="article-container">
          <div className="article-content">
            <h1>Localsumer</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
            </p>
            <div className="article-display">
              <p>text</p>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Localsumer;
