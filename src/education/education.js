import React from "react";
import { useHistory } from "react-router";
import './education.css';


export const Education = ()=>{
    const history = useHistory();
    return(<>
    <div className="AllCompo">
        <div className="educationName">
            <p className="titleC">Education <p className="lines">
          <hr className="line1" />
          <hr className="line2" />
        </p></p>
        </div> 
        <div className="AllEdu">
            <a href="https://www.meraki-academy.org/" target="_blank" className="linke" title="www.meraki-academy.org"><div className="OneEdu"><img src="data:image/png;base64,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" className="imgEdu"/><p>Meraki Academy</p><p>2021/07 - 2021/12</p><p>Advance Full Stack Web Development</p></div></a>
            <div className="chain"><div className="chainCircle" >.</div><hr className="lineChain"/></div>
            <a href="https://www.yu.edu.jo/" target="_blank" className="linke" title="www.yo.orange.jo"><div className="OneEdu"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkoH8JrS8RhaK-kXLG3QByE7aFp0oQpg3ZoQ&usqp=CAU" className="imgEdu"/><p>Coding Academy by Orange</p><p>2019/06 - 2020/02</p><p>Full Stack Web Development</p></div></a>
            <div className="chain"><div className="chainCircle">.</div><hr className="lineChain"/></div>
            <a href="https://yo.orange.jo/ar/akadymyt-orange-llbrmjt" target="_blank" className="linke" title="www.yu.edu.jo"><div className="OneEdu"><img src="https://www.yu.edu.jo/cdtp/assets/images/sponsor-logo-1.png" className="imgEdu"/><p>Yarmuok University</p><p>2015/02 - 2019/02</p><p>Bachalor of Computer Science</p></div></a>
        </div>
       
    </div>
    </>)
}