import React, { useRef } from 'react';
import './contact.css';
import emailjs from 'emailjs-com';
import whatsappIcon from '../../assets/whatsapp.png';
import linkedinIcon from '../../assets/linkedin.jpg';
import twitterIcon from '../../assets/twitter.png';
import instagramIcon from '../../assets/instagram.png';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_z9w6vur',
      'template_q9aa1op',
      form.current,
      's1ufLS19ImGb9g4EW'
    ).then(
      (result) => {
        console.log(result.text);
        alert('Message sent successfully!');
      },
      (error) => {
        console.error('EmailJS error:', error);
        alert('An error occurred. Please try again.');
      }
    );

    e.target.reset(); //reset the form
  };

  return (
    <section id='contactPage'>
        <div id='contact'>
            <h1 className='contactPageTitle'>Contact Me</h1>
            <span className='contactDescription'>Please fill out the form below to discuss any work oppurtunities.</span>
            <form className='contactForm' ref={form} onSubmit={sendEmail}>
                <input type='text' name='user_name' className='name' placeholder='Please enter your name' required />
                <input type='email' name='user_email' className='email' placeholder='Please enter your email' required />
                <textarea className='msg' name='message' rows='5' placeholder='Your message' required></textarea>
                <button type='submit' value='send' className='submitBtn'>Submit</button>
                <div className='links'>
                    <a href='https://wa.me/2348146606313' target='_blank'><img src={whatsappIcon} alt='whatsapp' className='oLink' /></a>
                    <a href='https://www.linkedin.com/in/emmanuel-balogun-1818ab358' target='_blank'><img src={linkedinIcon} alt='linkedin' className='oLink' /></a>
                    <a href='https://x.com/Universe42424' target='_blank'><img src={twitterIcon} alt='twitter' className='link' /></a>
                    <a href='https://www.instagram.com/balonuel4' target='_blank'><img src={instagramIcon} alt='instagram' className='link' /></a>
                </div>
            </form>
        </div>
    </section>
  );
}

export default Contact
