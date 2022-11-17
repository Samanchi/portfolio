import "./Footerstyle.css";
import React from 'react'
import {FaHome, FaPhone, FaMailBulk, FaFacebook, FaInstagramSquare, FaLinkedin,FaGithubSquare} from 'react-icons/fa';
import{Link} from 'react-router-dom'

const Footer = () => {
  return (
    
    <div className="footer">
        <div className="footer-container">
        <div className="left">
            <div className="location">
                <FaHome size={50} style={{color:'black', marginRight:'2rem'}}/>
            <div>
            <p>F3, Taneesha Homes, Block-A</p>
            <p>Nadakuduru, kakinada Rural,East Godavari District</p>
            <p>Andhra Pradesh- 533016</p>

            </div>
        </div>
        <div className="phone">
            <h4><FaPhone size={30} style={{color:'black', marginRight:'2rem'}}/>
        (+91)-9966625512</h4>
        
        </div>
        <div className="email">
            <h4><FaMailBulk size={30} style={{color:'black', marginRight:'2rem'}}/>
        krishnakishoresamanchi@gmail.com</h4>
        
        </div>
        </div>
        <div className="right">
            <h4>About this Website</h4>
            <p>This Website belongs to Samanchi Kishore. No Individual or organization has rigth to obtain copyrights/patents. There is always place for developers to develop this site through partnership.</p>
            <div className="social">
                <a href="https://www.facebook.com/kishore.sk.73" target='_blank'><FaFacebook size={30} style={{color:'black', marginRight:'1rem'}} /></a>
            <a href="https://www.instagram.com/kishoresamanchi/" target='_blank'><FaInstagramSquare size={30} style={{color:'black', marginRight:'1rem'}}/></a>
            <a href="https://www.linkedin.com/in/samanchi-kishore-1b8593111/" target='_blank'><FaLinkedin size={30} style={{color:'black', marginRight:'1rem'}}/></a>
            <a href="https://github.com/Samanchi" target='_blank'><FaGithubSquare size={30} style={{color:'black', marginRight:'1rem'}}/></a>
            </div>
        </div>
        <Link to='/Login'><button className="btns">LOGOUT</button></Link>
        
        </div>
    
    </div>
    
    
  )
}

export default Footer;
