import React from "react";
import "./experience.css";
import {FaNpm, FaReact, FaUbuntu} from 'react-icons/fa'
import {DiNodejs , DiMongodb} from 'react-icons/di';
import {SiExpress , SiHtml5 , SiCss3 , SiMysql , SiBootstrap , SiSocketdotio, SiRedux, SiJsonwebtokens, SiDart} from 'react-icons/si';
export const Experience = () => {
  return (
    <div className="exp">
      <p className="exper">
       Experience
        <p className="lines">
          <hr className="line1" />
          <hr className="line2" />
        </p>
      </p>
      <div className="AllCards">
       
          <div className="onecard"><SiExpress className="iconsE"/><p className="skill">Express JS</p></div>
          <div className="onecard"><DiNodejs className="iconsE"/> <p className="skill">Node JS</p> </div>
          <div className="onecard"><DiMongodb className="iconsE"/> <p className="skill">MongoDB</p> </div>
          <div className="onecard"><SiMysql className="iconsE"/> <p className="skill">MySQL</p> </div>
       
       
          <div className="onecard"><FaReact className="iconsE"/> <p className="skill">React JS</p> </div>
          <div className="onecard"><SiHtml5 className="iconsE"/><p className="skill">HTML5</p> </div>
          <div className="onecard"><SiCss3 className="iconsE"/><p className="skill">CSS3</p> </div>
          <div className="onecard"><SiBootstrap className="iconsE"/><p className="skill">Bootstrap</p> </div>
        


        
          <div className="onecard"><SiSocketdotio className="iconsE"/><p className="skill">Socket.io</p> </div>
          <div className="onecard"><SiRedux className="iconsE"/><p className="skill">Redux</p> </div>
          <div className="onecard"><SiJsonwebtokens className="iconsE"/><p className="skill">JsonWebTokens</p> </div>
          <div className="onecard"><FaNpm className="iconsE"/><p className="skill">Npm</p> </div>
       


        
          {/* <div className="onecard"><FaUbuntu className="iconsE"/><p className="skill">Ubuntu</p> </div> */}
          {/* <div className="onecard"><SiDart className="iconsE"/><p className="skill">Dart</p> </div> */}
         
        
      </div>
      <div style={{height:"100px"}}></div>
    </div>
  );
};
