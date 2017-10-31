import { combineReducers } from 'redux';
import list from './list';
import user from './user';
import profile from './profile';

const rootReducer = combineReducers({
  list, // shorthand for lists: lists
  user,
  profile
});

export default rootReducer;
