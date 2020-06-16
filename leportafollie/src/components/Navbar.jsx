import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {palm} from '../img/palm.png';

export default class Navbar extends Component {
  render() {
    return (
<>
<div className="Top-navbar">
  <div className="Top-navbar-content">
  <p>A.S.B.</p>
  <img className="kophe" src = {palm} alt="Makeespresso"/>
  <p className="flip">2020</p>
</div>
</div>
      <div id="Navbar">
        <section id="Links">
          <Link to="/"><h1>Hey, there!</h1></Link>
          <Link to=""><p> I'm Ana </p></Link>
          <Link to="/UxuiDesign"><p>I do UX/UI Design</p></Link>
          <Link to="/Webdevelopment"><p> and websites</p></Link>
          <Link to="/Contact"><p>Let's grab a coffee! </p></Link>
        </section>
      </div>
      </>
    )
  }
}