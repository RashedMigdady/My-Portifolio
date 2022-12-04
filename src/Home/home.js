import React from "react";
import './home.css';
import {BsLinkedin , BsGithub} from 'react-icons/bs';
import {BiDownload} from 'react-icons/bi';
import {CgWebsite} from 'react-icons/cg';
import { useHistory } from "react-router";

export const Home = () => {
    const history = useHistory();

    return (<div className="home">
        <img src="https://avatars.githubusercontent.com/u/51744151?v=4" className="myImg"/>
        <h2 className="name">Rashed Migdady</h2>
        <p className="position">I'm a Web Developer</p>

        <div className="iconshome">
        <a href="http://www.linkedin.com/in/rashed-migdady" target="_blank" title="Linkedin"> <BsLinkedin className="iconhome"/> </a>
        <a href="https://github.com/RashedMigdady" target="_blank" title="Github">   <BsGithub className="iconhome"/></a>
        <a href="https://app.flowcv.com/resume-feedback/b8D9ulyvf7hsBHT2uO4PM" target="_blank" title="CV">  <BiDownload className="iconhome" /></a>
        <CgWebsite className="iconhome" title="My Projects" onClick={()=>{history.push("/My-Projects")}}/>

        </div>
        <a href="http://www.linkedin.com/in/rashed-migdady" target="_blank" className="linkHireme"><button className="hireme">Hire me</button></a>
    </div>)

}