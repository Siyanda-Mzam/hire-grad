import React, { Component } from 'react';
import fire from '../config/firebase';
import Nav from './nav';
import Loader from './loader';

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasReceivedData: false,
      databaseSnapshot: null,
      isEdit: false

    }
  }
  componentDidMount(props) {
    let ref = fire.database().ref("/").child("users");
    ref.orderByChild("email")
      .equalTo(this.props.history.location.state.email)
      .on("child_added", snapshot => {
      this.setState({
        hasReceivedData: true,
        databaseSnapshot: snapshot.val()
      })
    });
  }
  render() {

    const props = this.props.history.location;
    if (!this.state.hasReceivedData) {
      return (

        <div className="section"><div className="section"><Loader/></div>
          <br/><br/><br/>
          <br/><br/><br/>
          <br/><br/><br/>
          <br/><br/><br/>
          <br/><br/><br/>
          <br/><br/><br/>
          <br/><br/><br/>
          <br/><br/><br/>
          <br/><br/><br/>
          <br/><br/><br/>
          <br/><br/><br/>
          <br/><br/><br/>
          <br/><br/><br/>
          <br/><br/><br/>
          <br/><br/><br/>
          <br/><br/><br/>
        </div>
      );
    }
    else {
      return (

        <div>
        <Nav navStyle={"sign-up-nav-background-color"}/>
        <br/><br/>
        <div className="section head ">
          <div className="container">
            <div className="card">
              <div className="card-content">
                <div className="media columns position-media">
                  <div className="column is-2">
                    <figure className="image">
                      <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image" />
                    </figure>
                  </div>
                  <div className="media-content column is-7 center-xy-absolutely">
                    <p className="title is-4">{this.state.databaseSnapshot.name}</p>
                    <p className="">
                      <span className="icon "><i className="fa fa-map-marker"></i></span> Johannesburg
                      <i className="fa fa-pencil push-right"></i>
                    </p>
                    <p className="">
                      <span className="icon "><i className="fa fa-graduation-cap"></i></span>Rhodes University
                      <i className="fa fa-pencil push-right"></i>
                    </p>
                    <p className="">
                      <i className="fa fa-money"></i> R34 000/month
                      <i className="fa fa-pencil push-right"></i>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="section summary ">
          <div className="container">
          <div className="card">
            <header className="card-header">
              <p className="card-header-title">
                Summary
              </p>
              <a href="#" className="card-header-icon" aria-label="more options">
                <span className="icon">
                  <a>Edit</a>
                </span>
              </a>
            </header>
            <div className="card-content">
              <div className="content">
                <p className="title is-5">About me</p>
                <p className="about_me">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.</p>
                <p className="title is-5">How I stay on top of my game</p>
                <p className="about_me">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.</p>
                <p className="title is-5">The future of my career path</p>
                <p className="about_me">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.</p>
              </div>
            </div>
            <footer className="card-footer">
              {this.state.isEdit ? <a href="#" className="card-footer-item">Save</a> : ''}
            </footer>
          </div>
          </div>
        </div>

        <div className="section roles-interestedin">
          <div className="container">
          <div className="card">
            <header className="card-header">
              <p className="card-header-title">
                Roles I am interested in
              </p>
            </header>
            <div className="card-content">
              <div className="content">

              </div>
            </div>
            <footer className="card-footer">
              {this.state.isEdit ? <a href="#" className="card-footer-item">Save</a> : ''}
            </footer>
          </div>
          </div>
        </div>


        <div className="section skills">
          <div className="container">
          <div className="card">
            <header className="card-header">
              <p className="card-header-title">
                Skills
              </p>
            </header>
            <div className="card-content">
              <div className="content">
                  <div className="tags">
                    <span className="tag is-medium is-success">
                      Numerical Methods
                      <button className="delete is-small"></button>
                    </span>
                    <span className="tag is-medium is-success">
                      Algebra
                      <button className="delete is-small"></button>
                    </span>
                    <span className="tag is-medium is-success">
                      Topology
                      <button className="delete is-small"></button>
                    </span>
                    <span className="tag is-medium is-success">
                      Number Theory
                      <button className="delete is-small"></button>
                    </span>
                    <span className="tag is-medium is-success">
                      Differential Geometry
                      <button className="delete is-small"></button>
                    </span>
                    <span className="tag is-medium is-success">
                      Fluid Dynamics
                      <button className="delete is-small"></button>
                    </span>
                    <span className="tag is-medium is-success">
                      Functional Analysis
                      <button className="delete is-small"></button>
                    </span>
                    <span className="tag is-medium is-success">
                      Probability
                      <button className="delete is-small"></button>
                    </span>
                    <span className="tag is-medium is-success">
                      Harmonic Analysis
                      <button className="delete is-small"></button>
                    </span>
                    <span className="tag is-medium is-success">
                      Stochastic Calculus
                      <button className="delete is-small"></button>
                    </span>
                  </div>
              </div>
            </div>
            <footer className="card-footer">
              {this.state.isEdit ? <a href="#" className="card-footer-item">Save</a> : ''}
            </footer>
          </div>
          </div>
        </div>

        <div className="section roadmap">
          <div className="container">
          <div className="card">
            <header className="card-header">
              <p className="card-header-title">
                Roadmap
              </p>
            </header>
            <div className="card-content">
              <div className="content">
              <section id="conference-timeline">
                <div className="timeline-start">Start</div>
                  <div className="conference-center-line"></div>
                  <div className="conference-timeline-content">
                    <div className="timeline-article">
                      <div className="content-left-container">
                        <div className="content-left">
                          <p>
                            When I orbited the Earth in a spaceship, I saw for
                            the first time how beautiful our planet is. Mankind,
                            let us preserve and increase this beauty, and not
                            destroy it!
                            <span className="article-number">01</span>
                          </p>
                        </div>
                      </div>
                      <div className="content-right-container">
                        <div className="content-right">
                          <p>
                            When I orbited the Earth in a spaceship, I saw for
                            the first time how beautiful our planet is.
                            <span className="article-number">02</span>
                          </p>
                        </div>
                      </div>
                      <div className="meta-date">
                        <span className="date">2014</span>
                      </div>
                    </div>

                    <div className="timeline-article">
                      <div className="content-left-container">
                        <div className="content-left">
                          <p>
                            When I orbited the Earth in a spaceship, I saw for
                            the first time how beautiful our planet is. Mankind,
                            let us preserve and increase this beauty, and not
                            destroy it!
                            <span className="article-number">01</span>
                          </p>
                        </div>
                      </div>
                      <div className="content-right-container">
                        <div className="content-right">
                          <p>When I orbited the Earth in a spaceship, I saw for
                          the first time how beautiful our planet is.
                          <span className="article-number">02</span></p>
                        </div>
                      </div>
                      <div className="meta-date">
                        <span className="date">2015</span>
                      </div>
                    </div>

                    <div className="timeline-article">
                      <div className="content-left-container">
                        <div className="content-left">
                        <p>
                          When I orbited the Earth in a spaceship, I saw for
                          the first time how beautiful our planet is. Mankind,
                          let us preserve and increase this beauty, and not
                          destroy it!
                          <span className="article-number">01</span>
                        </p>
                        </div>
                      </div>
                      <div className="content-right-container">
                        <div className="content-right">
                          <p>
                            When I orbited the Earth in a spaceship, I saw for
                            the first time how beautiful our planet is.
                            <span className="article-number">02</span></p>
                        </div>
                      </div>
                      <div className="meta-date">
                        <span className="date">2016</span>
                      </div>
                    </div>
                  </div>
                <div className="timeline-end">End</div>
              </section>
            </div>
          </div>
          <footer className="card-footer">
            {this.state.isEdit ? <a href="#" className="card-footer-item">Save</a> : ''}
          </footer>
        </div>

      </div>
    </div>
  </div>
      );
    }
  }
}

export default Dashboard;
