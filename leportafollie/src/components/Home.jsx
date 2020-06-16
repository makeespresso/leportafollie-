import React, { Component } from 'react';
import AnaImg from '../img/mephoto.JPG';
class Home extends Component {
    render() {
        return (
            <div id="GeneralArea">
<div className="Content-grid">
    <div className="half-width style-left">
        <div className="foto-style">
    <img className="avatar" src = {AnaImg} alt="Ana S." /> 
    </div>

    </div>
    <div className="half-width">
    <div className="quarter-width bottom1 style-left style-fixes">
    <h1>About</h1>
    <p>I am a Front-End Developer and UX/UI Designer with five years of experience in the education technology space. I have seen firsthand how technology breaks down barriers and gives us all the opportunity to expand our knowledge and change our life regardless of our circumstances.</p>
    </div>
    <div className="quarter-width style-left">
        <p>I speak Spanish, Italian, and English fluently and bring diversity, grit, and international experience to the table. I enjoy taking an idea from inception to implementation and strive to work with colleagues and companies that make products with humans in mind.</p>   

    </div>
    </div>


</div>
            </div>
        );
    }
}

export default Home;



// <div className="wrapper">
// <article className="content">
// <img className="avatar" src = {AnaImg} alt="Ana S." /> 

// </article>

// <div class="block-a">
// <h1>About</h1>
//   <span>Me</span>
//   
//   </div>
// <div class="block-b">
// <p>I speak Spanish, Italian, and English fluently and bring diversity, grit, and international experience to the table. I enjoy taking an idea from inception to implementation and strive to work with colleagues and companies that make products with humans in mind.</p>   

// </div>


//           </div>