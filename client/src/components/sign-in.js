import React, { Component } from 'react';
import SignInImage from '../../res/images/signup.png';
import Nav from './nav';
import Authorization from './candidate';
import Employer from './employer';
import Loader from './loader';
import  { Redirect } from 'react-router-dom'


export default class SignIn extends Component {

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      isLoggedIn: false,
      hasReceivedData: false,
      databaseSnapshot: null
    }


  }
  signIn(e) {
    e.preventDefault();
    this.props.loggingIn(true);
    this.props.login({
      email:this.state.email,
      password: this.state.password
    });
    // Set timeout because the above call queries firebase asynchronously
    // Prolly not the best solution because some networks are much slower.
    setTimeout(() => {
      this.props.loggedIn(this.state.email);
    }, 3000);
    return true
  }
  getEmailText(e) {
    this.setState({
      email: e.target.value
    })
  }
  getPasswordText(e) {
    this.setState({
      password: e.target.value
    })
  }
  render() {
    if (!this.props.isLoggedIn && !this.props.isLoggingIn) {
      const bg = {
      backgroundImage: "url( " + SignInImage + ")"
    }
      return (
      <div>
        <Nav navStyle="sign-up-nav-background-color"/>
        <div className="login-wrapper columns hero-banner-fit">
          <div className="column is-8 is-hidden-mobile hero-banner">
            <section className="hero is-fullheight" style={bg}>
              <div className="hero-body">
                <div className="container section">
                  <div className="has-text-right remove-back-color">
                    <h1 className="title is-1" id="hero-text">Sign in</h1> <br/>
                    <p className="title is-3">And thanks for being part of this growing family :)</p>
                  </div>
                </div>
              </div>
            </section>
          </div>
          <div className="column is-4">
            <section className="hero is-fullheight">
              <div className="hero-body">
                <div className="container">
                  <div className="columns">
                    <div className="column is-8 is-offset-2">
                      <h1 className="avatar has-text-centered section">
                        <img src="https://placehold.it/128x128"/>
                      </h1>
                      <div className="login-form">
                        <p className="control has-icon has-icon-right">
                          <input className="input email-input" type="text" placeholder="bnew@example.org" onChange={(e) => this.getEmailText(e)}/>
                          <span className="icon user">
                            <i className="fa fa-user"></i>
                          </span>
                        </p>
                        <p className="control has-icon has-icon-right">
                          <input className="input password-input" type="password" placeholder="●●●●●●●" onChange={(e) => this.getPasswordText(e)}/>
                          <span className="icon user">
                            <i className="fa fa-lock"></i>
                          </span>
                        </p>
                        <p className="control login">
                          <button className="button is-success is-outlined is-large is-fullwidth" onClick={(e) => this.signIn(e)}>Sign In</button>
                        </p>
                      </div>
                      <div className="section forgot-password">
                        <p className="has-text-centered">
                          <a href="#">Forgot password?</a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    );
    }
    else if (this.props.isLoggingIn && !this.props.isLoggedIn) {
      return (
        <Loader/>
      )
    }
    return (
      <Redirect to={{
        pathname: "/dashboard",
        state: {
          email: this.state.email
        }
      }} />
    );
  }
}
