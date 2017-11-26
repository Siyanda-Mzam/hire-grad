import { PROFILE_ACTIONS } from '../consts/action_types';
import fetch from 'isomorphic-fetch';
import fire from '../config/firebase';

export const updateProfileState = snapshotData => ({
  type: PROFILE_ACTIONS.UPDATE_PROFILE,
  payload: snapshotData
})

export const saveProfileUpdate = summary => ({
	type: PROFILE_ACTIONS.SAVE_PROFILE_UPDATE,
	summary:
	fire.database()
					.ref("/")
					.child(`users/${summary.userKey}`)
					.update({
						aboutMe: summary.aboutMeText,
						skillsSharp: summary.skillsSharpText,
						nextSteps: summary.nextStepsText,
					})
})
export const setNextStepsText = text => ({
  type: PROFILE_ACTIONS.SET_NEXT_STEPS_TEXT,
  text
})

export const setAboutMeText = text => ({
  type: PROFILE_ACTIONS.SET_ABOUT_ME_TEXT,
  text
})

export const setSkillsSharpText = text => ({
  type: PROFILE_ACTIONS.SET_SKILLS_SHARP_TEXT,
  text
})

export const isUpdateFinished = predicate => ({
  type: PROFILE_ACTIONS.UPDATE_FINISHED,
  predicate
})

export const editProfile = predicate => ({
  type: PROFILE_ACTIONS.EDIT_PROFILE,
  predicate
})

export const updateProfileAndReport = profileEmail => (dispatch, getState) => {
	let snap = fetch(
		`https://hire-grad.firebaseio.com/users/${profileEmail.replace('.','-')}.json`)
		.then(res => res.json())
		.then(snapshot => {
			console.log("Snapshot: ", snapshot);
			dispatch(updateProfileState(snapshot));
		})
		.then(() => dispatch(isUpdateFinished(true)))
		.catch(error => {
			let err = {
				errorCode: 404,
				errorMsg: error
			}
			return err;
		});
}
