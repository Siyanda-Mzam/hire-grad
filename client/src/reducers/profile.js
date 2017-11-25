import { PROFILE_ACTIONS } from '../consts/action_types';
import { PROFILE } from '../consts/default_state';
import fire from '../config/firebase';
import fetch from 'isomorphic-fetch';

export default (state=PROFILE, action) => {
  let newState = { ...state };
  switch (action.type) {
		case PROFILE_ACTIONS.SET_ABOUT_ME_TEXT: {
			console.log("In set about me: ", action);
			newState = {
				...newState,
				aboutMeText: action.text
			}
			break;
		}
		case PROFILE_ACTIONS.SET_SKILLS_SHARP_TEXT: {
			newState = {
				...newState,
				skillsSharpText: action.text
			}
			break;
		}
		case PROFILE_ACTIONS.SET_NEXT_STEPS_TEXT: {
			newState = {
				...newState,
				nextStepsText: action.text
			}
			break;
		}
    case PROFILE_ACTIONS.UPDATE_PROFILE: {
			let profileEmail = action.profileEmail.replace('.', '-');
			fetch(`https://hire-grad.firebaseio.com/users/${profileEmail}.json`)
			 	.then(res => res.json())
				.then(snapshot => {
					let snapshotData = snapshot;
					console.log("Before state mutation", newState);
					newState = {
						...newState,
						hasReceivedData: true,
						databaseSnapshot: snapshotData,
						userKey: snapshot.key,
						aboutMeText: snapshotData.aboutMe,
						nextStepsText: snapshotData.nextSteps,
						skillsSharpText: snapshotData.skillsSharp,
					}
					console.log("After state mutation", newState);

				})
				.catch(error => {
					let err = {
						errorCode: 404,
						errorMsg: error
					}
					throw err;
				});
      break;
    }
		case PROFILE_ACTIONS.SAVE_PROFILE_UPDATE: {
			fire.database()
				.ref("/")
				.child(`users/${action.summary.userKey}`)
				.update({
					aboutMe: action.summary.aboutMeText,
					skillsSharp: action.summary.skillsSharpText,
					nextSteps: action.summary.nextStepsText,
				});
				newState = {
					...newState,
					isReadOnly: true,
					isEdit: false
				}
			break;
		}
    case PROFILE_ACTIONS.UPDATE_FINISHED: {
      newState = {
        ...newState,
        isUpdateFinished: action.predicate,
        hasReceivedData: action.predicate,
      }
      break;
    }
    case PROFILE_ACTIONS.EDIT_PROFILE: {
      newState = {
        ...newState,
        isReadOnly: false,
        isEdit: action.predicate,
      }
      break;
    }
    default:
      break
  }
  return newState;
}
