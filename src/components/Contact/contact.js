import React, { useRef } from 'react'
import './contact.css';
import emailjs from '@emailjs/browser';
const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_lw81ghm', 'template_55fe7h4', form.current, {
        publicKey: 'zdDRsqp8b5l2M676x',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };
  
  return (
    <section id="contact">
        <div>
            <h1 className="contactTitle"> Contact Me </h1>
            <span className="contactDesc"> Fill out the form below to contact me by email. </span>
            <form className="contactForm" ref={form} onSubmit={sendEmail}>
                <input type="text" className="name" placeholder='Your Name' name='your_name' />
                <input type="email" className="email" placeholder='Your Email' name='your_email' />
                <textarea type='msg' className="msg" rows="5" placeholder='Your Message' name='message'/>
                <button type='submit' value='Send' className="submitBtn"> Submit </button>
            </form>
        </div>
    </section>
  );
};

export default Contact