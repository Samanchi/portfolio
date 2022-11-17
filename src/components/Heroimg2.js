import "./Heroimgstyles2.css";
import React from 'react'
import Projects from './Projects';
import About from "./About";
import Skills from "./Skills";
import Contact from "./Contact";

const Heroimg2 = (props) => {
  return (
    <div className="hero-img">
      <div className="heading">
        <h1>{props.heading}</h1>
        <p>{props.text}</p>

      </div>
    </div>
  )
}

export default Heroimg2
