import React from 'react';

const Nav = () => (
  <div className="hero-head">
    <header className="nav">
      <div className="container">
        <div className="nav-left">
          <a className="nav-item" href="../index.html">
            <img src="" alt="Logo" />
          </a>
        </div>
        <span className="nav-toggle">
          <span></span>
          <span></span>
          <span></span>
        </span>
        <div className="nav-right nav-menu">
          <a className="nav-item is-active">
            Graduate
          </a>
          <a className="nav-item">
            Employer
          </a>
          <a className="nav-item">
            Sign In
          </a>
          <span className="nav-item">
            <a className="button is-info is-outlined is-inverted">
              <span>Sign Up</span>
            </a>
          </span>
        </div>
      </div>
    </header>
    </div>
);

export default Nav;
