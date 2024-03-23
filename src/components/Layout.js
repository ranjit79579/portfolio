import React from 'react'
import Navbar from './Navbar'
import Home from '../pages/Home'
import AboutMe from '../pages/AboutMe'
import Skill from '../pages/Skills'
import Projects from '../pages/Projects'
import Contact from '../pages/Contact'
import ScrollToTop from "react-scroll-to-top";
import MobileNav from './MobileNav'


const Layout = () => {
  return (
    <>
      <MobileNav />
      <div className='layout'>
        <Navbar />
        <Home />
        <AboutMe />
        <Skill />
        <Projects />
        <Contact />
      </div>
      <ScrollToTop className='scrolltotop' height='50' width='50' smooth color='#1E90FF' style={{ backgroundColor: '#ffffff', height: '100px', width: '100px', borderRadius: 'px' }} />

      
    </>

  )
}

export default Layout
