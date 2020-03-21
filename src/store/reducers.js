import { combineReducers } from 'redux';

import { textReducer, passwordReducer } from './form/reducers'

export default combineReducers({
  text: textReducer,
  password: passwordReducer
});