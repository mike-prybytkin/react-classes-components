import React from 'react';
import { NavLink } from 'react-router-dom';

class NavBar extends React.Component {
  render() {
    return (
      <nav className="navbar">
        <ul className="navbar__items">
          <li className="navbar__item">
            <NavLink className="navbar__link" to="/" end>
              Home
            </NavLink>
          </li>
          <li className="navbar__item">
            <NavLink className="navbar__link" to="/about">
              About
            </NavLink>
          </li>
        </ul>
      </nav>
    );
  }
}

export default NavBar;
