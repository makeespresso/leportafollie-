import React from "react";
import "./App.css";
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
    <Navbar/>
    <div className="content">
            <div className="aboutContent">
              <p>
                Hello, I am a Product Designer and Web Developer based in
                NYC, currently exploring Mar de Cortéz 🌊🌵🌞. I speak Spanish, English and
                Italian. Barista by passion and fan of Mediterranean cuisine. ✌🏼
              </p>
            </div>
            <div className="projects list-section">
              <h2>
                <span>Selected work 2019-2021</span>
              </h2>
              <ul>
                <li className="title">Localsumer - Product Design</li>
                <p>From <a href="https://www.behance.net/gallery/99482723/Localsumer-Business-Directory" target="_blank">ideation</a> to launch of the <a href="https://www.localsumer.com/" target="_blank">web app</a>.</p>
                Learn more about Localsumer in this <a href="https://www.youtube.com/watch?v=Tjxtfp9kzco" target="_blank">video</a>. 👈🏼
                <p><i> (psst... psst... before launching we made it to round two of <a href="https://masschallenge.org/programs-mexico" target="_blank">MassChallenge Mexico</a>, and we celebrate that! 🎉)</i></p>
                <p>Also, don't forget to follow us on <a href="https://www.instagram.com/localsumer/" target="_blank">IG</a>!😉</p>
                <br></br>
                <li className="title">Flekora - UX/UI Design, Web Development</li>
                <p>Ideated, <a href="https://www.behance.net/gallery/100190355/Flekora-UXUI-Case-Study" target="_blank">created</a> and programmed <a href="https://weareflekora.com/#Services" target="_blank">Flekora's website</a>.👾</p>
                <p>Flekora is a boutique design agency offering UX/UI design, strategy, branding services. 💫</p>
                <br></br>
                <li className="title">ETF - UX/UI Design</li>
                <p>Web App redesign 📸</p> 
                <p>Watch the <a href="https://drive.google.com/file/d/1dii1So3FnSlWGIKlEYGQzykfzgPyjM2o/view?usp=sharing" target="_blank">final result</a>.</p>
                <p>See the <a href="https://drive.google.com/file/d/1WnxsNw5WEzZKmNrmvGL2C5YJhvhwf1GD/view?usp=sharing" target="_blank">design process</a> 🔁 and <a href="https://drive.google.com/file/d/1GCHbtdNG2Vdc5MCP9tqimNDzB2VZwgFE/view?usp=sharing" target="_blank">visual design</a>.🎨</p>
                <br></br>
                <li className="title">XO Espresso Bar - UX/UI Consultation </li>
                <p>
                  Collaboration with specialty coffee shop with Aussie vibes and instagrammable drinks in the heart of Miami beach. 🏖
                  Designed talent pipeline to help the company accelerate and facilitate their hiring process as they continue to grow.</p> 
                  <p>Take a look at the case study <a href="https://www.canva.com/design/DADua4nuPws/tWNtNjv26HwHCymlfxe0hw/view?utm_content=DADua4nuPws&utm_campaign=designshare&utm_medium=link&utm_source=viewer" target="_blank">here</a>. Also, their <a href="https://www.instagram.com/xoespressobar/" target="_blank">IG</a> is so chic! 💁🏻‍♀️☕️</p>
              </ul>
              <br></br>
              <br></br>
              <h2>
                <span>Collaborations</span>
              </h2>
              <ul>
                <li className="title">Terapify</li>
                <p>
                  Collaborated with <a href="https://startuplinks.world/" target="_blank">Startuplinks</a> to provide UX/UI feedback to high impact startups in
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
                  led the first intro classes taught in Spanish for LATAM!👩🏻‍💻🌎
                </p>
              </ul>
              <br></br>
            </div>
          </div>
        </div>
  );
}
export default App;
