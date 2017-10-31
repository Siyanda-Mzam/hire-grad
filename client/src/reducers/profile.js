import { PROFILE_ACTIONS } from '../consts/action_types';
import { PROFILE } from '../consts/default_state';
import fire from '../config/firebase';

export default (state=PROFILE, action) => {
  let newState = { ...state };
  console.log("Action involved: ", action);
  switch (action.type) {
    case PROFILE_ACTIONS.UPDATE_PROFILE: {
      let ref = fire.database().ref("/").child("users");
      ref.orderByChild("email")
        .equalTo(action.profileEmail)
        .on("child_added", snapshot => {
          let snapshotData = snapshot.val();
          newState = {
            ...newState,
            hasReceivedData: true,
            databaseSnapshot: snapshotData,
            key: snapshot.key,
            aboutMeText: snapshotData.aboutMe,
            skillsSharp: snapshotData.skillsSharp,
            nextSteps: snapshotData.nextSteps
          }
      });
      break;
    }
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
        skillsSharp: action.text
      }
      break;
    }
    case PROFILE_ACTIONS.SET_NEXT_STEPS: {
      newState = {
        ...newState,
        nextSteps: action.text
      }
      break;
    }
    case PROFILE_ACTIONS.UPDATE_FINISHED: {
      newState = {
        ...newState,
        isUpdateFinished: true,
        hasReceivedData:true
      }
      break;
    }
    case PROFILE_ACTIONS.EDIT_PROFILE: {
      console.log("Edit reducer: ", action);
      newState = {
        ...newState,
        isReadOnly: false,
        isEdit: true,
      }
      break;
    }
    default:
      return newState
  }
  return newState;
}
