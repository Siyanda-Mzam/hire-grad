import { connect } from 'react-redux';
import { previewItem } from '../actions/list_actions';
import Employer from '../components/employer/employer';

const mapStateToProps = state => ({
  item: state.list.items.EMPLOYER,
  howItWorks: state.list.items.HOW.EMPLOYER,
  user: state.user.person_info.name
});

export default connect(mapStateToProps)(Employer);
