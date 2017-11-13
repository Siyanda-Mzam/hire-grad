import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
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
                  <p className="title is-4">{this.props.parentProps.databaseSnapshot.name}</p>
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
    );
  }
}

export default Header;
