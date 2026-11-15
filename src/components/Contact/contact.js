import React, { useRef, useState } from 'react';
import './contact.css';
import emailjs from 'emailjs-com';
import whatsappIcon from '../../assets/whatsapp.png';
import linkedinIcon from '../../assets/linkedin.jpg';
import twitterIcon from '../../assets/twitter.png';
import instagramIcon from '../../assets/instagram.png';

const EMAILJS = {
  serviceId: 'service_z9w6vur',
  templateId: 'template_q9aa1op',
  publicKey: 's1ufLS19ImGb9g4EW',
};

const SOCIAL_LINKS = [
  { name: 'WhatsApp', href: 'https://wa.me/2348146606313', icon: whatsappIcon, round: true },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/emmanuel-balogun-1818ab358',
    icon: linkedinIcon,
    round: true,
  },
  { name: 'Twitter', href: 'https://x.com/Universe42424', icon: twitterIcon },
  { name: 'Instagram', href: 'https://www.instagram.com/balonuel4', icon: instagramIcon },
];

const STATUS_MESSAGES = {
  success: 'Message sent successfully!',
  error: 'An error occurred. Please try again.',
};

const Contact = () => {
  const form = useRef(null);
  const [status, setStatus] = useState('idle'); // idle | sending | success | error

  const sendEmail = async (e) => {
    e.preventDefault();
    setStatus('sending');

    try {
      await emailjs.sendForm(
        EMAILJS.serviceId,
        EMAILJS.templateId,
        form.current,
        EMAILJS.publicKey
      );
      setStatus('success');
      form.current.reset(); // only clear the form when the message actually went through
    } catch (error) {
      console.error('EmailJS error:', error);
      setStatus('error');
    }
  };

  // Hide the old result message as soon as the user starts typing again
  const clearStatus = () => {
    if (status === 'success' || status === 'error') setStatus('idle');
  };

  return (
    <section id='contact'>
      <span className='availability reveal'>
        <span className='availabilityDot' aria-hidden='true' />
        Open to work opportunities
      </span>
      <h2 className='contactPageTitle gradientText reveal'>Contact Me</h2>
      <p className='contactDescription reveal'>
        Please fill out the form below to discuss any work opportunities.
      </p>

      <form
        className='contactForm glass reveal'
        ref={form}
        onSubmit={sendEmail}
        onChange={clearStatus}
      >
        <input
          type='text'
          name='user_name'
          className='formField'
          placeholder='Please enter your name'
          aria-label='Your name'
          autoComplete='name'
          required
        />
        <input
          type='email'
          name='user_email'
          className='formField'
          placeholder='Please enter your email'
          aria-label='Your email'
          autoComplete='email'
          required
        />
        <textarea
          name='message'
          className='formField'
          rows='5'
          placeholder='Your message'
          aria-label='Your message'
          required
        />
        <button type='submit' className='submitBtn' disabled={status === 'sending'}>
          {status === 'sending' ? 'Sending...' : 'Submit'}
        </button>
        <p className={`formStatus formStatus--${status}`} role='status'>
          {STATUS_MESSAGES[status]}
        </p>
      </form>

      <nav className='links' aria-label='Social links'>
        {SOCIAL_LINKS.map(({ name, href, icon, round }) => (
          <a key={name} href={href} target='_blank' rel='noopener noreferrer'>
            <img
              src={icon}
              alt={name}
              className={`socialIcon ${round ? 'socialIcon--round' : 'socialIcon--plain'}`}
            />
          </a>
        ))}
      </nav>
    </section>
  );
};

export default Contact;
