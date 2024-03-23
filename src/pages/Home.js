import React from 'react'
import './Home.css'
import hi from '../assets/hi.png'
import Typewriter from 'typewriter-effect';
import pdf from '../assets/Ranjit Kumar.pdf'
import Zoom  from 'react-reveal/Zoom';


const Home = () => {
  return (
    <>
      <div className='homebg' id='goHome' >
        <div className='row g-0 his'>
          <Zoom>
          <div className='col-md-6 hd '>
            <p className='hello'>Hello, I am 👋</p>
            <p className='rk'>Ranjit Kumar</p>
            <p className='fs'>
              <Typewriter
                options={{
                  strings: [' Full Stack MERN Developer !'],
                  autoStart: true,
                  loop:  true,
                }}
              />
            </p>
            <a className="btn btn-primary hb" href={pdf} role="button" download='Ranjit Kumar Resume.pdf'>Download Resume</a>
          </div>
          </Zoom>

          <div className='col-md-6 hi'>
            <img src={hi} height='300px' width='340px' alt="hi" />
          </div>
        </div>
      </div>
    </>

  )
}

export default Home
