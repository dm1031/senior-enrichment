import React from "react";
import { Link } from "react-router-dom";

const Nav = ({ location }) => {
  return (
    <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link
            to="/"
            className={
              location.pathname === "/" ? "nav-link active" : "nav-link"
            }
          >
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/campuses"
            className={
              location.pathname === "/campuses" ? "nav-link active" : "nav-link"
            }
          >
            Campuses
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/students"
            className={
              location.pathname === "/students" ? "nav-link active" : "nav-link"
            }
          >
            Students
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
