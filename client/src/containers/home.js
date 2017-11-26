import { connect } from 'react-redux';
import Home from '../components/candidate/home';

const mapStateToProps = state => ({
  category: state.list.items.EMPLOYEE,
  howItWorks: state.list.items.HOW.EMPLOYEE
});

export default connect(mapStateToProps)(Home);
