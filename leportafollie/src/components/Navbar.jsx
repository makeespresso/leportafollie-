import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {
  render() {
    return (
      <div id="Navbar-1">
        <section id="Links">
          <Link to="/"><h1>Hey, there!</h1></Link>
          <Link to="/About"><p> I'm Ana </p></Link>
          <Link to="/Webdevelopment"><p> I make websites</p></Link>
          <Link to="/UxuiDesign"><p>and UX/UI Design</p></Link>
          <Link to="/Contact"><p>Let's grab a coffee! </p></Link>
        </section>
      </div>
    )
  }
}