import React from 'react';
import navClasses from './Nav.module.css'

const Nav = () => {
  return (
    <nav className={navClasses.nav}>
        <div className={navClasses.item}>
          <a>Profile</a>
        </div>
        <div className={navClasses.item}>
          <a>Message</a>
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
  )
}

export default Nav