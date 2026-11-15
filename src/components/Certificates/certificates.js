import React, { useEffect, useState } from 'react';
import './certificates.css';
import certificate1 from '../../assets/certificate1.jpg';
import certificate2 from '../../assets/certificate2.png';
import certificate3 from '../../assets/certificate3.jpeg';
import portfolio3 from '../../assets/portfolio-3.png';
import portfolio4 from '../../assets/portfolio-4.png';
import portfolio5 from '../../assets/portfolio-5.png';

// Keep the total at a multiple of 3 so the grid always ends on a full row
const placeholders = [portfolio3, portfolio4, portfolio5].map((image) => ({
  image,
  alt: 'Upcoming certificate',
  label: 'coming soon',
  comingSoon: true,
}));

const CERTIFICATES = [
  {
    image: certificate1,
    alt: 'Mechanical Engineering certificate',
    label: 'B.Eng',
  },
  {
    image: certificate2,
    alt: 'Quality Management certificate',
    label: 'IATF',
  },
  {
    image: certificate3,
    alt: 'Safety certificate',
    label: 'Process Safety in Engineering and Operations',
  },
  ...placeholders,
];

const Caption = ({ label, href, comingSoon }) => {
  if (href) {
    return (
      <a className='certificateLink' href={href} target='_blank' rel='noopener noreferrer'>
        {label} <span aria-hidden='true'>&nearr;</span>
      </a>
    );
  }
  if (comingSoon) return <em className='certificateSoon'>{label}</em>;
  return <span>{label}</span>;
};

const Certificate = ({ image, alt, label, href, comingSoon, onOpen }) => {
  const img = <img src={image} alt={alt} className='certificatesImg' loading='lazy' />;

  return (
    <figure className={`certificate glass glow reveal${comingSoon ? ' certificate--soon' : ''}`}>
      {comingSoon ? (
        <div className='certificateMedia'>{img}</div>
      ) : (
        <button
          type='button'
          className='certificateMedia certificateOpen'
          aria-label={`View ${alt} full size`}
          onClick={onOpen}
        >
          {img}
        </button>
      )}
      <figcaption>
        <Caption label={label} href={href} comingSoon={comingSoon} />
      </figcaption>
    </figure>
  );
};

const Certificates = () => {
  const [active, setActive] = useState(null);

  // While the lightbox is open: Escape closes it and the page behind can't scroll
  useEffect(() => {
    if (!active) return undefined;

    const onKeyDown = (e) => {
      if (e.key === 'Escape') setActive(null);
    };
    const previousOverflow = document.body.style.overflow;

    document.addEventListener('keydown', onKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [active]);

  return (
    <section id='certificates'>
      <h2 className='certificatesTitle gradientText reveal'>My Certificates</h2>
      <p className='certificatesDescription reveal'>
        Below are a few of the certificates I have attained over the years, which show my
        unending quest for knowledge.
        <br />
        I do not run away from challenges; I learn on the job.
      </p>

      <div className='certificatesImgs'>
        {CERTIFICATES.map((certificate, index) => (
          <Certificate
            key={`${certificate.label}-${index}`}
            {...certificate}
            onOpen={() => setActive(certificate)}
          />
        ))}
      </div>

      {active && (
        <div
          className='lightbox'
          role='dialog'
          aria-modal='true'
          aria-label={active.alt}
          onClick={() => setActive(null)}
        >
          <button
            type='button'
            className='lightboxClose'
            aria-label='Close'
            autoFocus
            onClick={() => setActive(null)}
          >
            &times;
          </button>
          <img
            src={active.image}
            alt={active.alt}
            className='lightboxImg'
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
};

export default Certificates;
