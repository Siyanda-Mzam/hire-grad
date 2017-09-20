import React from 'react';
import logo from '../../res/images/logo.gif';

const Nav = () => (
  <div className="container">
    <nav className="nav container">
      <div className="nav-left">
        <a href="" className="nav-item">
          <h1 className="title is-4">Higher A Graduate</h1>
        </a>
      </div>
      <div className="nav-right nav-menu">
        <a href="#" className="nav-item">Graduate</a>
        <a href="#" className="nav-item">Employer</a>
        <a href="#" className="nav-item">Sign In</a>
        <div className="nav-item"><a href="#" className="button is-info is-outlined">Sign Up</a></div>
      </div>
    </nav>
  </div>
);

export default Nav;
