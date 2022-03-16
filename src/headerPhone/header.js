import React, { useState } from "react";
import './header.css';
import {FaHome} from 'react-icons/fa';
import {BsFillPersonFill , BsFillTelephoneFill, BsGithub, BsLinkedin} from 'react-icons/bs';
import {BiAtom, BiDownload } from 'react-icons/bi';
import {CgClose, CgOptions, CgWebsite} from 'react-icons/cg';
import {GiSkills} from 'react-icons/gi';
import { useHistory } from "react-router";
import Modal from 'react-modal';
const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      width:"320px",
      height:"640px",
      backgroundColor:"#ff092e",
      position:"relative"
    },
  };

export const Header = ()=>{
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
    const icon = {color:"#fc091e"}
    const noSelect = {
        backgroundColor : "#ff092e"
    }

    // let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    // subtitle.style.color = '#f00';
  }

  function closeModal() {
    setIsOpen(false);
  }

    return(<>
   
        <div className="sideBarComponentPhone">

            <p className="logoPhone">RASHED</p>
            

<div>
     
      <CgOptions style={{alignSelf:"center" , width:"30px" , height:"30px" ,paddingRight:"10px" , paddingTop:"10px" , color:"white"}} onClick={openModal}/>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
       
      >
        <CgClose onClick={closeModal} style={{height:"30px" , width:"30px" , color:"white" ,position:"absolute" , right:"0" , paddingTop:"10px" , paddingRight:"10px"}}/>
        <img src="https://avatars.githubusercontent.com/u/51744151?v=4" className="imgPhone"/>
        <p className="logoPhon">RASHED</p>
        <div className="options">
            <p className="option" onClick={()=>{history.push("/Home");closeModal()}}>Home</p>
            <p className="option" onClick={()=>{history.push("/About_me");closeModal()}}>About</p>
            <p className="option" onClick={()=>{history.push("/Experience");closeModal()}}>Skills</p>
            <p className="option" onClick={()=>{history.push("/Education");closeModal()}}>Education</p>
            <p className="option" onClick={()=>{history.push("/My-Projects");closeModal()}}>My Projects</p>
            <p className="option" onClick={()=>{history.push("/Contact");closeModal()}}>Contact</p>
        </div>
        <div >
          <div className="iconsPhone">
        <a href="http://www.linkedin.com/in/rashed-migdady" target="_blank" title="Linkedin"> <BsLinkedin className="iconhom"/> </a>
        <a href="https://github.com/RashedMigdady" target="_blank" title="Github">   <BsGithub className="iconhom"/></a>
        <a href="https://drive.google.com/file/d/1QqUSnzfcQ7jin6muud5R8qPw9o1cUnMd/view?usp=sharing" target="_blank" title="CV">  <BiDownload className="iconhom" /></a>
       </div> 
       </div>

      </Modal>
    </div>



            





            {/* <div className="words">
            <img src="https://avatars.githubusercontent.com/u/51744151?v=4"  className="imgBar"/> 
            <a href="https://practical-bose-155703.netlify.app/" style={{textDecoration:"none" }} ><h1 className="title"> <p style={{ letterSpacing: "7px" , color:"white",marginTop:"100px"}}>RASHED</p></h1></a>
            <p className="icons" onClick={()=>{history.push("/Home"); setColorHome(true); setColorAbout(false);setColorExperience(false);setColorProject(false);setColorContact(false);setColorEducation(false)} } style={colorHome?word:noSelect} ><FaHome className="icon" style={colorHome?icon:noSelect}/> <p className="info">Home</p></p>
            <p className="icons"   onClick={()=>{history.push("About_me"); setColorHome(false); setColorAbout(true);setColorExperience(false);setColorProject(false);setColorContact(false);setColorEducation(false)}}style={colorAbout?word:noSelect}><BsFillPersonFill className="icon" style={colorAbout?icon:noSelect}/> <p className="info">About</p></p>
            <p className="icons"  onClick={()=>{history.push("/Experience");setColorHome(false); setColorAbout(false);setColorExperience(true);setColorProject(false);setColorContact(false);setColorEducation(false)}}style={colorExperience?word:noSelect}><BiAtom className="icon" style={colorExperience?icon:noSelect}/> <p className="info">Skills</p></p>
            <p className="icons"  onClick={()=>{history.push("/Education");setColorHome(false); setColorAbout(false);setColorExperience(false);setColorProject(false);setColorContact(false);setColorEducation(true)}}style={colorEducation?word:noSelect}><GiSkills className="icon" style={colorEducation?icon:noSelect}/> <p className="info">Education</p></p>
            <p className="icons"  onClick={()=>{history.push("/My-Projects");setColorHome(false); setColorAbout(false);setColorExperience(false);setColorProject(true);setColorContact(false);setColorEducation(false)}}style={colorProject?word:noSelect}><CgWebsite className="icon" style={colorProject?icon:noSelect}/> <p className="info">My Projects</p></p>
            <p className="icons"  onClick={()=>{history.push("/Contact");setColorHome(false); setColorAbout(false);setColorExperience(false);setColorProject(false);setColorContact(true);setColorEducation(false)}}style={colorContact?word:noSelect}> <BsFillTelephoneFill className="icon" style={colorContact?icon:noSelect}/> <p className="info">Contact</p></p>
            </div> */}
           
            

        </div>
  </>  )
}