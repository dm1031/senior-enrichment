import React from "react";
import { Link } from "react-router-dom";

const Nav = ({ location }) => {
  const links = [
    {
      path: "/campuses",
      title: "Home"
    },
    {
      path: "/students",
      title: "Students"
    }
  ];
  return (
    <ul className="nav nav-tabs">
      {links.map(link => (
        <Link
          to={link.path}
          className={
            location.pathname === link.path ? "nav-link active" : "nav nav-link"
          }
          key={link.id}
        >
          {link.title}
        </Link>
      ))}
    </ul>
  );
};

export default Nav;
