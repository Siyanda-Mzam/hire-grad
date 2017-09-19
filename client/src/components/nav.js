import React from 'react';
import logo from '../../res/images/logo.gif';

const Nav = () => (
  <div className="container navbar">
      <nav className="is-pulled-right" data-scroll-element=".how-it-works">
          <ul className="nav-items tabs">
              <li className="nav-item is-size-5"><a href="/candidate/siyanda-mzam/dashboard">Graduate</a></li>
              <li className="nav-item is-size-5"><a href="/candidate/siyanda-mzam">Employer</a></li>
              <li className="nav-item is-size-5"><a href="/candidate/siyanda-mzam/interview_requests">Sign In</a></li>
              <li className="nav-item is-size-5"><a className="navbar-item box" href="/candidate/siyanda-mzam/referrals?s=top_nav">Sign Up</a></li>
          </ul>
      </nav>
  </div>
);

export default Nav;
