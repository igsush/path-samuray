import React from "react";
import { NavLink } from "react-router-dom";
import navClasses from "./Nav.module.css";

const Nav = () => {
  return (
    <nav className={navClasses.nav}>
      <div className={navClasses.item}>
        <NavLink
          extract
          to="/profile"
          className={({ isActive }) =>
            isActive ? navClasses.activeLink : undefined
          }
        >
          Profile
        </NavLink>
      </div>
      <div className={navClasses.item}>
        <NavLink
          to="/dialogs"
          className={({ isActive }) =>
            isActive ? navClasses.activeLink : undefined
          }
        >
          Message
        </NavLink>
      </div>
      <div className={navClasses.item}>
        <a>News</a>
      </div>
      <div className={navClasses.item}>
        <a>Music</a>
      </div>
      <div className={navClasses.item}>
        <a>Settings</a>
      </div>
    </nav>
  );
};

export default Nav;
