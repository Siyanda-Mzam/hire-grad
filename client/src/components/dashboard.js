import React, { Component } from 'react';

class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
      hasReceivedData: false
    }
  }
  render() {
    const props = this.props.history.location.state;
    if (this.state.hasReceivedData) {
      return (
        <div>
          <div>{this.props.user_key}</div>
          <div>{props.data}</div>
        </div>
      );
    }
    else {
      return (
        <div>Loading</div>
      );
    }
  }
}

export default Dashboard;
