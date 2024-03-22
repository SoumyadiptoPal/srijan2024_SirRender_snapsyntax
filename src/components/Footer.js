import React from "react";
import "./Footer/styles.css";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
const Footer = () => {
  return (
    <div>
      <div className="footer_cont">
        <div className="left">
          <div className="avatar">
            <h1>JANELLE BROWN</h1>
            <p>Senior Software Developer</p>
          </div>
          <div className="profile_image">
            <img src="picturesIcon.jpeg" alt="image" height={200} />
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
              <div style={{display:"flex", flexDirection:"row", justifyContent:"space-around"}}>
              <p>
                <FaTwitter /> Twitter{" "}
              </p>
              <p>
                {" "}
                <FaLinkedin /> Linkedin{" "}
              </p>
              </div>
              <div style={{display:"flex", flexDirection:"row", justifyContent:"space-around"}}>
              <p>
                <FaFacebook /> Faceboook 
              </p>
              <p>
                <FaFacebook /> Instagram 
              </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
