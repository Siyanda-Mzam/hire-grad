import React from 'react';

const Hero = () => (
<section className="hero">
  <div className="container u-container u-pad-section">
    <div className="u-flex-grid">
      <div className="u-flex-item hero-text">
        <div className="inner">
          <h1>Get your dream job</h1>
          <h2>Receive offers with upfront salary from 500+ South African institutions</h2>
          <form className="apply-form" action="/candidate_lead" acceptCharset="UTF-8" method="post" noValidate="">
            <input name="utf8" type="hidden" value="✓" />
            <input type="hidden" name="authenticity_token" value="" />
            <input type="text" name="email" id="email" placeholder="Email address" data-parsley-id="4" />
            <input type="submit" name="commit" value="Get started" className="button button-primary button-input-size" />
          </form>
        </div>
      </div>
    </div>
  </div>
</section>
);
export default Hero;
