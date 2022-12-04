import React from "react";
import './contact.css';
import {FaPhoneSquareAlt} from 'react-icons/fa'
import {ImLocation2} from 'react-icons/im'
import {MdEmail} from 'react-icons/md';


export const Contact = ()=>{
    return(<div style={{display:"grid" , marginBottom:"50px" , marginLeft:"25px" ,gap:"150px"}} className="contact">
        <div>
            <p className="titleC">Contact<p style={{color:"#ff092e" , display:"initial" , marginLeft:"10px"}}>Me</p> <p className="lines">
          <hr className="line1" />
          <hr className="line2" />
        </p></p>
        </div> 
        <div className="conatctDetails">
            <div className="DetailsC"><FaPhoneSquareAlt className="iconsC"/><p className="titleDetails">Phone</p><p className="deta">+61 455328779</p></div>
            <div className="DetailsC"><ImLocation2 className="iconsC"/><p className="titleDetails">Location</p><p className="deta">NSW, Sydney</p></div>
            <div className="DetailsC"><MdEmail className="iconsC"/><p className="titleDetails">Email</p><p className="deta">migdadyrashed@gmail.com</p></div>
        </div>
    </div>)
}