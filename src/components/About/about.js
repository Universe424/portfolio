import React from 'react';
import './about.css';
import WebDesign from '../../assets/website-design.png';
import Engineering from '../../assets/gears.png';
import Bilingual from '../../assets/bilingual.png';

const SKILLS = [
  {
    title: 'Website Design',
    icon: WebDesign,
    alt: 'Website design icon',
    description:
      'I specializing in building responsive, visually appealing, and user-friendly websites. I am also a collaborative team player committed to delivering functional, high-quality web solutions.',
  },
  {
    title: 'Mechanical Engineering',
    icon: Engineering,
    alt: 'Mechanical engineering icon',
    description:
      'I hold a degree in Mechanical Engineering from Olabisi Onabanjo University, with five years of academic training and practical experience in the automotive sector. I also have hands-on industrial experience at Indomie Industry, supporting production operations, equipment maintenance, and machine performance monitoring.',
  },
  {
    title: 'Bilingual',
    icon: Bilingual,
    alt: 'Bilingual icon',
    description: 'I am proficient in both English and German, with strong verbal communication skills in both languages.',
  },
];

const About = () => (
  <section id='about'>
    <h2 className='aboutTitle gradientText reveal'>What I offer</h2>
    <p className='aboutDescription reveal'>
      Below are a few of the skills I offer and can add to your team.
    </p>
    <p className='aboutPersonality glass reveal'>
      <strong>My Professional Philosophy:</strong> I am a curious, goal-driven individual with a strong passion for innovation, continuous learning, and problem-solving. I believe in approaching challenges with determination, exploring new possibilities, and turning ideas into practical solutions. My interests extend beyond engineering and technology to nature, science, and the mysteries of the universe, reflecting my desire to understand how things work.

With a background in Mechanical Engineering and practical industrial experience at Indomie Industry, I have gained exposure to production-line operations, preventive maintenance, machine inspections, equipment performance monitoring, and breakdown maintenance. I am particularly interested in combining mechanical engineering principles with software development and emerging technologies to create smarter, more efficient solutions.

Above all, I believe in thinking beyond limitations, embracing challenges, and continuously pursuing opportunities to make meaningful contributions. <strong className='gradientText'>I THINK BIG. I BUILD WITH PURPOSE</strong>.
    </p>

    <ul className='skillBars'>
      {SKILLS.map(({ title, icon, alt, description }) => (
        <li key={title} className='skillBar glass glow reveal'>
          <div className='skillIcon'>
            <img src={icon} alt={alt} className='skillBarImg' />
          </div>
          <div className='skillBarText'>
            <h2>{title}</h2>
            <p>{description}</p>
          </div>
        </li>
      ))}
    </ul>
  </section>
);

export default About;
