import './App.css';
import Login from './components/Login.js';
import Signup from './components/Signup.js';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link}
  from "react-router-dom" ;
import Nopagefound from './components/Nopagefound';
import Homepage from './components/Homepage';
import Projects from './components/Projects';
import About from './components/About';
import Skills from './components/Skills';
import Contact from './components/Contact';



function App() {
  return (
    <Router> 
        <Routes>
        <Route exact path='/Login' element={<Login/>} />  
        <Route exact path='/Signup' element={<Signup/>} />
        <Route exact path='/Homepage' element={<Homepage/>} />
        <Route exact path='/Projects' element={<Projects/>} />
        <Route exact path='/About' element={<About/>} />
        <Route exact path='/Skills' element={<Skills/>} />
        <Route exact path='/Contact' element={<Contact/>} />
        



        </Routes>

    </Router>
    
  );
}

export default App;
