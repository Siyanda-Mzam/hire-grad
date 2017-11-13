import React, { Component } from 'react';

class Summary extends Component {
  render() {
    const border = {
      border: this.props.showBorder ? "1px solid" : "none"
    }
    return (
      <div className="section summary ">
        <div className="container">
        <div className="card">
          <header className="card-header">
            <p className="card-header-title">
              Summary
            </p>
            {
              this.props.parentProps.isReadOnly &&
              <span className="card-header-icon" aria-label="more options">
                <span className="button is-primary is-outlined" onClick={() => this.props.parentProps.editProfile(true)}>
                   Edit
                </span>
              </span>
            }
          </header>
          <div className="card-content">
            <div className="content">
              <p className="title is-5">About me</p>
              <textarea style={border} readOnly={this.props.parentProps.isReadOnly}
                autoFocus={!this.props.parentProps.isReadOnly} className="about_me"
                value={this.props.parentProps.aboutMeText}
                onChange={(e) => this.props.parentProps.setAboutMeText(e.target.value)}
              ></textarea>
              <p className="title is-5">How I stay on top of my game</p>
              <textarea style={border} readOnly={this.props.parentProps.isReadOnly}
                autoFocus={!this.props.parentProps.isReadOnly} className="skills_sharp"
                value={this.props.parentProps.skillsSharpText}
                onChange={(e) => this.props.parentProps.setSkillsSharpText(e.target.value)}
              ></textarea>
              <p className="title is-5">The future of my career path</p>
              <textarea style={border} readOnly={this.props.parentProps.isReadOnly}
                autoFocus={!this.props.parentProps.isReadOnly} className="next_steps"
                value={this.props.parentProps.nextStepsText}
                onChange={(e) => this.props.parentProps.setNextStepsText(e.target.value)}
              ></textarea>
            </div>
          </div>
          <footer className="card-footer">
            {
              !this.props.parentProps.isReadOnly &&
                <span
                  className="card-footer-item button is-primary is-outlined"
                  onClick={this.props.saveProfileInfo}>Save</span>
            }
          </footer>
        </div>
        </div>
      </div>
    );
  }
}

export default Summary
