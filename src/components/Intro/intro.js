import React, { useEffect, useState } from 'react';
import './intro.css';
import bg from '../../assets/image.png';
import btnimg from '../../assets/hireme.png';
import { Link } from 'react-scroll';

// Edit these to change what the hero types out
const ROLES = ['Frontend Developer', 'Mechanical Engineer', 'Big Thinker'];

// Types a word, pauses, deletes it, then moves on to the next one
const useTypewriter = (words, typeSpeed = 80, deleteSpeed = 40, pause = 1600) => {
  const [text, setText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setText(words[0]);
      return undefined;
    }

    const word = words[wordIndex];
    const finishedTyping = !deleting && text === word;
    const delay = finishedTyping ? pause : deleting ? deleteSpeed : typeSpeed;

    const timer = setTimeout(() => {
      if (finishedTyping) {
        setDeleting(true);
      } else if (deleting && text === '') {
        setDeleting(false);
        setWordIndex((i) => (i + 1) % words.length);
      } else {
        setText(deleting ? word.slice(0, text.length - 1) : word.slice(0, text.length + 1));
      }
    }, delay);

    return () => clearTimeout(timer);
  }, [text, deleting, wordIndex, words, typeSpeed, deleteSpeed, pause]);

  return text;
};

const Intro = () => {
  const role = useTypewriter(ROLES);

  return (
    <section id='intro'>
      <div className='introContent'>
        <span className='hello'>Hello,</span>
        <h1 className='introText' aria-label='Emmanuel, Frontend Developer'>
          I am <span className='introName gradientText'>Emmanuel</span>
          <span className='introRole' aria-hidden='true'>
            {role}
            <span className='caret' />
          </span>
        </h1>
        <p className='introPara'>
          I am a skilled Mechanical Engineer and Web Developer with a passion for combining engineering principles and technology to create practical, innovative solutions.

My interests lie in mechanical systems, web technologies, automation, and innovation. I enjoy solving problems, learning new technologies, and transforming ideas into efficient solutions that create real value.
        </p>
        <div className='introActions'>
          <Link to='contact' className='btn' smooth duration={500} offset={-80}>
            <img src={btnimg} alt='' className='btnImg' />
            Hire me
          </Link>
          <Link to='works' className='btn btnGhost' smooth duration={500} offset={-80}>
            View my work
          </Link>
        </div>
      </div>

      <Link to='about' className='scrollHint' smooth duration={500} offset={-80}>
        <span className='scrollMouse' aria-hidden='true' />
        Scroll
      </Link>

      <span className='introOrb' aria-hidden='true' />
      <img src={bg} alt='Emmanuel, frontend developer' className='bg' />
    </section>
  );
};

export default Intro;
