import React, { Component } from 'react';
import AnaImg from '../img/mephoto.png';
import coffee from '../img/kophe.svg'
import Banner from '../components/Banner';
import SkillSection from '../components/SkillSection';
import BannerSpacing from '../components/BannerSpacing'


class About extends Component {

    render() {
        return (

<>
                <div className="AboutGeneralSection">
                    <div className="FirstHalfWrap">
                        <div className="ThirdDiv">
                            <img className="avatar" src = {AnaImg} alt="Ana S." /> 
                        </div>
                    </div>
                    <div className="SecondHalfWrap">
                        <section className="ThirdDivText">
                        <p>I am a Front-End Developer and UX/UI Designer with five years of experience in the education technology space. I have seen firsthand how technology breaks down barriers and gives us all the opportunity to expand our knowledge and change our life regardless of our circumstances.</p>
                        <br></br>
                        <br></br>
                        <br></br>
                        <p>I speak Spanish, Italian, and English fluently and bring diversity, grit, and international experience to the table. I enjoy taking an idea from inception to implementation and strive to work with colleagues and companies that make products with humans in mind.</p>   
                        <br></br>
                        <br></br>
                        <div className="kophe">
                        <img className="kophe" src = {coffee} alt="Makeespresso"/>
                        </div>
                        </section>
                    </div>
                </div>
                <Banner/>
                <SkillSection/>
                <BannerSpacing/>
                </>

        );
    }
}

export default About;

                                                {/* <div className="ThirdDiv height2"> */}
                            {/* <img className="avatar" src = {AnaImg} alt="Ana S." /> */}
                        {/* </div> */}