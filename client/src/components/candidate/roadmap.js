import React, { Component } from 'react';
import Timeline from './timeline';

class RoadMap extends Component {
  render() {
    return (
      <div className="section roadmap">
        <div className="container">
          <div className="card">
          <header className="card-header">
            <p className="card-header-title">
              Roadmap
            </p>
          </header>
					<Timeline/>
            <footer className="card-footer">
              {
								this.props.parentProps.isEdit ?
								<a href="#" className="card-footer-item">Save</a> : ''
							}
            </footer>
          </div>
        </div>
      </div>
    );
  }
}

export default RoadMap;
