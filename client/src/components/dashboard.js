import React, { Component } from 'react';
import fire from '../config/firebase';


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
        <div>Loading</div>
      );
    }
    else {
      return (
        <div>
          <div>{props.state.data}</div>
          <div>{this.state.databaseSnapshot.name}</div>
          <div>{this.state.databaseSnapshot.email}</div>
          <div>{this.state.databaseSnapshot.password}</div>
        </div>
      );
    }
  }
}

export default Dashboard;
