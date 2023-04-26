import React from "react";

const Info = () => {
  return (
    <div className="about_info grid">
      <div className="about_box">
        <i className="bx bx-award about_icon"></i>
        <h3 className="about_title">Experience</h3>
        <span className="about_subtitle"> 2nd year with ReactJS</span>
      </div>

      <div className="about_box">
        <i className="bx bx-briefcase-alt about_icon"></i>

        <h3 className="about_title"> Projects</h3>
        <span className="about_subtitle">
          {" "}
          <a
            className="about_subtitle"
            href="http://westocksatox.herokuapp.com/"
          >
            Django BlogApp
          </a>
          <a href="https://skillalgo.com/">e-Learning Website</a>
        </span>
      </div>

      <div className="about_box">
        <i className="bx bx-support about_icon"></i>
        <h3 className="about_title">Support</h3>
        <span className="about_subtitle">Online 24/7</span>
      </div>
    </div>
  );
};

export default Info;
