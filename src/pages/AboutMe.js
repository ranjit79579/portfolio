import React from 'react'
import './AboutMe.css'
import mp from '../assets/mp.jpg'

const AboutMe = () => {
  return (
    <div className='aboutbg' >
      <div className=' about'>
        <p id='About'>ABOUT ME</p>
      </div>
      <div className='fd'>
        <div className='  mp'>
          <img src={mp} height='241.91px' width='241.91px' alt="mp" />
        </div>
        <div className=' aboutme'>
          <p>An inspired team player, always curious about new problems and learning new things to deliver an out-of-the-box solution with complete ownership. I hope to work in a challenging environment as a specialized MERN stack developer.</p>
        </div>
      </div>
    </div>
  )
}

export default AboutMe
