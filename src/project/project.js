import React from "react";
import "./project.css";
import image from "./images/MEGALODON.jpeg";
import image1 from './images/KERO_BOOK.jpeg';
export const Project = () => {
  return (
    <div style={{ marginLeft: "25px" }}>
      <div>
        <p className="titleP">
          My
          <p
            style={{ color: "#ff092e", display: "initial", marginLeft: "10px" }}
          >
            Projects
          </p>{" "}
          <p className="lines">
            <hr className="line1" />
            <hr className="line2" />
          </p>
        </p>
      </div>
      <div className="AllProjects">
        <div className="project">
          <img src={image} className="imgProject" />{" "}
          <p className="projectName">MEGALODON</p>{" "}
          <p className="DescriptionProject">
            A complete integrated web app to take care of your health and
            fitness, through which you can subscribe to everything necessary for
            your physical health. Where users can find healthy restaurants,
            sports clubs, and personal trainers, in addition to a number of
            products that are necessary for every athlete.{" "}
          </p>
          <p className="Technologies">Technologies: Node.js, Express, MySQL, React, Google Auth, SMS Message ,Stripe, Heroku. </p>
          <a
            href="https://compassionate-jones-03f564.netlify.app/"
            target="_blank"
            style={{ textDecoration: "none", color: "white" }}
          >
            <button className="Demo"> Show Demo</button>
          </a>
        </div>
        <div className="project">
          {" "}
          <img src={image1} className="imgProject" />{" "}
         
          <p className="projectName">KERO BOOK</p>{" "}
          <p className="DescriptionProject">
            An online bookstore with a mission to financially support local,
            independent bookstores. As more and more people buy their books
            online, we wanted to create an easy, convenient way for you to get
            your books and support bookstores at the same time.{" "}
          </p>
          <p className="Technologies">Technologies: Node.js, Express, MongoDB, React, Google Auth, Stripe, Heroku. </p>
          <a
            href="https://hardcore-hawking-757422.netlify.app/"
            target="_blank"
            style={{ textDecoration: "none", color: "white" }}
          >
            <button className="Demo"> Show Demo</button>
          </a>
        </div>
      </div>
    </div>
  );
};
