import { connect } from 'react-redux';
import Hero from '../components/shared/hero';

function mapStateToProps(state) {
  return {
    item: state.list.items.EMPLOYEE,
  };
}

export default connect(mapStateToProps)(Hero);
