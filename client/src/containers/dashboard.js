import { connect } from 'react-redux';
import { updateProfileState,
	isUpdateFinished,
	editProfile,
	saveProfileUpdate,
	setAboutMeText,
	setSkillsSharpText,
	setNextStepsText,
	updateProfileAndReport
} from '../actions/profile_actions';
import Dashboard from '../components/candidate/dashboard';

const mapStateToProps = state => ({
  ...state.profile,
});

const mapDispatchToProps = dispatch => ({
  updateProfileState: snapshotData => {
    dispatch(updateProfileAndReport(snapshotData));
  },

  editProfile: predicate => {
    dispatch(editProfile(predicate));
  },

	saveProfileUpdate: summary => {
		dispatch(saveProfileUpdate(summary));
	},

	setAboutMeText: text => {
		dispatch(setAboutMeText(text));
	},

	setSkillsSharpText: text => {
		dispatch(setSkillsSharpText(text));
	},

	setNextStepsText: text => {
		dispatch(setNextStepsText(text));
	},
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
