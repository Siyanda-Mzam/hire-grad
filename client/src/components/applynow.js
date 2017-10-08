import React, { Component } from 'react';

const ApplyNow = ({ applynow }) => (
  <section className="section">
    <nav className="container">
      <div className=" has-text-centered">
        <p className="title">{applynow.ready}</p>
      </div>
      <div className="has-text-centered section">
        <a href="/sign-up" className="button is-primary is-outlined is-medium">{applynow.apply}</a>
      </div>
    </nav>
  </section>
);


export default ApplyNow;
