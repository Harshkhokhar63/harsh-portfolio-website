import React from "react";
import "./About.css";
import img from "./image/harsh.png";
import html from "./image/html.png";
import css from "./image/css.png";
import js from "./image/js.png";
import reactlogo from "./image/reactlogo.png";
import bootstrap from "./image/bootstrap.png";
import figma from "./image/figma.png";
import Carousel from "./carousel.jsx";

function About() {
  return (
    <>
      <div className="about-page">
        <div className="about-top-section">
          <img src={img} alt="" />
          <div className="about-top-data">
            <div className="about-top-head">About me</div>
            <div className="about-top-text">
              <span className="about-top-hi">Hi, </span>
              <span className="about-top-name">i'm Harsh</span>, a passionate
              and curious developer /designer eager to create digital
              experiences that are both functional and visually appealing.{" "}
              <br />
              <br />
              When I'm not coding or designing, you can find me exploring design
              trends, reading blogs, or tinkering with side projects.
            </div>
          </div>
        </div>
                <div className="about-mid-section">
          <div className="mid-section-heading">
            <p>
              Stay <span>Connected</span> with me
            </p>
          </div>
          <div className="mid-section-para">
            <p>
              Follow me on different platforms to explore more of my work, get
              updates, and connect for future collaborations. Let's grow and
              build amazing things together!
            </p>
          </div>
          <div className="follow-icons">
            <ul>
              <li>
                <div className="follow-icons-img">
                  <a href="https://www.google.com" target="_blank"><img src="https://icon-library.com/images/facebook-icon-black-and-white-vector/facebook-icon-black-and-white-vector-2.jpg" alt="" /></a>
                </div>
              </li>
              <li>
                <div className="follow-icons-img">
                  <a href="https://www.google.com" target="_blank"><img className="twitter-logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnTaYsTGr99BpkNdMcDrUJOV0oFh6Un9zOcQ&s" alt="" /></a>
                </div>
              </li>
              <li>
                <div className="follow-icons-img">
                  <a href="https://www.google.com" target="_blank"><img className="github-logo"  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRb-ImDt1u4PQE9yvtImFO8Gttkzm8fVypBeQ&s" alt="" /></a>
                </div>
              </li>
              <li>
                <div className="follow-icons-img">
                  <a href="https://www.google.com" target="_blank"><img className="linkedin-logo"  src="https://www.svgrepo.com/show/107799/linkedin.svg" alt="" /></a>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="about-skills">
          <div className="skills-text">SKILLS</div>
          <div className="skills-sections">
            <div className="skills-data">
              <div className="skills-heading">Language</div>
              <div className="skills-info">
                <ul>
                  <li>
                    <img src={html} alt="" />
                    HTML
                  </li>
                  <li>
                    <img src={css} alt="" />
                    CSS
                  </li>
                  <li>
                    <img src={js} alt="" />
                    Javascript
                  </li>
                </ul>
              </div>
            </div>

            <div className="skills-data">
              <div className="skills-heading">Framework</div>
              <div className="skills-info">
                <ul>
                  <li>
                    <img src={reactlogo} alt="" />
                    React
                  </li>
                  <li>
                    <img src={bootstrap} alt="" />
                    Bootstrap
                  </li>
                </ul>
              </div>
            </div>

            <div className="skills-data">
              <div className="skills-heading">Tools</div>
              <div className="skills-info">
                <ul>
                  <li>
                    <img src={figma} alt="" />
                    Figma
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="project-section">
            <div className="project-section-title"><p>Projects</p></div>
            <Carousel/>
        </div>
      </div>
    </>
  );
}

export default About;
