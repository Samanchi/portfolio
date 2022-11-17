import React, { useState } from "react";
import Logins from "./Logins.css";
import { Link } from "react-router-dom";
import Signup from "./Signup.js";
import Checking from "./Checking";
import { useNavigate } from "react-router-dom";
import Homepage from './Homepage'
// import './Formstyles.css';

export function Login() {
  const [ids,setIds]=useState('');
  const [mails,setMails]=useState('');
  const [passwords,setPasswords]=useState('');
  let [errs, setErrors] = useState({});
  let [mistake, setMistake]=useState('');
  const navigate=useNavigate();
  let newArr;

  const clickHandle=()=>{
   setErrors(Checking(ids,mails,passwords)) 
    let data=localStorage.getItem('storageData')
    data=JSON.parse(data)
    console.log(data);
    const search = ids;
    newArr = data.filter(obj => Object.values(obj).some(val => val.toString().includes(search)));
    if(newArr.length==0){
      setMistake('Please provide correct ID key')
    }
    else if((newArr[0].mail!=mails) || (newArr[0].password!=passwords)){
      setMistake('Please try again with correct Login credentials');
      // navigate('/Homepage')
   }
    else{
      navigate('/Homepage')    
   }
   };
  return (
    <>
    <div className="form">
      <form>
        <label>LOGIN FORM</label>
        <input type={'text'} placeholder='Enter your unique ID' value={ids} onChange={(e) => setIds(e.target.value)}></input>
        <h4 className="errors">{errs.ids}</h4>
        <input type={'text'} placeholder='Enter Mail ID' value={mails} onChange={(e) => setMails(e.target.value)}></input>
        <h4 className="errors">{errs.mails}</h4>
        <input type={'password'} placeholder='Enter Password' value={passwords} onChange={(e) => setPasswords(e.target.value)}></input>
        <h4 className="errors">{errs.passwords}</h4>
        <h2 className="errors">{mistake}</h2>
        <button className="btn" onClick={()=>{clickHandle();}}>LOGIN</button>   
        <br/>
          <h5 className="links">
          <Link to="/Signup"><u>Don't have an account(Signup)</u></Link>
        </h5>
      </form>

    </div>
    </>
    

  );
}

export default Login;