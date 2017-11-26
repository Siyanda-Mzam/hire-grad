import React, { Component } from 'react';
import Nav from '../shared/nav';
import Summary from './summary';
import RolesInterestedIn from './roles';
import Header from './head';
import Skills from './skills';
import RoadMap from './roadmap';
import Loader from '../shared/loader';

class Dashboard extends Component {
  constructor() {
    super();
    this.saveProfileInfo = this.saveProfileInfo.bind(this);
  }
  componentDidMount() {
		const userEmail = this.props.history.location.state.email;
		this.props.updateProfileState(userEmail);
  }
  saveProfileInfo = () => {
		let summary = {
			aboutMeText: this.props.aboutMeText,
			skillsSharpText: this.props.skillsSharpText,
			nextStepsText: this.props.nextStepsText,
			userKey: this.props.history.location.state.email.replace('.', '-'),
		};
		this.props.saveProfileUpdate(summary);
  }
  render() {
    if (!this.props.hasReceivedData && !this.props.isUpdateFinished) {
      return (
        <div className="section">
          <div className="container section">
            <Loader/>
          </div>
        </div>
      );
    }
    else {
      return (
        <div>
          <Nav navStyle={"sign-up-nav-background-color"} isLoggedIn={this.props.hasReceivedData}/>
          <br/><br/>
          <Header parentProps={this.props} saveProfileUpdate={this.saveProfileUpdate} />
          <Summary parentProps={this.props} saveProfileInfo={this.saveProfileInfo} />
          <RolesInterestedIn parentProps={this.props} saveProfileInfo={this.saveProfileInfo} />
          <Skills parentProps={this.props} saveProfileInfo={this.saveProfileInfo} />
          <RoadMap parentProps={this.props} saveProfileInfo={this.saveProfileInfo} />
        </div>
      );
    }
  }
}

export default Dashboard;
