import { USER_ACTIONS } from '../consts/action_types';
import { CANDIDATE } from '../consts/default_state';
import fire from '../config/firebase';

export default (state = CANDIDATE, action) => {
  switch (action.type) {
    case USER_ACTIONS.LOGIN: {
      let ref = fire.database().ref("/").child("users");
      ref.orderByChild("email")
        .equalTo(action.credentials.email)
        .on("child_added", snapshot => {
          let user = snapshot.val();
          if (user.password === action.credentials.password) {
            state.session_status = {
              ...state.session_status,
              isLoggingIn: false,
              isLoggedIn: true,
            },
            state.person_info = {
              ...state.person_info,
              name: user.name.split(' ')[0], //First name
              surname: user.name.split(' ')[1], //Last Name
              email: user.email,
              role:user.role
            }
          }
          else {
            alert("NOOO");
          }
      });
      break;
    }
    case USER_ACTIONS.LOGGING_IN: {
      console.log("Logging in pending...", state.session_status.isLoggingIn);
      state.session_status = {
        ...state.session_status,
        isLoggingIn: true
      }
      console.log("Logging in pending...", state.session_status.isLoggingIn);
      break;
    }
    case USER_ACTIONS.LOGGED_IN:
      break;
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
      return state;
  }
  return state;
}
