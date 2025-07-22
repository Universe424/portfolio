import React from 'react'
import './certificates.css';
import certificate1 from'../../assets/certificate1.jpg';
import certificate2 from'../../assets/certificate2.png';
import Portfolio3 from'../../assets/portfolio-3.png';
import Portfolio4 from'../../assets/portfolio-4.png';
import Portfolio5 from'../../assets/portfolio-5.png';
import Portfolio6 from'../../assets/portfolio-6.png';

const Certificates = () => {
  return (
    <section id='certificates'>
      <h2 className='certificatesTitle'>My Certificates</h2>
      <span className='certificatesDescription'>Below are a few of my certificates i have attained over the years, which shows my unending quest for knowledge. <br/>I do not run away from challenges, I learn on the job.</span>
      <div className='certificatesImgs'>
        <div>
            <img src={certificate1} alt='Mechanical Engineering' className='certificatesImg' />
            <p>B.Eng</p>
        </div>
        <div>
            <img src={certificate2} alt='Quality Management' className='certificatesImg' />
            <a href='https://cdn01.alison-static.net/parchment-previews/6633483ca752a30be98a91e1dc140987.jpg' target='_blank'><p className='imgDescription'>IATF</p></a>
        </div>
        <div>
            <img src={Portfolio3} alt='' className='certificatesImg' />
            <p className='imgDescription'><i>coming soon</i></p>
        </div>
        <div>
            <img src={Portfolio4} alt='' className='certificatesImg' />
            <p className='imgDescription'><i>coming soon</i></p>
        </div>
        <div>
            <img src={Portfolio5} alt='' className='certificatesImg' />
            <p className='imgDescription'><i>coming soon</i></p>
        </div>
        <div>
            <img src={Portfolio6} alt='' className='certificatesImg' />
            <p className='imgDescription'><i>coming soon</i></p>
        </div>
      </div>
    </section>
  )
}

export default Certificates;
