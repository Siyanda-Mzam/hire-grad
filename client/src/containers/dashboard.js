import { connect } from 'react-redux';
import { updateProfileState, setAboutMeText,
  setSkillsSharpText, setNextSteps, isUpdateFinished, editProfile
} from '../actions/profile_actions';
import Dashboard from '../components/dashboard';

/*
This is a redux specific function.
What is does is: It gets the state specified in here from the global redux state.
For example, here we are retrieving the list of items from the redux store.
Whenever this list changes, any component that is using this list of item will re-render.
 */
const mapStateToProps = state => ({
  ...state.profile,
  databaseSnapshot: state.databaseSnapshot ? state.databaseSnapshot : ""
});

/*
This is a redux specific function.
http://redux.js.org/docs/api/bindActionCreators.html
 */
const mapDispatchToProps = dispatch => ({
  updateProfileState: (profileEmail) => {
    dispatch(updateProfileState(profileEmail));
  },
  setAboutMeText: (text) => {
    dispatch(setAboutMeText(text));
  },
  setSkillsSharpText: (text) => {
    dispatch(setSkillsSharpText(text));
  },
  setNextSteps: (text) => {
    dispatch(setNextSteps(text));
  },
  isUpdateFinished: (predicate) => {
    dispatch(isUpdateFinished(predicate));
  },
  editProfile: (predicate) => {
    dispatch(editProfile(predicate));
  }
});


/*
Here we are creating a Higher order component
https://facebook.github.io/react/docs/higher-order-components.html
 */
export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
