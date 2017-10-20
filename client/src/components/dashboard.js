import React, { Component } from 'react';
import fire from '../config/firebase';
import Nav from './nav';
import Loader from './loader';

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasReceivedData: false,
      databaseSnapshot: null
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
        <div className="section">
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
                    <p className=""><i className="fa fa-map-marker"></i> Johannesburg</p>
                    <p className=""><i className="fa fa-graduation-cap"></i> Rhodes University</p>
                    <p className=""><i className="fa fa-money"></i> R34 000/month</p>
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
}

export default Dashboard;
