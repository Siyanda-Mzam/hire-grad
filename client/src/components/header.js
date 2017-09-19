import React from 'react';
import logo from '../../res/images/logo.gif';

const Header = () => (
  <nav className="top-nav fixed transparent-scroll transparent" data-scroll-element=".how-it-works">
    <div className="u-container u-pad-h top-nav-container">
      <i className="mobile-trigger ion-navicon-round"></i>
      <a className="top-nav-logo" href="#"></a>
      <div className="nav-items">
          <a href="/candidate/siyanda-mzam/dashboard">Graduate</a>
          <a href="/candidate/siyanda-mzam">Employer</a>
          <a href="/candidate/siyanda-mzam/interview_requests">Sign In</a>
          <a href="/candidate/siyanda-mzam/referrals?s=top_nav" className="buttonify">Sign Up</a>
      </div>
    </div>
  </nav>
);

export default Header;
