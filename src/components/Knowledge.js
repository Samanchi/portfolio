import "./Knowledgestyle.css";
import React from 'react'
import {FaBootstrap, FaReact, FaPython} from 'react-icons/fa';
import {AiFillHtml5} from 'react-icons/ai';
import {IoLogoCss3,IoLogoJavascript} from 'react-icons/io';
import {DiNodejs, DiPostgresql} from 'react-icons/di';


const Knowledge = () => {
  return (
    <div>
        <table className="icons">
            <tr>
                <td className="inner">
                <AiFillHtml5 size={90} style={{color:'black', marginRight:'1rem'}}/>
                </td>
                <td className="inner">
                <IoLogoCss3 size={90} style={{color:'black', marginRight:'1rem'}} /> 
                </td>
            </tr>
            <tr>
                <td className="inner">
                <FaBootstrap size={90} style={{color:'black', marginRight:'1rem'}} />

                </td>
                <td className="inner">
                <IoLogoJavascript size={90} style={{color:'black', marginRight:'1rem'}} />
                </td>
            </tr>
            <tr>
                <td className="inner">
                <FaReact size={90} style={{color:'black', marginRight:'1rem'}} />

                </td>
                <td className="inner">
                <DiNodejs size={90} style={{color:'black', marginRight:'1rem'}} />
                </td>
            </tr>
            <tr>
                <td className="inner">
                <DiPostgresql size={90} style={{color:'black', marginRight:'1rem'}} />

                </td>
                <td className="inner">
                <FaPython size={90} style={{color:'black', marginRight:'1rem'}} />
                </td>
            </tr>
        </table>
      {/* <AiFillHtml5 size={90} style={{color:'black', marginRight:'1rem'}} />
      <IoLogoCss3 size={90} style={{color:'black', marginRight:'1rem'}} />
      <FaBootstrap size={90} style={{color:'black', marginRight:'1rem'}} />
      <IoLogoJavascript size={90} style={{color:'black', marginRight:'1rem'}} />
      <FaReact size={90} style={{color:'black', marginRight:'1rem'}} />
      <DiNodejs size={90} style={{color:'black', marginRight:'1rem'}} />
      <DiPostgresql size={90} style={{color:'black', marginRight:'1rem'}} />
      <FaPython size={90} style={{color:'black', marginRight:'1rem'}} /> */}
    </div>
  )
}

export default Knowledge
