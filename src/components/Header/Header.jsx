import React from "react";
import { NavLink } from "react-router-dom";
import HeaderClasses from "./Header.module.css";

const Header = (props) => {
  return (
    <header className={HeaderClasses.header}>
      <img src="https://www.logodesign.net/images/illustration-logo.png"></img>
      <div className={HeaderClasses.loginBlock}>
        {props.isAuth ? props.login : <NavLink to={"/login"}>Login</NavLink>}
      </div>
    </header>
  );
};

export default Header;
