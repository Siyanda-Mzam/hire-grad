import React from 'react';
import Nav from './nav';
const Hero = () => (
  <section className="hero is-primary is-large header-image">
    <Nav />
    <div className="hero-body">
      <div className="container ">
        <h1 className="title is-2">
          Become a professional in the field of your dreams
        </h1>
        <h2 className="subtitle is-5">
          Get in touch with more than 500 companies and institutions looking for your genuis
        </h2>
        <p>
          <a className="button is-outlined">
            <span>
              Get started
            </span>
          </a>
        </p>
      </div>
    </div>
  </section>
);
export default Hero;
