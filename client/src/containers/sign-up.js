import { connect } from 'react-redux';
import SignUp from '../components/shared/sign-up';

const mapStateToProps = state => ({
  category: state.list.items.EMPLOYEE,
  howItWorks: state.list.items.HOW.EMPLOYEE
});

export default connect(mapStateToProps)(SignUp);
