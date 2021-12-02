import React from "react";
import "./About.css";
import Typewriter from "typewriter-effect";

export const About = () => {
  return (
    <div>
      <div className="description">
        <p className="about">
          About me
          <p className="lines">
            <hr className="line1" />
            <hr className="line2" />
          </p>
        </p>

        <p className="brif">
          I'm Rashed Migdady and{" "}
          <Typewriter
            className="brif1"
            style={{
              display: "inline",
              fontFamily: "Consolas",
              color: "#0A05FF",
            }}
            options={{
              strings: [
                "Web Developer !!",
                "Back-End Devloper !!",
                "Front-End Developer !!",
              ],
              autoStart: true,
              loop: true,
            }}
          />{" "}
        </p>
        <p className="text">
          I like to learn new things, I don’t give up easily, I am an autonomous
          learner and these skills make me work harder, better, longer & more
          efficient.
          <br />I would like to work in a team that wants to achieve more than
          what is expected from them, also collaborate with a talented team to
          improve each other in order to help any company reach its next level
          of creativity in a shorter time.
        </p>
      </div>
      <div className="allInfo">
        <div className="info">
          
          <p>
            Website :<a href="https://practical-bose-155703.netlify.app/" title="My-Portfolio" style={{textDecoration:"none"}}><p className="detail"> Rashed-Portfolio</p></a>
          </p>
          <p>
            Degree :<p className="detail"> B.C Computer Science</p>
          </p>
          <p>
            Country : <p className="detail">Jordan</p>
          </p>{" "}
        </div>
        <div className="info">
          
          <p>
            Email :<p className="detail"> rashedmeg231@gmail.com</p>
          </p>{" "}
          <p>
            Phone : <p className="detail">+962777522486</p>
          </p>{" "}
          <p>
            Status :<p className="detail"> Open to Work</p>
          </p>{" "}
        </div>
      </div>
      <a
        href="https://drive.google.com/file/d/1QqUSnzfcQ7jin6muud5R8qPw9o1cUnMd/view?usp=sharing"
        target="_blank"
      >
        <button className="CV">Download CV</button>
      </a>
    </div>
  );
};
