import React from 'react';

const Footer = () => (
  <footer className="footer">
  <div className="container">
    <div className="content has-text-centered">
      <div className="container">

        <div className="columns">

          <div className="column is-3">
            <p><strong>Graduate</strong></p>
          </div>
          <div className="column is-3">
            <p><strong>Employer</strong></p>
          </div>

          <div className="column is-3">
            <p><strong>GenZ</strong></p>
          </div>

          <div className="column is-3">
            <p><strong>Follow Us</strong></p>
          </div>

        </div>
      </div>
      <p>
        <a className="icon" href="https://github.com/jgthms/bulma">
          <i className="fa fa-github"></i>
        </a>
      </p>
    </div>
  </div>
</footer>
);

export default Footer;
