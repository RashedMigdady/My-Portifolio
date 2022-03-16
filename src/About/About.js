import React from "react";
import "./About.css";
import Typewriter from "typewriter-effect";

export const About = () => {
  return (
    <div className="AllAbout">
      <div className="description">
        <p className="about">
          About me
          <p className="lines">
            <hr className="line1" style={{}} />
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
            Website :<a href="https://rashedmigdady.github.io/My-Portifolio/" title="My-Portfolio" style={{textDecoration:"none"}}><p className="detail"> Rashed-Portfolio</p></a>
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
        href="https://drive.google.com/file/d/13m5L4Q0HoMmCM37qtNdU-61f0nHJc8s5/view?usp=sharing"
        target="_blank"
      >
        <button className="CV">Download CV</button>
      </a>
    </div>
  );
};
