import { combineReducers } from 'redux';
import list from './list';
import { homeReducer } from './signin';

const rootReducer = combineReducers({
  list, // shorthand for lists: lists
  homeReducer
});

export default rootReducer;
