import React, { Component } from 'react';
import SignIn from './sign-in';

// Authorization HOC
const Authorization = (WrappedComponent, allowedRoles) => {
  alert("Yo")
  return class WithAuthorization extends Component {
    constructor(props) {
      alert("Alert");
      console.log(props);
      super(props)

      this.state = {
        user: {
          email: 'mail@ex.com',
          password: 'password',
          role: 'employer'
        }
      }
    }
    verifyCredentials(providedCreds) {
      const { role, email, password } = providedCreds;
      return allowedRoles.includes(password) && allowedRoles.includes(email)
    }
    render() {
      alert(JSON.stringify(this.state.user))
      if (this.verifyCredentials(this.state.user)) {
        alert("Correct");
        return <WrappedComponent {...this.props} />
      } else {
        alert("Incorrect")
        return <h1>You do not have a profile. Set it up</h1>
      }
    }
  }
}


export default Authorization;
