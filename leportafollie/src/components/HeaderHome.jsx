import React from "react";
import { Link } from "react-router-dom";

export default function HeaderHome() {
  return (
    <div className="content">
      <div className="aboutContent">
        <p>
         Hello, I am a UXUI Designer and enthusiast
          Web Developer based in NYC, currently exploring Mar de Cortéz. I speak
          Spanish, English and Italian. Barista, by passion and fan of
          Mediterranean cuisine.
        </p>
      </div>
      <div className="projects list-section">
        <h2><span>Selected work 2019-2021</span></h2>
        <ul>
          <li className="title">Localsumer - Product Design</li>
          <p>Our work has to be clear—for hundreds of millions of people. If we want to get as close to that as possible, we need to test our content and our assumptions along the way.</p>
          <br></br>
          <li className="title">Flekora - UX/UI, Web Development</li>
          <p>Our work has to be clear—for hundreds of millions of people. If we want to get as close to that as possible, we need to test our content and our assumptions along the way.</p>
          <br></br>
          <li className="title">Escoge Tus Fotos - UX/UI</li>
          <p>Our work has to be clear—for hundreds of millions of people. If we want to get as close to that as possible, we need to test our content and our assumptions along the way.</p>
          <br></br>
          <li className="title">XO Espresso Bar - UX/UI </li>
          <p>Our work has to be clear—for hundreds of millions of people. If we want to get as close to that as possible, we need to test our content and our assumptions along the way.</p>
        </ul>
      </div>
      <div className="info">
        <ul>
          <li>about</li>
          <li>linkedin</li>
          <li>github</li>
          <li>Behance</li>
        </ul>
      </div>
    </div>
  );
}
