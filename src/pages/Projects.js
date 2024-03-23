import { useState } from 'react'
import React from 'react'
import './Projects.css'


const Projects = () => {
  const [seeMore, setSeeMore] = useState(true)

  return (
    <div className='projectbg' >
      <div className='projects' >
        <p id='Projects'>MY PROJECTS</p>
      </div>


      {/* project 1 */}
        <div className='pro-items'>

          <div className='pro-img'>
            <p className='pimg1'></p>
          </div>

          <div className='pro-details'>

            <p className='pn'>Blog-app :-</p>
            <p className='pd'>This is a Cloud Based Project Management Application.
              It is a blog website where users can
              create, update and delete their own blogs and
              also see other user's blogs.
            </p>

            <pre className='stacks'>
              <p id='ts'>TECHSTACKS:-</p>
              <p>HTML</p>
              <p>CSS</p>
              <p>JS</p>
              <p>React</p>
              <p>Redux</p><br />
              <p>Material UI</p>
              <p>Node JS</p>
              <p>Express</p>
              <p>MongoDB</p>
            </pre>

            <div className='pl'>
              <a className="btn " href='https://euphonious-platypus-202d10.netlify.app' target='main' role="button" >Live Link</a>
              <a className="btn " href='https://github.com/ranjit79579/blog-app' target='main' role="button" >GitHub</a>
            </div>

          </div>
        </div>

      {/* project 2 */}

      <div className='pro-items'>

        <div className='pro-img'>
          <p className='pimg2'></p>
        </div>

        <div className='pro-details'>

          <p className='pn'>Chatting-app :-</p>
          <p className='pd'>This is a chatting website where users can chat with other users or friends and also see that who left the chat or who join the chat for chatting. 
          </p>

          <pre className='stacks'>
            <p id='ts'>TECHSTACKS:-</p>
            <p>HTML</p>
            <p>CSS</p>
            <p>Java Script</p>
            <p>React</p>
            <p>Node JS</p>
            <p>Express</p>
            <p>Socket.io</p>
          </pre>

          <div className='pl'>
            <a className="btn " href='https://65dc3152aeab2e78630843b1--astounding-marzipan-ebeca6.netlify.app/' role="button" target='main' >Live Link</a>
            <a className="btn " href='https://github.com/ranjit79579/chatting-app' role="button" target='main' >GitHub</a>
          </div>

        </div>
      </div>


      {/* project 3 */}

      <div className='pro-items' id='project3'>

        <div className='pro-img'>
          <p className='pimg3'></p>
        </div>

        <div className='pro-details'>

          <p className='pn'>Ecommerce-app :-</p>
          <p className='pd'>This is a Cloud Based Project Management Application. It is an e-commerce website where users can buy any things like -:  electronic gadgets, phones, watches etc.  
          </p>

          <pre className='stacks'>
            <p id='ts'>TECHSTACKS:-</p>
            <p>HTML</p>
            <p>CSS</p>
            <p>JS</p>
            <p>Bootstrap</p>
            <p>React</p>
            <p>Node JS</p>
            <p>Express</p>
            <p>Mongoose</p>
          </pre>

          <div className='pl'>
            <a className="btn " href='https://jazzy-treacle-c9c6d5.netlify.app ' role="button" target='main' >Live Link</a>
            <a className="btn " href='https://github.com/ranjit79579/e-commerce-app' role="button" target='main' >GitHub</a>
          </div>

        </div>
      </div>


      {/* project 4 */}

      <div className='pb'>
        <button className="btn btn-primary hb" onClick={() => setSeeMore(!seeMore)}>{seeMore ? 'See More' : 'No More'}</button>
      </div>

    </div>
  )
}

export default Projects;
