import React from 'react'
import Aboutcontent from './Aboutcontent'
import Footer from './Footer'
import Heroimg2 from './Heroimg2'
import Navbar from './Navbar'

const About = () => {
  return (
    <div>
      <Navbar />
      <Heroimg2 heading='ABOUT' text='I am an aspiring Front-End Developer'/>
      <Aboutcontent />
      <Footer />
    </div>
  )
}

export default About
