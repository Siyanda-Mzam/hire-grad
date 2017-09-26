import React, { Component } from 'react';

class ApplyNow extends Component {

  render() {
    return (
      <section className="section">
        <nav className="container">
          <div className=" has-text-centered">
            <p className="title">{this.props.applynow.ready}</p>
          </div>
          <div className="has-text-centered section">
            <a className="button is-primary is-outlined is-medium">{this.props.applynow.apply}</a>
          </div>
        </nav>
      </section>
    );
  }
}

export default ApplyNow;
