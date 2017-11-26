import { connect } from 'react-redux';
import { login, loggingIn, loggedIn, loginUserThunk } from '../actions/user_actions';
import SignIn from '../components/sign-in';

/*
This is a redux specific function.

Gets the global redux state and passes it, as props, to the wrapped components
 */
const mapStateToProps = state => ({
  category: state.list.items.EMPLOYEE,
  howItWorks: state.list.items.HOW.EMPLOYEE,
  ...state.user.session_status
});

/*
This is a redux specific function.
http://redux.js.org/docs/api/bindActionCreators.html

Gets the redux dispatch function and passes it, as props, to the wrapped component
 */
const mapDispatchToProps = dispatch => ({
  login: (credentials) => {
    dispatch(loginUserThunk(credentials));
  }
});


/*
Here we are creating a Higher order component
https://facebook.github.io/react/docs/higher-order-components.html
 */
export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
