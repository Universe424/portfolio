import React from 'react';
import './about.css';
import WebDesign from '../../assets/website-design.png';
import Engineering from '../../assets/gears.png';
import bilingual from '../../assets/bilingual.png';

const About = () => {
  return (
    <section id='about'>
        <span className='aboutTitle'>What I offer</span>
        <span className='aboutDescription'>Below are few of the skills i offer and can add to your team. <br />My Personality: Curiosity fuels me and i do not stop until i achieve a certain goal, I am also a driven to nature and to study the concept of the Universe. In short i am a THINK BIG individual.</span>
        <div className='skillBars'>
            <div className='skillBar'>
                <img src={WebDesign} alt='webDesign' className='skillBarImg' />
                <div className='skillBarText'>
                    <h2>Website Design</h2>
                    <p>I have 2 years experience in Frontend Development, I am also an experienced team player in working towards the development of a fully functional website.</p>
                </div>
            </div>
            <div className='skillBar'>
                <img src={Engineering} alt='appDesign' className='skillBarImg' />
                <div className='skillBarText'>
                    <h2>Mechanical Engineering</h2>
                    <p>I studied Mechanical Engineering at olabisi onabanjo university for 5 years, and I have 2 years practical experience in the Automobile sector.</p>
                </div>
            </div>
            <div className='skillBar'>
                <img src={bilingual} alt='appDesign' className='skillBarImg' />
                <div className='skillBarText'>
                    <h2>Bilingual</h2>
                    <p>I am a convosant speaker of both English and German.</p>
                </div>
            </div>
        </div>
    </section>
  );
}

export default About;
