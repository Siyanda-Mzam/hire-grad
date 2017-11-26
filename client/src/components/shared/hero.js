import React, { Component } from 'react';
import Nav from './nav';
import Loader from './loader';
import heroImageGrad from '../../../res/images/connectedcity.png';
import heroImageEmpl from '../../../res/images/employers.jpg';

class Hero extends Component {
  constructor() {
    super();
  }
  render() {
    const { item } = this.props;

    // To get around a bug in how webpack behaves when bundling react code, we will
    // get background images like this.
    const pathToBackgroundToRender =  item.type === "employer" ? heroImageEmpl : heroImageGrad;
    const style = {
      backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.49), rgba(0, 0, 0, 0.72)),\
      url(" + pathToBackgroundToRender + ")"
    }

    if (!item) {
      return (<div><Loader/></div>);
    }
    return (
      <section className="hero is-primary is-large header-image" style={style}>
        <Nav isLoggedIn={false}/>
        <div className="hero-body">
          <div id="hero-text" className="container ">
            <h1 className="title is-2">
              {item.heroTitle}
            </h1>
            <h2 className="subtitle is-5">
              {item.description}
            </h2>
            <p>
              <a href="/sign-up" className="button is-outlined is-primary">
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
