import { connect } from 'react-redux';
import { login,
	loggingIn,
	loggedIn,
	loginUserThunk
} from '../actions/user_actions';
import SignIn from '../components/shared/sign-in';

const mapStateToProps = state => ({
  category: state.list.items.EMPLOYEE,
  howItWorks: state.list.items.HOW.EMPLOYEE,
  ...state.user.session_status
});

const mapDispatchToProps = dispatch => ({
  login: (credentials) => {
    dispatch(loginUserThunk(credentials));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
