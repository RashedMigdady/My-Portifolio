import React, { useState } from "react";
import './sideBar.css';
import {FaHome} from 'react-icons/fa';
import {BsFillPersonFill , BsFillTelephoneFill} from 'react-icons/bs';
import {BiAtom } from 'react-icons/bi';
import {CgWebsite} from 'react-icons/cg';
import {GiSkills} from 'react-icons/gi';
import { useHistory } from "react-router";


export const SideBar = ()=>{
    const history = useHistory();
    const [colorHome  , setColorHome] = useState(true);
    const [colorAbout  , setColorAbout] = useState(false);
    const [colorExperience  , setColorExperience] = useState(false);
    const [colorEducation  , setColorEducation] = useState(false);
    const [colorProject  , setColorProject] = useState(false);
    const [colorContact  , setColorContact] = useState(false);

    const word = {
        backgroundColor : "white",
        color:"#ff092e"
    }
    const icon = {color:"#ff092e"}
    const noSelect = {
        backgroundColor : "#ff092e"
    }

    return(
        <div style={{ position:"fixed"}}>
            
            <div className="words">
            <img src="https://avatars.githubusercontent.com/u/51744151?v=4"  className="imgBar"/> 
            <a href="https://practical-bose-155703.netlify.app/" style={{textDecoration:"none" }} ><h1 className="title"> <p style={{ letterSpacing: "7px" , color:"white",marginTop:"100px"}}>RASHED</p></h1></a>
            <p className="icons" onClick={()=>{history.push("/Home"); setColorHome(true); setColorAbout(false);setColorExperience(false);setColorProject(false);setColorContact(false);setColorEducation(false)} } style={colorHome?word:noSelect} ><FaHome className="icon" style={colorHome?icon:noSelect}/> <p className="info">Home</p></p>
            <p className="icons"   onClick={()=>{history.push("About_me"); setColorHome(false); setColorAbout(true);setColorExperience(false);setColorProject(false);setColorContact(false);setColorEducation(false)}}style={colorAbout?word:noSelect}><BsFillPersonFill className="icon" style={colorAbout?icon:noSelect}/> <p className="info">About</p></p>
            <p className="icons"  onClick={()=>{history.push("/Experience");setColorHome(false); setColorAbout(false);setColorExperience(true);setColorProject(false);setColorContact(false);setColorEducation(false)}}style={colorExperience?word:noSelect}><BiAtom className="icon" style={colorExperience?icon:noSelect}/> <p className="info">Experience</p></p>
            <p className="icons"  onClick={()=>{history.push("/Education");setColorHome(false); setColorAbout(false);setColorExperience(false);setColorProject(false);setColorContact(false);setColorEducation(true)}}style={colorEducation?word:noSelect}><GiSkills className="icon" style={colorEducation?icon:noSelect}/> <p className="info">Education</p></p>
            <p className="icons"  onClick={()=>{history.push("/My-Projects");setColorHome(false); setColorAbout(false);setColorExperience(false);setColorProject(true);setColorContact(false);setColorEducation(false)}}style={colorProject?word:noSelect}><CgWebsite className="icon" style={colorProject?icon:noSelect}/> <p className="info">My project</p></p>
            <p className="icons"  onClick={()=>{history.push("/Contact");setColorHome(false); setColorAbout(false);setColorExperience(false);setColorProject(false);setColorContact(true);setColorEducation(false)}}style={colorContact?word:noSelect}> <BsFillTelephoneFill className="icon" style={colorContact?icon:noSelect}/> <p className="info">Contact</p></p>
            </div>
           
            

        </div>
    )
}