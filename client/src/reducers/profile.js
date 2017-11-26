import { PROFILE_ACTIONS } from '../consts/action_types';
import { PROFILE } from '../consts/default_state';

export default (state=PROFILE, action) => {
  let newState = { ...state };
  switch (action.type) {
		case PROFILE_ACTIONS.SET_ABOUT_ME_TEXT: {
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
			console.log("In reducer: ", action.payload);
			let data = action.payload;
			newState = {
				...newState,
				aboutMeText: data.aboutMe,
				nextStepsText: data.nextSteps,
				skillsSharpText: data.skillsSharp,
				name: data.name
			}
      break;
    }
		case PROFILE_ACTIONS.SAVE_PROFILE_UPDATE: {
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
