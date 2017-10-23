import { combineReducers } from 'redux';
import list from './list';
import user from './user';

const rootReducer = combineReducers({
  list, // shorthand for lists: lists
  user
});

export default rootReducer;
