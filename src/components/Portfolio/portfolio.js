import React from 'react'
import './portfolio.css';
import firstPortfolio from'../../assets/portfolio1.png';
import afrotada from'../../assets/afrotada.webp';
import fusion360 from'../../assets/fusion360.png';
import skymit from'../../assets/skymit.jpg';
import Portfolio3 from'../../assets/portfolio-1.png';
import Portfolio4 from'../../assets/portfolio-2.png';
import Portfolio5 from'../../assets/portfolio-3.png';
import Portfolio6 from'../../assets/portfolio-4.png';

const Portfolio = () => {
  return (
    <section id='works'>
      <h2 className='worksTitle'>My Portfolio</h2>
      <span className='worksDescription'>Below contains a few of my experience in both Frontend development and Engineering in general over the years</span>
      <div className='experienceTitle'>Frontend Experience</div>
      <div className='worksImgs'>
        <div>
            <img src={firstPortfolio} alt='First portfolio' className='worksImg' />
            <a href='https://thunderous-biscochitos-52c9b2.netlify.app' target='_blank'><p className='imgDescription'>first portfolio</p></a>
        </div>
        <div>
            <img src={afrotada} alt='' className='worksImg' />
            <a href='https://www.afrotada.com/about-us' target='_blank'><p className='imgDescription'>Afrotada</p></a>
        </div>
        <div>
            <img src={Portfolio3} alt='' className='worksImg' />
            <p className='imgDescription'><i>coming soon</i></p>
        </div>
        <div>
            <img src={Portfolio5} alt='' className='worksImg' />
            <p className='imgDescription'><i>coming soon</i></p>
        </div>
        <div>
            <img src={Portfolio6} alt='' className='worksImg' />
            <p className='imgDescription'><i>coming soon</i></p>
        </div>
        <div>
            <img src={Portfolio4} alt='' className='worksImg' />
            <p className='imgDescription'><i>coming soon</i></p>
        </div>
      </div>
      <div className='experienceTitle'>Engineering Experience</div>
      <div className='worksImgs'>
        <div>
            <img src={fusion360} alt='' className='worksImg' />
            <p>Fusion 360</p>
        </div>
        <div>
            <img src={skymit} alt='' className='worksImg' />
            <p>Skymit Industrial training</p>
        </div>
        <div>
            <img src={Portfolio6} alt='' className='worksImg' />
            <p><i>coming soon</i></p>
        </div>
        <div>
            <img src={Portfolio5} alt='' className='worksImg' />
            <p><i>coming soon</i></p>
        </div>
        <div>
            <img src={Portfolio4} alt='' className='worksImg' />
            <p><i>coming soon</i></p>
        </div>
        <div>
            <img src={Portfolio3} alt='' className='worksImg' />
            <p><i>coming soon</i></p>
        </div>
      </div>
    </section>
  )
}

export default Portfolio;
