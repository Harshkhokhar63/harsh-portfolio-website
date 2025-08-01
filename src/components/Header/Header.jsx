import React from "react";
import "./Header.css";
import { Link, NavLink } from "react-router-dom";

function Header() {
  return (
    <>
      <div className="container">
        <div className="logo">
          <Link to="/">
            <div>Harsh</div>
          </Link>
        </div>
        <div className="sections">
          <ul>
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `${isActive ? "text-purple-700" : "text-gray-500"}`
                }
              >
                Home
              </NavLink>
              <NavLink
                to="/About"
                className={({ isActive }) =>
                  `${isActive ? "text-purple-700" : "text-gray-500"}`
                }
              >
                About
              </NavLink>
              <NavLink
                to="/Contact"
                className={({ isActive }) =>
                  `${isActive ? "text-purple-700" : "text-gray-500"}`
                }
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="btn">
          <NavLink to="/Contact">
            <div className="hire-me">
              <div className="text">Hire me</div>
            </div>
          </NavLink>
        </div>
      </div>
    </>
  );
}

export default Header;
