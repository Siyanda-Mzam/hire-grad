import React, { Component } from 'react';
import SignUpBackgroundImage from '../../res/images/signup.png';
import Nav from './nav';

import { sendingRequest, register } from '../actions/AppActions';

export default class SignUp extends Component {
  render() {
    const style = {
      backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.49), rgba(0, 0, 0, 0.72)),\
      url(" + SignUpBackgroundImage + ")"
    }
    return (
      <section className="hero is-fullheight is-dark is-bold">
      <Nav navStyle={"sign-up-nav-background-color"}/>
    <div className="hero-body" style={style}>
      <div className="container">
        <div className="columns is-vcentered">
          <div className="column is-4 is-offset-4">
          <br/><br/><br/><br/><br/>
            <h1 id="hero-text" className="title">
              Welcome to the future
            </h1>
            <div className="box">
              <label className="label">Full Name</label>
              <p className="control">
                <input className="input" type="text" placeholder="Brand New" />
              </p>
              <label className="label">Email</label>
              <p className="control">
                <input className="input" type="text" placeholder="bnew@example.org"/>
              </p>
              <label className="label">I am</label>
              <div className="control select stretch-to-fit">
                <select className="">
                  <option className="input">a graduate</option>
                  <option>an employer</option>
                </select>
              </div>
              <hr/>
              <label className="label">Password</label>
              <p className="control">
                <input className="input" type="password" placeholder="●●●●●●●"/>
              </p>
              <label className="label">Confirm Password</label>
              <p className="control">
                <input className="input" type="password" placeholder="●●●●●●●"/>
              </p>
              <hr/>
              <p className="control">
                <button className="button is-primary">Let us do this</button>
              </p>
            </div>
            <p className="has-text-centered">
              <a href="/sign-in">If you already have an account click here to sign in</a>
            </p>
          </div>
        </div>
      </div>
    </div>

</section>
    );
  }
}
