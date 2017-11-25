import { connect } from 'react-redux';
import { updateProfileState, isUpdateFinished, editProfile, saveProfileUpdate,
setAboutMeText, setSkillsSharpText, setNextStepsText} from '../actions/profile_actions';
import Dashboard from '../components/dashboard';

/*
This is a redux specific function.
What is does is: It gets the state specified in here from the global redux state.
For example, here we are retrieving the list of items from the redux store.
Whenever this list changes, any component that is using this list of item will re-render.
 */
const mapStateToProps = state => ({
  ...state.profile,
});

/*
This is a redux specific function.
http://redux.js.org/docs/api/bindActionCreators.html
 */
const mapDispatchToProps = dispatch => ({
  updateProfileState: (profileEmail) => {
    dispatch(updateProfileState(profileEmail));
  },

  hasUpdatedSuccessfully: (predicate) => {
    dispatch(isUpdateFinished(predicate));
  },

  editProfile: (predicate) => {
    dispatch(editProfile(predicate));
  },

	saveProfileUpdate: (summary) => {
		dispatch(saveProfileUpdate(summary));
	},

	setAboutMeText: (text) => {
		dispatch(setAboutMeText(text));
	},

	setSkillsSharpText: (text) => {
		dispatch(setSkillsSharpText(text));
	},

	setNextStepsText: (text) => {
		dispatch(setNextStepsText(text));
	},
});


/*
Here we are creating a Higher order component
https://facebook.github.io/react/docs/higher-order-components.html
 */
export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
