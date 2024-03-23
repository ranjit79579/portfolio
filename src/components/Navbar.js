import React from 'react'
import './Navbar.css'
import { Link } from 'react-scroll';
import pdf from '../assets/Ranjit Kumar.pdf'
// import navImg  from '../assets/nav-img.png';


const Navbar = () => {
  return (
    <>
      <div className='navbar'>

        <div className='nav-img'>
          {/* <div className="img">
            <img src={navImg} height='72px' width='150px' alt="navImg" />
          </div> */}
          <p className='img'></p>
        </div>

        <div className='nav-items'>

          <Link to='goHome' spy={true} smooth={true} offset={-100} duration={0}>
            <p>Home</p>
          </Link>
          <Link to='About' spy={true} smooth={true} offset={-100} duration={0}>
            <p>About Me</p>
          </Link>
          <Link to='Skills' spy={true} smooth={true} offset={-100} duration={0}>
            <p>Skills</p>
          </Link>
          <Link to='Projects' spy={true} smooth={true} offset={-100} duration={0}>
            <p>Projects</p>
          </Link>
          <Link to='Contact' spy={true} smooth={true} offset={-100} duration={0}>
            <p>Contact</p>
          </Link>
          <a className="btn btn-primary nb" href={pdf} role="button" download='Ranjit Kumar Resume.pdf'>Resume</a>

        </div>

      </div>
    </>

  )
}

export default Navbar
