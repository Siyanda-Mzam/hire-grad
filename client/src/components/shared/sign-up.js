import React, { Component } from 'react';
import SignUpBackgroundImage from '../../../res/images/signup.png';
import Nav from './nav';
import fire from '../../config/firebase';
import PropTypes from 'prop-types';
import  { Redirect } from 'react-router-dom'

export default class SignUp extends Component {

  constructor() {
    super();
    this.state = {
      full_name: '',
      email: '',
      role: '',
      password: '',
      isLoggedIn: false,
      user_key: ''
    }
  }
  signUp(e) {
    e.preventDefault();
    let ref = fire.database().ref("/"),
			keyFromEmail = this.state.email.replace('.', '-'),
			usersRef = ref.child(`users/${keyFromEmail}`),
			result = usersRef.set({
      	name: this.state.full_name,
        email: this.state.email,
        password: this.state.password,
				aboutMe: '',
				nextSteps: '',
				skillsSharp: ''
    	});
  }
  render() {
    if (!this.props.isLoggedIn) {
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
                      <input
                        className="input"
                        type="text"
                        placeholder="Brand New"
                        onChange={(e) => this.setState({ full_name: e.target.value })}
                      />
                    </p>
                    <label className="label">Email</label>
                      <p className="control">
                      <input
                        type="email"
                        className="input"
                        type="text"
                        placeholder="bnew@example.org"
                        onChange={(e) => this.setState({ email: e.target.value })}
                      />
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
                      <input
                        className="input"
                        type="password"
                        placeholder="●●●●●●●"
                        onChange={(e) => this.setState({ password: e.target.value })}
                      />
                    </p>
                    <label className="label">Confirm Password</label>
                    <p className="control">
                    <input className="input" type="password" placeholder="●●●●●●●"/>
                  </p>
                  <hr/>
                  <p className="control">
                    <button
                      onClick={(e) => this.signUp(e)}
                      className="button is-primary">
                      Let us do this
                    </button>
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
    else {
      return (

        <Redirect to={{
          pathname: "/dashboard",
          state: {
            data: this.state.user_key,
            email: this.state.email
          }
        }} />
      );
    }
  }
}
