export const SET_TEXT = 'SET_TEXT';
export const SET_PASSWORD = 'SET_PASSWORD';

export const setText = (text) => ({
  type: SET_TEXT,
  payload: text
});

export const setPassword = (password) => ({
  type: SET_PASSWORD,
  payload: password
});