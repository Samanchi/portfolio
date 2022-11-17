import './Formstyles.css';
import React from 'react';
import emailjs from 'emailjs-com';
import { useRef } from 'react';
import {init} from 'emailjs-com';
import {FaWhatsapp} from 'react-icons/fa';


const Form = () => {
  const form=useRef();

  function mailHandler(e){
    e.preventDefault();

    emailjs.sendForm('service_lw45vjs', 'template_9p5t1y9', form.current, '-cGGVPddmsAWBpSGk')
      .then((result) => {
          console.log(result.text);
      }).catch ((error) => {
          console.log(error.text);
      });
      e.target.reset();
      
  }
  return (
    
    
    <div className='form'>
        <form>
            <label>Your Name</label>
            <input type='text' name='Names'></input>
            <label>Your Email</label>
            <input type='email' name='Mails'></input>
            <label>Subject</label>
            <input type='text' name='Subjects'></input>
            <label>Message</label>
            <textarea rows='6' name='Messages'></textarea>
            <button type='submit' className='btn' onClick={mailHandler}>SUBMIT</button><br />
            <a href='https://web.whatsapp.com/send?phone=+919966625512' target='_blank' className='btn'>
            WHATSAPP<FaWhatsapp size={30} style={{color:'black', marginRight:'1rem'}} />
            </a>
            
        </form>
      
    </div>
    
  )
}

export default Form; 

