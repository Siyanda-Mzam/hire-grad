import React, { Component } from 'react';

class Skills extends Component {
  render() {
    return (
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
              {this.props.parentProps.isEdit ? <a href="#" className="card-footer-item">Save</a> : ''}
            </footer>
          </div>
        </div>
      </div>
    );
  }
}

export default Skills;
