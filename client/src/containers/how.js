import { connect } from 'react-redux';
import HowWorks from '../components/shared/how';

function mapStateToProps(state) {
  return {
    how: state.list.items.HOW,
  };
}

export default connect(mapStateToProps)(HowWorks);
