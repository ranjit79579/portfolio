import React from 'react'
import './Skills.css'
import html from '../assets/html-5.png'
import css from '../assets/css3.png'
import js from '../assets/javascript.png'
import react from '../assets/react-native.png'
import redux from '../assets/redux.png'
import nodejs from '../assets/node-js.png'
import expressjs from '../assets/express-js.png'
import postman from '../assets/postman-removebg-preview.png'
import mongodb from '../assets/mongodb.png'
import vs from '../assets/visual-studio-code-2019.png'
import bootstrap from '../assets/bootstrap.jpg'
import npm from '../assets/npm.png'
import github from '../assets/github.png'
import firebase from '../assets/firebase.png'
import meterialui from '../assets/material-ui.png'
import sql from '../assets/sql-removebg-preview.png'
import nextjs from '../assets/nextjs-boilerplate-logo.webp'
import typescript from '../assets/typescript.png'
import Fade from "react-reveal/Fade";



const Skills = () => {
  return (
    <div className='skillbg' >

      <div className='skills'>
        <p id='Skills'>MY SKILLS</p>
      </div>


      <div className='ss'>
        <Fade left>
          <div className='main'>
            <div className='icon'>
              <p className='ico'><img src={html} height='70px' alt="" /></p>
            </div>
            <div className='ib'>
              <p className='in'>HTML</p>
            </div>
          </div>
        </Fade>
        <Fade left>
          <div className='main'>
            <div className='icon'>
              <p className='ico'><img src={css} height='70px' alt="" /></p>
            </div >

            <div className='ib'>
              <p className='in'>CSS 3</p>
            </div>
          </div>
        </Fade >
        <Fade left>
          <div className='main'>
            <div className='icon'>
              <p className='ico'><img src={js} height='70px' alt="" /></p>
            </div >
            <div className='ib'>
              <p className='in'>JavaScript</p>
            </div>
          </div>
        </Fade >
        <Fade left>
          <div className='main'>
            <div className='icon'>
              <p className='ico'><img src={react} height='70px' alt="" /></p>
            </div >
            <div className='ib'>
              <p className='in'>React JS</p>
            </div>
          </div>
        </Fade>
        <Fade left>
          <div className='main'>
            <div className='icon'>
              <p className='ico'><img src={redux} height='70px' alt="" /></p>
            </div >
            <div className='ib'>
              <p className='in'>React-Redux</p>
            </div>
          </div>
        </Fade >
        <Fade left>
          <div className='main'>
            <div className='icon'>
              <p className='ico'><img src={nodejs} height='70px' alt="" /></p>
            </div >
            <div className='ib'>
              <p className='in'>Node JS</p>
            </div>
          </div>
        </Fade>
      </div>
      <div className='ss'>
        <Fade left>
          <div className='main'>
            <div className='icon'>
              <p className='ico'><img src={expressjs} height='70px' alt="" /></p>
            </div >
            <div className='ib'>
              <p className='in'>Express JS</p>
            </div>
          </div>
        </Fade >
        <Fade left>
          <div className='main'>
            <div className='icon'>
              <p className='ico'><img src={postman} height='70px' alt="" /></p>
            </div >
            <div className='ib'>
              <p className='in'>Postman</p>
            </div>
          </div>
        </Fade>
        <Fade left>
          <div className='main'>
            <div className='icon'>
              <p className='ico'><img src={mongodb} height='70px' alt="" /></p>
            </div >
            <div className='ib'>
              <p className='in'>MongoDB</p>
            </div>
          </div>
        </Fade >
        <Fade left>
          <div className='main'>
            <div className='icon'>
              <p className='ico'><img src={vs} height='70px' alt="" /></p>
            </div >
            <div className='ib'>
              <p className='in'>Visual Studio</p>
            </div>
          </div>
        </Fade>
        <Fade left>
          <div className='main'>
            <div className='icon'>
              <p className='ico'><img src={bootstrap} height='55px' alt="" /></p>
            </div >
            <div className='ib'>
              <p className='in'>Bootstrap</p>
            </div>
          </div>
        </Fade >
        <Fade left>
          <div className='main'>
            <div className='icon'>
              <p className='ico'><img src={npm} height='70px' alt="" /></p>
            </div >
            <div className='ib'>
              <p className='in'>NPM</p>
            </div>
          </div>
        </Fade>
      </div>
      <div className='ss'>
        <Fade left>
          <div className='main'>
            <div className='icon'>
              <p className='ico'><img src={github} height='70px' alt="" /></p>
            </div >
            <div className='ib'>
              <p className='in'>GitHub</p>
            </div>
          </div>
        </Fade >
        
        <Fade left>
          <div className='main'>
            <div className='icon'>
              <p className='ico'><img src={sql} height='70px' alt="" /></p>
            </div >
            <div className='ib'>
              <p className='in'>SQL</p>
            </div>
          </div>
        </Fade>
      </div>

    </div>
  )
}

export default Skills
