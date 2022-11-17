import "./Aboutcontentstyle.css";
import React from 'react'
import { Link } from "react-router-dom";
import Github from '../pictures/Github.jpg';
import Facebook from '../pictures/Facebook.jpg';

const Aboutcontent = () => {
  return (
    <div className="about">
        <div className="left">
            <h1>Who Am I</h1>
            <p>I learned Front-End Development and tried to create few projects which you can see in the projects session</p>
            <Link to='/Contact'>
            <button className="btn">CONTACT</button>
        </Link>
        </div>
        
        <div className="right">
            <div className="img-container">
                <div className="img-stack top">
                    <img src={Github} className="img" alt="no-image"/>
                </div>
                <div className="img-stack bottom">
                    <img src={Facebook} className="img" alt="no-image"/>
                </div>
            </div>

        </div>
      
    </div>
  )
}

export default Aboutcontent
