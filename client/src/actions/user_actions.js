import { USER_ACTIONS } from '../consts/action_types';
import fetch from 'isomorphic-fetch';
import fire from '../config/firebase';

export const login = credentials => ({
  type: USER_ACTIONS.LOGIN,
  credentials
})

export const loggingIn = user => ({
  type: USER_ACTIONS.LOGGING_IN,
  user
})

export const loggedIn = user => ({
  type: USER_ACTIONS.LOGGED_IN,
  user
})

export const logout = user => ({
  type: USER_ACTIONS.LOGOUT,
  user
})

export const loggingOut = isLoggingIn => ({
  type: USER_ACTIONS.LOGGING_OUT,
  isLoggingIn
})

export const loggedOut = user => ({
  type: USER_ACTIONS.LOGGED_OUT,
  user
})

export const signUp = user => ({
  type: USER_ACTIONS.SIGN_UP,
  user
})

export const signingUp = user => ({
  type: USER_ACTIONS.SIGNING_UP,
  user
})

export const loginUserThunk = credentials => (dispatch, getState) => {
	dispatch(loggingIn(true));
	let ref = fire.database().ref("/").child("users");
	ref.orderByChild("email")
		.equalTo(credentials.email)
		.on("child_added", snapshot => {
			let user = snapshot.val();
			if (user.password === credentials.password) {
				dispatch(loggedIn(user))
			}
		});
 }
