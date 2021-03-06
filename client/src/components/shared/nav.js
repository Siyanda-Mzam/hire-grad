import React from 'react';

const Nav = ({navStyle, isLoggedIn}) => (
  <div className="hero-head">
    <header className={navStyle ? navStyle + " nav" : "nav"}>
      <div className="container">
        <div className="nav-left">
          <a className="nav-item" href="/">
            <img src="" alt="Logo" />
          </a>
        </div>
        <span className="nav-toggle">
          <span></span>
          <span></span>
          <span></span>
        </span>
        <div className="nav-right nav-menu">
          <a href="/" className="nav-item is-active">
            Graduate
          </a>
          <a href="/employer" className="nav-item">
            Employer
          </a>
          { !isLoggedIn ?
            <a href="/sign-in" className="nav-item">
              Sign In
            </a> : <a href="/account" className="nav-item">
              Account
            </a>
          }
          {
            !isLoggedIn ?
            <span className="nav-item">
              <a href="/sign-up" className="button button is-outlined is-primary">
                <span>Sign Up</span>
              </a>
            </span> : <span className="nav-item">
              <a href="/" className="button button is-outlined is-primary">
                <span>Sign Out</span>
              </a>
            </span>
          }
        </div>
      </div>
    </header>
    </div>
);

export default Nav;
