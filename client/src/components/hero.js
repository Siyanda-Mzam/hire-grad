import React, { Component } from 'react';
import Nav from './nav';

class Hero extends Component {
  constructor() {
    super();
  }
  render() {
    const { item } = this.props;
    console.log(this.props);

    if (!item) {
      return (<div>Nothing, dude</div>);
    }
    const classes = "hero is-primary is-large header-image " + item.classImage;
    return (
      <section className={classes}>
        <Nav />
        <div className="hero-body">
          <div id="hero-text" className="container ">
            <h1 className="title is-2">
              {item.name}
            </h1>
            <h2 className="subtitle is-5">
              {item.description}
            </h2>
            <p>
              <a className="button is-outlined is-primary">
                <span>
                  {item.start}
                </span>
              </a>
            </p>
          </div>
        </div>
      </section>);
  }
}

export default Hero;
