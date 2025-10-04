import React from "react";
import "./Footer.css";
import Backgr from "./images/Rectangle.png";
import facebook from "./images/facebook.png";
import twitter from "./images/twitter.png";
import github from "./images/github.png";
import { Link, NavLink } from "react-router-dom";

function Footer() {
  return (
    <>
      <footer className="container1">
        <img className="backgr" src={Backgr} alt="" />
        <div className="footer-logo">
          <Link to="/">
            <div>HARSH</div>
          </Link>
        </div>

        <div className="footer-wrapper">

          <div className="res">
            <ul className="footer-li">
              <li>
                <NavLink to="/About">
                  About
                </NavLink>
              </li>
              <li>
                <NavLink to="/Contact">
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>

          {/* <div className="res">
            <ul className="footer-li">
              <li>
                <a href="https://www.linkedin.com/in/harsh-khokhar-60445436a" target="_blank">LinkedIn</a>
              </li>
              <li>
                <a href="https://github.com/Harshkhokhar63" target="_blank">Github</a>
              </li>
            </ul>
          </div> */}

        </div>
        <hr className="line"/>
        <div className="rights">Find me on...</div>
        <div className="footer-logos">
          <div className="footer-logo-bottom"><a href="https://www.linkedin.com/in/harsh-khokhar-60445436a" target="_blank"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeUrcbjiHvpnYXs-wgsUVqRF63fzSiqn7ZMA&s" alt="linkedin" /></a></div>
          <div className="footer-logo-bottom"><a href="https://x.com/HarshKhokh48317" target="_blank"><img src={twitter} alt="" /></a></div>
          <div className="footer-logo-bottom"><a href="https://github.com/Harshkhokhar63" target="_blank"><img src={github} alt="" /></a></div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
