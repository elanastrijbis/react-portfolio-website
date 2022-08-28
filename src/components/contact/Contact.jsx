import React from 'react'
import './contact.css'
import {MdOutlineMail} from 'react-icons/md'
import {BsLinkedin} from 'react-icons/bs'
import {BsWhatsapp} from 'react-icons/bs'
import { useRef } from 'react';
import emailjs from 'emailjs-com'
import { useState } from 'react'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_eltso4c', 'template_sat70p7', form.current, 'xc7X4EY5tT9R9u5J_')

    e.target.reset()
  };

  const isValidEmail = (email) => {
    return /\S+@\S+\.\S+/.test(email);
  }

  const handleChange = event => {
    if (!isValidEmail(event.target.value)) {
      setError('Email is invalid');
    } else {
      setError(null);
    }
  }

  const readyToSend = (name, message, email) => {
    if (name && email && message === ""){
      setButtonContent(false)
    } else {
      setButtonContent(true)
    }
  }

  // const [name, setName] = useState('');
  // const [message, setMessage] = useState('');
  const [error, setError] = useState(null);
  const [buttonContent, setButtonContent] = useState(false)

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact me</h2>
      <div className="container contact__container">
        <div className="contact__options">
            <a href="mailto:ehgestrijbis@gmail.com">
          <article className="contact__option">
            < MdOutlineMail className='contact__option-icon' />
            <h4>Email</h4>
            Send a message
          </article>
            </a>
            <a href="https://www.linkedin.com/in/elanastrijbis">
          <article className="contact__option">
              < BsLinkedin className='contact__option-icon'/>
              <h4>Linked In</h4>
              Connect with me
          </article>
            </a>
          <article className="contact__option">
            <a href="https://api.whatsapp.com/send?phone=+61401803312">
              < BsWhatsapp className='contact__option-icon'/>
              <h4>Whatsapp</h4>
          Send a message</a>
          </article>
        </div>
        {/* END OF CONTACT OPTIONS */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="Your Full Name" required />
            {error && <h5 className='error'>{error}</h5>}
          <input type="email" name='email' placeholder='Your Email' onChange={handleChange} required  />
          <textarea name="message" rows="7" placeholder="Your Message"  required></textarea>
          <button type='submit' onClick={readyToSend} className='btn btn-primary'>{buttonContent ? "Message Sent!" : "Send message"}</button>
        </form>
      </div>
    </section>
  )
}

export default Contact
