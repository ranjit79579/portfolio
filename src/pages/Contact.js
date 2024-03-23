import React from 'react'
import './Contact.css'
import { MdCall, MdEmail, MdLocationOn } from "react-icons/md";
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa'
import finalcontact from '../assets/finalcontact.png'
import { Fade, Zoom } from 'react-reveal';


const Contact = () => {
  return (
    <div className='contactbg' >
      <div className='contact'>
        <p id='Contact'> CONTACT ME</p>
      </div>
      <div className='con-border'>
        <div className='con-details'>

          <div className='details'>
            <div className='cd'>
              <p>Contact</p>
              <p>Details</p>
            </div>
            <div className='cdp'>
              <p>Connecting with new people</p>
              <p> is always exciting, let's</p>
              <p> connect!</p>
            </div>
            <Zoom>
              <div className='con-way'>
                <div className='cc'>
                  <a href='tel:8294495313' ><MdCall /> +91-8294495313</a>
                </div>
                <div className='ce' >
                  <a href='mailto:ranjit79579@gmail.com'><MdEmail /> ranjit79579@gmail.com</a>
                </div>
                <div className='cl'>
                  <p ><MdLocationOn /> Gaya, Bihar</p>
                </div>
              </div>
            </Zoom>

          </div>

          <div className='animation'>
            <img src={finalcontact} alt="contact-img" height='380px' />
            <p className='design'></p>
          </div>

          <div className='cli'>
            <a className='ci' href='https://www.linkedin.com/in/ranjit79579' target='main' ><FaLinkedin /></a>
            <a className='ci' href='https://github.com/ranjit79579' target='main' ><FaGithub /></a>
            <a className='ci' target='main' href='https://www.instagram.com/ranjit79579?utm_source=qr&igsh=dWVlNHlrNWdsdDNh' ><FaInstagram /></a>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Contact;
