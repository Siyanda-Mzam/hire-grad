import React, { Component } from 'react';

class HowWorks extends Component {
  render() {
    return (
      <div className="section">
        <div className="container">
          <div className="">
            <nav className="level">
              <div className="level-item">
                <p className="title">How it works</p>
              </div>
            </nav>
          </div>

          <div className="container section">
            <div className="columns">
              <div className="column is-3">
                <div className="panel">
                  <div className="panel-block">
                    <p className="has-text-centered"><i className="fa fa-id-card-o icon-block"></i></p>
                    <br/>
                    <p className="has-text-centered">{this.props.howItWorks.create}</p>
                    <br/>
                  </div>
                </div>
              </div>

          <div className="column is-3">
            <div className="panel">
              <div className="panel-block">
                <p className="has-text-centered"><i className="fa fa-calendar-check-o icon-block"></i></p>
                <br/>
                <p className="has-text-centered">{this.props.howItWorks.browse}</p>
                <br/>
              </div>
            </div>
          </div>

          <div className="column is-3">
            <div className="panel">
              <div className="panel-block">
                <p className="has-text-centered"><i className="fa fa-money icon-block" aria-hidden="true"></i></p>
                <br/>
                <p className="has-text-centered">{this.props.howItWorks.interview}</p>
                <br/>
              </div>
            </div>
          </div>

          <div className="column is-3">
            <div className="panel">
              <div className="panel-block">
                <p className="has-text-centered"><i className="fa fa-rocket icon-block"></i></p>
                <br/>
                <p className="has-text-centered">{this.props.howItWorks.grow}</p>
                <br/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
    );
  }
}

export default HowWorks;
