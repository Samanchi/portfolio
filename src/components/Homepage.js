import React from 'react'
// import Homepages from './Homepages.css'
import Navbar from './Navbar';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link}
  from "react-router-dom" ;
import Heroimg from './Heroimg';
import Footer from './Footer';



export default function Homepage() {
  return (
    <>
      <Navbar />
      <Heroimg/>
      <Footer />
    </>
    
  )
}
