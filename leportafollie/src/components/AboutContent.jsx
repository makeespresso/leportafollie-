import React from 'react';
import AnaImg from '../img/mephoto.JPG';
import palm from '../img/palm.png';

export default function AboutContent() {
    return (

        <div id="Generalbackground">
<div className="AboutGeneralSection"> 
<div className="FirstHalfWrap">
<div className="FirstHalfWrap-img">
{/* <img className="avatar" src = {AnaImg} alt="Ana S." />  */}
</div>
</div>
<div className="SecondHalfWrap">
<div className="SecondHalfWrap-text">
    <h1>About</h1>
    <span>Me</span>
    <br></br><br></br>
    <p>I am a Front-End Developer and UX/UI Designer with five years of experience in the education technology space. I have seen firsthand how technology breaks down barriers and gives us all the opportunity to expand our knowledge and change our life regardless of our circumstances.</p>
    <br></br>
    <p>I speak Spanish, Italian, and English fluently and bring diversity, grit, and international experience to the table. I enjoy taking an idea from inception to implementation and strive to work with colleagues and companies that make products with humans in mind.</p>   
    <br></br>
    <img className="kophe" src = {palm} alt="Makeespresso"/>
</div>
</div>
</div>
</div>
    )
}
