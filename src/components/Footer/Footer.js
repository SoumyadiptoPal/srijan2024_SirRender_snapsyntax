import React from "react";

const Footer = () => {
  return (
    <div className="footer_cont">
      <div className="left">
        <div className="avatar">
          <h1>JANELLE BROWN</h1>
          <p>Senior Software Developer</p>
        </div>
        <div className="profile_image">
          <img src="assets/avatar.png" alt="avatar" width="100" height="100" />
        </div>
      </div>

      <div className="right">
        <div className="topinfo">
          <h1>Think I'll be a good fit for your team or project?</h1>
          <h1>Let's connect.</h1>
          <h2>Contact me</h2>
          <input type="email" placeholder="info@JanelleBrown.in" />
          <input type="submit" />
        </div>

        <div className="bottominfo">
          <div className="projects">
            <h3>INMPLEMENTED PROJECTS</h3>
            <p>
              <a href="./">Project 1</a>
            </p>

            <p>
              <a href="./">Project 2</a>
            </p>
            <a href="./">Project 3</a>
          </div>
          <div className="socials">
            <h3>SOCIALS</h3>
            <p>
              <img src="assets/licon.png" alt="licon" width="25" height="25" />{" "}
              Linkedin{" "}
              <img src="assets/ticon.png" alt="ticon" width="25" height="25" />{" "}
              Twitter
            </p>
            <p>
              <img
                src="assets/fbicon.png"
                alt="fbicon"
                width="25"
                height="25"
              />{" "}
              Faceboook{" "}
              <img
                src="assets/igicon.png"
                alt="igicon"
                width="25"
                height="25"
              />{" "}
              Instagram
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
