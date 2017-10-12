import React, { Component } from 'react';

class Dashboard extends Component {
  render() {
    console.log(this.props.to);
    console.log(this.props.history.location.state);
    const props = this.props.history.location.state;
    return (
      <div>
        <div>{this.props.user_key}</div>
        <div>{props.data}</div>
      </div>
    );
  }
}

export default Dashboard;
