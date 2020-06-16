import React, { Component } from 'react';
import palm from '../img/palm.png';

class About extends Component {
render() {
    return (
    <div className="fixed-navar">
        <div className="Top-navbar">
            <div className="Top-navbar-content">
                <p>A.S.B.</p>
                <section className="kophe-div">
                <img className="kophe" src = {palm} alt="Makeespresso"/></section>
                <p className="flip">2020</p>
            </div>
        </div> 
    </div>
    );
}}

export default About;