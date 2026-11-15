import React, { useEffect, useRef, useState } from 'react';
import './navbar.css';
import logo from '../../assets/logo.png';
import contactIcon from '../../assets/contact.png';
import menuIcon from '../../assets/menu.png';
import { Link, scroller } from 'react-scroll';

const SCROLL_OFFSET = -80;
const SCROLL_DURATION = 500;

const NAV_LINKS = [
  { to: 'intro', label: 'Home' },
  { to: 'about', label: 'About' },
  { to: 'works', label: 'Portfolio' },
  { to: 'certificates', label: 'Certificates' },
];

const MOBILE_LINKS = [...NAV_LINKS, { to: 'contact', label: 'Contact' }];

// Props shared by every scroll link
const scrollProps = {
  spy: true,
  smooth: true,
  offset: SCROLL_OFFSET,
  duration: SCROLL_DURATION,
  activeClass: 'active',
};

const prefersReducedMotion = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches;

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const progressRef = useRef(null);

  const closeMenu = () => setShowMenu(false);

  const goToContact = () =>
    scroller.scrollTo('contact', {
      smooth: true,
      duration: SCROLL_DURATION,
      offset: SCROLL_OFFSET,
    });

  // Scroll progress bar + glass background once the page has scrolled
  useEffect(() => {
    let frame = 0;

    const update = () => {
      frame = 0;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const progress = max > 0 ? window.scrollY / max : 0;
      if (progressRef.current) progressRef.current.style.transform = `scaleX(${progress})`;
      setScrolled(window.scrollY > 10);
    };

    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      cancelAnimationFrame(frame);
    };
  }, []);

  // One pointer listener for the whole site:
  //  - nudges the aurora background with the mouse (--px / --py)
  //  - moves the spotlight on any ".glow" card (--mx / --my)
  useEffect(() => {
    if (prefersReducedMotion()) return undefined;

    let frame = 0;

    const onMove = (e) => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const root = document.documentElement;
        root.style.setProperty('--px', (e.clientX / window.innerWidth - 0.5).toFixed(3));
        root.style.setProperty('--py', (e.clientY / window.innerHeight - 0.5).toFixed(3));

        const card = e.target instanceof Element ? e.target.closest('.glow') : null;
        if (card) {
          const rect = card.getBoundingClientRect();
          card.style.setProperty('--mx', `${e.clientX - rect.left}px`);
          card.style.setProperty('--my', `${e.clientY - rect.top}px`);
        }
      });
    };

    document.addEventListener('pointermove', onMove, { passive: true });
    return () => {
      document.removeEventListener('pointermove', onMove);
      cancelAnimationFrame(frame);
    };
  }, []);

  // Close the mobile menu with the Escape key
  useEffect(() => {
    if (!showMenu) return undefined;

    const onKeyDown = (e) => {
      if (e.key === 'Escape') setShowMenu(false);
    };

    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [showMenu]);

  return (
    <nav className={`navbar${scrolled ? ' scrolled' : ''}`}>
      <img src={logo} alt='My logo' className='logo' />

      <div className='desktopMenu'>
        {NAV_LINKS.map(({ to, label }) => (
          <Link key={to} to={to} className='desktopMenuListItem' {...scrollProps}>
            {label}
          </Link>
        ))}
      </div>

      <button type='button' className='desktopMenuBtn' onClick={goToContact}>
        <img src={contactIcon} alt='' className='desktopMenuImg' />
        Contact Me
      </button>

      <button
        type='button'
        className='mobMenu'
        aria-label='Toggle menu'
        aria-expanded={showMenu}
        aria-controls='mobile-nav'
        onClick={() => setShowMenu((open) => !open)}
      >
        <img src={menuIcon} alt='' className='mobMenuImg' />
      </button>

      {showMenu && (
        <div id='mobile-nav' className='navMenu'>
          {MOBILE_LINKS.map(({ to, label }) => (
            <Link key={to} to={to} className='listItem' onClick={closeMenu} {...scrollProps}>
              {label}
            </Link>
          ))}
        </div>
      )}

      <span ref={progressRef} className='scrollProgress' aria-hidden='true' />
    </nav>
  );
};

export default Navbar;
