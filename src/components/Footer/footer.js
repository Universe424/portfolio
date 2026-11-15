import React from 'react';
import './footer.css';
import { animateScroll } from 'react-scroll';

const OWNER = 'Emmanuel Balogun';

const Footer = () => (
  <footer className='footer'>
    <p className='footerText'>
      &copy; {new Date().getFullYear()} {OWNER}. All rights reserved.
    </p>
    <button
      type='button'
      className='toTop'
      onClick={() => animateScroll.scrollToTop({ duration: 500, smooth: true })}
    >
      Back to top <span aria-hidden='true'>&uarr;</span>
    </button>
  </footer>
);

export default Footer;
