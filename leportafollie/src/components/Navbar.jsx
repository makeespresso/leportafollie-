import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {
  render() {
    return (
      <div id="Navbar">
        <section id="Links">
          <Link to="/"><h1>Hey, there!</h1></Link>
          <Link to="/About"><p> I'm Ana </p></Link>
          <Link to="/UxuiDesign"><p>I do UX/UI Design</p></Link>
          <Link to="/Webdevelopment"><p> and websites</p></Link>
          <Link to="/Contact"><p>Let's grab a coffee! </p></Link>
        </section>
      </div>
    )
  }
}