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
            <div>Harsh</div>
          </Link>
        </div>

        <div className="footer-wrapper">

          <div className="res">
            <h1 className="footer-head">RESOURCES</h1>
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

          <div className="res">
            <h1 className="footer-head">FOLLOW US</h1>
            <ul className="footer-li">
              <li>
                <NavLink to="/About">
                  LinkedIn
                </NavLink>
              </li>
              <li>
                <NavLink to="/Contact">
                  Github
                </NavLink>
              </li>
            </ul>
          </div>

          <div className="res">
            <h1 className="footer-head">LEGAL</h1>
            <ul className="footer-li">
              <li>
                <NavLink to="/About">
                  Privacy Policy
                </NavLink>
              </li>
              <li>
                <NavLink to="/Contact">
                  Terms & Conditions
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
        <hr className="line"/>
        <div className="rights">© 2025harshkhokhar. All Rights Reserved.</div>
        <div className="footer-logos">
          <div className="footer-logo-bottom"><img src={facebook} alt="" /></div>
          <div className="footer-logo-bottom"><img src={twitter} alt="" /></div>
          <div className="footer-logo-bottom"><img src={github} alt="" /></div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
