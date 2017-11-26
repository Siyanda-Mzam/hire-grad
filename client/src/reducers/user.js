import { USER_ACTIONS } from '../consts/action_types';
import { CANDIDATE } from '../consts/default_state';
import fire from '../config/firebase';

export default (state = CANDIDATE, action) => {
  let newState = {...state};
  switch (action.type) {
    case USER_ACTIONS.LOGIN:
			newState ={
				...newState,
				isLoggingIn: true
			}
      break;
    case USER_ACTIONS.LOGGING_IN: {
      newState.session_status = {
        ...newState.session_status,
        isLoggingIn: action.isLoggingIn
      }
      break;
    }
    case USER_ACTIONS.LOGGED_IN: {
			let user = action.user,
					userFirstname = user.name.split[0],
					userLastname = user.name.split[1];
			newState.session_status = {
				...newState.session_status,
				isLoggingIn: false,
				isLoggedIn: true,
			};
			newState.person_info = {
				...newState.person_info,
				name: userFirstname,
				surname: userLastname,
				email: user.email,
				role: user.role
			}
      break;
    }
    case USER_ACTIONS.LOGOUT:
      break;
    case USER_ACTIONS.LOGGING_OUT:
      break
    case USER_ACTIONS.LOGGED_OUT:
      break
    case USER_ACTIONS.SIGNUP:
      break;
    case USER_ACTIONS.SIGNING_UP:
      break;
    default:
      return newState;
  }
  return newState;
}
