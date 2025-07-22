import React from 'react';
import './footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className='footer'>
      &copy; {currentYear} Emmanuel Balogun. All rights reserved.
    </footer>
  );
}

export default Footer;
