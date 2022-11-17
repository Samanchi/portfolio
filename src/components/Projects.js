import React from 'react'
import { Link } from 'react-router-dom'
import Footer from './Footer'
import Heroimg2 from './Heroimg2'
import Navbar from './Navbar'
import Work from './Work';

const Projects = () => {
  return (
    <div className='project'>
      <Navbar />
      <Heroimg2  heading='PROJECTS' text='Some of my Projetcs'/>
      <Work />
      <Footer/>
      
    </div>
  )
}

export default Projects
