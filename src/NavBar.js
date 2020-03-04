import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css';
import TokenContext from './helpers/TokenContext';

function NavBar() {
  const {loggedIn} = useContext(TokenContext);

  return (
    <nav className="NavBar navbar navbar-expand-lg navbar-dark">
      <span className="NavBar-Jobly navbar-brand">
        <NavLink to="/">Jobly</NavLink>
      </span>
      {
        loggedIn
          ?
          <span className="NavBar-logged-in ml-auto">
            <NavLink to="/companies">Companies</NavLink>
            <NavLink to="/jobs">Jobs</NavLink>
            <NavLink to="/profile">Profile</NavLink>
            <NavLink to="/logout">Log out</NavLink>
          </span>
          :
          <span className="NavBar-log-in ml-auto">
            <NavLink to="/login">Log in/Sign up</NavLink>
          </span>
      }
    </nav>
  );
}

export default NavBar;
