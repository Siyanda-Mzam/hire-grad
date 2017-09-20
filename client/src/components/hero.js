import React from 'react';
import Nav from './nav';
const Hero = () => (
  <section className="hero is-primary is-large header-image">
    <Nav />
    <div className="hero-body">
      <div className="container ">
        <h1 className="title is-2">
          Improve your career prospects in the field of your dreams
        </h1>
        <h2 className="subtitle is-5">
          Sign up and get interview requests from more than 500 companies and institutions with an upfront salary offer.
        </h2>
        <p>
          <a className="button is-outlined is-primary">
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
