import { connect } from 'react-redux';
import CandidateHome from '../components/candidate/candidateHome';

const mapStateToProps = state => ({
  category: state.list.items.EMPLOYEE,
  howItWorks: state.list.items.HOW.EMPLOYEE
});

export default connect(mapStateToProps)(CandidateHome);
