import { SET_TEXT, SET_PASSWORD } from './actions';

const initialState = '';

export const textReducer = (state = initialState, action) => {
  switch(action.type) {
    case SET_TEXT:
      return action.payload
    default: return state;
  }
}

export const passwordReducer = (state = initialState, action) => {
  switch(action.type) {
    case SET_PASSWORD:
      return action.payload
    default: return state;
  }
}