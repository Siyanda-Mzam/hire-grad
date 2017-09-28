import React, { Component } from 'react';

class HowWorks extends Component {

  howItWorks = () => {
    const applicationSteps = [
      this.props.howItWorks.create,
      this.props.howItWorks.browse,
      this.props.howItWorks.interview,
      this.props.howItWorks.grow
    ];
    const applicationStepsIcons = [
      "fa fa-id-card-o icon-block",
      "fa fa-calendar-check-o icon-block",
      "fa fa-rocket icon-block",
      "fa fa-money icon-block",
    ];
    const renderedApplicationSteps = [];
    for (let i = 0; i < applicationSteps.length; i++) {
      renderedApplicationSteps.push(
        <div key={Math.random() + i / 4 } className="column is-3">
          <div className="panel">
            <div className="panel-block">
              <p className="has-text-centered"><i className={applicationStepsIcons[i]}></i></p>
              <br/>
              <p className="has-text-centered">{applicationSteps[i]}</p>
              <br/>
            </div>
          </div>
        </div>
      );
    }
    return renderedApplicationSteps;
  }
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
              {this.howItWorks()}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default HowWorks;
