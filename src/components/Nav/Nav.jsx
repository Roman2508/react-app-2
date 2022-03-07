import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Nav.module.css';

function Nav() {
  return (
    <nav className={classes.nav}>
      <ul className={classes.menu__list}>
        <li className={classes.menu__item}>
          <NavLink
            className={(navData) => (navData.isActive ? classes.active : classes.item)}
            to="/profile">
            Profile
          </NavLink>
        </li>
        <li className={classes.menu__item}>
          <NavLink
            className={(navData) => (navData.isActive ? classes.active : classes.item)}
            to="/messages">
            Messages
          </NavLink>
        </li>
        <li className={classes.menu__item}>
          <NavLink
            className={(navData) => (navData.isActive ? classes.active : classes.item)}
            to="/news">
            News
          </NavLink>
        </li>
        <li className={classes.menu__item}>
          <NavLink
            className={(navData) => (navData.isActive ? classes.active : classes.item)}
            to="/music">
            Music
          </NavLink>
        </li>
        <li className={classes.menu__item}>
          <NavLink
            className={(navData) => (navData.isActive ? classes.active : classes.item)}
            to="/settings">
            Settings
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
