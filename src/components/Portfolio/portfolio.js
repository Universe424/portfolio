import React, { useState } from 'react';
import './portfolio.css';
import firstPortfolio from '../../assets/portfolio1.png';
import afrotada from '../../assets/afrotada.webp';
import fusion360 from '../../assets/fusion360.png';
import skymit from '../../assets/skymit.jpg';
import dufil from '../../assets/dufil.jpeg';
import placeholder1 from '../../assets/portfolio-1.png';
import placeholder2 from '../../assets/portfolio-2.png';
import placeholder3 from '../../assets/portfolio-3.png';
import placeholder4 from '../../assets/portfolio-4.png';

const placeholders = (images) =>
  images.map((image) => ({ title: 'coming soon', image, comingSoon: true }));

// Tip: keep each section at 3, 6, 9... cards (real + placeholders)
// so the grid always ends on a full row. When you finish a real project,
// swap it in for a placeholder instead of adding a new card.
const SECTIONS = [
  {
    id: 'frontend',
    label: 'Frontend',
    title: 'Frontend Experience',
    projects: [
      {
        title: 'First portfolio',
        image: firstPortfolio,
        href: 'https://thunderous-biscochitos-52c9b2.netlify.app',
      },
      {
        title: 'Afrotada',
        image: afrotada,
        href: 'https://www.afrotada.com/about-us',
      },
      ...placeholders([placeholder1, placeholder3, placeholder4, placeholder2]),
    ],
  },
  {
    id: 'engineering',
    label: 'Engineering',
    title: 'Engineering Experience',
    projects: [
      { title: 'Fusion 360', image: fusion360 },
      { title: 'Skymit Industrial training', image: skymit },
      { title: 'Dufil Prima Foods', image: dufil },
      ...placeholders([placeholder4, placeholder3, placeholder2]),
    ],
  },
];

const FILTERS = [{ id: 'all', label: 'All' }, ...SECTIONS];

const Caption = ({ title, href, comingSoon }) => {
  if (href) {
    return (
      <a className='workLink' href={href} target='_blank' rel='noopener noreferrer'>
        {title} <span aria-hidden='true'>&nearr;</span>
      </a>
    );
  }
  if (comingSoon) return <em className='workSoon'>{title}</em>;
  return <span>{title}</span>;
};

const Project = ({ title, image, href, comingSoon }) => (
  <figure className={`work glass glow reveal${comingSoon ? ' work--soon' : ''}`}>
    <div className='workMedia'>
      <img
        src={image}
        alt={comingSoon ? 'Upcoming project' : title}
        className='worksImg'
        loading='lazy'
      />
      {comingSoon && <span className='workBadge'>Soon</span>}
    </div>
    <figcaption>
      <Caption title={title} href={href} comingSoon={comingSoon} />
    </figcaption>
  </figure>
);

const Portfolio = () => {
  const [filter, setFilter] = useState('all');

  const visibleSections = filter === 'all' ? SECTIONS : SECTIONS.filter(({ id }) => id === filter);

  return (
    <section id='works'>
      <h2 className='worksTitle gradientText reveal'>My Portfolio</h2>
      <p className='worksDescription reveal'>
        Below are a few of my experiences in both Frontend development and Engineering in general
        over the years.
      </p>

      <div className='worksTabs' role='group' aria-label='Filter projects'>
        {FILTERS.map(({ id, label }) => (
          <button
            key={id}
            type='button'
            className='worksTab'
            aria-pressed={filter === id}
            onClick={() => setFilter(id)}
          >
            {label}
          </button>
        ))}
      </div>

      {/* key restarts the fade-in whenever the filter changes */}
      <div className='worksPanel' key={filter}>
        {visibleSections.map(({ id, title, projects }) => (
          <React.Fragment key={id}>
            <h3 className='experienceTitle'>{title}</h3>
            <div className='worksImgs'>
              {projects.map((project, index) => (
                <Project key={`${project.title}-${index}`} {...project} />
              ))}
            </div>
          </React.Fragment>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
