import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {
  render() {
    return (
      <div className="Navbarwidth">
      <div id="Navbar">
        <section id="Links">
          <Link to="/projects/localsumer"><p>Localsumer</p></Link>
          <Link to="/projects/xoespressobar"><p>XO Espresso Bar</p></Link>
          <Link to="/projects/Escogetusfotos"><p>Escoge Tus Fotos</p></Link>
          <Link to="/projects/Flekora"><p>Flekora</p></Link>
        </section>
      </div>
      </div>
    )
  }
}