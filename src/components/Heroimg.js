import './Heroimgstyles.css';
import React from 'react'
import { Link } from 'react-router-dom';
import Resume from '../pictures/SamanchiKishoreResume.pdf';

const Heroimg = () => {
  return (
    <div className='hero'>
        <div className='mask'>
            <img src='https://i.pinimg.com/736x/9a/d1/a9/9ad1a916fb41265cf509056c353b2720.jpg' alt='no image found' className='intro-img' />
        </div>
        <div className='content'>
            <p>HI, I am Samanchi Kishore</p>
            <h1>Front End Developer</h1>
            <div>
                <a href={Resume} className='btn' download={'SamanchiKishoreResume'}>RESUME</a>
                <Link to={'/Projects'} className='btn'>PROJECTS</Link>
                <Link to={'/Contact'} className='btn'>CONTACTS</Link>
            </div>
        </div>
      
    </div>
  )
}

export default Heroimg


