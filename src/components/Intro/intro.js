import React from 'react';
import './intro.css';
import bg from '../../assets/image.png'
import btnimg from '../../assets/hireme.png'
import { Link } from 'react-scroll';

const Intro = () => {
  return (
    <section id='intro'>
        <div className='introContent'>
            <span className='hello'>Hello,</span>
            <span className='introText'>I am <span className='introName'>Emmanuel</span> <br/>Frontend Developer</span>
            <p className='introPara'>I am a skilled engineer and web developer with experience in creating<br/> visually apealing and user friendly websites and products.</p>
            <Link><button className='btn'><img src={btnimg} className='btnImg'/> Hire me</button></Link>
        </div>
        <img src={bg} alt='Profile' className='bg' />
    </section>
  )
}

export default Intro;
