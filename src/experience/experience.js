import React from "react";
import "./experience.css";

export const Experience = () => {
  return (
    <div className="exp">
      <p className="exper">
        skills
        <p className="lines">
          <hr className="line1" />
          <hr className="line2" />
        </p>
      </p>
      <div className="AllCards">
        <div className="RowIcons">
          <img
            className="imgIcons"
            src="https://logos-download.com/wp-content/uploads/2016/09/MongoDB_logo_Mongo_DB.png"
          />{" "}
          <img
            className="imgIcons"
            src="https://fd-development.com/images/expressjs.png"
          />{" "}
          <img
            className="imgIcons"
            src="https://www.onetmark.com/images/technologies/react.png"
          />{" "}
          <img
            className="imgIcons"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/590px-Node.js_logo.svg.png"
          />{" "}
        </div>
        <div className="RowIcons" style={{ gap: "200px" }}>
          <img
            className="imgIcons" alt="MySQL"
            src="http://pngimg.com/uploads/mysql/mysql_PNG22.png"
          />{" "}
          <img
            className="imgIcons"
            src="http://assets.stickpng.com/thumbs/5847f5bdcef1014c0b5e489c.png" alt="HTML5"
          />{" "}
          <img
            className="imgIcons"
            src="https://cdn.freelogovectors.net/wp-content/uploads/2020/04/css-3-logo.png"
          />{" "}
          <img
            className="imgIcons"
            src="https://logodix.com/logo/2062376.png"
          />{" "}
        </div>
        <div className="RowIcons" style={{ gap: "150px" }}>
          <img
            className="imgIcons"
            src="https://blog.telexarsoftware.com/wp-content/uploads/2019/11/logo-redux.png"
          />{" "}
          <img
            className="imgIcons" style={{borderRadius:"20px"}}
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdGESrdkgao4E4zgbLOLaF7Fp_RCHZ1bkQcBSox0SeJT8vwdG9WqZ_FVWzCQF-KZXMK_I&usqp=CAU"
          />{" "}
          <img
            className="imgIcons"
            src="https://joshua1988.github.io/images/posts/web/npm/logo.png"
          />{" "}
          <img
            className="imgIcons"
            src="http://ies.solutions/wordpress/wp-content/uploads/jwt.png"
          />{" "}
        </div>
      </div>
      <div style={{ height: "100px" }}></div>
    </div>
  );
};
