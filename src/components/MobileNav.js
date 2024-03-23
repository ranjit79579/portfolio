import React, { useState } from 'react'
import './MobileNav.css'
import { IoMenu } from "react-icons/io5";
import { Link } from 'react-scroll';
import pdf from '../assets/Ranjit Kumar.pdf'
import { RxCross1 } from "react-icons/rx";



const MobileNav = () => {

  const [open, setOpen] = useState(false)

  const handleOpen = () => {
    setOpen(!open)
  }

  const handleMenuClick = () => {
    setOpen(false)
  }

  return (
    <><div className="mobile-navbar">
      <div className="mobile-nav">
        <div className='mobile-nav-icon'>
          <button className="mni" onClick={handleOpen} >
            {open ? (<RxCross1 />)
              : (<IoMenu />)}
          </button>
        </div>
        <div className='mobile-nav-image'>
          <p className="mnimg"></p>
        </div>
      </div>

      {open && (
        <div className="mobile-nav-items">
          <div className='nav-items'>

            <Link to='goHome' spy={true} smooth={true} offset={-100} duration={0} onClick={handleMenuClick}>
              <div className='mnisb'>
                <p>Home</p>

              </div>

            </Link>
            <Link to='About' spy={true} smooth={true} offset={-100} duration={0} onClick={handleMenuClick} >
              <div className='mnisb'>
                <p>About Me</p>

              </div>
            </Link>
            <Link to='Skills' spy={true} smooth={true} offset={-100} duration={0} onClick={handleMenuClick} >
              <div className='mnisb'>
                <p>Skills</p>
              </div>
            </Link>
            <Link to='Projects' spy={true} smooth={true} offset={-100} duration={0} onClick={handleMenuClick} >
              <div className='mnisb'>
                <p>Projects</p>
              </div>
            </Link>
            <Link to='Contact' spy={true} smooth={true} offset={-100} duration={0} onClick={handleMenuClick} >
              <div className='mnisb'>
                <p>Contact</p>
              </div>
            </Link>

            <a className="btn btn-primary nb" href={pdf} role="button" download='Ranjit Kumar Resume.pdf' onClick={handleMenuClick} >Resume</a>

          </div>
        </div>
      )}
    </div>
    </>
  )
}

export default MobileNav
