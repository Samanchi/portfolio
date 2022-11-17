import React from 'react'
import Navbarstyle from './Navbarstyle.css'

import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link}
    from "react-router-dom" ;
  
const Navbar = () => {
  return (
    <div>
        <nav>
          <Link to='/Homepage'><label className='logo'>SamanchiKishore</label></Link>
      
      <ul>
        
        <Link to='/Homepage'><li>Home</li></Link>
        <Link to='/Projects'><li>Project</li></Link>
        <Link to='/About'><li>About</li></Link>
        <Link to='/Skills'><li>Skills</li></Link>
        <Link to='/Contact'><li>Contact</li></Link>
      </ul>
      
      </nav>
      
      
    </div>
  )
}

export default Navbar
