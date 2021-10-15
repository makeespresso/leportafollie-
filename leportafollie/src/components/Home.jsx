import React, { Component } from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";

class Home extends Component {
  render() {
    return (
      <div className="content">
        <div className="aboutContent">
          <p>
            Hello, I am a Product Designer and enthusiast Web Developer based in
            NYC, currently exploring Mar de Cortéz 🌊🌵🌞. I speak Spanish , English and
            Italian. Barista by passion and fan of Mediterranean cuisine.
          </p>
        </div>
        <div className="projects list-section">
          <h2>
            <span>Selected work 2019-2021</span>
          </h2>
          <ul>
            <li className="title">Localsumer - Product Design</li>
            <p>Work from ideation to launch of the product.
            Localsumer is the go-to platform for consumers to discover all the local products and services in their city and the frictionless onboard ramp to the digital economy, ecommerce, and formal credit for small businesses.</p>
            Learn more about Localsumer in this <a href="https://www.youtube.com/watch?v=Tjxtfp9kzco">video</a> - <i> (psst... psst... we made it to the first round on Mass-Challenge and we, celebrate that!)</i> also, here is our <a href="https://www.localsumer.com/" target="_blank">website</a> and don't forget to us on <a href="https://www.instagram.com/localsumer/" target="_blank">IG</a>!
            <br></br>
            <li className="title">Flekora - UX/UI, Web Development</li>
            <p>
              Our work has to be clear—for hundreds of millions of people. If we
              want to get as close to that as possible, we need to test our
              content and our assumptions along the way.
            </p>
            <br></br>
            <li className="title">Escoge Tus Fotos - UX/UI</li>
            <p>
              Our work has to be clear—for hundreds of millions of people. If we
              want to get as close to that as possible, we need to test our
              content and our assumptions along the way.
            </p>
            <br></br>
            <li className="title">XO Espresso Bar - UX/UI </li>
            <p>
              Collaborated with one of the best specialty coffee shops with Aussie vibes and instagrammable drinks in the Heart of Miami beach. 🏖
              Designed talent pipeline to help the company accelerate and facilitate their hiring process as they continue to grow. Take a look at the case study <a href="https://www.canva.com/design/DADua4nuPws/tWNtNjv26HwHCymlfxe0hw/view?utm_content=DADua4nuPws&utm_campaign=designshare&utm_medium=link&utm_source=viewer" target="_blank">here</a>. Also, their <a href="https://www.instagram.com/xoespressobar/" target="_blank">IG</a> is so chic! 💁🏻‍♀️☕️</p>
          </ul>
          <br></br>
          <br></br>
          <h2>
            <span>Collaborations</span>
          </h2>
          <ul>
            <li className="title">Terapify by Startup Links</li>
            <p>
              Paired with Start-up Links to provide UXUI feedback to startups in
              LATAM. <a href="https://www.terapify.com/" target="_blank"> {" "}Terapify</a>, is a digital platform that provides mental
              health services with professional therapists according
              to your needs.
            </p>
            <p>
              Watch the live video
              <a href="https://fb.watch/8EpT3ixI26/" target="_blank">
                {" "}
                here{" "}
              </a>
              and the
              <a
                href="https://drive.google.com/file/d/1b_s5_9dzjUA8gJbqArP7yIeAbkAub_af/view?usp=sharing"
                target="_blank"
              >
                {" "}
                presentation</a>. ✅👩🏻‍⚕️
            </p>
            <br></br>
            <li className="title">Instructor at General Assembly</li>
            <p>
              Teaching Intro to programming and Intro to UX/UI Design workshops. Recently
              participated in the first intro classes taught in Spanish for LATAM!👩🏻‍💻🌎
            </p>
          </ul>
          <br></br>
        </div>
      </div>
    );
  }
}

export default Home;
