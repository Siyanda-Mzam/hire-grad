import React, { Component } from 'react';

class RolesInterestedIn extends Component {
  render() {
    return (
      <div className="section roles-interestedin">
        <div className="container">
        <div className="card">
          <header className="card-header">
            <p className="card-header-title">
              Roles I am interested in
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
            </div>
          </div>
          <footer className="card-footer">
            {
              !this.props.parentProps.isReadOnly &&
                <span className="card-footer-item button is-primary is-outlined"
                  onClick={this.props.saveProfileInfo}>Save
                </span>
            }
          </footer>
        </div>
        </div>
      </div>
    );
  }
}

export default RolesInterestedIn;
