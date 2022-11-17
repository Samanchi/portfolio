import React from "react";
import Signups from "./Signups.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Validation from "./Validation";
import { useNavigate } from "react-router-dom";
import Homepage from "./Homepage";

function SignUps() {
  const [name, setName] = useState("");
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");
  let [err, setError] = useState({});
  const navigate=useNavigate();

  let clickHandler = () => {
    setError(Validation(name, mail, password));
    for(let i=0;i<4;i++){
      var randNum = Math.floor(Math.random()*90000) + 10000;
    }
    let uniqueid=randNum
    
    let storageData=JSON.parse(localStorage.getItem('storageData'))||[];
    let data={      
      uniqueid,
      name,
      mail,
      password
    }
    
    storageData.push(data)
    localStorage.setItem('storageData',JSON.stringify(storageData));
    alert(`your ID is ${uniqueid}. please provide it during LogIn`)
    setName('');
    setMail('');
    setPassword('')
    navigate('/Homepage')
    

    
  };
  return (
    <>
    <div className="form">
      <form>
        <label>SIGNUP FORM</label>
        <input type={'text'} placeholder='Enter your Name' value={name} onChange={(e) => setName(e.target.value)}></input>
        <h4 className="errors">{err.name}</h4>
        {/* <h4 className="errors">{mistake.ids}</h4> */}
        <input type={'text'} placeholder='Enter Mail ID' value={mail} onChange={(e) => setMail(e.target.value)}></input>
        <h4 className="errors">{err.mail}</h4>
        {/* <h4 className="errors">{mistake.mails}</h4> */}
        <input type={'password'} placeholder='Enter Password' value={password} onChange={(e) => setPassword(e.target.value)}></input>
        <h4 className="errors">{err.password}</h4>
        {/* <h4 className="errors">{mistake.passwords}</h4> */}
        <button className="btn" onClick={()=>{clickHandler();}}>SIGNUP</button>
        <br/>
          <h5 className="links">
          <Link to="/Login"><u>Already have an account(Login)</u></Link>
        </h5>
      </form>

    </div>
    </>
  );
}

export default SignUps;
