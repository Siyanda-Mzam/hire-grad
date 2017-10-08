import { connect } from 'react-redux';
import SignIn from '../components/sign-in';

/*
This is a redux specific function.
What is does is: It gets the state specified in here from the global redux state.
For example, here we are retrieving the list of items from the redux store.
Whenever this list changes, any component that is using this list of item will re-render.
 */
const mapStateToProps = state => ({
  category: state.list.items.EMPLOYEE,
  howItWorks: state.list.items.HOW.EMPLOYEE
});

/*
This is a redux specific function.
http://redux.js.org/docs/api/bindActionCreators.html
 */
const mapDispatchToProps = dispatch => ({
  previewItem: (name) => {
    dispatch(previewItem(name));
  },
});


/*
Here we are creating a Higher order component
https://facebook.github.io/react/docs/higher-order-components.html
 */
export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
