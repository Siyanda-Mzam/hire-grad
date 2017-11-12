import { PROFILE_ACTIONS } from '../consts/action_types';
import { PROFILE } from '../consts/default_state';
import fire from '../config/firebase';

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
			fire.database()
			.ref("/")
			.child("users")
      .orderByChild("email")
      .equalTo(action.profileEmail)
      .on("child_added", snapshot => {
        let snapshotData = snapshot.val();
        newState = {
          ...newState,
          hasReceivedData: true,
          databaseSnapshot: snapshotData,
          userKey: snapshot.key,
          aboutMeText: snapshotData.aboutMe,
					nextStepsText: snapshotData.nextSteps,
          skillsSharpText: snapshotData.skillsSharp,
        }
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
        isUpdateFinished: true,
        hasReceivedData:true,
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
