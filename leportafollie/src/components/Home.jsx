import React, { Component } from "react";
class Home extends Component {
  render() {
    return (
      <div className="home-about">
        <div className="container-about">
          <h1>
            Hi, I am Ana <span>Silvia</span> and I’m a{" "}
            <span>Digital Product Designer</span> that likes working with{" "}
            <span>code</span> & co-founder of Localsumer an online platform to
            support local commerce.
          </h1>
        </div>
        <div className="container-about-bottom">
          <p>
            <a href="http://github.com/makeespresso" target="_blank">
              Github
            </a>
          </p>
          <p>
            <a href="https://www.linkedin.com/in/anasbenedict/" target="_blank">
              LinkedIn
            </a>
          </p>
          <p>
            {" "}
            <a href="mailto:anabenedict12@gmail.com">Email</a>
          </p>
        </div>
      </div>
    );
  }
}

export default Home;
